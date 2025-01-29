import{_ as l,u as i,r as d,j as e}from"./index-uuG3LVc2.js";const u=()=>{const r="http://3.110.208.70:3000";return{generateOtp:async t=>{try{const s=await fetch(`${r}/auth/forgot-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mobile_number:t})}),a=await s.json();return s.ok?(l.success(a.message||"OTP sent successfully.",{className:"toast-success"}),{success:!0}):(l.error(a.message||"Failed to send OTP. Please try again later.",{className:"toast-error"}),{success:!1})}catch{return l.error("Failed to send Otp"),{success:!1}}}}},x=()=>{const{generateOtp:r}=u(),n=i(),[t,s]=d.useState(null),a=()=>{n("/login")},c=async()=>{(await r(t)).success&&n("/enter-otp",{state:{mobileNumber:t}})};return e.jsx("section",{className:"bg-white",children:e.jsx("div",{className:"h-[100vh] w-[100vw] flex justify-center items-center",children:e.jsxs("div",{className:"forget-pass-container flex flex-col gap-14",children:[e.jsx("h2",{className:"text-center py-2 text-3xl font-bold leading-9 tracking-tight text-gray-900",children:"Find your account"}),e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"country",className:"text-left text-[1.4rem] font-medium",children:"Country"}),e.jsxs("select",{name:"country",id:"country",className:"text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide",children:[e.jsx("option",{value:"india",className:"text-[1.4rem] font-semibold",children:"india"}),e.jsx("option",{value:"usa",className:"text-[1.4rem] font-semibold",children:"america"})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("label",{htmlFor:"mobile_number",className:"text-left text-[1.4rem] font-medium",children:"Please enter your mobile number"}),e.jsx("input",{required:!0,id:"mobile_number",type:"text",className:"text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide",placeholder:"Enter mobile number",value:t||"",onChange:o=>s(Number(o.target.value))})]})]}),e.jsxs("div",{className:"flex justify-between items-center gap-8",children:[e.jsx("button",{className:"btn-sendotp bg-[#e4e6eb] extra-pad",onClick:a,children:"cancel"}),e.jsx("button",{className:"btn-sendotp bg-indigo-600 text-white extra-pad",onClick:c,children:"send otp"})]})]})})})};export{x as default};
