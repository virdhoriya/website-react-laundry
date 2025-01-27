import{j as s,b as $,r as a,e as C,C as D}from"./index-BkRZouuw.js";import{b as F}from"./index-BpuHNkqd.js";import{u as I,a as R,A as _}from"./useFetchAddress-DDbSZ-6Y.js";const H=()=>s.jsx("div",{className:"p-14 border border-gray-200 bg-white rounded-2xl",children:s.jsxs("div",{className:"grid grid-cols-2 gap-x-12 gap-y-16 items-start",children:[s.jsx("div",{className:"col-span-full justify-self-end h-20 w-1/5 bg-gray-200 rounded-full shimmer"}),s.jsxs("div",{className:"border border-[#b9bccf4d] rounded-xl",children:[s.jsxs("div",{className:"flex flex-col items-start gap-3 px-6 py-8 border-b border-[#b9bccf4d]",children:[s.jsx("span",{className:"bg-gray-200 w-24 h-12 rounded-md shimmer-2"}),s.jsxs("div",{className:"flex items-center justify-start gap-6",children:[s.jsx("div",{className:"h-10 w-48 bg-gray-200 rounded-md shimmer"}),s.jsx("div",{className:"h-10 w-48 bg-gray-200 rounded-md shimmer"})]}),s.jsx("div",{className:"h-10 w-full bg-gray-200 rounded-md shimmer"}),s.jsx("div",{className:"h-10 w-full bg-gray-200 rounded-md shimmer"})]}),s.jsxs("div",{className:"py-3 flex justify-center items-center gap-8",children:[s.jsx("div",{className:"basis-[45%] h-20 bg-gray-200 rounded-md shimmer"}),s.jsx("div",{className:"basis-[45%] h-20 bg-gray-200 rounded-md shimmer"})]})]}),s.jsxs("div",{className:"border border-[#b9bccf4d] rounded-xl",children:[s.jsxs("div",{className:"flex flex-col items-start gap-3 px-6 py-8 border-b border-[#b9bccf4d]",children:[s.jsx("span",{className:"bg-gray-200 w-24 h-12 rounded-md shimmer-2"}),s.jsxs("div",{className:"flex items-center justify-start gap-6",children:[s.jsx("div",{className:"h-10 w-48 bg-gray-200 rounded-md shimmer"}),s.jsx("div",{className:"h-10 w-48 bg-gray-200 rounded-md shimmer"})]}),s.jsx("div",{className:"h-10 w-full bg-gray-200 rounded-md shimmer"}),s.jsx("div",{className:"h-10 w-full bg-gray-200 rounded-md shimmer"})]}),s.jsxs("div",{className:"py-3 flex justify-center items-center gap-8",children:[s.jsx("div",{className:"basis-[45%] h-20 bg-gray-200 rounded-md shimmer"}),s.jsx("div",{className:"basis-[45%] h-20 bg-gray-200 rounded-md shimmer"})]})]})]})}),z=()=>{const m=$(),[o,x]=a.useState(!1),[t,l]=a.useState(!1),[b,i]=a.useState(null),[h,c]=a.useState({}),n=C(e=>e.address.address),{loading:u}=I(),{loading:f,deleteAddress:g}=R(),j={1:"Home",2:"Office",3:"Other"},p=()=>{l(!0),i(null)},N=e=>{i(e),x(!0),l(!0)},v=async e=>{c(d=>({...d,[e]:!0})),await g(e)&&m(D(e)),c(d=>({...d,[e]:!1}))};return u?s.jsx(H,{}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"p-14 border border-[#b9bccf4d] bg-white rounded-2xl",children:s.jsxs("div",{className:"grid grid-cols-2 gap-x-12 gap-y-16 items-start",children:[s.jsx("div",{className:"col-span-full justify-self-end",children:s.jsxs("button",{className:"new-address-btn address-btn flex items-center gap-4 rounded-full",onClick:p,children:[s.jsx(F,{className:"inline-block h-[1.6rem] w-[1.6rem] fill-[var(--secondary)]"}),s.jsx("span",{className:"leading-[1.8rem]",children:"Add New Address"})]})}),n&&n.map(e=>{const{address_id:r,address_type:d,building_number:y,area:w,landmark:A,city:S,pincode:k,full_name:E,phone_number:M}=e,O=h[r]||!1;return s.jsxs("div",{className:"border border-[#b9bccf4d] rounded-xl",children:[s.jsxs("div",{className:"flex flex-col items-start gap-3 px-6 py-8 border-b border-[#b9bccf4d]",children:[s.jsx("span",{className:"bg-[#f0f0f0] px-2 py-2.5 rounded-md uppercase text-[1.1rem] text-[#878787] font-semibold",children:j[d]}),s.jsxs("div",{className:"flex items-center justify-start gap-6",children:[s.jsx("h4",{className:"text-[1.4rem] text-[var(--black)] font-semibold",children:E}),s.jsx("h4",{className:"text-[1.4rem] text-[var(--black)] font-semibold",children:M})]}),s.jsx("p",{className:"text-[1.4rem] leading-10 w-[80%]",children:`${y}, ${w}, ${A}, ${S}, ${k} `})]}),s.jsxs("div",{className:"flex items-stretch justify-stretch",children:[s.jsx("div",{className:"basis-[50%] border-r border-[#b9bccf4d]",children:s.jsx("button",{className:"text-2xl text-[var(--primary)] font-medium py-5 w-full",onClick:()=>N(e),children:"Edit"})}),s.jsx("div",{className:"basis-[50%]",children:s.jsx("button",{className:"text-2xl text-[var(--primary)] font-medium h-full w-full text-center",disabled:f,onClick:()=>v(r),children:O?"Removing...":"Remove"})})]})]},r)})]})}),t&&s.jsx(_,{setIsOpen:l,isOpen:t,address:b,isEditMode:o})]})};export{z as default};
