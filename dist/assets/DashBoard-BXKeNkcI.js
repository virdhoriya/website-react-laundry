import{c as h,u as m,a as x,d as n,j as e,L as r,J as u,K as p,N as b,s as j,G as v,O as f}from"./index-CkSB7dKI.js";import{F as g}from"./index-DwAD0r9d.js";import{I as N,a as w}from"./index-D0_wMxCN.js";const L=()=>{const{pathname:l}=h(),i=m(),o=x(),s=a=>{a.preventDefault(),localStorage.clear(),o(j(!1)),i("/login")},t={"/dashboard/home":"Dashboard","/dashboard/profile":"Pofile","/dashboard/price-list":"Price List View","/dashboard/write-review":"Write a Review","/dashboard/saved-addresses":"Saved Addresses","/dashboard/view-order":"View Order"};let d=parseInt(n(a=>a.cart.cartItemCount)),c=n(a=>a.user.user.image);return c||(c="/default_pfp.png"),e.jsxs("div",{className:"flex",children:[e.jsx(r,{to:"/",children:e.jsx("img",{src:"/dash-logo.png",alt:"Logo",className:"dash-logo"})}),e.jsxs("div",{className:"bg-[var(--primary)] grow flex justify-between items-center px-8",children:[e.jsx("p",{className:"text-[2rem] leading-[2.4rem] font-semibold text-white tracking-wide",children:t[l]}),e.jsxs("div",{className:"flex items-center justify-center gap-6",children:[e.jsxs(r,{to:"/cart",className:"relative inline-block h-[4.6rem] w-[4.6rem] border border-white/30 rounded-full",children:[e.jsx(u,{className:"inline-block h-full w-full stroke-white p-4","aria-label":"Shopping Cart"}),d>0&&e.jsx("div",{className:"cart-item",children:e.jsx("span",{children:d})})]}),e.jsxs("span",{className:"inline-block h-[4.6rem] w-[4.6rem] group relative",children:[e.jsx("img",{src:c,alt:"Avatar",className:"h-full w-full rounded-full border border-white/20"}),e.jsx("div",{className:"dashboard-menu-container group-hover:block",children:e.jsx("div",{className:"dashboard-avatar-menu ",children:e.jsxs("div",{className:"dash-menu-container z-10",children:[e.jsxs(r,{to:"/",children:[e.jsx(p,{className:"h-[2.4rem] w-[2.4rem] fill-[#676788]"}),e.jsx("span",{children:"home"})]}),e.jsxs(r,{to:"",onClick:s,children:[e.jsx(b,{className:"h-[2.4rem] w-[2.4rem] stroke-[#676788]"}),e.jsx("span",{children:"logout"})]})]})})})]})]})]})]})};function k(l){return v({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"},child:[]}]})(l)}const I=()=>{let i=h().pathname;const o=[{icon:e.jsx(k,{}),label:"Dashboard",route:"/dashboard/home"},{icon:e.jsx(N,{}),label:"Profile",route:"/dashboard/profile"},{icon:e.jsx(w,{}),label:"Price List View",route:"/dashboard/price-list"},{icon:e.jsx(g,{}),label:"Saved Addresses",route:"/dashboard/saved-addresses"}];return e.jsx(e.Fragment,{children:e.jsx("ul",{className:"dash-sidebar flex flex-col gap-12",children:o.map((s,t)=>e.jsx("li",{children:e.jsxs(r,{to:s.route,className:"dash-nav-link",children:[e.jsx("span",{className:`dash-icons-container ${s.route===i?"active-icons-clr":""}`,children:s.icon}),e.jsx("span",{className:`${s.route===i?"active-label":""}`,children:s.label})]})},t))})})},V=()=>e.jsx("section",{children:e.jsxs("div",{className:"dashboard-container",children:[e.jsx(L,{}),e.jsxs("div",{className:"flex min-h-full",children:[e.jsx("div",{className:"basis-[28rem] border-r border-l border-[#b9bccf4d]",children:e.jsx("div",{className:"py-16",children:e.jsx(I,{})})}),e.jsx("div",{className:"grow py-14 px-12 bg-[rgba(239,243,255,0.8)] relative",children:e.jsx(f,{})})]})]})});export{V as default};
