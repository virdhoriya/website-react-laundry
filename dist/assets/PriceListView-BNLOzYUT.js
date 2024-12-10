import{_ as k,r as c,j as e,B as A,w as B,x as E,y as I,z as M}from"./index-D7dDbGKN.js";import{b as f,c as N}from"./index-DEw00dck.js";import{L as V}from"./Loading-Ce4aIx4b.js";const z=()=>{const b="http://35.154.167.170:3000",m=localStorage.getItem("token");return{getPriceList:async()=>{try{const u=await fetch(`${b}/prices/customer`,{method:"GET",headers:{Authorization:`Bearer ${m}`}}),w=await u.json();return u.ok?w:(k.error("Failed to fetch price list!"),!1)}catch{return k.error("Failed to fetch price list!"),!1}}}},q=()=>{const{getPriceList:b}=z(),[m,y]=c.useState([]),[u,w]=c.useState(!0),[t,v]=c.useState(0),[s,i]=c.useState(1),[r,l]=c.useState(1),[$,F]=c.useState("asc"),[P,C]=c.useState([]),[j,S]=c.useState(0),[h,_]=c.useState(10),g=n=>{const a=$==="asc"?"desc":"asc";F(a);const p=m.sort((o,L)=>{const d=o[n],x=L[n];return typeof d=="string"&&typeof x=="string"?a==="asc"?d.localeCompare(x):x.localeCompare(d):a==="asc"?d-x:x-d});C(p)},R=n=>{let a=n.target.value;_(a),v(Math.ceil(j/a))},D=n=>{n.preventDefault();let a=n.target.value;const p=m.filter(o=>o.category_name.toLowerCase().includes(a.toLowerCase())||o.product_name.toLowerCase().includes(a.toLowerCase())||o.service_name.toLowerCase().includes(a.toLowerCase())||o.price_price.toString().toLowerCase().includes(a.toLowerCase()));C(p),v(Math.ceil(p.length/h)),S(p.length)};return c.useEffect(()=>{(async()=>{const a=await b();a&&(S(a.length),v(Math.ceil(a.length/10)),y(a),C(a),w(!1))})()},[]),u?e.jsx(V,{}):e.jsx("div",{children:e.jsxs("table",{className:"price-list-table",children:[e.jsxs("thead",{children:[e.jsx("tr",{className:"pagination-column",children:e.jsx("td",{className:"col-span-full",children:e.jsx("div",{className:"mx-8 py-6",children:e.jsxs("form",{className:"flex items-center justify-between relative",onSubmit:n=>n.preventDefault(),children:[e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx("label",{htmlFor:"rpp",className:"rpp-label",children:"Rows per page"}),e.jsxs("select",{className:"rpp-dropdown",name:"rpp",id:"rpp",onChange:R,children:[e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"}),e.jsx("option",{value:30,children:"30"}),e.jsx("option",{value:40,children:"40"}),e.jsx("option",{value:50,children:"50"})]})]}),e.jsxs("span",{className:"search-input-container relative",children:[e.jsx("input",{type:"text",placeholder:"Search for items",className:"searc-input focus:border-indigo-300",onChange:D}),e.jsx("span",{className:"search-icon",children:e.jsx(A,{className:"inline-block h-8 w-8 fill-[#d1d5db]"})})]})]})})})}),e.jsxs("tr",{className:"bg-[#F7F8FD]",children:[e.jsx("th",{className:"flex items-center justify-center gap-2 cursor-pointer",children:e.jsx("span",{children:"index"})}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("category_name"),children:[e.jsx("span",{children:"category"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("product_name"),children:[e.jsx("span",{children:"product"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("service_name"),children:[e.jsx("span",{children:"service"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("price_price"),children:[e.jsx("span",{children:"price"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(f,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]})]})]}),e.jsxs("tbody",{children:[P.slice((s-1)*h,s*h).map((n,a)=>{const{category_name:p,price_price:o,product_name:L,service_name:d}=n;return e.jsxs("tr",{className:"transition duration-200 hover:bg-[rgba(226,225,231,0.39)]",children:[e.jsx("td",{children:(s-1)*h+(a+1)}),e.jsx("td",{children:p}),e.jsx("td",{children:L}),e.jsx("td",{children:d}),e.jsx("td",{children:o})]},a)}),j===0&&e.jsx("tr",{children:e.jsx("td",{className:"col-span-5",children:"No Item Found !"})}),j!=0&&e.jsx("tr",{className:"pagination-column",children:e.jsx("td",{colSpan:5,className:"col-span-full",children:e.jsxs("div",{className:"bg-white flex items-center justify-between px-8",children:[e.jsxs("p",{className:"current-page-num font-medium",children:["Showing ",(s-1)*h+1," to"," ",s===t?j:s*h," ","entries"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`pagination-btn ${r===-2&&"active-page"}`,onClick:()=>{s!==1&&(i(1),l(-2))},children:e.jsx(B,{className:`${s==1?"page-icon-light":"page-icon"}`})}),e.jsx("button",{className:`pagination-btn ${r===-1&&"active-page"}`,onClick:()=>{s!==1&&(i(s-1),l(-1))},children:e.jsx(E,{className:`${s==1?"page-icon-light":"page-icon"}`})}),t>1&&e.jsx("button",{className:`pagination-btn ${r===1&&"active-page"}`,onClick:()=>{s!==1&&(i(1),l(1))},children:e.jsx("span",{className:"page-num",children:"1"})}),t>2&&e.jsx("button",{className:`pagination-btn ${r===2&&"active-page"}`,onClick:()=>{s!==2&&(i(2),l(2))},children:e.jsx("span",{className:"page-num",children:"2"})}),t>3&&e.jsx("button",{className:`pagination-btn ${r===3&&"active-page"}`,onClick:()=>{s!==3&&(i(3),l(3))},children:e.jsx("span",{className:"page-num",children:"3"})}),t>2&&e.jsx("button",{className:"pagination-btn border-transparent",children:e.jsx("span",{className:"page-num",children:"..."})}),e.jsx("button",{className:`pagination-btn ${r===t&&"active-page"}`,onClick:()=>{s!==t&&(i(t),l(t))},children:e.jsx("span",{className:"page-num",children:t})}),e.jsx("button",{className:`pagination-btn ${r===100&&"active-page"}`,onClick:()=>{s!==t&&(i(s+1),l(100))},children:e.jsx(I,{className:`${s==t?"page-icon-light":"page-icon"}`})}),e.jsx("button",{className:`pagination-btn ${r===200&&"active-page"}`,onClick:()=>{s!==t&&(i(t),l(200))},children:e.jsx(M,{className:`${s==t?"page-icon-light":"page-icon"}`})})]})]})})})]})]})})};export{q as default};
