var C=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var n=(e,t,o)=>(C(e,t,"read from private field"),o?o.call(e):t.get(e)),u=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},m=(e,t,o,r)=>(C(e,t,"write to private field"),r?r.call(e,o):t.set(e,o),o);import{S as E,d as w,e as I,G as b,c as v,g as p,D as L,K as B,a as D,B as R,b as q}from"./assets/gallery-pagination-840a8c45.js";/* empty css                      */import"./assets/vendor-4fb3e0b3.js";function P(e){return new Promise((t,o)=>{const r=new Image;r.src=e,r.onload=()=>{t(r)},r.onerror=a=>{o(a)}})}var l,c,d;class G extends E{constructor(o){const{elementsList:r,sliderContent:a}=o;super(o);u(this,l,void 0);u(this,c,void 0);u(this,d,void 0);m(this,c,r),m(this,l,a),m(this,d,document.querySelector(".border-loader-modal-window")),n(this,d).style.display="block",this.update()}destroy(){super.destroy(),this.deleteImage()}async updateContent(){n(this,d).style.display="block",document.body.style.cursor="none";const o=super.getCurrentSlide(),r=n(this,c)[o].querySelector("img"),a=n(this,c)[o].querySelector("a"),f=r.dataset.source?r.dataset.source:a.href?a.href:r.src;try{const h=await P(f);n(this,l).src=h.src,n(this,l).alt=r.alt}catch(h){n(this,l).src=w,n(this,l).alt=I,console.log(h)}finally{n(this,d).style.display="none",document.body.style.cursor="default"}}deleteImage(){n(this,l).src="",n(this,l).alt=""}}l=new WeakMap,c=new WeakMap,d=new WeakMap;let y="";const s={gallery:document.querySelector(".gallery"),modalBackdrop:document.querySelector(".modal-backdrop"),buttonClose:document.querySelector(".close-button"),modalContent:document.querySelector(".modal-content"),modalClose:document.querySelector("#closeBtn"),loader:document.querySelector(".border-loader"),searchForm:document.querySelector(".search-form")};s.gallery.addEventListener("click",T);s.buttonClose.addEventListener("click",g);s.modalBackdrop.addEventListener("click",A);s.modalClose.addEventListener("click",g);s.searchForm.addEventListener("submit",_);const i=new b({data:[],fnCreateMarkup:v,fnGetImages:p,contentRef:s.gallery,elementsPerPage:L,searchStr:y});let S;const F={slidesPerPage:1,prevBtnId:"prevBtn",nextBtnId:"nextBtn",dotsContainerId:"sliderDots",sliderContainerId:"modalContent",slidesCounterId:"slidesCounter",dotDefaultClass:"slider-dot",dotActiveClass:"active-dot",isDotContainText:!1,sliderContent:s.modalContent};function T(e){e.preventDefault();const t=e.target;if(!(t.classList.contains("card-cover")||t.classList.contains("card-cover-darkened")))return;const r=t.closest("li"),a=e.currentTarget.children,f=Array.from(a).indexOf(r);S=new G({...F,currentSlide:f,elementsList:a,elementsListLength:a.length}),x()}function _(e){e.preventDefault(),y=e.currentTarget.search.value.trim(),s.loader.style.display="block",p(y,1).then(t=>{O(t)}).catch(t=>{M(t)}).finally(()=>{s.searchForm.search.value="",s.loader.style.display="none"})}function x(){s.modalBackdrop.classList.add("is-open"),window.addEventListener("keydown",k)}function g(e){window.removeEventListener("keydown",k),s.modalBackdrop.classList.remove("is-open"),S.destroy()}function k(e){e.code===B&&g()}function A(e){e.currentTarget===e.target&&g()}function M(e){D(e),s.gallery.style.backgroundColor=R,i&&i.refresh()}function O(e){s.gallery.style.backgroundColor=q,i&&i.refresh();const t=Math.ceil(e.totalHits/L);i.addData(e.hits,t,y)}
//# sourceMappingURL=commonHelpers3.js.map
