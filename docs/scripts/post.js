var l=Object.defineProperty;var r=(n,t)=>l(n,"name",{value:t,configurable:!0});var i={lang:"en",currentCard:"",jsonContent:{}};var a;fetch("/content.json").then(n=>n.json()).then(n=>{a=n,i.jsonContent=a;let t=document.querySelectorAll(".card"),o=new URL(window.location.href).searchParams.get("card");o?t.forEach(e=>{e.id===o&&e.click()}):t[0].click()});function f(n){let t=a[n];if(!t)return;let c=t[i.lang],o=c?.content?.toString()||t.content?.toString()||"",e=c?.title?.toString()||t.title?.toString()||"",s=t.image?.toString()||"";d(o,n,e,s)}r(f,"updatePost");function d(n,t,c,o){let e=document.querySelector(".space__post-content"),s=document.querySelector(".space__post-title"),g=document.querySelector(".space__post-image");e&&g&&s&&(e.innerHTML=n,e.id=t,s.innerHTML=c,g.src=o)}r(d,"updatePostContent");export{f as updatePost,d as updatePostContent};

//# sourceMappingURL=./post.js.map