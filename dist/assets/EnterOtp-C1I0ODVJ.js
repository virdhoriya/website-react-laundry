import{_ as p,u as x,c as v,r as d,j as e,L as g}from"./index-d12XFQPa.js";const y=()=>{const c="http://3.110.208.70/:3000",r=localStorage.getItem("token");return{validateOtp:async(i,l)=>{try{const a=await fetch(`${c}/user/validate`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({mobile_number:l,otp:i})}),u=await a.json();return a.ok?{success:!0}:(p.error(u.message),{success:!1})}catch{return p.error("Failed to validate otp!"),{success:!1}}}}},b=()=>{var f;const c=x(),r=v(),o=(f=r==null?void 0:r.state)==null?void 0:f.mobileNumber,i=String(o).slice(-3),{validateOtp:l}=y(),a=d.useRef([]),u=(t,s)=>{t.target.value.length>1&&(t.target.value=t.target.value[0]),t.target.value!==""&&s<a.current.length-1&&a.current[s+1].focus()},h=(t,s)=>{t.key==="Backspace"&&s>0&&t.target.value===""&&a.current[s-1].focus()},m=async()=>{const t=a.current.map(n=>n.value).join("");(await l(t,o)).success&&c("/reset-password",{state:{mobile_number:o,otp:t}})};return d.useEffect(()=>{r.state||c("/login")},[r.state,c]),e.jsx("section",{className:"bg-white",children:e.jsx("div",{className:"h-[100vh] w-[100vw] flex justify-center items-center",children:e.jsxs("div",{className:"enter-mobile-container",children:[e.jsx(g,{to:"/forget-password",className:"forget-link",children:"forget password"}),e.jsx("p",{className:"verify-text",children:"Verify your phone number"}),e.jsx("p",{className:"verify-text2",children:"We have send you an SMS with 6 digits"}),e.jsxs("div",{className:"otp-boxes-container flex flex-col gap-6",children:[e.jsx("p",{className:"text-[#9ca3af]",children:"code sent to"}),e.jsxs("span",{className:"font-bold text-center text-[var(--primary)]",children:["+91 *****",i]}),e.jsx("div",{className:"boxes",children:[...Array(6)].map((t,s)=>e.jsx("input",{type:"text",className:"box new-box text-[var(--primary)] focus:ring-2",maxLength:1,ref:n=>a.current[s]=n,onChange:n=>u(n,s),onKeyDown:n=>h(n,s)},s))})]}),e.jsx("div",{children:e.jsx("button",{className:"new-verift-button",onClick:m,children:"Verify"})})]})})})};export{b as default};
