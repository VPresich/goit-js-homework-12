import{G as g,c as u,g as c,D as i,B as f,a as m,b}from"./assets/gallery-pagination-7123badd.js";/* empty css                      */import{S as d}from"./assets/vendor-4fb3e0b3.js";const n="/goit-js-homework-12/assets/icons-5e8cbe24.svg",a=document.querySelector(".gallery"),l=document.querySelector(".border-loader"),h=document.querySelector(".search-form");h.addEventListener("submit",y);let s="",o=new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${n}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${n}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${n}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});const r=new g({data:[],fnCreateMarkup:u,fnGetImages:c,contentRef:a,elementsPerPage:i,searchStr:s,boxRef:o});function y(e){e.preventDefault(),l.style.display="block",s=e.currentTarget.search.value.trim(),c(s,1).then(t=>p(t)).catch(t=>v(t)).finally(()=>{h.search.value="",l.style.display="none"})}function v(e){a.style.backgroundColor=f,m(e),a.innerHTML="",r&&r.refresh(),o&&o.refresh()}function p(e){a.style.backgroundColor=b,r&&r.refresh();const t=Math.ceil(e.totalHits/i);r.addData(e.hits,t,s),o&&o.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
