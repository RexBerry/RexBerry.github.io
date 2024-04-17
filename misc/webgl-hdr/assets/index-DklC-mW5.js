var lt=Object.defineProperty;var _t=(e,n,r)=>n in e?lt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Ne=(e,n,r)=>(_t(e,typeof n!="symbol"?n+"":n,r),r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let Ke=Float32Array;function ne(e,n,r){const t=new Ke(3);return e&&(t[0]=e),n&&(t[1]=n),r&&(t[2]=r),t}function At(e,n,r){return r=r||new Ke(3),r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function Vn(e,n,r){r=r||new Ke(3);const t=e[2]*n[0]-e[0]*n[2],o=e[0]*n[1]-e[1]*n[0];return r[0]=e[1]*n[2]-e[2]*n[1],r[1]=t,r[2]=o,r}function un(e,n){n=n||new Ke(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=Math.sqrt(r);return t>1e-5?(n[0]=e[0]/t,n[1]=e[1]/t,n[2]=e[2]/t):(n[0]=0,n[1]=0,n[2]=0),n}let p=Float32Array;function xt(e){const n=p;return p=e,n}function Ft(e,n){return n=n||new p(16),n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function mt(){return new p(16).fill(0)}function ar(e,n){return n=n||new p(16),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function ir(e){return e=e||new p(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Tt(e,n){if(n=n||new p(16),n===e){let d;return d=e[1],e[1]=e[4],e[4]=d,d=e[2],e[2]=e[8],e[8]=d,d=e[3],e[3]=e[12],e[12]=d,d=e[6],e[6]=e[9],e[9]=d,d=e[7],e[7]=e[13],e[13]=d,d=e[11],e[11]=e[14],e[14]=d,n}const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],f=e[1*4+1],c=e[1*4+2],u=e[1*4+3],_=e[2*4+0],s=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],F=e[3*4+1],m=e[3*4+2],T=e[3*4+3];return n[0]=r,n[1]=i,n[2]=_,n[3]=A,n[4]=t,n[5]=f,n[6]=s,n[7]=F,n[8]=o,n[9]=c,n[10]=l,n[11]=m,n[12]=a,n[13]=u,n[14]=x,n[15]=T,n}function fr(e,n){n=n||new p(16);const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],f=e[1*4+1],c=e[1*4+2],u=e[1*4+3],_=e[2*4+0],s=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],F=e[3*4+1],m=e[3*4+2],T=e[3*4+3],d=l*T,P=m*x,y=c*T,N=m*u,L=c*x,S=l*u,M=o*T,D=m*a,Y=o*x,B=l*a,Q=o*u,w=c*a,C=_*F,O=A*s,G=i*F,H=A*f,z=i*s,ve=_*f,Me=r*F,De=A*t,Ye=r*s,Be=_*t,Qe=r*f,we=i*t,Gn=d*f+N*s+L*F-(P*f+y*s+S*F),Hn=P*t+M*s+B*F-(d*t+D*s+Y*F),zn=y*t+D*f+Q*F-(N*t+M*f+w*F),gn=S*t+Y*f+w*s-(L*t+B*f+Q*s),U=1/(r*Gn+i*Hn+_*zn+A*gn);return n[0]=U*Gn,n[1]=U*Hn,n[2]=U*zn,n[3]=U*gn,n[4]=U*(P*i+y*_+S*A-(d*i+N*_+L*A)),n[5]=U*(d*r+D*_+Y*A-(P*r+M*_+B*A)),n[6]=U*(N*r+M*i+w*A-(y*r+D*i+Q*A)),n[7]=U*(L*r+B*i+Q*_-(S*r+Y*i+w*_)),n[8]=U*(C*u+H*x+z*T-(O*u+G*x+ve*T)),n[9]=U*(O*a+Me*x+Be*T-(C*a+De*x+Ye*T)),n[10]=U*(G*a+De*u+Qe*T-(H*a+Me*u+we*T)),n[11]=U*(ve*a+Ye*u+we*x-(z*a+Be*u+Qe*x)),n[12]=U*(G*l+ve*m+O*c-(z*m+C*c+H*l)),n[13]=U*(Ye*m+C*o+De*l-(Me*l+Be*m+O*o)),n[14]=U*(Me*c+we*m+H*o-(Qe*m+G*o+De*c)),n[15]=U*(Qe*l+z*o+Be*c-(Ye*c+we*l+ve*o)),n}function dt(e,n,r){r=r||new p(16);const t=e[0],o=e[1],a=e[2],i=e[3],f=e[4],c=e[5],u=e[6],_=e[7],s=e[8],l=e[9],x=e[10],A=e[11],F=e[12],m=e[13],T=e[14],d=e[15],P=n[0],y=n[1],N=n[2],L=n[3],S=n[4],M=n[5],D=n[6],Y=n[7],B=n[8],Q=n[9],w=n[10],C=n[11],O=n[12],G=n[13],H=n[14],z=n[15];return r[0]=t*P+f*y+s*N+F*L,r[1]=o*P+c*y+l*N+m*L,r[2]=a*P+u*y+x*N+T*L,r[3]=i*P+_*y+A*N+d*L,r[4]=t*S+f*M+s*D+F*Y,r[5]=o*S+c*M+l*D+m*Y,r[6]=a*S+u*M+x*D+T*Y,r[7]=i*S+_*M+A*D+d*Y,r[8]=t*B+f*Q+s*w+F*C,r[9]=o*B+c*Q+l*w+m*C,r[10]=a*B+u*Q+x*w+T*C,r[11]=i*B+_*Q+A*w+d*C,r[12]=t*O+f*G+s*H+F*z,r[13]=o*O+c*G+l*H+m*z,r[14]=a*O+u*G+x*H+T*z,r[15]=i*O+_*G+A*H+d*z,r}function Et(e,n,r){return r=r||ir(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function Pt(e,n){return n=n||ne(),n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function yt(e,n,r){r=r||ne();const t=n*4;return r[0]=e[t+0],r[1]=e[t+1],r[2]=e[t+2],r}function pt(e,n,r,t){t!==e&&(t=ar(e,t));const o=r*4;return t[o+0]=n[0],t[o+1]=n[1],t[o+2]=n[2],t}function Nt(e,n,r,t,o){o=o||new p(16);const a=Math.tan(Math.PI*.5-.5*e),i=1/(r-t);return o[0]=a/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+t)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*t*i*2,o[15]=0,o}function It(e,n,r,t,o,a,i){return i=i||new p(16),i[0]=2/(n-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-r),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(n+e)/(e-n),i[13]=(t+r)/(r-t),i[14]=(a+o)/(o-a),i[15]=1,i}function bt(e,n,r,t,o,a,i){i=i||new p(16);const f=n-e,c=t-r,u=o-a;return i[0]=2*o/f,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/c,i[6]=0,i[7]=0,i[8]=(e+n)/f,i[9]=(t+r)/c,i[10]=a/u,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*a/u,i[15]=0,i}let j,fe,$;function St(e,n,r,t){return t=t||new p(16),j=j||ne(),fe=fe||ne(),$=$||ne(),un(At(e,n,$),$),un(Vn(r,$,j),j),un(Vn($,j,fe),fe),t[0]=j[0],t[1]=j[1],t[2]=j[2],t[3]=0,t[4]=fe[0],t[5]=fe[1],t[6]=fe[2],t[7]=0,t[8]=$[0],t[9]=$[1],t[10]=$[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Lt(e,n){return n=n||new p(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Rt(e,n,r){r=r||new p(16);const t=n[0],o=n[1],a=n[2],i=e[0],f=e[1],c=e[2],u=e[3],_=e[1*4+0],s=e[1*4+1],l=e[1*4+2],x=e[1*4+3],A=e[2*4+0],F=e[2*4+1],m=e[2*4+2],T=e[2*4+3],d=e[3*4+0],P=e[3*4+1],y=e[3*4+2],N=e[3*4+3];return e!==r&&(r[0]=i,r[1]=f,r[2]=c,r[3]=u,r[4]=_,r[5]=s,r[6]=l,r[7]=x,r[8]=A,r[9]=F,r[10]=m,r[11]=T),r[12]=i*t+_*o+A*a+d,r[13]=f*t+s*o+F*a+P,r[14]=c*t+l*o+m*a+y,r[15]=u*t+x*o+T*a+N,r}function Ut(e,n){n=n||new p(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=t,n[7]=0,n[8]=0,n[9]=-t,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function ht(e,n,r){r=r||new p(16);const t=e[4],o=e[5],a=e[6],i=e[7],f=e[8],c=e[9],u=e[10],_=e[11],s=Math.cos(n),l=Math.sin(n);return r[4]=s*t+l*f,r[5]=s*o+l*c,r[6]=s*a+l*u,r[7]=s*i+l*_,r[8]=s*f-l*t,r[9]=s*c-l*o,r[10]=s*u-l*a,r[11]=s*_-l*i,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Xt(e,n){n=n||new p(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=0,n[2]=-t,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=t,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function vt(e,n,r){r=r||new p(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],f=e[2*4+0],c=e[2*4+1],u=e[2*4+2],_=e[2*4+3],s=Math.cos(n),l=Math.sin(n);return r[0]=s*t-l*f,r[1]=s*o-l*c,r[2]=s*a-l*u,r[3]=s*i-l*_,r[8]=s*f+l*t,r[9]=s*c+l*o,r[10]=s*u+l*a,r[11]=s*_+l*i,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Mt(e,n){n=n||new p(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=t,n[2]=0,n[3]=0,n[4]=-t,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Dt(e,n,r){r=r||new p(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],f=e[1*4+0],c=e[1*4+1],u=e[1*4+2],_=e[1*4+3],s=Math.cos(n),l=Math.sin(n);return r[0]=s*t+l*f,r[1]=s*o+l*c,r[2]=s*a+l*u,r[3]=s*i+l*_,r[4]=s*f-l*t,r[5]=s*c-l*o,r[6]=s*u-l*a,r[7]=s*_-l*i,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Yt(e,n,r){r=r||new p(16);let t=e[0],o=e[1],a=e[2];const i=Math.sqrt(t*t+o*o+a*a);t/=i,o/=i,a/=i;const f=t*t,c=o*o,u=a*a,_=Math.cos(n),s=Math.sin(n),l=1-_;return r[0]=f+(1-f)*_,r[1]=t*o*l+a*s,r[2]=t*a*l-o*s,r[3]=0,r[4]=t*o*l-a*s,r[5]=c+(1-c)*_,r[6]=o*a*l+t*s,r[7]=0,r[8]=t*a*l+o*s,r[9]=o*a*l-t*s,r[10]=u+(1-u)*_,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Bt(e,n,r,t){t=t||new p(16);let o=n[0],a=n[1],i=n[2];const f=Math.sqrt(o*o+a*a+i*i);o/=f,a/=f,i/=f;const c=o*o,u=a*a,_=i*i,s=Math.cos(r),l=Math.sin(r),x=1-s,A=c+(1-c)*s,F=o*a*x+i*l,m=o*i*x-a*l,T=o*a*x-i*l,d=u+(1-u)*s,P=a*i*x+o*l,y=o*i*x+a*l,N=a*i*x-o*l,L=_+(1-_)*s,S=e[0],M=e[1],D=e[2],Y=e[3],B=e[4],Q=e[5],w=e[6],C=e[7],O=e[8],G=e[9],H=e[10],z=e[11];return t[0]=A*S+F*B+m*O,t[1]=A*M+F*Q+m*G,t[2]=A*D+F*w+m*H,t[3]=A*Y+F*C+m*z,t[4]=T*S+d*B+P*O,t[5]=T*M+d*Q+P*G,t[6]=T*D+d*w+P*H,t[7]=T*Y+d*C+P*z,t[8]=y*S+N*B+L*O,t[9]=y*M+N*Q+L*G,t[10]=y*D+N*w+L*H,t[11]=y*Y+N*C+L*z,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function Qt(e,n){return n=n||new p(16),n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function wt(e,n,r){r=r||new p(16);const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0],r[1]=t*e[0*4+1],r[2]=t*e[0*4+2],r[3]=t*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=a*e[2*4+0],r[9]=a*e[2*4+1],r[10]=a*e[2*4+2],r[11]=a*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Ct(e,n,r){r=r||ne();const t=n[0],o=n[1],a=n[2],i=t*e[0*4+3]+o*e[1*4+3]+a*e[2*4+3]+e[3*4+3];return r[0]=(t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0]+e[3*4+0])/i,r[1]=(t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1]+e[3*4+1])/i,r[2]=(t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2]+e[3*4+2])/i,r}function Ot(e,n,r){r=r||ne();const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0],r[1]=t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1],r[2]=t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2],r}function Gt(e,n,r){r=r||ne();const t=fr(e),o=n[0],a=n[1],i=n[2];return r[0]=o*t[0*4+0]+a*t[0*4+1]+i*t[0*4+2],r[1]=o*t[1*4+0]+a*t[1*4+1]+i*t[1*4+2],r[2]=o*t[2*4+0]+a*t[2*4+1]+i*t[2*4+2],r}var K=Object.freeze({__proto__:null,axisRotate:Bt,axisRotation:Yt,copy:ar,create:mt,frustum:bt,getAxis:yt,getTranslation:Pt,identity:ir,inverse:fr,lookAt:St,multiply:dt,negate:Ft,ortho:It,perspective:Nt,rotateX:ht,rotateY:vt,rotateZ:Dt,rotationX:Ut,rotationY:Xt,rotationZ:Mt,scale:wt,scaling:Qt,setAxis:pt,setDefaultType:xt,setTranslation:Et,transformDirection:Ot,transformNormal:Gt,transformPoint:Ct,translate:Rt,translation:Lt,transpose:Tt});const yn=5120,Le=5121,pn=5122,Nn=5123,In=5124,bn=5125,Sn=5126,Ht=32819,zt=32820,gt=33635,Vt=5131,Wt=33640,$t=35899,kt=35902,Kt=36269,qt=34042,cr={};{const e=cr;e[yn]=Int8Array,e[Le]=Uint8Array,e[pn]=Int16Array,e[Nn]=Uint16Array,e[In]=Int32Array,e[bn]=Uint32Array,e[Sn]=Float32Array,e[Ht]=Uint16Array,e[zt]=Uint16Array,e[gt]=Uint16Array,e[Vt]=Uint16Array,e[Wt]=Uint32Array,e[$t]=Uint32Array,e[kt]=Uint32Array,e[Kt]=Uint32Array,e[qt]=Uint32Array}function Ln(e){if(e instanceof Int8Array)return yn;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Le;if(e instanceof Int16Array)return pn;if(e instanceof Uint16Array)return Nn;if(e instanceof Int32Array)return In;if(e instanceof Uint32Array)return bn;if(e instanceof Float32Array)return Sn;throw new Error("unsupported typed array type")}function ur(e){if(e===Int8Array)return yn;if(e===Uint8Array||e===Uint8ClampedArray)return Le;if(e===Int16Array)return pn;if(e===Uint16Array)return Nn;if(e===Int32Array)return In;if(e===Uint32Array)return bn;if(e===Float32Array)return Sn;throw new Error("unsupported typed array type")}function sr(e){const n=cr[e];if(!n)throw new Error("unknown gl type");return n}const ge=typeof SharedArrayBuffer<"u"?function(n){return n&&n.buffer&&(n.buffer instanceof ArrayBuffer||n.buffer instanceof SharedArrayBuffer)}:function(n){return n&&n.buffer&&n.buffer instanceof ArrayBuffer};function lr(...e){console.error(...e)}const Wn=new Map;function qe(e,n){if(!e||typeof e!="object")return!1;let r=Wn.get(n);r||(r=new WeakMap,Wn.set(n,r));let t=r.get(e);if(t===void 0){const o=Object.prototype.toString.call(e);t=o.substring(8,o.length-1)===n,r.set(e,t)}return t}function Zt(e,n){return typeof WebGLBuffer<"u"&&qe(n,"WebGLBuffer")}function _r(e,n){return typeof WebGLRenderbuffer<"u"&&qe(n,"WebGLRenderbuffer")}function Ze(e,n){return typeof WebGLTexture<"u"&&qe(n,"WebGLTexture")}function jt(e,n){return typeof WebGLSampler<"u"&&qe(n,"WebGLSampler")}const Ar=35044,le=34962,Jt=34963,eo=34660,no=5120,ro=5121,to=5122,oo=5123,ao=5124,io=5125,xr=5126,Fr={attribPrefix:""};function fo(e,n,r,t,o){e.bindBuffer(n,r),e.bufferData(n,t,o||Ar)}function mr(e,n,r,t){if(Zt(e,n))return n;r=r||le;const o=e.createBuffer();return fo(e,r,o,n,t),o}function Tr(e){return e==="indices"}function co(e){return e===Int8Array||e===Uint8Array}function uo(e){return e.length?e:e.data}const so=/coord|texture/i,lo=/color|colour/i;function _o(e,n){let r;if(so.test(e)?r=2:lo.test(e)?r=4:r=3,n%r>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${r} but ${n} values is not evenly divisible by ${r}. You should specify it.`);return r}function Ao(e,n,r){return e.numComponents||e.size||_o(n,r||uo(e).length)}function dr(e,n){if(ge(e))return e;if(ge(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type?Rn(e.type):void 0;return r||(Tr(n)?r=Uint16Array:r=Float32Array),new r(e.data)}function xo(e){return typeof e=="number"?e:e?ur(e):xr}function Rn(e){return typeof e=="number"?sr(e):e||Float32Array}function Fo(e,n){return{buffer:n.buffer,numValues:2*3*4,type:xo(n.type),arrayType:Rn(n.type)}}function mo(e,n){const r=n.data||n,t=Rn(n.type),o=r*t.BYTES_PER_ELEMENT,a=e.createBuffer();return e.bindBuffer(le,a),e.bufferData(le,o,n.drawType||Ar),{buffer:a,numValues:r,type:ur(t),arrayType:t}}function To(e,n,r){const t=dr(n,r);return{arrayType:t.constructor,buffer:mr(e,t,void 0,n.drawType),type:Ln(t),numValues:0}}function Eo(e,n){const r={};return Object.keys(n).forEach(function(t){if(!Tr(t)){const o=n[t],a=o.attrib||o.name||o.attribName||Fr.attribPrefix+t;if(o.value){if(!Array.isArray(o.value)&&!ge(o.value))throw new Error("array.value is not array or typedarray");r[a]={value:o.value}}else{let i;o.buffer&&o.buffer instanceof WebGLBuffer?i=Fo:typeof o=="number"||typeof o.data=="number"?i=mo:i=To;const{buffer:f,type:c,numValues:u,arrayType:_}=i(e,o,t),s=o.normalize!==void 0?o.normalize:co(_),l=Ao(o,t,u);r[a]={buffer:f,numComponents:l,type:c,normalize:s,stride:o.stride||0,offset:o.offset||0,divisor:o.divisor===void 0?void 0:o.divisor,drawType:o.drawType}}}}),e.bindBuffer(le,null),r}function Po(e,n){return n===no||n===ro?1:n===to||n===oo?2:n===ao||n===io||n===xr?4:0}const sn=["position","positions","a_position"];function yo(e,n){let r,t;for(t=0;t<sn.length&&(r=sn[t],!(r in n||(r=Fr.attribPrefix+r,r in n)));++t);t===sn.length&&(r=Object.keys(n)[0]);const o=n[r];if(!o.buffer)return 1;e.bindBuffer(le,o.buffer);const a=e.getBufferParameter(le,eo);e.bindBuffer(le,null);const i=Po(e,o.type),f=a/i,c=o.numComponents||o.size,u=f/c;if(u%1!==0)throw new Error(`numComponents ${c} not correct for length ${length}`);return u}function $n(e,n,r){const t=Eo(e,n),o=Object.assign({},r||{});o.attribs=Object.assign({},r?r.attribs:{},t);const a=n.indices;if(a){const i=dr(a,"indices");o.indices=mr(e,i,Jt),o.numElements=i.length,o.elementType=Ln(i)}else o.numElements||(o.numElements=yo(e,o.attribs));return o}function he(e){return!!e.texStorage2D}const Er=function(){const e={},n={};function r(t){const o=t.constructor.name;if(!e[o]){for(const a in t)if(typeof t[a]=="number"){const i=n[t[a]];n[t[a]]=i?`${i} | ${a}`:a}e[o]=!0}}return function(o,a){return r(o),n[a]||(typeof a=="number"?`0x${a.toString(16)}`:a)}}(),oe={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},de=ge,Pr=function(){let e;return function(){return e=e||(typeof document<"u"&&document.createElement?document.createElement("canvas").getContext("2d"):null),e}}(),kn=6406,W=6407,b=6408,Kn=6409,qn=6410,Ie=6402,Zn=34041,Ve=33071,po=9728,No=9729,Z=3553,q=34067,re=32879,te=35866,je=34069,Io=34070,bo=34071,So=34072,Lo=34073,Ro=34074,An=10241,xn=10240,We=10242,$e=10243,jn=32882,Uo=33082,ho=33083,Xo=33084,vo=33085,Mo=34892,Do=34893,Un=3317,yr=3314,pr=32878,Nr=3316,Ir=3315,br=32877,Yo=37443,Bo=37441,Qo=37440,wo=33321,Co=36756,Oo=33325,Go=33326,Ho=33330,zo=33329,go=33338,Vo=33337,Wo=33340,$o=33339,ko=33323,Ko=36757,qo=33327,Zo=33328,jo=33336,Jo=33335,ea=33332,na=33331,ra=33334,ta=33333,oa=32849,aa=35905,ia=36194,fa=36758,ca=35898,ua=35901,sa=34843,la=34837,_a=36221,Aa=36239,xa=36215,Fa=36233,ma=36209,Ta=36227,da=32856,Ea=35907,Pa=36759,ya=32855,pa=32854,Na=32857,Ia=34842,ba=34836,Sa=36220,La=36238,Ra=36975,Ua=36214,ha=36232,Xa=36226,va=36208,Ma=33189,Da=33190,Ya=36012,Ba=36013,Qa=35056,J=5120,I=5121,Ce=5122,Ae=5123,Oe=5124,ce=5125,h=5126,Jn=32819,er=32820,nr=33635,g=5131,be=36193,ln=33640,wa=35899,Ca=35902,Oa=36269,Ga=34042,Ge=33319,xe=33320,He=6403,Fe=36244,me=36248,ue=36249;let _n;function Je(e){if(!_n){const n={};n[kn]={textureFormat:kn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,g,be,h]},n[Kn]={textureFormat:Kn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,g,be,h]},n[qn]={textureFormat:qn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[I,g,be,h]},n[W]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[I,g,be,h,nr]},n[b]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[I,g,be,h,Jn,er]},n[Ie]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[ce,Ae]},n[wo]={textureFormat:He,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[I]},n[Co]={textureFormat:He,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[J]},n[Oo]={textureFormat:He,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[h,g]},n[Go]={textureFormat:He,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[h]},n[Ho]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[I]},n[zo]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[J]},n[ea]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ae]},n[na]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ce]},n[ra]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ce]},n[ta]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Oe]},n[ko]={textureFormat:Ge,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[I]},n[Ko]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[J]},n[qo]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[h,g]},n[Zo]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[h]},n[jo]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[I]},n[Jo]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[J]},n[go]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ae]},n[Vo]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ce]},n[Wo]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[ce]},n[$o]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Oe]},n[oa]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[aa]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[ia]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[I,nr]},n[fa]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[J]},n[ca]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[h,g,wa]},n[ua]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[h,g,Ca]},n[sa]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[h,g]},n[la]={textureFormat:W,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[h]},n[_a]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[I]},n[Aa]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[J]},n[xa]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ae]},n[Fa]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ce]},n[ma]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[ce]},n[Ta]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[Oe]},n[da]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[Ea]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[Pa]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[J]},n[ya]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[I,er,ln]},n[pa]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[I,Jn]},n[Na]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[ln]},n[Ia]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[h,g]},n[ba]={textureFormat:b,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[h]},n[Sa]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},n[La]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[J]},n[Ra]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ln]},n[Ua]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ae]},n[ha]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ce]},n[Xa]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[Oe]},n[va]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[ce]},n[Ma]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[Ae,ce]},n[Da]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ce]},n[Ya]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[h]},n[Qa]={textureFormat:Zn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ga]},n[Ba]={textureFormat:Zn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Oa]},Object.keys(n).forEach(function(r){const t=n[r];t.bytesPerElementMap={},t.bytesPerElement.forEach(function(o,a){const i=t.type[a];t.bytesPerElementMap[i]=o})}),_n=n}return _n[e]}function Ha(e,n){const r=Je(e);if(!r)throw"unknown internal format";const t=r.bytesPerElementMap[n];if(t===void 0)throw"unknown internal format";return t}function pe(e){const n=Je(e);if(!n)throw"unknown internal format";return{format:n.textureFormat,type:n.type[0]}}function rr(e){return(e&e-1)===0}function za(e,n,r,t){if(!he(e))return rr(n)&&rr(r);const o=Je(t);if(!o)throw"unknown internal format";return o.colorRenderable&&o.textureFilterable}function ga(e){const n=Je(e);if(!n)throw"unknown internal format";return n.textureFilterable}function Sr(e,n,r){return de(n)?Ln(n):r||I}function ze(e,n,r,t,o){if(o%1!==0)throw"can't guess dimensions";if(!r&&!t){const a=Math.sqrt(o/(n===q?6:1));a%1===0?(r=a,t=a):(r=o,t=1)}else if(t){if(!r&&(r=o/t,r%1))throw"can't guess dimensions"}else if(t=o/r,t%1)throw"can't guess dimensions";return{width:r,height:t}}function Ee(e,n){n.colorspaceConversion!==void 0&&e.pixelStorei(Yo,n.colorspaceConversion),n.premultiplyAlpha!==void 0&&e.pixelStorei(Bo,n.premultiplyAlpha),n.flipY!==void 0&&e.pixelStorei(Qo,n.flipY)}function Lr(e){e.pixelStorei(Un,4),he(e)&&(e.pixelStorei(yr,0),e.pixelStorei(pr,0),e.pixelStorei(Nr,0),e.pixelStorei(Ir,0),e.pixelStorei(br,0))}function Va(e,n,r,t){t.minMag&&(r.call(e,n,An,t.minMag),r.call(e,n,xn,t.minMag)),t.min&&r.call(e,n,An,t.min),t.mag&&r.call(e,n,xn,t.mag),t.wrap&&(r.call(e,n,We,t.wrap),r.call(e,n,$e,t.wrap),(n===re||jt(e,n))&&r.call(e,n,jn,t.wrap)),t.wrapR&&r.call(e,n,jn,t.wrapR),t.wrapS&&r.call(e,n,We,t.wrapS),t.wrapT&&r.call(e,n,$e,t.wrapT),t.minLod!==void 0&&r.call(e,n,Uo,t.minLod),t.maxLod!==void 0&&r.call(e,n,ho,t.maxLod),t.baseLevel!==void 0&&r.call(e,n,Xo,t.baseLevel),t.maxLevel!==void 0&&r.call(e,n,vo,t.maxLevel),t.compareFunc!==void 0&&r.call(e,n,Do,t.compareFunc),t.compareMode!==void 0&&r.call(e,n,Mo,t.compareMode)}function Rr(e,n,r){const t=r.target||Z;e.bindTexture(t,n),Va(e,t,e.texParameteri,r)}function Wa(e){return e=e||oe.textureColor,de(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Fn(e,n,r,t,o,a){r=r||oe.textureOptions,a=a||b;const i=r.target||Z;if(t=t||r.width,o=o||r.height,e.bindTexture(i,n),za(e,t,o,a))e.generateMipmap(i);else{const f=ga(a)?No:po;e.texParameteri(i,An,f),e.texParameteri(i,xn,f),e.texParameteri(i,We,Ve),e.texParameteri(i,$e,Ve)}}function Re(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function mn(e,n){return n=n||{},n.cubeFaceOrder||[je,Io,bo,So,Lo,Ro]}function Tn(e,n){const t=mn(e,n).map(function(o,a){return{face:o,ndx:a}});return t.sort(function(o,a){return o.face-a.face}),t}function Ur(e,n,r,t){t=t||oe.textureOptions;const o=t.target||Z,a=t.level||0;let i=r.width,f=r.height;const c=t.internalFormat||t.format||b,u=pe(c),_=t.format||u.format,s=t.type||u.type;if(Ee(e,t),e.bindTexture(o,n),o===q){const l=r.width,x=r.height;let A,F;if(l/6===x)A=x,F=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===l)A=l,F=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3===x/2)A=l/3,F=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2===x/3)A=l/2,F=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(r.src?r.src:r.nodeName);const m=Pr();m?(m.canvas.width=A,m.canvas.height=A,i=A,f=A,Tn(e,t).forEach(function(T){const d=F[T.ndx*2+0]*A,P=F[T.ndx*2+1]*A;m.drawImage(r,d,P,A,A,0,0,A,A),e.texImage2D(T.face,a,c,_,s,m.canvas)}),m.canvas.width=1,m.canvas.height=1):typeof createImageBitmap<"u"&&(i=A,f=A,Tn(e,t).forEach(function(T){const d=F[T.ndx*2+0]*A,P=F[T.ndx*2+1]*A;e.texImage2D(T.face,a,c,A,A,0,_,s,null),createImageBitmap(r,d,P,A,A,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(y){Ee(e,t),e.bindTexture(o,n),e.texImage2D(T.face,a,c,_,s,y),Re(t)&&Fn(e,n,t,i,f,c)})}))}else if(o===re||o===te){const l=Math.min(r.width,r.height),x=Math.max(r.width,r.height),A=x/l;if(A%1!==0)throw"can not compute 3D dimensions of element";const F=r.width===x?1:0,m=r.height===x?1:0;e.pixelStorei(Un,1),e.pixelStorei(yr,r.width),e.pixelStorei(pr,0),e.pixelStorei(br,0),e.texImage3D(o,a,c,l,l,l,0,_,s,null);for(let T=0;T<A;++T){const d=T*l*F,P=T*l*m;e.pixelStorei(Nr,d),e.pixelStorei(Ir,P),e.texSubImage3D(o,a,0,0,T,l,l,1,_,s,r)}Lr(e)}else e.texImage2D(o,a,c,_,s,r);Re(t)&&Fn(e,n,t,i,f,c),Rr(e,n,t)}function Xe(){}function $a(e){if(typeof document<"u"){const n=document.createElement("a");return n.href=e,n.hostname===location.hostname&&n.port===location.port&&n.protocol===location.protocol}else{const n=new URL(location.href).origin;return new URL(e,location.href).origin===n}}function ka(e,n){return n===void 0&&!$a(e)?"anonymous":n}function Ka(e,n,r){r=r||Xe;let t;if(n=n!==void 0?n:oe.crossOrigin,n=ka(e,n),typeof Image<"u"){t=new Image,n!==void 0&&(t.crossOrigin=n);const o=function(){t.removeEventListener("error",a),t.removeEventListener("load",i),t=null},a=function(){const c="couldn't load image: "+e;lr(c),r(c,t),o()},i=function(){r(null,t),o()};return t.addEventListener("error",a),t.addEventListener("load",i),t.src=e,t}else if(typeof ImageBitmap<"u"){let o,a;const i=function(){r(o,a)},f={};n&&(f.mode="cors"),fetch(e,f).then(function(c){if(!c.ok)throw c;return c.blob()}).then(function(c){return createImageBitmap(c,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(c){a=c,setTimeout(i)}).catch(function(c){o=c,setTimeout(i)}),t=null}return t}function hr(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof ImageData<"u"&&e instanceof ImageData||typeof HTMLElement<"u"&&e instanceof HTMLElement}function hn(e,n,r){return hr(e)?(setTimeout(function(){r(null,e)}),e):Ka(e,n,r)}function Xn(e,n,r){r=r||oe.textureOptions;const t=r.target||Z;if(e.bindTexture(t,n),r.color===!1)return;const o=Wa(r.color);if(t===q)for(let a=0;a<6;++a)e.texImage2D(je+a,0,b,1,1,0,b,I,o);else t===re||t===te?e.texImage3D(t,0,b,1,1,1,0,b,I,o):e.texImage2D(t,0,b,1,1,0,b,I,o)}function qa(e,n,r,t){return t=t||Xe,r=r||oe.textureOptions,Xn(e,n,r),r=Object.assign({},r),hn(r.src,r.crossOrigin,function(a,i){a?t(a,n,i):(Ur(e,n,i,r),t(null,n,i))})}function Za(e,n,r,t){t=t||Xe;const o=r.src;if(o.length!==6)throw"there must be 6 urls for a cubemap";const a=r.level||0,i=r.internalFormat||r.format||b,f=pe(i),c=r.format||f.format,u=r.type||I,_=r.target||Z;if(_!==q)throw"target must be TEXTURE_CUBE_MAP";Xn(e,n,r),r=Object.assign({},r);let s=6;const l=[],x=mn(e,r);let A;function F(m){return function(T,d){--s,T?l.push(T):d.width!==d.height?l.push("cubemap face img is not a square: "+d.src):(Ee(e,r),e.bindTexture(_,n),s===5?mn().forEach(function(P){e.texImage2D(P,a,i,c,u,d)}):e.texImage2D(m,a,i,c,u,d),Re(r)&&e.generateMipmap(_)),s===0&&t(l.length?l:void 0,n,A)}}A=o.map(function(m,T){return hn(m,r.crossOrigin,F(x[T]))})}function ja(e,n,r,t){t=t||Xe;const o=r.src,a=r.internalFormat||r.format||b,i=pe(a),f=r.format||i.format,c=r.type||I,u=r.target||te;if(u!==re&&u!==te)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";Xn(e,n,r),r=Object.assign({},r);let _=o.length;const s=[];let l;const x=r.level||0;let A=r.width,F=r.height;const m=o.length;let T=!0;function d(P){return function(y,N){if(--_,y)s.push(y);else{if(Ee(e,r),e.bindTexture(u,n),T){T=!1,A=r.width||N.width,F=r.height||N.height,e.texImage3D(u,x,a,A,F,m,0,f,c,null);for(let L=0;L<m;++L)e.texSubImage3D(u,x,0,0,L,A,F,1,f,c,N)}else{let L=N,S;(N.width!==A||N.height!==F)&&(S=Pr(),L=S.canvas,S.canvas.width=A,S.canvas.height=F,S.drawImage(N,0,0,A,F)),e.texSubImage3D(u,x,0,0,P,A,F,1,f,c,L),S&&L===S.canvas&&(S.canvas.width=0,S.canvas.height=0)}Re(r)&&e.generateMipmap(u)}_===0&&t(s.length?s:void 0,n,l)}}l=o.map(function(P,y){return hn(P,r.crossOrigin,d(y))})}function Ja(e,n,r,t){t=t||oe.textureOptions;const o=t.target||Z;e.bindTexture(o,n);let a=t.width,i=t.height,f=t.depth;const c=t.level||0,u=t.internalFormat||t.format||b,_=pe(u),s=t.format||_.format,l=t.type||Sr(e,r,_.type);if(de(r))r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));else{const m=sr(l);r=new m(r)}const x=Ha(u,l),A=r.byteLength/x;if(A%1)throw"length wrong size for format: "+Er(e,s);let F;if(o===re||o===te)if(!a&&!i&&!f){const m=Math.cbrt(A);if(m%1!==0)throw"can't guess cube size of array of numElements: "+A;a=m,i=m,f=m}else a&&(!i||!f)?(F=ze(e,o,i,f,A/a),i=F.width,f=F.height):i&&(!a||!f)?(F=ze(e,o,a,f,A/i),a=F.width,f=F.height):(F=ze(e,o,a,i,A/f),a=F.width,i=F.height);else F=ze(e,o,a,i,A),a=F.width,i=F.height;if(Lr(e),e.pixelStorei(Un,t.unpackAlignment||1),Ee(e,t),o===q){const m=x/r.BYTES_PER_ELEMENT,T=A/6*m;Tn(e,t).forEach(d=>{const P=T*d.ndx,y=r.subarray(P,P+T);e.texImage2D(d.face,c,u,a,i,0,s,l,y)})}else o===re||o===te?e.texImage3D(o,c,u,a,i,f,0,s,l,r):e.texImage2D(o,c,u,a,i,0,s,l,r);return{width:a,height:i,depth:f,type:l}}function ei(e,n,r){const t=r.target||Z;e.bindTexture(t,n);const o=r.level||0,a=r.internalFormat||r.format||b,i=pe(a),f=r.format||i.format,c=r.type||i.type;if(Ee(e,r),t===q)for(let u=0;u<6;++u)e.texImage2D(je+u,o,a,r.width,r.height,0,f,c,null);else t===re||t===te?e.texImage3D(t,o,a,r.width,r.height,r.depth,0,f,c,null):e.texImage2D(t,o,a,r.width,r.height,0,f,c,null)}function ni(e,n,r){r=r||Xe,n=n||oe.textureOptions;const t=e.createTexture(),o=n.target||Z;let a=n.width||1,i=n.height||1;const f=n.internalFormat||b;e.bindTexture(o,t),o===q&&(e.texParameteri(o,We,Ve),e.texParameteri(o,$e,Ve));let c=n.src;if(c)if(typeof c=="function"&&(c=c(e,n)),typeof c=="string")qa(e,t,n,r);else if(de(c)||Array.isArray(c)&&(typeof c[0]=="number"||Array.isArray(c[0])||de(c[0]))){const u=Ja(e,t,c,n);a=u.width,i=u.height}else Array.isArray(c)&&(typeof c[0]=="string"||hr(c[0]))?o===q?Za(e,t,n,r):ja(e,t,n,r):(Ur(e,t,c,n),a=c.width,i=c.height);else ei(e,t,n);return Re(n)&&Fn(e,t,n,a,i,f),Rr(e,t,n),t}function ri(e,n,r,t,o,a){t=t||r.width,o=o||r.height,a=a||r.depth;const i=r.target||Z;e.bindTexture(i,n);const f=r.level||0,c=r.internalFormat||r.format||b,u=pe(c),_=r.format||u.format;let s;const l=r.src;if(l&&(de(l)||Array.isArray(l)&&typeof l[0]=="number")?s=r.type||Sr(e,l,u.type):s=r.type||u.type,i===q)for(let x=0;x<6;++x)e.texImage2D(je+x,f,c,t,o,0,_,s,null);else i===re||i===te?e.texImage3D(i,f,c,t,o,a,0,_,s,null):e.texImage2D(i,f,c,t,o,0,_,s,null)}const vn=lr;function Xr(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const ke=33984,en=34962,ti=34963,oi=35713,ai=35714,ii=35632,fi=35633,ci=35981,vr=35718,ui=35721,si=35971,li=35382,_i=35396,Ai=35398,xi=35392,Fi=35395,nn=5126,Mr=35664,Dr=35665,Yr=35666,Mn=5124,Br=35667,Qr=35668,wr=35669,Cr=35670,Or=35671,Gr=35672,Hr=35673,zr=35674,gr=35675,Vr=35676,mi=35678,Ti=35680,di=35679,Ei=35682,Pi=35685,yi=35686,pi=35687,Ni=35688,Ii=35689,bi=35690,Si=36289,Li=36292,Ri=36293,Dn=5125,Wr=36294,$r=36295,kr=36296,Ui=36298,hi=36299,Xi=36300,vi=36303,Mi=36306,Di=36307,Yi=36308,Bi=36311,rn=3553,tn=34067,Yn=32879,on=35866,E={};function Kr(e,n){return E[n].bindPoint}function Qi(e,n){return function(r){e.uniform1f(n,r)}}function wi(e,n){return function(r){e.uniform1fv(n,r)}}function Ci(e,n){return function(r){e.uniform2fv(n,r)}}function Oi(e,n){return function(r){e.uniform3fv(n,r)}}function Gi(e,n){return function(r){e.uniform4fv(n,r)}}function qr(e,n){return function(r){e.uniform1i(n,r)}}function Zr(e,n){return function(r){e.uniform1iv(n,r)}}function jr(e,n){return function(r){e.uniform2iv(n,r)}}function Jr(e,n){return function(r){e.uniform3iv(n,r)}}function et(e,n){return function(r){e.uniform4iv(n,r)}}function Hi(e,n){return function(r){e.uniform1ui(n,r)}}function zi(e,n){return function(r){e.uniform1uiv(n,r)}}function gi(e,n){return function(r){e.uniform2uiv(n,r)}}function Vi(e,n){return function(r){e.uniform3uiv(n,r)}}function Wi(e,n){return function(r){e.uniform4uiv(n,r)}}function $i(e,n){return function(r){e.uniformMatrix2fv(n,!1,r)}}function ki(e,n){return function(r){e.uniformMatrix3fv(n,!1,r)}}function Ki(e,n){return function(r){e.uniformMatrix4fv(n,!1,r)}}function qi(e,n){return function(r){e.uniformMatrix2x3fv(n,!1,r)}}function Zi(e,n){return function(r){e.uniformMatrix3x2fv(n,!1,r)}}function ji(e,n){return function(r){e.uniformMatrix2x4fv(n,!1,r)}}function Ji(e,n){return function(r){e.uniformMatrix4x2fv(n,!1,r)}}function ef(e,n){return function(r){e.uniformMatrix3x4fv(n,!1,r)}}function nf(e,n){return function(r){e.uniformMatrix4x3fv(n,!1,r)}}function X(e,n,r,t){const o=Kr(e,n);return he(e)?function(a){let i,f;!a||Ze(e,a)?(i=a,f=null):(i=a.texture,f=a.sampler),e.uniform1i(t,r),e.activeTexture(ke+r),e.bindTexture(o,i),e.bindSampler(r,f)}:function(a){e.uniform1i(t,r),e.activeTexture(ke+r),e.bindTexture(o,a)}}function v(e,n,r,t,o){const a=Kr(e,n),i=new Int32Array(o);for(let f=0;f<o;++f)i[f]=r+f;return he(e)?function(f){e.uniform1iv(t,i),f.forEach(function(c,u){e.activeTexture(ke+i[u]);let _,s;!c||Ze(e,c)?(_=c,s=null):(_=c.texture,s=c.sampler),e.bindSampler(r,s),e.bindTexture(a,_)})}:function(f){e.uniform1iv(t,i),f.forEach(function(c,u){e.activeTexture(ke+i[u]),e.bindTexture(a,c)})}}E[nn]={Type:Float32Array,size:4,setter:Qi,arraySetter:wi};E[Mr]={Type:Float32Array,size:8,setter:Ci,cols:2};E[Dr]={Type:Float32Array,size:12,setter:Oi,cols:3};E[Yr]={Type:Float32Array,size:16,setter:Gi,cols:4};E[Mn]={Type:Int32Array,size:4,setter:qr,arraySetter:Zr};E[Br]={Type:Int32Array,size:8,setter:jr,cols:2};E[Qr]={Type:Int32Array,size:12,setter:Jr,cols:3};E[wr]={Type:Int32Array,size:16,setter:et,cols:4};E[Dn]={Type:Uint32Array,size:4,setter:Hi,arraySetter:zi};E[Wr]={Type:Uint32Array,size:8,setter:gi,cols:2};E[$r]={Type:Uint32Array,size:12,setter:Vi,cols:3};E[kr]={Type:Uint32Array,size:16,setter:Wi,cols:4};E[Cr]={Type:Uint32Array,size:4,setter:qr,arraySetter:Zr};E[Or]={Type:Uint32Array,size:8,setter:jr,cols:2};E[Gr]={Type:Uint32Array,size:12,setter:Jr,cols:3};E[Hr]={Type:Uint32Array,size:16,setter:et,cols:4};E[zr]={Type:Float32Array,size:32,setter:$i,rows:2,cols:2};E[gr]={Type:Float32Array,size:48,setter:ki,rows:3,cols:3};E[Vr]={Type:Float32Array,size:64,setter:Ki,rows:4,cols:4};E[Pi]={Type:Float32Array,size:32,setter:qi,rows:2,cols:3};E[yi]={Type:Float32Array,size:32,setter:ji,rows:2,cols:4};E[pi]={Type:Float32Array,size:48,setter:Zi,rows:3,cols:2};E[Ni]={Type:Float32Array,size:48,setter:ef,rows:3,cols:4};E[Ii]={Type:Float32Array,size:64,setter:Ji,rows:4,cols:2};E[bi]={Type:Float32Array,size:64,setter:nf,rows:4,cols:3};E[mi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};E[Ti]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:tn};E[di]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:Yn};E[Ei]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};E[Si]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:on};E[Li]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:on};E[Ri]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:tn};E[Ui]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};E[hi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:Yn};E[Xi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:tn};E[vi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:on};E[Mi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:rn};E[Di]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:Yn};E[Yi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:tn};E[Bi]={Type:null,size:0,setter:X,arraySetter:v,bindPoint:on};function an(e,n){return function(r){if(r.value)switch(e.disableVertexAttribArray(n),r.value.length){case 4:e.vertexAttrib4fv(n,r.value);break;case 3:e.vertexAttrib3fv(n,r.value);break;case 2:e.vertexAttrib2fv(n,r.value);break;case 1:e.vertexAttrib1fv(n,r.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(en,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,r.numComponents||r.size,r.type||nn,r.normalize||!1,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function ae(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4iv(n,r.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(en,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||Mn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function fn(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4uiv(n,r.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(en,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||Dn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function Bn(e,n,r){const t=r.size,o=r.count;return function(a){e.bindBuffer(en,a.buffer);const i=a.size||a.numComponents||t,f=i/o,c=a.type||nn,_=E[c].size*i,s=a.normalize||!1,l=a.offset||0,x=_/o;for(let A=0;A<o;++A)e.enableVertexAttribArray(n+A),e.vertexAttribPointer(n+A,f,c,s,_,l+x*A),e.vertexAttribDivisor&&e.vertexAttribDivisor(n+A,a.divisor||0)}}const R={};R[nn]={size:4,setter:an};R[Mr]={size:8,setter:an};R[Dr]={size:12,setter:an};R[Yr]={size:16,setter:an};R[Mn]={size:4,setter:ae};R[Br]={size:8,setter:ae};R[Qr]={size:12,setter:ae};R[wr]={size:16,setter:ae};R[Dn]={size:4,setter:fn};R[Wr]={size:8,setter:fn};R[$r]={size:12,setter:fn};R[kr]={size:16,setter:fn};R[Cr]={size:4,setter:ae};R[Or]={size:8,setter:ae};R[Gr]={size:12,setter:ae};R[Hr]={size:16,setter:ae};R[zr]={size:4,setter:Bn,count:2};R[gr]={size:9,setter:Bn,count:3};R[Vr]={size:16,setter:Bn,count:4};const rf=/ERROR:\s*\d+:(\d+)/gi;function tf(e,n="",r=0){const t=[...n.matchAll(rf)],o=new Map(t.map((a,i)=>{const f=parseInt(a[1]),c=t[i+1],u=c?c.index:n.length,_=n.substring(a.index,u);return[f-1,_]}));return e.split(`
`).map((a,i)=>{const f=o.get(i);return`${i+1+r}: ${a}${f?`

^^^ ${f}`:""}`}).join(`
`)}const tr=/^[ \t]*\n/;function nt(e){let n=0;return tr.test(e)&&(n=1,e=e.replace(tr,"")),{lineOffset:n,shaderSource:e}}function of(e,n){return e.errorCallback(n),e.callback&&setTimeout(()=>{e.callback(`${n}
${e.errors.join(`
`)}`)}),null}function af(e,n,r,t){if(t=t||vn,!e.getShaderParameter(r,oi)){const a=e.getShaderInfoLog(r),{lineOffset:i,shaderSource:f}=nt(e.getShaderSource(r)),c=`${tf(f,a,i)}
Error compiling ${Er(e,n)}: ${a}`;return t(c),c}return""}function Qn(e,n,r){let t,o,a;if(typeof n=="function"&&(r=n,n=void 0),typeof e=="function")r=e,e=void 0;else if(e&&!Array.isArray(e)){const u=e;r=u.errorCallback,e=u.attribLocations,t=u.transformFeedbackVaryings,o=u.transformFeedbackMode,a=u.callback}const i=r||vn,f=[],c={errorCallback(u,..._){f.push(u),i(u,..._)},transformFeedbackVaryings:t,transformFeedbackMode:o,callback:a,errors:f};{let u={};Array.isArray(e)?e.forEach(function(_,s){u[_]=n?n[s]:s}):u=e||{},c.attribLocations=u}return c}const ff=["VERTEX_SHADER","FRAGMENT_SHADER"];function cf(e,n){if(n.indexOf("frag")>=0)return ii;if(n.indexOf("vert")>=0)return fi}function uf(e,n,r){const t=e.getAttachedShaders(n);for(const o of t)r.has(o)&&e.deleteShader(o);e.deleteProgram(n)}const sf=(e=0)=>new Promise(n=>setTimeout(n,e));function lf(e,n,r){const t=e.createProgram(),{attribLocations:o,transformFeedbackVaryings:a,transformFeedbackMode:i}=Qn(r);for(let f=0;f<n.length;++f){let c=n[f];if(typeof c=="string"){const u=Xr(c),_=u?u.text:c;let s=e[ff[f]];u&&u.type&&(s=cf(e,u.type)||s),c=e.createShader(s),e.shaderSource(c,nt(_).shaderSource),e.compileShader(c),e.attachShader(t,c)}}Object.entries(o).forEach(([f,c])=>e.bindAttribLocation(t,c,f));{let f=a;f&&(f.attribs&&(f=f.attribs),Array.isArray(f)||(f=Object.keys(f)),e.transformFeedbackVaryings(t,f,i||ci))}return e.linkProgram(t),t}function _f(e,n,r,t,o){const a=Qn(r,t,o),i=new Set(n),f=lf(e,n,a);function c(u,_){const s=xf(u,_,a.errorCallback);return s&&uf(u,_,i),s}if(a.callback){Af(e,f).then(()=>{const u=c(e,f);a.callback(u,u?void 0:f)});return}return c(e,f)?void 0:f}async function Af(e,n){const r=e.getExtension("KHR_parallel_shader_compile"),t=r?(a,i)=>a.getProgramParameter(i,r.COMPLETION_STATUS_KHR):()=>!0;let o=0;do await sf(o),o=1e3/60;while(!t(e,n))}function xf(e,n,r){if(r=r||vn,!e.getProgramParameter(n,ai)){const o=e.getProgramInfoLog(n);r(`Error in program linking: ${o}`);const i=e.getAttachedShaders(n).map(f=>af(e,e.getShaderParameter(f,e.SHADER_TYPE),f,r));return`${o}
${i.filter(f=>f).join(`
`)}`}}function Ff(e,n,r,t,o){return _f(e,n,r,t,o)}function rt(e){const n=e.name;return n.startsWith("gl_")||n.startsWith("webgl_")}const mf=/(\.|\[|]|\w+)/g,Tf=e=>e>="0"&&e<="9";function df(e,n,r,t){const o=e.split(mf).filter(f=>f!=="");let a=0,i="";for(;;){const f=o[a++];i+=f;const c=Tf(f[0]),u=c?parseInt(f):f;if(c&&(i+=o[a++]),a===o.length){r[u]=n;break}else{const s=o[a++],l=s==="[",x=r[u]||(l?[]:{});r[u]=x,r=x,t[i]=t[i]||function(A){return function(F){tt(A,F)}}(x),i+=s}}}function Ef(e,n){let r=0;function t(f,c,u){const _=c.name.endsWith("[0]"),s=c.type,l=E[s];if(!l)throw new Error(`unknown type: 0x${s.toString(16)}`);let x;if(l.bindPoint){const A=r;r+=c.size,_?x=l.arraySetter(e,s,A,u,c.size):x=l.setter(e,s,A,u,c.size)}else l.arraySetter&&_?x=l.arraySetter(e,u):x=l.setter(e,u);return x.location=u,x}const o={},a={},i=e.getProgramParameter(n,vr);for(let f=0;f<i;++f){const c=e.getActiveUniform(n,f);if(rt(c))continue;let u=c.name;u.endsWith("[0]")&&(u=u.substr(0,u.length-3));const _=e.getUniformLocation(n,c.name);if(_){const s=t(n,c,_);o[u]=s,df(u,s,a,o)}}return o}function Pf(e,n){const r={},t=e.getProgramParameter(n,si);for(let o=0;o<t;++o){const a=e.getTransformFeedbackVarying(n,o);r[a.name]={index:o,type:a.type,size:a.size}}return r}function yf(e,n){const r=e.getProgramParameter(n,vr),t=[],o=[];for(let f=0;f<r;++f){o.push(f),t.push({});const c=e.getActiveUniform(n,f);t[f].name=c.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(f){const c=f[0],u=f[1];e.getActiveUniforms(n,o,e[c]).forEach(function(_,s){t[s][u]=_})});const a={},i=e.getProgramParameter(n,li);for(let f=0;f<i;++f){const c=e.getActiveUniformBlockName(n,f),u={index:e.getUniformBlockIndex(n,c),usedByVertexShader:e.getActiveUniformBlockParameter(n,f,_i),usedByFragmentShader:e.getActiveUniformBlockParameter(n,f,Ai),size:e.getActiveUniformBlockParameter(n,f,xi),uniformIndices:e.getActiveUniformBlockParameter(n,f,Fi)};u.used=u.usedByVertexShader||u.usedByFragmentShader,a[c]=u}return{blockSpecs:a,uniformData:t}}function tt(e,n){for(const r in n){const t=e[r];typeof t=="function"?t(n[r]):tt(e[r],n[r])}}function wn(e,...n){const r=e.uniformSetters||e,t=n.length;for(let o=0;o<t;++o){const a=n[o];if(Array.isArray(a)){const i=a.length;for(let f=0;f<i;++f)wn(r,a[f])}else for(const i in a){const f=r[i];f&&f(a[i])}}}const Ue=wn;function pf(e,n){const r={},t=e.getProgramParameter(n,ui);for(let o=0;o<t;++o){const a=e.getActiveAttrib(n,o);if(rt(a))continue;const i=e.getAttribLocation(n,a.name),f=R[a.type],c=f.setter(e,i,f);c.location=i,r[a.name]=c}return r}function Nf(e,n){for(const r in n){const t=e[r];t&&t(n[r])}}function Pe(e,n,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(Nf(n.attribSetters||n,r.attribs),r.indices&&e.bindBuffer(ti,r.indices))}function or(e,n){const r=Ef(e,n),t=pf(e,n),o={program:n,uniformSetters:r,attribSetters:t};return he(e)&&(o.uniformBlockSpec=yf(e,n),o.transformFeedbackInfo=Pf(e,n)),o}const If=/\s|{|}|;/;function Te(e,n,r,t,o){const a=Qn(r,t,o),i=[];if(n=n.map(function(u){if(!If.test(u)){const _=Xr(u);if(_)u=_.text;else{const s=`no element with id: ${u}`;a.errorCallback(s),i.push(s)}}return u}),i.length)return of(a,"");const f=a.callback;f&&(a.callback=(u,_)=>{f(u,u?void 0:or(e,_))});const c=Ff(e,n,a);return c?or(e,c):null}const ot=36160,se=36161,bf=3553,Sf=5121,Lf=6402,Rf=6408,Uf=33190,hf=36012,Xf=35056,vf=36013,Mf=32854,Df=32855,Yf=36194,at=33189,it=6401,ft=36168,Cn=34041,dn=36064,cn=36096,ct=36128,On=33306,En=33071,Pn=9729,ut=[{format:Rf,type:Sf,min:Pn,wrap:En},{format:Cn}],V={};V[Cn]=On;V[it]=ct;V[ft]=ct;V[Lf]=cn;V[at]=cn;V[Uf]=cn;V[hf]=cn;V[Xf]=On;V[vf]=On;function Bf(e,n){return V[e]||V[n]}const ie={};ie[Mf]=!0;ie[Df]=!0;ie[Yf]=!0;ie[Cn]=!0;ie[at]=!0;ie[it]=!0;ie[ft]=!0;function Qf(e){return ie[e]}const wf=32;function Cf(e){return e>=dn&&e<dn+wf}function Of(e,n,r,t){const o=ot,a=e.createFramebuffer();e.bindFramebuffer(o,a),r=r||e.drawingBufferWidth,t=t||e.drawingBufferHeight,n=n||ut;const i=[],f={framebuffer:a,attachments:[],width:r,height:t};return n.forEach(function(c,u){let _=c.attachment;const s=c.samples,l=c.format;let x=c.attachmentPoint||Bf(l,c.internalFormat);if(x||(x=dn+u),Cf(x)&&i.push(x),!_)if(s!==void 0||Qf(l))_=e.createRenderbuffer(),e.bindRenderbuffer(se,_),s>1?e.renderbufferStorageMultisample(se,s,l,r,t):e.renderbufferStorage(se,l,r,t);else{const A=Object.assign({},c);A.width=r,A.height=t,A.auto===void 0&&(A.auto=!1,A.min=A.min||A.minMag||Pn,A.mag=A.mag||A.minMag||Pn,A.wrapS=A.wrapS||A.wrap||En,A.wrapT=A.wrapT||A.wrap||En),_=ni(e,A)}if(_r(e,_))e.framebufferRenderbuffer(o,x,se,_);else if(Ze(e,_))c.layer!==void 0?e.framebufferTextureLayer(o,x,_,c.level||0,c.layer):e.framebufferTexture2D(o,x,c.target||bf,_,c.level||0);else throw new Error("unknown attachment type");f.attachments.push(_)}),e.drawBuffers&&e.drawBuffers(i),f}function Gf(e,n,r,t,o){t=t||e.drawingBufferWidth,o=o||e.drawingBufferHeight,n.width=t,n.height=o,r=r||ut,r.forEach(function(a,i){const f=n.attachments[i],c=a.format,u=a.samples;if(u!==void 0||_r(e,f))e.bindRenderbuffer(se,f),u>1?e.renderbufferStorageMultisample(se,u,c,t,o):e.renderbufferStorage(se,c,t,o);else if(Ze(e,f))ri(e,f,a,t,o);else throw new Error("unknown attachment type")})}function ye(e,n,r){r=r||ot,n?(e.bindFramebuffer(r,n.framebuffer),e.viewport(0,0,n.width,n.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}const ee=Object.freeze({superwhite:"superwhite",colorCanvas:"color-canvas",brightnessCanvas:"brightness-canvas",hdrToggle:"enable-hdr",antialiasToggle:"enable-antialias",hdrWarning:"hdr-warning",displayP3ToSrgbFilter:"display-p3-to-srgb",fpsCounter:"fps-counter"}),Hf=4;function zf(e){const n=[];for(let r=0;r<Hf;++r)n.push(Of(e,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height));return n}function gf(e,n){for(const r of n)Gf(e,r,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height)}const Vf=`#version 300 es\r
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
`,Se=`#version 300 es\r
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
`,Wf=`#version 300 es\r
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
`,$f=`#version 300 es\r
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
    // Y components (CIE XYZ) of Display P3 primaries\r
    return dot(\r
        vec3(0.228983, 0.691749, 0.079268),\r
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
`,kf=`#version 300 es\r
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
`,Kf=`#version 300 es\r
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
`,qf=`#version 300 es\r
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
`,Zf=`#version 300 es\r
\r
precision highp float;\r
\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
const mat3 display_p3_to_srgb = mat3(\r
    vec3(1.22494, -0.0420584, -0.019644),\r
    vec3(-0.224935, 1.04206, -0.0786588),\r
    vec3(-3.26731e-6, 1.35536e-6, 1.0983)\r
);\r
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
`;function jf(e){const n=Te(e,[Vf,Wf]),r=Te(e,[Se,$f]),t=Te(e,[Se,kf]),o=Te(e,[Se,Kf]),a=Te(e,[Se,qf]),i=Te(e,[Se,Zf]);return{sceneProgramInfo:n,tonemapProgramInfo:r,antialiasProgramInfo:t,colorCanvasProgramInfo:o,brightnessCanvasProgramInfo:a,sdrCanvasProgramInfo:i}}function Jf(e,n,r,t,o,a,i){ye(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(o.program),Pe(r,o.attribSetters,i),Ue(o.uniformSetters,{u_transform:K.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),n.drawImage(r.canvas,0,0),ye(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(a.program),Pe(r,a.attribSetters,i),Ue(a.uniformSetters,{u_transform:K.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements)}function ec(e,n,r,t,o){ye(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(t.program),Pe(n,t.attribSetters,o),Ue(t.uniformSetters,{u_transform:K.identity(),u_texture:r.attachments[0]}),n.drawArrays(n.TRIANGLES,0,o.numElements)}function nc(e,n,r,t,o,a){if(ye(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(t.program),Pe(n,t.attribSetters,a),Ue(t.uniformSetters,{u_transform:K.identity(),u_brightness_mult:1/e.dynamicRange,u_reciprocal_white_point_squared:1/e.whitePoint**2,u_texture:r[0].attachments[0]}),n.drawArrays(n.TRIANGLES,0,a.numElements),!e.isAntialiasingEnabled){[r[0],r[1]]=[r[1],r[0]];return}ye(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(o.program),Pe(n,o.attribSetters,a),Ue(o.uniformSetters,{u_transform:K.identity(),u_reciprocal_resolution:[1/n.canvas.width,1/n.canvas.height],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,a.numElements)}function rc(e,n){return K.inverse(K.lookAt(e,n,[0,1,0]))}function tc(e,n){return K.perspective(n*(Math.PI/180),e.canvas.width/e.canvas.height,1,100)}function oc(e,n,r,t,o){ye(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.enable(n.DEPTH_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.useProgram(t.program),Pe(n,t.attribSetters,o);const a=performance.now()/1e3,i=3.5*Math.sin(a),f=-3.5+3.5*Math.cos(a);wn(t.uniformSetters,{u_transform:K.multiply(tc(n,80),rc([i,0,f],[0,0,-3.5]))}),n.drawElements(n.TRIANGLES,o.numElements,o.elementType??(()=>{throw new Error("Rendering error")})(),0)}function _e(e){return document.querySelector(`#${e}`)??(()=>{throw new Error(`could not get #${e}`)})()}function ac(e){const n=e.getBoundingClientRect(),r=Math.round(n.right*devicePixelRatio)-Math.round(n.left*devicePixelRatio),t=Math.round(n.bottom*devicePixelRatio)-Math.round(n.top*devicePixelRatio);return e.width!==r||e.height!==t?(e.width=r,e.height=t,!0):!1}function ic(e,n,r,t){e.isHdrEnabled=_e(ee.hdrToggle).checked,e.isAntialiasingEnabled=_e(ee.antialiasToggle).checked;const o=_e(ee.hdrWarning);let a;window.matchMedia("(dynamic-range: high)").matches?a="":(a="Your device or browser does not support HDR.",e.isHdrEnabled=!1),o.textContent!==a&&(o.textContent=a),e.isHdrEnabled?(n.style.visibility!=="visible"||r.style.visibility!=="visible"||t.style["mix-blend-mode"]!=="multiply")&&(n.style.visibility="visible",r.style.visibility="visible",t.style["mix-blend-mode"]="multiply"):(n.style.visibility!=="hidden"||r.style.visibility!=="hidden"||t.style["mix-blend-mode"]!=="normal")&&(n.style.visibility="hidden",r.style.visibility="hidden",t.style["mix-blend-mode"]="normal"),e.dynamicRange=e.isHdrEnabled?5:1}class fc{constructor(){Ne(this,"_data");Ne(this,"_frontIdx");Ne(this,"_backIdx");Ne(this,"_size");this._data=[],this._frontIdx=0,this._backIdx=0,this._size=0}front(){return this._data[this._frontIdx]}back(){const n=this._backIdx===0?this._data.length-1:this._backIdx-1;return this._data[n]}enqueue(n){this._data.length===0?(this._data=Array(4).fill(null),this._frontIdx=0,this._backIdx=0):this._size===this._data.length&&(this._data=this._data.slice(this._frontIdx).concat(this._data.slice(0,this._backIdx)).concat(Array(this._data.length).fill(null)),this._frontIdx=0,this._backIdx=this._size),this._data[this._backIdx++]=n,this._backIdx===this._data.length&&(this._backIdx=0),++this._size}dequeue(){const n=this._data[this._frontIdx];return this._data[this._frontIdx++]=null,this._frontIdx===this._data.length&&(this._frontIdx=0),--this._size,n}get length(){return this._size}}const k=new fc;function cc(){if(k.enqueue(performance.now()),k.back()===k.front())return;for(;k.back()-k.front()>2e3;)k.dequeue();const e=_e(ee.fpsCounter),n=(k.length-1)/((k.back()-k.front())/1e3),r=`Frames per second: ${Math.round(n)}`;e.textContent!==r&&(e.textContent=r)}function st(e,n,r,t,o,a,i,f){cc(),uc(e,n,r,t,o,a,i,f),window.requestAnimationFrame(()=>{st(e,n,r,t,o,a,i,f)})}function uc(e,n,r,t,o,a,i,f){ic(e,n,r.canvas,t.canvas);const c=r.filter;ac(r.canvas)&&(r.filter=c,t.canvas.width=r.canvas.width,t.canvas.height=r.canvas.height,gf(t,o)),oc(e,t,o,a.sceneProgramInfo,i),nc(e,t,o,a.tonemapProgramInfo,a.antialiasProgramInfo,f),e.isHdrEnabled?Jf(e,r,t,o[0],a.colorCanvasProgramInfo,a.brightnessCanvasProgramInfo,f):ec(e,t,o[0],a.sdrCanvasProgramInfo,f)}function sc(){const e=_e(ee.superwhite),n={alpha:!1,colorSpace:"display-p3",desynchronized:!1,willReadFrequently:!1},t=_e(ee.colorCanvas).getContext("2d",n)??(()=>{throw new Error("could not get CanvasRenderingContext2D")})();t.filter=`url(#${ee.displayP3ToSrgbFilter})`;const o={alpha:!1,depth:!1,stencil:!1,desynchronized:!1,antialias:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"default",preserveDrawingBuffer:!1},i=_e(ee.brightnessCanvas).getContext("webgl2",o)??(()=>{throw new Error("cannot get WebGL2RenderingContext")})();if(!i.getExtension("EXT_color_buffer_float"))throw new Error("could not get EXT_color_buffer_float");const f=jf(i),c={a_position:{numComponents:4,data:[-1,-1,-3,1,1,-1,-3,1,1,1,-4,1,-1,1,-4,1]},a_color:{numComponents:4,data:[0,0,0,1,0,0,20,1,0,20,0,1,20,0,0,1]},indices:{data:[0,1,3,2,3,1,0,3,1,2,1,3],type:i.UNSIGNED_SHORT}},u=$n(i,c),s=$n(i,{a_position:{numComponents:4,data:[-1,-1,0,1,3,-1,0,1,-1,3,0,1]},a_texcoord:{numComponents:2,data:[0,0,2,0,0,2]}}),l=zf(i),x={isHdrEnabled:!0,dynamicRange:5,whitePoint:20,isAntialiasingEnabled:!1};window.requestAnimationFrame(()=>{st(x,e,t,i,l,f,u,s)})}window.onload=sc;
