import{r as _,a0 as g,a1 as C}from"./index-d12XFQPa.js";import{x as H,y as U,h as O,T as G,d as W,_ as j,z as A,A as R,u as X}from"./ButtonBase-CMFRa2_h.js";function w(n){return Object.keys(n).length===0}function Z(n=null){const r=_.useContext(H);return!r||w(r)?n:r}const $=U();function z(n=$){return Z(n)}function q(n){return typeof n=="string"}function B(n,r,i){return n===void 0||q(n)?r:{...r,ownerState:{...r.ownerState,...i}}}function F(n,r=[]){if(n===void 0)return{};const i={};return Object.keys(n).filter(s=>s.match(/^on[A-Z]/)&&typeof n[s]=="function"&&!r.includes(s)).forEach(s=>{i[s]=n[s]}),i}function k(n){if(n===void 0)return{};const r={};return Object.keys(n).filter(i=>!(i.match(/^on[A-Z]/)&&typeof n[i]=="function")).forEach(i=>{r[i]=n[i]}),r}function J(n){const{getSlotProps:r,additionalProps:i,externalSlotProps:s,externalForwardedProps:t,className:e}=n;if(!r){const d=O(i==null?void 0:i.className,e,t==null?void 0:t.className,s==null?void 0:s.className),T={...i==null?void 0:i.style,...t==null?void 0:t.style,...s==null?void 0:s.style},y={...i,...t,...s};return d.length>0&&(y.className=d),Object.keys(T).length>0&&(y.style=T),{props:y,internalRef:void 0}}const o=F({...t,...s}),a=k(s),f=k(t),u=r(o),c=O(u==null?void 0:u.className,i==null?void 0:i.className,e,t==null?void 0:t.className,s==null?void 0:s.className),h={...u==null?void 0:u.style,...i==null?void 0:i.style,...t==null?void 0:t.style,...s==null?void 0:s.style},l={...u,...i,...f,...a};return c.length>0&&(l.className=c),Object.keys(h).length>0&&(l.style=h),{props:l,internalRef:u.ref}}function K(n,r,i){return typeof n=="function"?n(r,i):n}function P(){const n=z(W);return n[G]||n}const D={disabled:!1};var Q=function(r){return r.scrollTop},N="unmounted",E="exited",m="entering",v="entered",b="exiting",p=function(n){j(r,n);function r(s,t){var e;e=n.call(this,s,t)||this;var o=t,a=o&&!o.isMounting?s.enter:s.appear,f;return e.appearStatus=null,s.in?a?(f=E,e.appearStatus=m):f=v:s.unmountOnExit||s.mountOnEnter?f=N:f=E,e.state={status:f},e.nextCallback=null,e}r.getDerivedStateFromProps=function(t,e){var o=t.in;return o&&e.status===N?{status:E}:null};var i=r.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(t){var e=null;if(t!==this.props){var o=this.state.status;this.props.in?o!==m&&o!==v&&(e=m):(o===m||o===v)&&(e=b)}this.updateStatus(!1,e)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var t=this.props.timeout,e,o,a;return e=o=a=t,t!=null&&typeof t!="number"&&(e=t.exit,o=t.enter,a=t.appear!==void 0?t.appear:o),{exit:e,enter:o,appear:a}},i.updateStatus=function(t,e){if(t===void 0&&(t=!1),e!==null)if(this.cancelNextCallback(),e===m){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);o&&Q(o)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:N})},i.performEnter=function(t){var e=this,o=this.props.enter,a=this.context?this.context.isMounting:t,f=this.props.nodeRef?[a]:[g.findDOMNode(this),a],u=f[0],c=f[1],h=this.getTimeouts(),l=a?h.appear:h.enter;if(!t&&!o||D.disabled){this.safeSetState({status:v},function(){e.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:m},function(){e.props.onEntering(u,c),e.onTransitionEnd(l,function(){e.safeSetState({status:v},function(){e.props.onEntered(u,c)})})})},i.performExit=function(){var t=this,e=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||D.disabled){this.safeSetState({status:E},function(){t.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:b},function(){t.props.onExiting(a),t.onTransitionEnd(o.exit,function(){t.safeSetState({status:E},function(){t.props.onExited(a)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},i.setNextCallback=function(t){var e=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,e.nextCallback=null,t(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},i.onTransitionEnd=function(t,e){this.setNextCallback(e);var o=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),a=t==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=f[0],c=f[1];this.props.addEndListener(u,c)}t!=null&&setTimeout(this.nextCallback,t)},i.render=function(){var t=this.state.status;if(t===N)return null;var e=this.props,o=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=A(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return C.createElement(R.Provider,{value:null},typeof o=="function"?o(t,a):C.cloneElement(C.Children.only(o),a))},r}(C.Component);p.contextType=R;p.propTypes={};function x(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};p.UNMOUNTED=N;p.EXITED=E;p.ENTERING=m;p.ENTERED=v;p.EXITING=b;const tt=n=>n.scrollTop;function et(n,r){const{timeout:i,easing:s,style:t={}}=n;return{duration:t.transitionDuration??(typeof i=="number"?i:i[r.mode]||0),easing:t.transitionTimingFunction??(typeof s=="object"?s[r.mode]:s),delay:t.transitionDelay}}function nt(n,r){const{className:i,elementType:s,ownerState:t,externalForwardedProps:e,internalForwardedProps:o,...a}=r,{component:f,slots:u={[n]:void 0},slotProps:c={[n]:void 0},...h}=e,l=u[n]||s,d=K(c[n],t),{props:{component:T,...y},internalRef:M}=J({className:i,...a,externalForwardedProps:n==="root"?h:void 0,externalSlotProps:d}),I=X(M,d==null?void 0:d.ref,r.ref),S=n==="root"?T||f:T,L=B(l,{...n==="root"&&!f&&!u[n]&&o,...n!=="root"&&!u[n]&&o,...y,...S&&{as:S},ref:I},t);return[l,L]}export{p as T,B as a,nt as b,P as c,tt as d,F as e,et as g,J as m,K as r,z as u};
