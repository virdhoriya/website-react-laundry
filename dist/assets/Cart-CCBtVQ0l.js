import{r as c,j as e,P as v,a as L,w as je,x as ye,o as J,p as Z,y as be,d as P,z as ve,A as Ne,G as Ce,B as ke,_ as j,u as we,l as K,C as Se,I as Ae,D as Pe,E as W,L as Ie,H as De}from"./index-d12XFQPa.js";import{u as Fe,a as _e,H as Re,b as Oe,B as Te}from"./useDeleteProduct-x7Kj5R6b.js";import{u as $e,a as ze,A as qe}from"./useFetchAddress--lRm-NR7.js";import{I as Me}from"./IconButton-BcBchiQg.js";import{b as Ee,g as Ue,q as Y,t as ee,e as V,c as q,m as se,f as Be,h as Le,i as Ve}from"./ButtonBase-CMFRa2_h.js";import{c as He}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-Sqk2xK8c.js";function Qe(t){return Ee("MuiCircularProgress",t)}Ue("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const I=44,U=Y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,B=Y`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,Ge=typeof U!="string"?ee`
        animation: ${U} 1.4s linear infinite;
      `:null,Je=typeof B!="string"?ee`
        animation: ${B} 1.4s ease-in-out infinite;
      `:null,Ze=t=>{const{classes:s,variant:r,color:i,disableShrink:x}=t,h={root:["root",r,`color${q(i)}`],svg:["svg"],circle:["circle",`circle${q(r)}`,x&&"circleDisableShrink"]};return Ve(h,Qe,s)},Ke=V("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,s[r.variant],s[`color${q(r.color)}`]]}})(se(({theme:t})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("transform")}},{props:{variant:"indeterminate"},style:Ge||{animation:`${U} 1.4s linear infinite`}},...Object.entries(t.palette).filter(He()).map(([s])=>({props:{color:s},style:{color:(t.vars||t).palette[s].main}}))]}))),We=V("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,s)=>s.svg})({display:"block"}),Xe=V("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.circle,s[`circle${q(r.variant)}`],r.disableShrink&&s.circleDisableShrink]}})(se(({theme:t})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:t.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:s})=>s.variant==="indeterminate"&&!s.disableShrink,style:Je||{animation:`${B} 1.4s ease-in-out infinite`}}]}))),Ye=c.forwardRef(function(s,r){const i=Be({props:s,name:"MuiCircularProgress"}),{className:x,color:h="primary",disableShrink:o=!1,size:n=40,style:d,thickness:m=3.6,value:C=0,variant:f="indeterminate",...N}=i,w={...i,color:h,disableShrink:o,size:n,thickness:m,value:C,variant:f},y=Ze(w),u={},g={},k={};if(f==="determinate"){const l=2*Math.PI*((I-m)/2);u.strokeDasharray=l.toFixed(3),k["aria-valuenow"]=Math.round(C),u.strokeDashoffset=`${((100-C)/100*l).toFixed(3)}px`,g.transform="rotate(-90deg)"}return e.jsx(Ke,{className:Le(y.root,x),style:{width:n,height:n,...g,...d},ownerState:w,ref:r,role:"progressbar",...k,...N,children:e.jsx(We,{className:y.svg,ownerState:w,viewBox:`${I/2} ${I/2} ${I} ${I}`,children:e.jsx(Xe,{className:y.circle,style:u,ownerState:w,cx:I,cy:I,r:(I-m)/2,fill:"none",strokeWidth:m})})})}),te=({item:t})=>{const s=L(),{deleteProduct:r,loading:i}=Fe(),{updateCart:x}=_e(),[h,o]=c.useState(!1),[n,d]=c.useState(!1),[m,C]=c.useState(t.quantity),[f,N]=c.useState(!1),[w,y]=c.useState(!1),[u,g]=c.useState(""),{product_image:k,cart_id:l,product_name:D,service_name:S,price:F,description:_}=t,T=async()=>{o(!0);let b=m+1;C(b),await x(l,{quantity:b})&&s(J({cart_id:l,quantity:b})),o(!1)},O=async()=>{if(o(!0),m>1){let b=m-1;C(b),await x(l,{quantity:b})&&s(J({cart_id:l,quantity:b}))}else await r(l)&&s(Z(l));o(!1)},R=async()=>{await r(l)&&s(Z(l))},$=async()=>{d(!0),await x(l,{description:u})&&(s(be({cart_id:l,itemDescription:u})),N(!1),y(!0)),d(!1)};return c.useEffect(()=>{t!=null&&t.description&&(g(t==null?void 0:t.description),y(!0))},[t==null?void 0:t.description]),e.jsxs("tr",{className:"relative",children:[e.jsx("td",{className:"text-center",children:e.jsx("img",{src:k,alt:"Product Image",className:"inline-block max-w-32 max-h-40 h-auto"})}),e.jsxs("td",{className:"items-detail-cell space-y-1",children:[e.jsx("h3",{children:D}),e.jsx("p",{children:S}),_&&!f?e.jsx("p",{children:_}):e.jsx("p",{children:" "})]}),e.jsxs("td",{className:"text-center",children:["₹",F]}),e.jsx("td",{children:e.jsx("span",{className:"flex justify-center items-center",children:e.jsx("button",{className:"inc-dec-btn overflow-hidden",children:h?e.jsx("span",{className:"h-[4.1rem] w-[9.1rem] flex justify-center items-center",children:e.jsx("span",{className:"inline-block h-10 w-10 rounded-full border-4 border-gray-200 border-t-[var(--secondary)] animate-spin"})}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"py-[1.1rem] pl-[1.2rem] cursor-pointer",onClick:()=>O(),children:e.jsx(Re,{className:"indec-icon"})}),m,e.jsx("span",{className:"py-[1.1rem] pr-[1.2rem] cursor-pointer",onClick:()=>T(),children:e.jsx(Oe,{className:"indec-icon"})})]})})})}),e.jsxs("td",{className:"text-center",children:["₹",F*m]}),e.jsxs("td",{className:"flex justify-around items-start",children:[e.jsx("span",{role:"button",onClick:()=>N(!f),className:"h-14 w-14 bg-[rgba(103,113,130,0.2)] rounded-full flex justify-center items-center cursor-pointer",children:e.jsx(je,{className:"inline-block h-8 w-8 fill-[var(--primary)]"})}),e.jsx("span",{className:"h-14 w-14 bg-[rgba(103,113,130,0.2)] rounded-full flex justify-center items-center cursor-pointer",onClick:()=>R(),children:i?e.jsxs("div",{role:"status",children:[e.jsxs("svg",{"aria-hidden":"true",className:"w-9 h-9 text-white animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),e.jsx("span",{className:"sr-only",children:"Loading..."})]}):e.jsx(ye,{className:"inline-block h-8 w-8 fill-[var(--secondary)]"})})]}),f&&e.jsx("td",{className:"description-cell col-span-full",children:e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:u,onChange:b=>g(b.target.value),rows:"2",placeholder:"Description"}),e.jsx("button",{"aria-label":"save-description",className:"save-description",onClick:$,disabled:n,children:n?e.jsx("div",{className:"w-[3.5rem] flex justify-center items-center",children:e.jsx("span",{className:"small-spinner animate-spin"})}):"save"})]})})]})};te.propTypes={item:v.shape({product_image:v.string.isRequired,cart_id:v.number.isRequired,product_name:v.string.isRequired,service_name:v.string.isRequired,price:v.number.isRequired,quantity:v.number.isRequired,description:v.string}).isRequired};const es=()=>{const t=P(s=>s.cart.cartItems);return e.jsxs("table",{className:"cart-table",children:[e.jsx("thead",{className:"bg-[#f7f8fd]",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Product"}),e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Subtotal"}),e.jsx("th",{children:" "})]})}),e.jsx("tbody",{children:t.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:"4",className:"text-center",children:"No item found"})}):t.map(s=>e.jsx(te,{item:s},s.cart_id))})]})},X=()=>e.jsxs("div",{className:"flex items-center gap-6 p-8 border border-[#e0e0e0] rounded-xl",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-full shimmer-2"}),e.jsxs("div",{className:"grow flex flex-col gap-3 items-start rounded-sm relative",children:[e.jsx("span",{className:"inline-block w-20 h-12 rounded-md bg-gray-200 shimmer"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("span",{className:"inline-block w-40 h-10 bg-gray-200 rounded-md shimmer"}),e.jsx("span",{className:"inline-block w-40 h-10 bg-gray-200 rounded-md shimmer"})]}),e.jsx("div",{className:"w-1/2 h-10 bg-gray-200 rounded-md shimmer"})]})]}),re=({setSelectAddId:t})=>{const s=L(),[r,i]=c.useState(!1),[x,h]=c.useState(!1),[o,n]=c.useState(null),{loading:d}=$e(),{deleteAddress:m,loading:C}=ze(),f=P(u=>u.address.address);function N(){i(!0),n(null)}function w(u){n(u),h(!0),i(!0)}async function y(u){await m(u)&&s(Ne(u))}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"cart-sub-title",children:"Select Address"}),e.jsxs("button",{className:"address-btn flex items-center gap-4",onClick:N,children:[e.jsx(ve,{className:"inline-block h-[1.6rem] w-[1.6rem] fill-[var(--secondary)]"}),e.jsx("span",{children:"Add New Address"})]})]}),e.jsx("div",{className:"flex flex-col gap-8",children:d?e.jsxs(e.Fragment,{children:[e.jsx(X,{}),e.jsx(X,{})]}):f&&f.length>0?f.map(u=>{const{address_id:g,full_name:k,building_number:l,phone_number:D,landmark:S,area:F,city:_,state:T,pincode:O,address_type:R}=u,$={1:"Home",2:"Office",3:"Other"};return e.jsxs("div",{className:"flex items-center gap-6 p-8 border border-[#e0e0e0] rounded-xl",children:[e.jsx("div",{children:e.jsx("input",{type:"radio",name:"address",className:"appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2",onChange:()=>{t(g)}})}),e.jsxs("div",{className:"grow flex flex-col gap-3 items-start rounded-sm relative",children:[e.jsx("span",{className:"bg-[#f0f0f0] px-2 py-2.5 rounded-md uppercase text-[1.1rem] text-[#878787] font-semibold",children:$[R]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("h4",{className:"text-[1.4rem] text-[var(--black)] font-semibold",children:k}),e.jsx("h4",{className:"text-[1.4rem] text-[var(--black)] font-semibold",children:D})]}),e.jsxs("span",{className:"text-[1.4rem] text-[var(--black)] font-normal",children:[`${l}, ${F}, ${S}, ${_}, ${T} - `,e.jsx("h4",{className:"inline-block text-[1.4rem] text-[var(--black)] font-semibold",children:O})]}),e.jsxs("div",{className:"del-edit-menu relative",children:[e.jsxs("span",{className:"three-dots",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("ul",{className:"shortcut",children:[e.jsx("li",{onClick:()=>w(u),children:"Edit"}),e.jsx("li",{onClick:()=>y(g),children:C?"Deleting..":"Delete"})]})]})]})]},g)}):e.jsx("span",{className:"self-center text-3xl text-[var(--black)] font-medium",children:"No address Found !"})})]}),r&&e.jsx(qe,{setIsOpen:i,isOpen:r,address:o,isEditMode:x})]})};re.propTypes={setSelectAddId:v.func.isRequired};const ae=({instruction:t,setInstruction:s})=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("label",{htmlFor:"addInstruction",className:"cart-sub-title",children:"Add Instruction"}),e.jsx("textarea",{name:"add-instruction",id:"addInstruction",value:t,onChange:r=>s(r.target.value),className:"border border-[border-[#B9BCCF4D] rounded-md focus:outline-none focus:ring-1 px-4 py-6 font-[var(--black)]",placeholder:"Write Message here ..."})]});ae.propTypes={instruction:v.string,setInstruction:v.func.isRequired};function ss(t){return Ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"},child:[]},{tag:"path",attr:{d:"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"},child:[]}]})(t)}const ne=({setPayementMethod:t})=>e.jsxs("form",{className:"flex flex-col gap-12",children:[e.jsx("h4",{className:"cart-sub-title",children:"Select Payment Method"}),e.jsxs("label",{className:"border-[1.5px] border-black cursor-pointer p-6 rounded-md flex justify-between items-center shadow w-[50rem]  transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center space-x-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(ss,{className:"inline-block h-14 w-14 fill-[var(black)]"})}),e.jsx("h2",{className:"text-[2.2rem] leading-[3.5rem] capitalize",children:"Cash On Delivery"})]}),e.jsx("input",{type:"radio",name:"payment",className:"appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2",onChange:()=>{t(1)}})]}),e.jsxs("label",{className:"border-[1.5px] border-black cursor-pointer p-6 rounded-md flex justify-between items-center shadow w-[50rem]  transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center space-x-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(ke,{className:"inline-block h-14 w-14 fill-[var(black)]"})}),e.jsx("h2",{className:"text-[2.2rem] leading-[3.5rem] capitalize",children:"Online Payement"})]}),e.jsx("input",{type:"radio",name:"payment",className:"appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2",onChange:()=>{t(2)}})]})]});ne.propTypes={setPayementMethod:v.func.isRequired};const ts=()=>{const[t,s]=c.useState(!1),r="http://3.110.208.70/:3000",i=localStorage.getItem("token"),x=P(o=>o.user.user.user_id);return{placeOrder:async(o,n,d,m,C,f,N,w,y="",u=0)=>{let g=1;f===2&&y&&(g=2);try{s(!0);const k=await fetch(`${r}/orders`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({items:o,description:d,coupon_code:m,sub_total:n,shipping_charges:C,payment_type:f,order_status:1,payment_status:g,address_id:N,user_id:x,express_delivery_charges:w,transaction_id:y,paid_amount:u})}),l=await k.json();return k.ok?(j.success("Order placed successfully!"),l.data):(j.error(l.message),!1)}catch{return j.error("Failed to place an order!"),!1}finally{s(!1)}},loading:t}},rs=()=>{const[t,s]=c.useState(!1),r="http://3.110.208.70/:3000",i=localStorage.getItem("token");return{applyCoupon:async(h,o)=>{try{s(!0);const n=await fetch(`${r}/coupon/apply`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({coupon_code:o,order_Total:h})}),d=await n.json();return n.ok?(j.success(d==null?void 0:d.message),d==null?void 0:d.data):(j.error(d.message||"Invalid coupon code."),null)}catch{return j.error("Failed to apply coupon code!"),null}finally{s(!1)}},loading:t}},as=()=>{const[t,s]=c.useState(!1),[r,i]=c.useState([]);return{getAllCoupon:async()=>{const h="http://3.110.208.70/:3000",o=localStorage.getItem("token");try{s(!0);const n=await fetch(`${h}/customer/coupon`,{method:"GET",headers:{Authorization:`Bearer ${o}`}}),d=await n.json();n.ok?i(d==null?void 0:d.data):(j.error("Failed to get coupon codes!"),i([]))}catch{j.error("Failed to get coupon codes!"),i([])}finally{s(!1)}},loading:t,coupons:r}},ns=()=>{const[t,s]=c.useState(!1),r="http://3.110.208.70/:3000",i=localStorage.getItem("token");return{getTransactionId:async h=>{if(!h){j.error("Amount is required to generate the transaction id.");return}try{s(!0);const o=await fetch(`${r}/razorpay/create-order`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({amount:h})}),n=await o.json();if(!o.ok){j.error("Failed to create order !");return}return n==null?void 0:n.razorpay_order_id}catch{j.error("Failed to create order !");return}finally{s(!1)}},loading:t}},ls=()=>{const[t,s]=c.useState(!1),r="http://3.110.208.70/:3000",i=localStorage.getItem("token");return{verifyPayement:async h=>{try{return s(!0),(await fetch(`${r}/razorpay/verify`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify(h)})).ok?{status:!0}:(j.success("Failed to verify payement!"),{status:!1})}catch{return j.error("Failed to verify payement"),{status:!1}}finally{s(!1)}},loading:t}},le=({instruction:t,paymentMethod:s,selectedAddId:r})=>{const i=L(),{getAllCoupon:x,loading:h,coupons:o}=as(),[n,d]=c.useState(!1),m=P(a=>a.cart.subTotal),C=P(a=>a.cart.cartItems),f=parseInt(P(a=>{var p,A;return(A=(p=a==null?void 0:a.setting)==null?void 0:p.settings)==null?void 0:A.shipping_charge})),N=parseInt(P(a=>a.setting.settings.express_delivery_charge)),w=we(),[y,u]=c.useState(""),[g,k]=c.useState(0),[l,D]=c.useState({code:"",status:""}),[S,F]=c.useState(!1),{applyCoupon:_,loading:T}=rs(),{placeOrder:O,loading:R}=ts(),{getTransactionId:$,loading:b}=ns(),{verifyPayement:M,loading:H}=ls(),ie=P(a=>{var p;return(p=a==null?void 0:a.user)==null?void 0:p.user}),[ce,Q]=c.useState(!1),oe=async a=>{if(a.preventDefault(),!y){j.error("Coupon code should  not empty!");return}const p=await _(m,y.toUpperCase());p&&(k(p==null?void 0:p.discountAmount),D({code:y.toUpperCase(),status:!0}))},de=async()=>{if(!s&&!r){j.error("Please select Payment Method and Shipping Address");return}if(!s){j.error("Please select Payment Method");return}if(!r){j.error("Please select Shipping Address");return}if(s===1){let a=m-g,p=S?N:0;const A=await O(C,a,t,l.code,f,s,r,p);A&&(i(W()),w("/order",{state:{result:A,paymentMethod:s}}))}if(s===2){let a=Number(m)-Number(g)+Number(f)+(S&&N);const p=await $(a);if(p){const{first_name:A,last_name:E,mobile_number:z}=ie;try{const he={key:void 0,amount:a*100,currency:"INR",name:"sikka cleaners",description:"Order Payment",order_id:p,handler:async function(xe){if(!(await M(xe)).status)return;let fe=m-g,ge=S?N:0;const G=await O(C,fe,t,l.code,f,s,r,ge,p,a);G&&(i(W()),w("/order",{state:{result:G,paymentMethod:s}}))},prefill:{name:A+" "+E,email:"user@gmail.com",contact:z},theme:{color:"#161F5F"}};new window.Razorpay(he).open()}catch{j.error("Failed to initiate online payement please try again letter!")}}else return}},ue=()=>{D({code:"",status:!1}),u(""),k(0)},pe=async()=>{d(!n),n||await x()},me=async a=>{const p=await _(m,a.toUpperCase());p&&(k(p==null?void 0:p.discountAmount),D({code:a.toUpperCase(),status:!0}),u(a.toUpperCase()),d(!1))};return c.useEffect(()=>{Q(!!(b||H||R))},[b,H,R]),e.jsxs(e.Fragment,{children:[n?e.jsxs("div",{className:"all-coupon-container space-y-10",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{children:"Coupons"}),e.jsx("span",{className:"cursor-pointer inline-block h-10 w-10",onClick:()=>d(!n),children:e.jsx(K,{className:"h-full w-full text-[var(--primary)]"})})]}),h?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("span",{className:"inline-block h-16 w-16 rounded-full border-[5px] border-gray-300 border-r-indigo-500 animate-spin"})}):e.jsx("table",{className:"coupon-table w-full",children:e.jsx("tbody",{children:o.length!==0?o.map(a=>{const{coupon_id:p,code:A,discount_type:E,discount_value:z}=a;return e.jsxs("tr",{children:[e.jsx("td",{className:"justify-self-start py-3",children:e.jsx(Se,{className:"h-20 w-20 fill-[var(--secondary)] laptop-m:h-16 laptop-m:w-16"})}),e.jsx("td",{children:e.jsx("p",{className:"text-[1.8rem] text-[var(--black)] font-medium uppercase",children:A})}),e.jsx("td",{children:e.jsx("p",{className:"text-[1.8rem] text-[var(--black)] uppercase",children:E===1?"₹"+z+" OFF":z+"% OFF"})}),e.jsx("td",{children:e.jsx("button",{className:"new-apply-btn",onClick:()=>me(A),children:"apply"})})]},p)}):e.jsx("tr",{children:e.jsx("td",{className:"col-span-full text-3xl font-medium text-[var(--black)]",children:"No coupon code found !"})})})})]}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h4",{className:"cart-title",children:"Order Summary"}),e.jsxs("div",{className:"p-10 border-b border-[#b9bccf4d] flex flex-col gap-8",children:[e.jsxs("form",{onSubmit:oe,className:"flex items-center gap-8",children:[e.jsxs("div",{className:"grow relative",children:[e.jsx("input",{type:"text",placeholder:"Add Coupon Code","aria-label":"Add Coupon Code",value:y,onChange:a=>u(a.target.value),className:"w-full uppercase border border-[#EFF3FF] rounded-xl text-[1.8rem] leading-10 py-5 px-4 focus:ring-0 placeholder:lowercase"}),l.status&&e.jsx("span",{className:"clear-btn",role:"button","aria-label":"remove coupon code",onClick:ue,children:e.jsx(K,{className:"h-full w-full p-1 text-[var(--primary)]"})})]}),e.jsx("button",{type:"submit",className:`apply-btn ${l.status?"disabled-apply-btn":""}`,disabled:l.status||T,children:"Apply"})]}),e.jsx("div",{children:e.jsxs("button",{className:"flex items-center gap-8",onClick:pe,children:[e.jsx("p",{className:"text-[1.8rem] text-[var(--primary)] font-medium",children:"View More Offers"}),e.jsx("span",{className:"inline-block h-10 w-10",children:e.jsx(Ae,{className:"h-full w-full fill-[var(--primary)]"})})]})})]}),e.jsxs("div",{className:"px-12 py-12 flex flex-col gap-12",children:[e.jsxs("div",{className:"place-center",children:[e.jsx("p",{children:"Sub Total"}),e.jsxs("h5",{children:["₹",m]})]}),e.jsxs("div",{className:"place-center",children:[e.jsxs("p",{children:["Applied Coupon",l.status&&e.jsx("span",{className:"applied-coupon",children:`( ${l==null?void 0:l.code} )`})]}),e.jsxs("h5",{children:["₹",g]})]}),e.jsxs("div",{className:"place-center",children:[e.jsx("p",{children:"Shipping Charge"}),e.jsxs("h5",{children:["₹",f]})]}),e.jsxs("div",{className:"place-center relative",children:[e.jsxs("div",{className:"flex justify-center items-center gap-3",children:[e.jsx("p",{children:"Express Delivery Charge"}),S&&e.jsxs("div",{className:"relative group my-[-6px]",children:[e.jsx(Me,{onClick:()=>F(!1),children:e.jsx(Pe,{className:"h-9 w-9 fill-[var(--secondary)]"})}),e.jsxs("div",{role:"tooltip",className:"absolute z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--secondary)] text-white rounded-md shadow-sm px-3 py-2 text-lg text-nowrap",style:{top:"-30px",left:"50%",transform:"translateX(-50%)"},children:["remove",e.jsx("div",{className:"tooltip-arrow","data-popper-arrow":!0})]})]})]}),S?e.jsxs("h5",{children:["₹",N]}):e.jsx("button",{className:"edc-btn",onClick:()=>F(!0),children:"add"})]}),e.jsx("span",{className:"line"}),e.jsxs("div",{className:"place-center total-container",children:[e.jsx("p",{children:"Total"}),e.jsxs("h5",{children:["₹",Number(m)-Number(g)+Number(f)+(S&&N)]})]}),e.jsx("button",{className:"checkout-btn",onClick:de,disabled:R,children:"checkout"})]})]}),e.jsx(Te,{sx:a=>({color:"#fff",zIndex:a.zIndex.drawer+1}),open:ce,children:e.jsx(Ye,{color:"inherit"})})]})};le.propTypes={instruction:v.string.isRequired,paymentMethod:v.number.isRequired,selectedAddId:v.number.isRequired};const is=()=>e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"max-w-[38rem] flex flex-col items-center gap-4 justify-center",children:[e.jsx("img",{src:"empty-cart.png",className:"w-full h-auto object-cover rounded-lg"}),e.jsx("h1",{className:"text-5xl font-semibold text-[var(--black)]","aria-label":"Empty Cart",children:"Your cart is empty"}),e.jsx("p",{className:"text-[2rem] text-gray-500",children:"Add item's to it now."}),e.jsxs(Ie,{to:"/services",className:"mt-4 flex gap-6 items-center px-8 py-4 border border-transparent text-3xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 transition-colors duration-200","aria-label":"Start shopping",children:[e.jsx(De,{className:"h-12 w-auto"}),"Shop Now"]})]})}),gs=()=>{const t=P(n=>n.cart.cartItemCount),[s,r]=c.useState(""),[i,x]=c.useState(0),[h,o]=c.useState(0);return e.jsx("section",{className:"section-cart",children:e.jsx("div",{className:"secondary-container",children:t?e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("div",{className:"flex-[0_0_63%]",children:e.jsxs("div",{className:"flex flex-col gap-24",children:[e.jsx(es,{}),e.jsx(re,{setSelectAddId:o}),e.jsx(ae,{instruction:s,setInstruction:r}),e.jsx(ne,{setPayementMethod:x})]})}),e.jsx("div",{className:"flex-[0_0_31%] border border-[#b9bccf4d] rounded-xl sticky-summary relative",children:e.jsx(le,{instruction:s,paymentMethod:i,selectedAddId:h})})]}):e.jsx(is,{})})})};export{gs as default};
