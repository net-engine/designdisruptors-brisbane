"use strict";function _classCallCheck(i,a){if(!(i instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function i(i,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}return function(a,e,t){return e&&i(a.prototype,e),t&&i(a,t),a}}();window.onload=function(){var i=document.getElementById("canvas"),a=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight,setTimeout(function(){window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(i){window.setTimeout(i,1e3/60)};var e=document.createElement("canvas"),t=e.getContext("2d"),h=window.innerWidth/1400,o=9.8,n=.94,l=360,m=9,s={x:0,y:0};window.onmousemove=function(a){var t=e.getBoundingClientRect();s.x=(a.clientX-t.left)/h,s.y=(a.clientY-t.top)/h-i.offsetTop/h};var c=0;window.onscroll=function(){c=document.body.scrollTop/200};var r=!1;document.getElementById("button").onclick=function(i){i.preventDefault(),r=!r};var w=[],d=function(){function i(){var a=arguments.length<=0||void 0===arguments[0]?0:arguments[0],e=arguments.length<=1||void 0===arguments[1]?0:arguments[1];_classCallCheck(this,i),this.x=a,this.y=e,this.fx=0,this.fy=0,this.ox=a,this.oy=e,this.radius=4,this.size=.2,this.hue=l+~~(60*Math.random()),this.force=Math.random();var t=800;this.rx=a+~~(-(t/2)+t*Math.random()),this.ry=e+~~(-(t/2)+t*Math.random()),this.opacity=.8}return _createClass(i,[{key:"draw",value:function(i){i.fillStyle=this.size>.4?"hsla("+(this.hue+180)%360+", 100%, 66%, "+this.opacity+")":"hsla("+this.hue+", "+100*this.size+"%, 66%, "+this.opacity+")";var a=this.radius+10*-this.size;i.fillRect(this.x-a/2,this.y-a/2,a,a)}}]),i}(),u=new window.Image;u.onload=function(){var l=e.height/e.width,K=5*l;e.width=.2*u.width+2*K,e.height=.2*u.height+2*K,t.drawImage(u,K,K,e.width-K,e.height-K);var M,y,p,E=t.getImageData(0,0,e.width,e.height).data,R=0;for(p=0;p<e.height;p++)for(y=0;y<e.width;y++)M=E[4*(e.width*p+y)+3],M>90&&y>R&&(R=y);var C=(i.width/h-R*m)/2-m;for(p=0;p<e.height;p++)for(y=0;y<e.width;y++)M=E[4*(e.width*p+y)+3],M>90&&w.push(new d(C+y*m,m+p*m));i.style.opacity=1,a.scale(h,h),function F(){a.scale(1/h,1/h),a.fillStyle="rgba(255, 255, 255, 0.5)",a.fillRect(0,0,i.width,i.height),a.scale(h,h);var t,l,d,u;w.forEach(function(w){if(s.x&&s.y){var K=s.x+(-200+400*Math.random()),M=s.y+(-200+400*Math.random());t=w.x-K,l=w.y-M,d=Math.sqrt(t*t+l*l),200>d&&(u=o*(2*w.radius*1e3)/Math.pow(d,2),u=Math.min(u,1)*w.force,w.fx-=t/d*u,w.fy-=l/d*u)}var y=i.width/2/h+(-200+400*Math.random()),p=e.height*h*m*1.4;if(t=w.x-y,l=w.y-p,d=Math.sqrt(t*t+l*l),!r&&200>d&&(u=o*(2*w.radius*1e3)/Math.pow(d,2),u=Math.min(u,.3)*w.force,r||(u*=c),w.fx-=t/d*u,w.fy-=l/d*u),t=w.x-(r?w.rx:w.ox),l=w.y-(r?w.ry:w.oy),d=Math.sqrt(t*t+l*l),w.size=Math.min(1,d/60),r){var E=w.x-w.ox,R=w.y-w.oy,C=Math.sqrt(E*E+R*R);w.opacity=Math.min(1,Math.max(0,10/C))}else w.opacity=Math.min(1,.3+.1*w.size);d&&(u=r?Math.min(d/600,.05):Math.min(d/200,1.2),w.fx-=t/d*u,w.fy-=l/d*u),w.x+=w.fx,w.y+=w.fy,w.fx*=n,w.fy*=n,w.draw(a)}),window.requestAnimFrame(F)}()},u.src="data:image/png;base64,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"},1200)};