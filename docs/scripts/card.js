var g=Object.defineProperty;var i=(t,e)=>g(t,"name",{value:e,configurable:!0});var a={lang:"en",currentCard:"",jsonContent:{}};var d;fetch("/content.json").then(t=>t.json()).then(t=>{d=t,a.jsonContent=d;let e=document.querySelectorAll(".card"),c=new URL(window.location.href).searchParams.get("card");c&&e.forEach(n=>{n.id===c&&n.click()})});function p(t){let e=d[t];if(!e)return;let o=e[a.lang],c=o?.content?.toString()||e.content?.toString()||"",n=o?.title?.toString()||e.title?.toString()||"",r=e.image?.toString()||"";L(c,t,n,r)}i(p,"updatePost");function L(t,e,o,c){let n=document.querySelector(".space__post-content"),r=document.querySelector(".space__post-title"),m=document.querySelector(".space__post-image");n&&m&&r&&(n.innerHTML=t,n.id=e,r.innerHTML=o,m.src=c)}i(L,"updatePostContent");var f=document.querySelectorAll(".card"),l=document.querySelector(".space__post"),v=document.querySelector(".space__exit-btn"),s=null,u=null;function E(t){t.classList.remove("card--active"),t.classList.add("card--in-space"),a.currentCard=t.id,s&&(s.classList.remove("card--in-space"),s.classList.add("card--active")),s=t,u=t.parentElement?.parentElement,p(t.id),l?.classList.add("space__post--active")}i(E,"handleCardClick");f.forEach(t=>{t.addEventListener("click",()=>{E(t)})});v?.addEventListener("click",()=>{s?.classList.remove("card--in-space"),l?.classList.remove("space__post--active"),l&&(l.id=""),u?.classList.contains("card-folder--active")&&s?.classList.add("card--active"),s=null});

//# sourceMappingURL=./card.js.map