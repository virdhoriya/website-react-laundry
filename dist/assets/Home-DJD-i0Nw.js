import{_ as f,G as Q,j as e,r as t,P as R,H as V,u as ee,J as se,K as ae,N as te,Q as re,S as ne,T as le,U as ie}from"./index-BXLr0n2X.js";import{u as ce,d as $}from"./useDownloadInvoice-BFrtGrwq.js";import{a as oe,b,c as N}from"./index-rlo9JwKn.js";import{L as de}from"./Loading-CTX4jcnZ.js";import{c as me}from"./createSvgIcon-CZyJnY8q.js";import{I as F}from"./IconButton-B9Rqknsu.js";import"./ButtonBase-TtxY9Igh.js";const pe=()=>{const o="http://35.154.167.170:3000",i=localStorage.getItem("token");return{getOrders:async()=>{try{const d=await fetch(`${o}/orders`,{method:"GET",headers:{Authorization:`Bearer ${i}`}}),r=await d.json();return d.ok?r==null?void 0:r.data:(f.error("Failed to fetch orders!"),!1)}catch{return f.error("Failed to fetch orders!"),!1}}}},xe=()=>{const o="http://35.154.167.170:3000",i=localStorage.getItem("token");return{getOrders02:async(d,r="ASC",m="order_id")=>{try{const n=await fetch(`${o}/orders?sort_by=${m}&order=${r.toUpperCase()}&per_page=10&page_number=${d}`,{method:"GET",headers:{Authorization:`Bearer ${i}`}}),w=await n.json();return n.ok?w.data:(f.error("Failed to fetch orders!"),!1)}catch{return f.error("Failed to fetch orders!"),!1}}}};function ue(o){return Q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(o)}const he=me(e.jsx("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5"}),"RemoveRedEyeOutlined"),fe=()=>{const[o,i]=t.useState(!1),j="http://35.154.167.170:3000";return{sendFeedBack:async r=>{if(!r||typeof r!="object"){f.error("Invalid feedback data.");return}try{i(!0);const m=await fetch(`${j}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),n=await m.json();if(!m.ok){f.error(n.message||"Failed to send feedback!");return}return f.success((n==null?void 0:n.message)||"Feedback sent successfully!"),n}catch{f.error("Failed to send feedback!");return}finally{i(!1)}},loading:o}},B=({order_id:o,setModelIsOpen:i})=>{const{sendFeedBack:j,loading:d}=fe(),[r,m]=t.useState({}),[n,w]=t.useState(0),[y,k]=t.useState(""),l=s=>{w(s)},S=async()=>{const s={};if(n===0&&(s.star="Please select at least one star."),y===""&&(s.message="Please enter your message."),Object.keys(s).length>0){m(s);return}m({}),await j({rating:n,comment:y,order_id:o,is_publish:2})&&i(!1)};return e.jsx("div",{className:"feedback-model-container bg-black bg-opacity-70",children:e.jsxs("div",{className:"border border-[#b9bccf4d] rounded-xl bg-white px-14 py-16 flex flex-col gap-10 w-[40rem] relative",children:[e.jsxs("button",{type:"button",title:"close",className:"absolute top-2 right-2 border border-gray-300 shadow-sm rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:border-indigo-500",onClick:()=>i(!1),children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]}),e.jsxs("div",{className:"text-3xl capitalize text-[var(--primary)] font-semibold",children:["Order Id : ",o]}),e.jsxs("div",{children:[e.jsx("div",{className:"rating-star-container flex gap-2",children:Array(5).fill(0).map((s,v)=>e.jsx(V,{onClick:()=>l(v+1),className:`star cursor-pointer text-3xl ${v<n?"fill-[#FF2E17]":"fill-[#B9BCCF]"}`},v))}),r.star&&e.jsx("span",{className:"block mt-2 text-lg leading-1 text-red-500",children:r.star})]}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("label",{htmlFor:"message",className:"text-[1.4rem] leading-[2rem] text-[var(--black)]",children:"Write a Review"}),e.jsxs("div",{children:[e.jsx("textarea",{id:"message",rows:4,value:y,onChange:s=>k(s.target.value),className:"w-full text-[1.4rem] leading-[2.4rem] text-[var(--black)] border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none rounded-xl p-4"}),r.message&&e.jsx("span",{className:"block text-lg leading-1 text-red-500",children:r.message})]})]}),e.jsx("div",{children:e.jsx("button",{className:"submit-review",onClick:S,children:d?e.jsx("span",{className:"inline-block h-9 w-9 border-2 border-white border-r-transparent rounded-full animate-spin my-[-5px] mx-[1.5rem]"}):"submit"})})]})})};B.propTypes={order_id:R.number.isRequired,setModelIsOpen:R.func.isRequired};const ke=()=>{const{getOrders:o}=pe(),{getOrders02:i}=xe(),[j,d]=t.useState([]),[r,m]=t.useState(0),[n,w]=t.useState(0),[y,k]=t.useState(!0),[l,S]=t.useState(0),[s,v]=t.useState(1),[C,D]=t.useState(0),[p,x]=t.useState(1),[_,I]=t.useState("asc"),[M,E]=t.useState(0),[P,T]=t.useState(""),{downloadInvoice:Y,loading:L}=ce(),G=ee(),[U,A]=t.useState(!1),u=async c=>{k(!0),v(c);const a=await i(c);a&&(d(a.result),k(!1))},g=async c=>{if(_=="desc"){I("asc");const a=await i(s,_,c);a&&d(a.result)}else{I("desc");const a=await i(s,_,c);a&&d(a.result)}},z=async c=>{E(c),await Y(c)},H=c=>{A(!0),T(c)};return t.useEffect(()=>{(async()=>{var h;const a=await o();a&&(w((h=a==null?void 0:a.totalPendingAmount)==null?void 0:h.total_pending_due_amount),m(a.inProgressCount),D(a.count),S(Math.ceil(a.count/10)),d(a.result),k(!1))})()},[]),y?e.jsx(de,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex gap-14",children:[e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#FFE0EB] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(se,{className:"inline-block p-5 h-full w-full fill-[#FF82AC]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Total Pending Due Amount"}),e.jsxs("p",{className:"card-price",children:["₹",n||"0"]})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#DCFAF8] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(oe,{className:"inline-block p-7 h-full w-full fill-[#16DBCC]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Lifetime Total Order Number"}),e.jsx("p",{className:"card-price",children:C})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center",children:[e.jsx("span",{className:"bg-[#FEF7E7] inline-block h-[6rem] w-[6rem] rounded-full",children:e.jsx(ae,{className:"inline-block p-6 h-full w-full fill-[#F2B413]"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"card-label",children:"Total In Progress Orders"}),e.jsx("p",{className:"card-price",children:r})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("h3",{className:"booking-title",children:"Your Booking List"}),e.jsxs("div",{className:"orders-table-container",children:[e.jsxs("table",{className:"orders-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("order_id"),children:[e.jsx("span",{children:"order id"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("created_at"),children:[e.jsx("span",{children:"booking date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("estimated_delivery_time"),children:[e.jsx("span",{children:"delivery date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("total"),children:[e.jsx("span",{children:"amount"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("kasar_amount"),children:[e.jsx("span",{children:"kasar"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("paid_amount"),children:[e.jsx("span",{children:"paid amt"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>g("order_status"),children:[e.jsx("span",{children:"status"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(b,{className:"updown-icon"}),e.jsx(N,{className:"updown-icon"})]})]}),e.jsx("th",{className:"col-span-3",children:"actions"})]})}),e.jsx("tbody",{children:C>0?j.map((c,a)=>{const{order_id:h,total:X,created_at:q,estimated_delivery_time:J,kasar_amount:W,paid_amount:Z,order_status:O,order_status_name:K}=c;return e.jsxs("tr",{children:[e.jsx("td",{children:h}),e.jsx("td",{children:$(q).format("DD/MM/YYYY, hh:mm A")}),e.jsx("td",{children:$(J).format("DD/MM/YYYY")}),e.jsxs("td",{children:["₹",X]}),e.jsxs("td",{children:["₹",W]}),e.jsx("td",{children:Z||"₹0"}),e.jsx("td",{style:{padding:"5px",textAlign:"left"},className:"flex items-center justify-center",children:e.jsx("span",{className:`inline-block px-4 py-1 rounded-lg font-medium text-[1rem] leading-[2.4rem] order-status-label-${O>=4&&O<9?0:O}`,children:K})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:e.jsxs("div",{className:"relative group",children:[e.jsx(F,{onClick:()=>G("/dashboard/view-order",{state:{order_id:h}}),children:e.jsx(he,{sx:{height:"22.5px",width:"22.5px",color:"var(--primary)"}})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--primary)] text-white rounded-md shadow-sm px-3 py-2 text-sm text-nowrap",style:{top:"-25px",left:"50%",transform:"translateX(-50%)"},children:["View",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:L&&M===h?e.jsx(F,{children:e.jsx("span",{className:"inline-block h-8 w-8 rounded-full border-[3px] border-indigo-100 border-t-indigo-600 border-r-indigo-600 animate-spin"})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative group",children:[e.jsx(F,{disabled:L,onClick:()=>z(h),children:e.jsx(te,{className:"inline-block h-9 w-9 cursor-pointer fill-[var(--primary)]"})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--primary)] text-white rounded-md shadow-sm px-3 py-2 text-sm text-nowrap",style:{top:"-25px",left:"50%",transform:"translateX(-50%)"},children:["Download",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center tooltip-style",children:e.jsxs("div",{className:"relative group",children:[e.jsx(F,{onClick:()=>H(h),children:e.jsx(ue,{className:"inline-block h-9 w-9 cursor-pointer fill-[var(--primary)]"})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--primary)] text-white rounded-md shadow-sm px-3 py-2 text-sm text-nowrap",style:{top:"-25px",left:"50%",transform:"translateX(-50%)"},children:["Give Feedback",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})})]},a)}):e.jsx("tr",{children:e.jsx("td",{className:"text-center col-span-full",children:"No record found!"})})})]}),e.jsx("div",{className:"bg-white flex items-center justify-between px-8 w-[117rem]",children:C>10&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"current-page-num",children:["Showing"," ",s===1&&"1"||(s-1)*10+1," ","to ",s===l?C:s*10," ","entries"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`pagination-btn ${p===-2&&"active-page"}`,onClick:()=>{s!==1&&(u(1),x(-2))},children:e.jsx(re,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${p===-1&&"active-page"}`,onClick:()=>{s!==1&&(u(s-1),x(-1))},children:e.jsx(ne,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${p===1&&"active-page"}`,onClick:()=>{s!==1&&(u(1),x(1))},children:e.jsx("span",{className:"page-num",children:"1"})}),l>1&&e.jsx("button",{className:`pagination-btn ${p===2&&"active-page"}`,onClick:()=>{s!==2&&(u(2),x(2))},children:e.jsx("span",{className:"page-num",children:"2"})}),l>2&&e.jsx("button",{className:`pagination-btn ${p===3&&"active-page"}`,onClick:()=>{s!==3&&(u(3),x(3))},children:e.jsx("span",{className:"page-num",children:"3"})}),l>3&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"pagination-btn border-transparent",children:e.jsx("span",{className:"page-num",children:"..."})}),e.jsx("button",{className:`pagination-btn ${p===l&&"active-page"}`,onClick:()=>{s!==l&&(u(l),x(l))},children:e.jsx("span",{className:"page-num",children:l})})]}),e.jsx("button",{className:`pagination-btn ${p===100&&"active-page"}`,children:e.jsx(le,{className:"page-icon",onClick:()=>{s!==l&&(u(s+1),x(100))}})}),e.jsx("button",{className:`pagination-btn ${p===200&&"active-page"}`,children:e.jsx(ie,{className:"page-icon",onClick:()=>{s!==l&&(u(l),x(200))}})})]})]})})]})]})]}),U&&e.jsx(B,{order_id:P,setModelIsOpen:A})]})};export{ke as default};
