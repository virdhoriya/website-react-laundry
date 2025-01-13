import{_ as b,G as k,c as w,u as _,r as j,j as e}from"./index-CkSB7dKI.js";import{u as D,d as f}from"./useDownloadInvoice-60wPgFCp.js";const A=()=>{const a="http://3.110.208.70:3000",i=localStorage.getItem("token");return{getOrderDetail:async s=>{try{const n=await fetch(`${a}/orders/${s}`,{method:"GET",headers:{Authorization:`Bearer ${i}`}}),t=await n.json();return n.ok?t.data:(b.error("Failed to fetch orders!"),!1)}catch{return b.error("Failed to fetch orders!"),!1}}}};function O(a){return k({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"},child:[]}]})(a)}const M=()=>{var r,d,m,o,x;const a=w(),i=_(),{getOrderDetail:c}=A(),[s,n]=j.useState([]),{downloadInvoice:t,loading:u}=D(),v={1:"Cash on delivery",2:"Online payement"},N={1:"pending payemtn",2:"full payement received",3:"partial payement received"},y=async()=>{await t(a.state.order_id)};return j.useEffect(()=>{a!=null&&a.state?(async()=>{const l=await c(a.state.order_id);l&&n(l)})():i("/dashboard/home")},[a,i]),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"text-3xl font-semibold py-4 px-6 rounded-2xl leading-[4rem] bg-white text-[var(--black)] border border-[#b9bccf4d] flex items-center justify-between",children:[e.jsxs("span",{children:["Order Details : #",a.state.order_id]}),e.jsx("span",{className:"flex justify-center items-center h-14 w-14 p-3 bg-gray-100 rounded-full border border-[#b9bccf4d] cursor-pointer",onClick:y,children:u?e.jsx("span",{className:"inline-block h-7 w-7 rounded-full border-2 border-indigo-100 border-t-indigo-600 border-r-indigo-600 animate-spin"}):e.jsx(O,{className:"h-full w-full fill-[var(--primary)]"})})]}),e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"basis-[48.8%] space-y-8",children:[e.jsxs("div",{className:"py-10 px-12 order-list-container flex flex-col gap-6",children:[e.jsx("div",{className:"text-[1.7rem] text-[var(--black)] font-medium lowercase mb-2",children:"order items"}),(r=s==null?void 0:s.items)==null?void 0:r.map(p=>{const{item_id:l,product:h,category:g}=p;return e.jsxs("div",{className:"border border-[#b9bccf4d] rounded-lg p-2 flex justify-start gap-8 bg-slate-50",children:[e.jsx("img",{src:h.image,alt:"product image",className:"inline-block max-h-16 max-w-16"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-lg",children:h.name}),e.jsxs("h4",{className:"text-base text-[#78829d]",children:["Category: ",g.name]})]})]},l)})]}),e.jsxs("div",{className:"cus-info-container",children:[e.jsx("div",{className:"text-[1.7rem] text-[var(--black)] font-medium py-5 px-12 border-b border-[#b9bccf4d]",children:"order summary"}),e.jsx("div",{className:"text-[1.4rem] text-[var(--black)] font-medium py-8 px-12",children:e.jsxs("div",{className:"flex flex-col gap-8 font-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Sub Total"}),e.jsxs("span",{children:["₹",s==null?void 0:s.sub_total]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Shipping charges"}),e.jsxs("span",{children:["₹",s==null?void 0:s.shipping_charges]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Express Delivery Charges"}),e.jsxs("span",{children:["₹",(s==null?void 0:s.express_delivery_charges)||"0"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Kasar amount"}),e.jsxs("span",{children:["₹",(s==null?void 0:s.kasar_amount)||"0"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Coupon Code"}),e.jsx("span",{children:(s==null?void 0:s.coupon_code)||"N/A"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Coupon Discount"}),e.jsxs("span",{children:["₹",(s==null?void 0:s.coupon_discount)||"0"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[19rem]",children:"Total"}),e.jsxs("span",{children:["₹",(s==null?void 0:s.total)||"0"]})]})]})})]})]}),e.jsxs("div",{className:"basis-[48.8%] space-y-8",children:[e.jsxs("div",{className:"common-container",children:[e.jsx("div",{className:"text-[1.7rem] text-[var(--primary)] font-medium py-5 px-12 border-b border-[#b9bccf4d] capitalize",children:"customer information"}),e.jsx("div",{className:"text-[1.4rem] text-[var(--black)] font-medium py-8 px-12",children:e.jsxs("div",{className:"flex flex-col gap-8 font-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"info-label",children:"Name"}),e.jsx("span",{className:"info-ans",children:((d=s==null?void 0:s.user)==null?void 0:d.first_name)+" "+((m=s==null?void 0:s.user)==null?void 0:m.last_name)})]}),e.jsxs("div",{children:[e.jsx("span",{className:"info-label",children:"Email"}),e.jsx("span",{className:"info-ans",children:(o=s==null?void 0:s.user)==null?void 0:o.email})]}),e.jsxs("div",{children:[e.jsx("span",{className:"info-label",children:"Mobile Number"}),e.jsx("span",{className:"info-ans",children:(x=s==null?void 0:s.user)==null?void 0:x.mobile_number})]})]})})]}),e.jsxs("div",{className:"common-container py-5 px-12 space-y-4",children:[e.jsx("h3",{className:"text-[1.7rem] text-[var(--primary)] font-medium capitalize",children:"shipping address"}),e.jsx("p",{className:"info-label address",children:s==null?void 0:s.address_details})]}),e.jsxs("div",{className:"common-container",children:[e.jsx("div",{className:"text-[1.7rem] text-[var(--black)] font-medium py-5 px-12 border-b border-[#b9bccf4d]",children:"payement information"}),e.jsx("div",{className:"text-[1.4rem] text-[var(--black)] font-medium py-8 px-12",children:e.jsxs("div",{className:"flex flex-col gap-8 font-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[13rem]",children:"payement type :"}),e.jsx("span",{children:v[s==null?void 0:s.payment_type]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[13rem]",children:"payement status :"}),e.jsx("span",{children:N[s==null?void 0:s.payment_status]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[13rem]",children:"Transaction ID :"}),e.jsx("span",{children:(s==null?void 0:s.transaction_id)||"N/A"})]})]})})]}),e.jsxs("div",{className:"common-container",children:[e.jsx("div",{className:"text-[1.7rem] text-[var(--black)] font-medium py-5 px-12 border-b border-[#b9bccf4d]",children:"Estimated Delivery & Pickup"}),e.jsx("div",{className:"text-[1.4rem] text-[var(--black)] font-medium py-8 px-12",children:e.jsxs("div",{className:"flex flex-col gap-8 font-normal",children:[e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[18rem]",children:"Estimated Pickup Time:"}),e.jsx("span",{children:f(s==null?void 0:s.estimated_pickup_time).format("DD/MM/YYYY")})]}),e.jsxs("div",{children:[e.jsx("span",{className:"inline-block text-[#99A1b7] w-[18rem]",children:"Estimated Delivery Time:"}),e.jsx("span",{children:f(s==null?void 0:s.estimated_delivery_time).format("DD/MM/YYYY")})]})]})})]})]})]})]})};export{M as default};
