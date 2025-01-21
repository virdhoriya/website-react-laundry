import{_ as h,d as j,r as w,u as N,j as e}from"./index-CtAgCwWG.js";import{c as v,a as f,b as k}from"./index.esm-q7qbmdc2.js";const C=()=>{const l="http://3.110.208.70:3000";return{resetPassword:async(i,m,t)=>{try{const r=await fetch(`${l}/auth/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mobile_number:Number(i),otp:Number(m),new_password:t})}),a=await r.json();return r.ok?{success:!0}:(h.error(a.message,{className:"toast-error"}),{success:!1})}catch{return h.error("Failed to reset password!",{className:"toast-error"}),{success:!1}}}}},S=()=>{var p,x;const{resetPassword:l}=C(),s=j(),i=(p=s==null?void 0:s.state)==null?void 0:p.mobile_number,m=(x=s==null?void 0:s.state)==null?void 0:x.otp,[t,r]=w.useState({}),a=N(),[o,b]=w.useState({newPassword:"",confPassword:""}),g=async()=>{a("/login")},P=async()=>{try{await y.validate(o,{abortEarly:!1}),r({}),(await l(i,m,o.confPassword)).success&&a("/login")}catch(n){const c={};n.inner.forEach(d=>{c[d.path]=d.message}),r(c)}},u=n=>{const{name:c,value:d}=n.target;b({...o,[c]:d})},y=v().shape({newPassword:f().matches(/[a-zA-Z]/,"Password must contain at least one letter").matches(/[0-9]/,"Password must contain at least one number").min(6,"Password must be 6 character long!").required("new password is required!"),confPassword:f().oneOf([k("newPassword"),null],"Passwords must match").required("Confirmation password is required")});return w.useEffect(()=>{s.state||a("/login")},[s.state,a]),e.jsx("section",{className:"bg-white",children:e.jsx("div",{className:"h-[100vh] w-[100vw] flex justify-center items-center",children:e.jsxs("form",{className:"reset-password-container flex flex-col gap-4",children:[e.jsx("h2",{className:"capitalize text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 py-4",children:"Reset Password"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"new_password",children:"new password"}),e.jsx("input",{id:"new_password",type:"password",name:"newPassword",placeholder:"new password",className:"text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide",value:o.newPassword,onChange:u}),t.newPassword?e.jsx("span",{className:"text-red-600 text-[1.2rem]",children:t.newPassword}):e.jsx("span",{className:"text-transparent text-[1.2rem]",children:" "})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"conf_password",children:"confirm password"}),e.jsx("input",{name:"confPassword",id:"conf_password",type:"password",placeholder:"confirm password",className:"text-[1.4rem] block font-medium w-full rounded-md py-4 px-6 text-gray-900 shadow-sm placeholder:text-gray-400 leading-6 border-blue-300 border-[1.5px] focus:border-blue-600 focus:outline-none tracking-wide",value:o.confPassword,onChange:u}),t.confPassword?e.jsx("span",{className:"text-red-600 text-[1.2rem]",children:t.confPassword}):e.jsx("span",{className:"text-transparent text-[1.2rem]",children:" "})]}),e.jsxs("div",{className:"flex justify-between items-center py-2",children:[e.jsx("button",{type:"button",className:"btn-sendotp btn-2 bg-[#e4e6eb]",onClick:g,children:"cancel"}),e.jsx("button",{type:"button",className:"btn-sendotp btn-2 bg-[#6366F1] text-white",onClick:P,children:"submit"})]})]})})})};export{S as default};
