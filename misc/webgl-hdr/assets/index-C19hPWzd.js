var It=Object.defineProperty;var St=(e,n,r)=>n in e?It(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Se=(e,n,r)=>St(e,typeof n!="symbol"?n+"":n,r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let je=Float32Array;function ce(e,n,r){const t=new je(3);return e&&(t[0]=e),n&&(t[1]=n),r&&(t[2]=r),t}function ht(e,n,r){return r=r||new je(3),r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function Zn(e,n,r){r=r||new je(3);const t=e[2]*n[0]-e[0]*n[2],o=e[0]*n[1]-e[1]*n[0];return r[0]=e[1]*n[2]-e[2]*n[1],r[1]=t,r[2]=o,r}function ln(e,n){n=n||new je(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=Math.sqrt(r);return t>1e-5?(n[0]=e[0]/t,n[1]=e[1]/t,n[2]=e[2]/t):(n[0]=0,n[1]=0,n[2]=0),n}let b=Float32Array;function Lt(e){const n=b;return b=e,n}function Rt(e,n){return n=n||new b(16),n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function Ut(){return new b(16).fill(0)}function _r(e,n){return n=n||new b(16),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function Ar(e){return e=e||new b(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function vt(e,n){if(n=n||new b(16),n===e){let T;return T=e[1],e[1]=e[4],e[4]=T,T=e[2],e[2]=e[8],e[8]=T,T=e[3],e[3]=e[12],e[12]=T,T=e[6],e[6]=e[9],e[9]=T,T=e[7],e[7]=e[13],e[13]=T,T=e[11],e[11]=e[14],e[14]=T,n}const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],c=e[1*4+1],s=e[1*4+2],u=e[1*4+3],l=e[2*4+0],f=e[2*4+1],_=e[2*4+2],x=e[2*4+3],A=e[3*4+0],m=e[3*4+1],d=e[3*4+2],F=e[3*4+3];return n[0]=r,n[1]=i,n[2]=l,n[3]=A,n[4]=t,n[5]=c,n[6]=f,n[7]=m,n[8]=o,n[9]=s,n[10]=_,n[11]=d,n[12]=a,n[13]=u,n[14]=x,n[15]=F,n}function xr(e,n){n=n||new b(16);const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],c=e[1*4+1],s=e[1*4+2],u=e[1*4+3],l=e[2*4+0],f=e[2*4+1],_=e[2*4+2],x=e[2*4+3],A=e[3*4+0],m=e[3*4+1],d=e[3*4+2],F=e[3*4+3],T=_*F,P=d*x,y=s*F,N=d*u,h=s*x,S=_*u,M=o*F,w=d*a,B=o*x,D=_*a,C=o*u,Y=s*a,O=l*m,Q=A*f,G=i*m,g=A*c,H=i*f,we=l*c,Be=r*m,De=A*t,Ce=r*f,Ye=l*t,Oe=r*c,Qe=i*t,kn=T*c+N*f+h*m-(P*c+y*f+S*m),Kn=P*t+M*f+D*m-(T*t+w*f+B*m),qn=y*t+w*c+C*m-(N*t+M*c+Y*m),jn=S*t+B*c+Y*f-(h*t+D*c+C*f),R=1/(r*kn+i*Kn+l*qn+A*jn);return n[0]=R*kn,n[1]=R*Kn,n[2]=R*qn,n[3]=R*jn,n[4]=R*(P*i+y*l+S*A-(T*i+N*l+h*A)),n[5]=R*(T*r+w*l+B*A-(P*r+M*l+D*A)),n[6]=R*(N*r+M*i+Y*A-(y*r+w*i+C*A)),n[7]=R*(h*r+D*i+C*l-(S*r+B*i+Y*l)),n[8]=R*(O*u+g*x+H*F-(Q*u+G*x+we*F)),n[9]=R*(Q*a+Be*x+Ye*F-(O*a+De*x+Ce*F)),n[10]=R*(G*a+De*u+Oe*F-(g*a+Be*u+Qe*F)),n[11]=R*(we*a+Ce*u+Qe*x-(H*a+Ye*u+Oe*x)),n[12]=R*(G*_+we*d+Q*s-(H*d+O*s+g*_)),n[13]=R*(Ce*d+O*o+De*_-(Be*_+Ye*d+Q*o)),n[14]=R*(Be*s+Qe*d+g*o-(Oe*d+G*o+De*s)),n[15]=R*(Oe*_+H*o+Ye*s-(Ce*s+Qe*_+we*o)),n}function Xt(e,n,r){r=r||new b(16);const t=e[0],o=e[1],a=e[2],i=e[3],c=e[4],s=e[5],u=e[6],l=e[7],f=e[8],_=e[9],x=e[10],A=e[11],m=e[12],d=e[13],F=e[14],T=e[15],P=n[0],y=n[1],N=n[2],h=n[3],S=n[4],M=n[5],w=n[6],B=n[7],D=n[8],C=n[9],Y=n[10],O=n[11],Q=n[12],G=n[13],g=n[14],H=n[15];return r[0]=t*P+c*y+f*N+m*h,r[1]=o*P+s*y+_*N+d*h,r[2]=a*P+u*y+x*N+F*h,r[3]=i*P+l*y+A*N+T*h,r[4]=t*S+c*M+f*w+m*B,r[5]=o*S+s*M+_*w+d*B,r[6]=a*S+u*M+x*w+F*B,r[7]=i*S+l*M+A*w+T*B,r[8]=t*D+c*C+f*Y+m*O,r[9]=o*D+s*C+_*Y+d*O,r[10]=a*D+u*C+x*Y+F*O,r[11]=i*D+l*C+A*Y+T*O,r[12]=t*Q+c*G+f*g+m*H,r[13]=o*Q+s*G+_*g+d*H,r[14]=a*Q+u*G+x*g+F*H,r[15]=i*Q+l*G+A*g+T*H,r}function Mt(e,n,r){return r=r||Ar(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function wt(e,n){return n=n||ce(),n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Bt(e,n,r){r=r||ce();const t=n*4;return r[0]=e[t+0],r[1]=e[t+1],r[2]=e[t+2],r}function Dt(e,n,r,t){t!==e&&(t=_r(e,t));const o=r*4;return t[o+0]=n[0],t[o+1]=n[1],t[o+2]=n[2],t}function Ct(e,n,r,t,o){o=o||new b(16);const a=Math.tan(Math.PI*.5-.5*e),i=1/(r-t);return o[0]=a/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+t)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*t*i*2,o[15]=0,o}function Yt(e,n,r,t,o,a,i){return i=i||new b(16),i[0]=2/(n-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-r),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(n+e)/(e-n),i[13]=(t+r)/(r-t),i[14]=(a+o)/(o-a),i[15]=1,i}function Ot(e,n,r,t,o,a,i){i=i||new b(16);const c=n-e,s=t-r,u=o-a;return i[0]=2*o/c,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/s,i[6]=0,i[7]=0,i[8]=(e+n)/c,i[9]=(t+r)/s,i[10]=a/u,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*a/u,i[15]=0,i}let te,Ae,q;function Qt(e,n,r,t){return t=t||new b(16),te=te||ce(),Ae=Ae||ce(),q=q||ce(),ln(ht(e,n,q),q),ln(Zn(r,q,te),te),ln(Zn(q,te,Ae),Ae),t[0]=te[0],t[1]=te[1],t[2]=te[2],t[3]=0,t[4]=Ae[0],t[5]=Ae[1],t[6]=Ae[2],t[7]=0,t[8]=q[0],t[9]=q[1],t[10]=q[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Gt(e,n){return n=n||new b(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function gt(e,n,r){r=r||new b(16);const t=n[0],o=n[1],a=n[2],i=e[0],c=e[1],s=e[2],u=e[3],l=e[1*4+0],f=e[1*4+1],_=e[1*4+2],x=e[1*4+3],A=e[2*4+0],m=e[2*4+1],d=e[2*4+2],F=e[2*4+3],T=e[3*4+0],P=e[3*4+1],y=e[3*4+2],N=e[3*4+3];return e!==r&&(r[0]=i,r[1]=c,r[2]=s,r[3]=u,r[4]=l,r[5]=f,r[6]=_,r[7]=x,r[8]=A,r[9]=m,r[10]=d,r[11]=F),r[12]=i*t+l*o+A*a+T,r[13]=c*t+f*o+m*a+P,r[14]=s*t+_*o+d*a+y,r[15]=u*t+x*o+F*a+N,r}function Ht(e,n){n=n||new b(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=t,n[7]=0,n[8]=0,n[9]=-t,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function zt(e,n,r){r=r||new b(16);const t=e[4],o=e[5],a=e[6],i=e[7],c=e[8],s=e[9],u=e[10],l=e[11],f=Math.cos(n),_=Math.sin(n);return r[4]=f*t+_*c,r[5]=f*o+_*s,r[6]=f*a+_*u,r[7]=f*i+_*l,r[8]=f*c-_*t,r[9]=f*s-_*o,r[10]=f*u-_*a,r[11]=f*l-_*i,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Wt(e,n){n=n||new b(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=0,n[2]=-t,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=t,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Vt(e,n,r){r=r||new b(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],c=e[2*4+0],s=e[2*4+1],u=e[2*4+2],l=e[2*4+3],f=Math.cos(n),_=Math.sin(n);return r[0]=f*t-_*c,r[1]=f*o-_*s,r[2]=f*a-_*u,r[3]=f*i-_*l,r[8]=f*c+_*t,r[9]=f*s+_*o,r[10]=f*u+_*a,r[11]=f*l+_*i,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function $t(e,n){n=n||new b(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=t,n[2]=0,n[3]=0,n[4]=-t,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function kt(e,n,r){r=r||new b(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],c=e[1*4+0],s=e[1*4+1],u=e[1*4+2],l=e[1*4+3],f=Math.cos(n),_=Math.sin(n);return r[0]=f*t+_*c,r[1]=f*o+_*s,r[2]=f*a+_*u,r[3]=f*i+_*l,r[4]=f*c-_*t,r[5]=f*s-_*o,r[6]=f*u-_*a,r[7]=f*l-_*i,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Kt(e,n,r){r=r||new b(16);let t=e[0],o=e[1],a=e[2];const i=Math.sqrt(t*t+o*o+a*a);t/=i,o/=i,a/=i;const c=t*t,s=o*o,u=a*a,l=Math.cos(n),f=Math.sin(n),_=1-l;return r[0]=c+(1-c)*l,r[1]=t*o*_+a*f,r[2]=t*a*_-o*f,r[3]=0,r[4]=t*o*_-a*f,r[5]=s+(1-s)*l,r[6]=o*a*_+t*f,r[7]=0,r[8]=t*a*_+o*f,r[9]=o*a*_-t*f,r[10]=u+(1-u)*l,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function qt(e,n,r,t){t=t||new b(16);let o=n[0],a=n[1],i=n[2];const c=Math.sqrt(o*o+a*a+i*i);o/=c,a/=c,i/=c;const s=o*o,u=a*a,l=i*i,f=Math.cos(r),_=Math.sin(r),x=1-f,A=s+(1-s)*f,m=o*a*x+i*_,d=o*i*x-a*_,F=o*a*x-i*_,T=u+(1-u)*f,P=a*i*x+o*_,y=o*i*x+a*_,N=a*i*x-o*_,h=l+(1-l)*f,S=e[0],M=e[1],w=e[2],B=e[3],D=e[4],C=e[5],Y=e[6],O=e[7],Q=e[8],G=e[9],g=e[10],H=e[11];return t[0]=A*S+m*D+d*Q,t[1]=A*M+m*C+d*G,t[2]=A*w+m*Y+d*g,t[3]=A*B+m*O+d*H,t[4]=F*S+T*D+P*Q,t[5]=F*M+T*C+P*G,t[6]=F*w+T*Y+P*g,t[7]=F*B+T*O+P*H,t[8]=y*S+N*D+h*Q,t[9]=y*M+N*C+h*G,t[10]=y*w+N*Y+h*g,t[11]=y*B+N*O+h*H,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function jt(e,n){return n=n||new b(16),n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Zt(e,n,r){r=r||new b(16);const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0],r[1]=t*e[0*4+1],r[2]=t*e[0*4+2],r[3]=t*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=a*e[2*4+0],r[9]=a*e[2*4+1],r[10]=a*e[2*4+2],r[11]=a*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Jt(e,n,r){r=r||ce();const t=n[0],o=n[1],a=n[2],i=t*e[0*4+3]+o*e[1*4+3]+a*e[2*4+3]+e[3*4+3];return r[0]=(t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0]+e[3*4+0])/i,r[1]=(t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1]+e[3*4+1])/i,r[2]=(t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2]+e[3*4+2])/i,r}function eo(e,n,r){r=r||ce();const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0],r[1]=t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1],r[2]=t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2],r}function no(e,n,r){r=r||ce();const t=xr(e),o=n[0],a=n[1],i=n[2];return r[0]=o*t[0*4+0]+a*t[0*4+1]+i*t[0*4+2],r[1]=o*t[1*4+0]+a*t[1*4+1]+i*t[1*4+2],r[2]=o*t[2*4+0]+a*t[2*4+1]+i*t[2*4+2],r}var z=Object.freeze({__proto__:null,axisRotate:qt,axisRotation:Kt,copy:_r,create:Ut,frustum:Ot,getAxis:Bt,getTranslation:wt,identity:Ar,inverse:xr,lookAt:Qt,multiply:Xt,negate:Rt,ortho:Yt,perspective:Ct,rotateX:zt,rotateY:Vt,rotateZ:kt,rotationX:Ht,rotationY:Wt,rotationZ:$t,scale:Zt,scaling:jt,setAxis:Dt,setDefaultType:Lt,setTranslation:Mt,transformDirection:eo,transformNormal:no,transformPoint:Jt,translate:gt,translation:Gt,transpose:vt});const hn=5120,Ue=5121,Ln=5122,Rn=5123,Un=5124,vn=5125,Xn=5126,ro=32819,to=32820,oo=33635,ao=5131,io=33640,co=35899,so=35902,uo=36269,fo=34042,mr={};{const e=mr;e[hn]=Int8Array,e[Ue]=Uint8Array,e[Ln]=Int16Array,e[Rn]=Uint16Array,e[Un]=Int32Array,e[vn]=Uint32Array,e[Xn]=Float32Array,e[ro]=Uint16Array,e[to]=Uint16Array,e[oo]=Uint16Array,e[ao]=Uint16Array,e[io]=Uint32Array,e[co]=Uint32Array,e[so]=Uint32Array,e[uo]=Uint32Array,e[fo]=Uint32Array}function Mn(e){if(e instanceof Int8Array)return hn;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Ue;if(e instanceof Int16Array)return Ln;if(e instanceof Uint16Array)return Rn;if(e instanceof Int32Array)return Un;if(e instanceof Uint32Array)return vn;if(e instanceof Float32Array)return Xn;throw new Error("unsupported typed array type")}function dr(e){if(e===Int8Array)return hn;if(e===Uint8Array||e===Uint8ClampedArray)return Ue;if(e===Int16Array)return Ln;if(e===Uint16Array)return Rn;if(e===Int32Array)return Un;if(e===Uint32Array)return vn;if(e===Float32Array)return Xn;throw new Error("unsupported typed array type")}function Fr(e){const n=mr[e];if(!n)throw new Error("unknown gl type");return n}const ze=typeof SharedArrayBuffer<"u"?function(n){return n&&n.buffer&&(n.buffer instanceof ArrayBuffer||n.buffer instanceof SharedArrayBuffer)}:function(n){return n&&n.buffer&&n.buffer instanceof ArrayBuffer};function Tr(...e){console.error(...e)}const Jn=new Map;function Ze(e,n){if(!e||typeof e!="object")return!1;let r=Jn.get(n);r||(r=new WeakMap,Jn.set(n,r));let t=r.get(e);if(t===void 0){const o=Object.prototype.toString.call(e);t=o.substring(8,o.length-1)===n,r.set(e,t)}return t}function lo(e,n){return typeof WebGLBuffer<"u"&&Ze(n,"WebGLBuffer")}function Er(e,n){return typeof WebGLRenderbuffer<"u"&&Ze(n,"WebGLRenderbuffer")}function Je(e,n){return typeof WebGLTexture<"u"&&Ze(n,"WebGLTexture")}function _o(e,n){return typeof WebGLSampler<"u"&&Ze(n,"WebGLSampler")}const Pr=35044,Ee=34962,Ao=34963,xo=34660,mo=5120,Fo=5121,To=5122,Eo=5123,Po=5124,po=5125,pr=5126,yr={attribPrefix:""};function yo(e,n,r,t,o){e.bindBuffer(n,r),e.bufferData(n,t,o||Pr)}function br(e,n,r,t){if(lo(e,n))return n;r=r||Ee;const o=e.createBuffer();return yo(e,r,o,n,t),o}function Nr(e){return e==="indices"}function bo(e){return e===Int8Array||e===Uint8Array}function No(e){return e.length?e:e.data}const Io=/coord|texture/i,So=/color|colour/i;function ho(e,n){let r;if(Io.test(e)?r=2:So.test(e)?r=4:r=3,n%r>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${r} but ${n} values is not evenly divisible by ${r}. You should specify it.`);return r}function Lo(e,n,r){return e.numComponents||e.size||ho(n,r||No(e).length)}function Ir(e,n){if(ze(e))return e;if(ze(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type?wn(e.type):void 0;return r||(Nr(n)?r=Uint16Array:r=Float32Array),new r(e.data)}function Ro(e){return typeof e=="number"?e:e?dr(e):pr}function wn(e){return typeof e=="number"?Fr(e):e||Float32Array}function Uo(e,n){return{buffer:n.buffer,numValues:2*3*4,type:Ro(n.type),arrayType:wn(n.type)}}function vo(e,n){const r=n.data||n,t=wn(n.type),o=r*t.BYTES_PER_ELEMENT,a=e.createBuffer();return e.bindBuffer(Ee,a),e.bufferData(Ee,o,n.drawType||Pr),{buffer:a,numValues:r,type:dr(t),arrayType:t}}function Xo(e,n,r){const t=Ir(n,r);return{arrayType:t.constructor,buffer:br(e,t,void 0,n.drawType),type:Mn(t),numValues:0}}function Mo(e,n){const r={};return Object.keys(n).forEach(function(t){if(!Nr(t)){const o=n[t],a=o.attrib||o.name||o.attribName||yr.attribPrefix+t;if(o.value){if(!Array.isArray(o.value)&&!ze(o.value))throw new Error("array.value is not array or typedarray");r[a]={value:o.value}}else{let i;o.buffer&&o.buffer instanceof WebGLBuffer?i=Uo:typeof o=="number"||typeof o.data=="number"?i=vo:i=Xo;const{buffer:c,type:s,numValues:u,arrayType:l}=i(e,o,t),f=o.normalize!==void 0?o.normalize:bo(l),_=Lo(o,t,u);r[a]={buffer:c,numComponents:_,type:s,normalize:f,stride:o.stride||0,offset:o.offset||0,divisor:o.divisor===void 0?void 0:o.divisor,drawType:o.drawType}}}}),e.bindBuffer(Ee,null),r}function wo(e,n){return n===mo||n===Fo?1:n===To||n===Eo?2:n===Po||n===po||n===pr?4:0}const _n=["position","positions","a_position"];function Bo(e,n){let r,t;for(t=0;t<_n.length&&(r=_n[t],!(r in n||(r=yr.attribPrefix+r,r in n)));++t);t===_n.length&&(r=Object.keys(n)[0]);const o=n[r];if(!o.buffer)return 1;e.bindBuffer(Ee,o.buffer);const a=e.getBufferParameter(Ee,xo);e.bindBuffer(Ee,null);const i=wo(e,o.type),c=a/i,s=o.numComponents||o.size,u=c/s;if(u%1!==0)throw new Error(`numComponents ${s} not correct for length ${length}`);return u}function er(e,n,r){const t=Mo(e,n),o=Object.assign({},r||{});o.attribs=Object.assign({},r?r.attribs:{},t);const a=n.indices;if(a){const i=Ir(a,"indices");o.indices=br(e,i,Ao),o.numElements=i.length,o.elementType=Mn(i)}else o.numElements||(o.numElements=Bo(e,o.attribs));return o}function Xe(e){return!!e.texStorage2D}const Sr=function(){const e={},n={};function r(t){const o=t.constructor.name;if(!e[o]){for(const a in t)if(typeof t[a]=="number"){const i=n[t[a]];n[t[a]]=i?`${i} | ${a}`:a}e[o]=!0}}return function(o,a){return r(o),n[a]||(typeof a=="number"?`0x${a.toString(16)}`:a)}}(),fe={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},be=ze,hr=function(){let e;return function(){return e=e||(typeof document<"u"&&document.createElement?document.createElement("canvas").getContext("2d"):null),e}}(),mn=6406,W=6407,p=6408,dn=6409,Fn=6410,ye=6402,Tn=34041,We=33071,Do=9728,Co=9729,re=3553,ne=34067,se=32879,ue=35866,en=34069,Yo=34070,Oo=34071,Qo=34072,Go=34073,go=34074,En=10241,Pn=10240,Ve=10242,$e=10243,nr=32882,Ho=33082,zo=33083,Wo=33084,Vo=33085,$o=34892,ko=34893,Bn=3317,Lr=3314,Rr=32878,Ur=3316,vr=3315,Xr=32877,Ko=37443,qo=37441,jo=37440,Zo=33321,Jo=36756,ea=33325,na=33326,ra=33330,ta=33329,oa=33338,aa=33337,ia=33340,ca=33339,sa=33323,ua=36757,fa=33327,la=33328,_a=33336,Aa=33335,xa=33332,ma=33331,da=33334,Fa=33333,Ta=32849,Ea=35905,Pa=36194,pa=36758,ya=35898,ba=35901,Na=34843,Ia=34837,Sa=36221,ha=36239,La=36215,Ra=36233,Ua=36209,va=36227,Xa=32856,Ma=35907,wa=36759,Ba=32855,Da=32854,Ca=32857,Ya=34842,Oa=34836,Qa=36220,Ga=36238,ga=36975,Ha=36214,za=36232,Wa=36226,Va=36208,$a=33189,ka=33190,Ka=36012,qa=36013,ja=35056,oe=5120,I=5121,Ge=5122,pe=5123,ge=5124,xe=5125,U=5126,rr=32819,tr=32820,or=33635,V=5131,he=36193,An=33640,Za=35899,Ja=35902,ei=36269,ni=34042,Le=33319,me=33320,Re=6403,de=36244,Fe=36248,ae=36249,ri={};{const e=ri;e[mn]={numColorComponents:1},e[dn]={numColorComponents:1},e[Fn]={numColorComponents:2},e[W]={numColorComponents:3},e[p]={numColorComponents:4},e[Re]={numColorComponents:1},e[de]={numColorComponents:1},e[Le]={numColorComponents:2},e[me]={numColorComponents:2},e[W]={numColorComponents:3},e[Fe]={numColorComponents:3},e[p]={numColorComponents:4},e[ae]={numColorComponents:4},e[ye]={numColorComponents:1},e[Tn]={numColorComponents:2}}let xn;function nn(e){if(!xn){const n={};n[mn]={textureFormat:mn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,V,he,U]},n[dn]={textureFormat:dn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,V,he,U]},n[Fn]={textureFormat:Fn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[I,V,he,U]},n[W]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[I,V,he,U,or]},n[p]={textureFormat:p,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[I,V,he,U,rr,tr]},n[ye]={textureFormat:ye,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[xe,pe]},n[Zo]={textureFormat:Re,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[I]},n[Jo]={textureFormat:Re,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[oe]},n[ea]={textureFormat:Re,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[U,V]},n[na]={textureFormat:Re,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[U]},n[ra]={textureFormat:de,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[I]},n[ta]={textureFormat:de,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[oe]},n[xa]={textureFormat:de,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[pe]},n[ma]={textureFormat:de,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ge]},n[da]={textureFormat:de,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[xe]},n[Fa]={textureFormat:de,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ge]},n[sa]={textureFormat:Le,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[I]},n[ua]={textureFormat:Le,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[oe]},n[fa]={textureFormat:Le,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[U,V]},n[la]={textureFormat:Le,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[U]},n[_a]={textureFormat:me,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[I]},n[Aa]={textureFormat:me,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[oe]},n[oa]={textureFormat:me,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[pe]},n[aa]={textureFormat:me,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ge]},n[ia]={textureFormat:me,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[xe]},n[ca]={textureFormat:me,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[ge]},n[Ta]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[Ea]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[I]},n[Pa]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[I,or]},n[pa]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[oe]},n[ya]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[U,V,Za]},n[ba]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[U,V,Ja]},n[Na]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[U,V]},n[Ia]={textureFormat:W,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[U]},n[Sa]={textureFormat:Fe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[I]},n[ha]={textureFormat:Fe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[oe]},n[La]={textureFormat:Fe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[pe]},n[Ra]={textureFormat:Fe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ge]},n[Ua]={textureFormat:Fe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[xe]},n[va]={textureFormat:Fe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[ge]},n[Xa]={textureFormat:p,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[Ma]={textureFormat:p,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},n[wa]={textureFormat:p,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[oe]},n[Ba]={textureFormat:p,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[I,tr,An]},n[Da]={textureFormat:p,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[I,rr]},n[Ca]={textureFormat:p,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[An]},n[Ya]={textureFormat:p,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[U,V]},n[Oa]={textureFormat:p,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[U]},n[Qa]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},n[Ga]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[oe]},n[ga]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[An]},n[Ha]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[pe]},n[za]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ge]},n[Wa]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[ge]},n[Va]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[xe]},n[$a]={textureFormat:ye,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[pe,xe]},n[ka]={textureFormat:ye,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[xe]},n[Ka]={textureFormat:ye,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[U]},n[ja]={textureFormat:Tn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ni]},n[qa]={textureFormat:Tn,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ei]},Object.keys(n).forEach(function(r){const t=n[r];t.bytesPerElementMap={},t.bytesPerElement.forEach(function(o,a){const i=t.type[a];t.bytesPerElementMap[i]=o})}),xn=n}return xn[e]}function ti(e,n){const r=nn(e);if(!r)throw"unknown internal format";const t=r.bytesPerElementMap[n];if(t===void 0)throw"unknown internal format";return t}function Ie(e){const n=nn(e);if(!n)throw"unknown internal format";return{format:n.textureFormat,type:n.type[0]}}function ar(e){return(e&e-1)===0}function oi(e,n,r,t){if(!Xe(e))return ar(n)&&ar(r);const o=nn(t);if(!o)throw"unknown internal format";return o.colorRenderable&&o.textureFilterable}function ai(e){const n=nn(e);if(!n)throw"unknown internal format";return n.textureFilterable}function Mr(e,n,r){return be(n)?Mn(n):r||I}function He(e,n,r,t,o){if(o%1!==0)throw"can't guess dimensions";if(!r&&!t){const a=Math.sqrt(o/(n===ne?6:1));a%1===0?(r=a,t=a):(r=o,t=1)}else if(t){if(!r&&(r=o/t,r%1))throw"can't guess dimensions"}else if(t=o/r,t%1)throw"can't guess dimensions";return{width:r,height:t}}function Ne(e,n){n.colorspaceConversion!==void 0&&e.pixelStorei(Ko,n.colorspaceConversion),n.premultiplyAlpha!==void 0&&e.pixelStorei(qo,n.premultiplyAlpha),n.flipY!==void 0&&e.pixelStorei(jo,n.flipY)}function wr(e){e.pixelStorei(Bn,4),Xe(e)&&(e.pixelStorei(Lr,0),e.pixelStorei(Rr,0),e.pixelStorei(Ur,0),e.pixelStorei(vr,0),e.pixelStorei(Xr,0))}function ii(e,n,r,t){t.minMag&&(r.call(e,n,En,t.minMag),r.call(e,n,Pn,t.minMag)),t.min&&r.call(e,n,En,t.min),t.mag&&r.call(e,n,Pn,t.mag),t.wrap&&(r.call(e,n,Ve,t.wrap),r.call(e,n,$e,t.wrap),(n===se||_o(e,n))&&r.call(e,n,nr,t.wrap)),t.wrapR&&r.call(e,n,nr,t.wrapR),t.wrapS&&r.call(e,n,Ve,t.wrapS),t.wrapT&&r.call(e,n,$e,t.wrapT),t.minLod!==void 0&&r.call(e,n,Ho,t.minLod),t.maxLod!==void 0&&r.call(e,n,zo,t.maxLod),t.baseLevel!==void 0&&r.call(e,n,Wo,t.baseLevel),t.maxLevel!==void 0&&r.call(e,n,Vo,t.maxLevel),t.compareFunc!==void 0&&r.call(e,n,ko,t.compareFunc),t.compareMode!==void 0&&r.call(e,n,$o,t.compareMode)}function Br(e,n,r){const t=r.target||re;e.bindTexture(t,n),ii(e,t,e.texParameteri,r)}function ci(e){return e=e||fe.textureColor,be(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function pn(e,n,r,t,o,a){r=r||fe.textureOptions,a=a||p;const i=r.target||re;if(t=t||r.width,o=o||r.height,e.bindTexture(i,n),oi(e,t,o,a))e.generateMipmap(i);else{const c=ai(a)?Co:Do;e.texParameteri(i,En,c),e.texParameteri(i,Pn,c),e.texParameteri(i,Ve,We),e.texParameteri(i,$e,We)}}function ve(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function yn(e,n){return n=n||{},n.cubeFaceOrder||[en,Yo,Oo,Qo,Go,go]}function bn(e,n){const t=yn(e,n).map(function(o,a){return{face:o,ndx:a}});return t.sort(function(o,a){return o.face-a.face}),t}function Dr(e,n,r,t){t=t||fe.textureOptions;const o=t.target||re,a=t.level||0;let i=r.width,c=r.height;const s=t.internalFormat||t.format||p,u=Ie(s),l=t.format||u.format,f=t.type||u.type;if(Ne(e,t),e.bindTexture(o,n),o===ne){const _=r.width,x=r.height;let A,m;if(_/6===x)A=x,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===_)A=_,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(_/3===x/2)A=_/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(_/2===x/3)A=_/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(r.src?r.src:r.nodeName);const d=hr();d?(d.canvas.width=A,d.canvas.height=A,i=A,c=A,bn(e,t).forEach(function(F){const T=m[F.ndx*2+0]*A,P=m[F.ndx*2+1]*A;d.drawImage(r,T,P,A,A,0,0,A,A),e.texImage2D(F.face,a,s,l,f,d.canvas)}),d.canvas.width=1,d.canvas.height=1):typeof createImageBitmap<"u"&&(i=A,c=A,bn(e,t).forEach(function(F){const T=m[F.ndx*2+0]*A,P=m[F.ndx*2+1]*A;e.texImage2D(F.face,a,s,A,A,0,l,f,null),createImageBitmap(r,T,P,A,A,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(y){Ne(e,t),e.bindTexture(o,n),e.texImage2D(F.face,a,s,l,f,y),ve(t)&&pn(e,n,t,i,c,s)})}))}else if(o===se||o===ue){const _=Math.min(r.width,r.height),x=Math.max(r.width,r.height),A=x/_;if(A%1!==0)throw"can not compute 3D dimensions of element";const m=r.width===x?1:0,d=r.height===x?1:0;e.pixelStorei(Bn,1),e.pixelStorei(Lr,r.width),e.pixelStorei(Rr,0),e.pixelStorei(Xr,0),e.texImage3D(o,a,s,_,_,_,0,l,f,null);for(let F=0;F<A;++F){const T=F*_*m,P=F*_*d;e.pixelStorei(Ur,T),e.pixelStorei(vr,P),e.texSubImage3D(o,a,0,0,F,_,_,1,l,f,r)}wr(e)}else e.texImage2D(o,a,s,l,f,r);ve(t)&&pn(e,n,t,i,c,s),Br(e,n,t)}function Me(){}function si(e){if(typeof document<"u"){const n=document.createElement("a");return n.href=e,n.hostname===location.hostname&&n.port===location.port&&n.protocol===location.protocol}else{const n=new URL(location.href).origin;return new URL(e,location.href).origin===n}}function ui(e,n){return n===void 0&&!si(e)?"anonymous":n}function fi(e,n,r){r=r||Me;let t;if(n=n!==void 0?n:fe.crossOrigin,n=ui(e,n),typeof Image<"u"){t=new Image,n!==void 0&&(t.crossOrigin=n);const o=function(){t.removeEventListener("error",a),t.removeEventListener("load",i),t=null},a=function(){const s="couldn't load image: "+e;Tr(s),r(s,t),o()},i=function(){r(null,t),o()};return t.addEventListener("error",a),t.addEventListener("load",i),t.src=e,t}else if(typeof ImageBitmap<"u"){let o,a;const i=function(){r(o,a)},c={};n&&(c.mode="cors"),fetch(e,c).then(function(s){if(!s.ok)throw s;return s.blob()}).then(function(s){return createImageBitmap(s,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(s){a=s,setTimeout(i)}).catch(function(s){o=s,setTimeout(i)}),t=null}return t}function Cr(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof ImageData<"u"&&e instanceof ImageData||typeof HTMLElement<"u"&&e instanceof HTMLElement}function Dn(e,n,r){return Cr(e)?(setTimeout(function(){r(null,e)}),e):fi(e,n,r)}function Cn(e,n,r){r=r||fe.textureOptions;const t=r.target||re;if(e.bindTexture(t,n),r.color===!1)return;const o=ci(r.color);if(t===ne)for(let a=0;a<6;++a)e.texImage2D(en+a,0,p,1,1,0,p,I,o);else t===se||t===ue?e.texImage3D(t,0,p,1,1,1,0,p,I,o):e.texImage2D(t,0,p,1,1,0,p,I,o)}function li(e,n,r,t){return t=t||Me,r=r||fe.textureOptions,Cn(e,n,r),r=Object.assign({},r),Dn(r.src,r.crossOrigin,function(a,i){a?t(a,n,i):(Dr(e,n,i,r),t(null,n,i))})}function _i(e,n,r,t){t=t||Me;const o=r.src;if(o.length!==6)throw"there must be 6 urls for a cubemap";const a=r.level||0,i=r.internalFormat||r.format||p,c=Ie(i),s=r.format||c.format,u=r.type||I,l=r.target||re;if(l!==ne)throw"target must be TEXTURE_CUBE_MAP";Cn(e,n,r),r=Object.assign({},r);let f=6;const _=[],x=yn(e,r);let A;function m(d){return function(F,T){--f,F?_.push(F):T.width!==T.height?_.push("cubemap face img is not a square: "+T.src):(Ne(e,r),e.bindTexture(l,n),f===5?yn().forEach(function(P){e.texImage2D(P,a,i,s,u,T)}):e.texImage2D(d,a,i,s,u,T),ve(r)&&e.generateMipmap(l)),f===0&&t(_.length?_:void 0,n,A)}}A=o.map(function(d,F){return Dn(d,r.crossOrigin,m(x[F]))})}function Ai(e,n,r,t){t=t||Me;const o=r.src,a=r.internalFormat||r.format||p,i=Ie(a),c=r.format||i.format,s=r.type||I,u=r.target||ue;if(u!==se&&u!==ue)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";Cn(e,n,r),r=Object.assign({},r);let l=o.length;const f=[];let _;const x=r.level||0;let A=r.width,m=r.height;const d=o.length;let F=!0;function T(P){return function(y,N){if(--l,y)f.push(y);else{if(Ne(e,r),e.bindTexture(u,n),F){F=!1,A=r.width||N.width,m=r.height||N.height,e.texImage3D(u,x,a,A,m,d,0,c,s,null);for(let h=0;h<d;++h)e.texSubImage3D(u,x,0,0,h,A,m,1,c,s,N)}else{let h=N,S;(N.width!==A||N.height!==m)&&(S=hr(),h=S.canvas,S.canvas.width=A,S.canvas.height=m,S.drawImage(N,0,0,A,m)),e.texSubImage3D(u,x,0,0,P,A,m,1,c,s,h),S&&h===S.canvas&&(S.canvas.width=0,S.canvas.height=0)}ve(r)&&e.generateMipmap(u)}l===0&&t(f.length?f:void 0,n,_)}}_=o.map(function(P,y){return Dn(P,r.crossOrigin,T(y))})}function xi(e,n,r,t){t=t||fe.textureOptions;const o=t.target||re;e.bindTexture(o,n);let a=t.width,i=t.height,c=t.depth;const s=t.level||0,u=t.internalFormat||t.format||p,l=Ie(u),f=t.format||l.format,_=t.type||Mr(e,r,l.type);if(be(r))r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));else{const d=Fr(_);r=new d(r)}const x=ti(u,_),A=r.byteLength/x;if(A%1)throw"length wrong size for format: "+Sr(e,f);let m;if(o===se||o===ue)if(!a&&!i&&!c){const d=Math.cbrt(A);if(d%1!==0)throw"can't guess cube size of array of numElements: "+A;a=d,i=d,c=d}else a&&(!i||!c)?(m=He(e,o,i,c,A/a),i=m.width,c=m.height):i&&(!a||!c)?(m=He(e,o,a,c,A/i),a=m.width,c=m.height):(m=He(e,o,a,i,A/c),a=m.width,i=m.height);else m=He(e,o,a,i,A),a=m.width,i=m.height;if(wr(e),e.pixelStorei(Bn,t.unpackAlignment||1),Ne(e,t),o===ne){const d=x/r.BYTES_PER_ELEMENT,F=A/6*d;bn(e,t).forEach(T=>{const P=F*T.ndx,y=r.subarray(P,P+F);e.texImage2D(T.face,s,u,a,i,0,f,_,y)})}else o===se||o===ue?e.texImage3D(o,s,u,a,i,c,0,f,_,r):e.texImage2D(o,s,u,a,i,0,f,_,r);return{width:a,height:i,depth:c,type:_}}function mi(e,n,r){const t=r.target||re;e.bindTexture(t,n);const o=r.level||0,a=r.internalFormat||r.format||p,i=Ie(a),c=r.format||i.format,s=r.type||i.type;if(Ne(e,r),t===ne)for(let u=0;u<6;++u)e.texImage2D(en+u,o,a,r.width,r.height,0,c,s,null);else t===se||t===ue?e.texImage3D(t,o,a,r.width,r.height,r.depth,0,c,s,null):e.texImage2D(t,o,a,r.width,r.height,0,c,s,null)}function di(e,n,r){r=r||Me,n=n||fe.textureOptions;const t=e.createTexture(),o=n.target||re;let a=n.width||1,i=n.height||1;const c=n.internalFormat||p;e.bindTexture(o,t),o===ne&&(e.texParameteri(o,Ve,We),e.texParameteri(o,$e,We));let s=n.src;if(s)if(typeof s=="function"&&(s=s(e,n)),typeof s=="string")li(e,t,n,r);else if(be(s)||Array.isArray(s)&&(typeof s[0]=="number"||Array.isArray(s[0])||be(s[0]))){const u=xi(e,t,s,n);a=u.width,i=u.height}else Array.isArray(s)&&(typeof s[0]=="string"||Cr(s[0]))?o===ne?_i(e,t,n,r):Ai(e,t,n,r):(Dr(e,t,s,n),a=s.width,i=s.height);else mi(e,t,n);return ve(n)&&pn(e,t,n,a,i,c),Br(e,t,n),t}function Fi(e,n,r,t,o,a){t=t||r.width,o=o||r.height,a=a||r.depth;const i=r.target||re;e.bindTexture(i,n);const c=r.level||0,s=r.internalFormat||r.format||p,u=Ie(s),l=r.format||u.format;let f;const _=r.src;if(_&&(be(_)||Array.isArray(_)&&typeof _[0]=="number")?f=r.type||Mr(e,_,u.type):f=r.type||u.type,i===ne)for(let x=0;x<6;++x)e.texImage2D(en+x,c,s,t,o,0,l,f,null);else i===se||i===ue?e.texImage3D(i,c,s,t,o,a,0,l,f,null):e.texImage2D(i,c,s,t,o,0,l,f,null)}const Yn=Tr;function Yr(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const ke=33984,rn=34962,Ti=34963,Ei=35713,Pi=35714,pi=35632,yi=35633,bi=35981,Or=35718,Ni=35721,Ii=35971,Si=35382,hi=35396,Li=35398,Ri=35392,Ui=35395,tn=5126,Qr=35664,Gr=35665,gr=35666,On=5124,Hr=35667,zr=35668,Wr=35669,Vr=35670,$r=35671,kr=35672,Kr=35673,qr=35674,jr=35675,Zr=35676,vi=35678,Xi=35680,Mi=35679,wi=35682,Bi=35685,Di=35686,Ci=35687,Yi=35688,Oi=35689,Qi=35690,Gi=36289,gi=36292,Hi=36293,Qn=5125,Jr=36294,et=36295,nt=36296,zi=36298,Wi=36299,Vi=36300,$i=36303,ki=36306,Ki=36307,qi=36308,ji=36311,on=3553,an=34067,Gn=32879,cn=35866,E={};function rt(e,n){return E[n].bindPoint}function Zi(e,n){return function(r){e.uniform1f(n,r)}}function Ji(e,n){return function(r){e.uniform1fv(n,r)}}function ec(e,n){return function(r){e.uniform2fv(n,r)}}function nc(e,n){return function(r){e.uniform3fv(n,r)}}function rc(e,n){return function(r){e.uniform4fv(n,r)}}function tt(e,n){return function(r){e.uniform1i(n,r)}}function ot(e,n){return function(r){e.uniform1iv(n,r)}}function at(e,n){return function(r){e.uniform2iv(n,r)}}function it(e,n){return function(r){e.uniform3iv(n,r)}}function ct(e,n){return function(r){e.uniform4iv(n,r)}}function tc(e,n){return function(r){e.uniform1ui(n,r)}}function oc(e,n){return function(r){e.uniform1uiv(n,r)}}function ac(e,n){return function(r){e.uniform2uiv(n,r)}}function ic(e,n){return function(r){e.uniform3uiv(n,r)}}function cc(e,n){return function(r){e.uniform4uiv(n,r)}}function sc(e,n){return function(r){e.uniformMatrix2fv(n,!1,r)}}function uc(e,n){return function(r){e.uniformMatrix3fv(n,!1,r)}}function fc(e,n){return function(r){e.uniformMatrix4fv(n,!1,r)}}function lc(e,n){return function(r){e.uniformMatrix2x3fv(n,!1,r)}}function _c(e,n){return function(r){e.uniformMatrix3x2fv(n,!1,r)}}function Ac(e,n){return function(r){e.uniformMatrix2x4fv(n,!1,r)}}function xc(e,n){return function(r){e.uniformMatrix4x2fv(n,!1,r)}}function mc(e,n){return function(r){e.uniformMatrix3x4fv(n,!1,r)}}function dc(e,n){return function(r){e.uniformMatrix4x3fv(n,!1,r)}}function v(e,n,r,t){const o=rt(e,n);return Xe(e)?function(a){let i,c;!a||Je(e,a)?(i=a,c=null):(i=a.texture,c=a.sampler),e.uniform1i(t,r),e.activeTexture(ke+r),e.bindTexture(o,i),e.bindSampler(r,c)}:function(a){e.uniform1i(t,r),e.activeTexture(ke+r),e.bindTexture(o,a)}}function X(e,n,r,t,o){const a=rt(e,n),i=new Int32Array(o);for(let c=0;c<o;++c)i[c]=r+c;return Xe(e)?function(c){e.uniform1iv(t,i),c.forEach(function(s,u){e.activeTexture(ke+i[u]);let l,f;!s||Je(e,s)?(l=s,f=null):(l=s.texture,f=s.sampler),e.bindSampler(r,f),e.bindTexture(a,l)})}:function(c){e.uniform1iv(t,i),c.forEach(function(s,u){e.activeTexture(ke+i[u]),e.bindTexture(a,s)})}}E[tn]={Type:Float32Array,size:4,setter:Zi,arraySetter:Ji};E[Qr]={Type:Float32Array,size:8,setter:ec,cols:2};E[Gr]={Type:Float32Array,size:12,setter:nc,cols:3};E[gr]={Type:Float32Array,size:16,setter:rc,cols:4};E[On]={Type:Int32Array,size:4,setter:tt,arraySetter:ot};E[Hr]={Type:Int32Array,size:8,setter:at,cols:2};E[zr]={Type:Int32Array,size:12,setter:it,cols:3};E[Wr]={Type:Int32Array,size:16,setter:ct,cols:4};E[Qn]={Type:Uint32Array,size:4,setter:tc,arraySetter:oc};E[Jr]={Type:Uint32Array,size:8,setter:ac,cols:2};E[et]={Type:Uint32Array,size:12,setter:ic,cols:3};E[nt]={Type:Uint32Array,size:16,setter:cc,cols:4};E[Vr]={Type:Uint32Array,size:4,setter:tt,arraySetter:ot};E[$r]={Type:Uint32Array,size:8,setter:at,cols:2};E[kr]={Type:Uint32Array,size:12,setter:it,cols:3};E[Kr]={Type:Uint32Array,size:16,setter:ct,cols:4};E[qr]={Type:Float32Array,size:32,setter:sc,rows:2,cols:2};E[jr]={Type:Float32Array,size:48,setter:uc,rows:3,cols:3};E[Zr]={Type:Float32Array,size:64,setter:fc,rows:4,cols:4};E[Bi]={Type:Float32Array,size:32,setter:lc,rows:2,cols:3};E[Di]={Type:Float32Array,size:32,setter:Ac,rows:2,cols:4};E[Ci]={Type:Float32Array,size:48,setter:_c,rows:3,cols:2};E[Yi]={Type:Float32Array,size:48,setter:mc,rows:3,cols:4};E[Oi]={Type:Float32Array,size:64,setter:xc,rows:4,cols:2};E[Qi]={Type:Float32Array,size:64,setter:dc,rows:4,cols:3};E[vi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Xi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[Mi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Gn};E[wi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Gi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};E[gi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};E[Hi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[zi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Wi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Gn};E[Vi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[$i]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};E[ki]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Ki]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Gn};E[qi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[ji]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};function sn(e,n){return function(r){if(r.value)switch(e.disableVertexAttribArray(n),r.value.length){case 4:e.vertexAttrib4fv(n,r.value);break;case 3:e.vertexAttrib3fv(n,r.value);break;case 2:e.vertexAttrib2fv(n,r.value);break;case 1:e.vertexAttrib1fv(n,r.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(rn,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,r.numComponents||r.size,r.type||tn,r.normalize||!1,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function le(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4iv(n,r.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(rn,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||On,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function un(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4uiv(n,r.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(rn,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||Qn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function gn(e,n,r){const t=r.size,o=r.count;return function(a){e.bindBuffer(rn,a.buffer);const i=a.size||a.numComponents||t,c=i/o,s=a.type||tn,l=E[s].size*i,f=a.normalize||!1,_=a.offset||0,x=l/o;for(let A=0;A<o;++A)e.enableVertexAttribArray(n+A),e.vertexAttribPointer(n+A,c,s,f,l,_+x*A),e.vertexAttribDivisor&&e.vertexAttribDivisor(n+A,a.divisor||0)}}const L={};L[tn]={size:4,setter:sn};L[Qr]={size:8,setter:sn};L[Gr]={size:12,setter:sn};L[gr]={size:16,setter:sn};L[On]={size:4,setter:le};L[Hr]={size:8,setter:le};L[zr]={size:12,setter:le};L[Wr]={size:16,setter:le};L[Qn]={size:4,setter:un};L[Jr]={size:8,setter:un};L[et]={size:12,setter:un};L[nt]={size:16,setter:un};L[Vr]={size:4,setter:le};L[$r]={size:8,setter:le};L[kr]={size:12,setter:le};L[Kr]={size:16,setter:le};L[qr]={size:4,setter:gn,count:2};L[jr]={size:9,setter:gn,count:3};L[Zr]={size:16,setter:gn,count:4};const Fc=/ERROR:\s*\d+:(\d+)/gi;function Tc(e,n="",r=0){const t=[...n.matchAll(Fc)],o=new Map(t.map((a,i)=>{const c=parseInt(a[1]),s=t[i+1],u=s?s.index:n.length,l=n.substring(a.index,u);return[c-1,l]}));return e.split(`
`).map((a,i)=>{const c=o.get(i);return`${i+1+r}: ${a}${c?`

^^^ ${c}`:""}`}).join(`
`)}const ir=/^[ \t]*\n/;function st(e){let n=0;return ir.test(e)&&(n=1,e=e.replace(ir,"")),{lineOffset:n,shaderSource:e}}function Ec(e,n){return e.errorCallback(n),e.callback&&setTimeout(()=>{e.callback(`${n}
${e.errors.join(`
`)}`)}),null}function Pc(e,n,r,t){if(t=t||Yn,!e.getShaderParameter(r,Ei)){const a=e.getShaderInfoLog(r),{lineOffset:i,shaderSource:c}=st(e.getShaderSource(r)),s=`${Tc(c,a,i)}
Error compiling ${Sr(e,n)}: ${a}`;return t(s),s}return""}function Hn(e,n,r){let t,o,a;if(typeof n=="function"&&(r=n,n=void 0),typeof e=="function")r=e,e=void 0;else if(e&&!Array.isArray(e)){const u=e;r=u.errorCallback,e=u.attribLocations,t=u.transformFeedbackVaryings,o=u.transformFeedbackMode,a=u.callback}const i=r||Yn,c=[],s={errorCallback(u,...l){c.push(u),i(u,...l)},transformFeedbackVaryings:t,transformFeedbackMode:o,callback:a,errors:c};{let u={};Array.isArray(e)?e.forEach(function(l,f){u[l]=n?n[f]:f}):u=e||{},s.attribLocations=u}return s}const pc=["VERTEX_SHADER","FRAGMENT_SHADER"];function yc(e,n){if(n.indexOf("frag")>=0)return pi;if(n.indexOf("vert")>=0)return yi}function bc(e,n,r){const t=e.getAttachedShaders(n);for(const o of t)r.has(o)&&e.deleteShader(o);e.deleteProgram(n)}const Nc=(e=0)=>new Promise(n=>setTimeout(n,e));function Ic(e,n,r){const t=e.createProgram(),{attribLocations:o,transformFeedbackVaryings:a,transformFeedbackMode:i}=Hn(r);for(let c=0;c<n.length;++c){let s=n[c];if(typeof s=="string"){const u=Yr(s),l=u?u.text:s;let f=e[pc[c]];u&&u.type&&(f=yc(e,u.type)||f),s=e.createShader(f),e.shaderSource(s,st(l).shaderSource),e.compileShader(s),e.attachShader(t,s)}}Object.entries(o).forEach(([c,s])=>e.bindAttribLocation(t,s,c));{let c=a;c&&(c.attribs&&(c=c.attribs),Array.isArray(c)||(c=Object.keys(c)),e.transformFeedbackVaryings(t,c,i||bi))}return e.linkProgram(t),t}function Sc(e,n,r,t,o){const a=Hn(r,t,o),i=new Set(n),c=Ic(e,n,a);function s(u,l){const f=Lc(u,l,a.errorCallback);return f&&bc(u,l,i),f}if(a.callback){hc(e,c).then(()=>{const u=s(e,c);a.callback(u,u?void 0:c)});return}return s(e,c)?void 0:c}async function hc(e,n){const r=e.getExtension("KHR_parallel_shader_compile"),t=r?(a,i)=>a.getProgramParameter(i,r.COMPLETION_STATUS_KHR):()=>!0;let o=0;do await Nc(o),o=1e3/60;while(!t(e,n))}function Lc(e,n,r){if(r=r||Yn,!e.getProgramParameter(n,Pi)){const o=e.getProgramInfoLog(n);r(`Error in program linking: ${o}`);const i=e.getAttachedShaders(n).map(c=>Pc(e,e.getShaderParameter(c,e.SHADER_TYPE),c,r));return`${o}
${i.filter(c=>c).join(`
`)}`}}function Rc(e,n,r,t,o){return Sc(e,n,r,t,o)}function ut(e){const n=e.name;return n.startsWith("gl_")||n.startsWith("webgl_")}const Uc=/(\.|\[|]|\w+)/g,vc=e=>e>="0"&&e<="9";function Xc(e,n,r,t){const o=e.split(Uc).filter(c=>c!=="");let a=0,i="";for(;;){const c=o[a++];i+=c;const s=vc(c[0]),u=s?parseInt(c):c;if(s&&(i+=o[a++]),a===o.length){r[u]=n;break}else{const f=o[a++],_=f==="[",x=r[u]||(_?[]:{});r[u]=x,r=x,t[i]=t[i]||function(A){return function(m){ft(A,m)}}(x),i+=f}}}function Mc(e,n){let r=0;function t(c,s,u){const l=s.name.endsWith("[0]"),f=s.type,_=E[f];if(!_)throw new Error(`unknown type: 0x${f.toString(16)}`);let x;if(_.bindPoint){const A=r;r+=s.size,l?x=_.arraySetter(e,f,A,u,s.size):x=_.setter(e,f,A,u,s.size)}else _.arraySetter&&l?x=_.arraySetter(e,u):x=_.setter(e,u);return x.location=u,x}const o={},a={},i=e.getProgramParameter(n,Or);for(let c=0;c<i;++c){const s=e.getActiveUniform(n,c);if(ut(s))continue;let u=s.name;u.endsWith("[0]")&&(u=u.substr(0,u.length-3));const l=e.getUniformLocation(n,s.name);if(l){const f=t(n,s,l);o[u]=f,Xc(u,f,a,o)}}return o}function wc(e,n){const r={},t=e.getProgramParameter(n,Ii);for(let o=0;o<t;++o){const a=e.getTransformFeedbackVarying(n,o);r[a.name]={index:o,type:a.type,size:a.size}}return r}function Bc(e,n){const r=e.getProgramParameter(n,Or),t=[],o=[];for(let c=0;c<r;++c){o.push(c),t.push({});const s=e.getActiveUniform(n,c);t[c].name=s.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(c){const s=c[0],u=c[1];e.getActiveUniforms(n,o,e[s]).forEach(function(l,f){t[f][u]=l})});const a={},i=e.getProgramParameter(n,Si);for(let c=0;c<i;++c){const s=e.getActiveUniformBlockName(n,c),u={index:e.getUniformBlockIndex(n,s),usedByVertexShader:e.getActiveUniformBlockParameter(n,c,hi),usedByFragmentShader:e.getActiveUniformBlockParameter(n,c,Li),size:e.getActiveUniformBlockParameter(n,c,Ri),uniformIndices:e.getActiveUniformBlockParameter(n,c,Ui)};u.used=u.usedByVertexShader||u.usedByFragmentShader,a[s]=u}return{blockSpecs:a,uniformData:t}}function ft(e,n){for(const r in n){const t=e[r];typeof t=="function"?t(n[r]):ft(e[r],n[r])}}function zn(e,...n){const r=e.uniformSetters||e,t=n.length;for(let o=0;o<t;++o){const a=n[o];if(Array.isArray(a)){const i=a.length;for(let c=0;c<i;++c)zn(r,a[c])}else for(const i in a){const c=r[i];c&&c(a[i])}}}const J=zn;function Dc(e,n){const r={},t=e.getProgramParameter(n,Ni);for(let o=0;o<t;++o){const a=e.getActiveAttrib(n,o);if(ut(a))continue;const i=e.getAttribLocation(n,a.name),c=L[a.type],s=c.setter(e,i,c);s.location=i,r[a.name]=s}return r}function Cc(e,n){for(const r in n){const t=e[r];t&&t(n[r])}}function K(e,n,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(Cc(n.attribSetters||n,r.attribs),r.indices&&e.bindBuffer(Ti,r.indices))}function cr(e,n){const r=Mc(e,n),t=Dc(e,n),o={program:n,uniformSetters:r,attribSetters:t};return Xe(e)&&(o.uniformBlockSpec=Bc(e,n),o.transformFeedbackInfo=wc(e,n)),o}const Yc=/\s|{|}|;/;function k(e,n,r,t,o){const a=Hn(r,t,o),i=[];if(n=n.map(function(u){if(!Yc.test(u)){const l=Yr(u);if(l)u=l.text;else{const f=`no element with id: ${u}`;a.errorCallback(f),i.push(f)}}return u}),i.length)return Ec(a,"");const c=a.callback;c&&(a.callback=(u,l)=>{c(u,u?void 0:cr(e,l))});const s=Rc(e,n,a);return s?cr(e,s):null}const lt=36160,Te=36161,Oc=3553,Qc=5121,Gc=6402,gc=6408,Hc=33190,zc=36012,Wc=35056,Vc=36013,$c=32854,kc=32855,Kc=36194,_t=33189,At=6401,xt=36168,Wn=34041,Nn=36064,fn=36096,mt=36128,Vn=33306,In=33071,Sn=9729,dt=[{format:gc,type:Qc,min:Sn,wrap:In},{format:Wn}],$={};$[Wn]=Vn;$[At]=mt;$[xt]=mt;$[Gc]=fn;$[_t]=fn;$[Hc]=fn;$[zc]=fn;$[Wc]=Vn;$[Vc]=Vn;function qc(e,n){return $[e]||$[n]}const _e={};_e[$c]=!0;_e[kc]=!0;_e[Kc]=!0;_e[Wn]=!0;_e[_t]=!0;_e[At]=!0;_e[xt]=!0;function jc(e){return _e[e]}const Zc=32;function Jc(e){return e>=Nn&&e<Nn+Zc}function es(e,n,r,t){const o=lt,a=e.createFramebuffer();e.bindFramebuffer(o,a),r=r||e.drawingBufferWidth,t=t||e.drawingBufferHeight,n=n||dt;const i=[],c={framebuffer:a,attachments:[],width:r,height:t};return n.forEach(function(s,u){let l=s.attachment;const f=s.samples,_=s.format;let x=s.attachmentPoint||qc(_,s.internalFormat);if(x||(x=Nn+u),Jc(x)&&i.push(x),!l)if(f!==void 0||jc(_))l=e.createRenderbuffer(),e.bindRenderbuffer(Te,l),f>1?e.renderbufferStorageMultisample(Te,f,_,r,t):e.renderbufferStorage(Te,_,r,t);else{const A=Object.assign({},s);A.width=r,A.height=t,A.auto===void 0&&(A.auto=!1,A.min=A.min||A.minMag||Sn,A.mag=A.mag||A.minMag||Sn,A.wrapS=A.wrapS||A.wrap||In,A.wrapT=A.wrapT||A.wrap||In),l=di(e,A)}if(Er(e,l))e.framebufferRenderbuffer(o,x,Te,l);else if(Je(e,l))s.layer!==void 0?e.framebufferTextureLayer(o,x,l,s.level||0,s.layer):e.framebufferTexture2D(o,x,s.target||Oc,l,s.level||0);else throw new Error("unknown attachment type");c.attachments.push(l)}),e.drawBuffers&&e.drawBuffers(i),c}function ns(e,n,r,t,o){t=t||e.drawingBufferWidth,o=o||e.drawingBufferHeight,n.width=t,n.height=o,r=r||dt,r.forEach(function(a,i){const c=n.attachments[i],s=a.format,u=a.samples;if(u!==void 0||Er(e,c))e.bindRenderbuffer(Te,c),u>1?e.renderbufferStorageMultisample(Te,u,s,t,o):e.renderbufferStorage(Te,s,t,o);else if(Je(e,c))Fi(e,c,a,t,o);else throw new Error("unknown attachment type")})}function ee(e,n,r){r=r||lt,n?(e.bindFramebuffer(r,n.framebuffer),e.viewport(0,0,n.width,n.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}const ie=Object.freeze({superwhite:"superwhite",colorCanvas:"color-canvas",brightnessCanvas:"brightness-canvas",hdrToggle:"enable-hdr",antialiasToggle:"enable-antialias",hdrWarning:"hdr-warning",displayP3ToSrgbFilter:"display-p3-to-srgb",fpsCounter:"fps-counter"}),rs=4;function ts(e){const n=[];for(let r=0;r<rs;++r)n.push(es(e,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height));return n}function os(e,n){for(const r of n)ns(e,r,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height)}function Ft(e,n){const r=[];let t=1;for(let o=0;o<e;++o)r.push(sr(3*t,t)),t*=3;return r.push(sr(n,t)),r}function sr(e,n){const r=Math.ceil(1*e/n),t=2*r,o=r,a=2**t,i=[];for(let c=0;c<=o;++c)i.push(as(t,c)/a);return i.reverse(),`#version 300 es

precision highp float;

uniform vec2 u_pixel_size;
uniform sampler2D u_texture;

in vec2 v_texcoord;

out vec4 out_color;

const float kernel[${o+1}] = float[${o+1}](
    ${i.join(", ")}
);

void main()
{
    vec4 result = kernel[0] * texture(u_texture, v_texcoord);

    for (int i = 1; i < ${o+1}; ++i) {
        vec2 offset = float(i) * (float(${n}) * u_pixel_size);
        result += kernel[i] * (
            texture(u_texture, v_texcoord + offset)
            + texture(u_texture, v_texcoord - offset)
        );
    }

    out_color = result;
}
`}function as(e,n){e-n<n&&(n=e-n);let r=1;for(let t=1;t<=n;++t)r*=e-t+1,r=Math.floor(r/t);return r}const is=`#version 300 es\r
\r
precision highp float;\r
\r
uniform mat4 u_transform;\r
\r
in vec4 a_position;\r
in vec3 a_normal;\r
in vec4 a_diffuse_color;\r
in vec4 a_specular_color;\r
in vec3 a_reflection_info;\r
\r
out vec3 v_position;\r
out vec3 v_normal;\r
out vec4 v_diffuse_color;\r
out vec4 v_specular_color;\r
out float v_shininess;\r
\r
// Blinn-Phong reflection model\r
\r
void main()\r
{\r
    float diffuse_reflection = a_reflection_info.x;\r
    float specular_reflection = a_reflection_info.y;\r
    float shininess = a_reflection_info.z;\r
\r
    vec4 position = u_transform * a_position;\r
    gl_Position = position;\r
\r
    v_position = a_position.xyz;\r
    v_normal = a_normal;\r
    v_diffuse_color = vec4(\r
        diffuse_reflection * a_diffuse_color.rgb,\r
        a_diffuse_color.a\r
    );\r
    v_specular_color = vec4(\r
        specular_reflection * a_specular_color.rgb,\r
        a_specular_color.a\r
    );\r
    v_shininess = shininess;\r
}\r
`,Z=`#version 300 es\r
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
`,cs=`#version 300 es\r
\r
precision highp float;\r
\r
#define MAX_LIGHT_COUNT 16\r
\r
struct Light\r
{\r
    vec3 position;\r
    vec3 color;\r
    vec3 spotlight_direction;\r
    float spotlight_narrowness;\r
    bool is_directional_light;\r
};\r
\r
uniform vec3 u_camera_position;\r
uniform int u_light_count;\r
uniform Light u_lights[MAX_LIGHT_COUNT];\r
uniform vec3 u_ambient_light;\r
\r
in vec3 v_position;\r
in vec3 v_normal;\r
in vec4 v_diffuse_color;\r
in vec4 v_specular_color;\r
in float v_shininess;\r
\r
out vec4 out_color;\r
\r
// Blinn-Phong reflection model\r
\r
// TODO:\r
// - implement directional lights and spotlights\r
// - deferred rendering\r
// - add textures and normal maps\r
\r
void main()\r
{\r
    vec3 normal = normalize(v_normal);\r
    vec3 camera_dir = normalize(u_camera_position - v_position);\r
\r
    vec3 diffuse = u_ambient_light;\r
    vec3 specular = vec3(0.0);\r
\r
    for (int i = 0; i < u_light_count; ++i)\r
    {\r
        vec3 light_dir = u_lights[i].position - v_position;\r
        vec3 light_color = u_lights[i].color;\r
\r
        float reciprocal_dist = 1.0 / length(light_dir);\r
        light_dir *= reciprocal_dist;\r
\r
        // Inverse square law\r
        float mult = min(reciprocal_dist * reciprocal_dist, 10.0);\r
        light_color *= mult;\r
\r
        vec3 halfway_dir = normalize(light_dir + camera_dir);\r
\r
        vec3 diffuse_light = max(dot(normal, light_dir), 0.0) * light_color;\r
        diffuse += diffuse_light;\r
\r
        specular += dot(diffuse_light, vec3(1.0)) > 0.0\r
            ? pow(max(dot(normal, halfway_dir), 0.0), v_shininess)\r
                * light_color\r
            : vec3(0.0);\r
    }\r
\r
    out_color\r
        = vec4(diffuse, 1.0) * v_diffuse_color\r
        + vec4(specular, 1.0) * v_specular_color;\r
}\r
`,ss=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float u_bloom_threshold;\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
void main()\r
{\r
    vec4 color = texture(u_texture, v_texcoord);\r
    color.rgb = sqrt(max(color.rgb - vec3(u_bloom_threshold), vec3(0.0)));\r
\r
    out_color = color;\r
}\r
`,us=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float u_bloom_threshold;\r
uniform sampler2D u_scene_texture;\r
uniform sampler2D u_bloom_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
void main()\r
{\r
    out_color = vec4(\r
        min(texture(u_scene_texture, v_texcoord).rgb, vec3(u_bloom_threshold))\r
        + pow(texture(u_bloom_texture, v_texcoord).rgb, vec3(2.0)),\r
        1.0\r
    );\r
}\r
`,fs=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float u_brightness_mult; // Should be 1.5x the actual value\r
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
    vec3 color = texture(u_texture, v_texcoord).rgb;\r
\r
    float input_luminance = calc_luminance(color);\r
\r
    if (input_luminance == 0.0)\r
    {\r
        out_color = vec4(0.0);\r
        return;\r
    }\r
\r
    float input_luminance_squared = input_luminance * input_luminance;\r
\r
    float output_luminance = 0.9 * (\r
        input_luminance_squared * input_luminance\r
    ) / (1.0 + input_luminance_squared) + 0.1 * input_luminance;\r
\r
    output_luminance *= u_brightness_mult;\r
\r
    output_luminance = output_luminance / (1.0 + output_luminance);\r
\r
    float ratio = output_luminance / input_luminance;\r
\r
    vec3 tonemapped = min(ratio * color, 1.0);\r
\r
    // FXAA shader requires luma in alpha channel\r
    float luma = calc_luma(tonemapped);\r
    out_color = vec4(tonemapped, luma);\r
}\r
`,ls=`#version 300 es\r
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
`,_s=`#version 300 es\r
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
`,As=`#version 300 es\r
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
`,xs=`#version 300 es\r
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
`,Tt=1;function ms(e,n){const r=[];for(const t of Ft(Tt,n))r.push(k(e,[Z,t]));return{blurRadius:n,programs:r}}function ds(e,n){const r=Et(e,n.canvas.height),t=[];for(const o of Ft(Tt,r))t.push(k(n,[Z,o]));return{blurRadius:r,programs:t}}function Fs(e,n,r){const t=Et(n,r.canvas.height);if(t!==e.blurRadius){for(const o of e.programs)r.deleteProgram(o.program);Object.assign(e,ms(r,t))}}function Et(e,n){return e.bloomRadius/100*n*(Math.sin(e.verticalFov/2)/Math.sin(80/2))}function Ts(e,n){const r=k(n,[is,cs]),t=k(n,[Z,ss]),o=ds(e,n),a=k(n,[Z,us]),i=k(n,[Z,fs]),c=k(n,[Z,ls]),s=k(n,[Z,_s]),u=k(n,[Z,As]),l=k(n,[Z,xs]);return{sceneProgramInfo:r,bloomExtractBrightProgramInfo:t,bloomBlurPrograms:o,bloomCompositeProgramInfo:a,tonemapProgramInfo:i,antialiasProgramInfo:c,colorCanvasProgramInfo:s,brightnessCanvasProgramInfo:u,sdrCanvasProgramInfo:l}}function Es(e,n,r,t,o,a,i){r.useProgram(o.program),ee(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),K(r,o.attribSetters,i),J(o.uniformSetters,{u_transform:z.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),n.drawImage(r.canvas,0,0),r.useProgram(a.program),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),K(r,a.attribSetters,i),J(a.uniformSetters,{u_transform:z.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements)}function Ps(e,n,r,t,o){n.useProgram(t.program),ee(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,t.attribSetters,o),J(t.uniformSetters,{u_transform:z.identity(),u_texture:r.attachments[0]}),n.drawArrays(n.TRIANGLES,0,o.numElements)}function ps(e,n,r,t,o,a,i,c,s){[r[0],r[3]]=[r[3],r[0]],n.useProgram(t.program),ee(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE);const u=e.bloomThresholdRatio*e.dynamicRange;K(n,t.attribSetters,s),J(t.uniformSetters,{u_transform:z.identity(),u_bloom_threshold:u,u_texture:r[3].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements);for(const l of o.programs)n.useProgram(l.program),ee(n,r[2]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,l.attribSetters,s),J(l.uniformSetters,{u_transform:z.identity(),u_pixel_size:[1/n.canvas.width,0],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements),ee(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,l.attribSetters,s),J(l.uniformSetters,{u_transform:z.identity(),u_pixel_size:[0,1/n.canvas.height],u_texture:r[2].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements);if(n.useProgram(a.program),ee(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,a.attribSetters,s),J(a.uniformSetters,{u_transform:z.identity(),u_bloom_threshold:u,u_scene_texture:r[3].attachments[0],u_bloom_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements),n.useProgram(i.program),ee(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,i.attribSetters,s),J(i.uniformSetters,{u_transform:z.identity(),u_brightness_mult:1.5/e.dynamicRange,u_texture:r[0].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements),!e.isAntialiasingEnabled){[r[0],r[1]]=[r[1],r[0]];return}n.useProgram(c.program),ee(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,c.attribSetters,s),J(c.uniformSetters,{u_transform:z.identity(),u_reciprocal_resolution:[1/n.canvas.width,1/n.canvas.height],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements)}function ys(e,n){return z.inverse(z.lookAt(e,n,[0,1,0]))}function bs(e,n){return z.perspective(n*(Math.PI/180),e.canvas.width/e.canvas.height,.1,100)}let Ke=5,qe=0,Pt=0,pt=0,yt=0,bt=0,$n=!1;window.addEventListener("pointerdown",e=>{yt=e.screenX,bt=e.screenY,Pt=Ke,pt=qe,$n=!0});window.addEventListener("pointerup",e=>{$n=!1});window.addEventListener("pointermove",e=>{$n&&(Ke=Math.max(1,Math.min(10,Pt+10*-(e.screenY-bt)/screen.height)),qe=(pt-2*Math.PI*(e.screenX-yt)/screen.width)%(2*Math.PI))});function Ns(e,n,r,t,o){n.useProgram(t.program),ee(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.enable(n.DEPTH_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),K(n,t.attribSetters,o);const a=Ke*Math.sin(qe),i=.5,c=-5+Ke*Math.cos(qe),s=(2+Math.sin(performance.now()/1e3))/3;zn(t.uniformSetters,{u_transform:z.multiply(bs(n,e.verticalFov),ys([a,i,c],[0,-2,-5])),u_camera_position:[a,i,c],u_light_count:3,u_lights:[{position:[4,-2,5],color:[75,75,75*s]},{position:[-4,-2,-9],color:[75,75,75*s]},{position:[4,0,-8],color:[150,150,150*s]}],u_ambient_light:[.05,.05,.05]}),n.drawArrays(n.TRIANGLES,0,o.numElements)}var ur=function(e,n,r){if(r||arguments.length===2)for(var t=0,o=n.length,a;t<o;t++)(a||!(t in n))&&(a||(a=Array.prototype.slice.call(n,0,t)),a[t]=n[t]);return e.concat(a||Array.prototype.slice.call(n))},Is=function(){function e(n,r,t){this.name=n,this.version=r,this.os=t,this.type="browser"}return e}(),Ss=function(){function e(n){this.version=n,this.type="node",this.name="node",this.os=process.platform}return e}(),hs=function(){function e(n,r,t,o){this.name=n,this.version=r,this.os=t,this.bot=o,this.type="bot-device"}return e}(),Ls=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),Rs=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),Us=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,vs=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,fr=3,Xs=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",Us]],lr=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Ms(e){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Rs:typeof navigator<"u"?Bs(navigator.userAgent):Cs()}function ws(e){return e!==""&&Xs.reduce(function(n,r){var t=r[0],o=r[1];if(n)return n;var a=o.exec(e);return!!a&&[t,a]},!1)}function Bs(e){var n=ws(e);if(!n)return null;var r=n[0],t=n[1];if(r==="searchbot")return new Ls;var o=t[1]&&t[1].split(".").join("_").split("_").slice(0,3);o?o.length<fr&&(o=ur(ur([],o,!0),Ys(fr-o.length),!0)):o=[];var a=o.join("."),i=Ds(e),c=vs.exec(e);return c&&c[1]?new hs(r,a,i,c[1]):new Is(r,a,i)}function Ds(e){for(var n=0,r=lr.length;n<r;n++){var t=lr[n],o=t[0],a=t[1],i=a.exec(e);if(i)return o}return null}function Cs(){var e=typeof process<"u"&&process.version;return e?new Ss(process.version.slice(1)):null}function Ys(e){for(var n=[],r=0;r<e;r++)n.push("0");return n}function Pe(e){return document.querySelector(`#${e}`)??(()=>{throw new Error(`could not get #${e}`)})()}function Os(e){const n=e.getBoundingClientRect(),r=Math.round(n.right*devicePixelRatio)-Math.round(n.left*devicePixelRatio),t=Math.round(n.bottom*devicePixelRatio)-Math.round(n.top*devicePixelRatio);return e.width!==r||e.height!==t?(e.width=r,e.height=t,!0):!1}function Qs(e,n,r,t){var s;e.isHdrEnabled=Pe(ie.hdrToggle).checked,e.isAntialiasingEnabled=Pe(ie.antialiasToggle).checked;const o=Pe(ie.hdrWarning);let a;const i=window.matchMedia("(dynamic-range: high)").matches,c=((s=Ms())==null?void 0:s.name)??"unknown";i?c==="safari"?a="HDR is supported, but colors might not appear correctly on Safari.":c==="edge-chromium"?a="HDR is supported, but might not be displayed at full brightness on Edge.":a="":(a="HDR is not supported.",c!=="chrome"&&(a+=" If your device supports HDR, try using Chrome."),e.isHdrEnabled=!1),o.textContent!==a&&(o.textContent=a),e.isHdrEnabled?(n.style.visibility!=="visible"||r.style.visibility!=="visible"||t.style["mix-blend-mode"]!=="multiply")&&(n.style.visibility="visible",r.style.visibility="visible",t.style["mix-blend-mode"]="multiply"):(n.style.visibility!=="hidden"||r.style.visibility!=="hidden"||t.style["mix-blend-mode"]!=="normal")&&(n.style.visibility="hidden",r.style.visibility="hidden",t.style["mix-blend-mode"]="normal"),e.dynamicRange=e.isHdrEnabled?5:1}class Gs{constructor(){Se(this,"_data");Se(this,"_frontIdx");Se(this,"_backIdx");Se(this,"_size");this._data=[],this._frontIdx=0,this._backIdx=0,this._size=0}front(){return this._data[this._frontIdx]}back(){const n=this._backIdx===0?this._data.length-1:this._backIdx-1;return this._data[n]}enqueue(n){this._data.length===0?(this._data=Array(4).fill(null),this._frontIdx=0,this._backIdx=0):this._size===this._data.length&&(this._data=this._data.slice(this._frontIdx).concat(this._data.slice(0,this._backIdx)).concat(Array(this._data.length).fill(null)),this._frontIdx=0,this._backIdx=this._size),this._data[this._backIdx++]=n,this._backIdx===this._data.length&&(this._backIdx=0),++this._size}dequeue(){const n=this._data[this._frontIdx];return this._data[this._frontIdx++]=null,this._frontIdx===this._data.length&&(this._frontIdx=0),--this._size,n}get length(){return this._size}}const j=new Gs;function gs(){if(j.enqueue(performance.now()),j.back()===j.front())return;for(;j.back()-j.front()>2e3;)j.dequeue();const e=Pe(ie.fpsCounter),n=(j.length-1)/((j.back()-j.front())/1e3),r=`FPS: ${Math.round(n)}`;e.textContent!==r&&(e.textContent=r)}function Nt(e,n,r,t,o,a,i,c){gs(),Hs(e,n,r,t,o,a,i,c),window.requestAnimationFrame(()=>{Nt(e,n,r,t,o,a,i,c)})}function Hs(e,n,r,t,o,a,i,c){Qs(e,n,r.canvas,t.canvas);const s=r.filter;Os(r.canvas)&&(r.filter=s,t.canvas.width=r.canvas.width,t.canvas.height=r.canvas.height,os(t,o)),Fs(a.bloomBlurPrograms,e,t),Ns(e,t,o,a.sceneProgramInfo,i),ps(e,t,o,a.bloomExtractBrightProgramInfo,a.bloomBlurPrograms,a.bloomCompositeProgramInfo,a.tonemapProgramInfo,a.antialiasProgramInfo,c),e.isHdrEnabled?Es(e,r,t,o[0],a.colorCanvasProgramInfo,a.brightnessCanvasProgramInfo,c):Ps(e,t,o[0],a.sdrCanvasProgramInfo,c)}function zs(){const e={isHdrEnabled:!0,dynamicRange:5,isAntialiasingEnabled:!1,verticalFov:80,bloomThresholdRatio:2,bloomRadius:3},n=Pe(ie.superwhite),r={alpha:!1,colorSpace:"display-p3",desynchronized:!1,willReadFrequently:!1},o=Pe(ie.colorCanvas).getContext("2d",r)??(()=>{throw new Error("could not get CanvasRenderingContext2D")})();o.filter=`url(#${ie.displayP3ToSrgbFilter})`;const a={alpha:!1,depth:!1,stencil:!1,desynchronized:!1,antialias:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"default",preserveDrawingBuffer:!1},c=Pe(ie.brightnessCanvas).getContext("webgl2",a)??(()=>{throw new Error("cannot get WebGL2RenderingContext")})();if(!c.getExtension("EXT_color_buffer_float"))throw new Error("could not get EXT_color_buffer_float");const s=Ts(e,c),u=.5,l=5,f=50,_=500,A=er(c,{a_position:{numComponents:4,data:[-1,-3,-4,1,1,-3,-4,1,-1,-1,-4,1,1,-1,-4,1,-1,-1,-4,1,1,-3,-4,1,1,-3,-4,1,1,-3,-6,1,1,-1,-4,1,1,-1,-6,1,1,-1,-4,1,1,-3,-6,1,1,-3,-6,1,-1,-3,-6,1,1,-1,-6,1,-1,-1,-6,1,1,-1,-6,1,-1,-3,-6,1,-1,-3,-6,1,-1,-3,-4,1,-1,-1,-6,1,-1,-1,-4,1,-1,-1,-6,1,-1,-3,-4,1,-1,-1,-4,1,1,-1,-4,1,-1,-1,-6,1,1,-1,-6,1,-1,-1,-6,1,1,-1,-4,1,-10,-5,5,1,10,-5,5,1,-10,-5,-15,1,10,-5,-15,1,-10,-5,-15,1,10,-5,5,1]},a_normal:{numComponents:3,data:[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]},a_diffuse_color:{numComponents:4,data:[.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.15,.15,.1,1,.15,.15,.1,1,.15,.15,.1,1,.15,.15,.1,1,.15,.15,.1,1,.15,.15,.1,1]},a_specular_color:{numComponents:4,data:[.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.15,.15,.15,1,.15,.15,.15,1,.15,.15,.15,1,.15,.15,.15,1,.15,.15,.15,1,.15,.15,.15,1]},a_reflection_info:{numComponents:3,data:[u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,f,u,l,_,u,l,_,u,l,_,u,l,_,u,l,_,u,l,_]}}),d=er(c,{a_position:{numComponents:4,data:[-1,-1,0,1,3,-1,0,1,-1,3,0,1]},a_texcoord:{numComponents:2,data:[0,0,2,0,0,2]}}),F=ts(c);window.requestAnimationFrame(()=>{Nt(e,n,o,c,F,s,A,d)})}window.onload=zs;
