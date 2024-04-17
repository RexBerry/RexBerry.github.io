var Ft=Object.defineProperty;var mt=(e,n,r)=>n in e?Ft(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Ne=(e,n,r)=>(mt(e,typeof n!="symbol"?n+"":n,r),r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let Ke=Float32Array;function ne(e,n,r){const t=new Ke(3);return e&&(t[0]=e),n&&(t[1]=n),r&&(t[2]=r),t}function dt(e,n,r){return r=r||new Ke(3),r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function Wn(e,n,r){r=r||new Ke(3);const t=e[2]*n[0]-e[0]*n[2],o=e[0]*n[1]-e[1]*n[0];return r[0]=e[1]*n[2]-e[2]*n[1],r[1]=t,r[2]=o,r}function un(e,n){n=n||new Ke(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=Math.sqrt(r);return t>1e-5?(n[0]=e[0]/t,n[1]=e[1]/t,n[2]=e[2]/t):(n[0]=0,n[1]=0,n[2]=0),n}let y=Float32Array;function Tt(e){const n=y;return y=e,n}function Et(e,n){return n=n||new y(16),n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function Pt(){return new y(16).fill(0)}function ur(e,n){return n=n||new y(16),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function sr(e){return e=e||new y(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function pt(e,n){if(n=n||new y(16),n===e){let T;return T=e[1],e[1]=e[4],e[4]=T,T=e[2],e[2]=e[8],e[8]=T,T=e[3],e[3]=e[12],e[12]=T,T=e[6],e[6]=e[9],e[9]=T,T=e[7],e[7]=e[13],e[13]=T,T=e[11],e[11]=e[14],e[14]=T,n}const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],f=e[1*4+1],c=e[1*4+2],u=e[1*4+3],_=e[2*4+0],s=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],F=e[3*4+1],m=e[3*4+2],d=e[3*4+3];return n[0]=r,n[1]=i,n[2]=_,n[3]=A,n[4]=t,n[5]=f,n[6]=s,n[7]=F,n[8]=o,n[9]=c,n[10]=l,n[11]=m,n[12]=a,n[13]=u,n[14]=x,n[15]=d,n}function lr(e,n){n=n||new y(16);const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],f=e[1*4+1],c=e[1*4+2],u=e[1*4+3],_=e[2*4+0],s=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],F=e[3*4+1],m=e[3*4+2],d=e[3*4+3],T=l*d,P=m*x,p=c*d,N=m*u,L=c*x,S=l*u,M=o*d,w=m*a,B=o*x,D=l*a,Y=o*u,O=c*a,C=_*F,Q=A*s,G=i*F,g=A*f,H=i*s,Xe=_*f,Me=r*F,we=A*t,Be=r*s,De=_*t,Ye=r*f,Oe=i*t,Gn=T*f+N*s+L*F-(P*f+p*s+S*F),gn=P*t+M*s+D*F-(T*t+w*s+B*F),Hn=p*t+w*f+Y*F-(N*t+M*f+O*F),zn=S*t+B*f+O*s-(L*t+D*f+Y*s),R=1/(r*Gn+i*gn+_*Hn+A*zn);return n[0]=R*Gn,n[1]=R*gn,n[2]=R*Hn,n[3]=R*zn,n[4]=R*(P*i+p*_+S*A-(T*i+N*_+L*A)),n[5]=R*(T*r+w*_+B*A-(P*r+M*_+D*A)),n[6]=R*(N*r+M*i+O*A-(p*r+w*i+Y*A)),n[7]=R*(L*r+D*i+Y*_-(S*r+B*i+O*_)),n[8]=R*(C*u+g*x+H*d-(Q*u+G*x+Xe*d)),n[9]=R*(Q*a+Me*x+De*d-(C*a+we*x+Be*d)),n[10]=R*(G*a+we*u+Ye*d-(g*a+Me*u+Oe*d)),n[11]=R*(Xe*a+Be*u+Oe*x-(H*a+De*u+Ye*x)),n[12]=R*(G*l+Xe*m+Q*c-(H*m+C*c+g*l)),n[13]=R*(Be*m+C*o+we*l-(Me*l+De*m+Q*o)),n[14]=R*(Me*c+Oe*m+g*o-(Ye*m+G*o+we*c)),n[15]=R*(Ye*l+H*o+De*c-(Be*c+Oe*l+Xe*o)),n}function yt(e,n,r){r=r||new y(16);const t=e[0],o=e[1],a=e[2],i=e[3],f=e[4],c=e[5],u=e[6],_=e[7],s=e[8],l=e[9],x=e[10],A=e[11],F=e[12],m=e[13],d=e[14],T=e[15],P=n[0],p=n[1],N=n[2],L=n[3],S=n[4],M=n[5],w=n[6],B=n[7],D=n[8],Y=n[9],O=n[10],C=n[11],Q=n[12],G=n[13],g=n[14],H=n[15];return r[0]=t*P+f*p+s*N+F*L,r[1]=o*P+c*p+l*N+m*L,r[2]=a*P+u*p+x*N+d*L,r[3]=i*P+_*p+A*N+T*L,r[4]=t*S+f*M+s*w+F*B,r[5]=o*S+c*M+l*w+m*B,r[6]=a*S+u*M+x*w+d*B,r[7]=i*S+_*M+A*w+T*B,r[8]=t*D+f*Y+s*O+F*C,r[9]=o*D+c*Y+l*O+m*C,r[10]=a*D+u*Y+x*O+d*C,r[11]=i*D+_*Y+A*O+T*C,r[12]=t*Q+f*G+s*g+F*H,r[13]=o*Q+c*G+l*g+m*H,r[14]=a*Q+u*G+x*g+d*H,r[15]=i*Q+_*G+A*g+T*H,r}function Nt(e,n,r){return r=r||sr(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function It(e,n){return n=n||ne(),n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function bt(e,n,r){r=r||ne();const t=n*4;return r[0]=e[t+0],r[1]=e[t+1],r[2]=e[t+2],r}function St(e,n,r,t){t!==e&&(t=ur(e,t));const o=r*4;return t[o+0]=n[0],t[o+1]=n[1],t[o+2]=n[2],t}function Lt(e,n,r,t,o){o=o||new y(16);const a=Math.tan(Math.PI*.5-.5*e),i=1/(r-t);return o[0]=a/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+t)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*t*i*2,o[15]=0,o}function ht(e,n,r,t,o,a,i){return i=i||new y(16),i[0]=2/(n-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-r),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(n+e)/(e-n),i[13]=(t+r)/(r-t),i[14]=(a+o)/(o-a),i[15]=1,i}function Rt(e,n,r,t,o,a,i){i=i||new y(16);const f=n-e,c=t-r,u=o-a;return i[0]=2*o/f,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/c,i[6]=0,i[7]=0,i[8]=(e+n)/f,i[9]=(t+r)/c,i[10]=a/u,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*a/u,i[15]=0,i}let Z,fe,k;function Ut(e,n,r,t){return t=t||new y(16),Z=Z||ne(),fe=fe||ne(),k=k||ne(),un(dt(e,n,k),k),un(Wn(r,k,Z),Z),un(Wn(k,Z,fe),fe),t[0]=Z[0],t[1]=Z[1],t[2]=Z[2],t[3]=0,t[4]=fe[0],t[5]=fe[1],t[6]=fe[2],t[7]=0,t[8]=k[0],t[9]=k[1],t[10]=k[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function vt(e,n){return n=n||new y(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Xt(e,n,r){r=r||new y(16);const t=n[0],o=n[1],a=n[2],i=e[0],f=e[1],c=e[2],u=e[3],_=e[1*4+0],s=e[1*4+1],l=e[1*4+2],x=e[1*4+3],A=e[2*4+0],F=e[2*4+1],m=e[2*4+2],d=e[2*4+3],T=e[3*4+0],P=e[3*4+1],p=e[3*4+2],N=e[3*4+3];return e!==r&&(r[0]=i,r[1]=f,r[2]=c,r[3]=u,r[4]=_,r[5]=s,r[6]=l,r[7]=x,r[8]=A,r[9]=F,r[10]=m,r[11]=d),r[12]=i*t+_*o+A*a+T,r[13]=f*t+s*o+F*a+P,r[14]=c*t+l*o+m*a+p,r[15]=u*t+x*o+d*a+N,r}function Mt(e,n){n=n||new y(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=t,n[7]=0,n[8]=0,n[9]=-t,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function wt(e,n,r){r=r||new y(16);const t=e[4],o=e[5],a=e[6],i=e[7],f=e[8],c=e[9],u=e[10],_=e[11],s=Math.cos(n),l=Math.sin(n);return r[4]=s*t+l*f,r[5]=s*o+l*c,r[6]=s*a+l*u,r[7]=s*i+l*_,r[8]=s*f-l*t,r[9]=s*c-l*o,r[10]=s*u-l*a,r[11]=s*_-l*i,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Bt(e,n){n=n||new y(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=0,n[2]=-t,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=t,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Dt(e,n,r){r=r||new y(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],f=e[2*4+0],c=e[2*4+1],u=e[2*4+2],_=e[2*4+3],s=Math.cos(n),l=Math.sin(n);return r[0]=s*t-l*f,r[1]=s*o-l*c,r[2]=s*a-l*u,r[3]=s*i-l*_,r[8]=s*f+l*t,r[9]=s*c+l*o,r[10]=s*u+l*a,r[11]=s*_+l*i,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Yt(e,n){n=n||new y(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=t,n[2]=0,n[3]=0,n[4]=-t,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Ot(e,n,r){r=r||new y(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],f=e[1*4+0],c=e[1*4+1],u=e[1*4+2],_=e[1*4+3],s=Math.cos(n),l=Math.sin(n);return r[0]=s*t+l*f,r[1]=s*o+l*c,r[2]=s*a+l*u,r[3]=s*i+l*_,r[4]=s*f-l*t,r[5]=s*c-l*o,r[6]=s*u-l*a,r[7]=s*_-l*i,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Ct(e,n,r){r=r||new y(16);let t=e[0],o=e[1],a=e[2];const i=Math.sqrt(t*t+o*o+a*a);t/=i,o/=i,a/=i;const f=t*t,c=o*o,u=a*a,_=Math.cos(n),s=Math.sin(n),l=1-_;return r[0]=f+(1-f)*_,r[1]=t*o*l+a*s,r[2]=t*a*l-o*s,r[3]=0,r[4]=t*o*l-a*s,r[5]=c+(1-c)*_,r[6]=o*a*l+t*s,r[7]=0,r[8]=t*a*l+o*s,r[9]=o*a*l-t*s,r[10]=u+(1-u)*_,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Qt(e,n,r,t){t=t||new y(16);let o=n[0],a=n[1],i=n[2];const f=Math.sqrt(o*o+a*a+i*i);o/=f,a/=f,i/=f;const c=o*o,u=a*a,_=i*i,s=Math.cos(r),l=Math.sin(r),x=1-s,A=c+(1-c)*s,F=o*a*x+i*l,m=o*i*x-a*l,d=o*a*x-i*l,T=u+(1-u)*s,P=a*i*x+o*l,p=o*i*x+a*l,N=a*i*x-o*l,L=_+(1-_)*s,S=e[0],M=e[1],w=e[2],B=e[3],D=e[4],Y=e[5],O=e[6],C=e[7],Q=e[8],G=e[9],g=e[10],H=e[11];return t[0]=A*S+F*D+m*Q,t[1]=A*M+F*Y+m*G,t[2]=A*w+F*O+m*g,t[3]=A*B+F*C+m*H,t[4]=d*S+T*D+P*Q,t[5]=d*M+T*Y+P*G,t[6]=d*w+T*O+P*g,t[7]=d*B+T*C+P*H,t[8]=p*S+N*D+L*Q,t[9]=p*M+N*Y+L*G,t[10]=p*w+N*O+L*g,t[11]=p*B+N*C+L*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function Gt(e,n){return n=n||new y(16),n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function gt(e,n,r){r=r||new y(16);const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0],r[1]=t*e[0*4+1],r[2]=t*e[0*4+2],r[3]=t*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=a*e[2*4+0],r[9]=a*e[2*4+1],r[10]=a*e[2*4+2],r[11]=a*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Ht(e,n,r){r=r||ne();const t=n[0],o=n[1],a=n[2],i=t*e[0*4+3]+o*e[1*4+3]+a*e[2*4+3]+e[3*4+3];return r[0]=(t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0]+e[3*4+0])/i,r[1]=(t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1]+e[3*4+1])/i,r[2]=(t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2]+e[3*4+2])/i,r}function zt(e,n,r){r=r||ne();const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0],r[1]=t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1],r[2]=t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2],r}function Wt(e,n,r){r=r||ne();const t=lr(e),o=n[0],a=n[1],i=n[2];return r[0]=o*t[0*4+0]+a*t[0*4+1]+i*t[0*4+2],r[1]=o*t[1*4+0]+a*t[1*4+1]+i*t[1*4+2],r[2]=o*t[2*4+0]+a*t[2*4+1]+i*t[2*4+2],r}var K=Object.freeze({__proto__:null,axisRotate:Qt,axisRotation:Ct,copy:ur,create:Pt,frustum:Rt,getAxis:bt,getTranslation:It,identity:sr,inverse:lr,lookAt:Ut,multiply:yt,negate:Et,ortho:ht,perspective:Lt,rotateX:wt,rotateY:Dt,rotateZ:Ot,rotationX:Mt,rotationY:Bt,rotationZ:Yt,scale:gt,scaling:Gt,setAxis:St,setDefaultType:Tt,setTranslation:Nt,transformDirection:zt,transformNormal:Wt,transformPoint:Ht,translate:Xt,translation:vt,transpose:pt});const pn=5120,Le=5121,yn=5122,Nn=5123,In=5124,bn=5125,Sn=5126,Vt=32819,kt=32820,$t=33635,Kt=5131,qt=33640,jt=35899,Zt=35902,Jt=36269,eo=34042,_r={};{const e=_r;e[pn]=Int8Array,e[Le]=Uint8Array,e[yn]=Int16Array,e[Nn]=Uint16Array,e[In]=Int32Array,e[bn]=Uint32Array,e[Sn]=Float32Array,e[Vt]=Uint16Array,e[kt]=Uint16Array,e[$t]=Uint16Array,e[Kt]=Uint16Array,e[qt]=Uint32Array,e[jt]=Uint32Array,e[Zt]=Uint32Array,e[Jt]=Uint32Array,e[eo]=Uint32Array}function Ln(e){if(e instanceof Int8Array)return pn;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Le;if(e instanceof Int16Array)return yn;if(e instanceof Uint16Array)return Nn;if(e instanceof Int32Array)return In;if(e instanceof Uint32Array)return bn;if(e instanceof Float32Array)return Sn;throw new Error("unsupported typed array type")}function Ar(e){if(e===Int8Array)return pn;if(e===Uint8Array||e===Uint8ClampedArray)return Le;if(e===Int16Array)return yn;if(e===Uint16Array)return Nn;if(e===Int32Array)return In;if(e===Uint32Array)return bn;if(e===Float32Array)return Sn;throw new Error("unsupported typed array type")}function xr(e){const n=_r[e];if(!n)throw new Error("unknown gl type");return n}const ze=typeof SharedArrayBuffer<"u"?function(n){return n&&n.buffer&&(n.buffer instanceof ArrayBuffer||n.buffer instanceof SharedArrayBuffer)}:function(n){return n&&n.buffer&&n.buffer instanceof ArrayBuffer};function Fr(...e){console.error(...e)}const Vn=new Map;function qe(e,n){if(!e||typeof e!="object")return!1;let r=Vn.get(n);r||(r=new WeakMap,Vn.set(n,r));let t=r.get(e);if(t===void 0){const o=Object.prototype.toString.call(e);t=o.substring(8,o.length-1)===n,r.set(e,t)}return t}function no(e,n){return typeof WebGLBuffer<"u"&&qe(n,"WebGLBuffer")}function mr(e,n){return typeof WebGLRenderbuffer<"u"&&qe(n,"WebGLRenderbuffer")}function je(e,n){return typeof WebGLTexture<"u"&&qe(n,"WebGLTexture")}function ro(e,n){return typeof WebGLSampler<"u"&&qe(n,"WebGLSampler")}const dr=35044,le=34962,to=34963,oo=34660,ao=5120,io=5121,fo=5122,co=5123,uo=5124,so=5125,Tr=5126,Er={attribPrefix:""};function lo(e,n,r,t,o){e.bindBuffer(n,r),e.bufferData(n,t,o||dr)}function Pr(e,n,r,t){if(no(e,n))return n;r=r||le;const o=e.createBuffer();return lo(e,r,o,n,t),o}function pr(e){return e==="indices"}function _o(e){return e===Int8Array||e===Uint8Array}function Ao(e){return e.length?e:e.data}const xo=/coord|texture/i,Fo=/color|colour/i;function mo(e,n){let r;if(xo.test(e)?r=2:Fo.test(e)?r=4:r=3,n%r>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${r} but ${n} values is not evenly divisible by ${r}. You should specify it.`);return r}function To(e,n,r){return e.numComponents||e.size||mo(n,r||Ao(e).length)}function yr(e,n){if(ze(e))return e;if(ze(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type?hn(e.type):void 0;return r||(pr(n)?r=Uint16Array:r=Float32Array),new r(e.data)}function Eo(e){return typeof e=="number"?e:e?Ar(e):Tr}function hn(e){return typeof e=="number"?xr(e):e||Float32Array}function Po(e,n){return{buffer:n.buffer,numValues:2*3*4,type:Eo(n.type),arrayType:hn(n.type)}}function po(e,n){const r=n.data||n,t=hn(n.type),o=r*t.BYTES_PER_ELEMENT,a=e.createBuffer();return e.bindBuffer(le,a),e.bufferData(le,o,n.drawType||dr),{buffer:a,numValues:r,type:Ar(t),arrayType:t}}function yo(e,n,r){const t=yr(n,r);return{arrayType:t.constructor,buffer:Pr(e,t,void 0,n.drawType),type:Ln(t),numValues:0}}function No(e,n){const r={};return Object.keys(n).forEach(function(t){if(!pr(t)){const o=n[t],a=o.attrib||o.name||o.attribName||Er.attribPrefix+t;if(o.value){if(!Array.isArray(o.value)&&!ze(o.value))throw new Error("array.value is not array or typedarray");r[a]={value:o.value}}else{let i;o.buffer&&o.buffer instanceof WebGLBuffer?i=Po:typeof o=="number"||typeof o.data=="number"?i=po:i=yo;const{buffer:f,type:c,numValues:u,arrayType:_}=i(e,o,t),s=o.normalize!==void 0?o.normalize:_o(_),l=To(o,t,u);r[a]={buffer:f,numComponents:l,type:c,normalize:s,stride:o.stride||0,offset:o.offset||0,divisor:o.divisor===void 0?void 0:o.divisor,drawType:o.drawType}}}}),e.bindBuffer(le,null),r}function Io(e,n){return n===ao||n===io?1:n===fo||n===co?2:n===uo||n===so||n===Tr?4:0}const sn=["position","positions","a_position"];function bo(e,n){let r,t;for(t=0;t<sn.length&&(r=sn[t],!(r in n||(r=Er.attribPrefix+r,r in n)));++t);t===sn.length&&(r=Object.keys(n)[0]);const o=n[r];if(!o.buffer)return 1;e.bindBuffer(le,o.buffer);const a=e.getBufferParameter(le,oo);e.bindBuffer(le,null);const i=Io(e,o.type),f=a/i,c=o.numComponents||o.size,u=f/c;if(u%1!==0)throw new Error(`numComponents ${c} not correct for length ${length}`);return u}function kn(e,n,r){const t=No(e,n),o=Object.assign({},r||{});o.attribs=Object.assign({},r?r.attribs:{},t);const a=n.indices;if(a){const i=yr(a,"indices");o.indices=Pr(e,i,to),o.numElements=i.length,o.elementType=Ln(i)}else o.numElements||(o.numElements=bo(e,o.attribs));return o}function Ue(e){return!!e.texStorage2D}const Nr=function(){const e={},n={};function r(t){const o=t.constructor.name;if(!e[o]){for(const a in t)if(typeof t[a]=="number"){const i=n[t[a]];n[t[a]]=i?`${i} | ${a}`:a}e[o]=!0}}return function(o,a){return r(o),n[a]||(typeof a=="number"?`0x${a.toString(16)}`:a)}}(),oe={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},Te=ze,Ir=function(){let e;return function(){return e=e||(typeof document<"u"&&document.createElement?document.createElement("canvas").getContext("2d"):null),e}}(),$n=6406,V=6407,b=6408,Kn=6409,qn=6410,Ie=6402,jn=34041,We=33071,So=9728,Lo=9729,j=3553,q=34067,re=32879,te=35866,Ze=34069,ho=34070,Ro=34071,Uo=34072,vo=34073,Xo=34074,An=10241,xn=10240,Ve=10242,ke=10243,Zn=32882,Mo=33082,wo=33083,Bo=33084,Do=33085,Yo=34892,Oo=34893,Rn=3317,br=3314,Sr=32878,Lr=3316,hr=3315,Rr=32877,Co=37443,Qo=37441,Go=37440,go=33321,Ho=36756,zo=33325,Wo=33326,Vo=33330,ko=33329,$o=33338,Ko=33337,qo=33340,jo=33339,Zo=33323,Jo=36757,ea=33327,na=33328,ra=33336,ta=33335,oa=33332,aa=33331,ia=33334,fa=33333,ca=32849,ua=35905,sa=36194,la=36758,_a=35898,Aa=35901,xa=34843,Fa=34837,ma=36221,da=36239,Ta=36215,Ea=36233,Pa=36209,pa=36227,ya=32856,Na=35907,Ia=36759,ba=32855,Sa=32854,La=32857,ha=34842,Ra=34836,Ua=36220,va=36238,Xa=36975,Ma=36214,wa=36232,Ba=36226,Da=36208,Ya=33189,Oa=33190,Ca=36012,Qa=36013,Ga=35056,J=5120,I=5121,Ce=5122,Ae=5123,Qe=5124,ce=5125,U=5126,Jn=32819,er=32820,nr=33635,z=5131,be=36193,ln=33640,ga=35899,Ha=35902,za=36269,Wa=34042,Ge=33319,xe=33320,ge=6403,Fe=36244,me=36248,ue=36249;let _n;function Je(e){if(!_n){const n={};n[$n]={textureFormat:$n,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,z,be,U]},n[Kn]={textureFormat:Kn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,z,be,U]},n[qn]={textureFormat:qn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[I,z,be,U]},n[V]={textureFormat:V,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[I,z,be,U,nr]},n[b]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[I,z,be,U,Jn,er]},n[Ie]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[ce,Ae]},n[go]={textureFormat:ge,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[I]},n[Ho]={textureFormat:ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[J]},n[zo]={textureFormat:ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[U,z]},n[Wo]={textureFormat:ge,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[U]},n[Vo]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[I]},n[ko]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[J]},n[oa]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ae]},n[aa]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ce]},n[ia]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ce]},n[fa]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Qe]},n[Zo]={textureFormat:Ge,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[I]},n[Jo]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[J]},n[ea]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[U,z]},n[na]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[U]},n[ra]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[I]},n[ta]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[J]},n[$o]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ae]},n[Ko]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ce]},n[qo]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[ce]},n[jo]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Qe]},n[ca]={textureFormat:V,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[ua]={textureFormat:V,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[sa]={textureFormat:V,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[I,nr]},n[la]={textureFormat:V,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[J]},n[_a]={textureFormat:V,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[U,z,ga]},n[Aa]={textureFormat:V,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[U,z,Ha]},n[xa]={textureFormat:V,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[U,z]},n[Fa]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[U]},n[ma]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[I]},n[da]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[J]},n[Ta]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ae]},n[Ea]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ce]},n[Pa]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[ce]},n[pa]={textureFormat:me,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[Qe]},n[ya]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[Na]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[Ia]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[J]},n[ba]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[I,er,ln]},n[Sa]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[I,Jn]},n[La]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[ln]},n[ha]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[U,z]},n[Ra]={textureFormat:b,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[U]},n[Ua]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},n[va]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[J]},n[Xa]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ln]},n[Ma]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ae]},n[wa]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ce]},n[Ba]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[Qe]},n[Da]={textureFormat:ue,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[ce]},n[Ya]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[Ae,ce]},n[Oa]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ce]},n[Ca]={textureFormat:Ie,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[U]},n[Ga]={textureFormat:jn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Wa]},n[Qa]={textureFormat:jn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[za]},Object.keys(n).forEach(function(r){const t=n[r];t.bytesPerElementMap={},t.bytesPerElement.forEach(function(o,a){const i=t.type[a];t.bytesPerElementMap[i]=o})}),_n=n}return _n[e]}function Va(e,n){const r=Je(e);if(!r)throw"unknown internal format";const t=r.bytesPerElementMap[n];if(t===void 0)throw"unknown internal format";return t}function ye(e){const n=Je(e);if(!n)throw"unknown internal format";return{format:n.textureFormat,type:n.type[0]}}function rr(e){return(e&e-1)===0}function ka(e,n,r,t){if(!Ue(e))return rr(n)&&rr(r);const o=Je(t);if(!o)throw"unknown internal format";return o.colorRenderable&&o.textureFilterable}function $a(e){const n=Je(e);if(!n)throw"unknown internal format";return n.textureFilterable}function Ur(e,n,r){return Te(n)?Ln(n):r||I}function He(e,n,r,t,o){if(o%1!==0)throw"can't guess dimensions";if(!r&&!t){const a=Math.sqrt(o/(n===q?6:1));a%1===0?(r=a,t=a):(r=o,t=1)}else if(t){if(!r&&(r=o/t,r%1))throw"can't guess dimensions"}else if(t=o/r,t%1)throw"can't guess dimensions";return{width:r,height:t}}function Ee(e,n){n.colorspaceConversion!==void 0&&e.pixelStorei(Co,n.colorspaceConversion),n.premultiplyAlpha!==void 0&&e.pixelStorei(Qo,n.premultiplyAlpha),n.flipY!==void 0&&e.pixelStorei(Go,n.flipY)}function vr(e){e.pixelStorei(Rn,4),Ue(e)&&(e.pixelStorei(br,0),e.pixelStorei(Sr,0),e.pixelStorei(Lr,0),e.pixelStorei(hr,0),e.pixelStorei(Rr,0))}function Ka(e,n,r,t){t.minMag&&(r.call(e,n,An,t.minMag),r.call(e,n,xn,t.minMag)),t.min&&r.call(e,n,An,t.min),t.mag&&r.call(e,n,xn,t.mag),t.wrap&&(r.call(e,n,Ve,t.wrap),r.call(e,n,ke,t.wrap),(n===re||ro(e,n))&&r.call(e,n,Zn,t.wrap)),t.wrapR&&r.call(e,n,Zn,t.wrapR),t.wrapS&&r.call(e,n,Ve,t.wrapS),t.wrapT&&r.call(e,n,ke,t.wrapT),t.minLod!==void 0&&r.call(e,n,Mo,t.minLod),t.maxLod!==void 0&&r.call(e,n,wo,t.maxLod),t.baseLevel!==void 0&&r.call(e,n,Bo,t.baseLevel),t.maxLevel!==void 0&&r.call(e,n,Do,t.maxLevel),t.compareFunc!==void 0&&r.call(e,n,Oo,t.compareFunc),t.compareMode!==void 0&&r.call(e,n,Yo,t.compareMode)}function Xr(e,n,r){const t=r.target||j;e.bindTexture(t,n),Ka(e,t,e.texParameteri,r)}function qa(e){return e=e||oe.textureColor,Te(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Fn(e,n,r,t,o,a){r=r||oe.textureOptions,a=a||b;const i=r.target||j;if(t=t||r.width,o=o||r.height,e.bindTexture(i,n),ka(e,t,o,a))e.generateMipmap(i);else{const f=$a(a)?Lo:So;e.texParameteri(i,An,f),e.texParameteri(i,xn,f),e.texParameteri(i,Ve,We),e.texParameteri(i,ke,We)}}function he(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function mn(e,n){return n=n||{},n.cubeFaceOrder||[Ze,ho,Ro,Uo,vo,Xo]}function dn(e,n){const t=mn(e,n).map(function(o,a){return{face:o,ndx:a}});return t.sort(function(o,a){return o.face-a.face}),t}function Mr(e,n,r,t){t=t||oe.textureOptions;const o=t.target||j,a=t.level||0;let i=r.width,f=r.height;const c=t.internalFormat||t.format||b,u=ye(c),_=t.format||u.format,s=t.type||u.type;if(Ee(e,t),e.bindTexture(o,n),o===q){const l=r.width,x=r.height;let A,F;if(l/6===x)A=x,F=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===l)A=l,F=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3===x/2)A=l/3,F=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2===x/3)A=l/2,F=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(r.src?r.src:r.nodeName);const m=Ir();m?(m.canvas.width=A,m.canvas.height=A,i=A,f=A,dn(e,t).forEach(function(d){const T=F[d.ndx*2+0]*A,P=F[d.ndx*2+1]*A;m.drawImage(r,T,P,A,A,0,0,A,A),e.texImage2D(d.face,a,c,_,s,m.canvas)}),m.canvas.width=1,m.canvas.height=1):typeof createImageBitmap<"u"&&(i=A,f=A,dn(e,t).forEach(function(d){const T=F[d.ndx*2+0]*A,P=F[d.ndx*2+1]*A;e.texImage2D(d.face,a,c,A,A,0,_,s,null),createImageBitmap(r,T,P,A,A,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(p){Ee(e,t),e.bindTexture(o,n),e.texImage2D(d.face,a,c,_,s,p),he(t)&&Fn(e,n,t,i,f,c)})}))}else if(o===re||o===te){const l=Math.min(r.width,r.height),x=Math.max(r.width,r.height),A=x/l;if(A%1!==0)throw"can not compute 3D dimensions of element";const F=r.width===x?1:0,m=r.height===x?1:0;e.pixelStorei(Rn,1),e.pixelStorei(br,r.width),e.pixelStorei(Sr,0),e.pixelStorei(Rr,0),e.texImage3D(o,a,c,l,l,l,0,_,s,null);for(let d=0;d<A;++d){const T=d*l*F,P=d*l*m;e.pixelStorei(Lr,T),e.pixelStorei(hr,P),e.texSubImage3D(o,a,0,0,d,l,l,1,_,s,r)}vr(e)}else e.texImage2D(o,a,c,_,s,r);he(t)&&Fn(e,n,t,i,f,c),Xr(e,n,t)}function ve(){}function ja(e){if(typeof document<"u"){const n=document.createElement("a");return n.href=e,n.hostname===location.hostname&&n.port===location.port&&n.protocol===location.protocol}else{const n=new URL(location.href).origin;return new URL(e,location.href).origin===n}}function Za(e,n){return n===void 0&&!ja(e)?"anonymous":n}function Ja(e,n,r){r=r||ve;let t;if(n=n!==void 0?n:oe.crossOrigin,n=Za(e,n),typeof Image<"u"){t=new Image,n!==void 0&&(t.crossOrigin=n);const o=function(){t.removeEventListener("error",a),t.removeEventListener("load",i),t=null},a=function(){const c="couldn't load image: "+e;Fr(c),r(c,t),o()},i=function(){r(null,t),o()};return t.addEventListener("error",a),t.addEventListener("load",i),t.src=e,t}else if(typeof ImageBitmap<"u"){let o,a;const i=function(){r(o,a)},f={};n&&(f.mode="cors"),fetch(e,f).then(function(c){if(!c.ok)throw c;return c.blob()}).then(function(c){return createImageBitmap(c,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(c){a=c,setTimeout(i)}).catch(function(c){o=c,setTimeout(i)}),t=null}return t}function wr(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof ImageData<"u"&&e instanceof ImageData||typeof HTMLElement<"u"&&e instanceof HTMLElement}function Un(e,n,r){return wr(e)?(setTimeout(function(){r(null,e)}),e):Ja(e,n,r)}function vn(e,n,r){r=r||oe.textureOptions;const t=r.target||j;if(e.bindTexture(t,n),r.color===!1)return;const o=qa(r.color);if(t===q)for(let a=0;a<6;++a)e.texImage2D(Ze+a,0,b,1,1,0,b,I,o);else t===re||t===te?e.texImage3D(t,0,b,1,1,1,0,b,I,o):e.texImage2D(t,0,b,1,1,0,b,I,o)}function ei(e,n,r,t){return t=t||ve,r=r||oe.textureOptions,vn(e,n,r),r=Object.assign({},r),Un(r.src,r.crossOrigin,function(a,i){a?t(a,n,i):(Mr(e,n,i,r),t(null,n,i))})}function ni(e,n,r,t){t=t||ve;const o=r.src;if(o.length!==6)throw"there must be 6 urls for a cubemap";const a=r.level||0,i=r.internalFormat||r.format||b,f=ye(i),c=r.format||f.format,u=r.type||I,_=r.target||j;if(_!==q)throw"target must be TEXTURE_CUBE_MAP";vn(e,n,r),r=Object.assign({},r);let s=6;const l=[],x=mn(e,r);let A;function F(m){return function(d,T){--s,d?l.push(d):T.width!==T.height?l.push("cubemap face img is not a square: "+T.src):(Ee(e,r),e.bindTexture(_,n),s===5?mn().forEach(function(P){e.texImage2D(P,a,i,c,u,T)}):e.texImage2D(m,a,i,c,u,T),he(r)&&e.generateMipmap(_)),s===0&&t(l.length?l:void 0,n,A)}}A=o.map(function(m,d){return Un(m,r.crossOrigin,F(x[d]))})}function ri(e,n,r,t){t=t||ve;const o=r.src,a=r.internalFormat||r.format||b,i=ye(a),f=r.format||i.format,c=r.type||I,u=r.target||te;if(u!==re&&u!==te)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";vn(e,n,r),r=Object.assign({},r);let _=o.length;const s=[];let l;const x=r.level||0;let A=r.width,F=r.height;const m=o.length;let d=!0;function T(P){return function(p,N){if(--_,p)s.push(p);else{if(Ee(e,r),e.bindTexture(u,n),d){d=!1,A=r.width||N.width,F=r.height||N.height,e.texImage3D(u,x,a,A,F,m,0,f,c,null);for(let L=0;L<m;++L)e.texSubImage3D(u,x,0,0,L,A,F,1,f,c,N)}else{let L=N,S;(N.width!==A||N.height!==F)&&(S=Ir(),L=S.canvas,S.canvas.width=A,S.canvas.height=F,S.drawImage(N,0,0,A,F)),e.texSubImage3D(u,x,0,0,P,A,F,1,f,c,L),S&&L===S.canvas&&(S.canvas.width=0,S.canvas.height=0)}he(r)&&e.generateMipmap(u)}_===0&&t(s.length?s:void 0,n,l)}}l=o.map(function(P,p){return Un(P,r.crossOrigin,T(p))})}function ti(e,n,r,t){t=t||oe.textureOptions;const o=t.target||j;e.bindTexture(o,n);let a=t.width,i=t.height,f=t.depth;const c=t.level||0,u=t.internalFormat||t.format||b,_=ye(u),s=t.format||_.format,l=t.type||Ur(e,r,_.type);if(Te(r))r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));else{const m=xr(l);r=new m(r)}const x=Va(u,l),A=r.byteLength/x;if(A%1)throw"length wrong size for format: "+Nr(e,s);let F;if(o===re||o===te)if(!a&&!i&&!f){const m=Math.cbrt(A);if(m%1!==0)throw"can't guess cube size of array of numElements: "+A;a=m,i=m,f=m}else a&&(!i||!f)?(F=He(e,o,i,f,A/a),i=F.width,f=F.height):i&&(!a||!f)?(F=He(e,o,a,f,A/i),a=F.width,f=F.height):(F=He(e,o,a,i,A/f),a=F.width,i=F.height);else F=He(e,o,a,i,A),a=F.width,i=F.height;if(vr(e),e.pixelStorei(Rn,t.unpackAlignment||1),Ee(e,t),o===q){const m=x/r.BYTES_PER_ELEMENT,d=A/6*m;dn(e,t).forEach(T=>{const P=d*T.ndx,p=r.subarray(P,P+d);e.texImage2D(T.face,c,u,a,i,0,s,l,p)})}else o===re||o===te?e.texImage3D(o,c,u,a,i,f,0,s,l,r):e.texImage2D(o,c,u,a,i,0,s,l,r);return{width:a,height:i,depth:f,type:l}}function oi(e,n,r){const t=r.target||j;e.bindTexture(t,n);const o=r.level||0,a=r.internalFormat||r.format||b,i=ye(a),f=r.format||i.format,c=r.type||i.type;if(Ee(e,r),t===q)for(let u=0;u<6;++u)e.texImage2D(Ze+u,o,a,r.width,r.height,0,f,c,null);else t===re||t===te?e.texImage3D(t,o,a,r.width,r.height,r.depth,0,f,c,null):e.texImage2D(t,o,a,r.width,r.height,0,f,c,null)}function ai(e,n,r){r=r||ve,n=n||oe.textureOptions;const t=e.createTexture(),o=n.target||j;let a=n.width||1,i=n.height||1;const f=n.internalFormat||b;e.bindTexture(o,t),o===q&&(e.texParameteri(o,Ve,We),e.texParameteri(o,ke,We));let c=n.src;if(c)if(typeof c=="function"&&(c=c(e,n)),typeof c=="string")ei(e,t,n,r);else if(Te(c)||Array.isArray(c)&&(typeof c[0]=="number"||Array.isArray(c[0])||Te(c[0]))){const u=ti(e,t,c,n);a=u.width,i=u.height}else Array.isArray(c)&&(typeof c[0]=="string"||wr(c[0]))?o===q?ni(e,t,n,r):ri(e,t,n,r):(Mr(e,t,c,n),a=c.width,i=c.height);else oi(e,t,n);return he(n)&&Fn(e,t,n,a,i,f),Xr(e,t,n),t}function ii(e,n,r,t,o,a){t=t||r.width,o=o||r.height,a=a||r.depth;const i=r.target||j;e.bindTexture(i,n);const f=r.level||0,c=r.internalFormat||r.format||b,u=ye(c),_=r.format||u.format;let s;const l=r.src;if(l&&(Te(l)||Array.isArray(l)&&typeof l[0]=="number")?s=r.type||Ur(e,l,u.type):s=r.type||u.type,i===q)for(let x=0;x<6;++x)e.texImage2D(Ze+x,f,c,t,o,0,_,s,null);else i===re||i===te?e.texImage3D(i,f,c,t,o,a,0,_,s,null):e.texImage2D(i,f,c,t,o,0,_,s,null)}const Xn=Fr;function Br(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const $e=33984,en=34962,fi=34963,ci=35713,ui=35714,si=35632,li=35633,_i=35981,Dr=35718,Ai=35721,xi=35971,Fi=35382,mi=35396,di=35398,Ti=35392,Ei=35395,nn=5126,Yr=35664,Or=35665,Cr=35666,Mn=5124,Qr=35667,Gr=35668,gr=35669,Hr=35670,zr=35671,Wr=35672,Vr=35673,kr=35674,$r=35675,Kr=35676,Pi=35678,pi=35680,yi=35679,Ni=35682,Ii=35685,bi=35686,Si=35687,Li=35688,hi=35689,Ri=35690,Ui=36289,vi=36292,Xi=36293,wn=5125,qr=36294,jr=36295,Zr=36296,Mi=36298,wi=36299,Bi=36300,Di=36303,Yi=36306,Oi=36307,Ci=36308,Qi=36311,rn=3553,tn=34067,Bn=32879,on=35866,E={};function Jr(e,n){return E[n].bindPoint}function Gi(e,n){return function(r){e.uniform1f(n,r)}}function gi(e,n){return function(r){e.uniform1fv(n,r)}}function Hi(e,n){return function(r){e.uniform2fv(n,r)}}function zi(e,n){return function(r){e.uniform3fv(n,r)}}function Wi(e,n){return function(r){e.uniform4fv(n,r)}}function et(e,n){return function(r){e.uniform1i(n,r)}}function nt(e,n){return function(r){e.uniform1iv(n,r)}}function rt(e,n){return function(r){e.uniform2iv(n,r)}}function tt(e,n){return function(r){e.uniform3iv(n,r)}}function ot(e,n){return function(r){e.uniform4iv(n,r)}}function Vi(e,n){return function(r){e.uniform1ui(n,r)}}function ki(e,n){return function(r){e.uniform1uiv(n,r)}}function $i(e,n){return function(r){e.uniform2uiv(n,r)}}function Ki(e,n){return function(r){e.uniform3uiv(n,r)}}function qi(e,n){return function(r){e.uniform4uiv(n,r)}}function ji(e,n){return function(r){e.uniformMatrix2fv(n,!1,r)}}function Zi(e,n){return function(r){e.uniformMatrix3fv(n,!1,r)}}function Ji(e,n){return function(r){e.uniformMatrix4fv(n,!1,r)}}function ef(e,n){return function(r){e.uniformMatrix2x3fv(n,!1,r)}}function nf(e,n){return function(r){e.uniformMatrix3x2fv(n,!1,r)}}function rf(e,n){return function(r){e.uniformMatrix2x4fv(n,!1,r)}}function tf(e,n){return function(r){e.uniformMatrix4x2fv(n,!1,r)}}function of(e,n){return function(r){e.uniformMatrix3x4fv(n,!1,r)}}function af(e,n){return function(r){e.uniformMatrix4x3fv(n,!1,r)}}function v(e,n,r,t){const o=Jr(e,n);return Ue(e)?function(a){let i,f;!a||je(e,a)?(i=a,f=null):(i=a.texture,f=a.sampler),e.uniform1i(t,r),e.activeTexture($e+r),e.bindTexture(o,i),e.bindSampler(r,f)}:function(a){e.uniform1i(t,r),e.activeTexture($e+r),e.bindTexture(o,a)}}function X(e,n,r,t,o){const a=Jr(e,n),i=new Int32Array(o);for(let f=0;f<o;++f)i[f]=r+f;return Ue(e)?function(f){e.uniform1iv(t,i),f.forEach(function(c,u){e.activeTexture($e+i[u]);let _,s;!c||je(e,c)?(_=c,s=null):(_=c.texture,s=c.sampler),e.bindSampler(r,s),e.bindTexture(a,_)})}:function(f){e.uniform1iv(t,i),f.forEach(function(c,u){e.activeTexture($e+i[u]),e.bindTexture(a,c)})}}E[nn]={Type:Float32Array,size:4,setter:Gi,arraySetter:gi};E[Yr]={Type:Float32Array,size:8,setter:Hi,cols:2};E[Or]={Type:Float32Array,size:12,setter:zi,cols:3};E[Cr]={Type:Float32Array,size:16,setter:Wi,cols:4};E[Mn]={Type:Int32Array,size:4,setter:et,arraySetter:nt};E[Qr]={Type:Int32Array,size:8,setter:rt,cols:2};E[Gr]={Type:Int32Array,size:12,setter:tt,cols:3};E[gr]={Type:Int32Array,size:16,setter:ot,cols:4};E[wn]={Type:Uint32Array,size:4,setter:Vi,arraySetter:ki};E[qr]={Type:Uint32Array,size:8,setter:$i,cols:2};E[jr]={Type:Uint32Array,size:12,setter:Ki,cols:3};E[Zr]={Type:Uint32Array,size:16,setter:qi,cols:4};E[Hr]={Type:Uint32Array,size:4,setter:et,arraySetter:nt};E[zr]={Type:Uint32Array,size:8,setter:rt,cols:2};E[Wr]={Type:Uint32Array,size:12,setter:tt,cols:3};E[Vr]={Type:Uint32Array,size:16,setter:ot,cols:4};E[kr]={Type:Float32Array,size:32,setter:ji,rows:2,cols:2};E[$r]={Type:Float32Array,size:48,setter:Zi,rows:3,cols:3};E[Kr]={Type:Float32Array,size:64,setter:Ji,rows:4,cols:4};E[Ii]={Type:Float32Array,size:32,setter:ef,rows:2,cols:3};E[bi]={Type:Float32Array,size:32,setter:rf,rows:2,cols:4};E[Si]={Type:Float32Array,size:48,setter:nf,rows:3,cols:2};E[Li]={Type:Float32Array,size:48,setter:of,rows:3,cols:4};E[hi]={Type:Float32Array,size:64,setter:tf,rows:4,cols:2};E[Ri]={Type:Float32Array,size:64,setter:af,rows:4,cols:3};E[Pi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:rn};E[pi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:tn};E[yi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Bn};E[Ni]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:rn};E[Ui]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[vi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Xi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:tn};E[Mi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:rn};E[wi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Bn};E[Bi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:tn};E[Di]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Yi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:rn};E[Oi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Bn};E[Ci]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:tn};E[Qi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};function an(e,n){return function(r){if(r.value)switch(e.disableVertexAttribArray(n),r.value.length){case 4:e.vertexAttrib4fv(n,r.value);break;case 3:e.vertexAttrib3fv(n,r.value);break;case 2:e.vertexAttrib2fv(n,r.value);break;case 1:e.vertexAttrib1fv(n,r.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(en,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,r.numComponents||r.size,r.type||nn,r.normalize||!1,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function ae(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4iv(n,r.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(en,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||Mn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function fn(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4uiv(n,r.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(en,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||wn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function Dn(e,n,r){const t=r.size,o=r.count;return function(a){e.bindBuffer(en,a.buffer);const i=a.size||a.numComponents||t,f=i/o,c=a.type||nn,_=E[c].size*i,s=a.normalize||!1,l=a.offset||0,x=_/o;for(let A=0;A<o;++A)e.enableVertexAttribArray(n+A),e.vertexAttribPointer(n+A,f,c,s,_,l+x*A),e.vertexAttribDivisor&&e.vertexAttribDivisor(n+A,a.divisor||0)}}const h={};h[nn]={size:4,setter:an};h[Yr]={size:8,setter:an};h[Or]={size:12,setter:an};h[Cr]={size:16,setter:an};h[Mn]={size:4,setter:ae};h[Qr]={size:8,setter:ae};h[Gr]={size:12,setter:ae};h[gr]={size:16,setter:ae};h[wn]={size:4,setter:fn};h[qr]={size:8,setter:fn};h[jr]={size:12,setter:fn};h[Zr]={size:16,setter:fn};h[Hr]={size:4,setter:ae};h[zr]={size:8,setter:ae};h[Wr]={size:12,setter:ae};h[Vr]={size:16,setter:ae};h[kr]={size:4,setter:Dn,count:2};h[$r]={size:9,setter:Dn,count:3};h[Kr]={size:16,setter:Dn,count:4};const ff=/ERROR:\s*\d+:(\d+)/gi;function cf(e,n="",r=0){const t=[...n.matchAll(ff)],o=new Map(t.map((a,i)=>{const f=parseInt(a[1]),c=t[i+1],u=c?c.index:n.length,_=n.substring(a.index,u);return[f-1,_]}));return e.split(`
`).map((a,i)=>{const f=o.get(i);return`${i+1+r}: ${a}${f?`

^^^ ${f}`:""}`}).join(`
`)}const tr=/^[ \t]*\n/;function at(e){let n=0;return tr.test(e)&&(n=1,e=e.replace(tr,"")),{lineOffset:n,shaderSource:e}}function uf(e,n){return e.errorCallback(n),e.callback&&setTimeout(()=>{e.callback(`${n}
${e.errors.join(`
`)}`)}),null}function sf(e,n,r,t){if(t=t||Xn,!e.getShaderParameter(r,ci)){const a=e.getShaderInfoLog(r),{lineOffset:i,shaderSource:f}=at(e.getShaderSource(r)),c=`${cf(f,a,i)}
Error compiling ${Nr(e,n)}: ${a}`;return t(c),c}return""}function Yn(e,n,r){let t,o,a;if(typeof n=="function"&&(r=n,n=void 0),typeof e=="function")r=e,e=void 0;else if(e&&!Array.isArray(e)){const u=e;r=u.errorCallback,e=u.attribLocations,t=u.transformFeedbackVaryings,o=u.transformFeedbackMode,a=u.callback}const i=r||Xn,f=[],c={errorCallback(u,..._){f.push(u),i(u,..._)},transformFeedbackVaryings:t,transformFeedbackMode:o,callback:a,errors:f};{let u={};Array.isArray(e)?e.forEach(function(_,s){u[_]=n?n[s]:s}):u=e||{},c.attribLocations=u}return c}const lf=["VERTEX_SHADER","FRAGMENT_SHADER"];function _f(e,n){if(n.indexOf("frag")>=0)return si;if(n.indexOf("vert")>=0)return li}function Af(e,n,r){const t=e.getAttachedShaders(n);for(const o of t)r.has(o)&&e.deleteShader(o);e.deleteProgram(n)}const xf=(e=0)=>new Promise(n=>setTimeout(n,e));function Ff(e,n,r){const t=e.createProgram(),{attribLocations:o,transformFeedbackVaryings:a,transformFeedbackMode:i}=Yn(r);for(let f=0;f<n.length;++f){let c=n[f];if(typeof c=="string"){const u=Br(c),_=u?u.text:c;let s=e[lf[f]];u&&u.type&&(s=_f(e,u.type)||s),c=e.createShader(s),e.shaderSource(c,at(_).shaderSource),e.compileShader(c),e.attachShader(t,c)}}Object.entries(o).forEach(([f,c])=>e.bindAttribLocation(t,c,f));{let f=a;f&&(f.attribs&&(f=f.attribs),Array.isArray(f)||(f=Object.keys(f)),e.transformFeedbackVaryings(t,f,i||_i))}return e.linkProgram(t),t}function mf(e,n,r,t,o){const a=Yn(r,t,o),i=new Set(n),f=Ff(e,n,a);function c(u,_){const s=Tf(u,_,a.errorCallback);return s&&Af(u,_,i),s}if(a.callback){df(e,f).then(()=>{const u=c(e,f);a.callback(u,u?void 0:f)});return}return c(e,f)?void 0:f}async function df(e,n){const r=e.getExtension("KHR_parallel_shader_compile"),t=r?(a,i)=>a.getProgramParameter(i,r.COMPLETION_STATUS_KHR):()=>!0;let o=0;do await xf(o),o=1e3/60;while(!t(e,n))}function Tf(e,n,r){if(r=r||Xn,!e.getProgramParameter(n,ui)){const o=e.getProgramInfoLog(n);r(`Error in program linking: ${o}`);const i=e.getAttachedShaders(n).map(f=>sf(e,e.getShaderParameter(f,e.SHADER_TYPE),f,r));return`${o}
${i.filter(f=>f).join(`
`)}`}}function Ef(e,n,r,t,o){return mf(e,n,r,t,o)}function it(e){const n=e.name;return n.startsWith("gl_")||n.startsWith("webgl_")}const Pf=/(\.|\[|]|\w+)/g,pf=e=>e>="0"&&e<="9";function yf(e,n,r,t){const o=e.split(Pf).filter(f=>f!=="");let a=0,i="";for(;;){const f=o[a++];i+=f;const c=pf(f[0]),u=c?parseInt(f):f;if(c&&(i+=o[a++]),a===o.length){r[u]=n;break}else{const s=o[a++],l=s==="[",x=r[u]||(l?[]:{});r[u]=x,r=x,t[i]=t[i]||function(A){return function(F){ft(A,F)}}(x),i+=s}}}function Nf(e,n){let r=0;function t(f,c,u){const _=c.name.endsWith("[0]"),s=c.type,l=E[s];if(!l)throw new Error(`unknown type: 0x${s.toString(16)}`);let x;if(l.bindPoint){const A=r;r+=c.size,_?x=l.arraySetter(e,s,A,u,c.size):x=l.setter(e,s,A,u,c.size)}else l.arraySetter&&_?x=l.arraySetter(e,u):x=l.setter(e,u);return x.location=u,x}const o={},a={},i=e.getProgramParameter(n,Dr);for(let f=0;f<i;++f){const c=e.getActiveUniform(n,f);if(it(c))continue;let u=c.name;u.endsWith("[0]")&&(u=u.substr(0,u.length-3));const _=e.getUniformLocation(n,c.name);if(_){const s=t(n,c,_);o[u]=s,yf(u,s,a,o)}}return o}function If(e,n){const r={},t=e.getProgramParameter(n,xi);for(let o=0;o<t;++o){const a=e.getTransformFeedbackVarying(n,o);r[a.name]={index:o,type:a.type,size:a.size}}return r}function bf(e,n){const r=e.getProgramParameter(n,Dr),t=[],o=[];for(let f=0;f<r;++f){o.push(f),t.push({});const c=e.getActiveUniform(n,f);t[f].name=c.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(f){const c=f[0],u=f[1];e.getActiveUniforms(n,o,e[c]).forEach(function(_,s){t[s][u]=_})});const a={},i=e.getProgramParameter(n,Fi);for(let f=0;f<i;++f){const c=e.getActiveUniformBlockName(n,f),u={index:e.getUniformBlockIndex(n,c),usedByVertexShader:e.getActiveUniformBlockParameter(n,f,mi),usedByFragmentShader:e.getActiveUniformBlockParameter(n,f,di),size:e.getActiveUniformBlockParameter(n,f,Ti),uniformIndices:e.getActiveUniformBlockParameter(n,f,Ei)};u.used=u.usedByVertexShader||u.usedByFragmentShader,a[c]=u}return{blockSpecs:a,uniformData:t}}function ft(e,n){for(const r in n){const t=e[r];typeof t=="function"?t(n[r]):ft(e[r],n[r])}}function On(e,...n){const r=e.uniformSetters||e,t=n.length;for(let o=0;o<t;++o){const a=n[o];if(Array.isArray(a)){const i=a.length;for(let f=0;f<i;++f)On(r,a[f])}else for(const i in a){const f=r[i];f&&f(a[i])}}}const Re=On;function Sf(e,n){const r={},t=e.getProgramParameter(n,Ai);for(let o=0;o<t;++o){const a=e.getActiveAttrib(n,o);if(it(a))continue;const i=e.getAttribLocation(n,a.name),f=h[a.type],c=f.setter(e,i,f);c.location=i,r[a.name]=c}return r}function Lf(e,n){for(const r in n){const t=e[r];t&&t(n[r])}}function Pe(e,n,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(Lf(n.attribSetters||n,r.attribs),r.indices&&e.bindBuffer(fi,r.indices))}function or(e,n){const r=Nf(e,n),t=Sf(e,n),o={program:n,uniformSetters:r,attribSetters:t};return Ue(e)&&(o.uniformBlockSpec=bf(e,n),o.transformFeedbackInfo=If(e,n)),o}const hf=/\s|{|}|;/;function de(e,n,r,t,o){const a=Yn(r,t,o),i=[];if(n=n.map(function(u){if(!hf.test(u)){const _=Br(u);if(_)u=_.text;else{const s=`no element with id: ${u}`;a.errorCallback(s),i.push(s)}}return u}),i.length)return uf(a,"");const f=a.callback;f&&(a.callback=(u,_)=>{f(u,u?void 0:or(e,_))});const c=Ef(e,n,a);return c?or(e,c):null}const ct=36160,se=36161,Rf=3553,Uf=5121,vf=6402,Xf=6408,Mf=33190,wf=36012,Bf=35056,Df=36013,Yf=32854,Of=32855,Cf=36194,ut=33189,st=6401,lt=36168,Cn=34041,Tn=36064,cn=36096,_t=36128,Qn=33306,En=33071,Pn=9729,At=[{format:Xf,type:Uf,min:Pn,wrap:En},{format:Cn}],W={};W[Cn]=Qn;W[st]=_t;W[lt]=_t;W[vf]=cn;W[ut]=cn;W[Mf]=cn;W[wf]=cn;W[Bf]=Qn;W[Df]=Qn;function Qf(e,n){return W[e]||W[n]}const ie={};ie[Yf]=!0;ie[Of]=!0;ie[Cf]=!0;ie[Cn]=!0;ie[ut]=!0;ie[st]=!0;ie[lt]=!0;function Gf(e){return ie[e]}const gf=32;function Hf(e){return e>=Tn&&e<Tn+gf}function zf(e,n,r,t){const o=ct,a=e.createFramebuffer();e.bindFramebuffer(o,a),r=r||e.drawingBufferWidth,t=t||e.drawingBufferHeight,n=n||At;const i=[],f={framebuffer:a,attachments:[],width:r,height:t};return n.forEach(function(c,u){let _=c.attachment;const s=c.samples,l=c.format;let x=c.attachmentPoint||Qf(l,c.internalFormat);if(x||(x=Tn+u),Hf(x)&&i.push(x),!_)if(s!==void 0||Gf(l))_=e.createRenderbuffer(),e.bindRenderbuffer(se,_),s>1?e.renderbufferStorageMultisample(se,s,l,r,t):e.renderbufferStorage(se,l,r,t);else{const A=Object.assign({},c);A.width=r,A.height=t,A.auto===void 0&&(A.auto=!1,A.min=A.min||A.minMag||Pn,A.mag=A.mag||A.minMag||Pn,A.wrapS=A.wrapS||A.wrap||En,A.wrapT=A.wrapT||A.wrap||En),_=ai(e,A)}if(mr(e,_))e.framebufferRenderbuffer(o,x,se,_);else if(je(e,_))c.layer!==void 0?e.framebufferTextureLayer(o,x,_,c.level||0,c.layer):e.framebufferTexture2D(o,x,c.target||Rf,_,c.level||0);else throw new Error("unknown attachment type");f.attachments.push(_)}),e.drawBuffers&&e.drawBuffers(i),f}function Wf(e,n,r,t,o){t=t||e.drawingBufferWidth,o=o||e.drawingBufferHeight,n.width=t,n.height=o,r=r||At,r.forEach(function(a,i){const f=n.attachments[i],c=a.format,u=a.samples;if(u!==void 0||mr(e,f))e.bindRenderbuffer(se,f),u>1?e.renderbufferStorageMultisample(se,u,c,t,o):e.renderbufferStorage(se,c,t,o);else if(je(e,f))ii(e,f,a,t,o);else throw new Error("unknown attachment type")})}function pe(e,n,r){r=r||ct,n?(e.bindFramebuffer(r,n.framebuffer),e.viewport(0,0,n.width,n.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}const ee=Object.freeze({superwhite:"superwhite",colorCanvas:"color-canvas",brightnessCanvas:"brightness-canvas",hdrToggle:"enable-hdr",antialiasToggle:"enable-antialias",hdrWarning:"hdr-warning",displayP3ToSrgbFilter:"display-p3-to-srgb",fpsCounter:"fps-counter"}),Vf=4;function kf(e){const n=[];for(let r=0;r<Vf;++r)n.push(zf(e,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height));return n}function $f(e,n){for(const r of n)Wf(e,r,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height)}const Kf=`#version 300 es\r
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
`,qf=`#version 300 es\r
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
`,jf=`#version 300 es\r
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
`,Zf=`#version 300 es\r
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
`,Jf=`#version 300 es\r
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
`,ec=`#version 300 es\r
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
`,nc=`#version 300 es\r
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
`;function rc(e){const n=de(e,[Kf,qf]),r=de(e,[Se,jf]),t=de(e,[Se,Zf]),o=de(e,[Se,Jf]),a=de(e,[Se,ec]),i=de(e,[Se,nc]);return{sceneProgramInfo:n,tonemapProgramInfo:r,antialiasProgramInfo:t,colorCanvasProgramInfo:o,brightnessCanvasProgramInfo:a,sdrCanvasProgramInfo:i}}function tc(e,n,r,t,o,a,i){pe(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(o.program),Pe(r,o.attribSetters,i),Re(o.uniformSetters,{u_transform:K.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),n.drawImage(r.canvas,0,0),pe(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(a.program),Pe(r,a.attribSetters,i),Re(a.uniformSetters,{u_transform:K.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements)}function oc(e,n,r,t,o){pe(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(t.program),Pe(n,t.attribSetters,o),Re(t.uniformSetters,{u_transform:K.identity(),u_texture:r.attachments[0]}),n.drawArrays(n.TRIANGLES,0,o.numElements)}function ac(e,n,r,t,o,a){if(pe(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(t.program),Pe(n,t.attribSetters,a),Re(t.uniformSetters,{u_transform:K.identity(),u_brightness_mult:1/e.dynamicRange,u_reciprocal_white_point_squared:1/e.whitePoint**2,u_texture:r[0].attachments[0]}),n.drawArrays(n.TRIANGLES,0,a.numElements),!e.isAntialiasingEnabled){[r[0],r[1]]=[r[1],r[0]];return}pe(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(o.program),Pe(n,o.attribSetters,a),Re(o.uniformSetters,{u_transform:K.identity(),u_reciprocal_resolution:[1/n.canvas.width,1/n.canvas.height],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,a.numElements)}function ic(e,n){return K.inverse(K.lookAt(e,n,[0,1,0]))}function fc(e,n){return K.perspective(n*(Math.PI/180),e.canvas.width/e.canvas.height,1,100)}function cc(e,n,r,t,o){pe(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.enable(n.DEPTH_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),n.useProgram(t.program),Pe(n,t.attribSetters,o);const a=performance.now()/1e3,i=3.5*Math.sin(a),f=-3.5+3.5*Math.cos(a);On(t.uniformSetters,{u_transform:K.multiply(fc(n,80),ic([i,0,f],[0,0,-3.5]))}),n.drawElements(n.TRIANGLES,o.numElements,o.elementType??(()=>{throw new Error("Rendering error")})(),0)}var ar=function(e,n,r){if(r||arguments.length===2)for(var t=0,o=n.length,a;t<o;t++)(a||!(t in n))&&(a||(a=Array.prototype.slice.call(n,0,t)),a[t]=n[t]);return e.concat(a||Array.prototype.slice.call(n))},uc=function(){function e(n,r,t){this.name=n,this.version=r,this.os=t,this.type="browser"}return e}(),sc=function(){function e(n){this.version=n,this.type="node",this.name="node",this.os=process.platform}return e}(),lc=function(){function e(n,r,t,o){this.name=n,this.version=r,this.os=t,this.bot=o,this.type="bot-device"}return e}(),_c=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),Ac=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),xc=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,Fc=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,ir=3,mc=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",xc]],fr=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function dc(e){return e?cr(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Ac:typeof navigator<"u"?cr(navigator.userAgent):Pc()}function Tc(e){return e!==""&&mc.reduce(function(n,r){var t=r[0],o=r[1];if(n)return n;var a=o.exec(e);return!!a&&[t,a]},!1)}function cr(e){var n=Tc(e);if(!n)return null;var r=n[0],t=n[1];if(r==="searchbot")return new _c;var o=t[1]&&t[1].split(".").join("_").split("_").slice(0,3);o?o.length<ir&&(o=ar(ar([],o,!0),pc(ir-o.length),!0)):o=[];var a=o.join("."),i=Ec(e),f=Fc.exec(e);return f&&f[1]?new lc(r,a,i,f[1]):new uc(r,a,i)}function Ec(e){for(var n=0,r=fr.length;n<r;n++){var t=fr[n],o=t[0],a=t[1],i=a.exec(e);if(i)return o}return null}function Pc(){var e=typeof process<"u"&&process.version;return e?new sc(process.version.slice(1)):null}function pc(e){for(var n=[],r=0;r<e;r++)n.push("0");return n}function _e(e){return document.querySelector(`#${e}`)??(()=>{throw new Error(`could not get #${e}`)})()}function yc(e){const n=e.getBoundingClientRect(),r=Math.round(n.right*devicePixelRatio)-Math.round(n.left*devicePixelRatio),t=Math.round(n.bottom*devicePixelRatio)-Math.round(n.top*devicePixelRatio);return e.width!==r||e.height!==t?(e.width=r,e.height=t,!0):!1}function Nc(e,n,r,t){var c;e.isHdrEnabled=_e(ee.hdrToggle).checked,e.isAntialiasingEnabled=_e(ee.antialiasToggle).checked;const o=_e(ee.hdrWarning);let a;const i=window.matchMedia("(dynamic-range: high)").matches,f=((c=dc())==null?void 0:c.name)??"unknown";console.log(f),i?f==="safari"?a="HDR is supported, but colors might not appear correctly on Safari.":f==="edge-chromium"?a="HDR is supported, but might not be displayed at full brightness on Edge.":a="":(a="HDR is not supported.",f!=="chrome"&&(a+=" If your device supports HDR, try using Chrome."),e.isHdrEnabled=!1),o.textContent!==a&&(o.textContent=a),e.isHdrEnabled?(n.style.visibility!=="visible"||r.style.visibility!=="visible"||t.style["mix-blend-mode"]!=="multiply")&&(n.style.visibility="visible",r.style.visibility="visible",t.style["mix-blend-mode"]="multiply"):(n.style.visibility!=="hidden"||r.style.visibility!=="hidden"||t.style["mix-blend-mode"]!=="normal")&&(n.style.visibility="hidden",r.style.visibility="hidden",t.style["mix-blend-mode"]="normal"),e.dynamicRange=e.isHdrEnabled?5:1}class Ic{constructor(){Ne(this,"_data");Ne(this,"_frontIdx");Ne(this,"_backIdx");Ne(this,"_size");this._data=[],this._frontIdx=0,this._backIdx=0,this._size=0}front(){return this._data[this._frontIdx]}back(){const n=this._backIdx===0?this._data.length-1:this._backIdx-1;return this._data[n]}enqueue(n){this._data.length===0?(this._data=Array(4).fill(null),this._frontIdx=0,this._backIdx=0):this._size===this._data.length&&(this._data=this._data.slice(this._frontIdx).concat(this._data.slice(0,this._backIdx)).concat(Array(this._data.length).fill(null)),this._frontIdx=0,this._backIdx=this._size),this._data[this._backIdx++]=n,this._backIdx===this._data.length&&(this._backIdx=0),++this._size}dequeue(){const n=this._data[this._frontIdx];return this._data[this._frontIdx++]=null,this._frontIdx===this._data.length&&(this._frontIdx=0),--this._size,n}get length(){return this._size}}const $=new Ic;function bc(){if($.enqueue(performance.now()),$.back()===$.front())return;for(;$.back()-$.front()>2e3;)$.dequeue();const e=_e(ee.fpsCounter),n=($.length-1)/(($.back()-$.front())/1e3),r=`Frames per second: ${Math.round(n)}`;e.textContent!==r&&(e.textContent=r)}function xt(e,n,r,t,o,a,i,f){bc(),Sc(e,n,r,t,o,a,i,f),window.requestAnimationFrame(()=>{xt(e,n,r,t,o,a,i,f)})}function Sc(e,n,r,t,o,a,i,f){Nc(e,n,r.canvas,t.canvas);const c=r.filter;yc(r.canvas)&&(r.filter=c,t.canvas.width=r.canvas.width,t.canvas.height=r.canvas.height,$f(t,o)),cc(e,t,o,a.sceneProgramInfo,i),ac(e,t,o,a.tonemapProgramInfo,a.antialiasProgramInfo,f),e.isHdrEnabled?tc(e,r,t,o[0],a.colorCanvasProgramInfo,a.brightnessCanvasProgramInfo,f):oc(e,t,o[0],a.sdrCanvasProgramInfo,f)}function Lc(){const e=_e(ee.superwhite),n={alpha:!1,colorSpace:"display-p3",desynchronized:!1,willReadFrequently:!1},t=_e(ee.colorCanvas).getContext("2d",n)??(()=>{throw new Error("could not get CanvasRenderingContext2D")})();t.filter=`url(#${ee.displayP3ToSrgbFilter})`;const o={alpha:!1,depth:!1,stencil:!1,desynchronized:!1,antialias:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"default",preserveDrawingBuffer:!1},i=_e(ee.brightnessCanvas).getContext("webgl2",o)??(()=>{throw new Error("cannot get WebGL2RenderingContext")})();if(!i.getExtension("EXT_color_buffer_float"))throw new Error("could not get EXT_color_buffer_float");const f=rc(i),c={a_position:{numComponents:4,data:[-1,-1,-3,1,1,-1,-3,1,1,1,-4,1,-1,1,-4,1]},a_color:{numComponents:4,data:[0,0,0,1,0,0,20,1,0,20,0,1,20,0,0,1]},indices:{data:[0,1,3,2,3,1,0,3,1,2,1,3],type:i.UNSIGNED_SHORT}},u=kn(i,c),s=kn(i,{a_position:{numComponents:4,data:[-1,-1,0,1,3,-1,0,1,-1,3,0,1]},a_texcoord:{numComponents:2,data:[0,0,2,0,0,2]}}),l=kf(i),x={isHdrEnabled:!0,dynamicRange:5,whitePoint:20,isAntialiasingEnabled:!1};window.requestAnimationFrame(()=>{xt(x,e,t,i,l,f,u,s)})}window.onload=Lc;
