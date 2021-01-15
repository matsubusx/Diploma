(()=>{"use strict";const t=function(t){var e=t.timing,n=t.draw,r=t.duration,i=performance.now();requestAnimationFrame((function t(o){var s=(o-i)/r;s>1&&(s=1);var a=e(s);n(a),s<1&&requestAnimationFrame(t)}))};function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=l(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function l(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var b,S,g;(g=document.querySelectorAll(".close"),function(t){if(Array.isArray(t))return d(t)}(g)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(g)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){if(t.closest(".popup")){var e=t.closest(".popup");t.addEventListener("click",(function(){e.style.visibility="hidden"}))}})),function(){var n,r=document.querySelector(".header-contacts__arrow"),i=document.querySelector(".header-contacts__phone-number-accord"),o=(n=i.children,function(t){if(Array.isArray(t))return e(t)}(n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];i.style.top="0px",r.addEventListener("click",(function(){"0px"===i.style.top?(t({duration:100,timing:function(t){return t},draw:function(t){i.style.top=20*t+"px"}}),o.style.opacity=1):(t({duration:100,timing:function(t){return t},draw:function(t){i.style.top=20-20*t+"px"}}),o.style.opacity=0)}))}(),function(){var t,e=document.querySelector(".popup-menu"),r=e.querySelector(".popup-dialog-menu"),i=document.querySelector(".menu"),o=e.querySelector(".close-menu"),s=document.querySelector(".button-footer"),a=function(t){if(Array.isArray(t))return n(t)}(t=document.querySelectorAll(".link-list"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=!1,c=function(){l?(e.style.visibility="",r.style.transform="",l=!l):(e.style.visibility="visible",r.style.transform="translate3d(0,0,0)",l=!l)};e.addEventListener("click",(function(t){var e=t.target;a.some((function(t){return t.contains(e)}))?c():e.matches(".menu-link")?(t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"nearest"}),c()):e===o&&c()})),i.addEventListener("click",(function(){c()})),s.addEventListener("click",(function(t){var e=s.querySelector("a"),n=document.querySelector(e.getAttribute("href"));t.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"nearest"})}))}(),function(){var t,e=function(t){if(Array.isArray(t))return r(t)}(t=document.querySelectorAll(".link-list"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=document.querySelector(".popup-repair-types");e.forEach((function(t){return t.addEventListener("click",(function(){n.style.visibility="visible"}))}))}(),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"+7 (___) ___-__-__",n=document.querySelectorAll("input[name=phone]"),r=function(t){var n=t.target,r=t.keyCode,i=e,o=i.replace(/\D/g,""),s=n.value.replace(/\D/g,""),a=0,l=i.replace(/[_\d]/g,(function(t){return a<s.length?s.charAt(a++)||o.charAt(a):t}));-1!==(a=l.indexOf("_"))&&(l=l.slice(0,a));var c=i.substr(0,n.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(n.value)||n.value.length<5||r>47&&r<58)&&(n.value=l),"blur"===t.type&&n.value.length<5&&(n.value="")},o=i(n);try{for(o.s();!(t=o.n()).done;){var s=t.value;s.addEventListener("input",r),s.addEventListener("focus",r),s.addEventListener("blur",r)}}catch(t){o.e(t)}finally{o.f()}}(),function(){var e,n=a(document.querySelectorAll("form"));try{var r=function(){var n,r=e.value,i=r.querySelector(".checkbox__descr").querySelector(".link-privacy"),o=document.querySelector(".popup-privacy"),l=r.querySelector(".button"),c=r.querySelector(".checkbox__input"),u=s(r.querySelectorAll("input")).filter((function(t){return"checkbox"!==t.type})),d=a(s(r.querySelectorAll("input[name=name]")));try{for(d.s();!(n=d.n()).done;)n.value.addEventListener("input",(function(t){t.target.value=t.target.value.replace(/[^а-яё ]/gi,"")}))}catch(t){d.e(t)}finally{d.f()}l.addEventListener("click",(function(e){var n,r;e.preventDefault(),function(t){if(t.checked)return!0;var e=t.nextElementSibling;return e.style.border="1px solid red",setTimeout((function(){return e.style.border=""}),1e3),!1}(c)&&function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 2===t.length?t[0].value.length>=2&&18===t[1].value.length||(t[0].style.border="1px solid red",t[1].style.border="1px solid red",setTimeout((function(){return t[0].style.border=""}),1e3),setTimeout((function(){return t[1].style.border=""}),1e3),!1):18===t[0].value.length||(t[0].style.border="1px solid red",setTimeout((function(){return t[0].style.border=""}),1e3),!1)}(u)&&(r={},2===(n=u).length?(r.name=n[0].value,r.phone=n[1].value):r.phone=n[0].value,fetch("../../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){if(200!==e.status)throw new Error("error");var n=document.querySelector(".popup-thank");n.style.visibility="visible",n.style.opacity=0,t({duration:400,timing:function(t){return t},draw:function(t){n.style.opacity=t}}),setTimeout((function(){t({duration:500,timing:function(t){return t},draw:function(t){n.style.opacity=1-t}})}),2e3),setTimeout((function(){return n.style.visibility="hidden"}),2500),u.forEach((function(t){return t.value=""})),c.checked=!1})).catch((function(t){console.error(t)})))})),i.addEventListener("click",(function(){o.style.visibility="visible"}))};for(n.s();!(e=n.n()).done;)r()}catch(t){n.e(t)}finally{n.f()}}(),function(){var t,e=(t=document.querySelectorAll(".button"),function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return"Проконсультироваться"===t.textContent})),n=document.querySelector(".popup-consultation");e.forEach((function(t){t.addEventListener("click",(function(){n.style.visibility="visible"}))}))}(),document.querySelector(".accordion").addEventListener("click",(function(t){var e=t.target;e.matches(".title_block")&&e.classList.toggle("msg-active")})),function(){for(var e=document.querySelector(".formula"),n=document.querySelector(".problems"),r=function(){var e=o[i];e.addEventListener("mouseover",(function(n){return function(e,n){if(!(document.documentElement.clientWidth<=1024)){var r=e.target;if(r.closest(".".concat(n,"-item__icon, .svg-wrap"))){var i=r.closest(".".concat(n,"-item__icon")),o=i.querySelector(".".concat(n,"-item__icon-inner")),s=i.querySelector(".".concat(n,"-item__icon-inner-text")),a=i.querySelector(".".concat(n,"-item-popup")),l=document.head.querySelector("#".concat(a.classList[1])),c=a.getBoundingClientRect(),u=r.closest(".row");if(c.top<0){if(l&&0!==l.textContent)l.textContent="\n                    .".concat(a.classList[1],"::before {\n                        transform: rotate(180deg);\n                    }\n                    ");else{var d=document.createElement("style");d.id=a.classList[1],d.textContent="\n                        .".concat(a.classList[1],"::before {\n                            transform: rotate(180deg);\n                        }\n                    "),document.head.appendChild(d)}a.style.transform="problems"!==n?"translateY(165%)":"translateY(130%)",a.style.paddingTop="35px",u.style.zIndex=1}a.style.visibility="visible","problems"!==n&&(s.style.color="white"),o.style.opacity=1,t({duration:400,timing:function(t){return t},draw:function(t){a.style.opacity=t}})}}}(n,e.classList[0])})),e.addEventListener("mouseout",(function(n){return function(e,n){if(!(document.documentElement.clientWidth<=1024)){var r=e.target;if(r.closest(".svg-wrap, .".concat(n,"-item__icon"))){var i=r.closest(".".concat(n,"-item__icon")),o=i.querySelector(".".concat(n,"-item__icon-inner")),s=i.querySelector(".".concat(n,"-item__icon-inner-text")),a=i.querySelector(".".concat(n,"-item-popup")),l=document.head.querySelector("#".concat(a.classList[1])),c=r.closest(".row");"problems"!==n&&(s.style.color="black"),o.style.opacity=0,l&&setTimeout((function(){l.textContent="",a.style.transform=""}),500),t({duration:200,timing:function(t){return t},draw:function(t){a.style.opacity=1-t}}),setTimeout((function(){a.style.paddingTop="",a.style.visibility="hidden",c.style.zIndex=0}),500)}}}(n,e.classList[0])}))},i=0,o=[e,n];i<o.length;i++)r()}(),S=function(e,n){var r=e.target,i=n.split("-")[0];if(r.closest("".concat(i,"-item, ").concat(i,"-item__icon"))){var o,s=(o=r.closest("".concat(i,"-item__icon"))?r.closest("".concat(i,"-item__icon")):r.closest("".concat(i,"-item"))).querySelector("".concat(i,"-item-popup"));"mouseover"===e.type?(s.style.visibility="visible",t({duration:300,timing:function(t){return t},draw:function(t){o.style.opacity=t}}),t({duration:300,timing:function(t){return t},draw:function(t){s.style.opacity=t}})):(t({duration:300,timing:function(t){return t},draw:function(t){o.style.opacity=1-t+.4}}),t({duration:300,timing:function(t){return t},draw:function(t){s.style.opacity=1-t}}),setTimeout((function(){return s.style.visibility="hidden"}),350))}},[".formula-slider",".problems-slider"].forEach((function(t){var e=document.querySelector(t);e.addEventListener("mouseover",(function(e){return S(e,t)})),e.addEventListener("mouseout",(function(e){return S(e,t)}))})),function(){for(var t=function(){var t=n[e],r=document.querySelector("".concat(t)),i=r.querySelector("".concat(t,"-slider")),o=f(r.querySelectorAll(".button_o")),s=f(i.children),a=[],l=r.querySelector(".slider-counter-content__current"),c=r.querySelector(".slider-counter-content__total");l&&(l.textContent=1);var u=function(){return s.filter((function(t){if("block"===t.style.display)return!0}))[0]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(".scheme"!==t){var r=u(),i=f(r.children)[+l.textContent-1],o=f(r.children)[+l.textContent-2];!0===e?+l.textContent<f(r.children).length&&(i.classList.add("slider-disabled"),i.classList.remove("slider-active"),i.nextElementSibling.classList.add("slider-active"),i.nextElementSibling.classList.remove("slider-disabled"),l.textContent=+l.textContent+1):!0===n&&+l.textContent>1&&(i.classList.add("slider-disabled"),i.classList.remove("slider-active"),o.classList.remove("slider-disabled"),o.classList.add("slider-active"),l.textContent=+l.textContent-1)}};r.addEventListener("click",(function(e){var n=e.target;if(n.matches(".button_o"))o.forEach((function(e){if(e===n){o.filter((function(t){return t.classList.contains("active")}))[0].classList.remove("active"),n.classList.add("active");var i=[];o.forEach((function(t,e){t===n&&i.push(e)})),a=i[0],".popup-design"===t&&(d=f(r.querySelectorAll(".popup-design-text"))),".designs"===t&&(p=f(r.querySelectorAll(".preview-block"))),".scheme"===t&&(y=f(r.querySelectorAll(".scheme-description-block"))),s.forEach((function(t,e){e===a?(t.style.display="block",c&&(c.textContent=f(t.children).length),d&&d[e].classList.add("visible-content-block"),p&&p[e].classList.add("visible"),y&&y[e].classList.add("visible-content-block")):(t.style.display="none",d&&d[e].classList.remove("visible-content-block"),p&&p[e].classList.remove("visible"),y&&y[e].classList.remove("visible-content-block"))})),l&&(l.textContent=1),f(u().children).forEach((function(t,e){0===e?(t.classList.add("slider-active"),t.classList.remove("slider-disabled")):(t.classList.add("slider-disabled"),t.classList.remove("slider-active"))}))}var a,d,p,y}));else if(n.closest(".slider-arrow")){var i=n.closest(".slider-arrow");i.classList.contains("slider-arrow_right")?d(!0,!1):i.classList.contains("slider-arrow_left")&&d(!1,!0)}else if(n.closest(".slider-arrow-tablet-mobile")){var a=n.closest(".slider-arrow-tablet-mobile");a.matches("#design_right")?d(!0,!1):a.matches("#design_left")&&d(!1,!0)}else if(n.closest(".popup-arrow")&&n.closest(".popup-design")){var p=n.closest(".popup-arrow");p.matches("#popup_design_right")?d(!0,!1):p.matches("#popup_design_left")&&d(!1,!0)}else if(n.closest(".popup-arrow_transparency")){var y=n.closest(".popup-arrow");y.matches("#transparency_right")?d(!0,!1):y.matches("#transparency_left")&&d(!1,!0)}})),s.forEach((function(t,e){t.style.display=0===e?"block":"none",a.push(f(t.children))})),null!==c&&(c.textContent=a[0].length)},e=0,n=[".repair-types",".designs",".scheme",".popup-design",".popup-portfolio",".popup-transparency"];e<n.length;e++)t();var r=document.querySelector(".popup-design");document.querySelector(".link-list-designs").addEventListener("click",(function(){return r.style.visibility="visible"}));var i=document.querySelector(".popup-transparency"),o=document.querySelector(".transparency-slider");o.addEventListener("click",(function(t){var e,n=t.target;n.matches(".transparency-item__img")&&(i.style.visibility="visible",i.querySelector(".slider-counter-content__current").textContent=1,f(o.querySelectorAll(".transparency-item__img")).forEach((function(t,r){t===n&&(e=r)})),f(i.querySelectorAll(".popup-transparency-slider__slide")).forEach((function(t,n){t.style.display=n===e?"block":"none"})))}))}(),new(b=function(){function e(t){var n=t.main,r=t.wrap,i=t.next,o=t.prev,s=t.position,a=void 0===s?0:s,l=t.slidesToShow,c=void 0===l?3:l,u=t.infinity,d=void 0!==u&&u,f=t.responsive,p=void 0===f?[]:f,y=t.hide,m=void 0!==y&&y,h=t.hideButtons,v=void 0!==h&&h,b=t.divideBy,S=void 0===b?1:b;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.slides=document.querySelector(r).children,this.next=document.querySelector(i),this.prev=document.querySelector(o),this.slidesToShow=c,this.responsive=p,this.options={position:a,divideBy:S,infinity:d,hideButtons:v,widthSlide:Math.floor(100/this.slidesToShow),hide:m}}var n,r;return n=e,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.next&&this.prev||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit(),this.hideSlider(),this.checkButton()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=m(t))){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n                .glo-slider {\n                    overflow: hidden !important;\n                }\n                .glo-slider__wrap {\n                    display: flex !important;\n                    flex-wrap: nowrap !important;\n                    transition: transform 0.5s !important;\n                    will-change: transform !important;\n                    overflow: visible !important;\n                }\n    \n                .glo-slider__item {\n                    flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n                    margin: auto 0 !important;\n                }\n            "),document.head.appendChild(t)}},{key:"hideSlider",value:function(){var e=this;this.options.hide&&y(this.slides).forEach((function(n,r){r===e.options.position?t({duration:200,timing:function(t){return t},draw:function(t){n.style.opacity=t}}):n.style.opacity=0}))}},{key:"checkButton",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.options.hideButtons&&(t?this.options.position===this.slides.length-this.slidesToShow?this.next.style.visibility="hidden":this.prev.style.visibility="visible":0===this.options.position?this.prev.style.visibility="hidden":this.next.style.visibility="visible")}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.checkButton(),this.hideSlider(),this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow,this.hideSlider()),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide/this.options.divideBy,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.checkButton(!0),this.hideSlider(),this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0,this.hideSlider()),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide/this.options.divideBy,"%)"))}},{key:"controlSlider",value:function(){var t=this;this.next.addEventListener("click",(function(){return t.nextSlider()})),this.prev.addEventListener("click",(function(){return t.prevSlider()}))}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,n=this.responsive.map((function(t){return t.breakpoint})),r=Math.max.apply(Math,y(n)),i=function(){var i=document.documentElement.clientWidth;if(i<r)for(var o=0;o<n.length;o++)i<n[o]&&(t.slidesToShow=t.responsive[o].slidesToShow,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle());else t.slidesToShow=e,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle()};i(),window.addEventListener("resize",i)}}])&&v(n.prototype,r),e}())({main:".reviews",wrap:".reviews-slider",next:"#reviews-arrow_right",prev:"#reviews-arrow_left",slidesToShow:1,hide:!0}).init(),new b({main:".partners-wrapper",wrap:".partners-slider",next:"#partners-arrow_right",prev:"#partners-arrow_left",hideButtons:!0,slidesToShow:3,responsive:[{breakpoint:1024,slidesToShow:2},{breakpoint:575,slidesToShow:1}]}).init(),new b({main:".transparency-wrapper",wrap:".transparency-slider",next:"#transparency-arrow_right",prev:"#transparency-arrow_left",hideButtons:!0,divideBy:2,slidesToShow:3,responsive:[{breakpoint:1024,slidesToShow:1}]}).init(),new b({main:".problems-slider-wrap",wrap:".problems-slider",next:"#problems-arrow_right",prev:"#problems-arrow_left",hideButtons:!0,slidesToShow:1,divideBy:3}).init(),new b({main:".formula-slider-wrap",wrap:".formula-slider",next:"#formula-arrow_right",prev:"#formula-arrow_left",hideButtons:!0,slidesToShow:3,responsive:[{breakpoint:768,slidesToShow:2},{breakpoint:575,slidesToShow:1}]}).init(),document.querySelector(".problems-slider-wrap").classList.remove("glo-slider"),document.querySelector(".formula-slider-wrap").classList.remove("glo-slider")})();