"use strict";window.showMenu=function(){document.getElementsByClassName("js-menu")[0].classList.add("transformY-0"),document.body.classList.add("overflow-hidden")},window.hideMenu=function(){document.getElementsByClassName("js-menu")[0].classList.remove("transformY-0"),document.body.classList.remove("overflow-hidden")},window.addEventListener("load",function(){function e(e,n){function t(e){s=e-o,window.scrollTo(0,function(e,n,t,o){return e/=o/2,1>e?t/2*e*e+n:(e--,-t/2*(e*(e-2)-1)+n)}(s,d,i,n)),n>s?window.requestAnimationFrame(t):window.scrollTo(0,d+i)}var o,s,d=window.pageYOffset,i="string"==typeof e?document.querySelector(e).getBoundingClientRect().top:e;window.requestAnimationFrame(function(e){o=e,t(e)})}window.addEventListener("scroll",function n(){return document.getElementById("menu").classList.toggle("js-scrolled",window.pageYOffset||document.documentElement.scrollTop),document.getElementById("js-header-button").classList.toggle("transformY-0",window.pageYOffset||document.documentElement.scrollTop),n}()),document.querySelectorAll(".scroll-link a").forEach(function(n){n.onclick=function(t){t.preventDefault(),e('[name="'+n.href.split("#")[1]+'"]',1e3)}})},!1);