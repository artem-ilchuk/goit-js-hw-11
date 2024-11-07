import{i as a,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function p(l){const r=document.querySelector(".gallery");l.totalHits>0?(r.innerHTML=l.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              data-source="${e.largeImageURL}"
              alt="${e.tags}"
            />
          </a>          
          <ul class='gallery-list-details'>
            <li class='gallery-item-details'><p class='gallery-item-text'>Likes</p><p class="item-value">${e.likes}</p></li>
            <li class='gallery-item-details'><p class='gallery-item-text'>Views</p><p class="item-value">${e.views}</p></li>
            <li class='gallery-item-details'><p class='gallery-item-text'>Comments</p><p class="item-value">${e.comments}</p></li>
            <li class='gallery-item-details'><p class='gallery-item-text'>Downloads</p><p class="item-value">${e.downloads}</p></li>
          </ul>          
        </li>`).join(""),new d(".gallery a",{overlayOpacity:.9,captionsData:"alt",captionDelay:250}).refresh()):(m(),r.innerHTML="")}function g(){a.show({title:"Hello",titleColor:"#000",message:"Welcome to our Website!",messageColor:"#000",position:"topRight",color:"#09f",icon:"fas fa-bell",timeout:4e3})}function m(){a.error({title:"Error",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",color:"#ef4040",position:"topRight",icon:"fas fa-exclamation-triangle",transitionIn:"flipInX",transitionOut:"flipOutX",timeout:3e3})}function y(){a.error({title:"Error",titleColor:"#fff",message:"Please fill in the search images field",messageColor:"#fff",color:"#ef4040",position:"topRight",icon:"fas fa-exclamation-triangle",transitionIn:"flipInX",transitionOut:"flipOutX",timeout:3e3})}function f(){a.warning({title:"Caution",titleColor:"#000",message:"Something went wrong, please try again",messageColor:"#000",position:"topRight",color:"orange",icon:"fas fa-exclamation-circle",timeout:4e3})}const h="46906317-bfa2c9d7c6708063f650b6890",L="https://pixabay.com/api/";function b(l){const r=new URLSearchParams({key:h,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21}),o=`${L}?${r}`;return fetch(o).then(e=>{if(i.classList.remove("hidden"),!e.ok)throw f(),new Error(e.statusText);return e.json()}).then(e=>{p(e),i.classList.add("hidden")}).catch(e=>{f(),i.classList.add("hidden")})}document.addEventListener("DOMContentLoaded",g);const c=document.querySelector(".form"),w=document.querySelector(".gallery"),u=c.querySelector('button[type="submit"]'),i=document.querySelector(".loader");c.addEventListener("submit",async l=>{l.preventDefault();const r=l.target.elements.search.value.trim();if(r!==""){i.classList.remove("hidden"),w.innerHTML="",u.disabled=!0;try{await b(r),c.reset()}catch(o){console.error(o),m()}finally{i.classList.add("hidden"),u.disabled=!1}}else y()});
//# sourceMappingURL=index.js.map
