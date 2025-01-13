import{u as k,_ as c,r as x,j as e,L as w}from"./index-CkSB7dKI.js";import{c as v,a as o}from"./index.esm-C9jP3uRh.js";const _=()=>{const g=k(),m="http://3.110.208.70:3000";return{signup:async t=>{let r={...t,gender:Number(t.gender)};try{const l=await fetch(`${m}/auth/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),i=await l.json();l.ok?(g("/"),c.success(i.message),localStorage.setItem("token",i.data.token),localStorage.setItem("user",JSON.stringify(i.data.user))):c.error(i.message)}catch{c.error("An error occurred during signup. Please try again.")}},generateOtp:async t=>{try{const r=await fetch(`${m}/user/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mobile_number:t,type:1})}),l=await r.json();r.ok&&c.success(l.message)}catch{c.error("Unable to send Otp")}}}},q=()=>{const{signup:g,generateOtp:m}=_(),[p,u]=x.useState(""),[t,r]=x.useState({}),[l,i]=x.useState(!1),[a,f]=x.useState({first_name:"",last_name:"",mobile_number:"",password:"",gender:"",role_id:"5",email:"",otp:""}),s=n=>{const{name:d,value:b}=n.target;f({...a,[d]:b})},y=v().shape({first_name:o().required("first name is required"),last_name:o().required("lastname is required"),mobile_number:o().matches(/^[0-9]{10}$/,"Mobile number must be 10 digits").required("Mobile number is required"),gender:o().required("Please select you gender"),password:o().min(6,"Password must be at least 6 characters").required("Password is required"),email:o().email("Invalid email address").required("Email is required"),otp:o().matches(/^\d{6}$/,"OTP must be exactly 6 digits").required("OTP is required")}),j=async n=>{n.preventDefault();try{await y.validate(a,{abortEarly:!1}),g(a),r("")}catch(d){i(!0);const b={};d.inner.forEach(h=>{b[h.path]=h.message}),r(b)}},N=()=>{const n=a.mobile_number,d=/^[0-9]{10}$/.test(n);n?d?(u(""),m(n)):u("Mobile number must be 10 digits"):u("Mobile number is required")};return e.jsx("section",{className:"h-[100vh] px-6 py-12",children:e.jsx("div",{className:"flex flex-col gap-8 justify-center items-center",children:e.jsxs("div",{className:"signup-form-container",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-10",children:[e.jsx("img",{src:"sc-logo.png",alt:"Sikka Cleaner Logo",loading:"lazy",className:"h-12 w-auto"}),e.jsx("h2",{className:"text-center text-3xl font-bold leading-9 tracking-tight text-gray-900",children:"Create an account"})]}),e.jsxs("div",{children:[e.jsxs("form",{className:`grid grid-cols-2 ${l?"gap-8":"gap-12"}`,onSubmit:j,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"first_name",className:"mb-4 block text-lg font-medium leading-6 text-gray-900",children:"First Name"}),e.jsx("input",{type:"text",id:"first_name",name:"first_name",placeholder:"first name",value:a.first_name,onChange:s,className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"}),t.first_name&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.first_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"last_name",className:"mb-4 block text-lg font-medium leading-6 text-gray-900",children:"Last Name"}),e.jsx("input",{type:"text",id:"last_name",name:"last_name",placeholder:"last name",value:a.last_name,onChange:s,className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"}),t.last_name&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.last_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"mobile",className:"block text-lg font-medium leading-6 text-gray-900 mb-4",children:"Mobile Number"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",id:"mobile",name:"mobile_number",placeholder:"99099XXXXX",value:a.mobile_number,onChange:s,className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"}),e.jsx("button",{type:"button",className:" bg-blue-100 text-xl inline-block absolute top-0 right-0 h-full px-4 border border-blue-300 rounded-r-md",onClick:N,children:"send"})]}),p&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:p})||t.mobile_number&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.mobile_number})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"otp",className:"mb-4 block text-lg font-medium leading-6 text-gray-900",children:"Otp"}),e.jsx("input",{type:"text",id:"otp",name:"otp",placeholder:"otp",value:a.otp,onChange:s,className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"}),t.otp&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.otp})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"mb-4 block text-lg font-medium leading-6 text-gray-900",children:"Email"}),e.jsx("input",{type:"text",id:"email",name:"email",placeholder:"user@gmail.com",value:a.email,onChange:s,className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"}),t.email&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"mb-4 block text-lg font-medium leading-6 text-gray-900",children:"Password"}),e.jsx("input",{type:"password",id:"password",name:"password",placeholder:"password",value:a.password,onChange:s,className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide"}),t.password&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.password})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-4 block text-lg font-medium leading-6 text-gray-900",children:"Gender"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("input",{type:"radio",name:"gender",id:"male",value:"1",onChange:s,className:"appearance-none h-6 w-6 border-2 border-blue-600 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"}),e.jsx("label",{htmlFor:"male",className:"block text-lg font-medium leading-6 text-gray-900",children:"Male"}),e.jsx("input",{type:"radio",name:"gender",id:"female",value:"2",onChange:s,className:"appearance-none h-6 w-6 border-2 border-blue-600 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"}),e.jsx("label",{htmlFor:"female",className:"block text-lg font-medium leading-6 text-gray-900",children:"Female"}),e.jsx("input",{type:"radio",name:"gender",id:"others",value:"3",onChange:s,className:"appearance-none h-6 w-6 border-2 border-blue-600 rounded-full checked:bg-blue-600 checked:border-transparent focus:outline-none checked:ring-2 checked:ring-blue-500 checked:ring-offset-2"}),e.jsx("label",{htmlFor:"others",className:"block text-lg font-medium leading-6 text-gray-900",children:"Other"})]}),t.gender&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:t.gender})]}),e.jsx("button",{type:"submit",className:"col-span-2 w-[40%] justify-self-center flex justify-center rounded-md bg-indigo-600 px-6 py-4 text-xl font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"SignUp"})]}),e.jsxs("p",{className:"mt-10 text-center text-lg text-gray-500",children:["Alredy have an account ?",e.jsx(w,{to:"/login",className:"ml-4 font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"Login"})]})]})]})})})};export{q as default};
