import{a as v,S as b,i as l}from"./assets/vendor-Do60_h77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=i(t);fetch(t.href,a)}})();async function p(o,e){const i={key:"55643429-294578a097483c19c7f77277b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:"15"},{data:s}=await v.get("https://pixabay.com/api/",{params:i});return s}const M=new b(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});function u(o){const e=o.map(({webformatURL:i,largeImageURL:s,tags:t,likes:a,views:c,comments:L,downloads:w})=>`<li class="gallery-item">
            <a class="gallery-link" href="${s}"><img class="gallery-img" src="${i}" alt="${t}"></a>
            <div class="gallery-info">
            <div class="gallery-info-part">
            <h3 class="gallery-title">Likes</h3>
            <p class="gallery-text">${a}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Views</h3>
            <p class="gallery-text">${c}</p>
            </div>
            <div class="gallery-info-part">
            <h3 class="gallery-title">Comments</h3>
            <p class="gallery-text">${L}</p>
            </div>
            <div class="gallery-info-part"> 
            <h3 class="gallery-title">Downloads</h3>
            <p class="gallery-text">${w}</p>
            </div>
            </div>
          </li>`).join("");r.galleryList.insertAdjacentHTML("beforeend",e),M.refresh()}function S(){r.galleryList.innerHTML=""}function f(){r.loader.classList.add("is-active")}function h(){r.loader.classList.remove("is-active")}function y(){r.loadMoreBtn.classList.remove("is-hidden")}function g(){r.loadMoreBtn.classList.add("is-hidden")}const r={searchForm:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let d=1,n="",m=0;async function $(o){try{if(o.preventDefault(),n=o.target.elements.search_text.value.trim(),!n){l.error({message:"The search field must be filled in!",position:"topRight"});return}await S(),await g(),await f(),d=1;const e=await p(n,d);if(e.totalHits===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}await u(e.hits),e.totalHits>15?await y():l.info({message:`Thats all photos of ${n}`,position:"topRight"}),m=r.galleryList.children[0].getBoundingClientRect().height,r.searchForm.reset()}catch(e){console.log(e),l.error({message:`${e}`,position:"topRight"})}finally{await h()}}async function B(o){try{d++,await g(),await f();const e=await p(n,d);await u(e.hits),scrollBy({top:m*2,behavior:"smooth"}),Math.ceil(e.totalHits/15)===d?(await g(),l.info({message:`Thats all photos of ${n}`,position:"topRight"})):await y()}catch(e){l.error({message:`${e}`,position:"topRight"})}finally{await h()}}r.searchForm.addEventListener("submit",$);r.loadMoreBtn.addEventListener("click",B);
//# sourceMappingURL=index.js.map
