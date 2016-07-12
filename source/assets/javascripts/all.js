'use strict'

window.showMenu = function (e) {
  document.getElementsByClassName('js-menu')[0].classList.add('transformY-0')
  document.body.classList.add('overflow-hidden')
}

window.hideMenu = function (e) {
  document.getElementsByClassName('js-menu')[0].classList.remove('transformY-0')
  document.body.classList.remove('overflow-hidden')
}

window.addEventListener('scroll', (function scrolled () {
  document.getElementById('menu').classList.toggle(
    'js-scrolled',
    window.pageYOffset || document.documentElement.scrollTop
  )

  return scrolled
})())

window.addEventListener('load', function () {
  function jump (target, duration) {
    var start = window.pageYOffset

    var distance = typeof target === 'string'
      ? document.querySelector(target).getBoundingClientRect().top
      : target

    var timeStart
    var timeElapsed

    window.requestAnimationFrame(function (time) {
      timeStart = time
      loop(time)
    })

    function loop (time) {
      timeElapsed = time - timeStart

      window.scrollTo(0, (function easeInOutQuad (timeElapsed, start, distance, duration) {
        timeElapsed /= duration / 2

        if (timeElapsed < 1) {
          return distance / 2 * timeElapsed * timeElapsed + start
        }

        timeElapsed--

        return -distance / 2 * (timeElapsed * (timeElapsed - 2) - 1) + start
      })(timeElapsed, start, distance, duration))

      if (timeElapsed < duration) {
        window.requestAnimationFrame(loop)
      } else {
        window.scrollTo(0, start + distance)
      }
    }
  }

  document.querySelectorAll('.scroll-link a').forEach(function (link) {
    link.onclick = function (e) {
      e.preventDefault()
      jump('[name="' + link.href.split('#')[1] + '"]', 1000)
    }
  })
}, false)
