import{G as l,r as u,_ as r}from"./index-COKVPBfh.js";function p(t){return l({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 12H4"},child:[]}]})(t)}function f(t){return l({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"},child:[]}]})(t)}const g=()=>{const[t,o]=u.useState(!1),i="http://35.154.167.170:3000",s=localStorage.getItem("token");return{updateCart:async(n,e)=>{if(!n||!e||typeof e!="object")return r.error("Cart ID and valid payload are required!"),null;try{o(!0);const a=await fetch(`${i}/carts/${n}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify(e)}),d=await a.json();return a.ok?d:(r.error("Failed to update cart!"),null)}catch{return r.error("An error occurred while updating the cart!"),null}finally{o(!1)}},loading:t}},k=()=>{const[t,o]=u.useState(!1),i="http://35.154.167.170:3000",s=localStorage.getItem("token");return{deleteProduct:async n=>{if(!n)return r.error("Cart ID is required to delete an item!"),null;try{o(!0);const e=await fetch(`${i}/carts/${n}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}}),a=await e.json();return e.ok?a:(r.error("Failed to delete item from cart!"),null)}catch{return r.error("Failed to delete item from cart!"),null}finally{o(!1)}},loading:t}};export{p as H,g as a,f as b,k as u};
