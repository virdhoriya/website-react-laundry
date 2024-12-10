import{_ as N,r as n,u as P,j as e,q as T,t as M,v as U,w as G,x as z,y as H,z as q}from"./index-D7dDbGKN.js";import{d as F}from"./dayjs.min-BqW-oj2f.js";import{a as V,b as p,c as u}from"./index-DEw00dck.js";import{L as J}from"./Loading-Ce4aIx4b.js";const K=()=>{const h="http://35.154.167.170:3000",d=localStorage.getItem("token");return{getOrders:async()=>{try{const l=await fetch(`${h}/orders`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),x=await l.json();return l.ok?x==null?void 0:x.data:(N.error("Failed to fetch orders!"),!1)}catch{return N.error("Failed to fetch orders!"),!1}}}},Q=()=>{const h="http://35.154.167.170:3000",d=localStorage.getItem("token");return{getOrders02:async(l,x="ASC",w="order_id")=>{try{const f=await fetch(`${h}/orders?sort_by=${w}&order=${x.toUpperCase()}&per_page=10&page_number=${l}`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),k=await f.json();return f.ok?k.data:(N.error("Failed to fetch orders!"),!1)}catch{return N.error("Failed to fetch orders!"),!1}}}},se=()=>{const{getOrders:h}=K(),{getOrders02:d}=Q(),[b,l]=n.useState([]),[x,w]=n.useState(0),[f,k]=n.useState(0),[A,C]=n.useState(!0),[t,$]=n.useState(0),[a,O]=n.useState(1),[g,S]=n.useState(0),[c,r]=n.useState(1),[v,_]=n.useState("asc"),D=P(),i=async o=>{C(!0),O(o);const s=await d(o);s&&(l(s.result),C(!1))},m=async o=>{if(v=="desc"){_("asc");const s=await d(a,v,o);s&&l(s.result)}else{_("desc");const s=await d(a,v,o);s&&l(s.result)}};return n.useEffect(()=>{(async()=>{var j;const s=await h();s&&(k((j=s==null?void 0:s.totalPendingAmount)==null?void 0:j.total_pending_due_amount),w(s.inProgressCount),S(s.count),$(Math.ceil(s.count/10)),l(s.result),C(!1))})()},[]),A?e.jsx(J,{}):e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex gap-14",children:[e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#FFE0EB] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(T,{className:"inline-block p-5 h-full w-full fill-[#FF82AC]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Total Pending Due Amount"}),e.jsxs("p",{className:"card-price",children:["₹",f||"0"]})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#DCFAF8] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(V,{className:"inline-block p-7 h-full w-full fill-[#16DBCC]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Lifetime Total Order Number"}),e.jsx("p",{className:"card-price",children:g})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#FEF7E7] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(M,{className:"inline-block p-6 h-full w-full fill-[#F2B413]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Total In Progress Orders"}),e.jsx("p",{className:"card-price",children:x})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("h3",{className:"booking-title",children:"Your Booking List"}),e.jsxs("div",{className:"orders-table-container",children:[e.jsxs("table",{className:"orders-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("order_id"),children:[e.jsx("span",{children:"order id"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("created_at"),children:[e.jsx("span",{children:"booking date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("estimated_delivery_time"),children:[e.jsx("span",{children:"delivery date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("total"),children:[e.jsx("span",{children:"amount"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("kasar_amount"),children:[e.jsx("span",{children:"kasar"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("paid_amount"),children:[e.jsx("span",{children:"paid amount"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("order_status"),children:[e.jsx("span",{children:"status"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(p,{className:"updown-icon"}),e.jsx(u,{className:"updown-icon"})]})]}),e.jsx("th",{children:e.jsx("span",{children:"View"})})]})}),e.jsx("tbody",{children:g>0?b.map((o,s)=>{const{order_id:j,total:E,created_at:R,estimated_delivery_time:L,kasar_amount:Y,paid_amount:B,order_status:y,order_status_name:I}=o;return e.jsxs("tr",{children:[e.jsx("td",{children:j}),e.jsx("td",{children:F(R).format("DD/MM/YYYY, hh:mm A")}),e.jsx("td",{children:F(L).format("DD/MM/YYYY")}),e.jsxs("td",{children:["₹",E]}),e.jsxs("td",{children:["₹",Y]}),e.jsx("td",{children:B||"₹0"}),e.jsx("td",{style:{padding:"5px",textAlign:"left"},className:"flex items-center justify-center",children:e.jsx("span",{className:`inline-block px-4 py-1 rounded-lg font-medium text-[1rem] leading-[2.4rem] order-status-label-${y>=4&&y<9?0:y}`,children:I})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:e.jsx(U,{className:"inline-block h-8 w-8 cursor-pointer",onClick:()=>D("/dashboard/view-order",{state:{order_id:j}})})})]},s)}):e.jsx("tr",{children:e.jsx("td",{className:"text-center col-span-full",children:"No record found!"})})})]}),e.jsx("div",{className:"bg-white flex items-center justify-between px-8",children:g>10&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"current-page-num",children:["Showing"," ",a===1&&"1"||(a-1)*10+1," to"," ",a===t?g:a*10," entries"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`pagination-btn ${c===-2&&"active-page"}`,onClick:()=>{a!==1&&(i(1),r(-2))},children:e.jsx(G,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${c===-1&&"active-page"}`,onClick:()=>{a!==1&&(i(a-1),r(-1))},children:e.jsx(z,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${c===1&&"active-page"}`,onClick:()=>{a!==1&&(i(1),r(1))},children:e.jsx("span",{className:"page-num",children:"1"})}),t>1&&e.jsx("button",{className:`pagination-btn ${c===2&&"active-page"}`,onClick:()=>{a!==2&&(i(2),r(2))},children:e.jsx("span",{className:"page-num",children:"2"})}),t>2&&e.jsx("button",{className:`pagination-btn ${c===3&&"active-page"}`,onClick:()=>{a!==3&&(i(3),r(3))},children:e.jsx("span",{className:"page-num",children:"3"})}),t>3&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"pagination-btn border-transparent",children:e.jsx("span",{className:"page-num",children:"..."})}),e.jsx("button",{className:`pagination-btn ${c===t&&"active-page"}`,onClick:()=>{a!==t&&(i(t),r(t))},children:e.jsx("span",{className:"page-num",children:t})})]}),e.jsx("button",{className:`pagination-btn ${c===100&&"active-page"}`,children:e.jsx(H,{className:"page-icon",onClick:()=>{a!==t&&(i(a+1),r(100))}})}),e.jsx("button",{className:`pagination-btn ${c===200&&"active-page"}`,children:e.jsx(q,{className:"page-icon",onClick:()=>{a!==t&&(i(t),r(200))}})})]})]})})]})]})]})};export{se as default};
