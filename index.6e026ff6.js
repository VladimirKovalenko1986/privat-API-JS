const e=document.querySelector(".js-search"),t=document.querySelector(".js-list");e.addEventListener("submit",(function(e){e.preventDefault();const{query:n,days:a}=e.currentTarget.elements;(function(e,t){const n="http://api.weatherapi.com/v1",a=new URLSearchParams({key:"0b69006ff3a043bb8db120040231607",q:e,days:t,lang:"uk"});return fetch(`${n}/forecast.json?${a}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))})(n.value,a.value).then((e=>t.innerHTML=e.forecast.forecastday.map((({date:e,day:{avgtemp_c:t,condition:{text:n,icon:a}}})=>`\n      <li>\n        <img src="${a}" alt="${n}" />\n        <p>${n}</p>\n        <h2>${e}</h2>\n        <h3>${t}</h3>\n      </li>`)).join())).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.6e026ff6.js.map
