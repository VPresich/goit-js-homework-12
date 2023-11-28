import{g as i,B as l,a as h,c as u}from"./assets/get-images-18c7ea61.js";/* empty css                      */import{i as g,S as f}from"./assets/vendor-9310f15c.js";const s="/goit-js-homework-12/assets/icons-5e8cbe24.svg",m="/goit-js-homework-12/assets/bi-x-octagon-73f29380.svg";function b(e){g.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${m}`,iconColor:"#fafafb"})}const o=document.querySelector(".gallery"),t=document.querySelector(".border-loader"),a=document.querySelector(".search-form");a.addEventListener("submit",d);let c=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,nav:!0,navText:[`<svg class="lightbox-button-icon-prev" width="24" height="24" aria-label="icon arrow left">
          <use href="${s}#icon-chevron-left"></use>
        </svg>`,`<svg class="lightbox-button-icon-next" width="24" height="24" aria-label="icon arrow right">
          <use href="${s}#icon-chevron-right"></use>
        </svg>`],close:!0,closeText:`
        <svg class="lightbox-close-icon" width="16" height="16">
          <use href="${s}#close-form"></use>
        </svg>`,enableKeyboard:!0,showCounter:!0,animationSlide:!0,loop:!0});function d(e){e.preventDefault(),t.style.display="block";const n=e.currentTarget.search.value.trim();i(n).then(r=>v(r)).catch(r=>p(r))}function p(e){a.search.value="",t.style.display="none",b(e),o.style.backgroundColor=l,o.innerHTML="",c.refresh()}function v(e){a.search.value="",t.style.display="none",o.style.backgroundColor=h,u(e.hits,o),c.refresh()}
//# sourceMappingURL=commonHelpers2.js.map
