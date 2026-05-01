import{a as w,S as b,i as n}from"./assets/vendor-Do60_h77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();async function g(o,e){const i={key:"55643429-294578a097483c19c7f77277b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:"15"},{data:s}=await w.get("https://pixabay.com/api/",{params:i});return s}const M=new b(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});function u(o){const e=o.map(({webformatURL:i,largeImageURL:s,tags:t,likes:a,views:l,comments:L,downloads:v})=>`<li class="gallery-item">
            <a class="gallery-link" href="${s}"><img class="gallery-img" src="${i}" alt="${t}"></a>
            <div class="gallery-info">
            <div class="gallery-info-part">
            <h3 class="gallery-title">Likes</h3>
            <p class="gallery-text">${a}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Views</h3>
            <p class="gallery-text">${l}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Comments</h3>
            <p class="gallery-text">${L}</p>
            </div>
            <div class="gallery-info-part"> 
            <h3 class="gallery-title">Downloads</h3>
            <p class="gallery-text">${v}</p>
            </div>
            </div>
          </li>`).join("");r.galleryList.insertAdjacentHTML("beforeend",e),M.refresh()}function B(){r.galleryList.innerHTML=""}function p(){r.loader.classList.add("is-active")}function f(){r.loader.classList.remove("is-active")}function S(){r.loadMoreBtn.classList.remove("is-hidden")}function y(){r.loadMoreBtn.classList.add("is-hidden")}const r={searchForm:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let c=1,d="",h=0;async function $(o){try{if(o.preventDefault(),d=o.target.elements.search_text.value.trim(),!d){n.error({message:"The search field must be filled in!",position:"topRight"});return}await B(),await y(),await p(),c=1;const e=await g(d,c);if(e.totalHits===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}await u(e.hits),e.totalHits>15&&(await S(),r.loadMoreBtn.addEventListener("click",m)),h=r.galleryList.children[0].getBoundingClientRect().height,r.searchForm.reset()}catch(e){console.log(e),n.error({message:`${e}`,position:"topRight"})}finally{await f()}}async function m(o){try{c++,await p();const e=await g(d,c);await u(e.hits),scrollBy({top:h*2,behavior:"smooth"}),Math.ceil(e.totalHits/15)===c&&(await y(),r.loadMoreBtn.removeEventListener("click",m),n.info({message:`Thats all photos of ${d}`,position:"topRight"}))}catch(e){n.error({message:`${e}`,position:"topRight"})}finally{await f()}}r.searchForm.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
