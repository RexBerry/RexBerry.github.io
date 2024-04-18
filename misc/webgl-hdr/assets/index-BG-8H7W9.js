var St=Object.defineProperty;var ht=(e,n,r)=>n in e?St(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var be=(e,n,r)=>(ht(e,typeof n!="symbol"?n+"":n,r),r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let qe=Float32Array;function ie(e,n,r){const t=new qe(3);return e&&(t[0]=e),n&&(t[1]=n),r&&(t[2]=r),t}function Lt(e,n,r){return r=r||new qe(3),r[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function $n(e,n,r){r=r||new qe(3);const t=e[2]*n[0]-e[0]*n[2],o=e[0]*n[1]-e[1]*n[0];return r[0]=e[1]*n[2]-e[2]*n[1],r[1]=t,r[2]=o,r}function ln(e,n){n=n||new qe(3);const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=Math.sqrt(r);return t>1e-5?(n[0]=e[0]/t,n[1]=e[1]/t,n[2]=e[2]/t):(n[0]=0,n[1]=0,n[2]=0),n}let y=Float32Array;function Rt(e){const n=y;return y=e,n}function Ut(e,n){return n=n||new y(16),n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=-e[3],n[4]=-e[4],n[5]=-e[5],n[6]=-e[6],n[7]=-e[7],n[8]=-e[8],n[9]=-e[9],n[10]=-e[10],n[11]=-e[11],n[12]=-e[12],n[13]=-e[13],n[14]=-e[14],n[15]=-e[15],n}function vt(){return new y(16).fill(0)}function Ar(e,n){return n=n||new y(16),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function xr(e){return e=e||new y(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Xt(e,n){if(n=n||new y(16),n===e){let T;return T=e[1],e[1]=e[4],e[4]=T,T=e[2],e[2]=e[8],e[8]=T,T=e[3],e[3]=e[12],e[12]=T,T=e[6],e[6]=e[9],e[9]=T,T=e[7],e[7]=e[13],e[13]=T,T=e[11],e[11]=e[14],e[14]=T,n}const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],c=e[1*4+1],s=e[1*4+2],f=e[1*4+3],_=e[2*4+0],u=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],m=e[3*4+1],d=e[3*4+2],F=e[3*4+3];return n[0]=r,n[1]=i,n[2]=_,n[3]=A,n[4]=t,n[5]=c,n[6]=u,n[7]=m,n[8]=o,n[9]=s,n[10]=l,n[11]=d,n[12]=a,n[13]=f,n[14]=x,n[15]=F,n}function mr(e,n){n=n||new y(16);const r=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],c=e[1*4+1],s=e[1*4+2],f=e[1*4+3],_=e[2*4+0],u=e[2*4+1],l=e[2*4+2],x=e[2*4+3],A=e[3*4+0],m=e[3*4+1],d=e[3*4+2],F=e[3*4+3],T=l*F,P=d*x,p=s*F,I=d*f,h=s*x,S=l*f,M=o*F,w=d*a,D=o*x,O=l*a,B=o*f,C=s*a,Y=_*m,Q=A*u,G=i*m,H=A*c,g=i*u,Xe=_*c,Me=r*m,we=A*t,De=r*u,Oe=_*t,Be=r*c,Ce=i*t,zn=T*c+I*u+h*m-(P*c+p*u+S*m),Wn=P*t+M*u+O*m-(T*t+w*u+D*m),Vn=p*t+w*c+B*m-(I*t+M*c+C*m),kn=S*t+D*c+C*u-(h*t+O*c+B*u),R=1/(r*zn+i*Wn+_*Vn+A*kn);return n[0]=R*zn,n[1]=R*Wn,n[2]=R*Vn,n[3]=R*kn,n[4]=R*(P*i+p*_+S*A-(T*i+I*_+h*A)),n[5]=R*(T*r+w*_+D*A-(P*r+M*_+O*A)),n[6]=R*(I*r+M*i+C*A-(p*r+w*i+B*A)),n[7]=R*(h*r+O*i+B*_-(S*r+D*i+C*_)),n[8]=R*(Y*f+H*x+g*F-(Q*f+G*x+Xe*F)),n[9]=R*(Q*a+Me*x+Oe*F-(Y*a+we*x+De*F)),n[10]=R*(G*a+we*f+Be*F-(H*a+Me*f+Ce*F)),n[11]=R*(Xe*a+De*f+Ce*x-(g*a+Oe*f+Be*x)),n[12]=R*(G*l+Xe*d+Q*s-(g*d+Y*s+H*l)),n[13]=R*(De*d+Y*o+we*l-(Me*l+Oe*d+Q*o)),n[14]=R*(Me*s+Ce*d+H*o-(Be*d+G*o+we*s)),n[15]=R*(Be*l+g*o+Oe*s-(De*s+Ce*l+Xe*o)),n}function Mt(e,n,r){r=r||new y(16);const t=e[0],o=e[1],a=e[2],i=e[3],c=e[4],s=e[5],f=e[6],_=e[7],u=e[8],l=e[9],x=e[10],A=e[11],m=e[12],d=e[13],F=e[14],T=e[15],P=n[0],p=n[1],I=n[2],h=n[3],S=n[4],M=n[5],w=n[6],D=n[7],O=n[8],B=n[9],C=n[10],Y=n[11],Q=n[12],G=n[13],H=n[14],g=n[15];return r[0]=t*P+c*p+u*I+m*h,r[1]=o*P+s*p+l*I+d*h,r[2]=a*P+f*p+x*I+F*h,r[3]=i*P+_*p+A*I+T*h,r[4]=t*S+c*M+u*w+m*D,r[5]=o*S+s*M+l*w+d*D,r[6]=a*S+f*M+x*w+F*D,r[7]=i*S+_*M+A*w+T*D,r[8]=t*O+c*B+u*C+m*Y,r[9]=o*O+s*B+l*C+d*Y,r[10]=a*O+f*B+x*C+F*Y,r[11]=i*O+_*B+A*C+T*Y,r[12]=t*Q+c*G+u*H+m*g,r[13]=o*Q+s*G+l*H+d*g,r[14]=a*Q+f*G+x*H+F*g,r[15]=i*Q+_*G+A*H+T*g,r}function wt(e,n,r){return r=r||xr(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]),r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function Dt(e,n){return n=n||ie(),n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Ot(e,n,r){r=r||ie();const t=n*4;return r[0]=e[t+0],r[1]=e[t+1],r[2]=e[t+2],r}function Bt(e,n,r,t){t!==e&&(t=Ar(e,t));const o=r*4;return t[o+0]=n[0],t[o+1]=n[1],t[o+2]=n[2],t}function Ct(e,n,r,t,o){o=o||new y(16);const a=Math.tan(Math.PI*.5-.5*e),i=1/(r-t);return o[0]=a/n,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+t)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*t*i*2,o[15]=0,o}function Yt(e,n,r,t,o,a,i){return i=i||new y(16),i[0]=2/(n-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-r),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(n+e)/(e-n),i[13]=(t+r)/(r-t),i[14]=(a+o)/(o-a),i[15]=1,i}function Qt(e,n,r,t,o,a,i){i=i||new y(16);const c=n-e,s=t-r,f=o-a;return i[0]=2*o/c,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/s,i[6]=0,i[7]=0,i[8]=(e+n)/c,i[9]=(t+r)/s,i[10]=a/f,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*a/f,i[15]=0,i}let te,_e,j;function Gt(e,n,r,t){return t=t||new y(16),te=te||ie(),_e=_e||ie(),j=j||ie(),ln(Lt(e,n,j),j),ln($n(r,j,te),te),ln($n(j,te,_e),_e),t[0]=te[0],t[1]=te[1],t[2]=te[2],t[3]=0,t[4]=_e[0],t[5]=_e[1],t[6]=_e[2],t[7]=0,t[8]=j[0],t[9]=j[1],t[10]=j[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Ht(e,n){return n=n||new y(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function gt(e,n,r){r=r||new y(16);const t=n[0],o=n[1],a=n[2],i=e[0],c=e[1],s=e[2],f=e[3],_=e[1*4+0],u=e[1*4+1],l=e[1*4+2],x=e[1*4+3],A=e[2*4+0],m=e[2*4+1],d=e[2*4+2],F=e[2*4+3],T=e[3*4+0],P=e[3*4+1],p=e[3*4+2],I=e[3*4+3];return e!==r&&(r[0]=i,r[1]=c,r[2]=s,r[3]=f,r[4]=_,r[5]=u,r[6]=l,r[7]=x,r[8]=A,r[9]=m,r[10]=d,r[11]=F),r[12]=i*t+_*o+A*a+T,r[13]=c*t+u*o+m*a+P,r[14]=s*t+l*o+d*a+p,r[15]=f*t+x*o+F*a+I,r}function zt(e,n){n=n||new y(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=r,n[6]=t,n[7]=0,n[8]=0,n[9]=-t,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Wt(e,n,r){r=r||new y(16);const t=e[4],o=e[5],a=e[6],i=e[7],c=e[8],s=e[9],f=e[10],_=e[11],u=Math.cos(n),l=Math.sin(n);return r[4]=u*t+l*c,r[5]=u*o+l*s,r[6]=u*a+l*f,r[7]=u*i+l*_,r[8]=u*c-l*t,r[9]=u*s-l*o,r[10]=u*f-l*a,r[11]=u*_-l*i,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function Vt(e,n){n=n||new y(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=0,n[2]=-t,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=t,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function kt(e,n,r){r=r||new y(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],c=e[2*4+0],s=e[2*4+1],f=e[2*4+2],_=e[2*4+3],u=Math.cos(n),l=Math.sin(n);return r[0]=u*t-l*c,r[1]=u*o-l*s,r[2]=u*a-l*f,r[3]=u*i-l*_,r[8]=u*c+l*t,r[9]=u*s+l*o,r[10]=u*f+l*a,r[11]=u*_+l*i,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function $t(e,n){n=n||new y(16);const r=Math.cos(e),t=Math.sin(e);return n[0]=r,n[1]=t,n[2]=0,n[3]=0,n[4]=-t,n[5]=r,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Kt(e,n,r){r=r||new y(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],c=e[1*4+0],s=e[1*4+1],f=e[1*4+2],_=e[1*4+3],u=Math.cos(n),l=Math.sin(n);return r[0]=u*t+l*c,r[1]=u*o+l*s,r[2]=u*a+l*f,r[3]=u*i+l*_,r[4]=u*c-l*t,r[5]=u*s-l*o,r[6]=u*f-l*a,r[7]=u*_-l*i,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function jt(e,n,r){r=r||new y(16);let t=e[0],o=e[1],a=e[2];const i=Math.sqrt(t*t+o*o+a*a);t/=i,o/=i,a/=i;const c=t*t,s=o*o,f=a*a,_=Math.cos(n),u=Math.sin(n),l=1-_;return r[0]=c+(1-c)*_,r[1]=t*o*l+a*u,r[2]=t*a*l-o*u,r[3]=0,r[4]=t*o*l-a*u,r[5]=s+(1-s)*_,r[6]=o*a*l+t*u,r[7]=0,r[8]=t*a*l+o*u,r[9]=o*a*l-t*u,r[10]=f+(1-f)*_,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function qt(e,n,r,t){t=t||new y(16);let o=n[0],a=n[1],i=n[2];const c=Math.sqrt(o*o+a*a+i*i);o/=c,a/=c,i/=c;const s=o*o,f=a*a,_=i*i,u=Math.cos(r),l=Math.sin(r),x=1-u,A=s+(1-s)*u,m=o*a*x+i*l,d=o*i*x-a*l,F=o*a*x-i*l,T=f+(1-f)*u,P=a*i*x+o*l,p=o*i*x+a*l,I=a*i*x-o*l,h=_+(1-_)*u,S=e[0],M=e[1],w=e[2],D=e[3],O=e[4],B=e[5],C=e[6],Y=e[7],Q=e[8],G=e[9],H=e[10],g=e[11];return t[0]=A*S+m*O+d*Q,t[1]=A*M+m*B+d*G,t[2]=A*w+m*C+d*H,t[3]=A*D+m*Y+d*g,t[4]=F*S+T*O+P*Q,t[5]=F*M+T*B+P*G,t[6]=F*w+T*C+P*H,t[7]=F*D+T*Y+P*g,t[8]=p*S+I*O+h*Q,t[9]=p*M+I*B+h*G,t[10]=p*w+I*C+h*H,t[11]=p*D+I*Y+h*g,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function Zt(e,n){return n=n||new y(16),n[0]=e[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=e[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Jt(e,n,r){r=r||new y(16);const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0],r[1]=t*e[0*4+1],r[2]=t*e[0*4+2],r[3]=t*e[0*4+3],r[4]=o*e[1*4+0],r[5]=o*e[1*4+1],r[6]=o*e[1*4+2],r[7]=o*e[1*4+3],r[8]=a*e[2*4+0],r[9]=a*e[2*4+1],r[10]=a*e[2*4+2],r[11]=a*e[2*4+3],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r}function eo(e,n,r){r=r||ie();const t=n[0],o=n[1],a=n[2],i=t*e[0*4+3]+o*e[1*4+3]+a*e[2*4+3]+e[3*4+3];return r[0]=(t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0]+e[3*4+0])/i,r[1]=(t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1]+e[3*4+1])/i,r[2]=(t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2]+e[3*4+2])/i,r}function no(e,n,r){r=r||ie();const t=n[0],o=n[1],a=n[2];return r[0]=t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0],r[1]=t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1],r[2]=t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2],r}function ro(e,n,r){r=r||ie();const t=mr(e),o=n[0],a=n[1],i=n[2];return r[0]=o*t[0*4+0]+a*t[0*4+1]+i*t[0*4+2],r[1]=o*t[1*4+0]+a*t[1*4+1]+i*t[1*4+2],r[2]=o*t[2*4+0]+a*t[2*4+1]+i*t[2*4+2],r}var z=Object.freeze({__proto__:null,axisRotate:qt,axisRotation:jt,copy:Ar,create:vt,frustum:Qt,getAxis:Ot,getTranslation:Dt,identity:xr,inverse:mr,lookAt:Gt,multiply:Mt,negate:Ut,ortho:Yt,perspective:Ct,rotateX:Wt,rotateY:kt,rotateZ:Kt,rotationX:zt,rotationY:Vt,rotationZ:$t,scale:Jt,scaling:Zt,setAxis:Bt,setDefaultType:Rt,setTranslation:wt,transformDirection:no,transformNormal:ro,transformPoint:eo,translate:gt,translation:Ht,transpose:Xt});const In=5120,Le=5121,Nn=5122,bn=5123,Sn=5124,hn=5125,Ln=5126,to=32819,oo=32820,ao=33635,io=5131,co=33640,so=35899,fo=35902,uo=36269,lo=34042,dr={};{const e=dr;e[In]=Int8Array,e[Le]=Uint8Array,e[Nn]=Int16Array,e[bn]=Uint16Array,e[Sn]=Int32Array,e[hn]=Uint32Array,e[Ln]=Float32Array,e[to]=Uint16Array,e[oo]=Uint16Array,e[ao]=Uint16Array,e[io]=Uint16Array,e[co]=Uint32Array,e[so]=Uint32Array,e[fo]=Uint32Array,e[uo]=Uint32Array,e[lo]=Uint32Array}function Rn(e){if(e instanceof Int8Array)return In;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Le;if(e instanceof Int16Array)return Nn;if(e instanceof Uint16Array)return bn;if(e instanceof Int32Array)return Sn;if(e instanceof Uint32Array)return hn;if(e instanceof Float32Array)return Ln;throw new Error("unsupported typed array type")}function Fr(e){if(e===Int8Array)return In;if(e===Uint8Array||e===Uint8ClampedArray)return Le;if(e===Int16Array)return Nn;if(e===Uint16Array)return bn;if(e===Int32Array)return Sn;if(e===Uint32Array)return hn;if(e===Float32Array)return Ln;throw new Error("unsupported typed array type")}function Tr(e){const n=dr[e];if(!n)throw new Error("unknown gl type");return n}const ze=typeof SharedArrayBuffer<"u"?function(n){return n&&n.buffer&&(n.buffer instanceof ArrayBuffer||n.buffer instanceof SharedArrayBuffer)}:function(n){return n&&n.buffer&&n.buffer instanceof ArrayBuffer};function Er(...e){console.error(...e)}const Kn=new Map;function Ze(e,n){if(!e||typeof e!="object")return!1;let r=Kn.get(n);r||(r=new WeakMap,Kn.set(n,r));let t=r.get(e);if(t===void 0){const o=Object.prototype.toString.call(e);t=o.substring(8,o.length-1)===n,r.set(e,t)}return t}function _o(e,n){return typeof WebGLBuffer<"u"&&Ze(n,"WebGLBuffer")}function Pr(e,n){return typeof WebGLRenderbuffer<"u"&&Ze(n,"WebGLRenderbuffer")}function Je(e,n){return typeof WebGLTexture<"u"&&Ze(n,"WebGLTexture")}function Ao(e,n){return typeof WebGLSampler<"u"&&Ze(n,"WebGLSampler")}const pr=35044,de=34962,xo=34963,mo=34660,Fo=5120,To=5121,Eo=5122,Po=5123,po=5124,yo=5125,yr=5126,Ir={attribPrefix:""};function Io(e,n,r,t,o){e.bindBuffer(n,r),e.bufferData(n,t,o||pr)}function Nr(e,n,r,t){if(_o(e,n))return n;r=r||de;const o=e.createBuffer();return Io(e,r,o,n,t),o}function br(e){return e==="indices"}function No(e){return e===Int8Array||e===Uint8Array}function bo(e){return e.length?e:e.data}const So=/coord|texture/i,ho=/color|colour/i;function Lo(e,n){let r;if(So.test(e)?r=2:ho.test(e)?r=4:r=3,n%r>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${r} but ${n} values is not evenly divisible by ${r}. You should specify it.`);return r}function Ro(e,n,r){return e.numComponents||e.size||Lo(n,r||bo(e).length)}function Sr(e,n){if(ze(e))return e;if(ze(e.data))return e.data;Array.isArray(e)&&(e={data:e});let r=e.type?Un(e.type):void 0;return r||(br(n)?r=Uint16Array:r=Float32Array),new r(e.data)}function Uo(e){return typeof e=="number"?e:e?Fr(e):yr}function Un(e){return typeof e=="number"?Tr(e):e||Float32Array}function vo(e,n){return{buffer:n.buffer,numValues:2*3*4,type:Uo(n.type),arrayType:Un(n.type)}}function Xo(e,n){const r=n.data||n,t=Un(n.type),o=r*t.BYTES_PER_ELEMENT,a=e.createBuffer();return e.bindBuffer(de,a),e.bufferData(de,o,n.drawType||pr),{buffer:a,numValues:r,type:Fr(t),arrayType:t}}function Mo(e,n,r){const t=Sr(n,r);return{arrayType:t.constructor,buffer:Nr(e,t,void 0,n.drawType),type:Rn(t),numValues:0}}function wo(e,n){const r={};return Object.keys(n).forEach(function(t){if(!br(t)){const o=n[t],a=o.attrib||o.name||o.attribName||Ir.attribPrefix+t;if(o.value){if(!Array.isArray(o.value)&&!ze(o.value))throw new Error("array.value is not array or typedarray");r[a]={value:o.value}}else{let i;o.buffer&&o.buffer instanceof WebGLBuffer?i=vo:typeof o=="number"||typeof o.data=="number"?i=Xo:i=Mo;const{buffer:c,type:s,numValues:f,arrayType:_}=i(e,o,t),u=o.normalize!==void 0?o.normalize:No(_),l=Ro(o,t,f);r[a]={buffer:c,numComponents:l,type:s,normalize:u,stride:o.stride||0,offset:o.offset||0,divisor:o.divisor===void 0?void 0:o.divisor,drawType:o.drawType}}}}),e.bindBuffer(de,null),r}function Do(e,n){return n===Fo||n===To?1:n===Eo||n===Po?2:n===po||n===yo||n===yr?4:0}const _n=["position","positions","a_position"];function Oo(e,n){let r,t;for(t=0;t<_n.length&&(r=_n[t],!(r in n||(r=Ir.attribPrefix+r,r in n)));++t);t===_n.length&&(r=Object.keys(n)[0]);const o=n[r];if(!o.buffer)return 1;e.bindBuffer(de,o.buffer);const a=e.getBufferParameter(de,mo);e.bindBuffer(de,null);const i=Do(e,o.type),c=a/i,s=o.numComponents||o.size,f=c/s;if(f%1!==0)throw new Error(`numComponents ${s} not correct for length ${length}`);return f}function jn(e,n,r){const t=wo(e,n),o=Object.assign({},r||{});o.attribs=Object.assign({},r?r.attribs:{},t);const a=n.indices;if(a){const i=Sr(a,"indices");o.indices=Nr(e,i,xo),o.numElements=i.length,o.elementType=Rn(i)}else o.numElements||(o.numElements=Oo(e,o.attribs));return o}function Ue(e){return!!e.texStorage2D}const hr=function(){const e={},n={};function r(t){const o=t.constructor.name;if(!e[o]){for(const a in t)if(typeof t[a]=="number"){const i=n[t[a]];n[t[a]]=i?`${i} | ${a}`:a}e[o]=!0}}return function(o,a){return r(o),n[a]||(typeof a=="number"?`0x${a.toString(16)}`:a)}}(),fe={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},ye=ze,Lr=function(){let e;return function(){return e=e||(typeof document<"u"&&document.createElement?document.createElement("canvas").getContext("2d"):null),e}}(),qn=6406,k=6407,b=6408,Zn=6409,Jn=6410,Se=6402,er=34041,We=33071,Bo=9728,Co=9729,re=3553,ne=34067,ce=32879,se=35866,en=34069,Yo=34070,Qo=34071,Go=34072,Ho=34073,go=34074,mn=10241,dn=10240,Ve=10242,ke=10243,nr=32882,zo=33082,Wo=33083,Vo=33084,ko=33085,$o=34892,Ko=34893,vn=3317,Rr=3314,Ur=32878,vr=3316,Xr=3315,Mr=32877,jo=37443,qo=37441,Zo=37440,Jo=33321,ea=36756,na=33325,ra=33326,ta=33330,oa=33329,aa=33338,ia=33337,ca=33340,sa=33339,fa=33323,ua=36757,la=33327,_a=33328,Aa=33336,xa=33335,ma=33332,da=33331,Fa=33334,Ta=33333,Ea=32849,Pa=35905,pa=36194,ya=36758,Ia=35898,Na=35901,ba=34843,Sa=34837,ha=36221,La=36239,Ra=36215,Ua=36233,va=36209,Xa=36227,Ma=32856,wa=35907,Da=36759,Oa=32855,Ba=32854,Ca=32857,Ya=34842,Qa=34836,Ga=36220,Ha=36238,ga=36975,za=36214,Wa=36232,Va=36226,ka=36208,$a=33189,Ka=33190,ja=36012,qa=36013,Za=35056,oe=5120,N=5121,Ye=5122,Te=5123,Qe=5124,Ae=5125,U=5126,rr=32819,tr=32820,or=33635,W=5131,he=36193,An=33640,Ja=35899,ei=35902,ni=36269,ri=34042,Ge=33319,Ee=33320,He=6403,Pe=36244,pe=36248,xe=36249;let xn;function nn(e){if(!xn){const n={};n[qn]={textureFormat:qn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[N,W,he,U]},n[Zn]={textureFormat:Zn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[N,W,he,U]},n[Jn]={textureFormat:Jn,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[N,W,he,U]},n[k]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[N,W,he,U,or]},n[b]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[N,W,he,U,rr,tr]},n[Se]={textureFormat:Se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[Ae,Te]},n[Jo]={textureFormat:He,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[N]},n[ea]={textureFormat:He,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[oe]},n[na]={textureFormat:He,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[U,W]},n[ra]={textureFormat:He,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[U]},n[ta]={textureFormat:Pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[N]},n[oa]={textureFormat:Pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[oe]},n[ma]={textureFormat:Pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Te]},n[da]={textureFormat:Pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Ye]},n[Fa]={textureFormat:Pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ae]},n[Ta]={textureFormat:Pe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Qe]},n[fa]={textureFormat:Ge,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[N]},n[ua]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[oe]},n[la]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[U,W]},n[_a]={textureFormat:Ge,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[U]},n[Aa]={textureFormat:Ee,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[N]},n[xa]={textureFormat:Ee,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[oe]},n[aa]={textureFormat:Ee,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Te]},n[ia]={textureFormat:Ee,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ye]},n[ca]={textureFormat:Ee,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ae]},n[sa]={textureFormat:Ee,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Qe]},n[Ea]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[N]},n[Pa]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[N]},n[pa]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[N,or]},n[ya]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[oe]},n[Ia]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[U,W,Ja]},n[Na]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[U,W,ei]},n[ba]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[U,W]},n[Sa]={textureFormat:k,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[U]},n[ha]={textureFormat:pe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[N]},n[La]={textureFormat:pe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[oe]},n[Ra]={textureFormat:pe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Te]},n[Ua]={textureFormat:pe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Ye]},n[va]={textureFormat:pe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[Ae]},n[Xa]={textureFormat:pe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[Qe]},n[Ma]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[N]},n[wa]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[N]},n[Da]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[oe]},n[Oa]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[N,tr,An]},n[Ba]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[N,rr]},n[Ca]={textureFormat:b,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[An]},n[Ya]={textureFormat:b,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[U,W]},n[Qa]={textureFormat:b,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[U]},n[Ga]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[N]},n[Ha]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[oe]},n[ga]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[An]},n[za]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Te]},n[Wa]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ye]},n[Va]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[Qe]},n[ka]={textureFormat:xe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[Ae]},n[$a]={textureFormat:Se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[Te,Ae]},n[Ka]={textureFormat:Se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ae]},n[ja]={textureFormat:Se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[U]},n[Za]={textureFormat:er,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ri]},n[qa]={textureFormat:er,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ni]},Object.keys(n).forEach(function(r){const t=n[r];t.bytesPerElementMap={},t.bytesPerElement.forEach(function(o,a){const i=t.type[a];t.bytesPerElementMap[i]=o})}),xn=n}return xn[e]}function ti(e,n){const r=nn(e);if(!r)throw"unknown internal format";const t=r.bytesPerElementMap[n];if(t===void 0)throw"unknown internal format";return t}function Ne(e){const n=nn(e);if(!n)throw"unknown internal format";return{format:n.textureFormat,type:n.type[0]}}function ar(e){return(e&e-1)===0}function oi(e,n,r,t){if(!Ue(e))return ar(n)&&ar(r);const o=nn(t);if(!o)throw"unknown internal format";return o.colorRenderable&&o.textureFilterable}function ai(e){const n=nn(e);if(!n)throw"unknown internal format";return n.textureFilterable}function wr(e,n,r){return ye(n)?Rn(n):r||N}function ge(e,n,r,t,o){if(o%1!==0)throw"can't guess dimensions";if(!r&&!t){const a=Math.sqrt(o/(n===ne?6:1));a%1===0?(r=a,t=a):(r=o,t=1)}else if(t){if(!r&&(r=o/t,r%1))throw"can't guess dimensions"}else if(t=o/r,t%1)throw"can't guess dimensions";return{width:r,height:t}}function Ie(e,n){n.colorspaceConversion!==void 0&&e.pixelStorei(jo,n.colorspaceConversion),n.premultiplyAlpha!==void 0&&e.pixelStorei(qo,n.premultiplyAlpha),n.flipY!==void 0&&e.pixelStorei(Zo,n.flipY)}function Dr(e){e.pixelStorei(vn,4),Ue(e)&&(e.pixelStorei(Rr,0),e.pixelStorei(Ur,0),e.pixelStorei(vr,0),e.pixelStorei(Xr,0),e.pixelStorei(Mr,0))}function ii(e,n,r,t){t.minMag&&(r.call(e,n,mn,t.minMag),r.call(e,n,dn,t.minMag)),t.min&&r.call(e,n,mn,t.min),t.mag&&r.call(e,n,dn,t.mag),t.wrap&&(r.call(e,n,Ve,t.wrap),r.call(e,n,ke,t.wrap),(n===ce||Ao(e,n))&&r.call(e,n,nr,t.wrap)),t.wrapR&&r.call(e,n,nr,t.wrapR),t.wrapS&&r.call(e,n,Ve,t.wrapS),t.wrapT&&r.call(e,n,ke,t.wrapT),t.minLod!==void 0&&r.call(e,n,zo,t.minLod),t.maxLod!==void 0&&r.call(e,n,Wo,t.maxLod),t.baseLevel!==void 0&&r.call(e,n,Vo,t.baseLevel),t.maxLevel!==void 0&&r.call(e,n,ko,t.maxLevel),t.compareFunc!==void 0&&r.call(e,n,Ko,t.compareFunc),t.compareMode!==void 0&&r.call(e,n,$o,t.compareMode)}function Or(e,n,r){const t=r.target||re;e.bindTexture(t,n),ii(e,t,e.texParameteri,r)}function ci(e){return e=e||fe.textureColor,ye(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Fn(e,n,r,t,o,a){r=r||fe.textureOptions,a=a||b;const i=r.target||re;if(t=t||r.width,o=o||r.height,e.bindTexture(i,n),oi(e,t,o,a))e.generateMipmap(i);else{const c=ai(a)?Co:Bo;e.texParameteri(i,mn,c),e.texParameteri(i,dn,c),e.texParameteri(i,Ve,We),e.texParameteri(i,ke,We)}}function Re(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function Tn(e,n){return n=n||{},n.cubeFaceOrder||[en,Yo,Qo,Go,Ho,go]}function En(e,n){const t=Tn(e,n).map(function(o,a){return{face:o,ndx:a}});return t.sort(function(o,a){return o.face-a.face}),t}function Br(e,n,r,t){t=t||fe.textureOptions;const o=t.target||re,a=t.level||0;let i=r.width,c=r.height;const s=t.internalFormat||t.format||b,f=Ne(s),_=t.format||f.format,u=t.type||f.type;if(Ie(e,t),e.bindTexture(o,n),o===ne){const l=r.width,x=r.height;let A,m;if(l/6===x)A=x,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===l)A=l,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3===x/2)A=l/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2===x/3)A=l/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(r.src?r.src:r.nodeName);const d=Lr();d?(d.canvas.width=A,d.canvas.height=A,i=A,c=A,En(e,t).forEach(function(F){const T=m[F.ndx*2+0]*A,P=m[F.ndx*2+1]*A;d.drawImage(r,T,P,A,A,0,0,A,A),e.texImage2D(F.face,a,s,_,u,d.canvas)}),d.canvas.width=1,d.canvas.height=1):typeof createImageBitmap<"u"&&(i=A,c=A,En(e,t).forEach(function(F){const T=m[F.ndx*2+0]*A,P=m[F.ndx*2+1]*A;e.texImage2D(F.face,a,s,A,A,0,_,u,null),createImageBitmap(r,T,P,A,A,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(p){Ie(e,t),e.bindTexture(o,n),e.texImage2D(F.face,a,s,_,u,p),Re(t)&&Fn(e,n,t,i,c,s)})}))}else if(o===ce||o===se){const l=Math.min(r.width,r.height),x=Math.max(r.width,r.height),A=x/l;if(A%1!==0)throw"can not compute 3D dimensions of element";const m=r.width===x?1:0,d=r.height===x?1:0;e.pixelStorei(vn,1),e.pixelStorei(Rr,r.width),e.pixelStorei(Ur,0),e.pixelStorei(Mr,0),e.texImage3D(o,a,s,l,l,l,0,_,u,null);for(let F=0;F<A;++F){const T=F*l*m,P=F*l*d;e.pixelStorei(vr,T),e.pixelStorei(Xr,P),e.texSubImage3D(o,a,0,0,F,l,l,1,_,u,r)}Dr(e)}else e.texImage2D(o,a,s,_,u,r);Re(t)&&Fn(e,n,t,i,c,s),Or(e,n,t)}function ve(){}function si(e){if(typeof document<"u"){const n=document.createElement("a");return n.href=e,n.hostname===location.hostname&&n.port===location.port&&n.protocol===location.protocol}else{const n=new URL(location.href).origin;return new URL(e,location.href).origin===n}}function fi(e,n){return n===void 0&&!si(e)?"anonymous":n}function ui(e,n,r){r=r||ve;let t;if(n=n!==void 0?n:fe.crossOrigin,n=fi(e,n),typeof Image<"u"){t=new Image,n!==void 0&&(t.crossOrigin=n);const o=function(){t.removeEventListener("error",a),t.removeEventListener("load",i),t=null},a=function(){const s="couldn't load image: "+e;Er(s),r(s,t),o()},i=function(){r(null,t),o()};return t.addEventListener("error",a),t.addEventListener("load",i),t.src=e,t}else if(typeof ImageBitmap<"u"){let o,a;const i=function(){r(o,a)},c={};n&&(c.mode="cors"),fetch(e,c).then(function(s){if(!s.ok)throw s;return s.blob()}).then(function(s){return createImageBitmap(s,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(s){a=s,setTimeout(i)}).catch(function(s){o=s,setTimeout(i)}),t=null}return t}function Cr(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof ImageData<"u"&&e instanceof ImageData||typeof HTMLElement<"u"&&e instanceof HTMLElement}function Xn(e,n,r){return Cr(e)?(setTimeout(function(){r(null,e)}),e):ui(e,n,r)}function Mn(e,n,r){r=r||fe.textureOptions;const t=r.target||re;if(e.bindTexture(t,n),r.color===!1)return;const o=ci(r.color);if(t===ne)for(let a=0;a<6;++a)e.texImage2D(en+a,0,b,1,1,0,b,N,o);else t===ce||t===se?e.texImage3D(t,0,b,1,1,1,0,b,N,o):e.texImage2D(t,0,b,1,1,0,b,N,o)}function li(e,n,r,t){return t=t||ve,r=r||fe.textureOptions,Mn(e,n,r),r=Object.assign({},r),Xn(r.src,r.crossOrigin,function(a,i){a?t(a,n,i):(Br(e,n,i,r),t(null,n,i))})}function _i(e,n,r,t){t=t||ve;const o=r.src;if(o.length!==6)throw"there must be 6 urls for a cubemap";const a=r.level||0,i=r.internalFormat||r.format||b,c=Ne(i),s=r.format||c.format,f=r.type||N,_=r.target||re;if(_!==ne)throw"target must be TEXTURE_CUBE_MAP";Mn(e,n,r),r=Object.assign({},r);let u=6;const l=[],x=Tn(e,r);let A;function m(d){return function(F,T){--u,F?l.push(F):T.width!==T.height?l.push("cubemap face img is not a square: "+T.src):(Ie(e,r),e.bindTexture(_,n),u===5?Tn().forEach(function(P){e.texImage2D(P,a,i,s,f,T)}):e.texImage2D(d,a,i,s,f,T),Re(r)&&e.generateMipmap(_)),u===0&&t(l.length?l:void 0,n,A)}}A=o.map(function(d,F){return Xn(d,r.crossOrigin,m(x[F]))})}function Ai(e,n,r,t){t=t||ve;const o=r.src,a=r.internalFormat||r.format||b,i=Ne(a),c=r.format||i.format,s=r.type||N,f=r.target||se;if(f!==ce&&f!==se)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";Mn(e,n,r),r=Object.assign({},r);let _=o.length;const u=[];let l;const x=r.level||0;let A=r.width,m=r.height;const d=o.length;let F=!0;function T(P){return function(p,I){if(--_,p)u.push(p);else{if(Ie(e,r),e.bindTexture(f,n),F){F=!1,A=r.width||I.width,m=r.height||I.height,e.texImage3D(f,x,a,A,m,d,0,c,s,null);for(let h=0;h<d;++h)e.texSubImage3D(f,x,0,0,h,A,m,1,c,s,I)}else{let h=I,S;(I.width!==A||I.height!==m)&&(S=Lr(),h=S.canvas,S.canvas.width=A,S.canvas.height=m,S.drawImage(I,0,0,A,m)),e.texSubImage3D(f,x,0,0,P,A,m,1,c,s,h),S&&h===S.canvas&&(S.canvas.width=0,S.canvas.height=0)}Re(r)&&e.generateMipmap(f)}_===0&&t(u.length?u:void 0,n,l)}}l=o.map(function(P,p){return Xn(P,r.crossOrigin,T(p))})}function xi(e,n,r,t){t=t||fe.textureOptions;const o=t.target||re;e.bindTexture(o,n);let a=t.width,i=t.height,c=t.depth;const s=t.level||0,f=t.internalFormat||t.format||b,_=Ne(f),u=t.format||_.format,l=t.type||wr(e,r,_.type);if(ye(r))r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));else{const d=Tr(l);r=new d(r)}const x=ti(f,l),A=r.byteLength/x;if(A%1)throw"length wrong size for format: "+hr(e,u);let m;if(o===ce||o===se)if(!a&&!i&&!c){const d=Math.cbrt(A);if(d%1!==0)throw"can't guess cube size of array of numElements: "+A;a=d,i=d,c=d}else a&&(!i||!c)?(m=ge(e,o,i,c,A/a),i=m.width,c=m.height):i&&(!a||!c)?(m=ge(e,o,a,c,A/i),a=m.width,c=m.height):(m=ge(e,o,a,i,A/c),a=m.width,i=m.height);else m=ge(e,o,a,i,A),a=m.width,i=m.height;if(Dr(e),e.pixelStorei(vn,t.unpackAlignment||1),Ie(e,t),o===ne){const d=x/r.BYTES_PER_ELEMENT,F=A/6*d;En(e,t).forEach(T=>{const P=F*T.ndx,p=r.subarray(P,P+F);e.texImage2D(T.face,s,f,a,i,0,u,l,p)})}else o===ce||o===se?e.texImage3D(o,s,f,a,i,c,0,u,l,r):e.texImage2D(o,s,f,a,i,0,u,l,r);return{width:a,height:i,depth:c,type:l}}function mi(e,n,r){const t=r.target||re;e.bindTexture(t,n);const o=r.level||0,a=r.internalFormat||r.format||b,i=Ne(a),c=r.format||i.format,s=r.type||i.type;if(Ie(e,r),t===ne)for(let f=0;f<6;++f)e.texImage2D(en+f,o,a,r.width,r.height,0,c,s,null);else t===ce||t===se?e.texImage3D(t,o,a,r.width,r.height,r.depth,0,c,s,null):e.texImage2D(t,o,a,r.width,r.height,0,c,s,null)}function di(e,n,r){r=r||ve,n=n||fe.textureOptions;const t=e.createTexture(),o=n.target||re;let a=n.width||1,i=n.height||1;const c=n.internalFormat||b;e.bindTexture(o,t),o===ne&&(e.texParameteri(o,Ve,We),e.texParameteri(o,ke,We));let s=n.src;if(s)if(typeof s=="function"&&(s=s(e,n)),typeof s=="string")li(e,t,n,r);else if(ye(s)||Array.isArray(s)&&(typeof s[0]=="number"||Array.isArray(s[0])||ye(s[0]))){const f=xi(e,t,s,n);a=f.width,i=f.height}else Array.isArray(s)&&(typeof s[0]=="string"||Cr(s[0]))?o===ne?_i(e,t,n,r):Ai(e,t,n,r):(Br(e,t,s,n),a=s.width,i=s.height);else mi(e,t,n);return Re(n)&&Fn(e,t,n,a,i,c),Or(e,t,n),t}function Fi(e,n,r,t,o,a){t=t||r.width,o=o||r.height,a=a||r.depth;const i=r.target||re;e.bindTexture(i,n);const c=r.level||0,s=r.internalFormat||r.format||b,f=Ne(s),_=r.format||f.format;let u;const l=r.src;if(l&&(ye(l)||Array.isArray(l)&&typeof l[0]=="number")?u=r.type||wr(e,l,f.type):u=r.type||f.type,i===ne)for(let x=0;x<6;++x)e.texImage2D(en+x,c,s,t,o,0,_,u,null);else i===ce||i===se?e.texImage3D(i,c,s,t,o,a,0,_,u,null):e.texImage2D(i,c,s,t,o,0,_,u,null)}const wn=Er;function Yr(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const $e=33984,rn=34962,Ti=34963,Ei=35713,Pi=35714,pi=35632,yi=35633,Ii=35981,Qr=35718,Ni=35721,bi=35971,Si=35382,hi=35396,Li=35398,Ri=35392,Ui=35395,tn=5126,Gr=35664,Hr=35665,gr=35666,Dn=5124,zr=35667,Wr=35668,Vr=35669,kr=35670,$r=35671,Kr=35672,jr=35673,qr=35674,Zr=35675,Jr=35676,vi=35678,Xi=35680,Mi=35679,wi=35682,Di=35685,Oi=35686,Bi=35687,Ci=35688,Yi=35689,Qi=35690,Gi=36289,Hi=36292,gi=36293,On=5125,et=36294,nt=36295,rt=36296,zi=36298,Wi=36299,Vi=36300,ki=36303,$i=36306,Ki=36307,ji=36308,qi=36311,on=3553,an=34067,Bn=32879,cn=35866,E={};function tt(e,n){return E[n].bindPoint}function Zi(e,n){return function(r){e.uniform1f(n,r)}}function Ji(e,n){return function(r){e.uniform1fv(n,r)}}function ec(e,n){return function(r){e.uniform2fv(n,r)}}function nc(e,n){return function(r){e.uniform3fv(n,r)}}function rc(e,n){return function(r){e.uniform4fv(n,r)}}function ot(e,n){return function(r){e.uniform1i(n,r)}}function at(e,n){return function(r){e.uniform1iv(n,r)}}function it(e,n){return function(r){e.uniform2iv(n,r)}}function ct(e,n){return function(r){e.uniform3iv(n,r)}}function st(e,n){return function(r){e.uniform4iv(n,r)}}function tc(e,n){return function(r){e.uniform1ui(n,r)}}function oc(e,n){return function(r){e.uniform1uiv(n,r)}}function ac(e,n){return function(r){e.uniform2uiv(n,r)}}function ic(e,n){return function(r){e.uniform3uiv(n,r)}}function cc(e,n){return function(r){e.uniform4uiv(n,r)}}function sc(e,n){return function(r){e.uniformMatrix2fv(n,!1,r)}}function fc(e,n){return function(r){e.uniformMatrix3fv(n,!1,r)}}function uc(e,n){return function(r){e.uniformMatrix4fv(n,!1,r)}}function lc(e,n){return function(r){e.uniformMatrix2x3fv(n,!1,r)}}function _c(e,n){return function(r){e.uniformMatrix3x2fv(n,!1,r)}}function Ac(e,n){return function(r){e.uniformMatrix2x4fv(n,!1,r)}}function xc(e,n){return function(r){e.uniformMatrix4x2fv(n,!1,r)}}function mc(e,n){return function(r){e.uniformMatrix3x4fv(n,!1,r)}}function dc(e,n){return function(r){e.uniformMatrix4x3fv(n,!1,r)}}function v(e,n,r,t){const o=tt(e,n);return Ue(e)?function(a){let i,c;!a||Je(e,a)?(i=a,c=null):(i=a.texture,c=a.sampler),e.uniform1i(t,r),e.activeTexture($e+r),e.bindTexture(o,i),e.bindSampler(r,c)}:function(a){e.uniform1i(t,r),e.activeTexture($e+r),e.bindTexture(o,a)}}function X(e,n,r,t,o){const a=tt(e,n),i=new Int32Array(o);for(let c=0;c<o;++c)i[c]=r+c;return Ue(e)?function(c){e.uniform1iv(t,i),c.forEach(function(s,f){e.activeTexture($e+i[f]);let _,u;!s||Je(e,s)?(_=s,u=null):(_=s.texture,u=s.sampler),e.bindSampler(r,u),e.bindTexture(a,_)})}:function(c){e.uniform1iv(t,i),c.forEach(function(s,f){e.activeTexture($e+i[f]),e.bindTexture(a,s)})}}E[tn]={Type:Float32Array,size:4,setter:Zi,arraySetter:Ji};E[Gr]={Type:Float32Array,size:8,setter:ec,cols:2};E[Hr]={Type:Float32Array,size:12,setter:nc,cols:3};E[gr]={Type:Float32Array,size:16,setter:rc,cols:4};E[Dn]={Type:Int32Array,size:4,setter:ot,arraySetter:at};E[zr]={Type:Int32Array,size:8,setter:it,cols:2};E[Wr]={Type:Int32Array,size:12,setter:ct,cols:3};E[Vr]={Type:Int32Array,size:16,setter:st,cols:4};E[On]={Type:Uint32Array,size:4,setter:tc,arraySetter:oc};E[et]={Type:Uint32Array,size:8,setter:ac,cols:2};E[nt]={Type:Uint32Array,size:12,setter:ic,cols:3};E[rt]={Type:Uint32Array,size:16,setter:cc,cols:4};E[kr]={Type:Uint32Array,size:4,setter:ot,arraySetter:at};E[$r]={Type:Uint32Array,size:8,setter:it,cols:2};E[Kr]={Type:Uint32Array,size:12,setter:ct,cols:3};E[jr]={Type:Uint32Array,size:16,setter:st,cols:4};E[qr]={Type:Float32Array,size:32,setter:sc,rows:2,cols:2};E[Zr]={Type:Float32Array,size:48,setter:fc,rows:3,cols:3};E[Jr]={Type:Float32Array,size:64,setter:uc,rows:4,cols:4};E[Di]={Type:Float32Array,size:32,setter:lc,rows:2,cols:3};E[Oi]={Type:Float32Array,size:32,setter:Ac,rows:2,cols:4};E[Bi]={Type:Float32Array,size:48,setter:_c,rows:3,cols:2};E[Ci]={Type:Float32Array,size:48,setter:mc,rows:3,cols:4};E[Yi]={Type:Float32Array,size:64,setter:xc,rows:4,cols:2};E[Qi]={Type:Float32Array,size:64,setter:dc,rows:4,cols:3};E[vi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Xi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[Mi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Bn};E[wi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Gi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};E[Hi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};E[gi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[zi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Wi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Bn};E[Vi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[ki]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};E[$i]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:on};E[Ki]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:Bn};E[ji]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:an};E[qi]={Type:null,size:0,setter:v,arraySetter:X,bindPoint:cn};function sn(e,n){return function(r){if(r.value)switch(e.disableVertexAttribArray(n),r.value.length){case 4:e.vertexAttrib4fv(n,r.value);break;case 3:e.vertexAttrib3fv(n,r.value);break;case 2:e.vertexAttrib2fv(n,r.value);break;case 1:e.vertexAttrib1fv(n,r.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(rn,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribPointer(n,r.numComponents||r.size,r.type||tn,r.normalize||!1,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function ue(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4iv(n,r.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(rn,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||Dn,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function fn(e,n){return function(r){if(r.value)if(e.disableVertexAttribArray(n),r.value.length===4)e.vertexAttrib4uiv(n,r.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(rn,r.buffer),e.enableVertexAttribArray(n),e.vertexAttribIPointer(n,r.numComponents||r.size,r.type||On,r.stride||0,r.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(n,r.divisor||0)}}function Cn(e,n,r){const t=r.size,o=r.count;return function(a){e.bindBuffer(rn,a.buffer);const i=a.size||a.numComponents||t,c=i/o,s=a.type||tn,_=E[s].size*i,u=a.normalize||!1,l=a.offset||0,x=_/o;for(let A=0;A<o;++A)e.enableVertexAttribArray(n+A),e.vertexAttribPointer(n+A,c,s,u,_,l+x*A),e.vertexAttribDivisor&&e.vertexAttribDivisor(n+A,a.divisor||0)}}const L={};L[tn]={size:4,setter:sn};L[Gr]={size:8,setter:sn};L[Hr]={size:12,setter:sn};L[gr]={size:16,setter:sn};L[Dn]={size:4,setter:ue};L[zr]={size:8,setter:ue};L[Wr]={size:12,setter:ue};L[Vr]={size:16,setter:ue};L[On]={size:4,setter:fn};L[et]={size:8,setter:fn};L[nt]={size:12,setter:fn};L[rt]={size:16,setter:fn};L[kr]={size:4,setter:ue};L[$r]={size:8,setter:ue};L[Kr]={size:12,setter:ue};L[jr]={size:16,setter:ue};L[qr]={size:4,setter:Cn,count:2};L[Zr]={size:9,setter:Cn,count:3};L[Jr]={size:16,setter:Cn,count:4};const Fc=/ERROR:\s*\d+:(\d+)/gi;function Tc(e,n="",r=0){const t=[...n.matchAll(Fc)],o=new Map(t.map((a,i)=>{const c=parseInt(a[1]),s=t[i+1],f=s?s.index:n.length,_=n.substring(a.index,f);return[c-1,_]}));return e.split(`
`).map((a,i)=>{const c=o.get(i);return`${i+1+r}: ${a}${c?`

^^^ ${c}`:""}`}).join(`
`)}const ir=/^[ \t]*\n/;function ft(e){let n=0;return ir.test(e)&&(n=1,e=e.replace(ir,"")),{lineOffset:n,shaderSource:e}}function Ec(e,n){return e.errorCallback(n),e.callback&&setTimeout(()=>{e.callback(`${n}
${e.errors.join(`
`)}`)}),null}function Pc(e,n,r,t){if(t=t||wn,!e.getShaderParameter(r,Ei)){const a=e.getShaderInfoLog(r),{lineOffset:i,shaderSource:c}=ft(e.getShaderSource(r)),s=`${Tc(c,a,i)}
Error compiling ${hr(e,n)}: ${a}`;return t(s),s}return""}function Yn(e,n,r){let t,o,a;if(typeof n=="function"&&(r=n,n=void 0),typeof e=="function")r=e,e=void 0;else if(e&&!Array.isArray(e)){const f=e;r=f.errorCallback,e=f.attribLocations,t=f.transformFeedbackVaryings,o=f.transformFeedbackMode,a=f.callback}const i=r||wn,c=[],s={errorCallback(f,..._){c.push(f),i(f,..._)},transformFeedbackVaryings:t,transformFeedbackMode:o,callback:a,errors:c};{let f={};Array.isArray(e)?e.forEach(function(_,u){f[_]=n?n[u]:u}):f=e||{},s.attribLocations=f}return s}const pc=["VERTEX_SHADER","FRAGMENT_SHADER"];function yc(e,n){if(n.indexOf("frag")>=0)return pi;if(n.indexOf("vert")>=0)return yi}function Ic(e,n,r){const t=e.getAttachedShaders(n);for(const o of t)r.has(o)&&e.deleteShader(o);e.deleteProgram(n)}const Nc=(e=0)=>new Promise(n=>setTimeout(n,e));function bc(e,n,r){const t=e.createProgram(),{attribLocations:o,transformFeedbackVaryings:a,transformFeedbackMode:i}=Yn(r);for(let c=0;c<n.length;++c){let s=n[c];if(typeof s=="string"){const f=Yr(s),_=f?f.text:s;let u=e[pc[c]];f&&f.type&&(u=yc(e,f.type)||u),s=e.createShader(u),e.shaderSource(s,ft(_).shaderSource),e.compileShader(s),e.attachShader(t,s)}}Object.entries(o).forEach(([c,s])=>e.bindAttribLocation(t,s,c));{let c=a;c&&(c.attribs&&(c=c.attribs),Array.isArray(c)||(c=Object.keys(c)),e.transformFeedbackVaryings(t,c,i||Ii))}return e.linkProgram(t),t}function Sc(e,n,r,t,o){const a=Yn(r,t,o),i=new Set(n),c=bc(e,n,a);function s(f,_){const u=Lc(f,_,a.errorCallback);return u&&Ic(f,_,i),u}if(a.callback){hc(e,c).then(()=>{const f=s(e,c);a.callback(f,f?void 0:c)});return}return s(e,c)?void 0:c}async function hc(e,n){const r=e.getExtension("KHR_parallel_shader_compile"),t=r?(a,i)=>a.getProgramParameter(i,r.COMPLETION_STATUS_KHR):()=>!0;let o=0;do await Nc(o),o=1e3/60;while(!t(e,n))}function Lc(e,n,r){if(r=r||wn,!e.getProgramParameter(n,Pi)){const o=e.getProgramInfoLog(n);r(`Error in program linking: ${o}`);const i=e.getAttachedShaders(n).map(c=>Pc(e,e.getShaderParameter(c,e.SHADER_TYPE),c,r));return`${o}
${i.filter(c=>c).join(`
`)}`}}function Rc(e,n,r,t,o){return Sc(e,n,r,t,o)}function ut(e){const n=e.name;return n.startsWith("gl_")||n.startsWith("webgl_")}const Uc=/(\.|\[|]|\w+)/g,vc=e=>e>="0"&&e<="9";function Xc(e,n,r,t){const o=e.split(Uc).filter(c=>c!=="");let a=0,i="";for(;;){const c=o[a++];i+=c;const s=vc(c[0]),f=s?parseInt(c):c;if(s&&(i+=o[a++]),a===o.length){r[f]=n;break}else{const u=o[a++],l=u==="[",x=r[f]||(l?[]:{});r[f]=x,r=x,t[i]=t[i]||function(A){return function(m){lt(A,m)}}(x),i+=u}}}function Mc(e,n){let r=0;function t(c,s,f){const _=s.name.endsWith("[0]"),u=s.type,l=E[u];if(!l)throw new Error(`unknown type: 0x${u.toString(16)}`);let x;if(l.bindPoint){const A=r;r+=s.size,_?x=l.arraySetter(e,u,A,f,s.size):x=l.setter(e,u,A,f,s.size)}else l.arraySetter&&_?x=l.arraySetter(e,f):x=l.setter(e,f);return x.location=f,x}const o={},a={},i=e.getProgramParameter(n,Qr);for(let c=0;c<i;++c){const s=e.getActiveUniform(n,c);if(ut(s))continue;let f=s.name;f.endsWith("[0]")&&(f=f.substr(0,f.length-3));const _=e.getUniformLocation(n,s.name);if(_){const u=t(n,s,_);o[f]=u,Xc(f,u,a,o)}}return o}function wc(e,n){const r={},t=e.getProgramParameter(n,bi);for(let o=0;o<t;++o){const a=e.getTransformFeedbackVarying(n,o);r[a.name]={index:o,type:a.type,size:a.size}}return r}function Dc(e,n){const r=e.getProgramParameter(n,Qr),t=[],o=[];for(let c=0;c<r;++c){o.push(c),t.push({});const s=e.getActiveUniform(n,c);t[c].name=s.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(c){const s=c[0],f=c[1];e.getActiveUniforms(n,o,e[s]).forEach(function(_,u){t[u][f]=_})});const a={},i=e.getProgramParameter(n,Si);for(let c=0;c<i;++c){const s=e.getActiveUniformBlockName(n,c),f={index:e.getUniformBlockIndex(n,s),usedByVertexShader:e.getActiveUniformBlockParameter(n,c,hi),usedByFragmentShader:e.getActiveUniformBlockParameter(n,c,Li),size:e.getActiveUniformBlockParameter(n,c,Ri),uniformIndices:e.getActiveUniformBlockParameter(n,c,Ui)};f.used=f.usedByVertexShader||f.usedByFragmentShader,a[s]=f}return{blockSpecs:a,uniformData:t}}function lt(e,n){for(const r in n){const t=e[r];typeof t=="function"?t(n[r]):lt(e[r],n[r])}}function Qn(e,...n){const r=e.uniformSetters||e,t=n.length;for(let o=0;o<t;++o){const a=n[o];if(Array.isArray(a)){const i=a.length;for(let c=0;c<i;++c)Qn(r,a[c])}else for(const i in a){const c=r[i];c&&c(a[i])}}}const J=Qn;function Oc(e,n){const r={},t=e.getProgramParameter(n,Ni);for(let o=0;o<t;++o){const a=e.getActiveAttrib(n,o);if(ut(a))continue;const i=e.getAttribLocation(n,a.name),c=L[a.type],s=c.setter(e,i,c);s.location=i,r[a.name]=s}return r}function Bc(e,n){for(const r in n){const t=e[r];t&&t(n[r])}}function K(e,n,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(Bc(n.attribSetters||n,r.attribs),r.indices&&e.bindBuffer(Ti,r.indices))}function cr(e,n){const r=Mc(e,n),t=Oc(e,n),o={program:n,uniformSetters:r,attribSetters:t};return Ue(e)&&(o.uniformBlockSpec=Dc(e,n),o.transformFeedbackInfo=wc(e,n)),o}const Cc=/\s|{|}|;/;function $(e,n,r,t,o){const a=Yn(r,t,o),i=[];if(n=n.map(function(f){if(!Cc.test(f)){const _=Yr(f);if(_)f=_.text;else{const u=`no element with id: ${f}`;a.errorCallback(u),i.push(u)}}return f}),i.length)return Ec(a,"");const c=a.callback;c&&(a.callback=(f,_)=>{c(f,f?void 0:cr(e,_))});const s=Rc(e,n,a);return s?cr(e,s):null}const _t=36160,me=36161,Yc=3553,Qc=5121,Gc=6402,Hc=6408,gc=33190,zc=36012,Wc=35056,Vc=36013,kc=32854,$c=32855,Kc=36194,At=33189,xt=6401,mt=36168,Gn=34041,Pn=36064,un=36096,dt=36128,Hn=33306,pn=33071,yn=9729,Ft=[{format:Hc,type:Qc,min:yn,wrap:pn},{format:Gn}],V={};V[Gn]=Hn;V[xt]=dt;V[mt]=dt;V[Gc]=un;V[At]=un;V[gc]=un;V[zc]=un;V[Wc]=Hn;V[Vc]=Hn;function jc(e,n){return V[e]||V[n]}const le={};le[kc]=!0;le[$c]=!0;le[Kc]=!0;le[Gn]=!0;le[At]=!0;le[xt]=!0;le[mt]=!0;function qc(e){return le[e]}const Zc=32;function Jc(e){return e>=Pn&&e<Pn+Zc}function es(e,n,r,t){const o=_t,a=e.createFramebuffer();e.bindFramebuffer(o,a),r=r||e.drawingBufferWidth,t=t||e.drawingBufferHeight,n=n||Ft;const i=[],c={framebuffer:a,attachments:[],width:r,height:t};return n.forEach(function(s,f){let _=s.attachment;const u=s.samples,l=s.format;let x=s.attachmentPoint||jc(l,s.internalFormat);if(x||(x=Pn+f),Jc(x)&&i.push(x),!_)if(u!==void 0||qc(l))_=e.createRenderbuffer(),e.bindRenderbuffer(me,_),u>1?e.renderbufferStorageMultisample(me,u,l,r,t):e.renderbufferStorage(me,l,r,t);else{const A=Object.assign({},s);A.width=r,A.height=t,A.auto===void 0&&(A.auto=!1,A.min=A.min||A.minMag||yn,A.mag=A.mag||A.minMag||yn,A.wrapS=A.wrapS||A.wrap||pn,A.wrapT=A.wrapT||A.wrap||pn),_=di(e,A)}if(Pr(e,_))e.framebufferRenderbuffer(o,x,me,_);else if(Je(e,_))s.layer!==void 0?e.framebufferTextureLayer(o,x,_,s.level||0,s.layer):e.framebufferTexture2D(o,x,s.target||Yc,_,s.level||0);else throw new Error("unknown attachment type");c.attachments.push(_)}),e.drawBuffers&&e.drawBuffers(i),c}function ns(e,n,r,t,o){t=t||e.drawingBufferWidth,o=o||e.drawingBufferHeight,n.width=t,n.height=o,r=r||Ft,r.forEach(function(a,i){const c=n.attachments[i],s=a.format,f=a.samples;if(f!==void 0||Pr(e,c))e.bindRenderbuffer(me,c),f>1?e.renderbufferStorageMultisample(me,f,s,t,o):e.renderbufferStorage(me,s,t,o);else if(Je(e,c))Fi(e,c,a,t,o);else throw new Error("unknown attachment type")})}function ee(e,n,r){r=r||_t,n?(e.bindFramebuffer(r,n.framebuffer),e.viewport(0,0,n.width,n.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}const ae=Object.freeze({superwhite:"superwhite",colorCanvas:"color-canvas",brightnessCanvas:"brightness-canvas",hdrToggle:"enable-hdr",antialiasToggle:"enable-antialias",hdrWarning:"hdr-warning",displayP3ToSrgbFilter:"display-p3-to-srgb",fpsCounter:"fps-counter"}),rs=4;function ts(e){const n=[];for(let r=0;r<rs;++r)n.push(es(e,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height));return n}function os(e,n){for(const r of n)ns(e,r,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height)}function Tt(e,n){const r=[];let t=1;for(let o=0;o<e;++o)r.push(sr(3*t,t)),t*=3;return r.push(sr(n,t)),r}function sr(e,n){const r=Math.ceil(1*e/n),t=2*r,o=r,a=2**t,i=[];for(let c=0;c<=o;++c)i.push(as(t,c)/a);return i.reverse(),`#version 300 es

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
in vec4 a_color;\r
\r
out vec3 v_position;\r
out vec3 v_normal;\r
out vec4 v_color;\r
\r
// Blinn-Phong reflection model\r
\r
void main()\r
{\r
    vec4 position = u_transform * a_position;\r
    gl_Position = position;\r
\r
    v_position = a_position.xyz;\r
    v_normal = a_normal;\r
    v_color = a_color;\r
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
#define LIGHT_COUNT 3\r
\r
uniform vec3 u_camera_position;\r
uniform vec3 u_light_positions[LIGHT_COUNT];\r
uniform vec3 u_light_colors[LIGHT_COUNT];\r
uniform vec3 u_ambient_light;\r
uniform float u_specular_reflection;\r
uniform float u_diffuse_reflection;\r
uniform float u_shininess;\r
\r
in vec3 v_position;\r
in vec3 v_normal;\r
in vec4 v_color;\r
\r
out vec4 out_color;\r
\r
// Blinn-Phong reflection model\r
\r
// TODO:\r
// - make specular color separate\r
// - make diffuse and specular colors and shininess varyings\r
// - make vertex shader calculate diffuse and specular colors, multiplying\r
//       them by the material's reflection constants\r
// - use structs\r
// - add directional lights and spotlights\r
// - deferred rendering\r
// - add textures and normal maps\r
\r
void main()\r
{\r
    vec3 normal = normalize(v_normal);\r
    vec3 camera_dir = normalize(u_camera_position - v_position);\r
\r
    vec3 light = u_diffuse_reflection * u_ambient_light;\r
\r
    for (int i = 0; i < LIGHT_COUNT; ++i)\r
    {\r
        vec3 light_dir = u_light_positions[i] - v_position;\r
        float reciprocal_dist = 1.0 / length(light_dir);\r
        light_dir *= reciprocal_dist;\r
        // Inverse square law\r
        float mult = min(reciprocal_dist * reciprocal_dist, 10.0);\r
        vec3 halfway_dir = normalize(light_dir + camera_dir);\r
\r
        float diffuse\r
            = u_diffuse_reflection\r
                * max(dot(normal, light_dir), 0.0);\r
        float specular = diffuse > 0.0\r
            ? u_specular_reflection\r
                * pow(max(dot(normal, halfway_dir), 0.0), u_shininess)\r
            : 0.0;\r
\r
        light += mult * u_light_colors[i] * (diffuse + specular);\r
    }\r
\r
    out_color = vec4(light * v_color.rgb, v_color.a);\r
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
`,fs=`#version 300 es\r
\r
precision highp float;\r
\r
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
        texture(u_scene_texture, v_texcoord).rgb\r
        + pow(texture(u_bloom_texture, v_texcoord).rgb, vec3(2.0)),\r
        1.0\r
    );\r
}\r
`,us=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float u_brightness_mult;\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
//=================================================================================================\r
//\r
//  Baking Lab\r
//  by MJP and David Neubelt\r
//  http://mynameismjp.wordpress.com/\r
//\r
//  All code licensed under the MIT license\r
//\r
//=================================================================================================\r
\r
/*\r
MIT License\r
\r
Copyright (c) 2016 MJP\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy\r
of this software and associated documentation files (the "Software"), to deal\r
in the Software without restriction, including without limitation the rights\r
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r
copies of the Software, and to permit persons to whom the Software is\r
furnished to do so, subject to the following conditions:\r
\r
The above copyright notice and this permission notice shall be included in all\r
copies or substantial portions of the Software.\r
\r
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r
SOFTWARE.\r
*/\r
\r
// The code in this file was originally written by Stephen Hill (@self_shadow), who deserves all\r
// credit for coming up with this fit and implementing it. Buy him a beer next time you see him. :)\r
\r
// Display P3 => sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\r
const mat3 ACESInputMat = mat3(\r
    vec3(0.715659, 0.0545842, 0.0127024),\r
    vec3(0.23137, 0.928216, 0.0671725),\r
    vec3(0.0529696, 0.0172004, 0.920124)\r
);\r
\r
// ODT_SAT => XYZ => D60_2_D65 => => sRGB => Display P3\r
const mat3 ACESOutputMat = mat3(\r
    vec3(1.30173, -0.0454211, 0.0170521),\r
    vec3(-0.240064, 1.05372, 0.00492421),\r
    vec3(-0.0616627, -0.00829585, 0.978016)\r
);\r
\r
vec3 RRTAndODTFit(vec3 v)\r
{\r
    vec3 a = v * (v + 0.0245786) - 0.000090537;\r
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;\r
    return a / b;\r
}\r
\r
vec3 ACESFitted(vec3 color)\r
{\r
    color = ACESInputMat * color;\r
\r
    // Apply RRT and ODT\r
    color = RRTAndODTFit(color);\r
\r
    color = ACESOutputMat * color;\r
\r
    // Clamp to [0, 1]\r
    color = clamp(color, vec3(0.0), vec3(1.0));\r
\r
    return color;\r
}\r
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
    vec3 tonemapped = ACESFitted(\r
        u_brightness_mult * texture(u_texture, v_texcoord).rgb\r
    );\r
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
`,Et=1;function ms(e,n){const r=[];for(const t of Tt(Et,n))r.push($(e,[Z,t]));return{blurRadius:n,programs:r}}function ds(e,n){const r=Pt(e,n.canvas.height),t=[];for(const o of Tt(Et,r))t.push($(n,[Z,o]));return{blurRadius:r,programs:t}}function Fs(e,n,r){const t=Pt(n,r.canvas.height);if(t!==e.blurRadius){for(const o of e.programs)r.deleteProgram(o.program);Object.assign(e,ms(r,t))}}function Pt(e,n){return e.bloomRadius/100*n*(Math.sin(e.verticalFov/2)/Math.sin(80/2))}function Ts(e,n){const r=$(n,[is,cs]),t=$(n,[Z,ss]),o=ds(e,n),a=$(n,[Z,fs]),i=$(n,[Z,us]),c=$(n,[Z,ls]),s=$(n,[Z,_s]),f=$(n,[Z,As]),_=$(n,[Z,xs]);return{sceneProgramInfo:r,bloomExtractBrightProgramInfo:t,bloomBlurPrograms:o,bloomCompositeProgramInfo:a,tonemapProgramInfo:i,antialiasProgramInfo:c,colorCanvasProgramInfo:s,brightnessCanvasProgramInfo:f,sdrCanvasProgramInfo:_}}function Es(e,n,r,t,o,a,i){r.useProgram(o.program),ee(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),K(r,o.attribSetters,i),J(o.uniformSetters,{u_transform:z.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),n.drawImage(r.canvas,0,0),r.useProgram(a.program),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),K(r,a.attribSetters,i),J(a.uniformSetters,{u_transform:z.identity(),u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements)}function Ps(e,n,r,t,o){n.useProgram(t.program),ee(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,t.attribSetters,o),J(t.uniformSetters,{u_transform:z.identity(),u_texture:r.attachments[0]}),n.drawArrays(n.TRIANGLES,0,o.numElements)}function ps(e,n,r,t,o,a,i,c,s){[r[0],r[3]]=[r[3],r[0]],n.useProgram(t.program),ee(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE);const f=e.bloomThresholdRatio*e.dynamicRange;K(n,t.attribSetters,s),J(t.uniformSetters,{u_transform:z.identity(),u_bloom_threshold:f,u_texture:r[3].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements);for(const _ of o.programs)n.useProgram(_.program),ee(n,r[2]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,_.attribSetters,s),J(_.uniformSetters,{u_transform:z.identity(),u_pixel_size:[1/n.canvas.width,0],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements),ee(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,_.attribSetters,s),J(_.uniformSetters,{u_transform:z.identity(),u_pixel_size:[0,1/n.canvas.height],u_texture:r[2].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements);if(n.useProgram(a.program),ee(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,a.attribSetters,s),J(a.uniformSetters,{u_transform:z.identity(),u_scene_texture:r[3].attachments[0],u_bloom_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements),n.useProgram(i.program),ee(n,r[1]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,i.attribSetters,s),J(i.uniformSetters,{u_transform:z.identity(),u_brightness_mult:1/e.dynamicRange,u_texture:r[0].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements),!e.isAntialiasingEnabled){[r[0],r[1]]=[r[1],r[0]];return}n.useProgram(c.program),ee(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),K(n,c.attribSetters,s),J(c.uniformSetters,{u_transform:z.identity(),u_reciprocal_resolution:[1/n.canvas.width,1/n.canvas.height],u_texture:r[1].attachments[0]}),n.drawArrays(n.TRIANGLES,0,s.numElements)}function ys(e,n){return z.inverse(z.lookAt(e,n,[0,1,0]))}function Is(e,n){return z.perspective(n*(Math.PI/180),e.canvas.width/e.canvas.height,.1,100)}let Ke=5,je=0,pt=0,yt=0,It=0,Nt=0,gn=!1;window.addEventListener("pointerdown",e=>{It=e.screenX,Nt=e.screenY,pt=Ke,yt=je,gn=!0});window.addEventListener("pointerup",e=>{gn=!1});window.addEventListener("pointermove",e=>{gn&&(Ke=Math.max(1,Math.min(10,pt+10*-(e.screenY-Nt)/screen.height)),je=(yt-2*Math.PI*(e.screenX-It)/screen.width)%(2*Math.PI))});function Ns(e,n,r,t,o){n.useProgram(t.program),ee(n,r[0]),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.enable(n.DEPTH_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),K(n,t.attribSetters,o);const a=Ke*Math.sin(je),i=.5,c=-5+Ke*Math.cos(je);Qn(t.uniformSetters,{u_transform:z.multiply(Is(n,e.verticalFov),ys([a,i,c],[0,-2,-5])),u_camera_position:[a,i,c],u_light_positions:[3,-2,0,-4,-2,-10,4,0,-8],u_light_colors:[1250,0,0,0,0,15,0,250,0],u_ambient_light:[.25,.25,.25],u_specular_reflection:5,u_diffuse_reflection:.5,u_shininess:50}),n.drawArrays(n.TRIANGLES,0,o.numElements)}var fr=function(e,n,r){if(r||arguments.length===2)for(var t=0,o=n.length,a;t<o;t++)(a||!(t in n))&&(a||(a=Array.prototype.slice.call(n,0,t)),a[t]=n[t]);return e.concat(a||Array.prototype.slice.call(n))},bs=function(){function e(n,r,t){this.name=n,this.version=r,this.os=t,this.type="browser"}return e}(),Ss=function(){function e(n){this.version=n,this.type="node",this.name="node",this.os=process.platform}return e}(),hs=function(){function e(n,r,t,o){this.name=n,this.version=r,this.os=t,this.bot=o,this.type="bot-device"}return e}(),Ls=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),Rs=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),Us=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,vs=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,ur=3,Xs=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",Us]],lr=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function Ms(e){return e?_r(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Rs:typeof navigator<"u"?_r(navigator.userAgent):Os()}function ws(e){return e!==""&&Xs.reduce(function(n,r){var t=r[0],o=r[1];if(n)return n;var a=o.exec(e);return!!a&&[t,a]},!1)}function _r(e){var n=ws(e);if(!n)return null;var r=n[0],t=n[1];if(r==="searchbot")return new Ls;var o=t[1]&&t[1].split(".").join("_").split("_").slice(0,3);o?o.length<ur&&(o=fr(fr([],o,!0),Bs(ur-o.length),!0)):o=[];var a=o.join("."),i=Ds(e),c=vs.exec(e);return c&&c[1]?new hs(r,a,i,c[1]):new bs(r,a,i)}function Ds(e){for(var n=0,r=lr.length;n<r;n++){var t=lr[n],o=t[0],a=t[1],i=a.exec(e);if(i)return o}return null}function Os(){var e=typeof process<"u"&&process.version;return e?new Ss(process.version.slice(1)):null}function Bs(e){for(var n=[],r=0;r<e;r++)n.push("0");return n}function Fe(e){return document.querySelector(`#${e}`)??(()=>{throw new Error(`could not get #${e}`)})()}function Cs(e){const n=e.getBoundingClientRect(),r=Math.round(n.right*devicePixelRatio)-Math.round(n.left*devicePixelRatio),t=Math.round(n.bottom*devicePixelRatio)-Math.round(n.top*devicePixelRatio);return e.width!==r||e.height!==t?(e.width=r,e.height=t,!0):!1}function Ys(e,n,r,t){var s;e.isHdrEnabled=Fe(ae.hdrToggle).checked,e.isAntialiasingEnabled=Fe(ae.antialiasToggle).checked;const o=Fe(ae.hdrWarning);let a;const i=window.matchMedia("(dynamic-range: high)").matches,c=((s=Ms())==null?void 0:s.name)??"unknown";i?c==="safari"?a="HDR is supported, but colors might not appear correctly on Safari.":c==="edge-chromium"?a="HDR is supported, but might not be displayed at full brightness on Edge.":a="":(a="HDR is not supported.",c!=="chrome"&&(a+=" If your device supports HDR, try using Chrome."),e.isHdrEnabled=!1),o.textContent!==a&&(o.textContent=a),e.isHdrEnabled?(n.style.visibility!=="visible"||r.style.visibility!=="visible"||t.style["mix-blend-mode"]!=="multiply")&&(n.style.visibility="visible",r.style.visibility="visible",t.style["mix-blend-mode"]="multiply"):(n.style.visibility!=="hidden"||r.style.visibility!=="hidden"||t.style["mix-blend-mode"]!=="normal")&&(n.style.visibility="hidden",r.style.visibility="hidden",t.style["mix-blend-mode"]="normal"),e.dynamicRange=e.isHdrEnabled?5:1}class Qs{constructor(){be(this,"_data");be(this,"_frontIdx");be(this,"_backIdx");be(this,"_size");this._data=[],this._frontIdx=0,this._backIdx=0,this._size=0}front(){return this._data[this._frontIdx]}back(){const n=this._backIdx===0?this._data.length-1:this._backIdx-1;return this._data[n]}enqueue(n){this._data.length===0?(this._data=Array(4).fill(null),this._frontIdx=0,this._backIdx=0):this._size===this._data.length&&(this._data=this._data.slice(this._frontIdx).concat(this._data.slice(0,this._backIdx)).concat(Array(this._data.length).fill(null)),this._frontIdx=0,this._backIdx=this._size),this._data[this._backIdx++]=n,this._backIdx===this._data.length&&(this._backIdx=0),++this._size}dequeue(){const n=this._data[this._frontIdx];return this._data[this._frontIdx++]=null,this._frontIdx===this._data.length&&(this._frontIdx=0),--this._size,n}get length(){return this._size}}const q=new Qs;function Gs(){if(q.enqueue(performance.now()),q.back()===q.front())return;for(;q.back()-q.front()>2e3;)q.dequeue();const e=Fe(ae.fpsCounter),n=(q.length-1)/((q.back()-q.front())/1e3),r=`FPS: ${Math.round(n)}`;e.textContent!==r&&(e.textContent=r)}function bt(e,n,r,t,o,a,i,c){Gs(),Hs(e,n,r,t,o,a,i,c),window.requestAnimationFrame(()=>{bt(e,n,r,t,o,a,i,c)})}function Hs(e,n,r,t,o,a,i,c){Ys(e,n,r.canvas,t.canvas);const s=r.filter;Cs(r.canvas)&&(r.filter=s,t.canvas.width=r.canvas.width,t.canvas.height=r.canvas.height,os(t,o)),Fs(a.bloomBlurPrograms,e,t),Ns(e,t,o,a.sceneProgramInfo,i),ps(e,t,o,a.bloomExtractBrightProgramInfo,a.bloomBlurPrograms,a.bloomCompositeProgramInfo,a.tonemapProgramInfo,a.antialiasProgramInfo,c),e.isHdrEnabled?Es(e,r,t,o[0],a.colorCanvasProgramInfo,a.brightnessCanvasProgramInfo,c):Ps(e,t,o[0],a.sdrCanvasProgramInfo,c)}function gs(){const e={isHdrEnabled:!0,dynamicRange:5,isAntialiasingEnabled:!1,verticalFov:80,bloomThresholdRatio:4,bloomRadius:4},n=Fe(ae.superwhite),r={alpha:!1,colorSpace:"display-p3",desynchronized:!1,willReadFrequently:!1},o=Fe(ae.colorCanvas).getContext("2d",r)??(()=>{throw new Error("could not get CanvasRenderingContext2D")})();o.filter=`url(#${ae.displayP3ToSrgbFilter})`;const a={alpha:!1,depth:!1,stencil:!1,desynchronized:!1,antialias:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"default",preserveDrawingBuffer:!1},c=Fe(ae.brightnessCanvas).getContext("webgl2",a)??(()=>{throw new Error("cannot get WebGL2RenderingContext")})();if(!c.getExtension("EXT_color_buffer_float"))throw new Error("could not get EXT_color_buffer_float");const s=Ts(e,c),_=jn(c,{a_position:{numComponents:4,data:[-1,-3,-4,1,1,-3,-4,1,-1,-1,-4,1,1,-1,-4,1,-1,-1,-4,1,1,-3,-4,1,1,-3,-4,1,1,-3,-6,1,1,-1,-4,1,1,-1,-6,1,1,-1,-4,1,1,-3,-6,1,1,-3,-6,1,-1,-3,-6,1,1,-1,-6,1,-1,-1,-6,1,1,-1,-6,1,-1,-3,-6,1,-1,-3,-6,1,-1,-3,-4,1,-1,-1,-6,1,-1,-1,-4,1,-1,-1,-6,1,-1,-3,-4,1,-1,-1,-4,1,1,-1,-4,1,-1,-1,-6,1,1,-1,-6,1,-1,-1,-6,1,1,-1,-4,1]},a_normal:{numComponents:3,data:[0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]},a_color:{numComponents:4,data:[.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1,.5,.5,1,1]}}),l=jn(c,{a_position:{numComponents:4,data:[-1,-1,0,1,3,-1,0,1,-1,3,0,1]},a_texcoord:{numComponents:2,data:[0,0,2,0,0,2]}}),x=ts(c);window.requestAnimationFrame(()=>{bt(e,n,o,c,x,s,_,l)})}window.onload=gs;
