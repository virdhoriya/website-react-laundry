import{j as e,L as m,r as p,_ as d,d as x}from"./index-DViv8SEj.js";const b=()=>e.jsx("section",{className:"section-space",children:e.jsx("div",{className:"secondary-container",children:e.jsxs("div",{className:"flex items-center justify-start tab:flex-col tab:items-stretch tab:gap-8",children:[e.jsxs("div",{className:"flex-[0_0_50%] flex flex-col items-start gap-20 laptop-l:gap-16 laptop-m:gap-12 laptop-s:gap-8 tab:gap-12 tab:flex-row tab:justify-between",children:[e.jsxs("h2",{className:"banner-title",children:["Our",e.jsx("br",{className:"tab:hidden"}),e.jsx("span",{className:"tab:pl-4",children:"Prices"})]}),e.jsx(m,{to:"/contact",className:"primary-button",children:"Contact Us"})]}),e.jsx("div",{className:"flex-[0_0_45%] laptop:flex-[0_0_50%]",children:e.jsx("p",{className:"para2",children:"We make doing your laundry simple. We can save your time, so you can enjoy doing the things you love. We can save you money on soap, water, heating and electricity. So you can enjoy even more of the things you love. Our prices are simple and affordable."})})]})})}),h=()=>e.jsx("section",{className:"section-space",children:e.jsx("div",{className:"container container-x",children:e.jsxs("div",{className:"px-28 py-32 border border-gray-200 rounded-[2rem]",children:[e.jsxs("div",{className:"flex justify-between pb-28",children:[e.jsx("div",{className:"basis-1/2 bg-gray-200 rounded-md h-24 shimmer"}),e.jsx("div",{className:"w-80 bg-gray-200 rounded-full h-24 shimmer"})]}),e.jsx("div",{className:"flex justify-between items-start gap-24 flex-wrap",children:Array.from({length:4},(i,t)=>e.jsxs("div",{className:"basis-[34rem] border border-gray-200 rounded-3xl px-20 py-24 flex flex-col items-start gap-16",children:[e.jsx("span",{className:"inline-block w-48 h-24 rounded-full bg-gray-200 animate-pulse"}),e.jsx("div",{className:"self-stretch h-20 bg-gray-200 rounded-md shimmer"}),e.jsxs("ul",{className:"self-stretch flex flex-col gap-8",children:[e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]}),e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]}),e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]}),e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]})]})]},t))})]})})}),g=()=>{const[i,t]=p.useState(!0),[c,s]=p.useState(),a="http://3.110.208.70:3000";return p.useEffect(()=>{(async()=>{try{const n=await fetch(`${a}/price-content`,{method:"GET"}),r=await n.json();n.ok?s(r==null?void 0:r.data):d.error("Failed to get prices data!")}catch{d.error("Failed to get prices data!")}finally{t(!1)}})()},[a]),{prices:c,loading:i}},j=()=>{const{prices:i,loading:t}=g(),c=x(s=>{var a,l;return(l=(a=s==null?void 0:s.setting)==null?void 0:a.settings)==null?void 0:l.price_pdf_url});return t?e.jsx(h,{}):e.jsx("section",{className:"section-space",children:e.jsx("div",{className:"container container-x",children:e.jsxs("div",{className:"price-list-container rounded-3xl text-white px-28 py-32 laptop-l:px-24 laptop-l:py-28 laptop-md:px-16 laptop-md:py-20 laptop-s:px-14 laptop-s:py-16 tab-s:py-12 tab-s:px-10",children:[e.jsxs("div",{className:"flex justify-between items-center pb-28 laptop-l:pb-24 laptop-md:pb-20 laptop:pb-16 tab-l:pb-14 tab-s:pb-10",children:[e.jsxs("h2",{className:"tracking-[2px] text-inherit",children:["Best Quality at"," ",e.jsx("span",{className:"text-[var(--secondary)]",children:"REASONABLE PRICING"})]}),e.jsx("div",{className:"relative",children:e.jsx("a",{href:c,"aria-label":"Check price list pdf",target:"__blank",rel:"noopener noreferrer",className:"price-list-btn",children:"Check Price List"})})]}),e.jsx("div",{className:"flex justify-between items-start gap-24 flex-wrap laptop-s:gap-16 tab-s:flex-wrap tab-s:justify-center",children:i.map(s=>{const{price_content_id:a,category_name:l,price:n,service_names:r}=s;return e.jsxs("div",{className:"basis-[34rem] border border-white/20 rounded-3xl px-20 py-24 flex flex-col items-start gap-16 hover:border-white transition-all duration-200 laptop-l:px-16 laptop-l:py-20 laptop-l:gap-12 laptop-md:py-16 laptop-md:px-12 laptop-md:gap-10 laptop-md:border-[0.8px] laptop:px-8 laptop:py-12 laptop:gap-8 laptop:basis-[23rem] laptop-s:basis-[22rem] tab-l:py-10 tab-l:rounded-xl tab-l:basis-[18.7rem] tab-s:py-8 tab-s:px-6 tab-s:gap-8 tab:basis-[100%]",children:[e.jsx("span",{className:"tag",children:l}),e.jsxs("div",{className:"flex items-end tracking-widest",children:[e.jsxs("h3",{className:"text-inherit text-[4.6rem] leading-[5rem] font-bold laptop-l:text-[3.8rem] laptop-l:leading-[4.2rem] laptop-md:text-[3.2rem] laptop-md:leading-[3.8rem] laptop:text-[2.6rem] laptop:leading-[3.2rem] laptop:font-semibold tab-l:text-[2rem] tab-l:leading-[2.7rem] tab-s:text-[1.8rem] tab-s:leading-[2.4rem]",children:["₹",n]}),e.jsx("span",{className:"text-[2.2rem] font-medium laptop-l:text-[1.8rem] laptop-l:tracking-normal laptop-md:text-[1.6rem] laptop:text-[1.4rem] tab-l:text-[1.2rem] tab-s:text-base",children:"/Onwards"})]}),e.jsx("ul",{className:"flex flex-col gap-8 card-service-list w-full tab-l:gap-6",children:r.map(o=>e.jsx("li",{children:o},o))})]},a)})})]})})})},u=()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(j,{})]});export{u as default};
