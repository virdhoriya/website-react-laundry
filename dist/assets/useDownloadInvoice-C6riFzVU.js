import{r as l,_ as n}from"./index-YW1zJveJ.js";const h=()=>{const[s,o]=l.useState(!1),a="http://35.154.167.170:3000",r=window.localStorage.getItem("token");return{downloadInvoice:async i=>{try{o(!0);const t=await fetch(`${a}/pdf/invoice/${i}`,{method:"GET",headers:{Authorization:`Bearer ${r}`}}),e=await t.json();if(t.ok){const c=e==null?void 0:e.url;window.open(c,"_blank")}else n.error((e==null?void 0:e.message)||"Oops! Something went wrong while trying to download the invoice. Please try again.",{className:"toast-error"})}catch{n.error("We encountered an issue while fetching the invoice. Please try again later.",{className:"toast-error"})}finally{o(!1)}},loading:s}};export{h as u};
