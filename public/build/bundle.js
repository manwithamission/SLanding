!function(e){var n={};function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(o,l,function(n){return e[n]}.bind(null,l));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(3),t(1),t(2)},function(e,n){fetch("https://www.skyleap.ru:3050/news").then(e=>200!==e.status?Promise.reject(new Error(e.statusText)):Promise.resolve(e)).then(function(e){return e.json()}).then(function(e){let n=document.getElementById("news-content"),t=document.getElementById("news-nav-list__item1"),o=document.getElementById("news-nav-list__item2"),l=document.getElementById("news-nav-list__item3"),c=document.getElementById("news-nav-list__item4"),i=document.getElementById("news-nav-list__item5"),r=document.getElementById("news-nav-list__item6"),d=document.getElementById("news-nav-list__item7"),m=document.getElementById("news-nav-list__item8"),u=document.getElementById("news-nav-list__item9");function s(e){return newsarray=function(e){return e.map(e=>`<div class="news-block">\n                            <a target="_blank" href="${e.link}">\n                                <div class="img-block__image" style='background-image: url("${e.image}")'>                            \n                                    <div class="news-block__title" >\n                                        <h3>\n                                            ${e.title}\n                                        </h3>\n                                    </div>\n                                    <div class="logo-block">\n                                        <img src="${e.logo}" alt="">\n                                    </div>\n                                </div>\n                            </a>\n                        </div>`)}(e),n.innerHTML=newsarray.slice(0,10).join(""),newsarray}function a(e){var t=0;document.getElementById("load-button").onclick=(()=>{t+=10,n.innerHTML=n.innerHTML.concat(e.slice(t,t+10).join(""))})}a(s(e[0])),t.onclick=(()=>{a(s(e[0]))}),o.onclick=(()=>{a(s(e[4].concat(e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13])))}),l.onclick=(()=>{a(s(e[19].concat(e[32],e[43])))}),c.onclick=(()=>{a(s(e[3].concat(e[17],e[14],e[15],e[41],e[42],e[45])))}),i.onclick=(()=>{a(s(e[2].concat(e[50],e[44],e[46],e[47],e[56],e[57],e[58])))}),r.onclick=(()=>{a(s(e[24].concat(e[25],e[26],e[27],e[28],e[29],e[30],e[31])))}),d.onclick=(()=>{a(s(e[48].concat(e[49],e[1],e[33],e[34])))}),m.onclick=(()=>{a(s(e[35].concat(e[36])))}),u.onclick=(()=>{a(s(e[16].concat(e[18],e[20],e[21],e[22],e[23],e[37],e[38])))})}).catch(function(e){console.log("error",e)})},function(e,n){window.onload=(()=>{console.log("Документ и все ресурсы загружены");var e=document.getElementsByClassName("projects-content__title"),n=[document.getElementById("grid-project"),document.getElementById("grid-group"),document.getElementById("grid-patent")];n[0].style.display="grid";for(var t=0;t<e.length;t++)e[t].onclick=(e=>()=>{n[e].style.display="grid",0==e?(n[e+1].style.display="none",n[e+2].style.display="none"):1==e?(n[e+1].style.display="none",n[e-1].style.display="none"):2==e&&(n[e-1].style.display="none",n[e-2].style.display="none")})(t);var o=1,l=[document.getElementById("prev1"),document.getElementById("prev2"),document.getElementById("prev3")],c=[document.getElementById("next1"),document.getElementById("next2"),document.getElementById("next3")],i=[document.getElementById("prev4"),document.getElementById("prev5"),document.getElementById("prev6"),document.getElementById("prev7")],r=[document.getElementById("next4"),document.getElementById("next5"),document.getElementById("next6"),document.getElementById("next7")],d=[document.getElementById("prev8"),document.getElementById("prev9"),document.getElementById("prev10")],m=[document.getElementById("next8"),document.getElementById("next9"),document.getElementById("next10")];s(o,n[0]);for(t=0;t<l.length;t++)l[t].onclick=(()=>{u(-1,n[0])});for(t=0;t<c.length;t++)c[t].onclick=(()=>{u(1,n[0])});for(t=0;t<i.length;t++)i[t].onclick=(()=>{u(-1,n[1])});for(t=0;t<r.length;t++)r[t].onclick=(()=>{u(1,n[1])});for(t=0;t<d.length;t++)d[t].onclick=(()=>{u(-1,n[2])});for(t=0;t<m.length;t++)m[t].onclick=(()=>{u(1,n[2])});function u(e,n){s(o+=e,n)}function s(e,n){var t;console.log(n);var l=n.getElementsByClassName("block_content");for(console.log(e,l.length),e>l.length&&(o=1),e<1&&(o=l.length),t=0;t<l.length;t++)l[t].style.display="none";l[o-1].style.display="grid"}})},function(e,n){}]);