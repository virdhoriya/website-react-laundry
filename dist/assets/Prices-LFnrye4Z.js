import{j as e,L as m,r as c,_ as d,e as x}from"./index-CPivOM4V.js";const g=()=>e.jsx("section",{className:"section-space",children:e.jsx("div",{className:"secondary-container",children:e.jsxs("div",{className:"flex items-center justify-start relative tab:flex-col tab:gap-10 mb-l:gap-8 tab:items-stretch star-psudo",children:[e.jsxs("div",{className:"basis-1/2 flex flex-col items-start gap-20 laptop-l:gap-16 laptop-md:gap-10 laptop:gap-8 tab:flex-row tab:justify-between",children:[e.jsxs("h2",{className:"banner-title",children:["Our",e.jsx("br",{className:"tab:hidden"}),e.jsx("span",{className:"tab:pl-4",children:"Prices"})]}),e.jsx(m,{to:"/contact",className:"primary-button",children:"Contact Us"})]}),e.jsx("div",{className:"basis-[45%] laptop-m:basis-1/2",children:e.jsx("p",{className:"para2",children:"We make doing your laundry simple. We can save your time, so you can enjoy doing the things you love. We can save you money on soap, water, heating and electricity. So you can enjoy even more of the things you love. Our prices are simple and affordable."})})]})})}),b=()=>e.jsx("section",{className:"section-space",children:e.jsx("div",{className:"container container-x",children:e.jsxs("div",{className:"px-28 py-32 border border-gray-200 rounded-[2rem]",children:[e.jsxs("div",{className:"flex justify-between pb-28",children:[e.jsx("div",{className:"basis-1/2 bg-gray-200 rounded-md h-24 shimmer"}),e.jsx("div",{className:"w-80 bg-gray-200 rounded-full h-24 shimmer"})]}),e.jsx("div",{className:"flex justify-between items-start gap-24 flex-wrap",children:Array.from({length:4},(i,r)=>e.jsxs("div",{className:"basis-[34rem] border border-gray-200 rounded-3xl px-20 py-24 flex flex-col items-start gap-16",children:[e.jsx("span",{className:"inline-block w-48 h-24 rounded-full bg-gray-200 animate-pulse"}),e.jsx("div",{className:"self-stretch h-20 bg-gray-200 rounded-md shimmer"}),e.jsxs("ul",{className:"self-stretch flex flex-col gap-8",children:[e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]}),e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]}),e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]}),e.jsxs("li",{className:"flex justify-between gap-4",children:[e.jsx("span",{className:"inline-block h-10 w-10 bg-gray-200 rounded-md"}),e.jsx("div",{className:"grow bg-gray-200 rounded-md shimmer"})]})]})]},r))})]})})}),h=()=>{const[i,r]=c.useState(!0),[n,a]=c.useState(),t="http://3.110.208.70:3000";return c.useEffect(()=>{(async()=>{try{const p=await fetch(`${t}/price-content`,{method:"GET"}),s=await p.json();p.ok?a(s==null?void 0:s.data):d.error((s==null?void 0:s.message)||"Failed to retrieve pricing information. Please try again later.",{className:"toast-error"})}catch{d.error("There was an issue retrieving pricing data. Please check your connection.",{className:"toast-error"})}finally{r(!1)}})()},[t]),{prices:n,loading:i}},j=()=>{const{prices:i,loading:r}=h(),n=x(a=>{var t,l;return(l=(t=a==null?void 0:a.setting)==null?void 0:t.settings)==null?void 0:l.price_pdf_url});return r?e.jsx(b,{}):e.jsx("section",{className:"section-space",children:e.jsx("div",{className:"container-b",children:e.jsxs("div",{className:"price-list-container text-white px-28 py-32 laptop-l:px-24 laptop-l:py-28 laptop-md:px-20 laptop-md:py-24 laptop:px-[4.5rem] laptop:py-[5.5rem] laptop-s:px-14 laptop-s:py-16 tab-s:p-12 tab:p-10 mb-l:p-8",children:[e.jsxs("div",{className:"flex justify-between items-center pb-28 laptop-l:pb-[5.5rem] laptop-md:pb-20 laptop:pb-16 laptop-s:pb-14 tab-s:pb-10 tab-s:flex-wrap tab-s:gap-8 tab:gap-6 mb-l:justify-center",children:[e.jsxs("h2",{className:"tracking-[2px] text-inherit laptop-l:tracking-[1.5px] laptop-md:tracking-[1px] mb-l:text-center",children:["Best Quality at"," ",e.jsx("span",{className:"text-[var(--secondary)]",children:"REASONABLE PRICING"})]}),e.jsx("div",{children:e.jsx("a",{href:n,"aria-label":"Check price list pdf",target:"__blank",rel:"noopener noreferrer",className:"price-list-btn",children:"Check Price List"})})]}),e.jsx("div",{className:"prices-card grid grid-cols-4 gap-24 laptop-l:gap-20 laptop-md:gap-16 tab-m:gap-12",children:i.map(a=>{const{price_content_id:t,category_name:l,price:p,service_names:s}=a;return e.jsxs("div",{className:"border border-white/20 rounded-3xl px-20 py-24 flex flex-col items-start gap-16 hover:border-white transition-all duration-200 laptop-l:px-14 laptop-l:py-16 laptop-l:gap-12 laptop-l:rounded-2xl laptop-md:py-16 laptop-md:px-12 laptop-md:gap-10 laptop-md:border-[0.8px] laptop:px-10 laptop:py-12 laptop:gap-8 laptop:rounded-xl laptop-s:px-8 laptop-s:py-10 tab-l:gap-6 tab-s:py-8 tab-s:px-6 tab-s:gap-8 tab:p-10 mb-l:p-8 mb:rounded-lg",children:[e.jsx("span",{className:"tag",children:l}),e.jsxs("div",{className:"flex items-end tracking-widest",children:[e.jsxs("h3",{className:"text-inherit text-[4.6rem] leading-[5rem] font-bold laptop-l:text-[3.2rem] laptop-l:leading-[4.2rem] laptop-md:text-[2.8rem] laptop-md:leading-[3.4rem] laptop:text-[2.8rem] laptop:leading-[3rem] laptop-s:text-[2.4rem] laptop-s:leading-[2.8rem] tab-s:leading-[2.4rem] tab:text-[2rem]",children:["₹",p]}),e.jsx("span",{className:"text-[2.2rem] font-medium laptop-l:text-[1.6rem] laptop-l:tracking-normal laptop-md:text-[1.5rem] laptop:text-[1.4rem] laptop-s:text-[1.2rem] tab-s:text-base",children:"/Onwards"})]}),e.jsx("ul",{className:"card-service-list w-full flex flex-col gap-8 laptop-s:gap-6",children:s.map(o=>e.jsx("li",{children:o},o))})]},t)})})]})})})},f=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx(j,{})]});export{f as default};
