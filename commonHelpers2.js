import{g as l,c as i,B as h,a as u,b as g}from"./assets/create-msg-af336f06.js";/* empty css                      */import{S as m}from"./assets/vendor-9310f15c.js";const a="/goit-js-homework-12/assets/icons-f810c139.svg",r=document.querySelector(".gallery"),o=document.querySelector(".loader"),n=document.querySelector(".search-form");n.addEventListener("submit",d);let c=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${a}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${a}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${a}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function d(e){e.preventDefault();try{o.style.display="block";const t=e.currentTarget.search.value.trim();l(t).then(s=>y(s)).catch(s=>f(s))}catch(t){console.error("Unknown Error:",t),o.style.display="none"}}function f(e){n.search.value="",o.style.display="none",i(e),r.style.backgroundColor=h,r.innerHTML="",c.refresh()}function y(e){n.search.value="",o.style.display="none",r.style.backgroundColor=u,g(e,r),c.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
