import{r as i,j as e}from"./index-d12XFQPa.js";import{a as o}from"./index-kuOebGxS.js";const x=()=>{const[a,t]=i.useState(0),l=s=>{t(s)};return e.jsxs("div",{className:"border border-[#b9bccf4d] rounded-xl bg-white px-14 py-16 flex flex-col gap-12",children:[e.jsx("div",{className:"rating-star-container flex gap-2",children:Array(5).fill(0).map((s,r)=>e.jsx(o,{onClick:()=>l(r+1),className:`star cursor-pointer text-3xl ${r<a?"fill-[#FF2E17]":"fill-[#B9BCCF]"}`},r))}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("label",{htmlFor:"message",className:"text-[1.4rem] leading-[2rem] text-[#687182]",children:"Write a Review"}),e.jsx("textarea",{id:"message",rows:4,className:"text-[1.4rem] leading-[2.4rem] text-[#687182] border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none rounded-2xl px-8 py-6"})]}),e.jsx("div",{children:e.jsx("button",{className:"submit-review",children:"submit"})})]})};export{x as default};
