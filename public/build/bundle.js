!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(4),n(1),n(2),n(3)},function(e,t){fetch("https://skyleap.ru:3050/news").then(e=>200!==e.status?Promise.reject(new Error(e.statusText)):Promise.resolve(e)).then(e=>e.json()).then(e=>{var t=document.getElementById("news-content"),n=document.getElementsByClassName("news-nav-list__item"),o=[e[0],e[4].concat(e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13]),e[19].concat(e[32],e[43]),e[3].concat(e[17],e[14],e[15],e[41],e[42],e[45]),e[2].concat(e[50],e[44],e[46],e[47],e[56],e[57],e[58]),e[24].concat(e[25],e[26],e[27],e[28],e[29],e[30],e[31]),e[48].concat(e[49],e[1],e[33],e[34]),e[35].concat(e[36]),e[16].concat(e[18],e[20],e[21],e[22],e[23],e[37],e[38])];function l(e){return newsarray=function(e){return e.map(e=>`<div class="news-block">\n                            <a target="_blank" href="${e.link}">\n                                <div class="img-block__image" style='background-image: url("${e.image}")'>                            \n                                    <div class="news-block__title" >\n                                        <h3>\n                                            ${e.title}\n                                        </h3>\n                                    </div>\n                                    <div class="logo-block">\n                                        <img src="${e.logo}" alt="">\n                                    </div>\n                                </div>\n                            </a>\n                        </div>`)}(e),t.innerHTML=newsarray.slice(0,9).join(""),newsarray}function r(e){var n=0;document.getElementById("load-button").onclick=(()=>{n+=10,t.innerHTML=t.innerHTML.concat(e.slice(n,n+10).join(""))})}n[0].style.backgroundColor="#008000",r(l(e[0])),Array.from(n).forEach((e,t)=>{e.onclick=(()=>{r(l(o[t])),Array.from(n).map((e,n)=>e.style.backgroundColor=t===n?"#008000":"#222")})})}).catch(function(e){console.log("error",e)})},function(e,t){window.onload=(()=>{console.log("Документ и все ресурсы загружены");var e=document.getElementsByClassName("projects-content__title"),t=document.getElementsByClassName("projects-content__title__link"),n=[document.getElementById("grid-project"),document.getElementById("grid-group"),document.getElementById("grid-patent")];n[0].style.display="grid",Array.from(e).forEach((e,o)=>{e.onclick=(()=>{Array.from(t).map((e,t)=>e.style.color=o!==t?"#adadad":"#fff"),n.map((e,t)=>e.style.display=o!==t?"none":"grid"),i(1,n[o])})});var o=1,l=[document.getElementById("prev1"),document.getElementById("prev2"),document.getElementById("prev3")],r=[document.getElementById("next1"),document.getElementById("next2"),document.getElementById("next3")];function d(e,t){i(o+=e,t)}function i(e,t){var n,l=t.getElementsByClassName("block_content");for(e>l.length?o=1:e<1&&(o=l.length),n=0;n<l.length;n++)l[n].style.display="none";l[o-1].style.display="grid"}i(o,n[0]),l.forEach((e,t)=>{e.onclick=(()=>d(-1,n[t]))}),r.forEach((e,t)=>{e.onclick=(()=>d(1,n[t]))})})},function(e,t){window.onscroll=(()=>{var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("logo"),n=document.getElementById("menu-nav-list"),o=document.getElementById("header-content"),l=document.getElementById("header"),r=document.getElementById("wrapper"),d=document.getElementById("menu-img"),i=document.getElementById("nav-list"),a=document.getElementsByClassName("nav-list__link"),s=document.getElementsByClassName("nav-list__name"),m=document.getElementById("voir-nav-list__link");document.getElementById("nav-list__item");Array.from(a).forEach(t=>{e>1?(t.style.gridTemplateRows="1fr",t.style.gridTemplateColumns="35px 1fr"):(t.style.gridTemplateRows="28px 19px",t.style.gridTemplateColumns="1fr")}),e>1?(t.style.height="50px",t.style.width="150px",n.style.paddingBottom="15.5px",n.style.paddingTop="15.5px",l.style.height="50px",r.style.paddingTop="50px",o.style.gridTemplateColumns="150px 1fr",d.style.width="100px",d.style.height="50px",d.style.padding="0",i.style.paddingTop="5px",Array.from(s).forEach(e=>{e.style.marginTop="5px"}),m.style.gridTemplateColumns="50px 1fr",m.style.gridTemplateRows="1fr",m.style.alignItems="center"):(t.style.height="119px",t.style.width="300px",l.style.height="119px",r.style.paddingTop="119px",o.style.gridTemplateColumns="300px 1fr",d.style.width="150px",d.style.height="100px",d.style.paddingTop="8.5px",d.style.paddingBottom="8.5px",m.style.gridTemplateColumns="1fr",m.style.gridTemplateRows="28px 19px",Array.from(s).forEach(e=>{e.style.marginBottom="0px"}))}),setTimeout(()=>{var e=document.getElementById("logo"),t=document.getElementById("menu-nav-list"),n=document.getElementById("header-content"),o=document.getElementById("header"),l=document.getElementById("wrapper"),r=document.getElementById("menu-img"),d=document.getElementById("nav-list");window.matchMedia("(max-width: 430px)").matches&&(e.style.height="50px",e.style.width="150px",t.style.paddingBottom="15.5px",t.style.paddingTop="15.5px",o.style.height="50px",l.style.paddingTop="50px",n.style.gridTemplateColumns="150px 1fr",r.style.width="100px",r.style.height="50px",r.style.padding="0",d.style.paddingTop="5px"),menuicon=document.getElementById("menu-img"),t=document.getElementById("menu-nav-list"),menuicon.onclick=(()=>{"none"===t.style.display?t.style.display="inline":t.style.display="none",t.style.height="100vh"})},1e3)},function(e,t){}]);