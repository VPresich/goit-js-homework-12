import{G as g,c as u,g as c,B as f,a as m,b as d}from"./assets/gallery-pagination-a4f194e3.js";/* empty css                      */import{S as b}from"./assets/vendor-4fb3e0b3.js";const n="/goit-js-homework-12/assets/icons-5e8cbe24.svg",a=document.querySelector(".gallery"),l=document.querySelector(".border-loader"),i=document.querySelector(".search-form");i.addEventListener("submit",y);let s="";const h=20;let o=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${n}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${n}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${n}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});const r=new g({data:[],fnCreateMarkup:u,fnGetImages:c,contentRef:a,elementsPerPage:h,searchStr:s,boxRef:o});function y(e){e.preventDefault(),l.style.display="block",s=e.currentTarget.search.value.trim(),c(s,1).then(t=>p(t)).catch(t=>v(t)).finally(()=>{i.search.value="",l.style.display="none"})}function v(e){a.style.backgroundColor=f,m(e),a.innerHTML="",r&&r.refresh(),o&&o.refresh()}function p(e){a.style.backgroundColor=d,r&&r.refresh();const t=Math.ceil(e.totalHits/h);r.addData(e.hits,t,s),o&&o.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
