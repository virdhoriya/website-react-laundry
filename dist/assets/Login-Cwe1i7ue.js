import{u as b,_ as u,a as j,r as g,j as e,L as h,b as w,s as y}from"./index-CkSB7dKI.js";import{c as v,a as p}from"./index.esm-C9jP3uRh.js";const N=()=>{const n=b(),l="http://3.110.208.70:3000",s=5;return{login:async(t,c)=>{try{const a=await(await fetch(`${l}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:c,role_id:s})})).json();if(a.statusCode==200)return u.success(a.message),localStorage.setItem("token",a.data.token),localStorage.setItem("user",JSON.stringify(a.data.user)),n("/"),a.data;u.error(a.message,{style:{maxWidth:"800px"}})}catch{u.error("Login failed. Please check your credentials and try again.")}}}},L=()=>{const n=j(),{login:l}=N(),[s,d]=g.useState({}),[t,c]=g.useState({username:"",password:""}),m=o=>{const{name:r,value:i}=o.target;c({...t,[r]:i})},a=v().shape({username:p().min(10,"Username must be at least 10 characters").required("Username is required"),password:p().min(6,"Password must be at least 6 characters").required("Password is required")}),f=async o=>{o.preventDefault();try{await a.validate(t,{abortEarly:!1});const r=await l(t.username,t.password);r&&(n(w(r.user)),n(y(!!r.token))),d("")}catch(r){const i={};r.inner.forEach(x=>{i[x.path]=x.message}),d(i)}};return e.jsx("section",{className:"h-[100vh] px-6 py-12",children:e.jsx("div",{className:"flex flex-col gap-8 justify-center items-center",children:e.jsxs("form",{className:"login-form-container",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-10",children:[e.jsx("img",{src:"sc-logo.png",alt:"Sikka Cleaner Logo",loading:"lazy",className:"h-12 w-auto"}),e.jsx("h2",{className:"text-center text-3xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})]}),e.jsxs("div",{className:`flex flex-col ${s.username||s.password?"gap-6":"gap-9"}`,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"username",className:"block text-lg font-medium leading-6 text-gray-900",children:"Username"}),e.jsx("div",{className:"mt-4",children:e.jsx("input",{id:"username",name:"username",placeholder:"email or mobile number",className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide",value:t.username,onChange:m})}),s.username&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:s.username})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("label",{htmlFor:"password",className:"block text-lg font-medium leading-6 text-gray-900",children:"Password"}),e.jsx("div",{className:"text-lg",children:e.jsx(h,{to:"/forget-password",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Forgot password?"})})]}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{id:"password",name:"password",type:"password",placeholder:"password",className:"text-xl block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide",value:t.password,onChange:m})}),s.password&&e.jsx("p",{className:"pt-2 text-base font-medium text-red-500",children:s.password})]})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-6 py-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:o=>f(o),children:"Login"})}),e.jsxs("p",{className:"text-center text-lg text-gray-500",children:["Not a member?",e.jsx(h,{to:"/signup",className:"ml-4 font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"Register"})]})]})})})};export{L as default};
