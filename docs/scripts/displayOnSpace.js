var t=document.querySelector(".space"),c=document.querySelectorAll(".card"),n={};fetch("/content.json").then(e=>e.json()).then(e=>{n=e});c.forEach(e=>{e.addEventListener("click",()=>{t.innerHTML=n?.[e.id].content})});
