function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=n.parcelRequire071e;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},n.parcelRequire071e=i),i.register("kyEFX",(function(t,n){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"d3pfZ":"cart.c0ed5379.js","iYZjP":"symbol.e1320732.svg"}'));var o;o=new URL(i("kyEFX").resolve("iYZjP"),import.meta.url).toString();const l=document.querySelector(".js-sl"),c=`<div class="empty-cart">\n    <p class="sl-message">Ця сторінка порожня, додайте якийсь товар в кошик, щоб замовити.</p>\n              <svg width="300" height="300">\n            <use href="${t(o)}#icon-sad-cart"></use>\n          </svg>\n  </div>`;var a;let d=null!==(a=JSON.parse(localStorage.getItem("products")))&&void 0!==a?a:[];function u(){if(d.length){l.innerHTML=d.map((({id:e,img:n,name:r,price:s,description:i})=>`<li class="sl-card" data-id=${e}>\n      <img src="${n}" alt="${r}" height="130" class="sl-product-img">\n      <div class="sl-product-info">\n          <h3 class="sl-product-title">${r}</h3>\n          <h2 class="sl-product-cat">${s} грн.</h2>\n          <p class="sl-product-descr">${i}</p>\n          <div class="sl-aut-shops">\n            <p class="sl-product-author">${r}</p>\n          </div>\n      </div>\n      <button type="button" class="trash-btn js-remove-product">\n      <svg width="32px" height="32px">\n      <use href="${t(o)}#icon-trash"></use></svg>\n      </button>\n      \n    </li>`)).join("");l.querySelectorAll(".js-remove-product").forEach((e=>e.addEventListener("click",p)))}else l.innerHTML=c}function p(e){const t=e.target.closest(".sl-card");t.classList.add("removing"),t.addEventListener("transitionend",(()=>{const e=t.dataset.id;d.some((t=>{t.id===Number(e)&&(d.splice(d.indexOf(t),1),localStorage.setItem("products",JSON.stringify(d)))})),d.length?u():l.innerHTML=c}))}l.innerHTML=c,u();
//# sourceMappingURL=cart.c0ed5379.js.map