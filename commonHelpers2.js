import{g as l,c as i,B as h,a as u,b as g}from"./assets/create-msg-a088259a.js";/* empty css                      */import{S as m}from"./assets/vendor-9310f15c.js";const t="/goit-js-homework-12/assets/icons-5e8cbe24.svg",r=document.querySelector(".gallery"),s=document.querySelector(".border-loader"),a=document.querySelector(".search-form");a.addEventListener("submit",b);let n=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${t}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${t}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${t}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function b(e){e.preventDefault(),s.style.display="block";const c=e.currentTarget.search.value.trim();l(c).then(o=>f(o)).catch(o=>d(o))}function d(e){a.search.value="",s.style.display="none",i(e),r.style.backgroundColor=h,r.innerHTML="",n.refresh()}function f(e){a.search.value="",s.style.display="none",r.style.backgroundColor=u,g(e.hits,r),n.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
