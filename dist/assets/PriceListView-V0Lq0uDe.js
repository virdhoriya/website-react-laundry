import{_ as k,r as i,j as e,a1 as A,X as E,Y as I,Z as B,$ as M}from"./index-CtAgCwWG.js";import{b as f,c as N}from"./index-CGhPLM83.js";import{L as V}from"./Loading-B4ZGQeZm.js";const G=()=>{const b="http://3.110.208.70:3000",u=localStorage.getItem("token");return{getPriceList:async()=>{try{const x=await fetch(`${b}/prices/customer`,{method:"GET",headers:{Authorization:`Bearer ${u}`}}),w=await x.json();return x.ok?w:(k.error("Failed to retrieve price list. Please try again later.",{className:"toast-error"}),!1)}catch{return k.error("Failed to load pricing information. Please check your connection and try again.",{className:"toast-error"}),!1}}}},X=()=>{const{getPriceList:b}=G(),[u,y]=i.useState([]),[x,w]=i.useState(!0),[t,v]=i.useState(0),[s,c]=i.useState(1),[r,l]=i.useState(1),[P,$]=i.useState("asc"),[F,C]=i.useState([]),[g,S]=i.useState(0),[h,_]=i.useState(10),j=n=>{const a=P==="asc"?"desc":"asc";$(a);const p=u.sort((o,L)=>{const d=o[n],m=L[n];return typeof d=="string"&&typeof m=="string"?a==="asc"?d.localeCompare(m):m.localeCompare(d):a==="asc"?d-m:m-d});C(p)},R=n=>{let a=n.target.value;_(a),c(1),v(Math.ceil(g/a))},D=n=>{c(1),n.preventDefault();let a=n.target.value;const p=u.filter(o=>o.category_name.toLowerCase().includes(a.toLowerCase())||o.product_name.toLowerCase().includes(a.toLowerCase())||o.service_name.toLowerCase().includes(a.toLowerCase())||o.price_price.toString().toLowerCase().includes(a.toLowerCase()));C(p),v(Math.ceil(p.length/h)),S(p.length)};return i.useEffect(()=>{(async()=>{const a=await b();a&&(S(a.length),v(Math.ceil(a.length/10)),y(a),C(a),w(!1))})()},[]),x?e.jsx(V,{}):e.jsx("div",{children:e.jsxs("table",{className:"price-list-table",children:[e.jsxs("thead",{children:[e.jsx("tr",{className:"pagination-column",children:e.jsx("td",{className:"col-span-full",children:e.jsx("div",{className:"mx-8 py-6",children:e.jsxs("form",{className:"flex items-center justify-between relative",onSubmit:n=>n.preventDefault(),children:[e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx("label",{htmlFor:"rpp",className:"rpp-label",children:"Rows per page"}),e.jsxs("select",{className:"rpp-dropdown",name:"rpp",id:"rpp",onChange:R,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"}),e.jsx("option",{value:30,children:"30"}),e.jsx("option",{value:40,children:"40"}),e.jsx("option",{value:50,children:"50"})]})]}),e.jsxs("span",{className:"search-input-container relative",children:[e.jsx("input",{type:"text",placeholder:"Search for items",className:"searc-input focus:border-indigo-300",onChange:D}),e.jsx("span",{className:"search-icon",children:e.jsx(A,{className:"inline-block h-8 w-8 fill-[#d1d5db]"})})]})]})})})}),e.jsxs("tr",{className:"bg-[#F7F8FD]",children:[e.jsx("th",{className:"flex items-center justify-center gap-2 cursor-pointer",children:e.jsx("span",{children:"index"})}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>j("category_name"),children:[e.jsx("span",{children:"category"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>j("product_name"),children:[e.jsx("span",{children:"product"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>j("service_name"),children:[e.jsx("span",{children:"service"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>j("price_price"),children:[e.jsx("span",{children:"price"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]})]})]}),e.jsxs("tbody",{children:[F.slice((s-1)*h,s*h).map((n,a)=>{const{category_name:p,price_price:o,product_name:L,service_name:d}=n;return e.jsxs("tr",{className:"transition duration-200 hover:bg-[rgba(226,225,231,0.39)]",children:[e.jsx("td",{children:(s-1)*h+(a+1)}),e.jsx("td",{children:p}),e.jsx("td",{children:L}),e.jsx("td",{children:d}),e.jsx("td",{children:o})]},a)}),g===0&&e.jsx("tr",{children:e.jsx("td",{className:"col-span-5",children:"No Item Found !"})}),g!=0&&e.jsx("tr",{className:"pagination-column",children:e.jsx("td",{colSpan:5,className:"col-span-full",children:e.jsxs("div",{className:"bg-white flex items-center justify-between px-8",children:[e.jsxs("p",{className:"current-page-num font-medium",children:["Showing ",(s-1)*h+1," to"," ",s===t?g:s*h," ","entries"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`pagination-btn ${r===-2&&"active-page"}`,onClick:()=>{s!==1&&(c(1),l(-2))},children:e.jsx(E,{className:`${s==1?"page-icon-light":"page-icon"}`})}),e.jsx("button",{className:`pagination-btn ${r===-1&&"active-page"}`,onClick:()=>{s!==1&&(c(s-1),l(-1))},children:e.jsx(I,{className:`${s==1?"page-icon-light":"page-icon"}`})}),t>1&&e.jsx("button",{className:`pagination-btn ${r===1&&"active-page"}`,onClick:()=>{s!==1&&(c(1),l(1))},children:e.jsx("span",{className:"page-num",children:"1"})}),t>2&&e.jsx("button",{className:`pagination-btn ${r===2&&"active-page"}`,onClick:()=>{s!==2&&(c(2),l(2))},children:e.jsx("span",{className:"page-num",children:"2"})}),t>3&&e.jsx("button",{className:`pagination-btn ${r===3&&"active-page"}`,onClick:()=>{s!==3&&(c(3),l(3))},children:e.jsx("span",{className:"page-num",children:"3"})}),t>2&&e.jsx("button",{className:"pagination-btn border-transparent",children:e.jsx("span",{className:"page-num",children:"..."})}),e.jsx("button",{className:`pagination-btn ${r===t&&"active-page"}`,onClick:()=>{s!==t&&(c(t),l(t))},children:e.jsx("span",{className:"page-num",children:t})}),e.jsx("button",{className:`pagination-btn ${r===100&&"active-page"}`,onClick:()=>{s!==t&&(c(s+1),l(100))},children:e.jsx(B,{className:`${s==t?"page-icon-light":"page-icon"}`})}),e.jsx("button",{className:`pagination-btn ${r===200&&"active-page"}`,onClick:()=>{s!==t&&(c(t),l(200))},children:e.jsx(M,{className:`${s==t?"page-icon-light":"page-icon"}`})})]})]})})})]})]})})};export{X as default};
