import{i}from"./vendor-9310f15c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const h="Escape",l="https://pixabay.com/api/",f="40880885-4e0dcc0a0fb77dafc41087a3a",v="#ffffff",y="#f5f5f5";async function d(a,n){return new Promise((o,r)=>{fetch(a).then(e=>{e.ok||r(e.status),o(e.json())}).catch(e=>{r(e)})})}const u=a=>{const{largeImageURL:n,previewURL:o,tags:r,likes:e,views:s,comments:t,downloads:c}=a;return`<li class='card'> 
            <a class='card-link' href='${n}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${o}'
                      alt='${r}'                                                          
                  />                                                  
                <div class='card-cover-darkened'></div>
              </div>
            </a>                 
            <div class="card-info">
                <div class="field">
                    <span class="label">Likes</span>
                    <span class="value">${e}</span>    
                </div>
                <div class="field">
                    <span class="label">Views</span>
                    <span class="value">${s}</span>   
                </div>
                <div class="field">
                    <span class="label">Comments</span>
                    <span class="value">${t}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${c}</span>    
                </div>
            </div>
        </li>`};function p(a){return a.map(u).join("")}function b(a,n){const o=p(a);n.innerHTML="",n.insertAdjacentHTML("beforeend",o)}async function L(a){const n={key:f,q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:20},o=`${l}?${new URLSearchParams(n).toString()}`;return new Promise((r,e)=>{d(o).then(s=>{s.hits.length||e("Sorry, there are no images matching your search query. Please, try again!"),r(s.hits)}).catch(s=>{e(s)})})}const m="/goit-js-homework-12/assets/bi-x-octagon-73f29380.svg";function k(a){i.show({message:a,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${m}`,iconColor:"#fafafb"})}export{y as B,h as K,v as a,b,k as c,L as g};
//# sourceMappingURL=create-msg-af336f06.js.map
