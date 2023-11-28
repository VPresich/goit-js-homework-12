(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="Escape",i="https://pixabay.com/api/",l="40880885-4e0dcc0a0fb77dafc41087a3a",m="#ffffff",v="#f5f5f5";function d(r){return new Promise((a,t)=>{fetch(r).then(n=>{n.ok||t(n.status),a(n.json())}).catch(n=>t(n))})}const f=r=>{const{largeImageURL:a,previewURL:t,tags:n,likes:e,views:s,comments:c,downloads:o}=r;return`<li class='card'> 
            <a class='card-link' href='${a}'>                    
              <div class='card-cover-inner'>                
                  <img class='card-cover'
                      src='${t}'
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
                    <span class="value">${c}</span>    
                </div>
                <div class="field">
                    <span class="label">Downloads</span>
                    <span class="value">${o}</span>    
                </div>
            </div>
        </li>`};function u(r){return r.map(f).join("")}function h(r,a){const t=u(r);a.innerHTML="",a.insertAdjacentHTML("beforeend",t)}function g(r,a=1){const t={key:l,q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:20},n=`${i}?${new URLSearchParams(t).toString()}`;return new Promise((e,s)=>{d(n).then(c=>{c.hits.length||s("Sorry, there are no images matching your search query. Please, try again!"),e(c)}).catch(c=>s(c))})}export{v as B,p as K,m as a,h as c,g};
//# sourceMappingURL=get-images-18c7ea61.js.map
