import{_ as b,G as ae,j as e,r as a,P as F,S as te,T as E,u as re,U as le,V as ne,W as R,X as oe,Y as ie,Z as ce,$ as de,a0 as pe}from"./index-DCi0TphP.js";import{a as me,b as y,c as k}from"./index-DQ-bLPRu.js";import{L as ue}from"./Loading-BL09EuYC.js";import{u as xe}from"./useDownloadInvoice-CwpcDwze.js";import{c as he}from"./createSvgIcon-C2w9wOsQ.js";import{I as O}from"./IconButton-JKv2SDKA.js";import"./ButtonBase-BqM8Ptgh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ge=()=>{const i="http://35.154.167.170:3000",n=localStorage.getItem("token");return{getOrders:async()=>{try{const o=await fetch(`${i}/orders`,{method:"GET",headers:{Authorization:`Bearer ${n}`}}),u=await o.json();return o.ok?u==null?void 0:u.data:(b.error("Failed to retrieve your orders. Please try again later.",{className:"toast-error"}),!1)}catch{return b.error("Failed to fetch orders. Please check your connection and try again.",{className:"toast-error"}),!1}}}},fe=()=>{const i="http://35.154.167.170:3000",n=localStorage.getItem("token");return{getOrders02:async(o,u,c)=>{try{const x=!u&&!c?await fetch(`${i}/orders?per_page=10&page_number=${o}`,{method:"GET",headers:{Authorization:`Bearer ${n}`}}):await fetch(`${i}/orders?sort_by=${c}&order=${u.toUpperCase()}&per_page=10&page_number=${o}`,{method:"GET",headers:{Authorization:`Bearer ${n}`}}),m=await x.json();return x.ok?m.data:(b.error("Failed to fetch orders. Please check your connection and try again.",{className:"toast-error"}),!1)}catch{return b.error("Failed to retrieve your orders. Please try again later.",{className:"toast-error"}),!1}}}};function je(i){return ae({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(i)}const be=he(e.jsx("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5"}),"RemoveRedEyeOutlined"),Ne=()=>{const[i,n]=a.useState(!1),h="http://35.154.167.170:3000",o=window.localStorage.getItem("token");return{sendFeedBack:async c=>{if(!c||typeof c!="object"){b.error("Please provide valid feedback data. Ensure all fields are filled correctly.",{className:"toast-error"});return}try{n(!0);const x=await fetch(`${h}/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify(c)}),m=await x.json();if(!x.ok){b.error((m==null?void 0:m.message)||"Oops! Something went wrong while sending your feedback. Please try again later.",{className:"toast-error"});return}return b.success("Thank you for your feedback!",{className:"toast-success"}),m}catch{b.error("Unable to send feedback at the moment. Please check your connection or try again later.",{className:"toast-error"});return}finally{n(!1)}},loading:i}},D=({order_id:i,setModelIsOpen:n,feedback:h})=>{const{sendFeedBack:o,loading:u}=Ne(),[c,x]=a.useState({}),[m,S]=a.useState(0),[N,r]=a.useState(""),[w,t]=a.useState(!1);a.useEffect(()=>{if(h){const{comment:d,rating:l}=h;r(d),S(l),t(!0)}},[h,w]);const _=d=>{w||S(d)},C=async()=>{const d={};if(m===0&&(d.star="Please select at least one star."),N===""&&(d.message="Please enter your message."),Object.keys(d).length>0){x(d);return}x({}),await o({rating:m,comment:N,order_id:i,is_publish:1})&&n(!1)};return e.jsx("div",{className:"feedback-model-container bg-black bg-opacity-70",children:e.jsxs("div",{className:"border border-[#b9bccf4d] rounded-xl bg-white px-14 py-16 flex flex-col gap-10 w-[40rem] relative",children:[e.jsxs("button",{type:"button",title:"close",className:"absolute top-2 right-2 border border-gray-300 shadow-sm rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:border-indigo-500",onClick:()=>n(!1),children:[e.jsx("span",{className:"sr-only",children:"Close menu"}),e.jsx("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})]}),e.jsxs("div",{className:"text-3xl capitalize text-[var(--primary)] font-semibold",children:["Order Id : ",i]}),e.jsxs("div",{children:[e.jsx("div",{className:"rating-star-container flex gap-2",children:Array(5).fill(0).map((d,l)=>e.jsx(E,{onClick:()=>_(l+1),className:`star cursor-pointer text-3xl ${l<m?"fill-[#FF2E17]":"fill-[#B9BCCF]"}`},l))}),c.star&&e.jsx("span",{className:"block mt-2 text-lg leading-1 text-red-500",children:c.star})]}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("label",{htmlFor:"message",className:"text-[1.4rem] leading-[2rem] text-[var(--black)]",children:"Write a Review"}),e.jsxs("div",{children:[e.jsx("textarea",{id:"message",rows:4,value:N,readOnly:w,onChange:d=>r(d.target.value),className:"w-full text-[1.4rem] leading-[2.4rem] text-[var(--black)] border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none rounded-xl p-4"}),c.message&&e.jsx("span",{className:"block text-lg leading-1 text-red-500",children:c.message})]})]}),e.jsx("div",{children:e.jsx("button",{className:`submit-review ${w?"disabled-submit":""}`,onClick:C,disabled:!!w,children:u?e.jsx("span",{className:"inline-block h-9 w-9 border-2 border-white border-r-transparent rounded-full animate-spin my-[-5px] mx-[1.5rem]"}):"submit"})})]})})};D.propTypes={order_id:F.number.isRequired,setModelIsOpen:F.func.isRequired,feedback:te.oneOfType([F.string,F.shape({comment:F.string,rating:F.number})])};const _e=()=>{const{getOrders:i}=ge(),{getOrders02:n}=fe(),[h,o]=a.useState([]),[u,c]=a.useState(0),[x,m]=a.useState(0),[S,N]=a.useState(!0),[r,w]=a.useState(0),[t,_]=a.useState(1),[C,d]=a.useState(0),[l,g]=a.useState(1),[$,L]=a.useState("asc"),[T,M]=a.useState(0),[Y,G]=a.useState(""),[z,U]=a.useState({}),{downloadInvoice:X,loading:P}=xe(),V=re(),[W,B]=a.useState(!1),f=async p=>{N(!0),_(p);const s=await n(p);s&&(o(s.result),N(!1))},v=async p=>{if($=="desc"){L("asc");const s=await n(t,$,p);s&&o(s.result)}else{L("desc");const s=await n(t,$,p);s&&o(s.result)}},Z=async p=>{M(p),await X(p)},q=(p,s)=>{B(!0),G(p),U(s)};return a.useEffect(()=>{(async()=>{var j;const s=await i();s&&(m((j=s==null?void 0:s.totalPendingAmount)==null?void 0:j.total_pending_due_amount),c(s.inProgressCount),d(s.count),w(Math.ceil(s.count/10)),o(s.result),N(!1))})()},[]),S?e.jsx(ue,{}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-8 laptop-s:gap-6",children:[e.jsxs("div",{className:"flex gap-14 laptop:gap-10 laptop-s:gap-8 tab-l:gap-6",children:[e.jsxs("div",{className:"status-card flex gap-8 items-center laptop-s:gap-6 tab-l:gap-4",children:[e.jsx("span",{className:"bg-[#FFE0EB] inline-block h-24 w-24 rounded-full laptop:h-20 laptop:w-20 tab-l:h-16 tab-l:w-16",children:e.jsx(le,{className:"inline-block p-5 h-full w-full fill-[#FF82AC] laptop:p-4 tab-l:p-3"})}),e.jsxs("div",{className:"flex flex-col gap-4 tab-l:gap-3",children:[e.jsx("p",{className:"card-label",children:"Total Pending Due Amount"}),e.jsxs("p",{className:"card-price",children:["₹",x||"0"]})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center laptop-s:gap-6 tab-l:gap-4",children:[e.jsx("span",{className:"bg-[#DCFAF8] inline-block h-24 w-24 rounded-full laptop:h-20 laptop:w-20 tab-l:h-16 tab-l:w-16",children:e.jsx(me,{className:"inline-block p-7 h-full w-full fill-[#16DBCC] laptop:p-5 tab-l:p-4"})}),e.jsxs("div",{className:"flex flex-col gap-4 tab-l:gap-3",children:[e.jsx("p",{className:"card-label",children:"Lifetime Total Order Number"}),e.jsx("p",{className:"card-price",children:C})]})]}),e.jsxs("div",{className:"status-card flex gap-8 items-center laptop-s:gap-6 tab-l:gap-4",children:[e.jsx("span",{className:"bg-[#FEF7E7] inline-block h-24 w-24 rounded-full laptop:h-20 laptop:w-20 tab-l:h-16 tab-l:w-16",children:e.jsx(ne,{className:"inline-block p-6 h-full w-full fill-[#F2B413] laptop:p-5 tab-l:p-4"})}),e.jsxs("div",{className:"flex flex-col gap-4 tab-l:gap-3",children:[e.jsx("p",{className:"card-label",children:"Total In Progress Orders"}),e.jsx("p",{className:"card-price",children:u})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-8 laptop:gap-6",children:[e.jsx("h3",{className:"booking-title",children:"Your Booking List"}),e.jsxs("div",{className:"main-orders-container",children:[e.jsx("div",{className:"orders-table-container",children:e.jsxs("table",{className:"orders-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("order_id"),children:[e.jsx("span",{children:"order id"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("created_at"),children:[e.jsx("span",{children:"booking date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("estimated_delivery_time"),children:[e.jsx("span",{children:"delivery date"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("total"),children:[e.jsx("span",{children:"amount"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("kasar_amount"),children:[e.jsx("span",{children:"kasar"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("paid_amount"),children:[e.jsx("span",{children:"paid amt"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsxs("th",{className:"flex items-center justify-center gap-2 cursor-pointer",onClick:()=>v("order_status"),children:[e.jsx("span",{children:"status"}),e.jsxs("span",{className:"flex flex-col",children:[e.jsx(y,{className:"updown-icon"}),e.jsx(k,{className:"updown-icon"})]})]}),e.jsx("th",{className:"col-span-3",children:"actions"})]})}),e.jsx("tbody",{children:C>0?h.map((p,s)=>{const{order_id:j,total:H,created_at:J,estimated_delivery_time:K,kasar_amount:Q,paid_amount:ee,order_status:A,order_status_name:se,feedback:I}=p;return e.jsxs("tr",{children:[e.jsx("td",{children:j}),e.jsx("td",{children:R(J).format("DD/MM/YYYY, hh:mm A")}),e.jsx("td",{children:R(K).format("DD/MM/YYYY")}),e.jsxs("td",{children:["₹",H]}),e.jsxs("td",{children:["₹",Q]}),e.jsx("td",{children:"₹"+ee||"0"}),e.jsx("td",{style:{padding:"5px",textAlign:"left"},className:"flex items-center justify-center",children:e.jsx("span",{className:`inline-block px-4 py-1 rounded-lg font-medium text-[1rem] leading-[2.4rem] order-status-label-${A>=4&&A<9?0:A}`,children:se})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:e.jsxs("div",{className:"relative group",children:[e.jsx(O,{onClick:()=>V("/dashboard/view-order",{state:{order_id:j}}),children:e.jsx(be,{sx:{height:"22.5px",width:"22.5px",color:"var(--primary)"}})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--primary)] text-white rounded-md shadow-sm px-3 py-2 text-sm text-nowrap",style:{top:"-25px",left:"50%",transform:"translateX(-50%)"},children:["View",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center",children:P&&T===j?e.jsx(O,{children:e.jsx("span",{className:"inline-block h-8 w-8 rounded-full border-[3px] border-indigo-100 border-t-indigo-600 border-r-indigo-600 animate-spin"})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative group",children:[e.jsx(O,{disabled:P,onClick:()=>Z(j),children:e.jsx(oe,{className:"inline-block h-9 w-9 cursor-pointer fill-[var(--primary)]"})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--primary)] text-white rounded-md shadow-sm px-3 py-2 text-sm text-nowrap",style:{top:"-25px",left:"50%",transform:"translateX(-50%)"},children:["Download",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})})}),e.jsx("td",{style:{padding:"5px"},className:"flex items-center justify-center tooltip-style",children:e.jsxs("div",{className:"relative group",children:[e.jsx(O,{onClick:()=>q(j,I),children:I?e.jsx(E,{className:"inline-block h-9 w-9 cursor-pointer fill-[var(--primary)]"}):e.jsx(je,{className:"inline-block h-9 w-9 cursor-pointer fill-[var(--primary)]"})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--primary)] text-white rounded-md shadow-sm px-3 py-2 text-sm text-nowrap",style:{top:"-25px",left:"50%",transform:"translateX(-50%)"},children:[I?"View Feedback":"Give Feedback",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})})]},s)}):e.jsx("tr",{children:e.jsx("td",{className:"text-center col-span-full",children:"No record found!"})})})]})}),e.jsx("div",{className:"bg-white flex items-center justify-between px-8 max-w-full",children:C>10&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"current-page-num",children:["Showing"," ",t===1&&"1"||(t-1)*10+1," ","to ",t===r?C:t*10," ","entries"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{className:`pagination-btn ${l===-2&&"active-page"}`,onClick:()=>{t!==1&&(f(1),g(-2))},children:e.jsx(ie,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${l===-1&&"active-page"}`,onClick:()=>{t!==1&&(f(t-1),g(-1))},children:e.jsx(ce,{className:"page-icon"})}),e.jsx("button",{className:`pagination-btn ${l===1&&"active-page"}`,onClick:()=>{t!==1&&(f(1),g(1))},children:e.jsx("span",{className:"page-num",children:"1"})}),r>1&&e.jsx("button",{className:`pagination-btn ${l===2&&"active-page"}`,onClick:()=>{t!==2&&(f(2),g(2))},children:e.jsx("span",{className:"page-num",children:"2"})}),r>2&&e.jsx("button",{className:`pagination-btn ${l===3&&"active-page"}`,onClick:()=>{t!==3&&(f(3),g(3))},children:e.jsx("span",{className:"page-num",children:"3"})}),r>3&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"pagination-btn border-transparent",children:e.jsx("span",{className:"page-num",children:"..."})}),e.jsx("button",{className:`pagination-btn ${l===r&&"active-page"}`,onClick:()=>{t!==r&&(f(r),g(r))},children:e.jsx("span",{className:"page-num",children:r})})]}),e.jsx("button",{className:`pagination-btn ${l===100&&"active-page"}`,children:e.jsx(de,{className:"page-icon",onClick:()=>{t!==r&&(f(t+1),g(100))}})}),e.jsx("button",{className:`pagination-btn ${l===200&&"active-page"}`,children:e.jsx(pe,{className:"page-icon",onClick:()=>{t!==r&&(f(r),g(200))}})})]})]})})]})]})]}),W&&e.jsx(D,{order_id:Y,setModelIsOpen:B,feedback:z})]})};export{_e as default};
