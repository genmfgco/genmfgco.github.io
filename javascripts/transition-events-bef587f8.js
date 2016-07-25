/*
 * Copyright 2012 Andrey “A.I.” Sitnik <andrey@sitnik.ru>,
 * sponsored by Evil Martians.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function(t){"use strict";t.Transitions={_names:{transition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend"},_parseTimes:function(t){for(var n,i=t.split(/,\s*/),e=0;e<i.length;e++)n=i[e],i[e]=parseFloat(n),n.match(/\ds/)&&(i[e]=1e3*i[e]);return i},getEvent:function(){var t=!1;for(var n in this._names)if("undefined"!=typeof document.body.style[n]){t=this._names[n];break}return this.getEvent=function(){return t},t},animFrame:function(t){var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;return n?this.animFrame=function(t){return n.call(window,t)}:this.animFrame=function(t){return setTimeout(t,10)},this.animFrame(t)},isSupported:function(){return this.getEvent()!==!1}},t.extend(t.fn,{afterTransition:function(n,i){if("undefined"==typeof i&&(i=n,n=1),!t.Transitions.isSupported()){for(var e=0;e<this.length;e++)i.call(this[e],{type:"aftertransition",elapsedTime:0,propertyName:"",currentTarget:this[e]});return this}for(var e=0;e<this.length;e++){var r=t(this[e]),s=r.css("transition-property").split(/,\s*/),a=r.css("transition-duration"),o=r.css("transition-delay");a=t.Transitions._parseTimes(a),o=t.Transitions._parseTimes(o);for(var u,m,f,c,h,d=0;d<s.length;d++)u=s[d],m=a[1==a.length?0:d],f=o[1==o.length?0:d],c=f+m*n,h=m*n/1e3,function(n,e,r,s){setTimeout(function(){t.Transitions.animFrame(function(){i.call(n[0],{type:"aftertransition",elapsedTime:s,propertyName:e,currentTarget:n[0]})})},r)}(r,u,c,h)}return this},transitionEnd:function(n){for(var i=0;i<this.length;i++)this[i].addEventListener(t.Transitions.getEvent(),function(t){n.call(this,t)});return this}})}).call(this,jQuery);