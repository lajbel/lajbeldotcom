var p=Object.defineProperty;var r=(t,n)=>p(t,"name",{value:n,configurable:!0});var i={lang:"en",currentCard:"",jsonContent:{}};var a;fetch("/content.json").then(t=>t.json()).then(t=>{a=t,i.jsonContent=a});function C(t){let n=a[t];if(!n)return;let o=n[i.lang],c=o?.content?.toString()||n.content?.toString()||"",e=o?.title?.toString()||n.title?.toString()||"",s=n.image?.toString()||"";l(c,t,e,s)}r(C,"updatePostWCard");function l(t,n,o,c){let e=document.querySelector(".space__post-content"),s=document.querySelector(".space__post-title"),g=document.querySelector(".space__post-image");e&&g&&s&&(e.innerHTML=t,e.id=n,s.innerHTML=o,g.src=c)}r(l,"updatePostContent");export{l as updatePostContent,C as updatePostWCard};

//# sourceMappingURL=./post.js.map