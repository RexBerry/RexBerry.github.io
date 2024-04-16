(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let $e=Float32Array;function J(e,n,r){const t=new $e(3);return e&&(t[0]=e),n&&(t[1]=n),r&&(t[2]=r),t}function ct(e,n,r){return r=r||new $e(3),r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function zn(e,n,r){r=r||new $e(3);const t=e[2]*n[0]-e[0]*n[2],o=e[0]*n[1]-e[1]*n[0];return r[0]=e[1]*n[2]-e[2]*n[1],r[1]=t,r[2]=o,r}function fn(e,n){n=n||new $e(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=Math.sqrt(r);return t>1e-5?(n[0]=e[0]/t,n[1]=e[1]/t,n[2]=e[2]/t):(n[0]=0,n[1]=0,n[2]=0),n}let p=Float32Array;function ut(e){const n=p;return p=e,n}function st(e,n){return n=n||new p(16),n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function lt(){return new p(16).fill(0)}function tr(e,n){return n=n||new p(16),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function or(e){return e=e||new p(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _t(e,n){if(n=n||new p(16),n===e){let E;return E=e[1],e[1]=e[4],e[4]=E,E=e[2],e[2]=e[8],e[8]=E,E=e[3],e[3]=e[12],e[12]=E,E=e[6],e[6]=e[9],e[9]=E,E=e[7],e[7]=e[13],e[13]=E,E=e[11],e[11]=e[14],e[14]=E,n}const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],f=e[1*4+1],c=e[1*4+2],u=e[1*4+3],_=e[2*4+0],s=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],F=e[3*4+1],m=e[3*4+2],T=e[3*4+3];return n[0]=r,n[1]=i,n[2]=_,n[3]=A,n[4]=t,n[5]=f,n[6]=s,n[7]=F,n[8]=o,n[9]=c,n[10]=l,n[11]=m,n[12]=a,n[13]=u,n[14]=x,n[15]=T,n}function ar(e,n){n=n||new p(16);const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],f=e[1*4+1],c=e[1*4+2],u=e[1*4+3],_=e[2*4+0],s=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],F=e[3*4+1],m=e[3*4+2],T=e[3*4+3],E=l*T,P=m*x,y=c*T,N=m*u,L=c*x,S=l*u,M=o*T,D=m*a,Y=o*x,B=l*a,Q=o*u,w=c*a,C=_*F,O=A*s,G=i*F,H=A*f,z=i*s,he=_*f,Xe=r*F,ve=A*t,Me=r*s,De=_*t,Ye=r*f,Be=i*t,Cn=E*f+N*s+L*F-(P*f+y*s+S*F),On=P*t+M*s+B*F-(E*t+D*s+Y*F),Gn=y*t+D*f+Q*F-(N*t+M*f+w*F),Hn=S*t+Y*f+w*s-(L*t+B*f+Q*s),U=1/(r*Cn+i*On+_*Gn+A*Hn);return n[0]=U*Cn,n[1]=U*On,n[2]=U*Gn,n[3]=U*Hn,n[4]=U*(P*i+y*_+S*A-(E*i+N*_+L*A)),n[5]=U*(E*r+D*_+Y*A-(P*r+M*_+B*A)),n[6]=U*(N*r+M*i+w*A-(y*r+D*i+Q*A)),n[7]=U*(L*r+B*i+Q*_-(S*r+Y*i+w*_)),n[8]=U*(C*u+H*x+z*T-(O*u+G*x+he*T)),n[9]=U*(O*a+Xe*x+De*T-(C*a+ve*x+Me*T)),n[10]=U*(G*a+ve*u+Ye*T-(H*a+Xe*u+Be*T)),n[11]=U*(he*a+Me*u+Be*x-(z*a+De*u+Ye*x)),n[12]=U*(G*l+he*m+O*c-(z*m+C*c+H*l)),n[13]=U*(Me*m+C*o+ve*l-(Xe*l+De*m+O*o)),n[14]=U*(Xe*c+Be*m+H*o-(Ye*m+G*o+ve*c)),n[15]=U*(Ye*l+z*o+De*c-(Me*c+Be*l+he*o)),n}function At(e,n,r){r=r||new p(16);const t=e[0],o=e[1],a=e[2],i=e[3],f=e[4],c=e[5],u=e[6],_=e[7],s=e[8],l=e[9],x=e[10],A=e[11],F=e[12],m=e[13],T=e[14],E=e[15],P=n[0],y=n[1],N=n[2],L=n[3],S=n[4],M=n[5],D=n[6],Y=n[7],B=n[8],Q=n[9],w=n[10],C=n[11],O=n[12],G=n[13],H=n[14],z=n[15];return r[0]=t*P+f*y+s*N+F*L,r[1]=o*P+c*y+l*N+m*L,r[2]=a*P+u*y+x*N+T*L,r[3]=i*P+_*y+A*N+E*L,r[4]=t*S+f*M+s*D+F*Y,r[5]=o*S+c*M+l*D+m*Y,r[6]=a*S+u*M+x*D+T*Y,r[7]=i*S+_*M+A*D+E*Y,r[8]=t*B+f*Q+s*w+F*C,r[9]=o*B+c*Q+l*w+m*C,r[10]=a*B+u*Q+x*w+T*C,r[11]=i*B+_*Q+A*w+E*C,r[12]=t*O+f*G+s*H+F*z,r[13]=o*O+c*G+l*H+m*z,r[14]=a*O+u*G+x*H+T*z,r[15]=i*O+_*G+A*H+E*z,r}function xt(e,n,r){return r=r||or(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function Ft(e,n){return n=n||J(),n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function mt(e,n,r){r=r||J();const t=n*4;return r[0]=e[t+0],r[1]=e[t+1],r[2]=e[t+2],r}function Tt(e,n,r,t){t!==e&&(t=tr(e,t));const o=r*4;return t[o+0]=n[0],t[o+1]=n[1],t[o+2]=n[2],t}function Et(e,n,r,t,o){o=o||new p(16);const a=Math.tan(Math.PI*.5-.5*e),i=1/(r-t);return o[0]=a/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+t)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*t*i*2,o[15]=0,o}function dt(e,n,r,t,o,a,i){return i=i||new p(16),i[0]=2/(n-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-r),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(n+e)/(e-n),i[13]=(t+r)/(r-t),i[14]=(a+o)/(o-a),i[15]=1,i}function Pt(e,n,r,t,o,a,i){i=i||new p(16);const f=n-e,c=t-r,u=o-a;return i[0]=2*o/f,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/c,i[6]=0,i[7]=0,i[8]=(e+n)/f,i[9]=(t+r)/c,i[10]=a/u,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*a/u,i[15]=0,i}let Z,ae,$;function yt(e,n,r,t){return t=t||new p(16),Z=Z||J(),ae=ae||J(),$=$||J(),fn(ct(e,n,$),$),fn(zn(r,$,Z),Z),fn(zn($,Z,ae),ae),t[0]=Z[0],t[1]=Z[1],t[2]=Z[2],t[3]=0,t[4]=ae[0],t[5]=ae[1],t[6]=ae[2],t[7]=0,t[8]=$[0],t[9]=$[1],t[10]=$[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function pt(e,n){return n=n||new p(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Nt(e,n,r){r=r||new p(16);const t=n[0],o=n[1],a=n[2],i=e[0],f=e[1],c=e[2],u=e[3],_=e[1*4+0],s=e[1*4+1],l=e[1*4+2],x=e[1*4+3],A=e[2*4+0],F=e[2*4+1],m=e[2*4+2],T=e[2*4+3],E=e[3*4+0],P=e[3*4+1],y=e[3*4+2],N=e[3*4+3];return e!==r&&(r[0]=i,r[1]=f,r[2]=c,r[3]=u,r[4]=_,r[5]=s,r[6]=l,r[7]=x,r[8]=A,r[9]=F,r[10]=m,r[11]=T),r[12]=i*t+_*o+A*a+E,r[13]=f*t+s*o+F*a+P,r[14]=c*t+l*o+m*a+y,r[15]=u*t+x*o+T*a+N,r}function It(e,n){n=n||new p(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=t,n[7]=0,n[8]=0,n[9]=-t,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function bt(e,n,r){r=r||new p(16);const t=e[4],o=e[5],a=e[6],i=e[7],f=e[8],c=e[9],u=e[10],_=e[11],s=Math.cos(n),l=Math.sin(n);return r[4]=s*t+l*f,r[5]=s*o+l*c,r[6]=s*a+l*u,r[7]=s*i+l*_,r[8]=s*f-l*t,r[9]=s*c-l*o,r[10]=s*u-l*a,r[11]=s*_-l*i,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function St(e,n){n=n||new p(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=0,n[2]=-t,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=t,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Lt(e,n,r){r=r||new p(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],f=e[2*4+0],c=e[2*4+1],u=e[2*4+2],_=e[2*4+3],s=Math.cos(n),l=Math.sin(n);return r[0]=s*t-l*f,r[1]=s*o-l*c,r[2]=s*a-l*u,r[3]=s*i-l*_,r[8]=s*f+l*t,r[9]=s*c+l*o,r[10]=s*u+l*a,r[11]=s*_+l*i,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Rt(e,n){n=n||new p(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=t,n[2]=0,n[3]=0,n[4]=-t,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Ut(e,n,r){r=r||new p(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],f=e[1*4+0],c=e[1*4+1],u=e[1*4+2],_=e[1*4+3],s=Math.cos(n),l=Math.sin(n);return r[0]=s*t+l*f,r[1]=s*o+l*c,r[2]=s*a+l*u,r[3]=s*i+l*_,r[4]=s*f-l*t,r[5]=s*c-l*o,r[6]=s*u-l*a,r[7]=s*_-l*i,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function ht(e,n,r){r=r||new p(16);let t=e[0],o=e[1],a=e[2];const i=Math.sqrt(t*t+o*o+a*a);t/=i,o/=i,a/=i;const f=t*t,c=o*o,u=a*a,_=Math.cos(n),s=Math.sin(n),l=1-_;return r[0]=f+(1-f)*_,r[1]=t*o*l+a*s,r[2]=t*a*l-o*s,r[3]=0,r[4]=t*o*l-a*s,r[5]=c+(1-c)*_,r[6]=o*a*l+t*s,r[7]=0,r[8]=t*a*l+o*s,r[9]=o*a*l-t*s,r[10]=u+(1-u)*_,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Xt(e,n,r,t){t=t||new p(16);let o=n[0],a=n[1],i=n[2];const f=Math.sqrt(o*o+a*a+i*i);o/=f,a/=f,i/=f;const c=o*o,u=a*a,_=i*i,s=Math.cos(r),l=Math.sin(r),x=1-s,A=c+(1-c)*s,F=o*a*x+i*l,m=o*i*x-a*l,T=o*a*x-i*l,E=u+(1-u)*s,P=a*i*x+o*l,y=o*i*x+a*l,N=a*i*x-o*l,L=_+(1-_)*s,S=e[0],M=e[1],D=e[2],Y=e[3],B=e[4],Q=e[5],w=e[6],C=e[7],O=e[8],G=e[9],H=e[10],z=e[11];return t[0]=A*S+F*B+m*O,t[1]=A*M+F*Q+m*G,t[2]=A*D+F*w+m*H,t[3]=A*Y+F*C+m*z,t[4]=T*S+E*B+P*O,t[5]=T*M+E*Q+P*G,t[6]=T*D+E*w+P*H,t[7]=T*Y+E*C+P*z,t[8]=y*S+N*B+L*O,t[9]=y*M+N*Q+L*G,t[10]=y*D+N*w+L*H,t[11]=y*Y+N*C+L*z,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function vt(e,n){return n=n||new p(16),n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Mt(e,n,r){r=r||new p(16);const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0],r[1]=t*e[0*4+1],r[2]=t*e[0*4+2],r[3]=t*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=a*e[2*4+0],r[9]=a*e[2*4+1],r[10]=a*e[2*4+2],r[11]=a*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Dt(e,n,r){r=r||J();const t=n[0],o=n[1],a=n[2],i=t*e[0*4+3]+o*e[1*4+3]+a*e[2*4+3]+e[3*4+3];return r[0]=(t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0]+e[3*4+0])/i,r[1]=(t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1]+e[3*4+1])/i,r[2]=(t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2]+e[3*4+2])/i,r}function Yt(e,n,r){r=r||J();const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0],r[1]=t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1],r[2]=t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2],r}function Bt(e,n,r){r=r||J();const t=ar(e),o=n[0],a=n[1],i=n[2];return r[0]=o*t[0*4+0]+a*t[0*4+1]+i*t[0*4+2],r[1]=o*t[1*4+0]+a*t[1*4+1]+i*t[1*4+2],r[2]=o*t[2*4+0]+a*t[2*4+1]+i*t[2*4+2],r}var k=Object.freeze({__proto__:null,axisRotate:Xt,axisRotation:ht,copy:tr,create:lt,frustum:Pt,getAxis:mt,getTranslation:Ft,identity:or,inverse:ar,lookAt:yt,multiply:At,negate:st,ortho:dt,perspective:Et,rotateX:bt,rotateY:Lt,rotateZ:Ut,rotationX:It,rotationY:St,rotationZ:Rt,scale:Mt,scaling:vt,setAxis:Tt,setDefaultType:ut,setTranslation:xt,transformDirection:Yt,transformNormal:Bt,transformPoint:Dt,translate:Nt,translation:pt,transpose:_t});const dn=5120,be=5121,Pn=5122,yn=5123,pn=5124,Nn=5125,In=5126,Qt=32819,wt=32820,Ct=33635,Ot=5131,Gt=33640,Ht=35899,zt=35902,gt=36269,Vt=34042,ir={};{const e=ir;e[dn]=Int8Array,e[be]=Uint8Array,e[Pn]=Int16Array,e[yn]=Uint16Array,e[pn]=Int32Array,e[Nn]=Uint32Array,e[In]=Float32Array,e[Qt]=Uint16Array,e[wt]=Uint16Array,e[Ct]=Uint16Array,e[Ot]=Uint16Array,e[Gt]=Uint32Array,e[Ht]=Uint32Array,e[zt]=Uint32Array,e[gt]=Uint32Array,e[Vt]=Uint32Array}function bn(e){if(e instanceof Int8Array)return dn;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return be;if(e instanceof Int16Array)return Pn;if(e instanceof Uint16Array)return yn;if(e instanceof Int32Array)return pn;if(e instanceof Uint32Array)return Nn;if(e instanceof Float32Array)return In;throw new Error("unsupported typed array type")}function fr(e){if(e===Int8Array)return dn;if(e===Uint8Array||e===Uint8ClampedArray)return be;if(e===Int16Array)return Pn;if(e===Uint16Array)return yn;if(e===Int32Array)return pn;if(e===Uint32Array)return Nn;if(e===Float32Array)return In;throw new Error("unsupported typed array type")}function cr(e){const n=ir[e];if(!n)throw new Error("unknown gl type");return n}const He=typeof SharedArrayBuffer<"u"?function(n){return n&&n.buffer&&(n.buffer instanceof ArrayBuffer||n.buffer instanceof SharedArrayBuffer)}:function(n){return n&&n.buffer&&n.buffer instanceof ArrayBuffer};function ur(...e){console.error(...e)}const gn=new Map;function ke(e,n){if(!e||typeof e!="object")return!1;let r=gn.get(n);r||(r=new WeakMap,gn.set(n,r));let t=r.get(e);if(t===void 0){const o=Object.prototype.toString.call(e);t=o.substring(8,o.length-1)===n,r.set(e,t)}return t}function Wt(e,n){return typeof WebGLBuffer<"u"&&ke(n,"WebGLBuffer")}function sr(e,n){return typeof WebGLRenderbuffer<"u"&&ke(n,"WebGLRenderbuffer")}function Ke(e,n){return typeof WebGLTexture<"u"&&ke(n,"WebGLTexture")}function $t(e,n){return typeof WebGLSampler<"u"&&ke(n,"WebGLSampler")}const lr=35044,ue=34962,kt=34963,Kt=34660,qt=5120,Zt=5121,jt=5122,Jt=5123,eo=5124,no=5125,_r=5126,Ar={attribPrefix:""};function ro(e,n,r,t,o){e.bindBuffer(n,r),e.bufferData(n,t,o||lr)}function xr(e,n,r,t){if(Wt(e,n))return n;r=r||ue;const o=e.createBuffer();return ro(e,r,o,n,t),o}function Fr(e){return e==="indices"}function to(e){return e===Int8Array||e===Uint8Array}function oo(e){return e.length?e:e.data}const ao=/coord|texture/i,io=/color|colour/i;function fo(e,n){let r;if(ao.test(e)?r=2:io.test(e)?r=4:r=3,n%r>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${r} but ${n} values is not evenly divisible by ${r}. You should specify it.`);return r}function co(e,n,r){return e.numComponents||e.size||fo(n,r||oo(e).length)}function mr(e,n){if(He(e))return e;if(He(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type?Sn(e.type):void 0;return r||(Fr(n)?r=Uint16Array:r=Float32Array),new r(e.data)}function uo(e){return typeof e=="number"?e:e?fr(e):_r}function Sn(e){return typeof e=="number"?cr(e):e||Float32Array}function so(e,n){return{buffer:n.buffer,numValues:2*3*4,type:uo(n.type),arrayType:Sn(n.type)}}function lo(e,n){const r=n.data||n,t=Sn(n.type),o=r*t.BYTES_PER_ELEMENT,a=e.createBuffer();return e.bindBuffer(ue,a),e.bufferData(ue,o,n.drawType||lr),{buffer:a,numValues:r,type:fr(t),arrayType:t}}function _o(e,n,r){const t=mr(n,r);return{arrayType:t.constructor,buffer:xr(e,t,void 0,n.drawType),type:bn(t),numValues:0}}function Ao(e,n){const r={};return Object.keys(n).forEach(function(t){if(!Fr(t)){const o=n[t],a=o.attrib||o.name||o.attribName||Ar.attribPrefix+t;if(o.value){if(!Array.isArray(o.value)&&!He(o.value))throw new Error("array.value is not array or typedarray");r[a]={value:o.value}}else{let i;o.buffer&&o.buffer instanceof WebGLBuffer?i=so:typeof o=="number"||typeof o.data=="number"?i=lo:i=_o;const{buffer:f,type:c,numValues:u,arrayType:_}=i(e,o,t),s=o.normalize!==void 0?o.normalize:to(_),l=co(o,t,u);r[a]={buffer:f,numComponents:l,type:c,normalize:s,stride:o.stride||0,offset:o.offset||0,divisor:o.divisor===void 0?void 0:o.divisor,drawType:o.drawType}}}}),e.bindBuffer(ue,null),r}function xo(e,n){return n===qt||n===Zt?1:n===jt||n===Jt?2:n===eo||n===no||n===_r?4:0}const cn=["position","positions","a_position"];function Fo(e,n){let r,t;for(t=0;t<cn.length&&(r=cn[t],!(r in n||(r=Ar.attribPrefix+r,r in n)));++t);t===cn.length&&(r=Object.keys(n)[0]);const o=n[r];if(!o.buffer)return 1;e.bindBuffer(ue,o.buffer);const a=e.getBufferParameter(ue,Kt);e.bindBuffer(ue,null);const i=xo(e,o.type),f=a/i,c=o.numComponents||o.size,u=f/c;if(u%1!==0)throw new Error(`numComponents ${c} not correct for length ${length}`);return u}function Vn(e,n,r){const t=Ao(e,n),o=Object.assign({},r||{});o.attribs=Object.assign({},r?r.attribs:{},t);const a=n.indices;if(a){const i=mr(a,"indices");o.indices=xr(e,i,kt),o.numElements=i.length,o.elementType=bn(i)}else o.numElements||(o.numElements=Fo(e,o.attribs));return o}function Re(e){return!!e.texStorage2D}const Tr=function(){const e={},n={};function r(t){const o=t.constructor.name;if(!e[o]){for(const a in t)if(typeof t[a]=="number"){const i=n[t[a]];n[t[a]]=i?`${i} | ${a}`:a}e[o]=!0}}return function(o,a){return r(o),n[a]||(typeof a=="number"?`0x${a.toString(16)}`:a)}}(),re={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},Te=He,Er=function(){let e;return function(){return e=e||(typeof document<"u"&&document.createElement?document.createElement("canvas").getContext("2d"):null),e}}(),Wn=6406,W=6407,b=6408,$n=6409,kn=6410,pe=6402,Kn=34041,ze=33071,mo=9728,To=9729,q=3553,K=34067,ee=32879,ne=35866,qe=34069,Eo=34070,Po=34071,yo=34072,po=34073,No=34074,ln=10241,_n=10240,ge=10242,Ve=10243,qn=32882,Io=33082,bo=33083,So=33084,Lo=33085,Ro=34892,Uo=34893,Ln=3317,dr=3314,Pr=32878,yr=3316,pr=3315,Nr=32877,ho=37443,Xo=37441,vo=37440,Mo=33321,Do=36756,Yo=33325,Bo=33326,Qo=33330,wo=33329,Co=33338,Oo=33337,Go=33340,Ho=33339,zo=33323,go=36757,Vo=33327,Wo=33328,$o=33336,ko=33335,Ko=33332,qo=33331,Zo=33334,jo=33333,Jo=32849,ea=35905,na=36194,ra=36758,ta=35898,oa=35901,aa=34843,ia=34837,fa=36221,ca=36239,ua=36215,sa=36233,la=36209,_a=36227,Aa=32856,xa=35907,Fa=36759,ma=32855,Ta=32854,Ea=32857,da=34842,Pa=34836,ya=36220,pa=36238,Na=36975,Ia=36214,ba=36232,Sa=36226,La=36208,Ra=33189,Ua=33190,ha=36012,Xa=36013,va=35056,j=5120,I=5121,Qe=5122,se=5123,we=5124,ie=5125,h=5126,Zn=32819,jn=32820,Jn=33635,g=5131,Ne=36193,un=33640,Ma=35899,Da=35902,Ya=36269,Ba=34042,Ce=33319,le=33320,Oe=6403,_e=36244,Ae=36248,fe=36249;let sn;function Ze(e){if(!sn){const n={};n[Wn]={textureFormat:Wn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,g,Ne,h]},n[$n]={textureFormat:$n,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,g,Ne,h]},n[kn]={textureFormat:kn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[I,g,Ne,h]},n[W]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[I,g,Ne,h,Jn]},n[b]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[I,g,Ne,h,Zn,jn]},n[pe]={textureFormat:pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[ie,se]},n[Mo]={textureFormat:Oe,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[I]},n[Do]={textureFormat:Oe,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[j]},n[Yo]={textureFormat:Oe,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[h,g]},n[Bo]={textureFormat:Oe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[h]},n[Qo]={textureFormat:_e,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[I]},n[wo]={textureFormat:_e,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[j]},n[Ko]={textureFormat:_e,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[se]},n[qo]={textureFormat:_e,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Qe]},n[Zo]={textureFormat:_e,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ie]},n[jo]={textureFormat:_e,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[we]},n[zo]={textureFormat:Ce,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[I]},n[go]={textureFormat:Ce,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[j]},n[Vo]={textureFormat:Ce,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[h,g]},n[Wo]={textureFormat:Ce,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[h]},n[$o]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[I]},n[ko]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[j]},n[Co]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[se]},n[Oo]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Qe]},n[Go]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[ie]},n[Ho]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[we]},n[Jo]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[ea]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[na]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[I,Jn]},n[ra]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[j]},n[ta]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[h,g,Ma]},n[oa]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[h,g,Da]},n[aa]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[h,g]},n[ia]={textureFormat:W,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[h]},n[fa]={textureFormat:Ae,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[I]},n[ca]={textureFormat:Ae,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[j]},n[ua]={textureFormat:Ae,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[se]},n[sa]={textureFormat:Ae,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Qe]},n[la]={textureFormat:Ae,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[ie]},n[_a]={textureFormat:Ae,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[we]},n[Aa]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[xa]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[Fa]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[j]},n[ma]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[I,jn,un]},n[Ta]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[I,Zn]},n[Ea]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[un]},n[da]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[h,g]},n[Pa]={textureFormat:b,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[h]},n[ya]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},n[pa]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[j]},n[Na]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[un]},n[Ia]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[se]},n[ba]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Qe]},n[Sa]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[we]},n[La]={textureFormat:fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[ie]},n[Ra]={textureFormat:pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[se,ie]},n[Ua]={textureFormat:pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ie]},n[ha]={textureFormat:pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[h]},n[va]={textureFormat:Kn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ba]},n[Xa]={textureFormat:Kn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ya]},Object.keys(n).forEach(function(r){const t=n[r];t.bytesPerElementMap={},t.bytesPerElement.forEach(function(o,a){const i=t.type[a];t.bytesPerElementMap[i]=o})}),sn=n}return sn[e]}function Qa(e,n){const r=Ze(e);if(!r)throw"unknown internal format";const t=r.bytesPerElementMap[n];if(t===void 0)throw"unknown internal format";return t}function ye(e){const n=Ze(e);if(!n)throw"unknown internal format";return{format:n.textureFormat,type:n.type[0]}}function er(e){return(e&e-1)===0}function wa(e,n,r,t){if(!Re(e))return er(n)&&er(r);const o=Ze(t);if(!o)throw"unknown internal format";return o.colorRenderable&&o.textureFilterable}function Ca(e){const n=Ze(e);if(!n)throw"unknown internal format";return n.textureFilterable}function Ir(e,n,r){return Te(n)?bn(n):r||I}function Ge(e,n,r,t,o){if(o%1!==0)throw"can't guess dimensions";if(!r&&!t){const a=Math.sqrt(o/(n===K?6:1));a%1===0?(r=a,t=a):(r=o,t=1)}else if(t){if(!r&&(r=o/t,r%1))throw"can't guess dimensions"}else if(t=o/r,t%1)throw"can't guess dimensions";return{width:r,height:t}}function Ee(e,n){n.colorspaceConversion!==void 0&&e.pixelStorei(ho,n.colorspaceConversion),n.premultiplyAlpha!==void 0&&e.pixelStorei(Xo,n.premultiplyAlpha),n.flipY!==void 0&&e.pixelStorei(vo,n.flipY)}function br(e){e.pixelStorei(Ln,4),Re(e)&&(e.pixelStorei(dr,0),e.pixelStorei(Pr,0),e.pixelStorei(yr,0),e.pixelStorei(pr,0),e.pixelStorei(Nr,0))}function Oa(e,n,r,t){t.minMag&&(r.call(e,n,ln,t.minMag),r.call(e,n,_n,t.minMag)),t.min&&r.call(e,n,ln,t.min),t.mag&&r.call(e,n,_n,t.mag),t.wrap&&(r.call(e,n,ge,t.wrap),r.call(e,n,Ve,t.wrap),(n===ee||$t(e,n))&&r.call(e,n,qn,t.wrap)),t.wrapR&&r.call(e,n,qn,t.wrapR),t.wrapS&&r.call(e,n,ge,t.wrapS),t.wrapT&&r.call(e,n,Ve,t.wrapT),t.minLod!==void 0&&r.call(e,n,Io,t.minLod),t.maxLod!==void 0&&r.call(e,n,bo,t.maxLod),t.baseLevel!==void 0&&r.call(e,n,So,t.baseLevel),t.maxLevel!==void 0&&r.call(e,n,Lo,t.maxLevel),t.compareFunc!==void 0&&r.call(e,n,Uo,t.compareFunc),t.compareMode!==void 0&&r.call(e,n,Ro,t.compareMode)}function Sr(e,n,r){const t=r.target||q;e.bindTexture(t,n),Oa(e,t,e.texParameteri,r)}function Ga(e){return e=e||re.textureColor,Te(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function An(e,n,r,t,o,a){r=r||re.textureOptions,a=a||b;const i=r.target||q;if(t=t||r.width,o=o||r.height,e.bindTexture(i,n),wa(e,t,o,a))e.generateMipmap(i);else{const f=Ca(a)?To:mo;e.texParameteri(i,ln,f),e.texParameteri(i,_n,f),e.texParameteri(i,ge,ze),e.texParameteri(i,Ve,ze)}}function Se(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function xn(e,n){return n=n||{},n.cubeFaceOrder||[qe,Eo,Po,yo,po,No]}function Fn(e,n){const t=xn(e,n).map(function(o,a){return{face:o,ndx:a}});return t.sort(function(o,a){return o.face-a.face}),t}function Lr(e,n,r,t){t=t||re.textureOptions;const o=t.target||q,a=t.level||0;let i=r.width,f=r.height;const c=t.internalFormat||t.format||b,u=ye(c),_=t.format||u.format,s=t.type||u.type;if(Ee(e,t),e.bindTexture(o,n),o===K){const l=r.width,x=r.height;let A,F;if(l/6===x)A=x,F=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===l)A=l,F=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3===x/2)A=l/3,F=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2===x/3)A=l/2,F=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(r.src?r.src:r.nodeName);const m=Er();m?(m.canvas.width=A,m.canvas.height=A,i=A,f=A,Fn(e,t).forEach(function(T){const E=F[T.ndx*2+0]*A,P=F[T.ndx*2+1]*A;m.drawImage(r,E,P,A,A,0,0,A,A),e.texImage2D(T.face,a,c,_,s,m.canvas)}),m.canvas.width=1,m.canvas.height=1):typeof createImageBitmap<"u"&&(i=A,f=A,Fn(e,t).forEach(function(T){const E=F[T.ndx*2+0]*A,P=F[T.ndx*2+1]*A;e.texImage2D(T.face,a,c,A,A,0,_,s,null),createImageBitmap(r,E,P,A,A,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(y){Ee(e,t),e.bindTexture(o,n),e.texImage2D(T.face,a,c,_,s,y),Se(t)&&An(e,n,t,i,f,c)})}))}else if(o===ee||o===ne){const l=Math.min(r.width,r.height),x=Math.max(r.width,r.height),A=x/l;if(A%1!==0)throw"can not compute 3D dimensions of element";const F=r.width===x?1:0,m=r.height===x?1:0;e.pixelStorei(Ln,1),e.pixelStorei(dr,r.width),e.pixelStorei(Pr,0),e.pixelStorei(Nr,0),e.texImage3D(o,a,c,l,l,l,0,_,s,null);for(let T=0;T<A;++T){const E=T*l*F,P=T*l*m;e.pixelStorei(yr,E),e.pixelStorei(pr,P),e.texSubImage3D(o,a,0,0,T,l,l,1,_,s,r)}br(e)}else e.texImage2D(o,a,c,_,s,r);Se(t)&&An(e,n,t,i,f,c),Sr(e,n,t)}function Ue(){}function Ha(e){if(typeof document<"u"){const n=document.createElement("a");return n.href=e,n.hostname===location.hostname&&n.port===location.port&&n.protocol===location.protocol}else{const n=new URL(location.href).origin;return new URL(e,location.href).origin===n}}function za(e,n){return n===void 0&&!Ha(e)?"anonymous":n}function ga(e,n,r){r=r||Ue;let t;if(n=n!==void 0?n:re.crossOrigin,n=za(e,n),typeof Image<"u"){t=new Image,n!==void 0&&(t.crossOrigin=n);const o=function(){t.removeEventListener("error",a),t.removeEventListener("load",i),t=null},a=function(){const c="couldn't load image: "+e;ur(c),r(c,t),o()},i=function(){r(null,t),o()};return t.addEventListener("error",a),t.addEventListener("load",i),t.src=e,t}else if(typeof ImageBitmap<"u"){let o,a;const i=function(){r(o,a)},f={};n&&(f.mode="cors"),fetch(e,f).then(function(c){if(!c.ok)throw c;return c.blob()}).then(function(c){return createImageBitmap(c,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(c){a=c,setTimeout(i)}).catch(function(c){o=c,setTimeout(i)}),t=null}return t}function Rr(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof ImageData<"u"&&e instanceof ImageData||typeof HTMLElement<"u"&&e instanceof HTMLElement}function Rn(e,n,r){return Rr(e)?(setTimeout(function(){r(null,e)}),e):ga(e,n,r)}function Un(e,n,r){r=r||re.textureOptions;const t=r.target||q;if(e.bindTexture(t,n),r.color===!1)return;const o=Ga(r.color);if(t===K)for(let a=0;a<6;++a)e.texImage2D(qe+a,0,b,1,1,0,b,I,o);else t===ee||t===ne?e.texImage3D(t,0,b,1,1,1,0,b,I,o):e.texImage2D(t,0,b,1,1,0,b,I,o)}function Va(e,n,r,t){return t=t||Ue,r=r||re.textureOptions,Un(e,n,r),r=Object.assign({},r),Rn(r.src,r.crossOrigin,function(a,i){a?t(a,n,i):(Lr(e,n,i,r),t(null,n,i))})}function Wa(e,n,r,t){t=t||Ue;const o=r.src;if(o.length!==6)throw"there must be 6 urls for a cubemap";const a=r.level||0,i=r.internalFormat||r.format||b,f=ye(i),c=r.format||f.format,u=r.type||I,_=r.target||q;if(_!==K)throw"target must be TEXTURE_CUBE_MAP";Un(e,n,r),r=Object.assign({},r);let s=6;const l=[],x=xn(e,r);let A;function F(m){return function(T,E){--s,T?l.push(T):E.width!==E.height?l.push("cubemap face img is not a square: "+E.src):(Ee(e,r),e.bindTexture(_,n),s===5?xn().forEach(function(P){e.texImage2D(P,a,i,c,u,E)}):e.texImage2D(m,a,i,c,u,E),Se(r)&&e.generateMipmap(_)),s===0&&t(l.length?l:void 0,n,A)}}A=o.map(function(m,T){return Rn(m,r.crossOrigin,F(x[T]))})}function $a(e,n,r,t){t=t||Ue;const o=r.src,a=r.internalFormat||r.format||b,i=ye(a),f=r.format||i.format,c=r.type||I,u=r.target||ne;if(u!==ee&&u!==ne)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";Un(e,n,r),r=Object.assign({},r);let _=o.length;const s=[];let l;const x=r.level||0;let A=r.width,F=r.height;const m=o.length;let T=!0;function E(P){return function(y,N){if(--_,y)s.push(y);else{if(Ee(e,r),e.bindTexture(u,n),T){T=!1,A=r.width||N.width,F=r.height||N.height,e.texImage3D(u,x,a,A,F,m,0,f,c,null);for(let L=0;L<m;++L)e.texSubImage3D(u,x,0,0,L,A,F,1,f,c,N)}else{let L=N,S;(N.width!==A||N.height!==F)&&(S=Er(),L=S.canvas,S.canvas.width=A,S.canvas.height=F,S.drawImage(N,0,0,A,F)),e.texSubImage3D(u,x,0,0,P,A,F,1,f,c,L),S&&L===S.canvas&&(S.canvas.width=0,S.canvas.height=0)}Se(r)&&e.generateMipmap(u)}_===0&&t(s.length?s:void 0,n,l)}}l=o.map(function(P,y){return Rn(P,r.crossOrigin,E(y))})}function ka(e,n,r,t){t=t||re.textureOptions;const o=t.target||q;e.bindTexture(o,n);let a=t.width,i=t.height,f=t.depth;const c=t.level||0,u=t.internalFormat||t.format||b,_=ye(u),s=t.format||_.format,l=t.type||Ir(e,r,_.type);if(Te(r))r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));else{const m=cr(l);r=new m(r)}const x=Qa(u,l),A=r.byteLength/x;if(A%1)throw"length wrong size for format: "+Tr(e,s);let F;if(o===ee||o===ne)if(!a&&!i&&!f){const m=Math.cbrt(A);if(m%1!==0)throw"can't guess cube size of array of numElements: "+A;a=m,i=m,f=m}else a&&(!i||!f)?(F=Ge(e,o,i,f,A/a),i=F.width,f=F.height):i&&(!a||!f)?(F=Ge(e,o,a,f,A/i),a=F.width,f=F.height):(F=Ge(e,o,a,i,A/f),a=F.width,i=F.height);else F=Ge(e,o,a,i,A),a=F.width,i=F.height;if(br(e),e.pixelStorei(Ln,t.unpackAlignment||1),Ee(e,t),o===K){const m=x/r.BYTES_PER_ELEMENT,T=A/6*m;Fn(e,t).forEach(E=>{const P=T*E.ndx,y=r.subarray(P,P+T);e.texImage2D(E.face,c,u,a,i,0,s,l,y)})}else o===ee||o===ne?e.texImage3D(o,c,u,a,i,f,0,s,l,r):e.texImage2D(o,c,u,a,i,0,s,l,r);return{width:a,height:i,depth:f,type:l}}function Ka(e,n,r){const t=r.target||q;e.bindTexture(t,n);const o=r.level||0,a=r.internalFormat||r.format||b,i=ye(a),f=r.format||i.format,c=r.type||i.type;if(Ee(e,r),t===K)for(let u=0;u<6;++u)e.texImage2D(qe+u,o,a,r.width,r.height,0,f,c,null);else t===ee||t===ne?e.texImage3D(t,o,a,r.width,r.height,r.depth,0,f,c,null):e.texImage2D(t,o,a,r.width,r.height,0,f,c,null)}function qa(e,n,r){r=r||Ue,n=n||re.textureOptions;const t=e.createTexture(),o=n.target||q;let a=n.width||1,i=n.height||1;const f=n.internalFormat||b;e.bindTexture(o,t),o===K&&(e.texParameteri(o,ge,ze),e.texParameteri(o,Ve,ze));let c=n.src;if(c)if(typeof c=="function"&&(c=c(e,n)),typeof c=="string")Va(e,t,n,r);else if(Te(c)||Array.isArray(c)&&(typeof c[0]=="number"||Array.isArray(c[0])||Te(c[0]))){const u=ka(e,t,c,n);a=u.width,i=u.height}else Array.isArray(c)&&(typeof c[0]=="string"||Rr(c[0]))?o===K?Wa(e,t,n,r):$a(e,t,n,r):(Lr(e,t,c,n),a=c.width,i=c.height);else Ka(e,t,n);return Se(n)&&An(e,t,n,a,i,f),Sr(e,t,n),t}function Za(e,n,r,t,o,a){t=t||r.width,o=o||r.height,a=a||r.depth;const i=r.target||q;e.bindTexture(i,n);const f=r.level||0,c=r.internalFormat||r.format||b,u=ye(c),_=r.format||u.format;let s;const l=r.src;if(l&&(Te(l)||Array.isArray(l)&&typeof l[0]=="number")?s=r.type||Ir(e,l,u.type):s=r.type||u.type,i===K)for(let x=0;x<6;++x)e.texImage2D(qe+x,f,c,t,o,0,_,s,null);else i===ee||i===ne?e.texImage3D(i,f,c,t,o,a,0,_,s,null):e.texImage2D(i,f,c,t,o,0,_,s,null)}const hn=ur;function Ur(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const We=33984,je=34962,ja=34963,Ja=35713,ei=35714,ni=35632,ri=35633,ti=35981,hr=35718,oi=35721,ai=35971,ii=35382,fi=35396,ci=35398,ui=35392,si=35395,Je=5126,Xr=35664,vr=35665,Mr=35666,Xn=5124,Dr=35667,Yr=35668,Br=35669,Qr=35670,wr=35671,Cr=35672,Or=35673,Gr=35674,Hr=35675,zr=35676,li=35678,_i=35680,Ai=35679,xi=35682,Fi=35685,mi=35686,Ti=35687,Ei=35688,di=35689,Pi=35690,yi=36289,pi=36292,Ni=36293,vn=5125,gr=36294,Vr=36295,Wr=36296,Ii=36298,bi=36299,Si=36300,Li=36303,Ri=36306,Ui=36307,hi=36308,Xi=36311,en=3553,nn=34067,Mn=32879,rn=35866,d={};function $r(e,n){return d[n].bindPoint}function vi(e,n){return function(r){e.uniform1f(n,r)}}function Mi(e,n){return function(r){e.uniform1fv(n,r)}}function Di(e,n){return function(r){e.uniform2fv(n,r)}}function Yi(e,n){return function(r){e.uniform3fv(n,r)}}function Bi(e,n){return function(r){e.uniform4fv(n,r)}}function kr(e,n){return function(r){e.uniform1i(n,r)}}function Kr(e,n){return function(r){e.uniform1iv(n,r)}}function qr(e,n){return function(r){e.uniform2iv(n,r)}}function Zr(e,n){return function(r){e.uniform3iv(n,r)}}function jr(e,n){return function(r){e.uniform4iv(n,r)}}function Qi(e,n){return function(r){e.uniform1ui(n,r)}}function wi(e,n){return function(r){e.uniform1uiv(n,r)}}function Ci(e,n){return function(r){e.uniform2uiv(n,r)}}function Oi(e,n){return function(r){e.uniform3uiv(n,r)}}function Gi(e,n){return function(r){e.uniform4uiv(n,r)}}function Hi(e,n){return function(r){e.uniformMatrix2fv(n,!1,r)}}function zi(e,n){return function(r){e.uniformMatrix3fv(n,!1,r)}}function gi(e,n){return function(r){e.uniformMatrix4fv(n,!1,r)}}function Vi(e,n){return function(r){e.uniformMatrix2x3fv(n,!1,r)}}function Wi(e,n){return function(r){e.uniformMatrix3x2fv(n,!1,r)}}function $i(e,n){return function(r){e.uniformMatrix2x4fv(n,!1,r)}}function ki(e,n){return function(r){e.uniformMatrix4x2fv(n,!1,r)}}function Ki(e,n){return function(r){e.uniformMatrix3x4fv(n,!1,r)}}function qi(e,n){return function(r){e.uniformMatrix4x3fv(n,!1,r)}}function X(e,n,r,t){const o=$r(e,n);return Re(e)?function(a){let i,f;!a||Ke(e,a)?(i=a,f=null):(i=a.texture,f=a.sampler),e.uniform1i(t,r),e.activeTexture(We+r),e.bindTexture(o,i),e.bindSampler(r,f)}:function(a){e.uniform1i(t,r),e.activeTexture(We+r),e.bindTexture(o,a)}}function v(e,n,r,t,o){const a=$r(e,n),i=new Int32Array(o);for(let f=0;f<o;++f)i[f]=r+f;return Re(e)?function(f){e.uniform1iv(t,i),f.forEach(function(c,u){e.activeTexture(We+i[u]);let _,s;!c||Ke(e,c)?(_=c,s=null):(_=c.texture,s=c.sampler),e.bindSampler(r,s),e.bindTexture(a,_)})}:function(f){e.uniform1iv(t,i),f.forEach(function(c,u){e.activeTexture(We+i[u]),e.bindTexture(a,c)})}}d[Je]={Type:Float32Array,size:4,setter:vi,arraySetter:Mi};d[Xr]={Type:Float32Array,size:8,setter:Di,cols:2};d[vr]={Type:Float32Array,size:12,setter:Yi,cols:3};d[Mr]={Type:Float32Array,size:16,setter:Bi,cols:4};d[Xn]={Type:Int32Array,size:4,setter:kr,arraySetter:Kr};d[Dr]={Type:Int32Array,size:8,setter:qr,cols:2};d[Yr]={Type:Int32Array,size:12,setter:Zr,cols:3};d[Br]={Type:Int32Array,size:16,setter:jr,cols:4};d[vn]={Type:Uint32Array,size:4,setter:Qi,arraySetter:wi};d[gr]={Type:Uint32Array,size:8,setter:Ci,cols:2};d[Vr]={Type:Uint32Array,size:12,setter:Oi,cols:3};d[Wr]={Type:Uint32Array,size:16,setter:Gi,cols:4};d[Qr]={Type:Uint32Array,size:4,setter:kr,arraySetter:Kr};d[wr]={Type:Uint32Array,size:8,setter:qr,cols:2};d[Cr]={Type:Uint32Array,size:12,setter:Zr,cols:3};d[Or]={Type:Uint32Array,size:16,setter:jr,cols:4};d[Gr]={Type:Float32Array,size:32,setter:Hi,rows:2,cols:2};d[Hr]={Type:Float32Array,size:48,setter:zi,rows:3,cols:3};d[zr]={Type:Float32Array,size:64,setter:gi,rows:4,cols:4};d[Fi]={Type:Float32Array,size:32,setter:Vi,rows:2,cols:3};d[mi]={Type:Float32Array,size:32,setter:$i,rows:2,cols:4};d[Ti]={Type:Float32Array,size:48,setter:Wi,rows:3,cols:2};d[Ei]={Type:Float32Array,size:48,setter:Ki,rows:3,cols:4};d[di]={Type:Float32Array,size:64,setter:ki,rows:4,cols:2};d[Pi]={Type:Float32Array,size:64,setter:qi,rows:4,cols:3};d[li]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:en};d[_i]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:nn};d[Ai]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:Mn};d[xi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:en};d[yi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};d[pi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};d[Ni]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:nn};d[Ii]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:en};d[bi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:Mn};d[Si]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:nn};d[Li]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};d[Ri]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:en};d[Ui]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:Mn};d[hi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:nn};d[Xi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};function tn(e,n){return function(r){if(r.value)switch(e.disableVertexAttribArray(n),r.value.length){case 4:e.vertexAttrib4fv(n,r.value);break;case 3:e.vertexAttrib3fv(n,r.value);break;case 2:e.vertexAttrib2fv(n,r.value);break;case 1:e.vertexAttrib1fv(n,r.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(je,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,r.numComponents||r.size,r.type||Je,r.normalize||!1,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function te(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4iv(n,r.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(je,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||Xn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function on(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4uiv(n,r.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(je,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||vn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function Dn(e,n,r){const t=r.size,o=r.count;return function(a){e.bindBuffer(je,a.buffer);const i=a.size||a.numComponents||t,f=i/o,c=a.type||Je,_=d[c].size*i,s=a.normalize||!1,l=a.offset||0,x=_/o;for(let A=0;A<o;++A)e.enableVertexAttribArray(n+A),e.vertexAttribPointer(n+A,f,c,s,_,l+x*A),e.vertexAttribDivisor&&e.vertexAttribDivisor(n+A,a.divisor||0)}}const R={};R[Je]={size:4,setter:tn};R[Xr]={size:8,setter:tn};R[vr]={size:12,setter:tn};R[Mr]={size:16,setter:tn};R[Xn]={size:4,setter:te};R[Dr]={size:8,setter:te};R[Yr]={size:12,setter:te};R[Br]={size:16,setter:te};R[vn]={size:4,setter:on};R[gr]={size:8,setter:on};R[Vr]={size:12,setter:on};R[Wr]={size:16,setter:on};R[Qr]={size:4,setter:te};R[wr]={size:8,setter:te};R[Cr]={size:12,setter:te};R[Or]={size:16,setter:te};R[Gr]={size:4,setter:Dn,count:2};R[Hr]={size:9,setter:Dn,count:3};R[zr]={size:16,setter:Dn,count:4};const Zi=/ERROR:\s*\d+:(\d+)/gi;function ji(e,n="",r=0){const t=[...n.matchAll(Zi)],o=new Map(t.map((a,i)=>{const f=parseInt(a[1]),c=t[i+1],u=c?c.index:n.length,_=n.substring(a.index,u);return[f-1,_]}));return e.split(`
`).map((a,i)=>{const f=o.get(i);return`${i+1+r}: ${a}${f?`

^^^ ${f}`:""}`}).join(`
`)}const nr=/^[ \t]*\n/;function Jr(e){let n=0;return nr.test(e)&&(n=1,e=e.replace(nr,"")),{lineOffset:n,shaderSource:e}}function Ji(e,n){return e.errorCallback(n),e.callback&&setTimeout(()=>{e.callback(`${n}
${e.errors.join(`
`)}`)}),null}function ef(e,n,r,t){if(t=t||hn,!e.getShaderParameter(r,Ja)){const a=e.getShaderInfoLog(r),{lineOffset:i,shaderSource:f}=Jr(e.getShaderSource(r)),c=`${ji(f,a,i)}
Error compiling ${Tr(e,n)}: ${a}`;return t(c),c}return""}function Yn(e,n,r){let t,o,a;if(typeof n=="function"&&(r=n,n=void 0),typeof e=="function")r=e,e=void 0;else if(e&&!Array.isArray(e)){const u=e;r=u.errorCallback,e=u.attribLocations,t=u.transformFeedbackVaryings,o=u.transformFeedbackMode,a=u.callback}const i=r||hn,f=[],c={errorCallback(u,..._){f.push(u),i(u,..._)},transformFeedbackVaryings:t,transformFeedbackMode:o,callback:a,errors:f};{let u={};Array.isArray(e)?e.forEach(function(_,s){u[_]=n?n[s]:s}):u=e||{},c.attribLocations=u}return c}const nf=["VERTEX_SHADER","FRAGMENT_SHADER"];function rf(e,n){if(n.indexOf("frag")>=0)return ni;if(n.indexOf("vert")>=0)return ri}function tf(e,n,r){const t=e.getAttachedShaders(n);for(const o of t)r.has(o)&&e.deleteShader(o);e.deleteProgram(n)}const of=(e=0)=>new Promise(n=>setTimeout(n,e));function af(e,n,r){const t=e.createProgram(),{attribLocations:o,transformFeedbackVaryings:a,transformFeedbackMode:i}=Yn(r);for(let f=0;f<n.length;++f){let c=n[f];if(typeof c=="string"){const u=Ur(c),_=u?u.text:c;let s=e[nf[f]];u&&u.type&&(s=rf(e,u.type)||s),c=e.createShader(s),e.shaderSource(c,Jr(_).shaderSource),e.compileShader(c),e.attachShader(t,c)}}Object.entries(o).forEach(([f,c])=>e.bindAttribLocation(t,c,f));{let f=a;f&&(f.attribs&&(f=f.attribs),Array.isArray(f)||(f=Object.keys(f)),e.transformFeedbackVaryings(t,f,i||ti))}return e.linkProgram(t),t}function ff(e,n,r,t,o){const a=Yn(r,t,o),i=new Set(n),f=af(e,n,a);function c(u,_){const s=uf(u,_,a.errorCallback);return s&&tf(u,_,i),s}if(a.callback){cf(e,f).then(()=>{const u=c(e,f);a.callback(u,u?void 0:f)});return}return c(e,f)?void 0:f}async function cf(e,n){const r=e.getExtension("KHR_parallel_shader_compile"),t=r?(a,i)=>a.getProgramParameter(i,r.COMPLETION_STATUS_KHR):()=>!0;let o=0;do await of(o),o=1e3/60;while(!t(e,n))}function uf(e,n,r){if(r=r||hn,!e.getProgramParameter(n,ei)){const o=e.getProgramInfoLog(n);r(`Error in program linking: ${o}`);const i=e.getAttachedShaders(n).map(f=>ef(e,e.getShaderParameter(f,e.SHADER_TYPE),f,r));return`${o}
${i.filter(f=>f).join(`
`)}`}}function sf(e,n,r,t,o){return ff(e,n,r,t,o)}function et(e){const n=e.name;return n.startsWith("gl_")||n.startsWith("webgl_")}const lf=/(\.|\[|]|\w+)/g,_f=e=>e>="0"&&e<="9";function Af(e,n,r,t){const o=e.split(lf).filter(f=>f!=="");let a=0,i="";for(;;){const f=o[a++];i+=f;const c=_f(f[0]),u=c?parseInt(f):f;if(c&&(i+=o[a++]),a===o.length){r[u]=n;break}else{const s=o[a++],l=s==="[",x=r[u]||(l?[]:{});r[u]=x,r=x,t[i]=t[i]||function(A){return function(F){nt(A,F)}}(x),i+=s}}}function xf(e,n){let r=0;function t(f,c,u){const _=c.name.endsWith("[0]"),s=c.type,l=d[s];if(!l)throw new Error(`unknown type: 0x${s.toString(16)}`);let x;if(l.bindPoint){const A=r;r+=c.size,_?x=l.arraySetter(e,s,A,u,c.size):x=l.setter(e,s,A,u,c.size)}else l.arraySetter&&_?x=l.arraySetter(e,u):x=l.setter(e,u);return x.location=u,x}const o={},a={},i=e.getProgramParameter(n,hr);for(let f=0;f<i;++f){const c=e.getActiveUniform(n,f);if(et(c))continue;let u=c.name;u.endsWith("[0]")&&(u=u.substr(0,u.length-3));const _=e.getUniformLocation(n,c.name);if(_){const s=t(n,c,_);o[u]=s,Af(u,s,a,o)}}return o}function Ff(e,n){const r={},t=e.getProgramParameter(n,ai);for(let o=0;o<t;++o){const a=e.getTransformFeedbackVarying(n,o);r[a.name]={index:o,type:a.type,size:a.size}}return r}function mf(e,n){const r=e.getProgramParameter(n,hr),t=[],o=[];for(let f=0;f<r;++f){o.push(f),t.push({});const c=e.getActiveUniform(n,f);t[f].name=c.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(f){const c=f[0],u=f[1];e.getActiveUniforms(n,o,e[c]).forEach(function(_,s){t[s][u]=_})});const a={},i=e.getProgramParameter(n,ii);for(let f=0;f<i;++f){const c=e.getActiveUniformBlockName(n,f),u={index:e.getUniformBlockIndex(n,c),usedByVertexShader:e.getActiveUniformBlockParameter(n,f,fi),usedByFragmentShader:e.getActiveUniformBlockParameter(n,f,ci),size:e.getActiveUniformBlockParameter(n,f,ui),uniformIndices:e.getActiveUniformBlockParameter(n,f,si)};u.used=u.usedByVertexShader||u.usedByFragmentShader,a[c]=u}return{blockSpecs:a,uniformData:t}}function nt(e,n){for(const r in n){const t=e[r];typeof t=="function"?t(n[r]):nt(e[r],n[r])}}function Bn(e,...n){const r=e.uniformSetters||e,t=n.length;for(let o=0;o<t;++o){const a=n[o];if(Array.isArray(a)){const i=a.length;for(let f=0;f<i;++f)Bn(r,a[f])}else for(const i in a){const f=r[i];f&&f(a[i])}}}const Le=Bn;function Tf(e,n){const r={},t=e.getProgramParameter(n,oi);for(let o=0;o<t;++o){const a=e.getActiveAttrib(n,o);if(et(a))continue;const i=e.getAttribLocation(n,a.name),f=R[a.type],c=f.setter(e,i,f);c.location=i,r[a.name]=c}return r}function Ef(e,n){for(const r in n){const t=e[r];t&&t(n[r])}}function de(e,n,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(Ef(n.attribSetters||n,r.attribs),r.indices&&e.bindBuffer(ja,r.indices))}function rr(e,n){const r=xf(e,n),t=Tf(e,n),o={program:n,uniformSetters:r,attribSetters:t};return Re(e)&&(o.uniformBlockSpec=mf(e,n),o.transformFeedbackInfo=Ff(e,n)),o}const df=/\s|{|}|;/;function xe(e,n,r,t,o){const a=Yn(r,t,o),i=[];if(n=n.map(function(u){if(!df.test(u)){const _=Ur(u);if(_)u=_.text;else{const s=`no element with id: ${u}`;a.errorCallback(s),i.push(s)}}return u}),i.length)return Ji(a,"");const f=a.callback;f&&(a.callback=(u,_)=>{f(u,u?void 0:rr(e,_))});const c=sf(e,n,a);return c?rr(e,c):null}const rt=36160,ce=36161,Pf=3553,yf=5121,pf=6402,Nf=6408,If=33190,bf=36012,Sf=35056,Lf=36013,Rf=32854,Uf=32855,hf=36194,tt=33189,ot=6401,at=36168,Qn=34041,mn=36064,an=36096,it=36128,wn=33306,Tn=33071,En=9729,ft=[{format:Nf,type:yf,min:En,wrap:Tn},{format:Qn}],V={};V[Qn]=wn;V[ot]=it;V[at]=it;V[pf]=an;V[tt]=an;V[If]=an;V[bf]=an;V[Sf]=wn;V[Lf]=wn;function Xf(e,n){return V[e]||V[n]}const oe={};oe[Rf]=!0;oe[Uf]=!0;oe[hf]=!0;oe[Qn]=!0;oe[tt]=!0;oe[ot]=!0;oe[at]=!0;function vf(e){return oe[e]}const Mf=32;function Df(e){return e>=mn&&e<mn+Mf}function Yf(e,n,r,t){const o=rt,a=e.createFramebuffer();e.bindFramebuffer(o,a),r=r||e.drawingBufferWidth,t=t||e.drawingBufferHeight,n=n||ft;const i=[],f={framebuffer:a,attachments:[],width:r,height:t};return n.forEach(function(c,u){let _=c.attachment;const s=c.samples,l=c.format;let x=c.attachmentPoint||Xf(l,c.internalFormat);if(x||(x=mn+u),Df(x)&&i.push(x),!_)if(s!==void 0||vf(l))_=e.createRenderbuffer(),e.bindRenderbuffer(ce,_),s>1?e.renderbufferStorageMultisample(ce,s,l,r,t):e.renderbufferStorage(ce,l,r,t);else{const A=Object.assign({},c);A.width=r,A.height=t,A.auto===void 0&&(A.auto=!1,A.min=A.min||A.minMag||En,A.mag=A.mag||A.minMag||En,A.wrapS=A.wrapS||A.wrap||Tn,A.wrapT=A.wrapT||A.wrap||Tn),_=qa(e,A)}if(sr(e,_))e.framebufferRenderbuffer(o,x,ce,_);else if(Ke(e,_))c.layer!==void 0?e.framebufferTextureLayer(o,x,_,c.level||0,c.layer):e.framebufferTexture2D(o,x,c.target||Pf,_,c.level||0);else throw new Error("unknown attachment type");f.attachments.push(_)}),e.drawBuffers&&e.drawBuffers(i),f}function Bf(e,n,r,t,o){t=t||e.drawingBufferWidth,o=o||e.drawingBufferHeight,n.width=t,n.height=o,r=r||ft,r.forEach(function(a,i){const f=n.attachments[i],c=a.format,u=a.samples;if(u!==void 0||sr(e,f))e.bindRenderbuffer(ce,f),u>1?e.renderbufferStorageMultisample(ce,u,c,t,o):e.renderbufferStorage(ce,c,t,o);else if(Ke(e,f))Za(e,f,a,t,o);else throw new Error("unknown attachment type")})}function Pe(e,n,r){r=r||rt,n?(e.bindFramebuffer(r,n.framebuffer),e.viewport(0,0,n.width,n.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}const Fe=Object.freeze({superwhite:"superwhite",colorCanvas:"color-canvas",brightnessCanvas:"brightness-canvas",hdrToggle:"enable-hdr",antialiasToggle:"enable-antialias",hdrWarning:"hdr-warning"}),Qf=4;function wf(e){const n=[];for(let r=0;r<Qf;++r)n.push(Yf(e,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height));return n}function Cf(e,n){for(const r of n)Bf(e,r,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height)}const Of=`#version 300 es\r
\r
precision highp float;\r
\r
uniform mat4 u_transform;\r
\r
in vec4 a_position;\r
in vec4 a_color;\r
\r
out vec4 v_color;\r
\r
void main()\r
{\r
    gl_Position = u_transform * a_position;\r
    v_color = a_color;\r
}\r
`,Ie=`#version 300 es\r
\r
precision highp float;\r
\r
uniform mat4 u_transform;\r
\r
in vec4 a_position;\r
in vec2 a_texcoord;\r
\r
out vec2 v_texcoord;\r
\r
void main()\r
{\r
    gl_Position = u_transform * a_position;\r
    v_texcoord = a_texcoord;\r
}\r
`,Gf=`#version 300 es\r
\r
precision highp float;\r
\r
in vec4 v_color;\r
\r
out vec4 out_color;\r
\r
void main()\r
{\r
    out_color = max(v_color, vec4(0.0));\r
}\r
`,Hf=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float u_brightness_mult;\r
uniform float u_reciprocal_white_point_squared;\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
vec3 srgb_to_linear(vec3 x)\r
{\r
    return mix(\r
        x / 12.92,\r
        pow((x + 0.055) / 1.055, vec3(2.4)),\r
        greaterThan(x, vec3(0.04045))\r
    );\r
}\r
\r
float srgb_to_linear(float x)\r
{\r
    if (x <= 0.04045)\r
    {\r
        return x / 12.92;\r
    }\r
    else\r
    {\r
        return pow((x + 0.055) / 1.055, 2.4);\r
    }\r
}\r
\r
vec3 linear_to_srgb(vec3 x)\r
{\r
    return mix(\r
        12.92 * x,\r
        1.055 * pow(x, vec3(1.0 / 2.4)) - 0.055,\r
        greaterThan(x, vec3(0.0031308))\r
    );\r
}\r
\r
float linear_to_srgb(float x)\r
{\r
    if (x <= 0.0031308)\r
    {\r
        return 12.92 * x;\r
    }\r
    else\r
    {\r
        return 1.055 * pow(x, 1.0 / 2.4) - 0.055;\r
    }\r
}\r
\r
float calc_luminance(vec3 x)\r
{\r
    // Y component of Display P3 to CIEXYZ\r
    return dot(\r
        vec3(0.22897, 0.69174, 0.07929),\r
        x\r
    );\r
}\r
\r
float calc_luma(vec3 x)\r
{\r
    return calc_luminance(linear_to_srgb(x));\r
}\r
\r
void main()\r
{\r
    // Extended Reinhard tone mapping using luminance\r
    // https://64.github.io/tonemapping/\r
    vec4 color = u_brightness_mult * texture(u_texture, v_texcoord);\r
\r
    float luminance = calc_luminance(color.rgb);\r
    float ratio\r
        = (1.0 + u_reciprocal_white_point_squared * luminance)\r
        / (1.0 + luminance);\r
\r
    vec3 tonemapped = color.rgb * ratio;\r
    tonemapped = clamp(tonemapped, vec3(0.0), vec3(1.0));\r
\r
    // FXAA shader requires luma in alpha channel\r
    float luma = calc_luma(color.rgb);\r
    out_color = vec4(tonemapped.rgb, luma);\r
}\r
`,zf=`#version 300 es\r
\r
precision highp float;\r
\r
#define FXAA_GLSL_130 1\r
#define FXAA_PC 1\r
#define FXAA_QUALITY__PRESET 25\r
\r
/*============================================================================\r
\r
\r
                    NVIDIA FXAA 3.11 by TIMOTHY LOTTES\r
\r
\r
------------------------------------------------------------------------------\r
COPYRIGHT (C) 2010, 2011 NVIDIA CORPORATION. ALL RIGHTS RESERVED.\r
------------------------------------------------------------------------------\r
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THIS SOFTWARE IS PROVIDED\r
*AS IS* AND NVIDIA AND ITS SUPPLIERS DISCLAIM ALL WARRANTIES, EITHER EXPRESS\r
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF\r
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL NVIDIA\r
OR ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR\r
CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR\r
LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION,\r
OR ANY OTHER PECUNIARY LOSS) ARISING OUT OF THE USE OF OR INABILITY TO USE\r
THIS SOFTWARE, EVEN IF NVIDIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH\r
DAMAGES.\r
\r
============================================================================*/\r
\r
#ifndef FXAA_PC\r
    #define FXAA_PC 0\r
#endif\r
#ifndef FXAA_GLSL_120\r
    #define FXAA_GLSL_120 0\r
#endif\r
#ifndef FXAA_GLSL_130\r
    #define FXAA_GLSL_130 0\r
#endif\r
#ifndef FXAA_HLSL_3\r
    #define FXAA_HLSL_3 0\r
#endif\r
#ifndef FXAA_HLSL_4\r
    #define FXAA_HLSL_4 0\r
#endif\r
#ifndef FXAA_HLSL_5\r
    #define FXAA_HLSL_5 0\r
#endif\r
#ifndef FXAA_GREEN_AS_LUMA\r
    #define FXAA_GREEN_AS_LUMA 0\r
#endif\r
#ifndef FXAA_EARLY_EXIT\r
    #define FXAA_EARLY_EXIT 1\r
#endif\r
#ifndef FXAA_DISCARD\r
    #define FXAA_DISCARD 0\r
#endif\r
#ifndef FXAA_FAST_PIXEL_OFFSET\r
    #ifdef GL_EXT_gpu_shader4\r
        #define FXAA_FAST_PIXEL_OFFSET 1\r
    #endif\r
    #ifdef GL_NV_gpu_shader5\r
        #define FXAA_FAST_PIXEL_OFFSET 1\r
    #endif\r
    #ifdef GL_ARB_gpu_shader5\r
        #define FXAA_FAST_PIXEL_OFFSET 1\r
    #endif\r
    #ifndef FXAA_FAST_PIXEL_OFFSET\r
        #define FXAA_FAST_PIXEL_OFFSET 0\r
    #endif\r
#endif\r
#ifndef FXAA_GATHER4_ALPHA\r
    #if (FXAA_HLSL_5 == 1)\r
        #define FXAA_GATHER4_ALPHA 1\r
    #endif\r
    #ifdef GL_ARB_gpu_shader5\r
        #define FXAA_GATHER4_ALPHA 1\r
    #endif\r
    #ifdef GL_NV_gpu_shader5\r
        #define FXAA_GATHER4_ALPHA 1\r
    #endif\r
    #ifndef FXAA_GATHER4_ALPHA\r
        #define FXAA_GATHER4_ALPHA 0\r
    #endif\r
#endif\r
#ifndef FXAA_QUALITY__PRESET\r
    #define FXAA_QUALITY__PRESET 12\r
#endif\r
#if (FXAA_QUALITY__PRESET == 10)\r
    #define FXAA_QUALITY__PS 3\r
    #define FXAA_QUALITY__P0 1.5\r
    #define FXAA_QUALITY__P1 3.0\r
    #define FXAA_QUALITY__P2 12.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 11)\r
    #define FXAA_QUALITY__PS 4\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 3.0\r
    #define FXAA_QUALITY__P3 12.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 12)\r
    #define FXAA_QUALITY__PS 5\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 4.0\r
    #define FXAA_QUALITY__P4 12.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 13)\r
    #define FXAA_QUALITY__PS 6\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 4.0\r
    #define FXAA_QUALITY__P5 12.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 14)\r
    #define FXAA_QUALITY__PS 7\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 4.0\r
    #define FXAA_QUALITY__P6 12.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 15)\r
    #define FXAA_QUALITY__PS 8\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 2.0\r
    #define FXAA_QUALITY__P6 4.0\r
    #define FXAA_QUALITY__P7 12.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 20)\r
    #define FXAA_QUALITY__PS 3\r
    #define FXAA_QUALITY__P0 1.5\r
    #define FXAA_QUALITY__P1 2.0\r
    #define FXAA_QUALITY__P2 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 21)\r
    #define FXAA_QUALITY__PS 4\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 22)\r
    #define FXAA_QUALITY__PS 5\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 23)\r
    #define FXAA_QUALITY__PS 6\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 24)\r
    #define FXAA_QUALITY__PS 7\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 3.0\r
    #define FXAA_QUALITY__P6 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 25)\r
    #define FXAA_QUALITY__PS 8\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 2.0\r
    #define FXAA_QUALITY__P6 4.0\r
    #define FXAA_QUALITY__P7 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 26)\r
    #define FXAA_QUALITY__PS 9\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 2.0\r
    #define FXAA_QUALITY__P6 2.0\r
    #define FXAA_QUALITY__P7 4.0\r
    #define FXAA_QUALITY__P8 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 27)\r
    #define FXAA_QUALITY__PS 10\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 2.0\r
    #define FXAA_QUALITY__P6 2.0\r
    #define FXAA_QUALITY__P7 2.0\r
    #define FXAA_QUALITY__P8 4.0\r
    #define FXAA_QUALITY__P9 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 28)\r
    #define FXAA_QUALITY__PS 11\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 2.0\r
    #define FXAA_QUALITY__P6 2.0\r
    #define FXAA_QUALITY__P7 2.0\r
    #define FXAA_QUALITY__P8 2.0\r
    #define FXAA_QUALITY__P9 4.0\r
    #define FXAA_QUALITY__P10 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 29)\r
    #define FXAA_QUALITY__PS 12\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.5\r
    #define FXAA_QUALITY__P2 2.0\r
    #define FXAA_QUALITY__P3 2.0\r
    #define FXAA_QUALITY__P4 2.0\r
    #define FXAA_QUALITY__P5 2.0\r
    #define FXAA_QUALITY__P6 2.0\r
    #define FXAA_QUALITY__P7 2.0\r
    #define FXAA_QUALITY__P8 2.0\r
    #define FXAA_QUALITY__P9 2.0\r
    #define FXAA_QUALITY__P10 4.0\r
    #define FXAA_QUALITY__P11 8.0\r
#endif\r
#if (FXAA_QUALITY__PRESET == 39)\r
    #define FXAA_QUALITY__PS 12\r
    #define FXAA_QUALITY__P0 1.0\r
    #define FXAA_QUALITY__P1 1.0\r
    #define FXAA_QUALITY__P2 1.0\r
    #define FXAA_QUALITY__P3 1.0\r
    #define FXAA_QUALITY__P4 1.0\r
    #define FXAA_QUALITY__P5 1.5\r
    #define FXAA_QUALITY__P6 2.0\r
    #define FXAA_QUALITY__P7 2.0\r
    #define FXAA_QUALITY__P8 2.0\r
    #define FXAA_QUALITY__P9 2.0\r
    #define FXAA_QUALITY__P10 4.0\r
    #define FXAA_QUALITY__P11 8.0\r
#endif\r
#if (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)\r
    #define FxaaBool bool\r
    #define FxaaDiscard discard\r
    #define FxaaFloat float\r
    #define FxaaFloat2 vec2\r
    #define FxaaFloat3 vec3\r
    #define FxaaFloat4 vec4\r
    #define FxaaHalf float\r
    #define FxaaHalf2 vec2\r
    #define FxaaHalf3 vec3\r
    #define FxaaHalf4 vec4\r
    #define FxaaInt2 ivec2\r
    #define FxaaSat(x) clamp(x, 0.0, 1.0)\r
    #define FxaaTex sampler2D\r
#endif\r
#if (FXAA_GLSL_130 == 1)\r
    #define FxaaTexTop(t, p) texture(t, p)\r
    #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)\r
    #if (FXAA_GATHER4_ALPHA == 1)\r
        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)\r
        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)\r
        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)\r
        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)\r
    #endif\r
#endif\r
#if (FXAA_GREEN_AS_LUMA == 0)\r
    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }\r
#else\r
    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }\r
#endif\r
#if (FXAA_PC == 1)\r
FxaaFloat4 FxaaPixelShader(\r
    FxaaFloat2 pos,\r
    FxaaTex tex,\r
    FxaaFloat2 fxaaQualityRcpFrame,\r
    FxaaFloat fxaaQualitySubpix,\r
    FxaaFloat fxaaQualityEdgeThreshold,\r
    FxaaFloat fxaaQualityEdgeThresholdMin\r
) {\r
    FxaaFloat2 posM;\r
    posM.x = pos.x;\r
    posM.y = pos.y;\r
    #if (FXAA_GATHER4_ALPHA == 1)\r
        #if (FXAA_DISCARD == 0)\r
            FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);\r
            #if (FXAA_GREEN_AS_LUMA == 0)\r
                #define lumaM rgbyM.w\r
            #else\r
                #define lumaM rgbyM.y\r
            #endif\r
        #endif\r
        #if (FXAA_GREEN_AS_LUMA == 0)\r
            FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);\r
            FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));\r
        #else\r
            FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);\r
            FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));\r
        #endif\r
        #if (FXAA_DISCARD == 1)\r
            #define lumaM luma4A.w\r
        #endif\r
        #define lumaE luma4A.z\r
        #define lumaS luma4A.x\r
        #define lumaSE luma4A.y\r
        #define lumaNW luma4B.w\r
        #define lumaN luma4B.z\r
        #define lumaW luma4B.x\r
    #else\r
        FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);\r
        #if (FXAA_GREEN_AS_LUMA == 0)\r
            #define lumaM rgbyM.w\r
        #else\r
            #define lumaM rgbyM.y\r
        #endif\r
        FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));\r
    #endif\r
    FxaaFloat maxSM = max(lumaS, lumaM);\r
    FxaaFloat minSM = min(lumaS, lumaM);\r
    FxaaFloat maxESM = max(lumaE, maxSM);\r
    FxaaFloat minESM = min(lumaE, minSM);\r
    FxaaFloat maxWN = max(lumaN, lumaW);\r
    FxaaFloat minWN = min(lumaN, lumaW);\r
    FxaaFloat rangeMax = max(maxWN, maxESM);\r
    FxaaFloat rangeMin = min(minWN, minESM);\r
    FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;\r
    FxaaFloat range = rangeMax - rangeMin;\r
    FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);\r
    FxaaBool earlyExit = range < rangeMaxClamped;\r
    if(earlyExit)\r
        #if (FXAA_DISCARD == 1)\r
            FxaaDiscard;\r
        #else\r
            return rgbyM;\r
        #endif\r
    #if (FXAA_GATHER4_ALPHA == 0)\r
        FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));\r
    #else\r
        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));\r
        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));\r
    #endif\r
    FxaaFloat lumaNS = lumaN + lumaS;\r
    FxaaFloat lumaWE = lumaW + lumaE;\r
    FxaaFloat subpixRcpRange = 1.0/range;\r
    FxaaFloat subpixNSWE = lumaNS + lumaWE;\r
    FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;\r
    FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;\r
    FxaaFloat lumaNESE = lumaNE + lumaSE;\r
    FxaaFloat lumaNWNE = lumaNW + lumaNE;\r
    FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;\r
    FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;\r
    FxaaFloat lumaNWSW = lumaNW + lumaSW;\r
    FxaaFloat lumaSWSE = lumaSW + lumaSE;\r
    FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);\r
    FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);\r
    FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;\r
    FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;\r
    FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;\r
    FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;\r
    FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;\r
    FxaaFloat lengthSign = fxaaQualityRcpFrame.x;\r
    FxaaBool horzSpan = edgeHorz >= edgeVert;\r
    FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;\r
    if(!horzSpan) lumaN = lumaW;\r
    if(!horzSpan) lumaS = lumaE;\r
    if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;\r
    FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;\r
    FxaaFloat gradientN = lumaN - lumaM;\r
    FxaaFloat gradientS = lumaS - lumaM;\r
    FxaaFloat lumaNN = lumaN + lumaM;\r
    FxaaFloat lumaSS = lumaS + lumaM;\r
    FxaaBool pairN = abs(gradientN) >= abs(gradientS);\r
    FxaaFloat gradient = max(abs(gradientN), abs(gradientS));\r
    if(pairN) lengthSign = -lengthSign;\r
    FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);\r
    FxaaFloat2 posB;\r
    posB.x = posM.x;\r
    posB.y = posM.y;\r
    FxaaFloat2 offNP;\r
    offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;\r
    offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;\r
    if(!horzSpan) posB.x += lengthSign * 0.5;\r
    if( horzSpan) posB.y += lengthSign * 0.5;\r
    FxaaFloat2 posN;\r
    posN.x = posB.x - offNP.x * FXAA_QUALITY__P0;\r
    posN.y = posB.y - offNP.y * FXAA_QUALITY__P0;\r
    FxaaFloat2 posP;\r
    posP.x = posB.x + offNP.x * FXAA_QUALITY__P0;\r
    posP.y = posB.y + offNP.y * FXAA_QUALITY__P0;\r
    FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;\r
    FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));\r
    FxaaFloat subpixE = subpixC * subpixC;\r
    FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));\r
    if(!pairN) lumaNN = lumaSS;\r
    FxaaFloat gradientScaled = gradient * 1.0/4.0;\r
    FxaaFloat lumaMM = lumaM - lumaNN * 0.5;\r
    FxaaFloat subpixF = subpixD * subpixE;\r
    FxaaBool lumaMLTZero = lumaMM < 0.0;\r
    lumaEndN -= lumaNN * 0.5;\r
    lumaEndP -= lumaNN * 0.5;\r
    FxaaBool doneN = abs(lumaEndN) >= gradientScaled;\r
    FxaaBool doneP = abs(lumaEndP) >= gradientScaled;\r
    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P1;\r
    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P1;\r
    FxaaBool doneNP = (!doneN) || (!doneP);\r
    if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P1;\r
    if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P1;\r
    if(doneNP) {\r
        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
        doneN = abs(lumaEndN) >= gradientScaled;\r
        doneP = abs(lumaEndP) >= gradientScaled;\r
        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P2;\r
        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P2;\r
        doneNP = (!doneN) || (!doneP);\r
        if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P2;\r
        if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P2;\r
        #if (FXAA_QUALITY__PS > 3)\r
        if(doneNP) {\r
            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
            doneN = abs(lumaEndN) >= gradientScaled;\r
            doneP = abs(lumaEndP) >= gradientScaled;\r
            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P3;\r
            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P3;\r
            doneNP = (!doneN) || (!doneP);\r
            if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P3;\r
            if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P3;\r
            #if (FXAA_QUALITY__PS > 4)\r
            if(doneNP) {\r
                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                doneN = abs(lumaEndN) >= gradientScaled;\r
                doneP = abs(lumaEndP) >= gradientScaled;\r
                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P4;\r
                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P4;\r
                doneNP = (!doneN) || (!doneP);\r
                if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P4;\r
                if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P4;\r
                #if (FXAA_QUALITY__PS > 5)\r
                if(doneNP) {\r
                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                    doneN = abs(lumaEndN) >= gradientScaled;\r
                    doneP = abs(lumaEndP) >= gradientScaled;\r
                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P5;\r
                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P5;\r
                    doneNP = (!doneN) || (!doneP);\r
                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P5;\r
                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P5;\r
                    #if (FXAA_QUALITY__PS > 6)\r
                    if(doneNP) {\r
                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                        doneN = abs(lumaEndN) >= gradientScaled;\r
                        doneP = abs(lumaEndP) >= gradientScaled;\r
                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P6;\r
                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P6;\r
                        doneNP = (!doneN) || (!doneP);\r
                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P6;\r
                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P6;\r
                        #if (FXAA_QUALITY__PS > 7)\r
                        if(doneNP) {\r
                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                            doneN = abs(lumaEndN) >= gradientScaled;\r
                            doneP = abs(lumaEndP) >= gradientScaled;\r
                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P7;\r
                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P7;\r
                            doneNP = (!doneN) || (!doneP);\r
                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P7;\r
                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P7;\r
    #if (FXAA_QUALITY__PS > 8)\r
    if(doneNP) {\r
        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
        doneN = abs(lumaEndN) >= gradientScaled;\r
        doneP = abs(lumaEndP) >= gradientScaled;\r
        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P8;\r
        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P8;\r
        doneNP = (!doneN) || (!doneP);\r
        if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P8;\r
        if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P8;\r
        #if (FXAA_QUALITY__PS > 9)\r
        if(doneNP) {\r
            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
            doneN = abs(lumaEndN) >= gradientScaled;\r
            doneP = abs(lumaEndP) >= gradientScaled;\r
            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P9;\r
            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P9;\r
            doneNP = (!doneN) || (!doneP);\r
            if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P9;\r
            if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P9;\r
            #if (FXAA_QUALITY__PS > 10)\r
            if(doneNP) {\r
                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                doneN = abs(lumaEndN) >= gradientScaled;\r
                doneP = abs(lumaEndP) >= gradientScaled;\r
                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P10;\r
                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P10;\r
                doneNP = (!doneN) || (!doneP);\r
                if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P10;\r
                if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P10;\r
                #if (FXAA_QUALITY__PS > 11)\r
                if(doneNP) {\r
                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                    doneN = abs(lumaEndN) >= gradientScaled;\r
                    doneP = abs(lumaEndP) >= gradientScaled;\r
                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P11;\r
                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P11;\r
                    doneNP = (!doneN) || (!doneP);\r
                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P11;\r
                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P11;\r
                    #if (FXAA_QUALITY__PS > 12)\r
                    if(doneNP) {\r
                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));\r
                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));\r
                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;\r
                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;\r
                        doneN = abs(lumaEndN) >= gradientScaled;\r
                        doneP = abs(lumaEndP) >= gradientScaled;\r
                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY__P12;\r
                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY__P12;\r
                        doneNP = (!doneN) || (!doneP);\r
                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY__P12;\r
                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY__P12;\r
                    }\r
                    #endif\r
                }\r
                #endif\r
            }\r
            #endif\r
        }\r
        #endif\r
    }\r
    #endif\r
                        }\r
                        #endif\r
                    }\r
                    #endif\r
                }\r
                #endif\r
            }\r
            #endif\r
        }\r
        #endif\r
    }\r
    FxaaFloat dstN = posM.x - posN.x;\r
    FxaaFloat dstP = posP.x - posM.x;\r
    if(!horzSpan) dstN = posM.y - posN.y;\r
    if(!horzSpan) dstP = posP.y - posM.y;\r
    FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;\r
    FxaaFloat spanLength = (dstP + dstN);\r
    FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;\r
    FxaaFloat spanLengthRcp = 1.0/spanLength;\r
    FxaaBool directionN = dstN < dstP;\r
    FxaaFloat dst = min(dstN, dstP);\r
    FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;\r
    FxaaFloat subpixG = subpixF * subpixF;\r
    FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;\r
    FxaaFloat subpixH = subpixG * fxaaQualitySubpix;\r
    FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;\r
    FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);\r
    if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;\r
    if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;\r
    #if (FXAA_DISCARD == 1)\r
        return FxaaTexTop(tex, posM);\r
    #else\r
        return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);\r
    #endif\r
}\r
#endif\r
\r
uniform vec2 u_reciprocal_resolution;\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
void main()\r
{\r
    out_color = vec4(\r
        FxaaPixelShader(\r
            v_texcoord,\r
            u_texture,\r
            u_reciprocal_resolution,\r
            0.5,\r
            0.125,\r
            0.0\r
        ).rgb,\r
        1.0\r
    );\r
}\r
`,gf=`#version 300 es\r
\r
precision highp float;\r
\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
vec3 srgb_to_linear(vec3 x)\r
{\r
    return mix(\r
        x / 12.92,\r
        pow((x + 0.055) / 1.055, vec3(2.4)),\r
        greaterThan(x, vec3(0.04045))\r
    );\r
}\r
\r
float srgb_to_linear(float x)\r
{\r
    if (x <= 0.04045)\r
    {\r
        return x / 12.92;\r
    }\r
    else\r
    {\r
        return pow((x + 0.055) / 1.055, 2.4);\r
    }\r
}\r
\r
vec3 linear_to_srgb(vec3 x)\r
{\r
    return mix(\r
        12.92 * x,\r
        1.055 * pow(x, vec3(1.0 / 2.4)) - 0.055,\r
        greaterThan(x, vec3(0.0031308))\r
    );\r
}\r
\r
float linear_to_srgb(float x)\r
{\r
    if (x <= 0.0031308)\r
    {\r
        return 12.92 * x;\r
    }\r
    else\r
    {\r
        return 1.055 * pow(x, 1.0 / 2.4) - 0.055;\r
    }\r
}\r
\r
void main()\r
{\r
    vec3 color = linear_to_srgb(texture(u_texture, v_texcoord).rgb);\r
    color = clamp(color, vec3(0.0), vec3(1.0));\r
\r
    vec3 srgb = ceil(255.0 * color);\r
    float max_component = max(max(srgb.r, srgb.g), max(srgb.b, 1.0)) / 255.0;\r
\r
    out_color = vec4(color / max_component, 1.0);\r
}\r
`,Vf=`#version 300 es\r
\r
precision highp float;\r
\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
vec3 srgb_to_linear(vec3 x)\r
{\r
    return mix(\r
        x / 12.92,\r
        pow((x + 0.055) / 1.055, vec3(2.4)),\r
        greaterThan(x, vec3(0.04045))\r
    );\r
}\r
\r
float srgb_to_linear(float x)\r
{\r
    if (x <= 0.04045)\r
    {\r
        return x / 12.92;\r
    }\r
    else\r
    {\r
        return pow((x + 0.055) / 1.055, 2.4);\r
    }\r
}\r
\r
vec3 linear_to_srgb(vec3 x)\r
{\r
    return mix(\r
        12.92 * x,\r
        1.055 * pow(x, vec3(1.0 / 2.4)) - 0.055,\r
        greaterThan(x, vec3(0.0031308))\r
    );\r
}\r
\r
float linear_to_srgb(float x)\r
{\r
    if (x <= 0.0031308)\r
    {\r
        return 12.92 * x;\r
    }\r
    else\r
    {\r
        return 1.055 * pow(x, 1.0 / 2.4) - 0.055;\r
    }\r
}\r
\r
void main()\r
{\r
    vec3 color = linear_to_srgb(texture(u_texture, v_texcoord).rgb);\r
    color = clamp(color, vec3(0.0), vec3(1.0));\r
\r
    vec3 srgb = ceil(255.0 * color);\r
    float max_component = max(max(srgb.r, srgb.g), max(srgb.b, 1.0)) / 255.0;\r
\r
    out_color = vec4(vec3(max_component), 1.0);\r
}\r
`,Wf=`#version 300 es\r
\r
precision highp float;\r
\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
const mat3 display_p3_to_xyz = mat3(\r
    vec3(0.48657, 0.22897, 0.0),\r
    vec3(0.26567, 0.69174, 0.04511),\r
    vec3(0.19822, 0.07929, 1.04394)\r
);\r
\r
const mat3 xyz_to_srgb = inverse(mat3(\r
    vec3(0.41239, 0.21264, 0.01933),\r
    vec3(0.35758, 0.71517, 0.11919),\r
    vec3(0.18048, 0.07219, 0.95053)\r
));\r
\r
const mat3 display_p3_to_srgb = xyz_to_srgb * display_p3_to_xyz;\r
\r
vec3 srgb_to_linear(vec3 x)\r
{\r
    return mix(\r
        x / 12.92,\r
        pow((x + 0.055) / 1.055, vec3(2.4)),\r
        greaterThan(x, vec3(0.04045))\r
    );\r
}\r
\r
float srgb_to_linear(float x)\r
{\r
    if (x <= 0.04045)\r
    {\r
        return x / 12.92;\r
    }\r
    else\r
    {\r
        return pow((x + 0.055) / 1.055, 2.4);\r
    }\r
}\r
\r
vec3 linear_to_srgb(vec3 x)\r
{\r
    return mix(\r
        12.92 * x,\r
        1.055 * pow(x, vec3(1.0 / 2.4)) - 0.055,\r
        greaterThan(x, vec3(0.0031308))\r
    );\r
}\r
\r
float linear_to_srgb(float x)\r
{\r
    if (x <= 0.0031308)\r
    {\r
        return 12.92 * x;\r
    }\r
    else\r
    {\r
        return 1.055 * pow(x, 1.0 / 2.4) - 0.055;\r
    }\r
}\r
\r
void main()\r
{\r
    vec3 color = texture(u_texture, v_texcoord).rgb;\r
    color = linear_to_srgb(display_p3_to_srgb * color);\r
    color = clamp(color, vec3(0.0), vec3(1.0));\r
\r
    out_color = vec4(color, 1.0);\r
}\r
`;function $f(e){const n=xe(e,[Of,Gf]),r=xe(e,[Ie,Hf]),t=xe(e,[Ie,zf]),o=xe(e,[Ie,gf]),a=xe(e,[Ie,Vf]),i=xe(e,[Ie,Wf]);return{sceneProgramInfo:n,tonemapProgramInfo:r,antialiasProgramInfo:t,colorCanvasProgramInfo:o,brightnessCanvasProgramInfo:a,sdrCanvasProgramInfo:i}}function kf(e,n,r,t,o,a,i,f){Pe(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(o.program),de(r,o.attribSetters,i),Le(o.uniformSetters,{u_transform:k.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),r.readPixels(0,0,r.canvas.width,r.canvas.height,r.RGBA,r.UNSIGNED_BYTE,f);const c=new ImageData(f,r.canvas.width,r.canvas.height,{colorSpace:"display-p3"});n.putImageData(c,0,0),Pe(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(a.program),de(r,a.attribSetters,i),Le(a.uniformSetters,{u_transform:k.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements)}function Kf(e,n,r,t,o){Pe(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(t.program),de(n,t.attribSetters,o),Le(t.uniformSetters,{u_transform:k.identity(),u_texture:r.attachments[0]}),n.drawArrays(n.TRIANGLES,0,o.numElements)}function qf(e,n,r,t,o,a){if(Pe(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(t.program),de(n,t.attribSetters,a),Le(t.uniformSetters,{u_transform:k.identity(),u_brightness_mult:1/e.dynamicRange,u_reciprocal_white_point_squared:1/e.whitePoint**2,u_texture:r[0].attachments[0]}),n.drawArrays(n.TRIANGLES,0,a.numElements),!e.isAntialiasingEnabled){[r[0],r[1]]=[r[1],r[0]];return}Pe(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(o.program),de(n,o.attribSetters,a),Le(o.uniformSetters,{u_transform:k.identity(),u_reciprocal_resolution:[1/n.canvas.width,1/n.canvas.height],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,a.numElements)}function Zf(e,n){return k.inverse(k.lookAt(e,n,[0,1,0]))}function jf(e,n){return k.perspective(n*(Math.PI/180),e.canvas.width/e.canvas.height,1,100)}function Jf(e,n,r,t,o){Pe(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.enable(n.DEPTH_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.useProgram(t.program),de(n,t.attribSetters,o),Bn(t.uniformSetters,{u_transform:k.multiply(jf(n,80),Zf([1,0,-1],[0,0,-4]))}),n.drawElements(n.TRIANGLES,o.numElements,o.elementType??(()=>{throw new Error("Rendering error")})(),0)}function me(e){return document.querySelector(`#${e}`)??(()=>{throw new Error(`could not get #${e}`)})()}function ec(e){const n=e.getBoundingClientRect(),r=Math.round(n.right*devicePixelRatio)-Math.round(n.left*devicePixelRatio),t=Math.round(n.bottom*devicePixelRatio)-Math.round(n.top*devicePixelRatio);return e.width!==r||e.height!==t?(e.width=r,e.height=t,!0):!1}function nc(e,n,r,t){e.isHdrEnabled=me(Fe.hdrToggle).checked,e.isAntialiasingEnabled=me(Fe.antialiasToggle).checked;const o=me(Fe.hdrWarning);let a;window.matchMedia("(dynamic-range: high)").matches?a="":(a="Your device or browser does not support HDR.",e.isHdrEnabled=!1),o.textContent!==a&&(o.textContent=a),e.isHdrEnabled?(n.style.visibility!=="visible"||r.style.visibility!=="visible"||t.style["mix-blend-mode"]!=="multiply")&&(n.style.visibility="visible",r.style.visibility="visible",t.style["mix-blend-mode"]="multiply"):(n.style.visibility!=="hidden"||r.style.visibility!=="hidden"||t.style["mix-blend-mode"]!=="normal")&&(n.style.visibility="hidden",r.style.visibility="hidden",t.style["mix-blend-mode"]="normal"),e.dynamicRange=e.isHdrEnabled?5:1}function rc(e,n,r,t,o,a,i,f,c){nc(e,n,r.canvas,t.canvas),ec(r.canvas)&&(t.canvas.width=r.canvas.width,t.canvas.height=r.canvas.height,Cf(t,o),c.value=new Uint8ClampedArray(4*t.canvas.width*t.canvas.height)),Jf(e,t,o,a.sceneProgramInfo,i),qf(e,t,o,a.tonemapProgramInfo,a.antialiasProgramInfo,f),e.isHdrEnabled?kf(e,r,t,o[0],a.colorCanvasProgramInfo,a.brightnessCanvasProgramInfo,f,c.value):Kf(e,t,o[0],a.sdrCanvasProgramInfo,f)}function tc(){const e=me(Fe.superwhite),n={alpha:!1,colorSpace:"display-p3",desynchronized:!1,willReadFrequently:!1},t=me(Fe.colorCanvas).getContext("2d",n)??(()=>{throw new Error("could not get CanvasRenderingContext2D")})(),o={alpha:!1,depth:!1,stencil:!1,desynchronized:!1,antialias:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"default",preserveDrawingBuffer:!1},i=me(Fe.brightnessCanvas).getContext("webgl2",o)??(()=>{throw new Error("cannot get WebGL2RenderingContext")})();if(!i.getExtension("EXT_color_buffer_float"))throw new Error("could not get EXT_color_buffer_float");const f=$f(i),c={a_position:{numComponents:4,data:[-1,-1,-3,1,1,-1,-3,1,1,1,-4,1,-1,1,-4,1]},a_color:{numComponents:4,data:[0,0,0,1,0,0,20,1,0,20,0,1,20,0,0,1]},indices:{data:[0,1,3,2,3,1],type:i.UNSIGNED_SHORT}},u=Vn(i,c),s=Vn(i,{a_position:{numComponents:4,data:[-1,-1,0,1,3,-1,0,1,-1,3,0,1]},a_texcoord:{numComponents:2,data:[0,0,2,0,0,2]}}),l=wf(i),x={value:new Uint8ClampedArray(4*i.canvas.width*i.canvas.height)};setInterval(rc,100,{isHdrEnabled:!0,dynamicRange:5,whitePoint:20,isAntialiasingEnabled:!1},e,t,i,l,f,u,s,x)}window.onload=tc;
