import{_ as N,r as l,u as H,j as e,H as z,J,K,N as Q,Q as V,S as q,T as W,U as X}from"./index-COKVPBfh.js";import{u as Z,d as S}from"./useDownloadInvoice-CP4fOrL5.js";import{a as ee,b as u,c as h}from"./index-BWob5QPh.js";import{L as se}from"./Loading-DUudf8F7.js";const ae=()=>{const j="http://35.154.167.170:3000",d=localStorage.getItem("token");return{getOrders:async()=>{try{const c=await fetch(`${j}/orders`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),x=await c.json();return c.ok?x==null?void 0:x.data:(N.error("Failed to fetch orders!"),!1)}catch{return N.error("Failed to fetch orders!"),!1}}}},ne=()=>{const j="http://35.154.167.170:3000",d=localStorage.getItem("token");return{getOrders02:async(c,x="ASC",w="order_id")=>{try{const f=await fetch(`${j}/orders?sort_by=${w}&order=${x.toUpperCase()}&per_page=10&page_number=${c}`,{method:"GET",headers:{Authorization:`Bearer ${d}`}}),k=await f.json();return f.ok?k.data:(N.error("Failed to fetch orders!"),!1)}catch{return N.error("Failed to fetch orders!"),!1}}}},ie=()=>{const{getOrders:j}=ae(),{getOrders02:d}=ne(),[b,c]=l.useState([]),[x,w]=l.useState(0),[f,k]=l.useState(0),[A,C]=l.useState(!0),[n,D]=l.useState(0),[a,$]=l.useState(1),[g,O]=l.useState(0),[r,i]=l.useState(1),[v,_]=l.useState("asc"),[I,E]=l.useState(0),{downloadInvoice:R,loading:F}=Z(),L=H(),o=async t=>{C(!0),$(t);const s=await d(t);s&&(c(s.result),C(!1))},m=async t=>{if(v=="desc"){_("asc");const s=await d(a,v,t);s&&c(s.result)}else{_("desc");const s=await d(a,v,t);s&&c(s.result)}},Y=async t=>{E(t),await R(t)};return l.useEffect(()=>{(async()=>{var p;const s=await j();s&&(k((p=s==null?void 0:s.totalPendingAmount)==null?void 0:p.total_pending_due_amount),w(s.inProgressCount),O(s.count),D(Math.ceil(s.count/10)),c(s.result),C(!1))})()},[]),A?e.jsx(se,{}):e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex gap-14",children:[e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#FFE0EB] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(z,{className:"inline-block p-5 h-full w-full fill-[#FF82AC]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Total Pending Due Amount"}),e.jsxs("p",{className:"card-price",children:["₹",f||"0"]})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#DCFAF8] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(ee,{className:"inline-block p-7 h-full w-full fill-[#16DBCC]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Lifetime Total Order Number"}),e.jsx("p",{className:"card-price",children:g})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#FEF7E7] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(J,{className:"inline-block p-6 h-full w-full fill-[#F2B413]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Total In Progress Orders"}),e.jsx("p",{className:"card-price",children:x})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("h3",{className:"booking-title",children:"Your Booking List"}),e.jsxs("div",{className:"orders-table-container",children:[e.jsxs("table",{className:"orders-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("order_id"),children:[e.jsx("span",{children:"order id"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("created_at"),children:[e.jsx("span",{children:"booking date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("estimated_delivery_time"),children:[e.jsx("span",{children:"delivery date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("total"),children:[e.jsx("span",{children:"amount"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("kasar_amount"),children:[e.jsx("span",{children:"kasar"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("paid_amount"),children:[e.jsx("span",{children:"paid amt"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>m("order_status"),children:[e.jsx("span",{children:"status"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(u,{className:"updown-icon"}),e.jsx(h,{className:"updown-icon"})]})]}),e.jsx("th",{children:e.jsx("span",{children:"View"})}),e.jsx("th",{children:"..."})]})}),e.jsx("tbody",{children:g>0?b.map((t,s)=>{const{order_id:p,total:B,created_at:T,estimated_delivery_time:M,kasar_amount:P,paid_amount:U,order_status:y,order_status_name:G}=t;return e.jsxs("tr",{children:[e.jsx("td",{children:p}),e.jsx("td",{children:S(T).format("DD/MM/YYYY, hh:mm A")}),e.jsx("td",{children:S(M).format("DD/MM/YYYY")}),e.jsxs("td",{children:["₹",B]}),e.jsxs("td",{children:["₹",P]}),e.jsx("td",{children:U||"₹0"}),e.jsx("td",{style:{padding:"5px",textAlign:"left"},className:"flex items-center justify-center",children:e.jsx("span",{className:`inline-block px-4 py-1 rounded-lg font-medium text-[1rem] leading-[2.4rem] order-status-label-${y>=4&&y<9?0:y}`,children:G})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:e.jsx(K,{className:"inline-block h-8 w-8 cursor-pointer",onClick:()=>L("/dashboard/view-order",{state:{order_id:p}})})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:F&&I===p?e.jsx("span",{className:"inline-block h-8 w-8 rounded-full border-[3px] border-indigo-100 border-t-indigo-600 border-r-indigo-600 animate-spin"}):e.jsx("button",{disabled:F,children:e.jsx(Q,{className:"inline-block h-9 w-9 cursor-pointer",onClick:()=>Y(p)})})})]},s)}):e.jsx("tr",{children:e.jsx("td",{className:"text-center col-span-full",children:"No record found!"})})})]}),e.jsx("div",{className:"bg-white flex items-center justify-between px-8",children:g>10&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"current-page-num",children:["Showing"," ",a===1&&"1"||(a-1)*10+1," to"," ",a===n?g:a*10," entries"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`pagination-btn ${r===-2&&"active-page"}`,onClick:()=>{a!==1&&(o(1),i(-2))},children:e.jsx(V,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${r===-1&&"active-page"}`,onClick:()=>{a!==1&&(o(a-1),i(-1))},children:e.jsx(q,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${r===1&&"active-page"}`,onClick:()=>{a!==1&&(o(1),i(1))},children:e.jsx("span",{className:"page-num",children:"1"})}),n>1&&e.jsx("button",{className:`pagination-btn ${r===2&&"active-page"}`,onClick:()=>{a!==2&&(o(2),i(2))},children:e.jsx("span",{className:"page-num",children:"2"})}),n>2&&e.jsx("button",{className:`pagination-btn ${r===3&&"active-page"}`,onClick:()=>{a!==3&&(o(3),i(3))},children:e.jsx("span",{className:"page-num",children:"3"})}),n>3&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"pagination-btn border-transparent",children:e.jsx("span",{className:"page-num",children:"..."})}),e.jsx("button",{className:`pagination-btn ${r===n&&"active-page"}`,onClick:()=>{a!==n&&(o(n),i(n))},children:e.jsx("span",{className:"page-num",children:n})})]}),e.jsx("button",{className:`pagination-btn ${r===100&&"active-page"}`,children:e.jsx(W,{className:"page-icon",onClick:()=>{a!==n&&(o(a+1),i(100))}})}),e.jsx("button",{className:`pagination-btn ${r===200&&"active-page"}`,children:e.jsx(X,{className:"page-icon",onClick:()=>{a!==n&&(o(n),i(200))}})})]})]})})]})]})]})};export{ie as default};
