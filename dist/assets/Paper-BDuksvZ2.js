import{r as v,j as y}from"./index-DQQfVAQD.js";import{g as b,b as g,e as x,m as w,f as C,h as R,o as f,i as h,w as m}from"./ButtonBase-D-5zPdM6.js";import{c as k}from"./useSlot-B55v0BHs.js";function E({controlled:e,default:a,name:t,state:s="value"}){const{current:o}=v.useRef(e!==void 0),[n,l]=v.useState(a),r=o?e:n,p=v.useCallback(i=>{o||l(i)},[]);return[r,p]}function S(e){return g("MuiPaper",e)}b("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const U=e=>{const{square:a,elevation:t,variant:s,classes:o}=e,n={root:["root",s,!a&&"rounded",s==="elevation"&&`elevation${t}`]};return h(n,S,o)},$=x("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],!t.square&&a.rounded,t.variant==="elevation"&&a[`elevation${t.elevation}`]]}})(w(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),I=v.forwardRef(function(a,t){var c;const s=C({props:a,name:"MuiPaper"}),o=k(),{className:n,component:l="div",elevation:r=1,square:p=!1,variant:i="elevation",...u}=s,d={...s,component:l,elevation:r,square:p,variant:i},P=U(d);return y.jsx($,{as:l,ownerState:d,className:R(P.root,n),ref:t,...u,style:{...i==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[r],...o.vars&&{"--Paper-overlay":(c=o.vars.overlays)==null?void 0:c[r]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${f("#fff",m(r))}, ${f("#fff",m(r))})`}},...u.style}})});export{I as P,E as u};
