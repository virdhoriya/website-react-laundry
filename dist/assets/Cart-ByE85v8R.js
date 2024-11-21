import{r as m,_ as r,P as o,j as e,C as q,l as U,G as z,m as M,u as D}from"./index-grspk_p5.js";import{H as J,a as Q}from"./index-B0pWFVu_.js";const L=()=>{const[t,c]=m.useState(null),a="http://35.154.167.170:3000",n=localStorage.getItem("token");return{addToCart:async({paramId:p,product_id:l,service_id:f,itemCount:x})=>{try{const g=await fetch(`${a}/carts`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({category_id:p,product_id:l,service_id:f,quantity:x})});if(g.ok){r.success("Item Added Successfully");const N=await g.json();c(N.data.cart_id)}}catch{r.error("Error occur while adding item into cart!",{style:{maxWidth:"400px"}})}},updateProductQuantity:async p=>{try{(await fetch(`${a}/carts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({quantity:p})})).ok&&r.success(`quantity ${p} added successfully`)}catch{r.error("Error occur while adding item to cart!",{style:{maxWidth:"400px"}})}},deleteProduct:async(p=t)=>{try{const l=await fetch(`${a}/carts/${p}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}}),f=await l.json();l.ok&&r.success(f.message,{style:{maxWidth:"400px"}})}catch{r.error("Unable to delete item from cart!")}},viewCart:async()=>{try{const p=await fetch(`${a}/carts`,{method:"GET",headers:{Authorization:`Bearer ${n}`}}),l=await p.json();if(p.ok)return l.data;r.error("Failed to fetch cart data!")}catch{r.error("Unable to fetch cart data!")}},updateItemQuantity:async(p,l)=>{try{(await fetch(`${a}/carts/${p}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({quantity:l})})).ok||r.error("Unable to update cart!")}catch{r.error("Error occur while updating product quantity!",{style:{maxWidth:"400px"}})}},applyCoupon:async(p,l)=>{try{const f=await fetch(`${a}/coupon/apply`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({coupon_Code:l,order_Total:p})}),x=await f.json();if(!f.ok){r.error(x.message||"Invalid coupon code.");return}return r.success(x.message),x.data.discountAmount}catch{r.error("Unable to apply coupon code!")}}}},$=({item:t})=>{const{updateItemQuantity:c,deleteProduct:a}=L(),[n,u]=m.useState(t.quantity),{cart_id:i,product_name:s,service_name:h,price:d}=t,b=async()=>{let l=n+1;u(l),await c(i,l)},p=async()=>{if(n>1){let l=n-1;u(l),await c(i,l)}else{a(t.cart_id);return}};return e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("h3",{children:s}),e.jsx("p",{children:h}),e.jsx("p",{children:"Material: A"})]}),e.jsxs("td",{className:"text-center",children:["₹",d]}),e.jsx("td",{children:e.jsx("span",{className:"flex justify-center items-center",children:e.jsxs("button",{className:"inc-dec-btn",children:[e.jsx(J,{className:"stroke-[#B9BCCF]",onClick:p}),n,e.jsx(Q,{className:"stroke-[#B9BCCF]",onClick:b})]})})}),e.jsxs("td",{className:"text-center",children:["₹",d*n]})]})};$.propTypes={item:o.shape({cart_id:o.number.isRequired,product_name:o.string.isRequired,service_name:o.string.isRequired,price:o.number.isRequired,quantity:o.number.isRequired}).isRequired};const T=()=>{const t="http://35.154.167.170:3000",c=localStorage.getItem("token");return{viewCart:async()=>{try{const n=await fetch(`${t}/carts`,{method:"GET",headers:{Authorization:`Bearer ${c}`}}),u=await n.json();if(n.ok)return u.data;r.error("Failed to fetch cart data!")}catch{r.error("Failed to fetch cart data!")}}}},F=({setSubTotal:t})=>{const[c,a]=m.useState([]),{viewCart:n}=T();return m.useEffect(()=>{(async()=>{const i=await n();i&&a(i)})()},[]),m.useEffect(()=>{const u=c.reduce((i,s)=>i+s.price*s.quantity,0);t(u)},[c,t]),e.jsxs("table",{className:"cart-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Items"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Quantity"}),e.jsx("th",{children:"Subtotal"})]})}),e.jsx("tbody",{children:c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:"4",className:"text-center",children:"No item found"})}):c.map((u,i)=>e.jsx($,{item:u},i))})]})};F.propTypes={setSubTotal:o.func.isRequired};const O=()=>{const t="http://35.154.167.170:3000",c=localStorage.getItem("token");return{fetchAddress:async()=>{try{const s=await fetch(`${t}/address`,{method:"GET",headers:{Authorization:`Bearer ${c}`}}),h=await s.json();if(s.ok)return h.data.result;r.error("Failed to fetch address data!")}catch{r.error("Unable to fetch address data!")}},addAddress:async s=>{const h={...s,address_type:Number(s.address_type)};try{const d=await fetch(`${t}/address`,{method:"POST",headers:{"Content-type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify(h)}),b=await d.json();return d.ok?b.message:null}catch{r.error("Unable to add address!")}},deleteAddress:async s=>{try{const h=await fetch(`${t}/address/${s}`,{method:"DELETE",headers:{Authorization:`Bearer ${c}`}}),d=await h.json();h.ok||r.error(d.message),r.success(d.message)}catch{r.error("Unable to delete address, please try again later!")}},editAddress:async(s,h)=>{const d={...s,address_type:Number(s.address_type),pincode:String(s.pincode)};try{const b=await fetch(`${t}/address/${h}`,{method:"PUT",headers:{"Content-type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify(d)}),p=await b.json();b.ok?r.success(p.message):r.error(p.message,{style:{maxWidth:"700px"}})}catch{r.error("Unable to update address")}}}},I=({setIsOpen:t,isOpen:c,address:a,flag:n})=>{const{addAddress:u,editAddress:i}=O(),[s,h]=m.useState({full_name:"",phone_number:"",address_type:"1",building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:""}),d=l=>{const{name:f,value:x}=l.target;h({...s,[f]:x})},b=async l=>{if(l.preventDefault(),!n)await i(s,a.address_id),t(!1);else{const f=await u(s);h({full_name:"",phone_number:"",address_type:"1",building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:""}),f?(r.success(f),t(!1)):r.error("Unable to add address")}},p=()=>{t(!1),h({address_type:"1",full_name:"",phone_number:"",building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:""})};return m.useEffect(()=>{a&&h({full_name:a.full_name,phone_number:a.phone_number,address_type:a.address_type,building_number:a.building_number,area:a.area,landmark:a.landmark,pincode:a.pincode,city:a.city,state:a.state,country:a.country})},[a]),e.jsx("section",{className:`fixed inset-0 bg-black/95 flex justify-center items-center z-50 ${c?"block":"hidden"}`,children:e.jsxs("div",{className:"w-[60rem] bg-white shadow-2xl px-12 py-12 pb-16 rounded-xl",children:[e.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[e.jsx("h2",{className:"text-[2.4rem] leading-[2.4rem]",children:"add new address"}),e.jsx(q,{className:"inline-block h-8 w-8 text-black cursor-pointer",onClick:p})]}),e.jsxs("form",{className:"grid grid-cols-2 w-full gap-x-10 gap-y-12",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"full_name",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Fullname"}),e.jsx("input",{name:"full_name",id:"full_name",type:"text",onChange:d,value:s.full_name,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"phone_number",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Phone number"}),e.jsx("input",{name:"phone_number",id:"phone_number",type:"text",onChange:d,value:s.phone_number,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"address_type",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Address type"}),e.jsxs("select",{name:"address_type",id:"address_type",className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)",onChange:d,defaultValue:1,children:[e.jsx("option",{value:1,children:"Home"}),e.jsx("option",{value:2,children:"Office"}),e.jsx("option",{value:3,children:"Other"})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"building_number",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Building number"}),e.jsx("input",{name:"building_number",id:"building_number",type:"text",onChange:d,value:s.building_number,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"area",className:"self-start text-[1.2rem] text-[var(--black)]",children:"area"}),e.jsx("input",{name:"area",id:"area",type:"text",onChange:d,value:s.area,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"landmark",className:"self-start text-[1.2rem] text-[var(--black)]",children:"landmark"}),e.jsx("input",{name:"landmark",id:"landmark",type:"text",onChange:d,value:s.landmark,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"pincode",className:"self-start text-[1.2rem] text-[var(--black)]",children:"pincode"}),e.jsx("input",{name:"pincode",id:"pincode",type:"text",onChange:d,value:s.pincode,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"city",className:"self-start text-[1.2rem] text-[var(--black)]",children:"city"}),e.jsx("input",{name:"city",id:"city",type:"text",onChange:d,value:s.city,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"state",className:"self-start text-[1.2rem] text-[var(--black)]",children:"state"}),e.jsx("input",{name:"state",id:"state",type:"text",onChange:d,value:s.state,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"country",className:"self-start text-[1.2rem] text-[var(--black)]",children:"country"}),e.jsx("input",{name:"country",id:"country",type:"text",onChange:d,value:s.country,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsx("div",{className:"flex justify-start items-end row-start-6",children:e.jsx("button",{type:"button",className:"text-white bg-blue-700 text-[1.4rem] font-medium px-6 py-4 rounded-md",onClick:b,children:"Add Address"})})]})]})})};I.propTypes={setIsOpen:o.func.isRequired,isOpen:o.bool.isRequired,address:o.shape({address_id:o.number,full_name:o.string,phone_number:o.string,address_type:o.number,building_number:o.string,area:o.string,landmark:o.string,pincode:o.number,city:o.string,state:o.string,country:o.string}),flag:o.bool.isRequired};const R=({setSelectAddId:t})=>{const[c,a]=m.useState(!0),[n,u]=m.useState(!1),[i,s]=m.useState(),[h,d]=m.useState(null),{fetchAddress:b,deleteAddress:p}=O();function l(x){a(!1),d(x),u(!0)}async function f(x){const{address_id:g}=x;await p(g)}return m.useEffect(()=>{(async()=>{const g=await b();g&&s(g)})()},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-12",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"cart-sub-title",children:"Select Address"}),e.jsxs("button",{className:"address-btn flex items-center gap-4",onClick:()=>u(!0),children:[e.jsx(U,{className:"inline-block h-[1.6rem] w-[1.6rem] fill-[var(--red)]"}),e.jsx("span",{children:"Add New Address"})]})]}),e.jsx("div",{className:"flex flex-col gap-8",children:i&&i.length!=0?i.map(x=>{const{address_id:g,full_name:N,building_number:C,phone_number:v,landmark:w,area:_,city:S,state:y,pincode:j,address_type:k}=x,A={1:"Home",2:"Office",3:"Other"};return e.jsxs("div",{className:"flex items-center gap-6 p-8 border border-[#e0e0e0]",children:[e.jsx("div",{children:e.jsx("input",{type:"radio",name:"address",className:"appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2",onChange:()=>{t(g)}})}),e.jsxs("div",{className:"grow flex flex-col gap-3 items-start rounded-sm relative",children:[e.jsx("span",{className:"bg-[#f0f0f0] px-2 py-2.5 rounded-md uppercase text-[1.1rem] text-[#878787] font-semibold",children:A[k]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("h4",{className:"text-[1.4rem] text-[var(--black)] font-semibold",children:N}),e.jsx("h4",{className:"text-[1.4rem] text-[var(--black)] font-semibold",children:v})]}),e.jsxs("span",{className:"text-[1.4rem] text-[var(--black)] font-normal",children:[`${C}, ${_}, ${w}, ${S}, ${y} - `,e.jsx("h4",{className:"inline-block text-[1.4rem] text-[var(--black)] font-semibold",children:j})]}),e.jsxs("div",{className:"del-edit-menu relative",children:[e.jsxs("span",{className:"three-dots",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("ul",{className:"shortcut",children:[e.jsx("li",{onClick:()=>l(x),children:"Edit"}),e.jsx("li",{onClick:()=>f(x),children:"Delete"})]})]})]})]},g)}):"No address Found!"})]}),e.jsx(I,{setIsOpen:u,isOpen:n,address:h,flag:c})]})};R.propTypes={setSelectAddId:o.func.isRequired};const B=({instruction:t,setInstruction:c})=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("label",{htmlFor:"addInstruction",className:"cart-sub-title",children:"Add Instruction"}),e.jsx("textarea",{name:"add-instruction",id:"addInstruction",value:t,onChange:a=>c(a.target.value),className:"border border-[border-[#B9BCCF4D] rounded-md focus:outline-none focus:ring-1 px-4 py-6 font-[var(--black)]",placeholder:"Write Message here ..."})]});B.propTypes={instruction:o.string,setInstruction:o.func.isRequired};function H(t){return z({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"},child:[]},{tag:"path",attr:{d:"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1"},child:[]}]})(t)}const P=({setPayementMethod:t})=>e.jsxs("form",{className:"flex flex-col gap-12",children:[e.jsx("h4",{className:"cart-sub-title",children:"Select Payment Method"}),e.jsxs("label",{className:"border-[1.5px] border-black cursor-pointer p-6 rounded-md flex justify-between items-center shadow w-[50rem]  transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center space-x-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(H,{className:"inline-block h-14 w-14 fill-[var(black)]"})}),e.jsx("h2",{className:"text-[2.2rem] leading-[3.5rem] capitalize",children:"Cash On Delivery"})]}),e.jsx("input",{type:"radio",name:"payment",className:"appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2",onChange:()=>{t(1)}})]}),e.jsxs("label",{className:"border-[1.5px] border-black cursor-pointer p-6 rounded-md flex justify-between items-center shadow w-[50rem]  transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center space-x-5",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(M,{className:"inline-block h-14 w-14 fill-[var(black)]"})}),e.jsx("h2",{className:"text-[2.2rem] leading-[3.5rem] capitalize",children:"Online Payement"})]}),e.jsx("input",{type:"radio",name:"payment",className:"appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2",onChange:()=>{t(2)}})]})]});P.propTypes={setPayementMethod:o.func.isRequired};const G=()=>{const t="http://35.154.167.170:3000",c=localStorage.getItem("token");return{fetchShippingCharge:async()=>{try{const n=await fetch(`${t}/settings`,{method:"GET",headers:{Authorization:`Bearer ${c}`}}),u=await n.json();if(n.ok)return u.data;r.error("Failed to fetch shipping charge")}catch{r.error("Failed to fetch shipping charge information!")}}}},V=()=>{const t="http://35.154.167.170:3000",c=localStorage.getItem("token"),n=JSON.parse(localStorage.getItem("user")).user_id;return{placeOrder:async(i,s,h,d,b,p,l)=>{try{const f=await fetch(`${t}/orders`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({items:i,description:h,coupon_code:d,sub_total:s,shipping_charges:b,payment_type:p,order_status:1,payment_status:3,address_id:l,user_id:n})}),x=await f.json();return f.ok?(r.success("Order placed successfully!"),x.data):(r.error(x.message),!1)}catch{return r.error("Failed to place an order!"),!1}}}},W=()=>{const t="http://35.154.167.170:3000",c=localStorage.getItem("token");return{applyCoupon:async(n,u)=>{try{const i=await fetch(`${t}/coupon/apply`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({coupon_Code:u,order_Total:n})}),s=await i.json();if(!i.ok){r.error(s.message||"Invalid coupon code.");return}return r.success(s.message),s.data.discountAmount}catch{r.error("Unable to apply coupon code!")}}}},E=({subTotal:t,instruction:c,paymentMethod:a,selectedAddId:n})=>{const u=D(),[i,s]=m.useState(0),[h,d]=m.useState(""),[b,p]=m.useState(""),[l,f]=m.useState(0),{applyCoupon:x}=W(),{fetchShippingCharge:g}=G(),{placeOrder:N}=V(),{viewCart:C}=T(),[v,w]=m.useState({}),_=async()=>{let y=h.toUpperCase();const j=await x(t,y);j&&(f(j),p(y))},S=async()=>{let y=t-l;const j=await N(v,y,c,b,i,a,n);j&&u("/order",{state:{result:j}})};return m.useEffect(()=>{(async()=>{const k=await g();if(k){const{shipping_charge:A}=k;s(Number(A))}})(),(async()=>{const k=await C();k&&w(k)})()},[]),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h4",{className:"cart-title",children:"Order Summary"}),e.jsxs("div",{className:"flex items-center gap-8 p-10 border-b border-[#b9bccf4d]",children:[e.jsx("input",{type:"text",placeholder:"Add Coupon Code",value:h,onChange:y=>d(y.target.value),className:"uppercase grow border border-[#EFF3FF] rounded-xl text-[1.8rem] leading-10 py-5 px-4 focus:ring-0 placeholder:lowercase"}),e.jsx("button",{className:"apply-btn",onClick:_,children:"Apply"})]}),e.jsxs("div",{className:"px-12 py-12 flex flex-col gap-10 ",children:[e.jsxs("div",{className:"subtotal-container",children:[e.jsx("p",{children:"Sub Total"}),e.jsxs("h5",{children:["₹",t-l]})]}),e.jsxs("div",{className:"shipcharge-container",children:[e.jsx("p",{children:"Shipping Charge"}),e.jsxs("h5",{children:["₹",i]})]}),e.jsx("span",{className:"line"}),e.jsxs("div",{className:"total-container",children:[e.jsx("p",{children:"Total"}),e.jsxs("h5",{children:["₹",t-l+i]})]}),e.jsx("button",{className:"view-cart-btn",onClick:S,children:"checkout"})]})]})};E.propTypes={subTotal:o.number.isRequired,instruction:o.string.isRequired,paymentMethod:o.number.isRequired,selectedAddId:o.number.isRequired};const Y=()=>{const[t,c]=m.useState(0),[a,n]=m.useState(""),[u,i]=m.useState(0),[s,h]=m.useState(0);return e.jsx("section",{className:"section-cart",children:e.jsx("div",{className:"secondary-container",children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("div",{className:"flex-[0_0_63%]",children:e.jsxs("div",{className:"flex flex-col gap-24",children:[e.jsx(F,{setSubTotal:c}),e.jsx(R,{setSelectAddId:h}),e.jsx(B,{instruction:a,setInstruction:n}),e.jsx(P,{setPayementMethod:i})]})}),e.jsx("div",{className:"flex-[0_0_31%] border border-[#b9bccf4d] rounded-xl",children:e.jsx(E,{subTotal:t,instruction:a,paymentMethod:u,selectedAddId:s})})]})})})};export{Y as default};
