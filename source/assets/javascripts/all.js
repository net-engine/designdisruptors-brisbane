function showMenu(e) {
  document.getElementsByClassName("js-menu")[0].classList.add("transformY-0");
  document.body.classList.add("overflow-hidden");
}

function hideMenu(e) {
  document.getElementsByClassName("js-menu")[0].classList.remove("transformY-0");
  document.body.classList.remove("overflow-hidden");
}

window.addEventListener('load', () => {
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

      window.scrollTo(0, easeInOutQuad(timeElapsed, start, distance, duration))

      if (timeElapsed < duration) {
        window.requestAnimationFrame(loop)
      } else end()
    }

    function end () {
      window.scrollTo(0, start + distance)
    }

    function easeInOutQuad (t, b, c, d) {
      t /= d / 2
      if (t < 1) {
        return c / 2 * t * t + b
      }
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }
  }

  document.querySelectorAll('.scroll-link a').forEach((link) => {
    link.onclick = (e) => {
      e.preventDefault()
      jump('[name="' + link.href.split('#')[1] + '"]', 1000)
    }
  })
}, false)
