(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */let We=Float32Array;function j(e,r,n){const t=new We(3);return e&&(t[0]=e),r&&(t[1]=r),n&&(t[2]=n),t}function ot(e,r,n){return n=n||new We(3),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}function gr(e,r,n){n=n||new We(3);const t=e[2]*r[0]-e[0]*r[2],o=e[0]*r[1]-e[1]*r[0];return n[0]=e[1]*r[2]-e[2]*r[1],n[1]=t,n[2]=o,n}function tr(e,r){r=r||new We(3);const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],t=Math.sqrt(n);return t>1e-5?(r[0]=e[0]/t,r[1]=e[1]/t,r[2]=e[2]/t):(r[0]=0,r[1]=0,r[2]=0),r}let R=Float32Array;function at(e){const r=R;return R=e,r}function it(e,r){return r=r||new R(16),r[0]=-e[0],r[1]=-e[1],r[2]=-e[2],r[3]=-e[3],r[4]=-e[4],r[5]=-e[5],r[6]=-e[6],r[7]=-e[7],r[8]=-e[8],r[9]=-e[9],r[10]=-e[10],r[11]=-e[11],r[12]=-e[12],r[13]=-e[13],r[14]=-e[14],r[15]=-e[15],r}function ct(){return new R(16).fill(0)}function rn(e,r){return r=r||new R(16),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r}function nn(e){return e=e||new R(16),e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ut(e,r){if(r=r||new R(16),r===e){let T;return T=e[1],e[1]=e[4],e[4]=T,T=e[2],e[2]=e[8],e[8]=T,T=e[3],e[3]=e[12],e[12]=T,T=e[6],e[6]=e[9],e[9]=T,T=e[7],e[7]=e[13],e[13]=T,T=e[11],e[11]=e[14],e[14]=T,r}const n=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],c=e[1*4+1],u=e[1*4+2],f=e[1*4+3],E=e[2*4+0],s=e[2*4+1],l=e[2*4+2],A=e[2*4+3],x=e[3*4+0],m=e[3*4+1],_=e[3*4+2],F=e[3*4+3];return r[0]=n,r[1]=i,r[2]=E,r[3]=x,r[4]=t,r[5]=c,r[6]=s,r[7]=m,r[8]=o,r[9]=u,r[10]=l,r[11]=_,r[12]=a,r[13]=f,r[14]=A,r[15]=F,r}function tn(e,r){r=r||new R(16);const n=e[0*4+0],t=e[0*4+1],o=e[0*4+2],a=e[0*4+3],i=e[1*4+0],c=e[1*4+1],u=e[1*4+2],f=e[1*4+3],E=e[2*4+0],s=e[2*4+1],l=e[2*4+2],A=e[2*4+3],x=e[3*4+0],m=e[3*4+1],_=e[3*4+2],F=e[3*4+3],T=l*F,b=_*A,y=u*F,p=_*f,d=u*A,P=l*f,B=o*F,O=_*a,C=o*A,w=l*a,X=o*f,M=u*a,H=E*m,G=x*s,g=i*m,z=x*c,V=i*s,de=E*c,Ne=n*m,ve=x*t,De=n*s,Ue=E*t,Le=n*c,Be=i*t,Xr=T*c+p*s+d*m-(b*c+y*s+P*m),Mr=b*t+B*s+w*m-(T*t+O*s+C*m),Hr=y*t+O*c+X*m-(p*t+B*c+M*m),Gr=P*t+C*c+M*s-(d*t+w*c+X*s),v=1/(n*Xr+i*Mr+E*Hr+x*Gr);return r[0]=v*Xr,r[1]=v*Mr,r[2]=v*Hr,r[3]=v*Gr,r[4]=v*(b*i+y*E+P*x-(T*i+p*E+d*x)),r[5]=v*(T*n+O*E+C*x-(b*n+B*E+w*x)),r[6]=v*(p*n+B*i+M*x-(y*n+O*i+X*x)),r[7]=v*(d*n+w*i+X*E-(P*n+C*i+M*E)),r[8]=v*(H*f+z*A+V*F-(G*f+g*A+de*F)),r[9]=v*(G*a+Ne*A+Ue*F-(H*a+ve*A+De*F)),r[10]=v*(g*a+ve*f+Le*F-(z*a+Ne*f+Be*F)),r[11]=v*(de*a+De*f+Be*A-(V*a+Ue*f+Le*A)),r[12]=v*(g*l+de*_+G*u-(V*_+H*u+z*l)),r[13]=v*(De*_+H*o+ve*l-(Ne*l+Ue*_+G*o)),r[14]=v*(Ne*u+Be*_+z*o-(Le*_+g*o+ve*u)),r[15]=v*(Le*l+V*o+Ue*u-(De*u+Be*l+de*o)),r}function ft(e,r,n){n=n||new R(16);const t=e[0],o=e[1],a=e[2],i=e[3],c=e[4],u=e[5],f=e[6],E=e[7],s=e[8],l=e[9],A=e[10],x=e[11],m=e[12],_=e[13],F=e[14],T=e[15],b=r[0],y=r[1],p=r[2],d=r[3],P=r[4],B=r[5],O=r[6],C=r[7],w=r[8],X=r[9],M=r[10],H=r[11],G=r[12],g=r[13],z=r[14],V=r[15];return n[0]=t*b+c*y+s*p+m*d,n[1]=o*b+u*y+l*p+_*d,n[2]=a*b+f*y+A*p+F*d,n[3]=i*b+E*y+x*p+T*d,n[4]=t*P+c*B+s*O+m*C,n[5]=o*P+u*B+l*O+_*C,n[6]=a*P+f*B+A*O+F*C,n[7]=i*P+E*B+x*O+T*C,n[8]=t*w+c*X+s*M+m*H,n[9]=o*w+u*X+l*M+_*H,n[10]=a*w+f*X+A*M+F*H,n[11]=i*w+E*X+x*M+T*H,n[12]=t*G+c*g+s*z+m*V,n[13]=o*G+u*g+l*z+_*V,n[14]=a*G+f*g+A*z+F*V,n[15]=i*G+E*g+x*z+T*V,n}function st(e,r,n){return n=n||nn(),e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11]),n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function lt(e,r){return r=r||j(),r[0]=e[12],r[1]=e[13],r[2]=e[14],r}function xt(e,r,n){n=n||j();const t=r*4;return n[0]=e[t+0],n[1]=e[t+1],n[2]=e[t+2],n}function Et(e,r,n,t){t!==e&&(t=rn(e,t));const o=n*4;return t[o+0]=r[0],t[o+1]=r[1],t[o+2]=r[2],t}function At(e,r,n,t,o){o=o||new R(16);const a=Math.tan(Math.PI*.5-.5*e),i=1/(n-t);return o[0]=a/r,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=a,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(n+t)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=n*t*i*2,o[15]=0,o}function mt(e,r,n,t,o,a,i){return i=i||new R(16),i[0]=2/(r-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(t-n),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-a),i[11]=0,i[12]=(r+e)/(e-r),i[13]=(t+n)/(n-t),i[14]=(a+o)/(o-a),i[15]=1,i}function _t(e,r,n,t,o,a,i){i=i||new R(16);const c=r-e,u=t-n,f=o-a;return i[0]=2*o/c,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/u,i[6]=0,i[7]=0,i[8]=(e+r)/c,i[9]=(t+n)/u,i[10]=a/f,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*a/f,i[15]=0,i}let q,te,Y;function Ft(e,r,n,t){return t=t||new R(16),q=q||j(),te=te||j(),Y=Y||j(),tr(ot(e,r,Y),Y),tr(gr(n,Y,q),q),tr(gr(Y,q,te),te),t[0]=q[0],t[1]=q[1],t[2]=q[2],t[3]=0,t[4]=te[0],t[5]=te[1],t[6]=te[2],t[7]=0,t[8]=Y[0],t[9]=Y[1],t[10]=Y[2],t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function Tt(e,r){return r=r||new R(16),r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function St(e,r,n){n=n||new R(16);const t=r[0],o=r[1],a=r[2],i=e[0],c=e[1],u=e[2],f=e[3],E=e[1*4+0],s=e[1*4+1],l=e[1*4+2],A=e[1*4+3],x=e[2*4+0],m=e[2*4+1],_=e[2*4+2],F=e[2*4+3],T=e[3*4+0],b=e[3*4+1],y=e[3*4+2],p=e[3*4+3];return e!==n&&(n[0]=i,n[1]=c,n[2]=u,n[3]=f,n[4]=E,n[5]=s,n[6]=l,n[7]=A,n[8]=x,n[9]=m,n[10]=_,n[11]=F),n[12]=i*t+E*o+x*a+T,n[13]=c*t+s*o+m*a+b,n[14]=u*t+l*o+_*a+y,n[15]=f*t+A*o+F*a+p,n}function bt(e,r){r=r||new R(16);const n=Math.cos(e),t=Math.sin(e);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=n,r[6]=t,r[7]=0,r[8]=0,r[9]=-t,r[10]=n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function yt(e,r,n){n=n||new R(16);const t=e[4],o=e[5],a=e[6],i=e[7],c=e[8],u=e[9],f=e[10],E=e[11],s=Math.cos(r),l=Math.sin(r);return n[4]=s*t+l*c,n[5]=s*o+l*u,n[6]=s*a+l*f,n[7]=s*i+l*E,n[8]=s*c-l*t,n[9]=s*u-l*o,n[10]=s*f-l*a,n[11]=s*E-l*i,e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Rt(e,r){r=r||new R(16);const n=Math.cos(e),t=Math.sin(e);return r[0]=n,r[1]=0,r[2]=-t,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=t,r[9]=0,r[10]=n,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function pt(e,r,n){n=n||new R(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],c=e[2*4+0],u=e[2*4+1],f=e[2*4+2],E=e[2*4+3],s=Math.cos(r),l=Math.sin(r);return n[0]=s*t-l*c,n[1]=s*o-l*u,n[2]=s*a-l*f,n[3]=s*i-l*E,n[8]=s*c+l*t,n[9]=s*u+l*o,n[10]=s*f+l*a,n[11]=s*E+l*i,e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function It(e,r){r=r||new R(16);const n=Math.cos(e),t=Math.sin(e);return r[0]=n,r[1]=t,r[2]=0,r[3]=0,r[4]=-t,r[5]=n,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Pt(e,r,n){n=n||new R(16);const t=e[0*4+0],o=e[0*4+1],a=e[0*4+2],i=e[0*4+3],c=e[1*4+0],u=e[1*4+1],f=e[1*4+2],E=e[1*4+3],s=Math.cos(r),l=Math.sin(r);return n[0]=s*t+l*c,n[1]=s*o+l*u,n[2]=s*a+l*f,n[3]=s*i+l*E,n[4]=s*c-l*t,n[5]=s*u-l*o,n[6]=s*f-l*a,n[7]=s*E-l*i,e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function ht(e,r,n){n=n||new R(16);let t=e[0],o=e[1],a=e[2];const i=Math.sqrt(t*t+o*o+a*a);t/=i,o/=i,a/=i;const c=t*t,u=o*o,f=a*a,E=Math.cos(r),s=Math.sin(r),l=1-E;return n[0]=c+(1-c)*E,n[1]=t*o*l+a*s,n[2]=t*a*l-o*s,n[3]=0,n[4]=t*o*l-a*s,n[5]=u+(1-u)*E,n[6]=o*a*l+t*s,n[7]=0,n[8]=t*a*l+o*s,n[9]=o*a*l-t*s,n[10]=f+(1-f)*E,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function dt(e,r,n,t){t=t||new R(16);let o=r[0],a=r[1],i=r[2];const c=Math.sqrt(o*o+a*a+i*i);o/=c,a/=c,i/=c;const u=o*o,f=a*a,E=i*i,s=Math.cos(n),l=Math.sin(n),A=1-s,x=u+(1-u)*s,m=o*a*A+i*l,_=o*i*A-a*l,F=o*a*A-i*l,T=f+(1-f)*s,b=a*i*A+o*l,y=o*i*A+a*l,p=a*i*A-o*l,d=E+(1-E)*s,P=e[0],B=e[1],O=e[2],C=e[3],w=e[4],X=e[5],M=e[6],H=e[7],G=e[8],g=e[9],z=e[10],V=e[11];return t[0]=x*P+m*w+_*G,t[1]=x*B+m*X+_*g,t[2]=x*O+m*M+_*z,t[3]=x*C+m*H+_*V,t[4]=F*P+T*w+b*G,t[5]=F*B+T*X+b*g,t[6]=F*O+T*M+b*z,t[7]=F*C+T*H+b*V,t[8]=y*P+p*w+d*G,t[9]=y*B+p*X+d*g,t[10]=y*O+p*M+d*z,t[11]=y*C+p*H+d*V,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t}function Nt(e,r){return r=r||new R(16),r[0]=e[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=e[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=e[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function vt(e,r,n){n=n||new R(16);const t=r[0],o=r[1],a=r[2];return n[0]=t*e[0*4+0],n[1]=t*e[0*4+1],n[2]=t*e[0*4+2],n[3]=t*e[0*4+3],n[4]=o*e[1*4+0],n[5]=o*e[1*4+1],n[6]=o*e[1*4+2],n[7]=o*e[1*4+3],n[8]=a*e[2*4+0],n[9]=a*e[2*4+1],n[10]=a*e[2*4+2],n[11]=a*e[2*4+3],e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n}function Dt(e,r,n){n=n||j();const t=r[0],o=r[1],a=r[2],i=t*e[0*4+3]+o*e[1*4+3]+a*e[2*4+3]+e[3*4+3];return n[0]=(t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0]+e[3*4+0])/i,n[1]=(t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1]+e[3*4+1])/i,n[2]=(t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2]+e[3*4+2])/i,n}function Ut(e,r,n){n=n||j();const t=r[0],o=r[1],a=r[2];return n[0]=t*e[0*4+0]+o*e[1*4+0]+a*e[2*4+0],n[1]=t*e[0*4+1]+o*e[1*4+1]+a*e[2*4+1],n[2]=t*e[0*4+2]+o*e[1*4+2]+a*e[2*4+2],n}function Lt(e,r,n){n=n||j();const t=tn(e),o=r[0],a=r[1],i=r[2];return n[0]=o*t[0*4+0]+a*t[0*4+1]+i*t[0*4+2],n[1]=o*t[1*4+0]+a*t[1*4+1]+i*t[1*4+2],n[2]=o*t[2*4+0]+a*t[2*4+1]+i*t[2*4+2],n}var K=Object.freeze({__proto__:null,axisRotate:dt,axisRotation:ht,copy:rn,create:ct,frustum:_t,getAxis:xt,getTranslation:lt,identity:nn,inverse:tn,lookAt:Ft,multiply:ft,negate:it,ortho:mt,perspective:At,rotateX:yt,rotateY:pt,rotateZ:Pt,rotationX:bt,rotationY:Rt,rotationZ:It,scale:vt,scaling:Nt,setAxis:Et,setDefaultType:at,setTranslation:st,transformDirection:Ut,transformNormal:Lt,transformPoint:Dt,translate:St,translation:Tt,transpose:ut});const mr=5120,be=5121,_r=5122,Fr=5123,Tr=5124,Sr=5125,br=5126,Bt=32819,Ot=32820,Ct=33635,wt=5131,Xt=33640,Mt=35899,Ht=35902,Gt=36269,gt=34042,on={};{const e=on;e[mr]=Int8Array,e[be]=Uint8Array,e[_r]=Int16Array,e[Fr]=Uint16Array,e[Tr]=Int32Array,e[Sr]=Uint32Array,e[br]=Float32Array,e[Bt]=Uint16Array,e[Ot]=Uint16Array,e[Ct]=Uint16Array,e[wt]=Uint16Array,e[Xt]=Uint32Array,e[Mt]=Uint32Array,e[Ht]=Uint32Array,e[Gt]=Uint32Array,e[gt]=Uint32Array}function yr(e){if(e instanceof Int8Array)return mr;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return be;if(e instanceof Int16Array)return _r;if(e instanceof Uint16Array)return Fr;if(e instanceof Int32Array)return Tr;if(e instanceof Uint32Array)return Sr;if(e instanceof Float32Array)return br;throw new Error("unsupported typed array type")}function an(e){if(e===Int8Array)return mr;if(e===Uint8Array||e===Uint8ClampedArray)return be;if(e===Int16Array)return _r;if(e===Uint16Array)return Fr;if(e===Int32Array)return Tr;if(e===Uint32Array)return Sr;if(e===Float32Array)return br;throw new Error("unsupported typed array type")}function cn(e){const r=on[e];if(!r)throw new Error("unknown gl type");return r}const Ge=typeof SharedArrayBuffer<"u"?function(r){return r&&r.buffer&&(r.buffer instanceof ArrayBuffer||r.buffer instanceof SharedArrayBuffer)}:function(r){return r&&r.buffer&&r.buffer instanceof ArrayBuffer};function un(...e){console.error(...e)}const zr=new Map;function Ye(e,r){if(!e||typeof e!="object")return!1;let n=zr.get(r);n||(n=new WeakMap,zr.set(r,n));let t=n.get(e);if(t===void 0){const o=Object.prototype.toString.call(e);t=o.substring(8,o.length-1)===r,n.set(e,t)}return t}function zt(e,r){return typeof WebGLBuffer<"u"&&Ye(r,"WebGLBuffer")}function Vt(e,r){return typeof WebGLRenderbuffer<"u"&&Ye(r,"WebGLRenderbuffer")}function Rr(e,r){return typeof WebGLTexture<"u"&&Ye(r,"WebGLTexture")}function $t(e,r){return typeof WebGLSampler<"u"&&Ye(r,"WebGLSampler")}const fn=35044,ie=34962,kt=34963,Wt=34660,Yt=5120,Kt=5121,qt=5122,Zt=5123,jt=5124,Qt=5125,sn=5126,ln={attribPrefix:""};function Jt(e,r,n,t,o){e.bindBuffer(r,n),e.bufferData(r,t,o||fn)}function xn(e,r,n,t){if(zt(e,r))return r;n=n||ie;const o=e.createBuffer();return Jt(e,n,o,r,t),o}function En(e){return e==="indices"}function eo(e){return e===Int8Array||e===Uint8Array}function ro(e){return e.length?e:e.data}const no=/coord|texture/i,to=/color|colour/i;function oo(e,r){let n;if(no.test(e)?n=2:to.test(e)?n=4:n=3,r%n>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${r} values is not evenly divisible by ${n}. You should specify it.`);return n}function ao(e,r,n){return e.numComponents||e.size||oo(r,n||ro(e).length)}function An(e,r){if(Ge(e))return e;if(Ge(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type?pr(e.type):void 0;return n||(En(r)?n=Uint16Array:n=Float32Array),new n(e.data)}function io(e){return typeof e=="number"?e:e?an(e):sn}function pr(e){return typeof e=="number"?cn(e):e||Float32Array}function co(e,r){return{buffer:r.buffer,numValues:2*3*4,type:io(r.type),arrayType:pr(r.type)}}function uo(e,r){const n=r.data||r,t=pr(r.type),o=n*t.BYTES_PER_ELEMENT,a=e.createBuffer();return e.bindBuffer(ie,a),e.bufferData(ie,o,r.drawType||fn),{buffer:a,numValues:n,type:an(t),arrayType:t}}function fo(e,r,n){const t=An(r,n);return{arrayType:t.constructor,buffer:xn(e,t,void 0,r.drawType),type:yr(t),numValues:0}}function so(e,r){const n={};return Object.keys(r).forEach(function(t){if(!En(t)){const o=r[t],a=o.attrib||o.name||o.attribName||ln.attribPrefix+t;if(o.value){if(!Array.isArray(o.value)&&!Ge(o.value))throw new Error("array.value is not array or typedarray");n[a]={value:o.value}}else{let i;o.buffer&&o.buffer instanceof WebGLBuffer?i=co:typeof o=="number"||typeof o.data=="number"?i=uo:i=fo;const{buffer:c,type:u,numValues:f,arrayType:E}=i(e,o,t),s=o.normalize!==void 0?o.normalize:eo(E),l=ao(o,t,f);n[a]={buffer:c,numComponents:l,type:u,normalize:s,stride:o.stride||0,offset:o.offset||0,divisor:o.divisor===void 0?void 0:o.divisor,drawType:o.drawType}}}}),e.bindBuffer(ie,null),n}function lo(e,r){return r===Yt||r===Kt?1:r===qt||r===Zt?2:r===jt||r===Qt||r===sn?4:0}const or=["position","positions","a_position"];function xo(e,r){let n,t;for(t=0;t<or.length&&(n=or[t],!(n in r||(n=ln.attribPrefix+n,n in r)));++t);t===or.length&&(n=Object.keys(r)[0]);const o=r[n];if(!o.buffer)return 1;e.bindBuffer(ie,o.buffer);const a=e.getBufferParameter(ie,Wt);e.bindBuffer(ie,null);const i=lo(e,o.type),c=a/i,u=o.numComponents||o.size,f=c/u;if(f%1!==0)throw new Error(`numComponents ${u} not correct for length ${length}`);return f}function Vr(e,r,n){const t=so(e,r),o=Object.assign({},n||{});o.attribs=Object.assign({},n?n.attribs:{},t);const a=r.indices;if(a){const i=An(a,"indices");o.indices=xn(e,i,kt),o.numElements=i.length,o.elementType=yr(i)}else o.numElements||(o.numElements=xo(e,o.attribs));return o}function Ie(e){return!!e.texStorage2D}const mn=function(){const e={},r={};function n(t){const o=t.constructor.name;if(!e[o]){for(const a in t)if(typeof t[a]=="number"){const i=r[t[a]];r[t[a]]=i?`${i} | ${a}`:a}e[o]=!0}}return function(o,a){return n(o),r[a]||(typeof a=="number"?`0x${a.toString(16)}`:a)}}(),J={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},ye=Ge,_n=function(){let e;return function(){return e=e||(typeof document<"u"&&document.createElement?document.createElement("canvas").getContext("2d"):null),e}}(),$r=6406,W=6407,h=6408,kr=6409,Wr=6410,Fe=6402,Yr=34041,ge=33071,Eo=9728,Ao=9729,ee=3553,Q=34067,ce=32879,ue=35866,Ir=34069,mo=34070,_o=34071,Fo=34072,To=34073,So=34074,cr=10241,ur=10240,ze=10242,Ve=10243,Kr=32882,bo=33082,yo=33083,Ro=33084,po=33085,Io=34892,Po=34893,Pr=3317,Fn=3314,Tn=32878,Sn=3316,bn=3315,yn=32877,ho=37443,No=37441,vo=37440,Do=33321,Uo=36756,Lo=33325,Bo=33326,Oo=33330,Co=33329,wo=33338,Xo=33337,Mo=33340,Ho=33339,Go=33323,go=36757,zo=33327,Vo=33328,$o=33336,ko=33335,Wo=33332,Yo=33331,Ko=33334,qo=33333,Zo=32849,jo=35905,Qo=36194,Jo=36758,ea=35898,ra=35901,na=34843,ta=34837,oa=36221,aa=36239,ia=36215,ca=36233,ua=36209,fa=36227,sa=32856,la=35907,xa=36759,Ea=32855,Aa=32854,ma=32857,_a=34842,Fa=34836,Ta=36220,Sa=36238,ba=36975,ya=36214,Ra=36232,pa=36226,Ia=36208,Pa=33189,ha=33190,da=36012,Na=36013,va=35056,Z=5120,I=5121,Oe=5122,fe=5123,Ce=5124,oe=5125,D=5126,qr=32819,Zr=32820,jr=33635,$=5131,Te=36193,ar=33640,Da=35899,Ua=35902,La=36269,Ba=34042,we=33319,se=33320,Xe=6403,le=36244,xe=36248,ae=36249;let ir;function Ke(e){if(!ir){const r={};r[$r]={textureFormat:$r,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,$,Te,D]},r[kr]={textureFormat:kr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[I,$,Te,D]},r[Wr]={textureFormat:Wr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[I,$,Te,D]},r[W]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[I,$,Te,D,jr]},r[h]={textureFormat:h,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[I,$,Te,D,qr,Zr]},r[Fe]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[oe,fe]},r[Do]={textureFormat:Xe,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[I]},r[Uo]={textureFormat:Xe,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[Z]},r[Lo]={textureFormat:Xe,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[D,$]},r[Bo]={textureFormat:Xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[D]},r[Oo]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[I]},r[Co]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[Z]},r[Wo]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[fe]},r[Yo]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Oe]},r[Ko]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[oe]},r[qo]={textureFormat:le,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ce]},r[Go]={textureFormat:we,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[I]},r[go]={textureFormat:we,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[Z]},r[zo]={textureFormat:we,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[D,$]},r[Vo]={textureFormat:we,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[D]},r[$o]={textureFormat:se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[I]},r[ko]={textureFormat:se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[Z]},r[wo]={textureFormat:se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[fe]},r[Xo]={textureFormat:se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Oe]},r[Mo]={textureFormat:se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[oe]},r[Ho]={textureFormat:se,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Ce]},r[Zo]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[I]},r[jo]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[I]},r[Qo]={textureFormat:W,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[I,jr]},r[Jo]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[Z]},r[ea]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[D,$,Da]},r[ra]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[D,$,Ua]},r[na]={textureFormat:W,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[D,$]},r[ta]={textureFormat:W,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[D]},r[oa]={textureFormat:xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[I]},r[aa]={textureFormat:xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[Z]},r[ia]={textureFormat:xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[fe]},r[ca]={textureFormat:xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[Oe]},r[ua]={textureFormat:xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[oe]},r[fa]={textureFormat:xe,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[Ce]},r[sa]={textureFormat:h,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},r[la]={textureFormat:h,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[I]},r[xa]={textureFormat:h,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[Z]},r[Ea]={textureFormat:h,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[I,Zr,ar]},r[Aa]={textureFormat:h,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[I,qr]},r[ma]={textureFormat:h,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[ar]},r[_a]={textureFormat:h,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[D,$]},r[Fa]={textureFormat:h,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[D]},r[Ta]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},r[Sa]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Z]},r[ba]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[ar]},r[ya]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[fe]},r[Ra]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[Oe]},r[pa]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[Ce]},r[Ia]={textureFormat:ae,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[oe]},r[Pa]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[fe,oe]},r[ha]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[oe]},r[da]={textureFormat:Fe,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[D]},r[va]={textureFormat:Yr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Ba]},r[Na]={textureFormat:Yr,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[La]},Object.keys(r).forEach(function(n){const t=r[n];t.bytesPerElementMap={},t.bytesPerElement.forEach(function(o,a){const i=t.type[a];t.bytesPerElementMap[i]=o})}),ir=r}return ir[e]}function Oa(e,r){const n=Ke(e);if(!n)throw"unknown internal format";const t=n.bytesPerElementMap[r];if(t===void 0)throw"unknown internal format";return t}function Pe(e){const r=Ke(e);if(!r)throw"unknown internal format";return{format:r.textureFormat,type:r.type[0]}}function Qr(e){return(e&e-1)===0}function Ca(e,r,n,t){if(!Ie(e))return Qr(r)&&Qr(n);const o=Ke(t);if(!o)throw"unknown internal format";return o.colorRenderable&&o.textureFilterable}function wa(e){const r=Ke(e);if(!r)throw"unknown internal format";return r.textureFilterable}function Xa(e,r,n){return ye(r)?yr(r):n||I}function Me(e,r,n,t,o){if(o%1!==0)throw"can't guess dimensions";if(!n&&!t){const a=Math.sqrt(o/(r===Q?6:1));a%1===0?(n=a,t=a):(n=o,t=1)}else if(t){if(!n&&(n=o/t,n%1))throw"can't guess dimensions"}else if(t=o/n,t%1)throw"can't guess dimensions";return{width:n,height:t}}function Ae(e,r){r.colorspaceConversion!==void 0&&e.pixelStorei(ho,r.colorspaceConversion),r.premultiplyAlpha!==void 0&&e.pixelStorei(No,r.premultiplyAlpha),r.flipY!==void 0&&e.pixelStorei(vo,r.flipY)}function Rn(e){e.pixelStorei(Pr,4),Ie(e)&&(e.pixelStorei(Fn,0),e.pixelStorei(Tn,0),e.pixelStorei(Sn,0),e.pixelStorei(bn,0),e.pixelStorei(yn,0))}function Ma(e,r,n,t){t.minMag&&(n.call(e,r,cr,t.minMag),n.call(e,r,ur,t.minMag)),t.min&&n.call(e,r,cr,t.min),t.mag&&n.call(e,r,ur,t.mag),t.wrap&&(n.call(e,r,ze,t.wrap),n.call(e,r,Ve,t.wrap),(r===ce||$t(e,r))&&n.call(e,r,Kr,t.wrap)),t.wrapR&&n.call(e,r,Kr,t.wrapR),t.wrapS&&n.call(e,r,ze,t.wrapS),t.wrapT&&n.call(e,r,Ve,t.wrapT),t.minLod!==void 0&&n.call(e,r,bo,t.minLod),t.maxLod!==void 0&&n.call(e,r,yo,t.maxLod),t.baseLevel!==void 0&&n.call(e,r,Ro,t.baseLevel),t.maxLevel!==void 0&&n.call(e,r,po,t.maxLevel),t.compareFunc!==void 0&&n.call(e,r,Po,t.compareFunc),t.compareMode!==void 0&&n.call(e,r,Io,t.compareMode)}function pn(e,r,n){const t=n.target||ee;e.bindTexture(t,r),Ma(e,t,e.texParameteri,n)}function Ha(e){return e=e||J.textureColor,ye(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function fr(e,r,n,t,o,a){n=n||J.textureOptions,a=a||h;const i=n.target||ee;if(t=t||n.width,o=o||n.height,e.bindTexture(i,r),Ca(e,t,o,a))e.generateMipmap(i);else{const c=wa(a)?Ao:Eo;e.texParameteri(i,cr,c),e.texParameteri(i,ur,c),e.texParameteri(i,ze,ge),e.texParameteri(i,Ve,ge)}}function Re(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function sr(e,r){return r=r||{},r.cubeFaceOrder||[Ir,mo,_o,Fo,To,So]}function lr(e,r){const t=sr(e,r).map(function(o,a){return{face:o,ndx:a}});return t.sort(function(o,a){return o.face-a.face}),t}function In(e,r,n,t){t=t||J.textureOptions;const o=t.target||ee,a=t.level||0;let i=n.width,c=n.height;const u=t.internalFormat||t.format||h,f=Pe(u),E=t.format||f.format,s=t.type||f.type;if(Ae(e,t),e.bindTexture(o,r),o===Q){const l=n.width,A=n.height;let x,m;if(l/6===A)x=A,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(A/6===l)x=l,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3===A/2)x=l/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2===A/3)x=l/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw"can't figure out cube map from element: "+(n.src?n.src:n.nodeName);const _=_n();_?(_.canvas.width=x,_.canvas.height=x,i=x,c=x,lr(e,t).forEach(function(F){const T=m[F.ndx*2+0]*x,b=m[F.ndx*2+1]*x;_.drawImage(n,T,b,x,x,0,0,x,x),e.texImage2D(F.face,a,u,E,s,_.canvas)}),_.canvas.width=1,_.canvas.height=1):typeof createImageBitmap<"u"&&(i=x,c=x,lr(e,t).forEach(function(F){const T=m[F.ndx*2+0]*x,b=m[F.ndx*2+1]*x;e.texImage2D(F.face,a,u,x,x,0,E,s,null),createImageBitmap(n,T,b,x,x,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(function(y){Ae(e,t),e.bindTexture(o,r),e.texImage2D(F.face,a,u,E,s,y),Re(t)&&fr(e,r,t,i,c,u)})}))}else if(o===ce||o===ue){const l=Math.min(n.width,n.height),A=Math.max(n.width,n.height),x=A/l;if(x%1!==0)throw"can not compute 3D dimensions of element";const m=n.width===A?1:0,_=n.height===A?1:0;e.pixelStorei(Pr,1),e.pixelStorei(Fn,n.width),e.pixelStorei(Tn,0),e.pixelStorei(yn,0),e.texImage3D(o,a,u,l,l,l,0,E,s,null);for(let F=0;F<x;++F){const T=F*l*m,b=F*l*_;e.pixelStorei(Sn,T),e.pixelStorei(bn,b),e.texSubImage3D(o,a,0,0,F,l,l,1,E,s,n)}Rn(e)}else e.texImage2D(o,a,u,E,s,n);Re(t)&&fr(e,r,t,i,c,u),pn(e,r,t)}function he(){}function Ga(e){if(typeof document<"u"){const r=document.createElement("a");return r.href=e,r.hostname===location.hostname&&r.port===location.port&&r.protocol===location.protocol}else{const r=new URL(location.href).origin;return new URL(e,location.href).origin===r}}function ga(e,r){return r===void 0&&!Ga(e)?"anonymous":r}function za(e,r,n){n=n||he;let t;if(r=r!==void 0?r:J.crossOrigin,r=ga(e,r),typeof Image<"u"){t=new Image,r!==void 0&&(t.crossOrigin=r);const o=function(){t.removeEventListener("error",a),t.removeEventListener("load",i),t=null},a=function(){const u="couldn't load image: "+e;un(u),n(u,t),o()},i=function(){n(null,t),o()};return t.addEventListener("error",a),t.addEventListener("load",i),t.src=e,t}else if(typeof ImageBitmap<"u"){let o,a;const i=function(){n(o,a)},c={};r&&(c.mode="cors"),fetch(e,c).then(function(u){if(!u.ok)throw u;return u.blob()}).then(function(u){return createImageBitmap(u,{premultiplyAlpha:"none",colorSpaceConversion:"none"})}).then(function(u){a=u,setTimeout(i)}).catch(function(u){o=u,setTimeout(i)}),t=null}return t}function Pn(e){return typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof ImageData<"u"&&e instanceof ImageData||typeof HTMLElement<"u"&&e instanceof HTMLElement}function hr(e,r,n){return Pn(e)?(setTimeout(function(){n(null,e)}),e):za(e,r,n)}function dr(e,r,n){n=n||J.textureOptions;const t=n.target||ee;if(e.bindTexture(t,r),n.color===!1)return;const o=Ha(n.color);if(t===Q)for(let a=0;a<6;++a)e.texImage2D(Ir+a,0,h,1,1,0,h,I,o);else t===ce||t===ue?e.texImage3D(t,0,h,1,1,1,0,h,I,o):e.texImage2D(t,0,h,1,1,0,h,I,o)}function Va(e,r,n,t){return t=t||he,n=n||J.textureOptions,dr(e,r,n),n=Object.assign({},n),hr(n.src,n.crossOrigin,function(a,i){a?t(a,r,i):(In(e,r,i,n),t(null,r,i))})}function $a(e,r,n,t){t=t||he;const o=n.src;if(o.length!==6)throw"there must be 6 urls for a cubemap";const a=n.level||0,i=n.internalFormat||n.format||h,c=Pe(i),u=n.format||c.format,f=n.type||I,E=n.target||ee;if(E!==Q)throw"target must be TEXTURE_CUBE_MAP";dr(e,r,n),n=Object.assign({},n);let s=6;const l=[],A=sr(e,n);let x;function m(_){return function(F,T){--s,F?l.push(F):T.width!==T.height?l.push("cubemap face img is not a square: "+T.src):(Ae(e,n),e.bindTexture(E,r),s===5?sr().forEach(function(b){e.texImage2D(b,a,i,u,f,T)}):e.texImage2D(_,a,i,u,f,T),Re(n)&&e.generateMipmap(E)),s===0&&t(l.length?l:void 0,r,x)}}x=o.map(function(_,F){return hr(_,n.crossOrigin,m(A[F]))})}function ka(e,r,n,t){t=t||he;const o=n.src,a=n.internalFormat||n.format||h,i=Pe(a),c=n.format||i.format,u=n.type||I,f=n.target||ue;if(f!==ce&&f!==ue)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";dr(e,r,n),n=Object.assign({},n);let E=o.length;const s=[];let l;const A=n.level||0;let x=n.width,m=n.height;const _=o.length;let F=!0;function T(b){return function(y,p){if(--E,y)s.push(y);else{if(Ae(e,n),e.bindTexture(f,r),F){F=!1,x=n.width||p.width,m=n.height||p.height,e.texImage3D(f,A,a,x,m,_,0,c,u,null);for(let d=0;d<_;++d)e.texSubImage3D(f,A,0,0,d,x,m,1,c,u,p)}else{let d=p,P;(p.width!==x||p.height!==m)&&(P=_n(),d=P.canvas,P.canvas.width=x,P.canvas.height=m,P.drawImage(p,0,0,x,m)),e.texSubImage3D(f,A,0,0,b,x,m,1,c,u,d),P&&d===P.canvas&&(P.canvas.width=0,P.canvas.height=0)}Re(n)&&e.generateMipmap(f)}E===0&&t(s.length?s:void 0,r,l)}}l=o.map(function(b,y){return hr(b,n.crossOrigin,T(y))})}function Wa(e,r,n,t){t=t||J.textureOptions;const o=t.target||ee;e.bindTexture(o,r);let a=t.width,i=t.height,c=t.depth;const u=t.level||0,f=t.internalFormat||t.format||h,E=Pe(f),s=t.format||E.format,l=t.type||Xa(e,n,E.type);if(ye(n))n instanceof Uint8ClampedArray&&(n=new Uint8Array(n.buffer));else{const _=cn(l);n=new _(n)}const A=Oa(f,l),x=n.byteLength/A;if(x%1)throw"length wrong size for format: "+mn(e,s);let m;if(o===ce||o===ue)if(!a&&!i&&!c){const _=Math.cbrt(x);if(_%1!==0)throw"can't guess cube size of array of numElements: "+x;a=_,i=_,c=_}else a&&(!i||!c)?(m=Me(e,o,i,c,x/a),i=m.width,c=m.height):i&&(!a||!c)?(m=Me(e,o,a,c,x/i),a=m.width,c=m.height):(m=Me(e,o,a,i,x/c),a=m.width,i=m.height);else m=Me(e,o,a,i,x),a=m.width,i=m.height;if(Rn(e),e.pixelStorei(Pr,t.unpackAlignment||1),Ae(e,t),o===Q){const _=A/n.BYTES_PER_ELEMENT,F=x/6*_;lr(e,t).forEach(T=>{const b=F*T.ndx,y=n.subarray(b,b+F);e.texImage2D(T.face,u,f,a,i,0,s,l,y)})}else o===ce||o===ue?e.texImage3D(o,u,f,a,i,c,0,s,l,n):e.texImage2D(o,u,f,a,i,0,s,l,n);return{width:a,height:i,depth:c,type:l}}function Ya(e,r,n){const t=n.target||ee;e.bindTexture(t,r);const o=n.level||0,a=n.internalFormat||n.format||h,i=Pe(a),c=n.format||i.format,u=n.type||i.type;if(Ae(e,n),t===Q)for(let f=0;f<6;++f)e.texImage2D(Ir+f,o,a,n.width,n.height,0,c,u,null);else t===ce||t===ue?e.texImage3D(t,o,a,n.width,n.height,n.depth,0,c,u,null):e.texImage2D(t,o,a,n.width,n.height,0,c,u,null)}function Ka(e,r,n){n=n||he,r=r||J.textureOptions;const t=e.createTexture(),o=r.target||ee;let a=r.width||1,i=r.height||1;const c=r.internalFormat||h;e.bindTexture(o,t),o===Q&&(e.texParameteri(o,ze,ge),e.texParameteri(o,Ve,ge));let u=r.src;if(u)if(typeof u=="function"&&(u=u(e,r)),typeof u=="string")Va(e,t,r,n);else if(ye(u)||Array.isArray(u)&&(typeof u[0]=="number"||Array.isArray(u[0])||ye(u[0]))){const f=Wa(e,t,u,r);a=f.width,i=f.height}else Array.isArray(u)&&(typeof u[0]=="string"||Pn(u[0]))?o===Q?$a(e,t,r,n):ka(e,t,r,n):(In(e,t,u,r),a=u.width,i=u.height);else Ya(e,t,r);return Re(r)&&fr(e,t,r,a,i,c),pn(e,t,r),t}const Nr=un;function hn(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const $e=33984,qe=34962,qa=34963,Za=35713,ja=35714,Qa=35632,Ja=35633,ei=35981,dn=35718,ri=35721,ni=35971,ti=35382,oi=35396,ai=35398,ii=35392,ci=35395,Ze=5126,Nn=35664,vn=35665,Dn=35666,vr=5124,Un=35667,Ln=35668,Bn=35669,On=35670,Cn=35671,wn=35672,Xn=35673,Mn=35674,Hn=35675,Gn=35676,ui=35678,fi=35680,si=35679,li=35682,xi=35685,Ei=35686,Ai=35687,mi=35688,_i=35689,Fi=35690,Ti=36289,Si=36292,bi=36293,Dr=5125,gn=36294,zn=36295,Vn=36296,yi=36298,Ri=36299,pi=36300,Ii=36303,Pi=36306,hi=36307,di=36308,Ni=36311,je=3553,Qe=34067,Ur=32879,Je=35866,S={};function $n(e,r){return S[r].bindPoint}function vi(e,r){return function(n){e.uniform1f(r,n)}}function Di(e,r){return function(n){e.uniform1fv(r,n)}}function Ui(e,r){return function(n){e.uniform2fv(r,n)}}function Li(e,r){return function(n){e.uniform3fv(r,n)}}function Bi(e,r){return function(n){e.uniform4fv(r,n)}}function kn(e,r){return function(n){e.uniform1i(r,n)}}function Wn(e,r){return function(n){e.uniform1iv(r,n)}}function Yn(e,r){return function(n){e.uniform2iv(r,n)}}function Kn(e,r){return function(n){e.uniform3iv(r,n)}}function qn(e,r){return function(n){e.uniform4iv(r,n)}}function Oi(e,r){return function(n){e.uniform1ui(r,n)}}function Ci(e,r){return function(n){e.uniform1uiv(r,n)}}function wi(e,r){return function(n){e.uniform2uiv(r,n)}}function Xi(e,r){return function(n){e.uniform3uiv(r,n)}}function Mi(e,r){return function(n){e.uniform4uiv(r,n)}}function Hi(e,r){return function(n){e.uniformMatrix2fv(r,!1,n)}}function Gi(e,r){return function(n){e.uniformMatrix3fv(r,!1,n)}}function gi(e,r){return function(n){e.uniformMatrix4fv(r,!1,n)}}function zi(e,r){return function(n){e.uniformMatrix2x3fv(r,!1,n)}}function Vi(e,r){return function(n){e.uniformMatrix3x2fv(r,!1,n)}}function $i(e,r){return function(n){e.uniformMatrix2x4fv(r,!1,n)}}function ki(e,r){return function(n){e.uniformMatrix4x2fv(r,!1,n)}}function Wi(e,r){return function(n){e.uniformMatrix3x4fv(r,!1,n)}}function Yi(e,r){return function(n){e.uniformMatrix4x3fv(r,!1,n)}}function U(e,r,n,t){const o=$n(e,r);return Ie(e)?function(a){let i,c;!a||Rr(e,a)?(i=a,c=null):(i=a.texture,c=a.sampler),e.uniform1i(t,n),e.activeTexture($e+n),e.bindTexture(o,i),e.bindSampler(n,c)}:function(a){e.uniform1i(t,n),e.activeTexture($e+n),e.bindTexture(o,a)}}function L(e,r,n,t,o){const a=$n(e,r),i=new Int32Array(o);for(let c=0;c<o;++c)i[c]=n+c;return Ie(e)?function(c){e.uniform1iv(t,i),c.forEach(function(u,f){e.activeTexture($e+i[f]);let E,s;!u||Rr(e,u)?(E=u,s=null):(E=u.texture,s=u.sampler),e.bindSampler(n,s),e.bindTexture(a,E)})}:function(c){e.uniform1iv(t,i),c.forEach(function(u,f){e.activeTexture($e+i[f]),e.bindTexture(a,u)})}}S[Ze]={Type:Float32Array,size:4,setter:vi,arraySetter:Di};S[Nn]={Type:Float32Array,size:8,setter:Ui,cols:2};S[vn]={Type:Float32Array,size:12,setter:Li,cols:3};S[Dn]={Type:Float32Array,size:16,setter:Bi,cols:4};S[vr]={Type:Int32Array,size:4,setter:kn,arraySetter:Wn};S[Un]={Type:Int32Array,size:8,setter:Yn,cols:2};S[Ln]={Type:Int32Array,size:12,setter:Kn,cols:3};S[Bn]={Type:Int32Array,size:16,setter:qn,cols:4};S[Dr]={Type:Uint32Array,size:4,setter:Oi,arraySetter:Ci};S[gn]={Type:Uint32Array,size:8,setter:wi,cols:2};S[zn]={Type:Uint32Array,size:12,setter:Xi,cols:3};S[Vn]={Type:Uint32Array,size:16,setter:Mi,cols:4};S[On]={Type:Uint32Array,size:4,setter:kn,arraySetter:Wn};S[Cn]={Type:Uint32Array,size:8,setter:Yn,cols:2};S[wn]={Type:Uint32Array,size:12,setter:Kn,cols:3};S[Xn]={Type:Uint32Array,size:16,setter:qn,cols:4};S[Mn]={Type:Float32Array,size:32,setter:Hi,rows:2,cols:2};S[Hn]={Type:Float32Array,size:48,setter:Gi,rows:3,cols:3};S[Gn]={Type:Float32Array,size:64,setter:gi,rows:4,cols:4};S[xi]={Type:Float32Array,size:32,setter:zi,rows:2,cols:3};S[Ei]={Type:Float32Array,size:32,setter:$i,rows:2,cols:4};S[Ai]={Type:Float32Array,size:48,setter:Vi,rows:3,cols:2};S[mi]={Type:Float32Array,size:48,setter:Wi,rows:3,cols:4};S[_i]={Type:Float32Array,size:64,setter:ki,rows:4,cols:2};S[Fi]={Type:Float32Array,size:64,setter:Yi,rows:4,cols:3};S[ui]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:je};S[fi]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Qe};S[si]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Ur};S[li]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:je};S[Ti]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Je};S[Si]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Je};S[bi]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Qe};S[yi]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:je};S[Ri]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Ur};S[pi]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Qe};S[Ii]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Je};S[Pi]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:je};S[hi]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Ur};S[di]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Qe};S[Ni]={Type:null,size:0,setter:U,arraySetter:L,bindPoint:Je};function er(e,r){return function(n){if(n.value)switch(e.disableVertexAttribArray(r),n.value.length){case 4:e.vertexAttrib4fv(r,n.value);break;case 3:e.vertexAttrib3fv(r,n.value);break;case 2:e.vertexAttrib2fv(r,n.value);break;case 1:e.vertexAttrib1fv(r,n.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(qe,n.buffer),e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.numComponents||n.size,n.type||Ze,n.normalize||!1,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(r,n.divisor||0)}}function re(e,r){return function(n){if(n.value)if(e.disableVertexAttribArray(r),n.value.length===4)e.vertexAttrib4iv(r,n.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(qe,n.buffer),e.enableVertexAttribArray(r),e.vertexAttribIPointer(r,n.numComponents||n.size,n.type||vr,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(r,n.divisor||0)}}function rr(e,r){return function(n){if(n.value)if(e.disableVertexAttribArray(r),n.value.length===4)e.vertexAttrib4uiv(r,n.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(qe,n.buffer),e.enableVertexAttribArray(r),e.vertexAttribIPointer(r,n.numComponents||n.size,n.type||Dr,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(r,n.divisor||0)}}function Lr(e,r,n){const t=n.size,o=n.count;return function(a){e.bindBuffer(qe,a.buffer);const i=a.size||a.numComponents||t,c=i/o,u=a.type||Ze,E=S[u].size*i,s=a.normalize||!1,l=a.offset||0,A=E/o;for(let x=0;x<o;++x)e.enableVertexAttribArray(r+x),e.vertexAttribPointer(r+x,c,u,s,E,l+A*x),e.vertexAttribDivisor&&e.vertexAttribDivisor(r+x,a.divisor||0)}}const N={};N[Ze]={size:4,setter:er};N[Nn]={size:8,setter:er};N[vn]={size:12,setter:er};N[Dn]={size:16,setter:er};N[vr]={size:4,setter:re};N[Un]={size:8,setter:re};N[Ln]={size:12,setter:re};N[Bn]={size:16,setter:re};N[Dr]={size:4,setter:rr};N[gn]={size:8,setter:rr};N[zn]={size:12,setter:rr};N[Vn]={size:16,setter:rr};N[On]={size:4,setter:re};N[Cn]={size:8,setter:re};N[wn]={size:12,setter:re};N[Xn]={size:16,setter:re};N[Mn]={size:4,setter:Lr,count:2};N[Hn]={size:9,setter:Lr,count:3};N[Gn]={size:16,setter:Lr,count:4};const Ki=/ERROR:\s*\d+:(\d+)/gi;function qi(e,r="",n=0){const t=[...r.matchAll(Ki)],o=new Map(t.map((a,i)=>{const c=parseInt(a[1]),u=t[i+1],f=u?u.index:r.length,E=r.substring(a.index,f);return[c-1,E]}));return e.split(`
`).map((a,i)=>{const c=o.get(i);return`${i+1+n}: ${a}${c?`

^^^ ${c}`:""}`}).join(`
`)}const Jr=/^[ \t]*\n/;function Zn(e){let r=0;return Jr.test(e)&&(r=1,e=e.replace(Jr,"")),{lineOffset:r,shaderSource:e}}function Zi(e,r){return e.errorCallback(r),e.callback&&setTimeout(()=>{e.callback(`${r}
${e.errors.join(`
`)}`)}),null}function ji(e,r,n,t){if(t=t||Nr,!e.getShaderParameter(n,Za)){const a=e.getShaderInfoLog(n),{lineOffset:i,shaderSource:c}=Zn(e.getShaderSource(n)),u=`${qi(c,a,i)}
Error compiling ${mn(e,r)}: ${a}`;return t(u),u}return""}function Br(e,r,n){let t,o,a;if(typeof r=="function"&&(n=r,r=void 0),typeof e=="function")n=e,e=void 0;else if(e&&!Array.isArray(e)){const f=e;n=f.errorCallback,e=f.attribLocations,t=f.transformFeedbackVaryings,o=f.transformFeedbackMode,a=f.callback}const i=n||Nr,c=[],u={errorCallback(f,...E){c.push(f),i(f,...E)},transformFeedbackVaryings:t,transformFeedbackMode:o,callback:a,errors:c};{let f={};Array.isArray(e)?e.forEach(function(E,s){f[E]=r?r[s]:s}):f=e||{},u.attribLocations=f}return u}const Qi=["VERTEX_SHADER","FRAGMENT_SHADER"];function Ji(e,r){if(r.indexOf("frag")>=0)return Qa;if(r.indexOf("vert")>=0)return Ja}function ec(e,r,n){const t=e.getAttachedShaders(r);for(const o of t)n.has(o)&&e.deleteShader(o);e.deleteProgram(r)}const rc=(e=0)=>new Promise(r=>setTimeout(r,e));function nc(e,r,n){const t=e.createProgram(),{attribLocations:o,transformFeedbackVaryings:a,transformFeedbackMode:i}=Br(n);for(let c=0;c<r.length;++c){let u=r[c];if(typeof u=="string"){const f=hn(u),E=f?f.text:u;let s=e[Qi[c]];f&&f.type&&(s=Ji(e,f.type)||s),u=e.createShader(s),e.shaderSource(u,Zn(E).shaderSource),e.compileShader(u),e.attachShader(t,u)}}Object.entries(o).forEach(([c,u])=>e.bindAttribLocation(t,u,c));{let c=a;c&&(c.attribs&&(c=c.attribs),Array.isArray(c)||(c=Object.keys(c)),e.transformFeedbackVaryings(t,c,i||ei))}return e.linkProgram(t),t}function tc(e,r,n,t,o){const a=Br(n,t,o),i=new Set(r),c=nc(e,r,a);function u(f,E){const s=ac(f,E,a.errorCallback);return s&&ec(f,E,i),s}if(a.callback){oc(e,c).then(()=>{const f=u(e,c);a.callback(f,f?void 0:c)});return}return u(e,c)?void 0:c}async function oc(e,r){const n=e.getExtension("KHR_parallel_shader_compile"),t=n?(a,i)=>a.getProgramParameter(i,n.COMPLETION_STATUS_KHR):()=>!0;let o=0;do await rc(o),o=1e3/60;while(!t(e,r))}function ac(e,r,n){if(n=n||Nr,!e.getProgramParameter(r,ja)){const o=e.getProgramInfoLog(r);n(`Error in program linking: ${o}`);const i=e.getAttachedShaders(r).map(c=>ji(e,e.getShaderParameter(c,e.SHADER_TYPE),c,n));return`${o}
${i.filter(c=>c).join(`
`)}`}}function ic(e,r,n,t,o){return tc(e,r,n,t,o)}function jn(e){const r=e.name;return r.startsWith("gl_")||r.startsWith("webgl_")}const cc=/(\.|\[|]|\w+)/g,uc=e=>e>="0"&&e<="9";function fc(e,r,n,t){const o=e.split(cc).filter(c=>c!=="");let a=0,i="";for(;;){const c=o[a++];i+=c;const u=uc(c[0]),f=u?parseInt(c):c;if(u&&(i+=o[a++]),a===o.length){n[f]=r;break}else{const s=o[a++],l=s==="[",A=n[f]||(l?[]:{});n[f]=A,n=A,t[i]=t[i]||function(x){return function(m){Qn(x,m)}}(A),i+=s}}}function sc(e,r){let n=0;function t(c,u,f){const E=u.name.endsWith("[0]"),s=u.type,l=S[s];if(!l)throw new Error(`unknown type: 0x${s.toString(16)}`);let A;if(l.bindPoint){const x=n;n+=u.size,E?A=l.arraySetter(e,s,x,f,u.size):A=l.setter(e,s,x,f,u.size)}else l.arraySetter&&E?A=l.arraySetter(e,f):A=l.setter(e,f);return A.location=f,A}const o={},a={},i=e.getProgramParameter(r,dn);for(let c=0;c<i;++c){const u=e.getActiveUniform(r,c);if(jn(u))continue;let f=u.name;f.endsWith("[0]")&&(f=f.substr(0,f.length-3));const E=e.getUniformLocation(r,u.name);if(E){const s=t(r,u,E);o[f]=s,fc(f,s,a,o)}}return o}function lc(e,r){const n={},t=e.getProgramParameter(r,ni);for(let o=0;o<t;++o){const a=e.getTransformFeedbackVarying(r,o);n[a.name]={index:o,type:a.type,size:a.size}}return n}function xc(e,r){const n=e.getProgramParameter(r,dn),t=[],o=[];for(let c=0;c<n;++c){o.push(c),t.push({});const u=e.getActiveUniform(r,c);t[c].name=u.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(c){const u=c[0],f=c[1];e.getActiveUniforms(r,o,e[u]).forEach(function(E,s){t[s][f]=E})});const a={},i=e.getProgramParameter(r,ti);for(let c=0;c<i;++c){const u=e.getActiveUniformBlockName(r,c),f={index:e.getUniformBlockIndex(r,u),usedByVertexShader:e.getActiveUniformBlockParameter(r,c,oi),usedByFragmentShader:e.getActiveUniformBlockParameter(r,c,ai),size:e.getActiveUniformBlockParameter(r,c,ii),uniformIndices:e.getActiveUniformBlockParameter(r,c,ci)};f.used=f.usedByVertexShader||f.usedByFragmentShader,a[u]=f}return{blockSpecs:a,uniformData:t}}function Qn(e,r){for(const n in r){const t=e[n];typeof t=="function"?t(r[n]):Qn(e[n],r[n])}}function Or(e,...r){const n=e.uniformSetters||e,t=r.length;for(let o=0;o<t;++o){const a=r[o];if(Array.isArray(a)){const i=a.length;for(let c=0;c<i;++c)Or(n,a[c])}else for(const i in a){const c=n[i];c&&c(a[i])}}}const pe=Or;function Ec(e,r){const n={},t=e.getProgramParameter(r,ri);for(let o=0;o<t;++o){const a=e.getActiveAttrib(r,o);if(jn(a))continue;const i=e.getAttribLocation(r,a.name),c=N[a.type],u=c.setter(e,i,c);u.location=i,n[a.name]=u}return n}function Ac(e,r){for(const n in r){const t=e[n];t&&t(r[n])}}function me(e,r,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(Ac(r.attribSetters||r,n.attribs),n.indices&&e.bindBuffer(qa,n.indices))}function en(e,r){const n=sc(e,r),t=Ec(e,r),o={program:r,uniformSetters:n,attribSetters:t};return Ie(e)&&(o.uniformBlockSpec=xc(e,r),o.transformFeedbackInfo=lc(e,r)),o}const mc=/\s|{|}|;/;function Ee(e,r,n,t,o){const a=Br(n,t,o),i=[];if(r=r.map(function(f){if(!mc.test(f)){const E=hn(f);if(E)f=E.text;else{const s=`no element with id: ${f}`;a.errorCallback(s),i.push(s)}}return f}),i.length)return Zi(a,"");const c=a.callback;c&&(a.callback=(f,E)=>{c(f,f?void 0:en(e,E))});const u=ic(e,r,a);return u?en(e,u):null}const Jn=36160,He=36161,_c=3553,Fc=5121,Tc=6402,Sc=6408,bc=33190,yc=36012,Rc=35056,pc=36013,Ic=32854,Pc=32855,hc=36194,et=33189,rt=6401,nt=36168,Cr=34041,xr=36064,nr=36096,tt=36128,wr=33306,Er=33071,Ar=9729,dc=[{format:Sc,type:Fc,min:Ar,wrap:Er},{format:Cr}],k={};k[Cr]=wr;k[rt]=tt;k[nt]=tt;k[Tc]=nr;k[et]=nr;k[bc]=nr;k[yc]=nr;k[Rc]=wr;k[pc]=wr;function Nc(e,r){return k[e]||k[r]}const ne={};ne[Ic]=!0;ne[Pc]=!0;ne[hc]=!0;ne[Cr]=!0;ne[et]=!0;ne[rt]=!0;ne[nt]=!0;function vc(e){return ne[e]}const Dc=32;function Uc(e){return e>=xr&&e<xr+Dc}function Lc(e,r,n,t){const o=Jn,a=e.createFramebuffer();e.bindFramebuffer(o,a),n=n||e.drawingBufferWidth,t=t||e.drawingBufferHeight,r=r||dc;const i=[],c={framebuffer:a,attachments:[],width:n,height:t};return r.forEach(function(u,f){let E=u.attachment;const s=u.samples,l=u.format;let A=u.attachmentPoint||Nc(l,u.internalFormat);if(A||(A=xr+f),Uc(A)&&i.push(A),!E)if(s!==void 0||vc(l))E=e.createRenderbuffer(),e.bindRenderbuffer(He,E),s>1?e.renderbufferStorageMultisample(He,s,l,n,t):e.renderbufferStorage(He,l,n,t);else{const x=Object.assign({},u);x.width=n,x.height=t,x.auto===void 0&&(x.auto=!1,x.min=x.min||x.minMag||Ar,x.mag=x.mag||x.minMag||Ar,x.wrapS=x.wrapS||x.wrap||Er,x.wrapT=x.wrapT||x.wrap||Er),E=Ka(e,x)}if(Vt(e,E))e.framebufferRenderbuffer(o,A,He,E);else if(Rr(e,E))u.layer!==void 0?e.framebufferTextureLayer(o,A,E,u.level||0,u.layer):e.framebufferTexture2D(o,A,u.target||_c,E,u.level||0);else throw new Error("unknown attachment type");c.attachments.push(E)}),e.drawBuffers&&e.drawBuffers(i),c}function _e(e,r,n){n=n||Jn,r?(e.bindFramebuffer(n,r.framebuffer),e.viewport(0,0,r.width,r.height)):(e.bindFramebuffer(n,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))}const Bc=`#version 300 es\r
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
`,Oc=`#version 300 es\r
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
`,Cc=`#version 300 es\r
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
float calc_luminance(vec3 x)\r
{\r
    // Y component of Display P3 to CIEXYZ\r
    return dot(\r
        vec3(0.22897, 0.69174, 0.07929),\r
        x\r
    );\r
}\r
\r
void main()\r
{\r
    // Extended Reinhard tone mapping using luminance\r
    // https://64.github.io/tonemapping/\r
    vec4 color = u_brightness_mult * texture(u_texture, v_texcoord);\r
    float luminance = calc_luminance(color.rgb);\r
    float ratio\r
        = (1.0 + u_reciprocal_white_point_squared * luminance)\r
        / (1.0 + luminance);\r
    vec4 tonemapped = vec4(\r
        color.rgb * ratio, color.a\r
    );\r
    tonemapped = clamp(tonemapped, vec4(0.0), vec4(1.0));\r
    out_color = tonemapped;\r
}\r
`,wc=`#version 300 es\r
\r
precision highp float;\r
\r
// Copyright (c) 2011 NVIDIA Corporation. All rights reserved.\r
//\r
// TO  THE MAXIMUM  EXTENT PERMITTED  BY APPLICABLE  LAW, THIS SOFTWARE  IS PROVIDED\r
// *AS IS*  AND NVIDIA AND  ITS SUPPLIERS DISCLAIM  ALL WARRANTIES,  EITHER  EXPRESS\r
// OR IMPLIED, INCLUDING, BUT NOT LIMITED  TO, NONINFRINGEMENT,IMPLIED WARRANTIES OF\r
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  IN NO EVENT SHALL  NVIDIA\r
// OR ITS SUPPLIERS BE  LIABLE  FOR  ANY  DIRECT, SPECIAL,  INCIDENTAL,  INDIRECT,  OR\r
// CONSEQUENTIAL DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION,  DAMAGES FOR LOSS\r
// OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY\r
// OTHER PECUNIARY LOSS) ARISING OUT OF THE  USE OF OR INABILITY  TO USE THIS SOFTWARE,\r
// EVEN IF NVIDIA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\r
//\r
// Please direct any bugs or questions to SDKFeedback@nvidia.com\r
\r
// Requires "#version 130" or better\r
#define int2 ivec2\r
#define float2 vec2\r
#define float3 vec3\r
#define float4 vec4\r
#define FxaaBool3 bvec3\r
#define FxaaInt2 ivec2\r
#define FxaaFloat2 vec2\r
#define FxaaFloat3 vec3\r
#define FxaaFloat4 vec4\r
#define FxaaBool2Float(a) mix(0.0, 1.0, (a))\r
#define FxaaPow3(x, y) pow(x, y)\r
#define FxaaSel3(f, t, b) mix((f), (t), (b))\r
#define FxaaTex sampler2D\r
\r
/*--------------------------------------------------------------------------*/\r
#define FxaaToFloat3(a) FxaaFloat3((a), (a), (a))\r
/*--------------------------------------------------------------------------*/\r
float4 FxaaTexLod0(FxaaTex tex, float2 pos) {\r
    return texture(tex, pos.xy);\r
}\r
/*--------------------------------------------------------------------------*/\r
float4 FxaaTexGrad(FxaaTex tex, float2 pos, float2 grad) {\r
    return textureGrad(tex, pos.xy, grad, grad);\r
}\r
/*--------------------------------------------------------------------------*/\r
float4 FxaaTexOff(FxaaTex tex, float2 pos, int2 off, float2 rcpFrame) {\r
    return texture(tex, pos.xy + float2(off.xy) * rcpFrame);\r
}\r
\r
/*============================================================================\r
                                 SRGB KNOBS\r
------------------------------------------------------------------------------\r
FXAA_SRGB_ROP - Set to 1 when applying FXAA to an sRGB back buffer (DX10/11).\r
                This will do the sRGB to linear transform,\r
                as ROP will expect linear color from this shader,\r
                and this shader works in non-linear color.\r
============================================================================*/\r
// We are not applying this to an sRGB buffer\r
#define FXAA_SRGB_ROP 0\r
\r
/*============================================================================\r
                                DEBUG KNOBS\r
------------------------------------------------------------------------------\r
All debug knobs draw FXAA-untouched pixels in FXAA computed luma (monochrome).\r
\r
FXAA_DEBUG_PASSTHROUGH - Red for pixels which are filtered by FXAA with a\r
                         yellow tint on sub-pixel aliasing filtered by FXAA.\r
FXAA_DEBUG_HORZVERT    - Blue for horizontal edges, gold for vertical edges.\r
FXAA_DEBUG_PAIR        - Blue/green for the 2 pixel pair choice.\r
FXAA_DEBUG_NEGPOS      - Red/blue for which side of center of span.\r
FXAA_DEBUG_OFFSET      - Red/blue for -/+ x, gold/skyblue for -/+ y.\r
============================================================================*/\r
#ifndef     FXAA_DEBUG_PASSTHROUGH\r
    #define FXAA_DEBUG_PASSTHROUGH 0\r
#endif\r
#ifndef     FXAA_DEBUG_HORZVERT\r
    #define FXAA_DEBUG_HORZVERT    0\r
#endif\r
#ifndef     FXAA_DEBUG_PAIR\r
    #define FXAA_DEBUG_PAIR        0\r
#endif\r
#ifndef     FXAA_DEBUG_NEGPOS\r
    #define FXAA_DEBUG_NEGPOS      0\r
#endif\r
#ifndef     FXAA_DEBUG_OFFSET\r
    #define FXAA_DEBUG_OFFSET      0\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if FXAA_DEBUG_PASSTHROUGH || FXAA_DEBUG_HORZVERT || FXAA_DEBUG_PAIR\r
    #define FXAA_DEBUG 1\r
#endif\r
#if FXAA_DEBUG_NEGPOS || FXAA_DEBUG_OFFSET\r
    #define FXAA_DEBUG 1\r
#endif\r
#ifndef FXAA_DEBUG\r
    #define FXAA_DEBUG 0\r
#endif\r
\r
/*============================================================================\r
                              COMPILE-IN KNOBS\r
------------------------------------------------------------------------------\r
FXAA_PRESET - Choose compile-in knob preset 0-5.\r
------------------------------------------------------------------------------\r
FXAA_EDGE_THRESHOLD - The minimum amount of local contrast required\r
                      to apply algorithm.\r
                      1.0/3.0  - too little\r
                      1.0/4.0  - good start\r
                      1.0/8.0  - applies to more edges\r
                      1.0/16.0 - overkill\r
------------------------------------------------------------------------------\r
FXAA_EDGE_THRESHOLD_MIN - Trims the algorithm from processing darks.\r
                          Perf optimization.\r
                          1.0/32.0 - visible limit (smaller isn't visible)\r
                          1.0/16.0 - good compromise\r
                          1.0/12.0 - upper limit (seeing artifacts)\r
------------------------------------------------------------------------------\r
FXAA_SEARCH_STEPS - Maximum number of search steps for end of span.\r
------------------------------------------------------------------------------\r
FXAA_SEARCH_ACCELERATION - How much to accelerate search,\r
                           1 - no acceleration\r
                           2 - skip by 2 pixels\r
                           3 - skip by 3 pixels\r
                           4 - skip by 4 pixels\r
------------------------------------------------------------------------------\r
FXAA_SEARCH_THRESHOLD - Controls when to stop searching.\r
                        1.0/4.0 - seems to be the best quality wise\r
------------------------------------------------------------------------------\r
FXAA_SUBPIX_FASTER - Turn on lower quality but faster subpix path.\r
                     Not recomended, but used in preset 0.\r
------------------------------------------------------------------------------\r
FXAA_SUBPIX - Toggle subpix filtering.\r
              0 - turn off\r
              1 - turn on\r
              2 - turn on full (ignores FXAA_SUBPIX_TRIM and CAP)\r
------------------------------------------------------------------------------\r
FXAA_SUBPIX_TRIM - Controls sub-pixel aliasing removal.\r
                   1.0/2.0 - low removal\r
                   1.0/3.0 - medium removal\r
                   1.0/4.0 - default removal\r
                   1.0/8.0 - high removal\r
                   0.0 - complete removal\r
------------------------------------------------------------------------------\r
FXAA_SUBPIX_CAP - Insures fine detail is not completely removed.\r
                  This is important for the transition of sub-pixel detail,\r
                  like fences and wires.\r
                  3.0/4.0 - default (medium amount of filtering)\r
                  7.0/8.0 - high amount of filtering\r
                  1.0 - no capping of sub-pixel aliasing removal\r
============================================================================*/\r
#ifndef FXAA_PRESET\r
    #define FXAA_PRESET 6\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if (FXAA_PRESET == 0)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/4.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/12.0)\r
    #define FXAA_SEARCH_STEPS        2\r
    #define FXAA_SEARCH_ACCELERATION 4\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       1\r
    #define FXAA_SUBPIX_CAP          (2.0/3.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/4.0)\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if (FXAA_PRESET == 1)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/8.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/16.0)\r
    #define FXAA_SEARCH_STEPS        4\r
    #define FXAA_SEARCH_ACCELERATION 3\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       0\r
    #define FXAA_SUBPIX_CAP          (3.0/4.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/4.0)\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if (FXAA_PRESET == 2)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/8.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/24.0)\r
    #define FXAA_SEARCH_STEPS        8\r
    #define FXAA_SEARCH_ACCELERATION 2\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       0\r
    #define FXAA_SUBPIX_CAP          (3.0/4.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/4.0)\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if (FXAA_PRESET == 3)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/8.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/24.0)\r
    #define FXAA_SEARCH_STEPS        16\r
    #define FXAA_SEARCH_ACCELERATION 1\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       0\r
    #define FXAA_SUBPIX_CAP          (3.0/4.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/4.0)\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if (FXAA_PRESET == 4)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/8.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/24.0)\r
    #define FXAA_SEARCH_STEPS        24\r
    #define FXAA_SEARCH_ACCELERATION 1\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       0\r
    #define FXAA_SUBPIX_CAP          (3.0/4.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/4.0)\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#if (FXAA_PRESET == 5)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/8.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/24.0)\r
    #define FXAA_SEARCH_STEPS        32\r
    #define FXAA_SEARCH_ACCELERATION 1\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       0\r
    #define FXAA_SUBPIX_CAP          (3.0/4.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/4.0)\r
#endif\r
// My own preset\r
#if (FXAA_PRESET == 6)\r
    #define FXAA_EDGE_THRESHOLD      (1.0/8.0)\r
    #define FXAA_EDGE_THRESHOLD_MIN  (1.0/32.0)\r
    #define FXAA_SEARCH_STEPS        32\r
    #define FXAA_SEARCH_ACCELERATION 1\r
    #define FXAA_SEARCH_THRESHOLD    (1.0/4.0)\r
    #define FXAA_SUBPIX              1\r
    #define FXAA_SUBPIX_FASTER       0\r
    #define FXAA_SUBPIX_CAP          (3.0/4.0)\r
    #define FXAA_SUBPIX_TRIM         (1.0/6.0)\r
#endif\r
/*--------------------------------------------------------------------------*/\r
#define FXAA_SUBPIX_TRIM_SCALE (1.0/(1.0 - FXAA_SUBPIX_TRIM))\r
\r
/*============================================================================\r
                                   HELPERS\r
============================================================================*/\r
// Return the luma, the estimation of luminance from rgb inputs.\r
// This approximates luma using one FMA instruction,\r
// skipping normalization and tossing out blue.\r
// FxaaLuma() will range 0.0 to 2.963210702.\r
float FxaaLuma(float3 rgb) {\r
    // Modified to work with display P3\r
    return dot(2.963210702 * float3(0.22897, 0.69174, 0.07929), rgb);\r
}\r
/*--------------------------------------------------------------------------*/\r
float3 FxaaLerp3(float3 a, float3 b, float amountOfA) {\r
    return (FxaaToFloat3(-amountOfA) * b) +\r
        ((a * FxaaToFloat3(amountOfA)) + b); }\r
/*--------------------------------------------------------------------------*/\r
// Support any extra filtering before returning color.\r
float3 FxaaFilterReturn(float3 rgb) {\r
    #if FXAA_SRGB_ROP\r
        // Do sRGB encoded value to linear conversion.\r
        return FxaaSel3(\r
            rgb * FxaaToFloat3(1.0/12.92),\r
            FxaaPow3(\r
                rgb * FxaaToFloat3(1.0/1.055) + FxaaToFloat3(0.055/1.055),\r
                FxaaToFloat3(2.4)),\r
            rgb > FxaaToFloat3(0.04045));\r
    #else\r
        return rgb;\r
    #endif\r
}\r
\r
/*============================================================================\r
\r
                                PIXEL SHADER\r
\r
============================================================================*/\r
float3 FxaaPixelShader(\r
// Output of FxaaVertexShader interpolated across screen.\r
//  xy -> actual texture position {0.0 to 1.0}\r
float2 pos,\r
// Input texture.\r
FxaaTex tex,\r
// RCPFRAME SHOULD PIXEL SHADER CONSTANTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\r
// {1.0/frameWidth, 1.0/frameHeight}\r
float2 rcpFrame) {\r
\r
/*----------------------------------------------------------------------------\r
            EARLY EXIT IF LOCAL CONTRAST BELOW EDGE DETECT LIMIT\r
----------------------------------------------------------------------------*/\r
    float3 rgbN = FxaaTexOff(tex, pos.xy, FxaaInt2( 0,-1), rcpFrame).xyz;\r
    float3 rgbW = FxaaTexOff(tex, pos.xy, FxaaInt2(-1, 0), rcpFrame).xyz;\r
    float3 rgbM = FxaaTexOff(tex, pos.xy, FxaaInt2( 0, 0), rcpFrame).xyz;\r
    float3 rgbE = FxaaTexOff(tex, pos.xy, FxaaInt2( 1, 0), rcpFrame).xyz;\r
    float3 rgbS = FxaaTexOff(tex, pos.xy, FxaaInt2( 0, 1), rcpFrame).xyz;\r
    float lumaN = FxaaLuma(rgbN);\r
    float lumaW = FxaaLuma(rgbW);\r
    float lumaM = FxaaLuma(rgbM);\r
    float lumaE = FxaaLuma(rgbE);\r
    float lumaS = FxaaLuma(rgbS);\r
    float rangeMin = min(lumaM, min(min(lumaN, lumaW), min(lumaS, lumaE)));\r
    float rangeMax = max(lumaM, max(max(lumaN, lumaW), max(lumaS, lumaE)));\r
    float range = rangeMax - rangeMin;\r
    #if FXAA_DEBUG\r
        float lumaO = lumaM / (1.0 + (0.587/0.299));\r
    #endif\r
    if(range < max(FXAA_EDGE_THRESHOLD_MIN, rangeMax * FXAA_EDGE_THRESHOLD)) {\r
        #if FXAA_DEBUG\r
            return FxaaFilterReturn(FxaaToFloat3(lumaO));\r
        #endif\r
        return FxaaFilterReturn(rgbM); }\r
    #if FXAA_SUBPIX > 0\r
        #if FXAA_SUBPIX_FASTER\r
            float3 rgbL = (rgbN + rgbW + rgbE + rgbS + rgbM) *\r
                FxaaToFloat3(1.0/5.0);\r
        #else\r
            float3 rgbL = rgbN + rgbW + rgbM + rgbE + rgbS;\r
        #endif\r
    #endif\r
\r
/*----------------------------------------------------------------------------\r
                               COMPUTE LOWPASS\r
----------------------------------------------------------------------------*/\r
    #if FXAA_SUBPIX != 0\r
        float lumaL = (lumaN + lumaW + lumaE + lumaS) * 0.25;\r
        float rangeL = abs(lumaL - lumaM);\r
    #endif\r
    #if FXAA_SUBPIX == 1\r
        float blendL = max(0.0,\r
            (rangeL / range) - FXAA_SUBPIX_TRIM) * FXAA_SUBPIX_TRIM_SCALE;\r
        blendL = min(FXAA_SUBPIX_CAP, blendL);\r
    #endif\r
    #if FXAA_SUBPIX == 2\r
        float blendL = rangeL / range;\r
    #endif\r
    #if FXAA_DEBUG_PASSTHROUGH\r
        #if FXAA_SUBPIX == 0\r
            float blendL = 0.0;\r
        #endif\r
        return FxaaFilterReturn(\r
            FxaaFloat3(1.0, blendL/FXAA_SUBPIX_CAP, 0.0));\r
    #endif\r
\r
/*----------------------------------------------------------------------------\r
                    CHOOSE VERTICAL OR HORIZONTAL SEARCH\r
----------------------------------------------------------------------------*/\r
    float3 rgbNW = FxaaTexOff(tex, pos.xy, FxaaInt2(-1,-1), rcpFrame).xyz;\r
    float3 rgbNE = FxaaTexOff(tex, pos.xy, FxaaInt2( 1,-1), rcpFrame).xyz;\r
    float3 rgbSW = FxaaTexOff(tex, pos.xy, FxaaInt2(-1, 1), rcpFrame).xyz;\r
    float3 rgbSE = FxaaTexOff(tex, pos.xy, FxaaInt2( 1, 1), rcpFrame).xyz;\r
    #if (FXAA_SUBPIX_FASTER == 0) && (FXAA_SUBPIX > 0)\r
        rgbL += (rgbNW + rgbNE + rgbSW + rgbSE);\r
        rgbL *= FxaaToFloat3(1.0/9.0);\r
    #endif\r
    float lumaNW = FxaaLuma(rgbNW);\r
    float lumaNE = FxaaLuma(rgbNE);\r
    float lumaSW = FxaaLuma(rgbSW);\r
    float lumaSE = FxaaLuma(rgbSE);\r
    float edgeVert =\r
        abs((0.25 * lumaNW) + (-0.5 * lumaN) + (0.25 * lumaNE)) +\r
        abs((0.50 * lumaW ) + (-1.0 * lumaM) + (0.50 * lumaE )) +\r
        abs((0.25 * lumaSW) + (-0.5 * lumaS) + (0.25 * lumaSE));\r
    float edgeHorz =\r
        abs((0.25 * lumaNW) + (-0.5 * lumaW) + (0.25 * lumaSW)) +\r
        abs((0.50 * lumaN ) + (-1.0 * lumaM) + (0.50 * lumaS )) +\r
        abs((0.25 * lumaNE) + (-0.5 * lumaE) + (0.25 * lumaSE));\r
    bool horzSpan = edgeHorz >= edgeVert;\r
    #if FXAA_DEBUG_HORZVERT\r
        if(horzSpan) return FxaaFilterReturn(FxaaFloat3(1.0, 0.75, 0.0));\r
        else         return FxaaFilterReturn(FxaaFloat3(0.0, 0.50, 1.0));\r
    #endif\r
    float lengthSign = horzSpan ? -rcpFrame.y : -rcpFrame.x;\r
    if(!horzSpan) lumaN = lumaW;\r
    if(!horzSpan) lumaS = lumaE;\r
    float gradientN = abs(lumaN - lumaM);\r
    float gradientS = abs(lumaS - lumaM);\r
    lumaN = (lumaN + lumaM) * 0.5;\r
    lumaS = (lumaS + lumaM) * 0.5;\r
\r
/*----------------------------------------------------------------------------\r
                CHOOSE SIDE OF PIXEL WHERE GRADIENT IS HIGHEST\r
----------------------------------------------------------------------------*/\r
    bool pairN = gradientN >= gradientS;\r
    #if FXAA_DEBUG_PAIR\r
        if(pairN) return FxaaFilterReturn(FxaaFloat3(0.0, 0.0, 1.0));\r
        else      return FxaaFilterReturn(FxaaFloat3(0.0, 1.0, 0.0));\r
    #endif\r
    if(!pairN) lumaN = lumaS;\r
    if(!pairN) gradientN = gradientS;\r
    if(!pairN) lengthSign *= -1.0;\r
    float2 posN;\r
    posN.x = pos.x + (horzSpan ? 0.0 : lengthSign * 0.5);\r
    posN.y = pos.y + (horzSpan ? lengthSign * 0.5 : 0.0);\r
\r
/*----------------------------------------------------------------------------\r
                         CHOOSE SEARCH LIMITING VALUES\r
----------------------------------------------------------------------------*/\r
    gradientN *= FXAA_SEARCH_THRESHOLD;\r
\r
/*----------------------------------------------------------------------------\r
    SEARCH IN BOTH DIRECTIONS UNTIL FIND LUMA PAIR AVERAGE IS OUT OF RANGE\r
----------------------------------------------------------------------------*/\r
    float2 posP = posN;\r
    float2 offNP = horzSpan ?\r
        FxaaFloat2(rcpFrame.x, 0.0) :\r
        FxaaFloat2(0.0f, rcpFrame.y);\r
    float lumaEndN = lumaN;\r
    float lumaEndP = lumaN;\r
    bool doneN = false;\r
    bool doneP = false;\r
    #if FXAA_SEARCH_ACCELERATION == 1\r
        posN += offNP * FxaaFloat2(-1.0, -1.0);\r
        posP += offNP * FxaaFloat2( 1.0,  1.0);\r
    #endif\r
    #if FXAA_SEARCH_ACCELERATION == 2\r
        posN += offNP * FxaaFloat2(-1.5, -1.5);\r
        posP += offNP * FxaaFloat2( 1.5,  1.5);\r
        offNP *= FxaaFloat2(2.0, 2.0);\r
    #endif\r
    #if FXAA_SEARCH_ACCELERATION == 3\r
        posN += offNP * FxaaFloat2(-2.0, -2.0);\r
        posP += offNP * FxaaFloat2( 2.0,  2.0);\r
        offNP *= FxaaFloat2(3.0, 3.0);\r
    #endif\r
    #if FXAA_SEARCH_ACCELERATION == 4\r
        posN += offNP * FxaaFloat2(-2.5, -2.5);\r
        posP += offNP * FxaaFloat2( 2.5,  2.5);\r
        offNP *= FxaaFloat2(4.0, 4.0);\r
    #endif\r
    for(int i = 0; i < FXAA_SEARCH_STEPS; i++) {\r
        #if FXAA_SEARCH_ACCELERATION == 1\r
            if(!doneN) lumaEndN =\r
                FxaaLuma(FxaaTexLod0(tex, posN.xy).xyz);\r
            if(!doneP) lumaEndP =\r
                FxaaLuma(FxaaTexLod0(tex, posP.xy).xyz);\r
        #else\r
            if(!doneN) lumaEndN =\r
                FxaaLuma(FxaaTexGrad(tex, posN.xy, offNP).xyz);\r
            if(!doneP) lumaEndP =\r
                FxaaLuma(FxaaTexGrad(tex, posP.xy, offNP).xyz);\r
        #endif\r
        doneN = doneN || (abs(lumaEndN - lumaN) >= gradientN);\r
        doneP = doneP || (abs(lumaEndP - lumaN) >= gradientN);\r
        if(doneN && doneP) break;\r
        if(!doneN) posN -= offNP;\r
        if(!doneP) posP += offNP; }\r
\r
/*----------------------------------------------------------------------------\r
               HANDLE IF CENTER IS ON POSITIVE OR NEGATIVE SIDE\r
----------------------------------------------------------------------------*/\r
    float dstN = horzSpan ? pos.x - posN.x : pos.y - posN.y;\r
    float dstP = horzSpan ? posP.x - pos.x : posP.y - pos.y;\r
    bool directionN = dstN < dstP;\r
    #if FXAA_DEBUG_NEGPOS\r
        if(directionN) return FxaaFilterReturn(FxaaFloat3(1.0, 0.0, 0.0));\r
        else           return FxaaFilterReturn(FxaaFloat3(0.0, 0.0, 1.0));\r
    #endif\r
    lumaEndN = directionN ? lumaEndN : lumaEndP;\r
\r
/*----------------------------------------------------------------------------\r
         CHECK IF PIXEL IS IN SECTION OF SPAN WHICH GETS NO FILTERING\r
----------------------------------------------------------------------------*/\r
    if(((lumaM - lumaN) < 0.0) == ((lumaEndN - lumaN) < 0.0))\r
        lengthSign = 0.0;\r
\r
/*----------------------------------------------------------------------------\r
                COMPUTE SUB-PIXEL OFFSET AND FILTER SPAN\r
----------------------------------------------------------------------------*/\r
    float spanLength = (dstP + dstN);\r
    dstN = directionN ? dstN : dstP;\r
    float subPixelOffset = (0.5 + (dstN * (-1.0/spanLength))) * lengthSign;\r
    #if FXAA_DEBUG_OFFSET\r
        float ox = horzSpan ? 0.0 : subPixelOffset*2.0/rcpFrame.x;\r
        float oy = horzSpan ? subPixelOffset*2.0/rcpFrame.y : 0.0;\r
        if(ox < 0.0) return FxaaFilterReturn(\r
            FxaaLerp3(FxaaToFloat3(lumaO),\r
                      FxaaFloat3(1.0, 0.0, 0.0), -ox));\r
        if(ox > 0.0) return FxaaFilterReturn(\r
            FxaaLerp3(FxaaToFloat3(lumaO),\r
                      FxaaFloat3(0.0, 0.0, 1.0),  ox));\r
        if(oy < 0.0) return FxaaFilterReturn(\r
            FxaaLerp3(FxaaToFloat3(lumaO),\r
                      FxaaFloat3(1.0, 0.6, 0.2), -oy));\r
        if(oy > 0.0) return FxaaFilterReturn(\r
            FxaaLerp3(FxaaToFloat3(lumaO),\r
                      FxaaFloat3(0.2, 0.6, 1.0),  oy));\r
        return FxaaFilterReturn(FxaaFloat3(lumaO, lumaO, lumaO));\r
    #endif\r
    float3 rgbF = FxaaTexLod0(tex, FxaaFloat2(\r
        pos.x + (horzSpan ? 0.0 : subPixelOffset),\r
        pos.y + (horzSpan ? subPixelOffset : 0.0))).xyz;\r
    #if FXAA_SUBPIX == 0\r
        return FxaaFilterReturn(rgbF);\r
    #else\r
        return FxaaFilterReturn(FxaaLerp3(rgbL, rgbF, blendL));\r
    #endif\r
}\r
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
        FxaaPixelShader(v_texcoord, u_texture, u_reciprocal_resolution), 1.0\r
    );\r
}\r
`,Xc=`#version 300 es\r
\r
precision highp float;\r
\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
vec4 srgb_to_linear(vec4 x)\r
{\r
    return vec4(\r
        mix(\r
            x.rgb / 12.92,\r
            pow((x.rgb + 0.055) / 1.055, vec3(2.4)),\r
            greaterThan(x.rgb, vec3(0.04045))\r
        ),\r
        x.a\r
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
vec4 linear_to_srgb(vec4 x)\r
{\r
    return vec4(\r
        mix(\r
            12.92 * x.rgb,\r
            1.055 * pow(x.rgb, vec3(1.0 / 2.4)) - 0.055,\r
            greaterThan(x.rgb, vec3(0.0031308))\r
        ),\r
        x.a\r
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
    vec4 color = linear_to_srgb(texture(u_texture, v_texcoord));\r
    color = clamp(color, vec4(0.0), vec4(1.0));\r
\r
    vec3 srgb = ceil(255.0 * color.rgb);\r
    float max_component = max(max(srgb.r, srgb.g), max(srgb.b, 1.0)) / 255.0;\r
\r
    out_color = vec4(color.rgb / max_component, color.a);\r
}\r
`,Mc=`#version 300 es\r
\r
precision highp float;\r
\r
uniform sampler2D u_texture;\r
\r
in vec2 v_texcoord;\r
\r
out vec4 out_color;\r
\r
vec4 srgb_to_linear(vec4 x)\r
{\r
    return vec4(\r
        mix(\r
            x.rgb / 12.92,\r
            pow((x.rgb + 0.055) / 1.055, vec3(2.4)),\r
            greaterThan(x.rgb, vec3(0.04045))\r
        ),\r
        x.a\r
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
vec4 linear_to_srgb(vec4 x)\r
{\r
    return vec4(\r
        mix(\r
            12.92 * x.rgb,\r
            1.055 * pow(x.rgb, vec3(1.0 / 2.4)) - 0.055,\r
            greaterThan(x.rgb, vec3(0.0031308))\r
        ),\r
        x.a\r
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
    vec4 color = linear_to_srgb(texture(u_texture, v_texcoord));\r
    color = clamp(color, vec4(0.0), vec4(1.0));\r
\r
    vec3 srgb = ceil(255.0 * color.rgb);\r
    float max_component = max(max(srgb.r, srgb.g), max(srgb.b, 1.0)) / 255.0;\r
\r
    out_color = vec4(vec3(max_component), color.a);\r
}\r
`,Hc=`#version 300 es\r
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
vec4 srgb_to_linear(vec4 x)\r
{\r
    return vec4(\r
        mix(\r
            x.rgb / 12.92,\r
            pow((x.rgb + 0.055) / 1.055, vec3(2.4)),\r
            greaterThan(x.rgb, vec3(0.04045))\r
        ),\r
        x.a\r
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
vec4 linear_to_srgb(vec4 x)\r
{\r
    return vec4(\r
        mix(\r
            12.92 * x.rgb,\r
            1.055 * pow(x.rgb, vec3(1.0 / 2.4)) - 0.055,\r
            greaterThan(x.rgb, vec3(0.0031308))\r
        ),\r
        x.a\r
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
    vec4 color = texture(u_texture, v_texcoord);\r
    color = linear_to_srgb(vec4(display_p3_to_srgb * color.rgb, color.a));\r
    color = clamp(color, vec4(0.0), vec4(1.0));\r
\r
    out_color = color;\r
}\r
`;function Gc(){const e=document.querySelector("#superwhite")??(()=>{throw new Error("could not get #superwhite")})(),r={alpha:!1,colorSpace:"display-p3",desynchronized:!1,willReadFrequently:!1},t=(document.querySelector("#color-canvas")??(()=>{throw new Error("could not get #color-canvas")})()).getContext("2d",r)??(()=>{throw new Error("could not get CanvasRenderingContext2D")})(),o={alpha:!1,depth:!1,stencil:!1,desynchronized:!1,antialias:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"default",preserveDrawingBuffer:!1},i=(document.querySelector("#brightness-canvas")??(()=>{throw new Error("could not get #brightness-canvas")})()).getContext("webgl2",o)??(()=>{throw new Error("cannot get WebGL2RenderingContext")})();if(!i.getExtension("EXT_color_buffer_float"))throw new Error("could not get EXT_color_buffer_float");const c=Ee(i,[Bc,Oc]),u=Ee(i,[Se,Cc]),f=Ee(i,[Se,wc]),E=Ee(i,[Se,Xc]),s=Ee(i,[Se,Mc]),l=Ee(i,[Se,Hc]),A={a_position:{numComponents:4,data:[-1,-1,-3,1,1,-1,-3,1,1,1,-4,1,-1,1,-4,1]},a_color:{numComponents:4,data:[0,0,0,1,0,0,20,1,0,20,0,1,20,0,0,1]},indices:{data:[0,1,3,2,3,1],type:i.UNSIGNED_SHORT}},x=Vr(i,A),_=Vr(i,{a_position:{numComponents:4,data:[-1,-1,0,1,3,-1,0,1,-1,3,0,1]},a_texcoord:{numComponents:2,data:[0,0,2,0,0,2]}}),F={value:ke(i)},T={value:ke(i)},b={value:new Uint8ClampedArray(4*i.canvas.width*i.canvas.height)};setInterval(gc,100,{isHdrEnabled:!0,dynamicRange:5,whitePoint:20,isAntialiasingEnabled:!1},e,t,i,F,T,c,u,f,E,s,l,x,_,b)}function gc(e,r,n,t,o,a,i,c,u,f,E,s,l,A,x){qc(e,r,n.canvas,t.canvas),Wc(n.canvas)&&(t.canvas.width=n.canvas.width,t.canvas.height=n.canvas.height,t.deleteFramebuffer(o.value.framebuffer),t.deleteFramebuffer(a.value.framebuffer),o.value=ke(t),a.value=ke(t),x.value=new Uint8ClampedArray(4*t.canvas.width*t.canvas.height));let m,_;[m,_]=zc(e,t,o.value,a.value,i,l),[m,_]=Vc(e,t,m,_,c,u,A),e.isHdrEnabled?$c(e,n,t,_,f,E,A,x.value):kc(e,t,_,s,A)}function zc(e,r,n,t,o,a){return _e(r,n),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.enable(r.DEPTH_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),r.useProgram(o.program),me(r,o.attribSetters,a),Or(o.uniformSetters,{u_transform:K.multiply(Kc(r,80),Yc([1,0,-1],[0,0,-4]))}),r.drawElements(r.TRIANGLES,a.numElements,a.elementType??(()=>{throw new Error("Rendering error")})(),0),[t,n]}function Vc(e,r,n,t,o,a,i){return _e(r,n),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(o.program),me(r,o.attribSetters,i),pe(o.uniformSetters,{u_transform:K.identity(),u_brightness_mult:1/e.dynamicRange,u_reciprocal_white_point_squared:1/e.whitePoint**2,u_texture:t.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),e.isAntialiasingEnabled?(_e(r,t),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.disable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(a.program),me(r,a.attribSetters,i),pe(a.uniformSetters,{u_transform:K.identity(),u_reciprocal_resolution:[1/r.canvas.width,1/r.canvas.height],u_texture:n.attachments[0]}),r.drawArrays(r.TRIANGLES,0,i.numElements),[n,t]):[t,n]}function $c(e,r,n,t,o,a,i,c){_e(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(o.program),me(n,o.attribSetters,i),pe(o.uniformSetters,{u_transform:K.identity(),u_texture:t.attachments[0]}),n.drawArrays(n.TRIANGLES,0,i.numElements),n.readPixels(0,0,n.canvas.width,n.canvas.height,n.RGBA,n.UNSIGNED_BYTE,c);const u=new ImageData(c,n.canvas.width,n.canvas.height,{colorSpace:"display-p3"});r.putImageData(u,0,0),_e(n,null),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.disable(n.DITHER),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.useProgram(a.program),me(n,a.attribSetters,i),pe(a.uniformSetters,{u_transform:K.identity(),u_texture:t.attachments[0]}),n.drawArrays(n.TRIANGLES,0,i.numElements)}function kc(e,r,n,t,o){_e(r,null),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DITHER),r.disable(r.DEPTH_TEST),r.disable(r.CULL_FACE),r.useProgram(t.program),me(r,t.attribSetters,o),pe(t.uniformSetters,{u_transform:K.identity(),u_texture:n.attachments[0]}),r.drawArrays(r.TRIANGLES,0,o.numElements)}function Wc(e){const r=e.getBoundingClientRect(),n=Math.round(r.right*devicePixelRatio)-Math.round(r.left*devicePixelRatio),t=Math.round(r.bottom*devicePixelRatio)-Math.round(r.top*devicePixelRatio);return e.width!==n||e.height!==t?(e.width=n,e.height=t,!0):!1}function ke(e){return Lc(e,[{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT,min:e.NEAREST,mag:e.NEAREST},{format:e.DEPTH_STENCIL,type:e.DEPTH32F_STENCIL8}],e.canvas.width,e.canvas.height)}function Yc(e,r){return K.inverse(K.lookAt(e,r,[0,1,0]))}function Kc(e,r){return K.perspective(r*(Math.PI/180),e.canvas.width/e.canvas.height,1,100)}function qc(e,r,n,t){e.isHdrEnabled=(document.querySelector("#enable-hdr")??(()=>{throw new Error("could not get #enable-hdr")})()).checked,e.isAntialiasingEnabled=(document.querySelector("#enable-antialias")??(()=>{throw new Error("could not get #enable-antialias")})()).checked;const o=document.querySelector("#hdr-warning")??(()=>{throw new Error("could not get #hdr-warning")})();window.matchMedia("(dynamic-range: high)").matches?o.textContent="":(o.textContent="Your device or browser does not support HDR.",e.isHdrEnabled=!1),e.isHdrEnabled?(r.style.visibility!=="visible"||n.style.visibility!=="visible"||t.style["mix-blend-mode"]!=="multiply")&&(r.style.visibility="visible",n.style.visibility="visible",t.style["mix-blend-mode"]="multiply"):(r.style.visibility!=="hidden"||n.style.visibility!=="hidden"||t.style["mix-blend-mode"]!=="normal")&&(r.style.visibility="hidden",n.style.visibility="hidden",t.style["mix-blend-mode"]="normal"),e.dynamicRange=e.isHdrEnabled?5:1}window.onload=Gc;
