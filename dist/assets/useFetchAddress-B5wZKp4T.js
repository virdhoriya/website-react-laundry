import{r as p,_ as o,P as r,a as y,j as e,$ as N,a0 as _,a1 as v,d as A,a2 as w}from"./index-COKVPBfh.js";const F=()=>{const[c,i]=p.useState(!1),s="http://35.154.167.170:3000",l=localStorage.getItem("token");return{addAddress:async n=>{var a;if(!l)return o.error("User is not authenticated!"),null;const d={...n,address_type:parseInt(n.address_type)};try{i(!0);const u=await fetch(`${s}/address`,{method:"POST",headers:{"Content-type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify(d)}),t=await u.json();return u.ok?(o.success(t==null?void 0:t.message),(a=t==null?void 0:t.data)==null?void 0:a.result):(o.error("Failed to add address!"),null)}catch{return o.error("Failed to add address!"),null}finally{i(!1)}},loading:c}},C=()=>{const[c,i]=p.useState(!1),s="http://35.154.167.170:3000",l=localStorage.getItem("token");return{loading:c,editAddress:async(n,d)=>{if(!l)return o.error("User is not authenticated!"),null;const a={...n,address_type:Number(n.address_type),pincode:String(n.pincode)};try{i(!0);const u=await fetch(`${s}/address/${d}`,{method:"PUT",headers:{"Content-type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify(a)}),t=await u.json();return u.ok?(o.success(t.message),t):(o.error(t.message,{style:{maxWidth:"700px"}}),null)}catch{return o.error("Unable to update address"),null}finally{i(!1)}}}},S=({setIsOpen:c,isOpen:i,address:s,isEditMode:l})=>{const x=y(),{addAddress:n,loading:d}=F(),{editAddress:a,loading:u}=C(),[t,g]=p.useState({full_name:"",phone_number:"",address_type:"1",building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:""}),m=b=>{const{name:h,value:f}=b.target;g({...t,[h]:f})},j=async b=>{if(b.preventDefault(),l){const{address_id:f}=s;if(await a(t,f)){x(_({formData:t,address_id:f})),c(!1);return}}const h=await n(t);h&&(x(v(h)),c(!1))},k=()=>{c(!1),g({address_type:"1",full_name:"",phone_number:"",building_number:"",area:"",landmark:"",pincode:"",city:"",state:"",country:""})};return p.useEffect(()=>{s&&g({full_name:s.full_name,phone_number:s.phone_number,address_type:s.address_type,building_number:s.building_number,area:s.area,landmark:s.landmark,pincode:s.pincode,city:s.city,state:s.state,country:s.country})},[s]),e.jsx("section",{className:`fixed inset-0 bg-[#F7F8FD] flex justify-center items-center z-50 ${i?"block":"hidden"}`,children:e.jsxs("div",{className:"w-[60rem] bg-white shadow-2xl px-12 py-12 pb-16 rounded-xl",children:[e.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[e.jsx("h2",{className:"text-[2.4rem] leading-[2.4rem]",children:l?"Edit Address":"Add New Address"}),e.jsx(N,{className:"inline-block h-8 w-8 text-black cursor-pointer",onClick:k})]}),e.jsxs("form",{onSubmit:j,className:"grid grid-cols-2 w-full gap-x-10 gap-y-12",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"full_name",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Fullname"}),e.jsx("input",{name:"full_name",id:"full_name",type:"text",onChange:m,value:t.full_name,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"phone_number",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Phone number"}),e.jsx("input",{name:"phone_number",id:"phone_number",type:"text",onChange:m,value:t.phone_number,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"address_type",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Address type"}),e.jsxs("select",{name:"address_type",id:"address_type",className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)",onChange:m,defaultValue:1,children:[e.jsx("option",{value:1,children:"Home"}),e.jsx("option",{value:2,children:"Office"}),e.jsx("option",{value:3,children:"Other"})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"building_number",className:"self-start text-[1.2rem] text-[var(--black)]",children:"Building number"}),e.jsx("input",{name:"building_number",id:"building_number",type:"text",onChange:m,value:t.building_number,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"area",className:"self-start text-[1.2rem] text-[var(--black)]",children:"area"}),e.jsx("input",{name:"area",id:"area",type:"text",onChange:m,value:t.area,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"landmark",className:"self-start text-[1.2rem] text-[var(--black)]",children:"landmark"}),e.jsx("input",{name:"landmark",id:"landmark",type:"text",onChange:m,value:t.landmark,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"pincode",className:"self-start text-[1.2rem] text-[var(--black)]",children:"pincode"}),e.jsx("input",{name:"pincode",id:"pincode",type:"text",onChange:m,value:t.pincode,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"city",className:"self-start text-[1.2rem] text-[var(--black)]",children:"city"}),e.jsx("input",{name:"city",id:"city",type:"text",onChange:m,value:t.city,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"state",className:"self-start text-[1.2rem] text-[var(--black)]",children:"state"}),e.jsx("input",{name:"state",id:"state",type:"text",onChange:m,value:t.state,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"country",className:"self-start text-[1.2rem] text-[var(--black)]",children:"country"}),e.jsx("input",{name:"country",id:"country",type:"text",onChange:m,value:t.country,className:"inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"})]}),e.jsx("div",{className:"flex justify-start items-end row-start-6",children:e.jsx("button",{type:"submit",className:"text-white bg-blue-700 text-[1.4rem] font-medium px-6 py-4 rounded-md flex gap-4 items-center",disabled:d||u,children:l?u?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-block h-10 w-10 rounded-full border-4 border-t-white border-white/30 animate-spin"}),e.jsx("span",{children:"Processing..."})]}):"Edit Address":d?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"inline-block h-10 w-10 rounded-full border-4 border-t-white border-white/30 animate-spin"}),e.jsx("span",{children:"Processing..."})]}):"Add Address"})})]})]})})};S.propTypes={setIsOpen:r.func.isRequired,isOpen:r.bool.isRequired,address:r.shape({address_id:r.number,full_name:r.string,phone_number:r.string,address_type:r.number,building_number:r.string,area:r.string,landmark:r.string,pincode:r.number,city:r.string,state:r.string,country:r.string}),isEditMode:r.bool.isRequired};const L=()=>{const[c,i]=p.useState(!1),s="http://35.154.167.170:3000",l=localStorage.getItem("token");return{deleteAddress:async n=>{if(!n){o.error("Address Id is required to delete address");return}try{i(!0);const d=await fetch(`${s}/address/${n}`,{method:"DELETE",headers:{Authorization:`Bearer ${l}`}}),a=await d.json();return d.ok?(o.success((a==null?void 0:a.message)||"Address deleted successfully"),a==null?void 0:a.data):null}catch{return o.error("Unable to delete address, please try again later!"),null}finally{i(!1)}},loading:c}},R=()=>{const c=y(),i=A(d=>{var a;return(a=d==null?void 0:d.auth)==null?void 0:a.isAuthenticated}),[s,l]=p.useState(!0),x="http://35.154.167.170:3000",n=localStorage.getItem("token");return p.useEffect(()=>{if(!i||!n){l(!1);return}(async()=>{var a;try{const u=await fetch(`${x}/address`,{method:"GET",headers:{Authorization:`Bearer ${n}`}}),t=await u.json();u.ok?c(w((a=t==null?void 0:t.data)==null?void 0:a.result)):o.error("Failed to fetch address data!")}catch{o.error("Failed to fetch address data!")}finally{l(!1)}})()},[i,x,c,n]),{loading:s}};export{S as A,L as a,R as u};
