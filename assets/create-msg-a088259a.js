import{i}from"./vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h="Escape",l="https://pixabay.com/api/",f="40880885-4e0dcc0a0fb77dafc41087a3a",v="#ffffff",y="#f5f5f5";function d(a){return new Promise((o,r)=>{fetch(a).then(n=>{n.ok||r(n.status),o(n.json())}).catch(n=>r(n))})}const u=a=>{const{largeImageURL:o,previewURL:r,tags:n,likes:e,views:s,comments:t,downloads:c}=a;return`<li class='card'> 
            <a class='card-link' href='${o}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${r}'
                      alt='${n}'                                                          
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
        </li>`};function p(a){return a.map(u).join("")}function b(a,o){const r=p(a);o.innerHTML="",o.insertAdjacentHTML("beforeend",r)}function L(a,o=1){const r={key:f,q:encodeURIComponent(a),image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:20},n=`${l}?${new URLSearchParams(r).toString()}`;return new Promise((e,s)=>{d(n).then(t=>{t.hits.length||s("Sorry, there are no images matching your search query. Please, try again!"),e(t)}).catch(t=>s(t))})}const m="/goit-js-homework-12/assets/bi-x-octagon-73f29380.svg";function k(a){i.show({message:a,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${m}`,iconColor:"#fafafb"})}export{y as B,h as K,v as a,b,k as c,L as g};
//# sourceMappingURL=create-msg-a088259a.js.map
