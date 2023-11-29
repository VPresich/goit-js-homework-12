import{G as g,c as u,g as c,D as i,B as f,a as m,b as d,s as b}from"./assets/gallery-pagination-3df2157e.js";/* empty css                      */import{S as y}from"./assets/vendor-4fb3e0b3.js";const n="/goit-js-homework-12/assets/icons-5e8cbe24.svg",s=document.querySelector(".gallery"),l=document.querySelector(".border-loader"),h=document.querySelector(".search-form");h.addEventListener("submit",v);let a="",o=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${n}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${n}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${n}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});const t=new g({data:[],fnCreateMarkup:u,fnGetImages:c,contentRef:s,elementsPerPage:i,searchStr:a,boxRef:o});function v(e){e.preventDefault(),l.style.display="block",a=e.currentTarget.search.value.trim(),c(a,1).then(r=>w(r)).catch(r=>p(r)).finally(()=>{h.search.value="",l.style.display="none"})}function p(e){s.style.backgroundColor=f,m(e),s.innerHTML="",t&&t.refresh(),o&&o.refresh()}function w(e){s.style.backgroundColor=d,t&&t.refresh();const r=Math.ceil(e.totalHits/i);t.addData(e.hits,r,a),o&&o.refresh(),window.scroll(0,0),b(2)}
//# sourceMappingURL=commonHelpers2.js.map
