'use strict'

/* play vimeo */
function playVideo () {
  var video = document.querySelector('iframe.video')
  video.style.visibility = 'visible'
  video.style.opacity = 1

  setTimeout(function () {
    window.$f(video).api('play')
  }, 100)
}

/* scroll to element */
function jump (target, duration) {
  var start = window.pageYOffset

  var distance = typeof target === 'string'
    ? document.querySelector(target).getBoundingClientRect().top
    : target

  var timeStart

  window.requestAnimationFrame(function (time) {
    timeStart = time
    loop(time)
  })

  function loop (time) {
    var timeElapsed = time - timeStart

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

window.showMenu = function (e) {
  document.getElementsByClassName('js-menu')[0].classList.add('transformY-0')
  document.body.classList.add('overflow-hidden')
}

window.hideMenu = function (e) {
  document.getElementsByClassName('js-menu')[0].classList.remove('transformY-0')
  document.body.classList.remove('overflow-hidden')
}

window.addEventListener('load', function () {
  window.addEventListener('scroll', (function scrolled () {
    /* element fading */
    var rect = document.querySelector('.video-bg').getBoundingClientRect()

    var target = 0
    var offset = rect.top - target
    var opacity = 100 / Math.abs(offset)

    document.querySelector('.video-title').style.opacity = opacity
    document.querySelector('.play-button').style.opacity = opacity * 2

    /* sticky nav bar */
    document.getElementById('menu').classList.toggle(
      'js-scrolled',
      window.pageYOffset || document.documentElement.scrollTop
    )

    document.getElementById('js-header-button').classList.toggle(
      'transformY-0',
      window.pageYOffset || document.documentElement.scrollTop
    )

    return scrolled
  })())

  document.querySelector('.play-button').onclick = playVideo

  /* watch trailer button */
  document.getElementById('button').addEventListener('click', function (e) {
    e.preventDefault()

    setTimeout(function () {
      jump('[name="watch-the-trailer"]', 1200)
      playVideo()
    }, window.innerWidth <= 600 ? 0 : 800)
  })

  /* nav bar links */
  var links = document.querySelectorAll('.scroll-link a')

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {
      e.preventDefault()
      jump('[name="' + this.href.split('#')[1] + '"]', 1000)
    }
  }
}, false)
