"use strict";function playVideo(){var e=document.querySelector("iframe.video");e.style.visibility="visible",e.style.opacity=1,setTimeout(function(){window.$f(e).api("play")},100)}window.showMenu=function(){document.getElementsByClassName("js-menu")[0].classList.add("transformY-0"),document.body.classList.add("overflow-hidden")},window.hideMenu=function(){document.getElementsByClassName("js-menu")[0].classList.remove("transformY-0"),document.body.classList.remove("overflow-hidden")},window.addEventListener("load",function(){function e(e,t){function n(e){i=e-o,window.scrollTo(0,function(e,t,n,o){return e/=o/2,1>e?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}(i,c,l,t)),t>i?window.requestAnimationFrame(n):window.scrollTo(0,c+l)}var o,i,c=window.pageYOffset,l="string"==typeof e?document.querySelector(e).getBoundingClientRect().top:e;window.requestAnimationFrame(function(e){o=e,n(e)})}window.addEventListener("scroll",function t(){var e=document.querySelector(".video-bg").getBoundingClientRect(),n=0,o=e.top-n,i=100/Math.abs(o);return document.querySelector(".video-title").style.opacity=i,document.querySelector(".play-button").style.opacity=2*i,document.getElementById("menu").classList.toggle("js-scrolled",window.pageYOffset||document.documentElement.scrollTop),document.getElementById("js-header-button").classList.toggle("transformY-0",window.pageYOffset||document.documentElement.scrollTop),t}()),document.querySelector(".play-button").onclick=playVideo,document.querySelectorAll(".scroll-link a").forEach(function(t){t.onclick=function(n){n.preventDefault(),e('[name="'+t.href.split("#")[1]+'"]',1e3)}}),document.getElementById("button").addEventListener("click",function(t){t.preventDefault(),setTimeout(function(){e('[name="watch-the-trailer"]',1200),playVideo()},window.innerWidth<=600?0:800)})},!1);