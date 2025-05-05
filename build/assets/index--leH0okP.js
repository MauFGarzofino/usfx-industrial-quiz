(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="176",Br={ROTATE:0,DOLLY:1,PAN:2},Fr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ag=0,yu=1,lg=2,Fd=1,cg=2,ci=3,Ui=0,_n=1,hi=2,Ci=0,kr=1,Eu=2,xu=3,Su=4,hg=5,Ki=100,ug=101,fg=102,dg=103,pg=104,mg=200,gg=201,_g=202,vg=203,$l=204,Yl=205,yg=206,Eg=207,xg=208,Sg=209,Tg=210,Mg=211,Ag=212,bg=213,wg=214,Kl=0,Zl=1,Jl=2,Wr=3,Ql=4,tc=5,ec=6,nc=7,lh=0,Rg=1,Cg=2,Pi=0,Pg=1,Ig=2,Dg=3,Lg=4,Ng=5,Ug=6,Og=7,Vd=300,Xr=301,qr=302,ic=303,rc=304,Va=306,sc=1e3,Ji=1001,oc=1002,kn=1003,Fg=1004,xo=1005,jn=1006,rl=1007,Qi=1008,$n=1009,Bd=1010,kd=1011,Us=1012,ch=1013,rr=1014,ui=1015,Zs=1016,hh=1017,uh=1018,Os=1020,zd=35902,Hd=1021,Gd=1022,Vn=1023,Fs=1026,Vs=1027,Wd=1028,fh=1029,Xd=1030,dh=1031,ph=1033,na=33776,ia=33777,ra=33778,sa=33779,ac=35840,lc=35841,cc=35842,hc=35843,uc=36196,fc=37492,dc=37496,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,yc=37813,Ec=37814,xc=37815,Sc=37816,Tc=37817,Mc=37818,Ac=37819,bc=37820,wc=37821,oa=36492,Rc=36494,Cc=36495,qd=36283,Pc=36284,Ic=36285,Dc=36286,Vg=3200,Bg=3201,mh=0,kg=1,Ri="",An="srgb",jr="srgb-linear",_a="linear",ye="srgb",xr=7680,Tu=519,zg=512,Hg=513,Gg=514,jd=515,Wg=516,Xg=517,qg=518,jg=519,Mu=35044,Au="300 es",fi=2e3,va=2001;class fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],aa=Math.PI/180,Lc=180/Math.PI;function es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function $g(i,t){return(i%t+t)%t}function sl(i,t,e){return(1-e)*i+e*t}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Yg={DEG2RAD:aa};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,r,s,o,a,c,h){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,h)}set(t,e,n,r,s,o,a,c,h){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],u=n[4],f=n[7],p=n[2],g=n[5],x=n[8],T=r[0],_=r[3],m=r[6],U=r[1],I=r[4],R=r[7],V=r[2],O=r[5],M=r[8];return s[0]=o*T+a*U+c*V,s[3]=o*_+a*I+c*O,s[6]=o*m+a*R+c*M,s[1]=h*T+u*U+f*V,s[4]=h*_+u*I+f*O,s[7]=h*m+u*R+f*M,s[2]=p*T+g*U+x*V,s[5]=p*_+g*I+x*O,s[8]=p*m+g*R+x*M,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*s*u+n*a*c+r*s*h-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],f=u*o-a*h,p=a*c-u*s,g=h*s-o*c,x=e*f+n*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/x;return t[0]=f*T,t[1]=(r*h-u*n)*T,t[2]=(a*n-r*o)*T,t[3]=p*T,t[4]=(u*e-r*c)*T,t[5]=(r*s-a*e)*T,t[6]=g*T,t[7]=(n*c-h*e)*T,t[8]=(o*e-n*s)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),h=Math.sin(s);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-r*h,r*c,-r*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Jt;function $d(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ya(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kg(){const i=ya("canvas");return i.style.display="block",i}const bu={};function la(i){i in bu||(bu[i]=!0,console.warn(i))}function Zg(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Jg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t_(){const i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?_a:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:n,transfer:_a,toXYZ:wu,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:wu,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const me=t_();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class e_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Sr===void 0&&(Sr=ya("canvas")),Sr.width=t.width,Sr.height=t.height;const r=Sr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Sr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ya("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let n_=0;class gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(al(r[o].image)):s.push(al(r[o]))}else s=al(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?e_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i_=0;class vn extends fr{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=Ji,r=Ji,s=jn,o=Qi,a=Vn,c=$n,h=vn.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=es(),this.name="",this.source=new gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sc:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sc:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Vd;vn.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,r=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,h=c[0],u=c[4],f=c[8],p=c[1],g=c[5],x=c[9],T=c[2],_=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-T)<.01&&Math.abs(x-_)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+T)<.1&&Math.abs(x+_)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(h+1)/2,R=(g+1)/2,V=(m+1)/2,O=(u+p)/4,M=(f+T)/4,S=(x+_)/4;return I>R&&I>V?I<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(I),r=O/n,s=M/n):R>V?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=O/r,s=S/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=M/s,r=S/s),this.set(n,r,s,e),this}let U=Math.sqrt((_-x)*(_-x)+(f-T)*(f-T)+(p-u)*(p-u));return Math.abs(U)<.001&&(U=1),this.x=(_-x)/U,this.y=(f-T)/U,this.z=(p-u)/U,this.w=Math.acos((h+g+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r_ extends fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const r={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new gh(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends r_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yd extends vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class s_ extends vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],h=n[r+1],u=n[r+2],f=n[r+3];const p=s[o+0],g=s[o+1],x=s[o+2],T=s[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=x,t[e+3]=T;return}if(f!==T||c!==p||h!==g||u!==x){let _=1-a;const m=c*p+h*g+u*x+f*T,U=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const V=Math.sqrt(I),O=Math.atan2(V,m*U);_=Math.sin(_*O)/V,a=Math.sin(a*O)/V}const R=a*U;if(c=c*_+p*R,h=h*_+g*R,u=u*_+x*R,f=f*_+T*R,_===1-a){const V=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=V,h*=V,u*=V,f*=V}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o],p=s[o+1],g=s[o+2],x=s[o+3];return t[e]=a*x+u*f+c*g-h*p,t[e+1]=c*x+u*p+h*f-a*g,t[e+2]=h*x+u*g+a*p-c*f,t[e+3]=u*x-a*f-c*p-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),u=a(r/2),f=a(s/2),p=c(n/2),g=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*u*f+h*g*x,this._y=h*g*f-p*u*x,this._z=h*u*x+p*g*f,this._w=h*u*f-p*g*x;break;case"YXZ":this._x=p*u*f+h*g*x,this._y=h*g*f-p*u*x,this._z=h*u*x-p*g*f,this._w=h*u*f+p*g*x;break;case"ZXY":this._x=p*u*f-h*g*x,this._y=h*g*f+p*u*x,this._z=h*u*x+p*g*f,this._w=h*u*f-p*g*x;break;case"ZYX":this._x=p*u*f-h*g*x,this._y=h*g*f+p*u*x,this._z=h*u*x-p*g*f,this._w=h*u*f+p*g*x;break;case"YZX":this._x=p*u*f+h*g*x,this._y=h*g*f+p*u*x,this._z=h*u*x-p*g*f,this._w=h*u*f-p*g*x;break;case"XZY":this._x=p*u*f-h*g*x,this._y=h*g*f-p*u*x,this._z=h*u*x+p*g*f,this._w=h*u*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],h=e[2],u=e[6],f=e[10],p=n+a+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-h)*g,this._z=(o-r)*g}else if(n>a&&n>f){const g=2*Math.sqrt(1+n-a-f);this._w=(u-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+h)/g}else if(a>f){const g=2*Math.sqrt(1+a-n-f);this._w=(s-h)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-n-a);this._w=(o-r)/g,this._x=(s+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+r*h-s*c,this._y=r*u+o*c+s*a-n*h,this._z=s*u+o*h+n*c-r*a,this._w=o*u-n*a-r*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,a),f=Math.sin((1-e)*u)/h,p=Math.sin(e*u)/h;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*r-a*n),u=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+c*h+o*f-a*u,this.y=n+c*u+a*h-s*f,this.z=r+c*f+s*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new F,Cu=new or;class Js{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),To.subVectors(this.max,_s),Tr.subVectors(t.a,_s),Mr.subVectors(t.b,_s),Ar.subVectors(t.c,_s),xi.subVectors(Mr,Tr),Si.subVectors(Ar,Mr),Hi.subVectors(Tr,Ar);let e=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,Si.z,0,-Si.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-Hi.y,Hi.x,0];return!cl(e,Tr,Mr,Ar,To)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Tr,Mr,Ar,To))?!1:(Mo.crossVectors(xi,Si),e=[Mo.x,Mo.y,Mo.z],cl(e,Tr,Mr,Ar,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,So=new Js,Tr=new F,Mr=new F,Ar=new F,xi=new F,Si=new F,Hi=new F,_s=new F,To=new F,Mo=new F,Gi=new F;function cl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Gi.fromArray(i,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),c=t.dot(Gi),h=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}const o_=new Js,vs=new F,hl=new F;class Qs{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):o_.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(hl)),this.expandByPoint(vs.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new F,ul=new F,Ao=new F,Ti=new F,fl=new F,bo=new F,dl=new F;class Ba{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ul.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(ul);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ti.dot(this.direction),c=-Ti.dot(Ao),h=Ti.lengthSq(),u=Math.abs(1-o*o);let f,p,g,x;if(u>0)if(f=o*c-a,p=o*a-c,x=s*u,f>=0)if(p>=-x)if(p<=x){const T=1/u;f*=T,p*=T,g=f*(f+o*p+2*a)+p*(o*f+p+2*c)+h}else p=s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*c)+h;else p=-s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*c)+h;else p<=-x?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+p*(p+2*c)+h):p<=x?(f=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+h):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+p*(p+2*c)+h);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ul).addScaledVector(Ao,p),g}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,r=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,r=(t.min.x-p.x)*h),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,r,s){fl.subVectors(e,t),bo.subVectors(n,t),dl.crossVectors(fl,bo);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const c=a*this.direction.dot(bo.crossVectors(Ti,bo));if(c<0)return null;const h=a*this.direction.dot(fl.cross(Ti));if(h<0||c+h>o)return null;const u=-a*Ti.dot(dl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,r,s,o,a,c,h,u,f,p,g,x,T,_){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,h,u,f,p,g,x,T,_)}set(t,e,n,r,s,o,a,c,h,u,f,p,g,x,T,_){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=h,m[6]=u,m[10]=f,m[14]=p,m[3]=g,m[7]=x,m[11]=T,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/br.setFromMatrixColumn(t,0).length(),s=1/br.setFromMatrixColumn(t,1).length(),o=1/br.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),h=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*u,g=o*f,x=a*u,T=a*f;e[0]=c*u,e[4]=-c*f,e[8]=h,e[1]=g+x*h,e[5]=p-T*h,e[9]=-a*c,e[2]=T-p*h,e[6]=x+g*h,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,g=c*f,x=h*u,T=h*f;e[0]=p+T*a,e[4]=x*a-g,e[8]=o*h,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=g*a-x,e[6]=T+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,g=c*f,x=h*u,T=h*f;e[0]=p-T*a,e[4]=-o*f,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*u,e[9]=T-p*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,g=o*f,x=a*u,T=a*f;e[0]=c*u,e[4]=x*h-g,e[8]=p*h+T,e[1]=c*f,e[5]=T*h+p,e[9]=g*h-x,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*h,x=a*c,T=a*h;e[0]=c*u,e[4]=T-p*f,e[8]=x*f+g,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=g*f+x,e[10]=p-T*f}else if(t.order==="XZY"){const p=o*c,g=o*h,x=a*c,T=a*h;e[0]=c*u,e[4]=-f,e[8]=h*u,e[1]=p*f+T,e[5]=o*u,e[9]=g*f-x,e[2]=x*f-g,e[6]=a*u,e[10]=T*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a_,t,l_)}lookAt(t,e,n){const r=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Mi.crossVectors(n,Tn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Mi.crossVectors(n,Tn)),Mi.normalize(),wo.crossVectors(Tn,Mi),r[0]=Mi.x,r[4]=wo.x,r[8]=Tn.x,r[1]=Mi.y,r[5]=wo.y,r[9]=Tn.y,r[2]=Mi.z,r[6]=wo.z,r[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],u=n[1],f=n[5],p=n[9],g=n[13],x=n[2],T=n[6],_=n[10],m=n[14],U=n[3],I=n[7],R=n[11],V=n[15],O=r[0],M=r[4],S=r[8],y=r[12],v=r[1],A=r[5],N=r[9],w=r[13],tt=r[2],J=r[6],Q=r[10],et=r[14],$=r[3],gt=r[7],wt=r[11],Pt=r[15];return s[0]=o*O+a*v+c*tt+h*$,s[4]=o*M+a*A+c*J+h*gt,s[8]=o*S+a*N+c*Q+h*wt,s[12]=o*y+a*w+c*et+h*Pt,s[1]=u*O+f*v+p*tt+g*$,s[5]=u*M+f*A+p*J+g*gt,s[9]=u*S+f*N+p*Q+g*wt,s[13]=u*y+f*w+p*et+g*Pt,s[2]=x*O+T*v+_*tt+m*$,s[6]=x*M+T*A+_*J+m*gt,s[10]=x*S+T*N+_*Q+m*wt,s[14]=x*y+T*w+_*et+m*Pt,s[3]=U*O+I*v+R*tt+V*$,s[7]=U*M+I*A+R*J+V*gt,s[11]=U*S+I*N+R*Q+V*wt,s[15]=U*y+I*w+R*et+V*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],h=t[13],u=t[2],f=t[6],p=t[10],g=t[14],x=t[3],T=t[7],_=t[11],m=t[15];return x*(+s*c*f-r*h*f-s*a*p+n*h*p+r*a*g-n*c*g)+T*(+e*c*g-e*h*p+s*o*p-r*o*g+r*h*u-s*c*u)+_*(+e*h*f-e*a*g-s*o*f+n*o*g+s*a*u-n*h*u)+m*(-r*a*u-e*c*f+e*a*p+r*o*f-n*o*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],f=t[9],p=t[10],g=t[11],x=t[12],T=t[13],_=t[14],m=t[15],U=f*_*h-T*p*h+T*c*g-a*_*g-f*c*m+a*p*m,I=x*p*h-u*_*h-x*c*g+o*_*g+u*c*m-o*p*m,R=u*T*h-x*f*h+x*a*g-o*T*g-u*a*m+o*f*m,V=x*f*c-u*T*c-x*a*p+o*T*p+u*a*_-o*f*_,O=e*U+n*I+r*R+s*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/O;return t[0]=U*M,t[1]=(T*p*s-f*_*s-T*r*g+n*_*g+f*r*m-n*p*m)*M,t[2]=(a*_*s-T*c*s+T*r*h-n*_*h-a*r*m+n*c*m)*M,t[3]=(f*c*s-a*p*s-f*r*h+n*p*h+a*r*g-n*c*g)*M,t[4]=I*M,t[5]=(u*_*s-x*p*s+x*r*g-e*_*g-u*r*m+e*p*m)*M,t[6]=(x*c*s-o*_*s-x*r*h+e*_*h+o*r*m-e*c*m)*M,t[7]=(o*p*s-u*c*s+u*r*h-e*p*h-o*r*g+e*c*g)*M,t[8]=R*M,t[9]=(x*f*s-u*T*s-x*n*g+e*T*g+u*n*m-e*f*m)*M,t[10]=(o*T*s-x*a*s+x*n*h-e*T*h-o*n*m+e*a*m)*M,t[11]=(u*a*s-o*f*s-u*n*h+e*f*h+o*n*g-e*a*g)*M,t[12]=V*M,t[13]=(u*T*r-x*f*r+x*n*p-e*T*p-u*n*_+e*f*_)*M,t[14]=(x*a*r-o*T*r-x*n*c+e*T*c+o*n*_-e*a*_)*M,t[15]=(o*f*r-u*a*r+u*n*c-e*f*c-o*n*p+e*a*p)*M,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,h=s*o,u=s*a;return this.set(h*o+n,h*a-r*c,h*c+r*a,0,h*a+r*c,u*a+n,u*c-r*o,0,h*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,h=s+s,u=o+o,f=a+a,p=s*h,g=s*u,x=s*f,T=o*u,_=o*f,m=a*f,U=c*h,I=c*u,R=c*f,V=n.x,O=n.y,M=n.z;return r[0]=(1-(T+m))*V,r[1]=(g+R)*V,r[2]=(x-I)*V,r[3]=0,r[4]=(g-R)*O,r[5]=(1-(p+m))*O,r[6]=(_+U)*O,r[7]=0,r[8]=(x+I)*M,r[9]=(_-U)*M,r[10]=(1-(p+T))*M,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=br.set(r[0],r[1],r[2]).length();const o=br.set(r[4],r[5],r[6]).length(),a=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ln.copy(this);const h=1/s,u=1/o,f=1/a;return Ln.elements[0]*=h,Ln.elements[1]*=h,Ln.elements[2]*=h,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=fi){const c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let g,x;if(a===fi)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===va)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=fi){const c=this.elements,h=1/(e-t),u=1/(n-r),f=1/(o-s),p=(e+t)*h,g=(n+r)*u;let x,T;if(a===fi)x=(o+s)*f,T=-2*f;else if(a===va)x=s*f,T=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=T,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const br=new F,Ln=new be,a_=new F(0,0,0),l_=new F(1,1,1),Mi=new F,wo=new F,Tn=new F,Pu=new be,Iu=new or;class Hn{constructor(t=0,e=0,n=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],h=r[5],u=r[9],f=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let c_=0;const Du=new F,wr=new or,si=new be,Ro=new F,ys=new F,h_=new F,u_=new or,Lu=new F(1,0,0),Nu=new F(0,1,0),Uu=new F(0,0,1),Ou={type:"added"},f_={type:"removed"},Rr={type:"childadded",child:null},pl={type:"childremoved",child:null};class qe extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new F,e=new Hn,n=new or,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new Jt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,e){return wr.setFromAxisAngle(t,e),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Nu,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Du.copy(t).applyQuaternion(this.quaternion),this.position.add(Du.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Nu,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ys,Ro,this.up):si.lookAt(Ro,ys,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(si),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(f_),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,h_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,u_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const f=c[h];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const c=[];for(const h in a){const u=a[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}qe.DEFAULT_UP=new F(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new F,oi=new F,ml=new F,ai=new F,Cr=new F,Pr=new F,Fu=new F,gl=new F,_l=new F,vl=new F,yl=new De,El=new De,xl=new De;class On{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Nn.subVectors(t,e),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Nn.subVectors(r,e),oi.subVectors(n,e),ml.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(oi),c=Nn.dot(ml),h=oi.dot(oi),u=oi.dot(ml),f=o*h-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(h*c-a*u)*p,x=(o*u-a*c)*p;return s.set(1-g-x,x,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return yl.setScalar(0),El.setScalar(0),xl.setScalar(0),yl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),xl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(yl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(xl,s.z),o}static isFrontFacing(t,e,n,r){return Nn.subVectors(n,e),oi.subVectors(t,e),Nn.cross(oi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return On.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,n),Pr.subVectors(s,n),gl.subVectors(t,n);const c=Cr.dot(gl),h=Pr.dot(gl);if(c<=0&&h<=0)return e.copy(n);_l.subVectors(t,r);const u=Cr.dot(_l),f=Pr.dot(_l);if(u>=0&&f<=u)return e.copy(r);const p=c*f-u*h;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Cr,o);vl.subVectors(t,s);const g=Cr.dot(vl),x=Pr.dot(vl);if(x>=0&&g<=x)return e.copy(s);const T=g*h-c*x;if(T<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(Pr,a);const _=u*x-g*f;if(_<=0&&f-u>=0&&g-x>=0)return Fu.subVectors(s,r),a=(f-u)/(f-u+(g-x)),e.copy(r).addScaledVector(Fu,a);const m=1/(_+T+p);return o=T*m,a=p*m,e.copy(n).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=me.workingColorSpace){if(t=$g(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Sl(o,s,t+1/3),this.g=Sl(o,s,t),this.b=Sl(o,s,t-1/3)}return me.toWorkingColorSpace(this,r),this}setStyle(t,e=An){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=Zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return me.fromWorkingColorSpace(sn.copy(this),t),Math.round(ne(sn.r*255,0,255))*65536+Math.round(ne(sn.g*255,0,255))*256+Math.round(ne(sn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,r=sn.g,s=sn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,h;const u=(a+o)/2;if(a===o)c=0,h=0;else{const f=o-a;switch(h=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=An){me.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,r=sn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Co);const n=sl(Ai.h,Co.h,e),r=sl(Ai.s,Co.s,e),s=sl(Ai.l,Co.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Qt;Qt.NAMES=Zd;let d_=0;class Yn extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=es(),this.name="",this.type="Material",this.blending=kr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Yl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==Yl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jd extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new F,Po=new dt;let p_=0;class zn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mu&&(t.usage=this.usage),t}}class Qd extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tp extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Je extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let m_=0;const bn=new be,Tl=new qe,Ir=new F,Mn=new Js,Es=new Js,Ge=new F;class Pn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?tp:Qd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Tl.lookAt(t),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Mn.min,Es.min),Mn.expandByPoint(Ge),Ge.addVectors(Mn.max,Es.max),Mn.expandByPoint(Ge)):(Mn.expandByPoint(Es.min),Mn.expandByPoint(Es.max))}Mn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Ge.fromBufferAttribute(a,h),c&&(Ir.fromBufferAttribute(t,h),Ge.add(Ir)),r=Math.max(r,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new F,c[S]=new F;const h=new F,u=new F,f=new F,p=new dt,g=new dt,x=new dt,T=new F,_=new F;function m(S,y,v){h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,v),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),x.fromBufferAttribute(s,v),u.sub(h),f.sub(h),g.sub(p),x.sub(p);const A=1/(g.x*x.y-x.x*g.y);isFinite(A)&&(T.copy(u).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(A),_.copy(f).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(A),a[S].add(T),a[y].add(T),a[v].add(T),c[S].add(_),c[y].add(_),c[v].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let S=0,y=U.length;S<y;++S){const v=U[S],A=v.start,N=v.count;for(let w=A,tt=A+N;w<tt;w+=3)m(t.getX(w+0),t.getX(w+1),t.getX(w+2))}const I=new F,R=new F,V=new F,O=new F;function M(S){V.fromBufferAttribute(r,S),O.copy(V);const y=a[S];I.copy(y),I.sub(V.multiplyScalar(V.dot(y))).normalize(),R.crossVectors(O,y);const A=R.dot(c[S])<0?-1:1;o.setXYZW(S,I.x,I.y,I.z,A)}for(let S=0,y=U.length;S<y;++S){const v=U[S],A=v.start,N=v.count;for(let w=A,tt=A+N;w<tt;w+=3)M(t.getX(w+0)),M(t.getX(w+1)),M(t.getX(w+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new F,s=new F,o=new F,a=new F,c=new F,h=new F,u=new F,f=new F;if(t)for(let p=0,g=t.count;p<g;p+=3){const x=t.getX(p+0),T=t.getX(p+1),_=t.getX(p+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,T),o.fromBufferAttribute(e,_),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,_),a.add(u),c.add(u),h.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){const h=a.array,u=a.itemSize,f=a.normalized,p=new h.constructor(c.length*u);let g=0,x=0;for(let T=0,_=c.length;T<_;T++){a.isInterleavedBufferAttribute?g=c[T]*a.data.stride+a.offset:g=c[T]*u;for(let m=0;m<u;m++)p[x++]=h[g++]}return new zn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],h=t(c,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const c=[],h=s[a];for(let u=0,f=h.length;u<f;u++){const p=h[u],g=t(p,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let f=0,p=h.length;f<p;f++){const g=h[f];u.push(g.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const u=r[h];this.setAttribute(h,u.clone(e))}const s=t.morphAttributes;for(const h in s){const u=[],f=s[h];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vu=new be,Wi=new Ba,Io=new Qs,Bu=new F,Do=new F,Lo=new F,No=new F,Ml=new F,Uo=new F,ku=new F,Oo=new F;class Cn extends qe{constructor(t=new Pn,e=new Jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let c=0,h=s.length;c<h;c++){const u=a[c],f=s[c];u!==0&&(Ml.fromBufferAttribute(f,t),o?Uo.addScaledVector(Ml,u):Uo.addScaledVector(Ml.sub(e),u))}e.add(Uo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Wi.copy(t.ray).recast(t.near),!(Io.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Io,Bu)===null||Wi.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Vu.copy(s).invert(),Wi.copy(t.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,T=p.length;x<T;x++){const _=p[x],m=o[_.materialIndex],U=Math.max(_.start,g.start),I=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let R=U,V=I;R<V;R+=3){const O=a.getX(R),M=a.getX(R+1),S=a.getX(R+2);r=Fo(this,m,t,n,h,u,f,O,M,S),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,g.start),T=Math.min(a.count,g.start+g.count);for(let _=x,m=T;_<m;_+=3){const U=a.getX(_),I=a.getX(_+1),R=a.getX(_+2);r=Fo(this,o,t,n,h,u,f,U,I,R),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,T=p.length;x<T;x++){const _=p[x],m=o[_.materialIndex],U=Math.max(_.start,g.start),I=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let R=U,V=I;R<V;R+=3){const O=R,M=R+1,S=R+2;r=Fo(this,m,t,n,h,u,f,O,M,S),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const x=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let _=x,m=T;_<m;_+=3){const U=_,I=_+1,R=_+2;r=Fo(this,o,t,n,h,u,f,U,I,R),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function g_(i,t,e,n,r,s,o,a){let c;if(t.side===_n?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Ui,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Oo);return h<e.near||h>e.far?null:{distance:h,point:Oo.clone(),object:i}}function Fo(i,t,e,n,r,s,o,a,c,h){i.getVertexPosition(a,Do),i.getVertexPosition(c,Lo),i.getVertexPosition(h,No);const u=g_(i,t,e,n,Do,Lo,No,ku);if(u){const f=new F;On.getBarycoord(ku,Do,Lo,No,f),r&&(u.uv=On.getInterpolatedAttribute(r,a,c,h,f,new dt)),s&&(u.uv1=On.getInterpolatedAttribute(s,a,c,h,f,new dt)),o&&(u.normal=On.getInterpolatedAttribute(o,a,c,h,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:h,normal:new F,materialIndex:0};On.getNormal(Do,Lo,No,p.normal),u.face=p,u.barycoord=f}return u}class to extends Pn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],h=[],u=[],f=[];let p=0,g=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(f,2));function x(T,_,m,U,I,R,V,O,M,S,y){const v=R/M,A=V/S,N=R/2,w=V/2,tt=O/2,J=M+1,Q=S+1;let et=0,$=0;const gt=new F;for(let wt=0;wt<Q;wt++){const Pt=wt*A-w;for(let Ht=0;Ht<J;Ht++){const kt=Ht*v-N;gt[T]=kt*U,gt[_]=Pt*I,gt[m]=tt,h.push(gt.x,gt.y,gt.z),gt[T]=0,gt[_]=0,gt[m]=O>0?1:-1,u.push(gt.x,gt.y,gt.z),f.push(Ht/M),f.push(1-wt/S),et+=1}}for(let wt=0;wt<S;wt++)for(let Pt=0;Pt<M;Pt++){const Ht=p+Pt+J*wt,kt=p+Pt+J*(wt+1),Z=p+(Pt+1)+J*(wt+1),ft=p+(Pt+1)+J*wt;c.push(Ht,kt,ft),c.push(kt,Z,ft),$+=6}a.addGroup(g,$,y),g+=$,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $r(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function un(i){const t={};for(let e=0;e<i.length;e++){const n=$r(i[e]);for(const r in n)t[r]=n[r]}return t}function __(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ep(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const v_={clone:$r,merge:un};var y_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$r(t.uniforms),this.uniformsGroups=__(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class np extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new F,zu=new dt,Hu=new dt;class Rn extends np{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,zu,Hu),e.subVectors(Hu,zu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(aa*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/h,r*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Dr=-90,Lr=1;class x_ extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Dr,Lr,t,e);r.layers=this.layers,this.add(r);const s=new Rn(Dr,Lr,t,e);s.layers=this.layers,this.add(s);const o=new Rn(Dr,Lr,t,e);o.layers=this.layers,this.add(o);const a=new Rn(Dr,Lr,t,e);a.layers=this.layers,this.add(a);const c=new Rn(Dr,Lr,t,e);c.layers=this.layers,this.add(c);const h=new Rn(Dr,Lr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const h of e)this.remove(h);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,h,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,p,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ip extends vn{constructor(t=[],e=Xr,n,r,s,o,a,c,h,u){super(t,e,n,r,s,o,a,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class S_ extends sr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ip(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new to(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Ci});s.uniforms.tEquirect.value=e;const o=new Cn(r,s),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=jn),new x_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Ts extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const T of t.hand.values()){const _=e.getJointPose(T,n),m=this._getHandJoint(h,T);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,x=.005;h.inputState.pinching&&p>g+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=g-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class M_ extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bl=new F,A_=new F,b_=new Jt;class wi{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=bl.subVectors(n,e).cross(A_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||b_.getNormalMatrix(t),r=this.coplanarPoint(bl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Qs,Vo=new F;class _h{constructor(t=new wi,e=new wi,n=new wi,r=new wi,s=new wi,o=new wi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],T=r[10],_=r[11],m=r[12],U=r[13],I=r[14],R=r[15];if(n[0].setComponents(c-s,p-h,_-g,R-m).normalize(),n[1].setComponents(c+s,p+h,_+g,R+m).normalize(),n[2].setComponents(c+o,p+u,_+x,R+U).normalize(),n[3].setComponents(c-o,p-u,_-x,R-U).normalize(),n[4].setComponents(c-a,p-f,_-T,R-I).normalize(),e===fi)n[5].setComponents(c+a,p+f,_+T,R+I).normalize();else if(e===va)n[5].setComponents(a,f,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Vo.x=r.normal.x>0?t.max.x:t.min.x,Vo.y=r.normal.y>0?t.max.y:t.min.y,Vo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ca extends Yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ea=new F,xa=new F,Gu=new be,xs=new Ba,Bo=new Qs,wl=new F,Wu=new F;class w_ extends qe{constructor(t=new Pn,e=new ca){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ea.fromBufferAttribute(e,r-1),xa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ea.distanceTo(xa);t.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,t.ray.intersectsSphere(Bo)===!1)return;Gu.copy(r).invert(),xs.copy(t.ray).applyMatrix4(Gu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const g=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let T=g,_=x-1;T<_;T+=h){const m=u.getX(T),U=u.getX(T+1),I=ko(this,t,xs,c,m,U,T);I&&e.push(I)}if(this.isLineLoop){const T=u.getX(x-1),_=u.getX(g),m=ko(this,t,xs,c,T,_,x-1);m&&e.push(m)}}else{const g=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let T=g,_=x-1;T<_;T+=h){const m=ko(this,t,xs,c,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){const T=ko(this,t,xs,c,x-1,g,x-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ko(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Ea.fromBufferAttribute(a,r),xa.fromBufferAttribute(a,s),e.distanceSqToSegment(Ea,xa,wl,Wu)>n)return;wl.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(wl);if(!(h<t.near||h>t.far))return{distance:h,point:Wu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Xu=new F,qu=new F;class ju extends w_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Xu.fromBufferAttribute(e,r),qu.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Xu.distanceTo(qu);t.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ms extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $u=new be,Nc=new Ba,zo=new Qs,Ho=new F;class Rl extends qe{constructor(t=new Pn,e=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,t.ray.intersectsSphere(zo)===!1)return;$u.copy(r).invert(),Nc.copy(t.ray).applyMatrix4($u);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,T=g;x<T;x++){const _=h.getX(x);Ho.fromBufferAttribute(f,_),Yu(Ho,_,c,r,t,e,this)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,T=g;x<T;x++)Ho.fromBufferAttribute(f,x),Yu(Ho,x,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yu(i,t,e,n,r,s,o){const a=Nc.distanceSqToPoint(i);if(a<e){const c=new F;Nc.closestPointToPoint(i,c),c.applyMatrix4(n);const h=r.ray.origin.distanceTo(c);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class rp extends vn{constructor(t,e,n=rr,r,s,o,a=kn,c=kn,h,u=Fs){if(u!==Fs&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,h;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),h=n[r]-o,h<0)a=r+1;else if(h>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],p=n[r+1]-u,g=(o-u)/p;return(r+g)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new dt:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,r=[],s=[],o=[],a=new F,c=new be;for(let g=0;g<=t;g++){const x=g/t;r[g]=this.getTangentAt(x,new F)}s[0]=new F,o[0]=new F;let h=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),p<=h&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(ne(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(c.makeRotationAxis(a,x))}o[g].crossVectors(r[g],s[g])}if(e===!0){let g=Math.acos(ne(s[0].dot(s[t]),-1,1));g/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let x=1;x<=t;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],g*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vh extends Jn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,g=h-this.aY;c=p*u-g*f+this.aX,h=p*f+g*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class R_ extends vh{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yh(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,h){r(o,a,h*(a-s),h*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,h,u,f){let p=(o-s)/h-(a-s)/(h+u)+(a-o)/u,g=(a-o)/u-(c-o)/(u+f)+(c-a)/f;p*=u,g*=u,r(o,a,p,g)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const Go=new F,Cl=new yh,Pl=new yh,Il=new yh;class C_ extends Jn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new F){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let h,u;this.closed||a>0?h=r[(a-1)%s]:(Go.subVectors(r[0],r[1]).add(r[0]),h=Go);const f=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Go.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let x=Math.pow(h.distanceToSquared(f),g),T=Math.pow(f.distanceToSquared(p),g),_=Math.pow(p.distanceToSquared(u),g);T<1e-4&&(T=1),x<1e-4&&(x=T),_<1e-4&&(_=T),Cl.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,x,T,_),Pl.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,x,T,_),Il.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,x,T,_)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),Pl.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),Il.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return n.set(Cl.calc(c),Pl.calc(c),Il.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new F().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ku(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function P_(i,t){const e=1-i;return e*e*t}function I_(i,t){return 2*(1-i)*i*t}function D_(i,t){return i*i*t}function Cs(i,t,e,n){return P_(i,t)+I_(i,e)+D_(i,n)}function L_(i,t){const e=1-i;return e*e*e*t}function N_(i,t){const e=1-i;return 3*e*e*i*t}function U_(i,t){return 3*(1-i)*i*i*t}function O_(i,t){return i*i*i*t}function Ps(i,t,e,n,r){return L_(i,t)+N_(i,e)+U_(i,n)+O_(i,r)}class sp extends Jn{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,r.x,s.x,o.x,a.x),Ps(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class F_ extends Jn{constructor(t=new F,e=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new F){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,r.x,s.x,o.x,a.x),Ps(t,r.y,s.y,o.y,a.y),Ps(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class op extends Jn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class V_ extends Jn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends Jn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Cs(t,r.x,s.x,o.x),Cs(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B_ extends Jn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Cs(t,r.x,s.x,o.x),Cs(t,r.y,s.y,o.y),Cs(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lp extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],h=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Ku(a,c.x,h.x,u.x,f.x),Ku(a,c.y,h.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var Uc=Object.freeze({__proto__:null,ArcCurve:R_,CatmullRomCurve3:C_,CubicBezierCurve:sp,CubicBezierCurve3:F_,EllipseCurve:vh,LineCurve:op,LineCurve3:V_,QuadraticBezierCurve:ap,QuadraticBezierCurve3:B_,SplineCurve:lp});class k_ extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){const u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Uc[r.type]().fromJSON(r))}return this}}class Oc extends k_{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new op(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new ap(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new sp(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const h=new vh(t,e,n,r,s,o,a,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ha extends Oc{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Oc().fromJSON(r))}return this}}function z_(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=cp(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,h;if(n&&(s=q_(i,t,s,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let p=e;p<r;p+=e){const g=i[p],x=i[p+1];g<a&&(a=g),x<c&&(c=x),g>u&&(u=g),x>f&&(f=x)}h=Math.max(u-a,f-c),h=h!==0?32767/h:0}return Bs(s,o,e,a,c,h,0),o}function cp(i,t,e,n,r){let s;if(r===iv(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Zu(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Zu(o/n|0,i[o],i[o+1],s);return s&&Yr(s,s.next)&&(zs(s),s=s.next),s}function ar(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Z_(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,h=i.next;if(s?G_(i,n,r,s):H_(i)){t.push(c.i,i.i,h.i),zs(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=W_(ar(i),t),Bs(i,t,e,n,r,s,2)):o===2&&X_(i,t,e,n,r,s):Bs(ar(i),t,e,n,r,s,1);break}}}function H_(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,h=n.y,u=Math.min(r,s,o),f=Math.min(a,c,h),p=Math.max(r,s,o),g=Math.max(a,c,h);let x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=p&&x.y>=f&&x.y<=g&&As(r,a,s,c,o,h,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function G_(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Ce(r,s,o)>=0)return!1;const a=r.x,c=s.x,h=o.x,u=r.y,f=s.y,p=o.y,g=Math.min(a,c,h),x=Math.min(u,f,p),T=Math.max(a,c,h),_=Math.max(u,f,p),m=Fc(g,x,t,e,n),U=Fc(T,_,t,e,n);let I=i.prevZ,R=i.nextZ;for(;I&&I.z>=m&&R&&R.z<=U;){if(I.x>=g&&I.x<=T&&I.y>=x&&I.y<=_&&I!==r&&I!==o&&As(a,u,c,f,h,p,I.x,I.y)&&Ce(I.prev,I,I.next)>=0||(I=I.prevZ,R.x>=g&&R.x<=T&&R.y>=x&&R.y<=_&&R!==r&&R!==o&&As(a,u,c,f,h,p,R.x,R.y)&&Ce(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;I&&I.z>=m;){if(I.x>=g&&I.x<=T&&I.y>=x&&I.y<=_&&I!==r&&I!==o&&As(a,u,c,f,h,p,I.x,I.y)&&Ce(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;R&&R.z<=U;){if(R.x>=g&&R.x<=T&&R.y>=x&&R.y<=_&&R!==r&&R!==o&&As(a,u,c,f,h,p,R.x,R.y)&&Ce(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function W_(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Yr(n,r)&&up(n,e,e.next,r)&&ks(n,r)&&ks(r,n)&&(t.push(n.i,e.i,r.i),zs(e),zs(e.next),e=i=r),e=e.next}while(e!==i);return ar(e)}function X_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tv(o,a)){let c=fp(o,a);o=ar(o,o.next),c=ar(c,c.next),Bs(o,t,e,n,r,s,0),Bs(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function q_(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,h=cp(i,a,c,n,!1);h===h.next&&(h.steiner=!0),r.push(Q_(h))}r.sort(j_);for(let s=0;s<r.length;s++)e=$_(r[s],e);return e}function j_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function $_(i,t){const e=Y_(i,t);if(!e)return t;const n=fp(e,i);return ar(n,n.next),ar(e,e.next)}function Y_(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Yr(i,e))return e;do{if(Yr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,h=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&hp(r<h?n:s,r,c,h,r<h?s:n,r,e.x,e.y)){const f=Math.abs(r-e.y)/(n-e.x);ks(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&K_(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function K_(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Z_(i,t,e,n){let r=i;do r.z===0&&(r.z=Fc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,J_(r)}function J_(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Fc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Q_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function As(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&hp(i,t,e,n,r,s,o,a)}function tv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ev(i,t)&&(ks(i,t)&&ks(t,i)&&nv(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Yr(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function up(i,t,e,n){const r=Xo(Ce(i,t,e)),s=Xo(Ce(i,t,n)),o=Xo(Ce(e,n,i)),a=Xo(Ce(e,n,t));return!!(r!==s&&o!==a||r===0&&Wo(i,e,t)||s===0&&Wo(i,n,t)||o===0&&Wo(e,i,n)||a===0&&Wo(e,t,n))}function Wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Xo(i){return i>0?1:i<0?-1:0}function ev(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&up(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ks(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function nv(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fp(i,t){const e=Vc(i.i,i.x,i.y),n=Vc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Zu(i,t,e,n){const r=Vc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function iv(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class rv{static triangulate(t,e,n=2){return z_(t,e,n)}}class tr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return tr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ju(t),Qu(n,t);let o=t.length;e.forEach(Ju);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Qu(n,e[c]);const a=rv.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ju(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Eh extends Pn{constructor(t=new ha([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const h=t[a];o(h)}this.setAttribute("position",new Je(r,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals();function o(a){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,T=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,U=e.UVGenerator!==void 0?e.UVGenerator:sv;let I,R=!1,V,O,M,S;m&&(I=m.getSpacedPoints(u),R=!0,p=!1,V=m.computeFrenetFrames(u,!1),O=new F,M=new F,S=new F),p||(_=0,g=0,x=0,T=0);const y=a.extractPoints(h);let v=y.shape;const A=y.holes;if(!tr.isClockWise(v)){v=v.reverse();for(let L=0,pt=A.length;L<pt;L++){const ot=A[L];tr.isClockWise(ot)&&(A[L]=ot.reverse())}}function w(L){const ot=10000000000000001e-36;let ut=L[0];for(let nt=1;nt<=L.length;nt++){const Dt=nt%L.length,at=L[Dt],D=at.x-ut.x,b=at.y-ut.y,H=D*D+b*b,K=Math.max(Math.abs(at.x),Math.abs(at.y),Math.abs(ut.x),Math.abs(ut.y)),rt=ot*K*K;if(H<=rt){L.splice(Dt,1),nt--;continue}ut=at}}w(v),A.forEach(w);const tt=A.length,J=v;for(let L=0;L<tt;L++){const pt=A[L];v=v.concat(pt)}function Q(L,pt,ot){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(pt,ot)}const et=v.length;function $(L,pt,ot){let ut,nt,Dt;const at=L.x-pt.x,D=L.y-pt.y,b=ot.x-L.x,H=ot.y-L.y,K=at*at+D*D,rt=at*H-D*b;if(Math.abs(rt)>Number.EPSILON){const W=Math.sqrt(K),xt=Math.sqrt(b*b+H*H),_t=pt.x-D/W,Ut=pt.y+at/W,zt=ot.x-H/xt,lt=ot.y+b/xt,bt=((zt-_t)*H-(lt-Ut)*b)/(at*H-D*b);ut=_t+at*bt-L.x,nt=Ut+D*bt-L.y;const Vt=ut*ut+nt*nt;if(Vt<=2)return new dt(ut,nt);Dt=Math.sqrt(Vt/2)}else{let W=!1;at>Number.EPSILON?b>Number.EPSILON&&(W=!0):at<-Number.EPSILON?b<-Number.EPSILON&&(W=!0):Math.sign(D)===Math.sign(H)&&(W=!0),W?(ut=-D,nt=at,Dt=Math.sqrt(K)):(ut=at,nt=D,Dt=Math.sqrt(K/2))}return new dt(ut/Dt,nt/Dt)}const gt=[];for(let L=0,pt=J.length,ot=pt-1,ut=L+1;L<pt;L++,ot++,ut++)ot===pt&&(ot=0),ut===pt&&(ut=0),gt[L]=$(J[L],J[ot],J[ut]);const wt=[];let Pt,Ht=gt.concat();for(let L=0,pt=tt;L<pt;L++){const ot=A[L];Pt=[];for(let ut=0,nt=ot.length,Dt=nt-1,at=ut+1;ut<nt;ut++,Dt++,at++)Dt===nt&&(Dt=0),at===nt&&(at=0),Pt[ut]=$(ot[ut],ot[Dt],ot[at]);wt.push(Pt),Ht=Ht.concat(Pt)}let kt;if(_===0)kt=tr.triangulateShape(J,A);else{const L=[],pt=[];for(let ot=0;ot<_;ot++){const ut=ot/_,nt=g*Math.cos(ut*Math.PI/2),Dt=x*Math.sin(ut*Math.PI/2)+T;for(let at=0,D=J.length;at<D;at++){const b=Q(J[at],gt[at],Dt);Yt(b.x,b.y,-nt),ut===0&&L.push(b)}for(let at=0,D=tt;at<D;at++){const b=A[at];Pt=wt[at];const H=[];for(let K=0,rt=b.length;K<rt;K++){const W=Q(b[K],Pt[K],Dt);Yt(W.x,W.y,-nt),ut===0&&H.push(W)}ut===0&&pt.push(H)}}kt=tr.triangulateShape(L,pt)}const Z=kt.length,ft=x+T;for(let L=0;L<et;L++){const pt=p?Q(v[L],Ht[L],ft):v[L];R?(M.copy(V.normals[0]).multiplyScalar(pt.x),O.copy(V.binormals[0]).multiplyScalar(pt.y),S.copy(I[0]).add(M).add(O),Yt(S.x,S.y,S.z)):Yt(pt.x,pt.y,0)}for(let L=1;L<=u;L++)for(let pt=0;pt<et;pt++){const ot=p?Q(v[pt],Ht[pt],ft):v[pt];R?(M.copy(V.normals[L]).multiplyScalar(ot.x),O.copy(V.binormals[L]).multiplyScalar(ot.y),S.copy(I[L]).add(M).add(O),Yt(S.x,S.y,S.z)):Yt(ot.x,ot.y,f/u*L)}for(let L=_-1;L>=0;L--){const pt=L/_,ot=g*Math.cos(pt*Math.PI/2),ut=x*Math.sin(pt*Math.PI/2)+T;for(let nt=0,Dt=J.length;nt<Dt;nt++){const at=Q(J[nt],gt[nt],ut);Yt(at.x,at.y,f+ot)}for(let nt=0,Dt=A.length;nt<Dt;nt++){const at=A[nt];Pt=wt[nt];for(let D=0,b=at.length;D<b;D++){const H=Q(at[D],Pt[D],ut);R?Yt(H.x,H.y+I[u-1].y,I[u-1].x+ot):Yt(H.x,H.y,f+ot)}}}It(),yt();function It(){const L=r.length/3;if(p){let pt=0,ot=et*pt;for(let ut=0;ut<Z;ut++){const nt=kt[ut];Nt(nt[2]+ot,nt[1]+ot,nt[0]+ot)}pt=u+_*2,ot=et*pt;for(let ut=0;ut<Z;ut++){const nt=kt[ut];Nt(nt[0]+ot,nt[1]+ot,nt[2]+ot)}}else{for(let pt=0;pt<Z;pt++){const ot=kt[pt];Nt(ot[2],ot[1],ot[0])}for(let pt=0;pt<Z;pt++){const ot=kt[pt];Nt(ot[0]+et*u,ot[1]+et*u,ot[2]+et*u)}}n.addGroup(L,r.length/3-L,0)}function yt(){const L=r.length/3;let pt=0;Ft(J,pt),pt+=J.length;for(let ot=0,ut=A.length;ot<ut;ot++){const nt=A[ot];Ft(nt,pt),pt+=nt.length}n.addGroup(L,r.length/3-L,1)}function Ft(L,pt){let ot=L.length;for(;--ot>=0;){const ut=ot;let nt=ot-1;nt<0&&(nt=L.length-1);for(let Dt=0,at=u+_*2;Dt<at;Dt++){const D=et*Dt,b=et*(Dt+1),H=pt+ut+D,K=pt+nt+D,rt=pt+nt+b,W=pt+ut+b;ve(H,K,rt,W)}}}function Yt(L,pt,ot){c.push(L),c.push(pt),c.push(ot)}function Nt(L,pt,ot){re(L),re(pt),re(ot);const ut=r.length/3,nt=U.generateTopUV(n,r,ut-3,ut-2,ut-1);Wt(nt[0]),Wt(nt[1]),Wt(nt[2])}function ve(L,pt,ot,ut){re(L),re(pt),re(ut),re(pt),re(ot),re(ut);const nt=r.length/3,Dt=U.generateSideWallUV(n,r,nt-6,nt-3,nt-2,nt-1);Wt(Dt[0]),Wt(Dt[1]),Wt(Dt[3]),Wt(Dt[1]),Wt(Dt[2]),Wt(Dt[3])}function re(L){r.push(c[L*3+0]),r.push(c[L*3+1]),r.push(c[L*3+2])}function Wt(L){s.push(L.x),s.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ov(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Uc[r.type]().fromJSON(r)),new Eh(n,t.options)}}const sv={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[r*3],u=t[r*3+1];return[new dt(s,o),new dt(a,c),new dt(h,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],f=t[n*3+2],p=t[r*3],g=t[r*3+1],x=t[r*3+2],T=t[s*3],_=t[s*3+1],m=t[s*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new dt(o,1-c),new dt(h,1-f),new dt(p,1-x),new dt(T,1-m)]:[new dt(a,1-c),new dt(u,1-f),new dt(g,1-x),new dt(_,1-m)]}};function ov(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ka extends Pn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),h=a+1,u=c+1,f=t/a,p=e/c,g=[],x=[],T=[],_=[];for(let m=0;m<u;m++){const U=m*p-o;for(let I=0;I<h;I++){const R=I*f-s;x.push(R,-U,0),T.push(0,0,1),_.push(I/a),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let U=0;U<a;U++){const I=U+h*m,R=U+h*(m+1),V=U+1+h*(m+1),O=U+1+h*m;g.push(I,R,O),g.push(R,V,O)}this.setIndex(g),this.setAttribute("position",new Je(x,3)),this.setAttribute("normal",new Je(T,3)),this.setAttribute("uv",new Je(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.width,t.height,t.widthSegments,t.heightSegments)}}class av extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dp extends Yn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lv extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cv extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tf={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hv{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){const f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){const g=h[f],x=h[f+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null}}}const uv=new hv;class za{constructor(t){this.manager=t!==void 0?t:uv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}za.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class fv extends Error{constructor(t,e){super(t),this.response=e}}class pp extends za{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=tf.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(li[t]!==void 0){li[t].push({onLoad:e,onProgress:n,onError:r});return}li[t]=[],li[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=li[t],f=h.body.getReader(),p=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=p?parseInt(p):0,x=g!==0;let T=0;const _=new ReadableStream({start(m){U();function U(){f.read().then(({done:I,value:R})=>{if(I)m.close();else{T+=R.byteLength;const V=new ProgressEvent("progress",{lengthComputable:x,loaded:T,total:g});for(let O=0,M=u.length;O<M;O++){const S=u[O];S.onProgress&&S.onProgress(V)}m.enqueue(R),U()}},I=>{m.error(I)})}}});return new Response(_)}else throw new fv(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a==="")return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),p=f&&f[1]?f[1].toLowerCase():void 0,g=new TextDecoder(p);return h.arrayBuffer().then(x=>g.decode(x))}}}).then(h=>{tf.add(t,h);const u=li[t];delete li[t];for(let f=0,p=u.length;f<p;f++){const g=u[f];g.onLoad&&g.onLoad(h)}}).catch(h=>{const u=li[t];if(u===void 0)throw this.manager.itemError(t),h;delete li[t];for(let f=0,p=u.length;f<p;f++){const g=u[f];g.onError&&g.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class mp extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Dl=new be,ef=new F,nf=new F;class dv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gp extends np{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pv extends dv{constructor(){super(new gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mv extends mp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new pv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gv extends mp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _v extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class rf{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vv{constructor(){this.type="ShapePath",this.color=new Qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Oc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,o){return this.currentPath.bezierCurveTo(t,e,n,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const U=[];for(let I=0,R=m.length;I<R;I++){const V=m[I],O=new ha;O.curves=V.curves,U.push(O)}return U}function n(m,U){const I=U.length;let R=!1;for(let V=I-1,O=0;O<I;V=O++){let M=U[V],S=U[O],y=S.x-M.x,v=S.y-M.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(M=U[O],y=-y,S=U[V],v=-v),m.y<M.y||m.y>S.y)continue;if(m.y===M.y){if(m.x===M.x)return!0}else{const A=v*(m.x-M.x)-y*(m.y-M.y);if(A===0)return!0;if(A<0)continue;R=!R}}else{if(m.y!==M.y)continue;if(S.x<=m.x&&m.x<=M.x||M.x<=m.x&&m.x<=S.x)return!0}}return R}const r=tr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const h=[];if(s.length===1)return a=s[0],c=new ha,c.curves=a.curves,h.push(c),h;let u=!r(s[0].getPoints());u=t?!u:u;const f=[],p=[];let g=[],x=0,T;p[x]=void 0,g[x]=[];for(let m=0,U=s.length;m<U;m++)a=s[m],T=a.getPoints(),o=r(T),o=t?!o:o,o?(!u&&p[x]&&x++,p[x]={s:new ha,p:T},p[x].s.curves=a.curves,u&&x++,g[x]=[]):g[x].push({h:a,p:T[0]});if(!p[0])return e(s);if(p.length>1){let m=!1,U=0;for(let I=0,R=p.length;I<R;I++)f[I]=[];for(let I=0,R=p.length;I<R;I++){const V=g[I];for(let O=0;O<V.length;O++){const M=V[O];let S=!0;for(let y=0;y<p.length;y++)n(M.p,p[y].p)&&(I!==y&&U++,S?(S=!1,f[y].push(M)):m=!0);S&&f[I].push(M)}}U>0&&m===!1&&(g=f)}let _;for(let m=0,U=p.length;m<U;m++){c=p[m].s,h.push(c),_=g[m];for(let I=0,R=_.length;I<R;I++)c.holes.push(_[I].h)}return h}}class yv extends fr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function sf(i,t,e,n){const r=Ev(n);switch(e){case Hd:return i*t;case Wd:return i*t/r.components*r.byteLength;case fh:return i*t/r.components*r.byteLength;case Xd:return i*t*2/r.components*r.byteLength;case dh:return i*t*2/r.components*r.byteLength;case Gd:return i*t*3/r.components*r.byteLength;case Vn:return i*t*4/r.components*r.byteLength;case ph:return i*t*4/r.components*r.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:case hc:return Math.max(i,16)*Math.max(t,8)/4;case ac:case cc:return Math.max(i,8)*Math.max(t,8)/2;case uc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qd:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ic:case Dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ev(i){switch(i){case $n:case Bd:return{byteLength:1,components:1};case Us:case kd:case Zs:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case rr:case ch:case ui:return{byteLength:4,components:1};case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _p(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function xv(i){const t=new WeakMap;function e(a,c){const h=a.array,u=a.usage,f=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,u),a.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){const u=c.array,f=c.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,u);else{f.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<f.length;g++){const x=f[p],T=f[g];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++p,f[p]=T)}f.length=p+1;for(let g=0,x=f.length;g<x;g++){const T=f[g];i.bufferSubData(h,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:r,remove:s,update:o}}var Sv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,g0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,R0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Sv,alphahash_pars_fragment:Tv,alphamap_fragment:Mv,alphamap_pars_fragment:Av,alphatest_fragment:bv,alphatest_pars_fragment:wv,aomap_fragment:Rv,aomap_pars_fragment:Cv,batching_pars_vertex:Pv,batching_vertex:Iv,begin_vertex:Dv,beginnormal_vertex:Lv,bsdfs:Nv,iridescence_fragment:Uv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Fv,clipping_planes_pars_fragment:Vv,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:kv,color_fragment:zv,color_pars_fragment:Hv,color_pars_vertex:Gv,color_vertex:Wv,common:Xv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:jv,displacementmap_pars_vertex:$v,displacementmap_vertex:Yv,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Jv,colorspace_pars_fragment:Qv,envmap_fragment:ty,envmap_common_pars_fragment:ey,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:ly,gradientmap_pars_fragment:cy,lightmap_pars_fragment:hy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:fy,lights_pars_begin:dy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:yy,lights_physical_pars_fragment:Ey,lights_fragment_begin:xy,lights_fragment_maps:Sy,lights_fragment_end:Ty,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:by,logdepthbuf_vertex:wy,map_fragment:Ry,map_pars_fragment:Cy,map_particle_fragment:Py,map_particle_pars_fragment:Iy,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Ny,morphcolor_vertex:Uy,morphnormal_vertex:Oy,morphtarget_pars_vertex:Fy,morphtarget_vertex:Vy,normal_fragment_begin:By,normal_fragment_maps:ky,normal_pars_fragment:zy,normal_pars_vertex:Hy,normal_vertex:Gy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Xy,clearcoat_normal_fragment_maps:qy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:$y,opaque_fragment:Yy,packing:Ky,premultiplied_alpha_fragment:Zy,project_vertex:Jy,dithering_fragment:Qy,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:r0,shadowmap_vertex:s0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:_0,uv_pars_vertex:v0,uv_vertex:y0,worldpos_vertex:E0,background_vert:x0,background_frag:S0,backgroundCube_vert:T0,backgroundCube_frag:M0,cube_vert:A0,cube_frag:b0,depth_vert:w0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:I0,equirect_frag:D0,linedashed_vert:L0,linedashed_frag:N0,meshbasic_vert:U0,meshbasic_frag:O0,meshlambert_vert:F0,meshlambert_frag:V0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:z0,meshnormal_frag:H0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:q0,meshtoon_vert:j0,meshtoon_frag:$0,points_vert:Y0,points_frag:K0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:tE},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Xn={basic:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:un([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:un([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:un([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:un([St.points,St.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:un([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:un([St.common,St.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:un([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:un([St.sprite,St.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:un([St.common,St.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:un([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Xn.physical={uniforms:un([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const qo={r:0,b:0,g:0},qi=new Hn,eE=new be;function nE(i,t,e,n,r,s,o){const a=new Qt(0);let c=s===!0?0:1,h,u,f=null,p=0,g=null;function x(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?e:t).get(R)),R}function T(I){let R=!1;const V=x(I);V===null?m(a,c):V&&V.isColor&&(m(V,1),R=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(I,R){const V=x(R);V&&(V.isCubeTexture||V.mapping===Va)?(u===void 0&&(u=new Cn(new to(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:$r(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(R.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=V,u.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eE.makeRotationFromEuler(qi)),u.material.toneMapped=me.getTransfer(V.colorSpace)!==ye,(f!==V||p!==V.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=V,p=V.version,g=i.toneMapping),u.layers.enableAll(),I.unshift(u,u.geometry,u.material,0,0,null)):V&&V.isTexture&&(h===void 0&&(h=new Cn(new ka(2,2),new Oi({name:"BackgroundMaterial",uniforms:$r(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=V,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=me.getTransfer(V.colorSpace)!==ye,V.matrixAutoUpdate===!0&&V.updateMatrix(),h.material.uniforms.uvTransform.value.copy(V.matrix),(f!==V||p!==V.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=V,p=V.version,g=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function m(I,R){I.getRGB(qo,ep(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,R,o)}function U(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(I,R=1){a.set(I),c=R,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,m(a,c)},render:T,addToRenderList:_,dispose:U}}function iE(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(v,A,N,w,tt){let J=!1;const Q=f(w,N,A);s!==Q&&(s=Q,h(s.object)),J=g(v,w,N,tt),J&&x(v,w,N,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,R(v,A,N,w),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function c(){return i.createVertexArray()}function h(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,A,N){const w=N.wireframe===!0;let tt=n[v.id];tt===void 0&&(tt={},n[v.id]=tt);let J=tt[A.id];J===void 0&&(J={},tt[A.id]=J);let Q=J[w];return Q===void 0&&(Q=p(c()),J[w]=Q),Q}function p(v){const A=[],N=[],w=[];for(let tt=0;tt<e;tt++)A[tt]=0,N[tt]=0,w[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:w,object:v,attributes:{},index:null}}function g(v,A,N,w){const tt=s.attributes,J=A.attributes;let Q=0;const et=N.getAttributes();for(const $ in et)if(et[$].location>=0){const wt=tt[$];let Pt=J[$];if(Pt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(Pt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(Pt=v.instanceColor)),wt===void 0||wt.attribute!==Pt||Pt&&wt.data!==Pt.data)return!0;Q++}return s.attributesNum!==Q||s.index!==w}function x(v,A,N,w){const tt={},J=A.attributes;let Q=0;const et=N.getAttributes();for(const $ in et)if(et[$].location>=0){let wt=J[$];wt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor));const Pt={};Pt.attribute=wt,wt&&wt.data&&(Pt.data=wt.data),tt[$]=Pt,Q++}s.attributes=tt,s.attributesNum=Q,s.index=w}function T(){const v=s.newAttributes;for(let A=0,N=v.length;A<N;A++)v[A]=0}function _(v){m(v,0)}function m(v,A){const N=s.newAttributes,w=s.enabledAttributes,tt=s.attributeDivisors;N[v]=1,w[v]===0&&(i.enableVertexAttribArray(v),w[v]=1),tt[v]!==A&&(i.vertexAttribDivisor(v,A),tt[v]=A)}function U(){const v=s.newAttributes,A=s.enabledAttributes;for(let N=0,w=A.length;N<w;N++)A[N]!==v[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function I(v,A,N,w,tt,J,Q){Q===!0?i.vertexAttribIPointer(v,A,N,tt,J):i.vertexAttribPointer(v,A,N,w,tt,J)}function R(v,A,N,w){T();const tt=w.attributes,J=N.getAttributes(),Q=A.defaultAttributeValues;for(const et in J){const $=J[et];if($.location>=0){let gt=tt[et];if(gt===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),gt!==void 0){const wt=gt.normalized,Pt=gt.itemSize,Ht=t.get(gt);if(Ht===void 0)continue;const kt=Ht.buffer,Z=Ht.type,ft=Ht.bytesPerElement,It=Z===i.INT||Z===i.UNSIGNED_INT||gt.gpuType===ch;if(gt.isInterleavedBufferAttribute){const yt=gt.data,Ft=yt.stride,Yt=gt.offset;if(yt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<$.locationSize;Nt++)m($.location+Nt,yt.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Nt=0;Nt<$.locationSize;Nt++)_($.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Nt=0;Nt<$.locationSize;Nt++)I($.location+Nt,Pt/$.locationSize,Z,wt,Ft*ft,(Yt+Pt/$.locationSize*Nt)*ft,It)}else{if(gt.isInstancedBufferAttribute){for(let yt=0;yt<$.locationSize;yt++)m($.location+yt,gt.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let yt=0;yt<$.locationSize;yt++)_($.location+yt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let yt=0;yt<$.locationSize;yt++)I($.location+yt,Pt/$.locationSize,Z,wt,Pt*ft,Pt/$.locationSize*yt*ft,It)}}else if(Q!==void 0){const wt=Q[et];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv($.location,wt);break;case 3:i.vertexAttrib3fv($.location,wt);break;case 4:i.vertexAttrib4fv($.location,wt);break;default:i.vertexAttrib1fv($.location,wt)}}}}U()}function V(){S();for(const v in n){const A=n[v];for(const N in A){const w=A[N];for(const tt in w)u(w[tt].object),delete w[tt];delete A[N]}delete n[v]}}function O(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const N in A){const w=A[N];for(const tt in w)u(w[tt].object),delete w[tt];delete A[N]}delete n[v.id]}function M(v){for(const A in n){const N=n[A];if(N[v.id]===void 0)continue;const w=N[v.id];for(const tt in w)u(w[tt].object),delete w[tt];delete N[v.id]}}function S(){y(),o=!0,s!==r&&(s=r,h(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:y,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:M,initAttributes:T,enableAttribute:_,disableUnusedAttributes:U}}function rE(i,t,e){let n;function r(h){n=h}function s(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,f){f!==0&&(i.drawArraysInstanced(n,h,u,f),e.update(u,n,f))}function a(h,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,n,1)}function c(h,u,f,p){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<h.length;x++)o(h[x],u[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,u,0,p,0,f);let x=0;for(let T=0;T<f;T++)x+=u[T]*p[T];e.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function sE(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==Vn&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const S=M===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==$n&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ui&&!S)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=x>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:V,maxSamples:O}}function oE(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new wi,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||r;return r=p,n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,g){const x=f.clippingPlanes,T=f.clipIntersection,_=f.clipShadows,m=i.get(f);if(!r||x===null||x.length===0||s&&!_)s?u(null):h();else{const U=s?0:n,I=U*4;let R=m.clippingState||null;c.value=R,R=u(x,p,I,g);for(let V=0;V!==I;++V)R[V]=e[V];m.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,g,x){const T=f!==null?f.length:0;let _=null;if(T!==0){if(_=c.value,x!==!0||_===null){const m=g+T*4,U=p.matrixWorldInverse;a.getNormalMatrix(U),(_===null||_.length<m)&&(_=new Float32Array(m));for(let I=0,R=g;I!==T;++I,R+=4)o.copy(f[I]).applyMatrix4(U,a),o.normal.toArray(_,R),_[R+3]=o.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,_}}function aE(i){let t=new WeakMap;function e(o,a){return a===ic?o.mapping=Xr:a===rc&&(o.mapping=qr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===rc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new S_(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",r),e(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Vr=4,of=[.125,.215,.35,.446,.526,.582],Zi=20,Ll=new gp,af=new Qt;let Nl=null,Ul=0,Ol=0,Fl=!1;const $i=(1+Math.sqrt(5))/2,Nr=1/$i,lf=[new F(-$i,Nr,0),new F($i,Nr,0),new F(-Nr,0,$i),new F(Nr,0,$i),new F(0,$i,-Nr),new F(0,$i,Nr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],lE=new F;class cf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=lE}=s;Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nl,Ul,Ol),this._renderer.xr.enabled=Fl,t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nl=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Zs,format:Vn,colorSpace:jr,depthBuffer:!1},r=hf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cE(s)),this._blurMaterial=hE(s,t,e)}return r}_compileMaterial(t){const e=new Cn(this._lodPlanes[0],t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,r,s){const c=new Rn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,g=f.toneMapping;f.getClearColor(af),f.toneMapping=Pi,f.autoClear=!1;const x=new Jd({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),T=new Cn(new to,x);let _=!1;const m=t.background;m?m.isColor&&(x.color.copy(m),t.background=null,_=!0):(x.color.copy(af),_=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(c.up.set(0,h[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[U],s.y,s.z)):I===1?(c.up.set(0,0,h[U]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[U],s.z)):(c.up.set(0,h[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[U]));const R=this._cubeSize;jo(r,I*R,U>2?R:0,R,R),f.setRenderTarget(r),_&&f.render(T,c),f.render(t,c)}T.geometry.dispose(),T.material.dispose(),f.toneMapping=g,f.autoClear=p,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Xr||t.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;jo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lf[(r-s-1)%lf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[r],h),p=h.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Zi-1),T=s/x,_=isFinite(s)?1+Math.floor(u*T):Zi;_>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zi}`);const m=[];let U=0;for(let M=0;M<Zi;++M){const S=M/T,y=Math.exp(-S*S/2);m.push(y),M===0?U+=y:M<_&&(U+=2*y)}for(let M=0;M<m.length;M++)m[M]=m[M]/U;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=m,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:I}=this;p.dTheta.value=x,p.mipInt.value=I-n;const R=this._sizeLods[r],V=3*R*(r>I-Vr?r-I+Vr:0),O=4*(this._cubeSize-R);jo(e,V,O,3*R,2*R),c.setRenderTarget(e),c.render(f,Ll)}}function cE(i){const t=[],e=[],n=[];let r=i;const s=i-Vr+1+of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Vr?c=of[o-i+Vr-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,x=6,T=3,_=2,m=1,U=new Float32Array(T*x*g),I=new Float32Array(_*x*g),R=new Float32Array(m*x*g);for(let O=0;O<g;O++){const M=O%3*2/3-1,S=O>2?0:-1,y=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];U.set(y,T*x*O),I.set(p,_*x*O);const v=[O,O,O,O,O,O];R.set(v,m*x*O)}const V=new Pn;V.setAttribute("position",new zn(U,T)),V.setAttribute("uv",new zn(I,_)),V.setAttribute("faceIndex",new zn(R,m)),t.push(V),r>Vr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hf(i,t,e){const n=new sr(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function hE(i,t,e){const n=new Float32Array(Zi),r=new F(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function uf(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ff(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uE(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===ic||c===rc,u=c===Xr||c===qr;if(h||u){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new cf(i)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const g=a.image;return h&&g&&g.height>0||u&&g&&r(g)?(e===null&&(e=new cf(i)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&c++;return c===h}function s(a){const c=a.target;c.removeEventListener("dispose",s);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function fE(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dE(i,t,e,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER)}function h(f){const p=[],g=f.index,x=f.attributes.position;let T=0;if(g!==null){const U=g.array;T=g.version;for(let I=0,R=U.length;I<R;I+=3){const V=U[I+0],O=U[I+1],M=U[I+2];p.push(V,O,O,M,M,V)}}else if(x!==void 0){const U=x.array;T=x.version;for(let I=0,R=U.length/3-1;I<R;I+=3){const V=I+0,O=I+1,M=I+2;p.push(V,O,O,M,M,V)}}else return;const _=new($d(p)?tp:Qd)(p,1);_.version=T;const m=s.get(f);m&&t.remove(m),s.set(f,_)}function u(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&h(f)}else h(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function pE(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,g){i.drawElements(n,g,s,p*o),e.update(g,n,1)}function h(p,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,p*o,x),e.update(g,n,x))}function u(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,p,0,x);let _=0;for(let m=0;m<x;m++)_+=g[m];e.update(_,n,1)}function f(p,g,x,T){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<p.length;m++)h(p[m]/o,g[m],T[m]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,s,p,0,T,0,x);let m=0;for(let U=0;U<x;U++)m+=g[U]*T[U];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function mE(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function gE(i,t,e){const n=new WeakMap,r=new De;function s(o,a,c){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let v=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var g=v;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,T=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],U=a.morphAttributes.normal||[],I=a.morphAttributes.color||[];let R=0;x===!0&&(R=1),T===!0&&(R=2),_===!0&&(R=3);let V=a.attributes.position.count*R,O=1;V>t.maxTextureSize&&(O=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const M=new Float32Array(V*O*4*f),S=new Yd(M,V,O,f);S.type=ui,S.needsUpdate=!0;const y=R*4;for(let A=0;A<f;A++){const N=m[A],w=U[A],tt=I[A],J=V*O*4*A;for(let Q=0;Q<N.count;Q++){const et=Q*y;x===!0&&(r.fromBufferAttribute(N,Q),M[J+et+0]=r.x,M[J+et+1]=r.y,M[J+et+2]=r.z,M[J+et+3]=0),T===!0&&(r.fromBufferAttribute(w,Q),M[J+et+4]=r.x,M[J+et+5]=r.y,M[J+et+6]=r.z,M[J+et+7]=0),_===!0&&(r.fromBufferAttribute(tt,Q),M[J+et+8]=r.x,M[J+et+9]=r.y,M[J+et+10]=r.z,M[J+et+11]=tt.itemSize===4?r.w:1)}}p={count:f,texture:S,size:new dt(V,O)},n.set(a,p),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let _=0;_<h.length;_++)x+=h[_];const T=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",T),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function _E(i,t,e,n){let r=new WeakMap;function s(c){const h=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}const vp=new vn,df=new rp(1,1),yp=new Yd,Ep=new s_,xp=new ip,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=pf[r];if(s===void 0&&(s=new Float32Array(r),pf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ha(i,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function EE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function xE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function SE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;vf.set(n),i.uniformMatrix2fv(this.addr,!1,vf),He(e,n)}}function TE(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),He(e,n)}}function ME(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),He(e,n)}}function AE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function wE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function RE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function CE(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function PE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function IE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function DE(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function LE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(df.compareFunction=jd,s=df):s=vp,e.setTexture2D(t||s,r)}function NE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ep,r)}function UE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||xp,r)}function OE(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yp,r)}function FE(i){switch(i){case 5126:return vE;case 35664:return yE;case 35665:return EE;case 35666:return xE;case 35674:return SE;case 35675:return TE;case 35676:return ME;case 5124:case 35670:return AE;case 35667:case 35671:return bE;case 35668:case 35672:return wE;case 35669:case 35673:return RE;case 5125:return CE;case 36294:return PE;case 36295:return IE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return OE}}function VE(i,t){i.uniform1fv(this.addr,t)}function BE(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function kE(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function zE(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function HE(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function GE(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function WE(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function XE(i,t){i.uniform1iv(this.addr,t)}function qE(i,t){i.uniform2iv(this.addr,t)}function jE(i,t){i.uniform3iv(this.addr,t)}function $E(i,t){i.uniform4iv(this.addr,t)}function YE(i,t){i.uniform1uiv(this.addr,t)}function KE(i,t){i.uniform2uiv(this.addr,t)}function ZE(i,t){i.uniform3uiv(this.addr,t)}function JE(i,t){i.uniform4uiv(this.addr,t)}function QE(i,t,e){const n=this.cache,r=t.length,s=Ha(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vp,s[o])}function tx(i,t,e){const n=this.cache,r=t.length,s=Ha(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ep,s[o])}function ex(i,t,e){const n=this.cache,r=t.length,s=Ha(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||xp,s[o])}function nx(i,t,e){const n=this.cache,r=t.length,s=Ha(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||yp,s[o])}function ix(i){switch(i){case 5126:return VE;case 35664:return BE;case 35665:return kE;case 35666:return zE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return jE;case 35669:case 35673:return $E;case 5125:return YE;case 36294:return KE;case 36295:return ZE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return nx}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=FE(e.type)}}class sx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ix(e.type)}}class ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function yf(i,t){i.seq.push(t),i.map[t.id]=t}function ax(i,t,e){const n=i.name,r=n.length;for(Vl.lastIndex=0;;){const s=Vl.exec(n),o=Vl.lastIndex;let a=s[1];const c=s[2]==="]",h=s[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===r){yf(e,h===void 0?new rx(a,i,t):new sx(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ox(a),yf(e,f)),e=f}}}class ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);ax(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ef(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lx=37297;let cx=0;function hx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const xf=new Jt;function ux(i){me._getMatrix(xf,me.workingColorSpace,i);const t=`mat3( ${xf.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case _a:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+hx(i.getShaderSource(t),o)}else return r}function fx(i,t){const e=ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dx(i,t){let e;switch(t){case Pg:e="Linear";break;case Ig:e="Reinhard";break;case Dg:e="Cineon";break;case Lg:e="ACESFilmic";break;case Ug:e="AgX";break;case Og:e="Neutral";break;case Ng:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $o=new F;function px(){me.getLuminanceCoefficients($o);const i=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function gx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function Tf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(vx,Ex)}const yx=new Map;function Ex(i,t){let e=te[t];if(e===void 0){const n=yx.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(xx,Sx)}function Sx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cg?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Mx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xr:case qr:t="ENVMAP_TYPE_CUBE";break;case Va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ax(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qr:t="ENVMAP_MODE_REFRACTION";break}return t}function bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Rg:t="ENVMAP_BLENDING_MIX";break;case Cg:t="ENVMAP_BLENDING_ADD";break}return t}function wx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Tx(e),h=Mx(e),u=Ax(e),f=bx(e),p=wx(e),g=mx(e),x=gx(s),T=r.createProgram();let _,m,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(bs).join(`
`),m.length>0&&(m+=`
`)):(_=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),m=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?te.tonemapping_pars_fragment:"",e.toneMapping!==Pi?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,fx("linearToOutputTexel",e.outputColorSpace),px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Bc(o),o=Tf(o,e),o=Mf(o,e),a=Bc(a),a=Tf(a,e),a=Mf(a,e),o=Af(o),a=Af(a),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=U+_+o,R=U+m+a,V=Ef(r,r.VERTEX_SHADER,I),O=Ef(r,r.FRAGMENT_SHADER,R);r.attachShader(T,V),r.attachShader(T,O),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function M(A){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(T).trim(),w=r.getShaderInfoLog(V).trim(),tt=r.getShaderInfoLog(O).trim();let J=!0,Q=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,V,O);else{const et=Sf(r,V,"vertex"),$=Sf(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+et+`
`+$)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(w===""||tt==="")&&(Q=!1);Q&&(A.diagnostics={runnable:J,programLog:N,vertexShader:{log:w,prefix:_},fragmentShader:{log:tt,prefix:m}})}r.deleteShader(V),r.deleteShader(O),S=new ua(r,T),y=_x(r,T)}let S;this.getUniforms=function(){return S===void 0&&M(this),S};let y;this.getAttributes=function(){return y===void 0&&M(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(T,lx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cx++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=O,this}let Cx=0;class Px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ix(t),e.set(t,n)),n}}class Ix{constructor(t){this.id=Cx++,this.code=t,this.usedTimes=0}}function Dx(i,t,e,n,r,s,o){const a=new Kd,c=new Px,h=new Set,u=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(y){return h.add(y),y===0?"uv":`uv${y}`}function _(y,v,A,N,w){const tt=N.fog,J=w.geometry,Q=y.isMeshStandardMaterial?N.environment:null,et=(y.isMeshStandardMaterial?e:t).get(y.envMap||Q),$=et&&et.mapping===Va?et.image.height:null,gt=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=wt!==void 0?wt.length:0;let Ht=0;J.morphAttributes.position!==void 0&&(Ht=1),J.morphAttributes.normal!==void 0&&(Ht=2),J.morphAttributes.color!==void 0&&(Ht=3);let kt,Z,ft,It;if(gt){const ae=Xn[gt];kt=ae.vertexShader,Z=ae.fragmentShader}else kt=y.vertexShader,Z=y.fragmentShader,c.update(y),ft=c.getVertexShaderID(y),It=c.getFragmentShaderID(y);const yt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Yt=w.isInstancedMesh===!0,Nt=w.isBatchedMesh===!0,ve=!!y.map,re=!!y.matcap,Wt=!!et,L=!!y.aoMap,pt=!!y.lightMap,ot=!!y.bumpMap,ut=!!y.normalMap,nt=!!y.displacementMap,Dt=!!y.emissiveMap,at=!!y.metalnessMap,D=!!y.roughnessMap,b=y.anisotropy>0,H=y.clearcoat>0,K=y.dispersion>0,rt=y.iridescence>0,W=y.sheen>0,xt=y.transmission>0,_t=b&&!!y.anisotropyMap,Ut=H&&!!y.clearcoatMap,zt=H&&!!y.clearcoatNormalMap,lt=H&&!!y.clearcoatRoughnessMap,bt=rt&&!!y.iridescenceMap,Vt=rt&&!!y.iridescenceThicknessMap,Xt=W&&!!y.sheenColorMap,Rt=W&&!!y.sheenRoughnessMap,se=!!y.specularMap,Kt=!!y.specularColorMap,ge=!!y.specularIntensityMap,B=xt&&!!y.transmissionMap,Tt=xt&&!!y.thicknessMap,Y=!!y.gradientMap,it=!!y.alphaMap,Mt=y.alphaTest>0,vt=!!y.alphaHash,$t=!!y.extensions;let xe=Pi;y.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Fe={shaderID:gt,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:Z,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:It,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Nt,batchingColor:Nt&&w._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&w.instanceColor!==null,instancingMorph:Yt&&w.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:jr,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:re,envMap:Wt,envMapMode:Wt&&et.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:pt,bumpMap:ot,normalMap:ut,displacementMap:p&&nt,emissiveMap:Dt,normalMapObjectSpace:ut&&y.normalMapType===kg,normalMapTangentSpace:ut&&y.normalMapType===mh,metalnessMap:at,roughnessMap:D,anisotropy:b,anisotropyMap:_t,clearcoat:H,clearcoatMap:Ut,clearcoatNormalMap:zt,clearcoatRoughnessMap:lt,dispersion:K,iridescence:rt,iridescenceMap:bt,iridescenceThicknessMap:Vt,sheen:W,sheenColorMap:Xt,sheenRoughnessMap:Rt,specularMap:se,specularColorMap:Kt,specularIntensityMap:ge,transmission:xt,transmissionMap:B,thicknessMap:Tt,gradientMap:Y,opaque:y.transparent===!1&&y.blending===kr&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:vt,combine:y.combine,mapUv:ve&&T(y.map.channel),aoMapUv:L&&T(y.aoMap.channel),lightMapUv:pt&&T(y.lightMap.channel),bumpMapUv:ot&&T(y.bumpMap.channel),normalMapUv:ut&&T(y.normalMap.channel),displacementMapUv:nt&&T(y.displacementMap.channel),emissiveMapUv:Dt&&T(y.emissiveMap.channel),metalnessMapUv:at&&T(y.metalnessMap.channel),roughnessMapUv:D&&T(y.roughnessMap.channel),anisotropyMapUv:_t&&T(y.anisotropyMap.channel),clearcoatMapUv:Ut&&T(y.clearcoatMap.channel),clearcoatNormalMapUv:zt&&T(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&T(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&T(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&T(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&T(y.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&T(y.sheenRoughnessMap.channel),specularMapUv:se&&T(y.specularMap.channel),specularColorMapUv:Kt&&T(y.specularColorMap.channel),specularIntensityMapUv:ge&&T(y.specularIntensityMap.channel),transmissionMapUv:B&&T(y.transmissionMap.channel),thicknessMapUv:Tt&&T(y.thicknessMap.channel),alphaMapUv:it&&T(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ut||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!J.attributes.uv&&(ve||it),fog:!!tt,useFog:y.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ft,skinning:w.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:Dt&&y.emissiveMap.isVideoTexture===!0&&me.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hi,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=h.has(1),Fe.vertexUv2s=h.has(2),Fe.vertexUv3s=h.has(3),h.clear(),Fe}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)v.push(A),v.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(U(v,y),I(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function U(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function I(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function R(y){const v=x[y.type];let A;if(v){const N=Xn[v];A=v_.clone(N.uniforms)}else A=y.uniforms;return A}function V(y,v){let A;for(let N=0,w=u.length;N<w;N++){const tt=u[N];if(tt.cacheKey===v){A=tt,++A.usedTimes;break}}return A===void 0&&(A=new Rx(i,v,y,s),u.push(A)),A}function O(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function M(y){c.remove(y)}function S(){c.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:V,releaseProgram:O,releaseShaderCache:M,programs:u,dispose:S}}function Lx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Nx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rf(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,p,g,x,T,_){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:T,group:_},i[t]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=g,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=T,m.group=_),t++,m}function a(f,p,g,x,T,_){const m=o(f,p,g,x,T,_);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):e.push(m)}function c(f,p,g,x,T,_){const m=o(f,p,g,x,T,_);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):e.unshift(m)}function h(f,p){e.length>1&&e.sort(f||Nx),n.length>1&&n.sort(p||wf),r.length>1&&r.sort(p||wf)}function u(){for(let f=t,p=i.length;f<p;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:h}}function Ux(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Rf,i.set(n,[o])):r>=s.length?(o=new Rf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Qt};break;case"SpotLight":e={position:new F,direction:new F,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Fx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vx=0;function Bx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kx(i){const t=new Ox,e=Fx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const r=new F,s=new be,o=new be;function a(h){let u=0,f=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,x=0,T=0,_=0,m=0,U=0,I=0,R=0,V=0,O=0,M=0;h.sort(Bx);for(let y=0,v=h.length;y<v;y++){const A=h[y],N=A.color,w=A.intensity,tt=A.distance,J=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*w,f+=N.g*w,p+=N.b*w;else if(A.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(A.sh.coefficients[Q],w);M++}else if(A.isDirectionalLight){const Q=t.get(A);if(Q.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const et=A.shadow,$=e.get(A);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=A.shadow.matrix,U++}n.directional[g]=Q,g++}else if(A.isSpotLight){const Q=t.get(A);Q.position.setFromMatrixPosition(A.matrixWorld),Q.color.copy(N).multiplyScalar(w),Q.distance=tt,Q.coneCos=Math.cos(A.angle),Q.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Q.decay=A.decay,n.spot[T]=Q;const et=A.shadow;if(A.map&&(n.spotLightMap[V]=A.map,V++,et.updateMatrices(A),A.castShadow&&O++),n.spotLightMatrix[T]=et.matrix,A.castShadow){const $=e.get(A);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,n.spotShadow[T]=$,n.spotShadowMap[T]=J,R++}T++}else if(A.isRectAreaLight){const Q=t.get(A);Q.color.copy(N).multiplyScalar(w),Q.halfWidth.set(A.width*.5,0,0),Q.halfHeight.set(0,A.height*.5,0),n.rectArea[_]=Q,_++}else if(A.isPointLight){const Q=t.get(A);if(Q.color.copy(A.color).multiplyScalar(A.intensity),Q.distance=A.distance,Q.decay=A.decay,A.castShadow){const et=A.shadow,$=e.get(A);$.shadowIntensity=et.intensity,$.shadowBias=et.bias,$.shadowNormalBias=et.normalBias,$.shadowRadius=et.radius,$.shadowMapSize=et.mapSize,$.shadowCameraNear=et.camera.near,$.shadowCameraFar=et.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=J,n.pointShadowMatrix[x]=A.shadow.matrix,I++}n.point[x]=Q,x++}else if(A.isHemisphereLight){const Q=t.get(A);Q.skyColor.copy(A.color).multiplyScalar(w),Q.groundColor.copy(A.groundColor).multiplyScalar(w),n.hemi[m]=Q,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;const S=n.hash;(S.directionalLength!==g||S.pointLength!==x||S.spotLength!==T||S.rectAreaLength!==_||S.hemiLength!==m||S.numDirectionalShadows!==U||S.numPointShadows!==I||S.numSpotShadows!==R||S.numSpotMaps!==V||S.numLightProbes!==M)&&(n.directional.length=g,n.spot.length=T,n.rectArea.length=_,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=R+V-O,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=M,S.directionalLength=g,S.pointLength=x,S.spotLength=T,S.rectAreaLength=_,S.hemiLength=m,S.numDirectionalShadows=U,S.numPointShadows=I,S.numSpotShadows=R,S.numSpotMaps=V,S.numLightProbes=M,n.version=Vx++)}function c(h,u){let f=0,p=0,g=0,x=0,T=0;const _=u.matrixWorldInverse;for(let m=0,U=h.length;m<U;m++){const I=h[m];if(I.isDirectionalLight){const R=n.directional[f];R.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),f++}else if(I.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(_),g++}else if(I.isRectAreaLight){const R=n.rectArea[x];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(_),o.identity(),s.copy(I.matrixWorld),s.premultiply(_),o.extractRotation(s),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(I.isPointLight){const R=n.point[p];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(_),p++}else if(I.isHemisphereLight){const R=n.hemi[T];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(_),T++}}}return{setup:a,setupView:c,state:n}}function Cf(i){const t=new kx(i),e=[],n=[];function r(u){h.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zx(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Cf(i),t.set(r,[a])):s>=o.length?(a=new Cf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(i,t,e){let n=new _h;const r=new dt,s=new dt,o=new De,a=new lv({depthPacking:Bg}),c=new cv,h={},u=e.maxTextureSize,f={[Ui]:_n,[_n]:Ui,[hi]:hi},p=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Hx,fragmentShader:Gx}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new Pn;x.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Cn(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fd;let m=this.type;this.render=function(O,M,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ci),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const w=m!==ci&&this.type===ci,tt=m===ci&&this.type!==ci;for(let J=0,Q=O.length;J<Q;J++){const et=O[J],$=et.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const gt=$.getFrameExtents();if(r.multiply(gt),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/gt.x),r.x=s.x*gt.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/gt.y),r.y=s.y*gt.y,$.mapSize.y=s.y)),$.map===null||w===!0||tt===!0){const Pt=this.type!==ci?{minFilter:kn,magFilter:kn}:{};$.map!==null&&$.map.dispose(),$.map=new sr(r.x,r.y,Pt),$.map.texture.name=et.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const wt=$.getViewportCount();for(let Pt=0;Pt<wt;Pt++){const Ht=$.getViewport(Pt);o.set(s.x*Ht.x,s.y*Ht.y,s.x*Ht.z,s.y*Ht.w),N.viewport(o),$.updateMatrices(et,Pt),n=$.getFrustum(),R(M,S,$.camera,et,this.type)}$.isPointLightShadow!==!0&&this.type===ci&&U($,S),$.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(y,v,A)};function U(O,M){const S=t.update(T);p.defines.VSM_SAMPLES!==O.blurSamples&&(p.defines.VSM_SAMPLES=O.blurSamples,g.defines.VSM_SAMPLES=O.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new sr(r.x,r.y)),p.uniforms.shadow_pass.value=O.map.texture,p.uniforms.resolution.value=O.mapSize,p.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(M,null,S,p,T,null),g.uniforms.shadow_pass.value=O.mapPass.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(M,null,S,g,T,null)}function I(O,M,S,y){let v=null;const A=S.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(A!==void 0)v=A;else if(v=S.isPointLight===!0?c:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const N=v.uuid,w=M.uuid;let tt=h[N];tt===void 0&&(tt={},h[N]=tt);let J=tt[w];J===void 0&&(J=v.clone(),tt[w]=J,M.addEventListener("dispose",V)),v=J}if(v.visible=M.visible,v.wireframe=M.wireframe,y===ci?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:f[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,S.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=S}return v}function R(O,M,S,y,v){if(O.visible===!1)return;if(O.layers.test(M.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&v===ci)&&(!O.frustumCulled||n.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,O.matrixWorld);const w=t.update(O),tt=O.material;if(Array.isArray(tt)){const J=w.groups;for(let Q=0,et=J.length;Q<et;Q++){const $=J[Q],gt=tt[$.materialIndex];if(gt&&gt.visible){const wt=I(O,gt,y,v);O.onBeforeShadow(i,O,M,S,w,wt,$),i.renderBufferDirect(S,null,w,wt,O,$),O.onAfterShadow(i,O,M,S,w,wt,$)}}}else if(tt.visible){const J=I(O,tt,y,v);O.onBeforeShadow(i,O,M,S,w,J,null),i.renderBufferDirect(S,null,w,J,O,null),O.onAfterShadow(i,O,M,S,w,J,null)}}const N=O.children;for(let w=0,tt=N.length;w<tt;w++)R(N[w],M,S,y,v)}function V(O){O.target.removeEventListener("dispose",V);for(const S in h){const y=h[S],v=O.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Xx={[Kl]:Zl,[Jl]:ec,[Ql]:nc,[Wr]:tc,[Zl]:Kl,[ec]:Jl,[nc]:Ql,[tc]:Wr};function qx(i,t){function e(){let B=!1;const Tt=new De;let Y=null;const it=new De(0,0,0,0);return{setMask:function(Mt){Y!==Mt&&!B&&(i.colorMask(Mt,Mt,Mt,Mt),Y=Mt)},setLocked:function(Mt){B=Mt},setClear:function(Mt,vt,$t,xe,Fe){Fe===!0&&(Mt*=xe,vt*=xe,$t*=xe),Tt.set(Mt,vt,$t,xe),it.equals(Tt)===!1&&(i.clearColor(Mt,vt,$t,xe),it.copy(Tt))},reset:function(){B=!1,Y=null,it.set(-1,0,0,0)}}}function n(){let B=!1,Tt=!1,Y=null,it=null,Mt=null;return{setReversed:function(vt){if(Tt!==vt){const $t=t.get("EXT_clip_control");vt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Tt=vt;const xe=Mt;Mt=null,this.setClear(xe)}},getReversed:function(){return Tt},setTest:function(vt){vt?yt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!B&&(i.depthMask(vt),Y=vt)},setFunc:function(vt){if(Tt&&(vt=Xx[vt]),it!==vt){switch(vt){case Kl:i.depthFunc(i.NEVER);break;case Zl:i.depthFunc(i.ALWAYS);break;case Jl:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case Ql:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=vt}},setLocked:function(vt){B=vt},setClear:function(vt){Mt!==vt&&(Tt&&(vt=1-vt),i.clearDepth(vt),Mt=vt)},reset:function(){B=!1,Y=null,it=null,Mt=null,Tt=!1}}}function r(){let B=!1,Tt=null,Y=null,it=null,Mt=null,vt=null,$t=null,xe=null,Fe=null;return{setTest:function(ae){B||(ae?yt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ae){Tt!==ae&&!B&&(i.stencilMask(ae),Tt=ae)},setFunc:function(ae,fn,Me){(Y!==ae||it!==fn||Mt!==Me)&&(i.stencilFunc(ae,fn,Me),Y=ae,it=fn,Mt=Me)},setOp:function(ae,fn,Me){(vt!==ae||$t!==fn||xe!==Me)&&(i.stencilOp(ae,fn,Me),vt=ae,$t=fn,xe=Me)},setLocked:function(ae){B=ae},setClear:function(ae){Fe!==ae&&(i.clearStencil(ae),Fe=ae)},reset:function(){B=!1,Tt=null,Y=null,it=null,Mt=null,vt=null,$t=null,xe=null,Fe=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,h=new WeakMap;let u={},f={},p=new WeakMap,g=[],x=null,T=!1,_=null,m=null,U=null,I=null,R=null,V=null,O=null,M=new Qt(0,0,0),S=0,y=!1,v=null,A=null,N=null,w=null,tt=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,et=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=et>=1):$.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=et>=2);let gt=null,wt={};const Pt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),kt=new De().fromArray(Pt),Z=new De().fromArray(Ht);function ft(B,Tt,Y,it){const Mt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(B,vt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Y;$t++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Tt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return vt}const It={};It[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),It[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),It[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Wr),ot(!1),ut(yu),yt(i.CULL_FACE),L(Ci);function yt(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Ft(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Yt(B,Tt){return f[B]!==Tt?(i.bindFramebuffer(B,Tt),f[B]=Tt,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Tt),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Nt(B,Tt){let Y=g,it=!1;if(B){Y=p.get(Tt),Y===void 0&&(Y=[],p.set(Tt,Y));const Mt=B.textures;if(Y.length!==Mt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,$t=Mt.length;vt<$t;vt++)Y[vt]=i.COLOR_ATTACHMENT0+vt;Y.length=Mt.length,it=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,it=!0);it&&i.drawBuffers(Y)}function ve(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const re={[Ki]:i.FUNC_ADD,[ug]:i.FUNC_SUBTRACT,[fg]:i.FUNC_REVERSE_SUBTRACT};re[dg]=i.MIN,re[pg]=i.MAX;const Wt={[mg]:i.ZERO,[gg]:i.ONE,[_g]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[Tg]:i.SRC_ALPHA_SATURATE,[xg]:i.DST_COLOR,[yg]:i.DST_ALPHA,[vg]:i.ONE_MINUS_SRC_COLOR,[Yl]:i.ONE_MINUS_SRC_ALPHA,[Sg]:i.ONE_MINUS_DST_COLOR,[Eg]:i.ONE_MINUS_DST_ALPHA,[Mg]:i.CONSTANT_COLOR,[Ag]:i.ONE_MINUS_CONSTANT_COLOR,[bg]:i.CONSTANT_ALPHA,[wg]:i.ONE_MINUS_CONSTANT_ALPHA};function L(B,Tt,Y,it,Mt,vt,$t,xe,Fe,ae){if(B===Ci){T===!0&&(Ft(i.BLEND),T=!1);return}if(T===!1&&(yt(i.BLEND),T=!0),B!==hg){if(B!==_||ae!==y){if((m!==Ki||R!==Ki)&&(i.blendEquation(i.FUNC_ADD),m=Ki,R=Ki),ae)switch(B){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.ONE,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}U=null,I=null,V=null,O=null,M.set(0,0,0),S=0,_=B,y=ae}return}Mt=Mt||Tt,vt=vt||Y,$t=$t||it,(Tt!==m||Mt!==R)&&(i.blendEquationSeparate(re[Tt],re[Mt]),m=Tt,R=Mt),(Y!==U||it!==I||vt!==V||$t!==O)&&(i.blendFuncSeparate(Wt[Y],Wt[it],Wt[vt],Wt[$t]),U=Y,I=it,V=vt,O=$t),(xe.equals(M)===!1||Fe!==S)&&(i.blendColor(xe.r,xe.g,xe.b,Fe),M.copy(xe),S=Fe),_=B,y=!1}function pt(B,Tt){B.side===hi?Ft(i.CULL_FACE):yt(i.CULL_FACE);let Y=B.side===_n;Tt&&(Y=!Y),ot(Y),B.blending===kr&&B.transparent===!1?L(Ci):L(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Dt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function ut(B){B!==ag?(yt(i.CULL_FACE),B!==A&&(B===yu?i.cullFace(i.BACK):B===lg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),A=B}function nt(B){B!==N&&(Q&&i.lineWidth(B),N=B)}function Dt(B,Tt,Y){B?(yt(i.POLYGON_OFFSET_FILL),(w!==Tt||tt!==Y)&&(i.polygonOffset(Tt,Y),w=Tt,tt=Y)):Ft(i.POLYGON_OFFSET_FILL)}function at(B){B?yt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function D(B){B===void 0&&(B=i.TEXTURE0+J-1),gt!==B&&(i.activeTexture(B),gt=B)}function b(B,Tt,Y){Y===void 0&&(gt===null?Y=i.TEXTURE0+J-1:Y=gt);let it=wt[Y];it===void 0&&(it={type:void 0,texture:void 0},wt[Y]=it),(it.type!==B||it.texture!==Tt)&&(gt!==Y&&(i.activeTexture(Y),gt=Y),i.bindTexture(B,Tt||It[B]),it.type=B,it.texture=Tt)}function H(){const B=wt[gt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(B){kt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),kt.copy(B))}function Rt(B){Z.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function se(B,Tt){let Y=h.get(Tt);Y===void 0&&(Y=new WeakMap,h.set(Tt,Y));let it=Y.get(B);it===void 0&&(it=i.getUniformBlockIndex(Tt,B.name),Y.set(B,it))}function Kt(B,Tt){const it=h.get(Tt).get(B);c.get(Tt)!==it&&(i.uniformBlockBinding(Tt,it,B.__bindingPointIndex),c.set(Tt,it))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,wt={},f={},p=new WeakMap,g=[],x=null,T=!1,_=null,m=null,U=null,I=null,R=null,V=null,O=null,M=new Qt(0,0,0),S=0,y=!1,v=null,A=null,N=null,w=null,tt=null,kt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:yt,disable:Ft,bindFramebuffer:Yt,drawBuffers:Nt,useProgram:ve,setBlending:L,setMaterial:pt,setFlipSided:ot,setCullFace:ut,setLineWidth:nt,setPolygonOffset:Dt,setScissorTest:at,activeTexture:D,bindTexture:b,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:rt,texImage2D:bt,texImage3D:Vt,updateUBOMapping:se,uniformBlockBinding:Kt,texStorage2D:zt,texStorage3D:lt,texSubImage2D:W,texSubImage3D:xt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ut,scissor:Xt,viewport:Rt,reset:ge}}function jx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new dt,u=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,b){return g?new OffscreenCanvas(D,b):ya("canvas")}function T(D,b,H){let K=1;const rt=at(D);if((rt.width>H||rt.height>H)&&(K=H/Math.max(rt.width,rt.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const W=Math.floor(K*rt.width),xt=Math.floor(K*rt.height);f===void 0&&(f=x(W,xt));const _t=b?x(W,xt):f;return _t.width=W,_t.height=xt,_t.getContext("2d").drawImage(D,0,0,W,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+W+"x"+xt+")."),_t}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function _(D){return D.generateMipmaps}function m(D){i.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(D,b,H,K,rt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let W=b;if(b===i.RED&&(H===i.FLOAT&&(W=i.R32F),H===i.HALF_FLOAT&&(W=i.R16F),H===i.UNSIGNED_BYTE&&(W=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(W=i.R8UI),H===i.UNSIGNED_SHORT&&(W=i.R16UI),H===i.UNSIGNED_INT&&(W=i.R32UI),H===i.BYTE&&(W=i.R8I),H===i.SHORT&&(W=i.R16I),H===i.INT&&(W=i.R32I)),b===i.RG&&(H===i.FLOAT&&(W=i.RG32F),H===i.HALF_FLOAT&&(W=i.RG16F),H===i.UNSIGNED_BYTE&&(W=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(W=i.RG8UI),H===i.UNSIGNED_SHORT&&(W=i.RG16UI),H===i.UNSIGNED_INT&&(W=i.RG32UI),H===i.BYTE&&(W=i.RG8I),H===i.SHORT&&(W=i.RG16I),H===i.INT&&(W=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(W=i.RGB8UI),H===i.UNSIGNED_SHORT&&(W=i.RGB16UI),H===i.UNSIGNED_INT&&(W=i.RGB32UI),H===i.BYTE&&(W=i.RGB8I),H===i.SHORT&&(W=i.RGB16I),H===i.INT&&(W=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),H===i.UNSIGNED_INT&&(W=i.RGBA32UI),H===i.BYTE&&(W=i.RGBA8I),H===i.SHORT&&(W=i.RGBA16I),H===i.INT&&(W=i.RGBA32I)),b===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),b===i.RGBA){const xt=rt?_a:me.getTransfer(K);H===i.FLOAT&&(W=i.RGBA32F),H===i.HALF_FLOAT&&(W=i.RGBA16F),H===i.UNSIGNED_BYTE&&(W=xt===ye?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function R(D,b){let H;return D?b===null||b===rr||b===Os?H=i.DEPTH24_STENCIL8:b===ui?H=i.DEPTH32F_STENCIL8:b===Us&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===rr||b===Os?H=i.DEPTH_COMPONENT24:b===ui?H=i.DEPTH_COMPONENT32F:b===Us&&(H=i.DEPTH_COMPONENT16),H}function V(D,b){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==kn&&D.minFilter!==jn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function O(D){const b=D.target;b.removeEventListener("dispose",O),S(b),b.isVideoTexture&&u.delete(b)}function M(D){const b=D.target;b.removeEventListener("dispose",M),v(b)}function S(D){const b=n.get(D);if(b.__webglInit===void 0)return;const H=D.source,K=p.get(H);if(K){const rt=K[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&y(D),Object.keys(K).length===0&&p.delete(H)}n.remove(D)}function y(D){const b=n.get(D);i.deleteTexture(b.__webglTexture);const H=D.source,K=p.get(H);delete K[b.__cacheKey],o.memory.textures--}function v(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let rt=0;rt<b.__webglFramebuffer[K].length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[K][rt]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=D.textures;for(let K=0,rt=H.length;K<rt;K++){const W=n.get(H[K]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(D)}let A=0;function N(){A=0}function w(){const D=A;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),A+=1,D}function tt(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function J(D,b){const H=n.get(D);if(D.isVideoTexture&&nt(D),D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){const K=D.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,D,b);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function Q(D,b){const H=n.get(D);if(D.version>0&&H.__version!==D.version){Z(H,D,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function et(D,b){const H=n.get(D);if(D.version>0&&H.__version!==D.version){Z(H,D,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function $(D,b){const H=n.get(D);if(D.version>0&&H.__version!==D.version){ft(H,D,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const gt={[sc]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[oc]:i.MIRRORED_REPEAT},wt={[kn]:i.NEAREST,[Fg]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},Pt={[zg]:i.NEVER,[jg]:i.ALWAYS,[Hg]:i.LESS,[jd]:i.LEQUAL,[Gg]:i.EQUAL,[qg]:i.GEQUAL,[Wg]:i.GREATER,[Xg]:i.NOTEQUAL};function Ht(D,b){if(b.type===ui&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===jn||b.magFilter===rl||b.magFilter===xo||b.magFilter===Qi||b.minFilter===jn||b.minFilter===rl||b.minFilter===xo||b.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,gt[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,gt[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,gt[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,wt[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,wt[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===kn||b.minFilter!==xo&&b.minFilter!==Qi||b.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function kt(D,b){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",O));const K=b.source;let rt=p.get(K);rt===void 0&&(rt={},p.set(K,rt));const W=tt(b);if(W!==D.__cacheKey){rt[W]===void 0&&(rt[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),rt[W].usedTimes++;const xt=rt[D.__cacheKey];xt!==void 0&&(rt[D.__cacheKey].usedTimes--,xt.usedTimes===0&&y(b)),D.__cacheKey=W,D.__webglTexture=rt[W].texture}return H}function Z(D,b,H){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const rt=kt(D,b),W=b.source;e.bindTexture(K,D.__webglTexture,i.TEXTURE0+H);const xt=n.get(W);if(W.version!==xt.__version||rt===!0){e.activeTexture(i.TEXTURE0+H);const _t=me.getPrimaries(me.workingColorSpace),Ut=b.colorSpace===Ri?null:me.getPrimaries(b.colorSpace),zt=b.colorSpace===Ri||_t===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let lt=T(b.image,!1,r.maxTextureSize);lt=Dt(b,lt);const bt=s.convert(b.format,b.colorSpace),Vt=s.convert(b.type);let Xt=I(b.internalFormat,bt,Vt,b.colorSpace,b.isVideoTexture);Ht(K,b);let Rt;const se=b.mipmaps,Kt=b.isVideoTexture!==!0,ge=xt.__version===void 0||rt===!0,B=W.dataReady,Tt=V(b,lt);if(b.isDepthTexture)Xt=R(b.format===Vs,b.type),ge&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Xt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,bt,Vt,null));else if(b.isDataTexture)if(se.length>0){Kt&&ge&&e.texStorage2D(i.TEXTURE_2D,Tt,Xt,se[0].width,se[0].height);for(let Y=0,it=se.length;Y<it;Y++)Rt=se[Y],Kt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Rt.width,Rt.height,bt,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,Y,Xt,Rt.width,Rt.height,0,bt,Vt,Rt.data);b.generateMipmaps=!1}else Kt?(ge&&e.texStorage2D(i.TEXTURE_2D,Tt,Xt,lt.width,lt.height),B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,bt,Vt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,bt,Vt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Kt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Xt,se[0].width,se[0].height,lt.depth);for(let Y=0,it=se.length;Y<it;Y++)if(Rt=se[Y],b.format!==Vn)if(bt!==null)if(Kt){if(B)if(b.layerUpdates.size>0){const Mt=sf(Rt.width,Rt.height,b.format,b.type);for(const vt of b.layerUpdates){const $t=Rt.data.subarray(vt*Mt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,vt,Rt.width,Rt.height,1,bt,$t)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Rt.width,Rt.height,lt.depth,bt,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Xt,Rt.width,Rt.height,lt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Rt.width,Rt.height,lt.depth,bt,Vt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Xt,Rt.width,Rt.height,lt.depth,0,bt,Vt,Rt.data)}else{Kt&&ge&&e.texStorage2D(i.TEXTURE_2D,Tt,Xt,se[0].width,se[0].height);for(let Y=0,it=se.length;Y<it;Y++)Rt=se[Y],b.format!==Vn?bt!==null?Kt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Rt.width,Rt.height,bt,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Xt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Rt.width,Rt.height,bt,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,Y,Xt,Rt.width,Rt.height,0,bt,Vt,Rt.data)}else if(b.isDataArrayTexture)if(Kt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Xt,lt.width,lt.height,lt.depth),B)if(b.layerUpdates.size>0){const Y=sf(lt.width,lt.height,b.format,b.type);for(const it of b.layerUpdates){const Mt=lt.data.subarray(it*Y/lt.data.BYTES_PER_ELEMENT,(it+1)*Y/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,bt,Vt,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Vt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,lt.width,lt.height,lt.depth,0,bt,Vt,lt.data);else if(b.isData3DTexture)Kt?(ge&&e.texStorage3D(i.TEXTURE_3D,Tt,Xt,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Vt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,lt.width,lt.height,lt.depth,0,bt,Vt,lt.data);else if(b.isFramebufferTexture){if(ge)if(Kt)e.texStorage2D(i.TEXTURE_2D,Tt,Xt,lt.width,lt.height);else{let Y=lt.width,it=lt.height;for(let Mt=0;Mt<Tt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Xt,Y,it,0,bt,Vt,null),Y>>=1,it>>=1}}else if(se.length>0){if(Kt&&ge){const Y=at(se[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Xt,Y.width,Y.height)}for(let Y=0,it=se.length;Y<it;Y++)Rt=se[Y],Kt?B&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,bt,Vt,Rt):e.texImage2D(i.TEXTURE_2D,Y,Xt,bt,Vt,Rt);b.generateMipmaps=!1}else if(Kt){if(ge){const Y=at(lt);e.texStorage2D(i.TEXTURE_2D,Tt,Xt,Y.width,Y.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Vt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,bt,Vt,lt);_(b)&&m(K),xt.__version=W.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ft(D,b,H){if(b.image.length!==6)return;const K=kt(D,b),rt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);const W=n.get(rt);if(rt.version!==W.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const xt=me.getPrimaries(me.workingColorSpace),_t=b.colorSpace===Ri?null:me.getPrimaries(b.colorSpace),Ut=b.colorSpace===Ri||xt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const zt=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,bt=[];for(let it=0;it<6;it++)!zt&&!lt?bt[it]=T(b.image[it],!0,r.maxCubemapSize):bt[it]=lt?b.image[it].image:b.image[it],bt[it]=Dt(b,bt[it]);const Vt=bt[0],Xt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),se=I(b.internalFormat,Xt,Rt,b.colorSpace),Kt=b.isVideoTexture!==!0,ge=W.__version===void 0||K===!0,B=rt.dataReady;let Tt=V(b,Vt);Ht(i.TEXTURE_CUBE_MAP,b);let Y;if(zt){Kt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,se,Vt.width,Vt.height);for(let it=0;it<6;it++){Y=bt[it].mipmaps;for(let Mt=0;Mt<Y.length;Mt++){const vt=Y[Mt];b.format!==Vn?Xt!==null?Kt?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,vt.width,vt.height,Xt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,se,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,vt.width,vt.height,Xt,Rt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,se,vt.width,vt.height,0,Xt,Rt,vt.data)}}}else{if(Y=b.mipmaps,Kt&&ge){Y.length>0&&Tt++;const it=at(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,se,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,bt[it].width,bt[it].height,Xt,Rt,bt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,se,bt[it].width,bt[it].height,0,Xt,Rt,bt[it].data);for(let Mt=0;Mt<Y.length;Mt++){const $t=Y[Mt].image[it].image;Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,$t.width,$t.height,Xt,Rt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,se,$t.width,$t.height,0,Xt,Rt,$t.data)}}else{Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Xt,Rt,bt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,se,Xt,Rt,bt[it]);for(let Mt=0;Mt<Y.length;Mt++){const vt=Y[Mt];Kt?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Xt,Rt,vt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,se,Xt,Rt,vt.image[it])}}}_(b)&&m(i.TEXTURE_CUBE_MAP),W.__version=rt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function It(D,b,H,K,rt,W){const xt=s.convert(H.format,H.colorSpace),_t=s.convert(H.type),Ut=I(H.internalFormat,xt,_t,H.colorSpace),zt=n.get(b),lt=n.get(H);if(lt.__renderTarget=b,!zt.__hasExternalTextures){const bt=Math.max(1,b.width>>W),Vt=Math.max(1,b.height>>W);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,W,Ut,bt,Vt,b.depth,0,xt,_t,null):e.texImage2D(rt,W,Ut,bt,Vt,0,xt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,rt,lt.__webglTexture,0,ot(b)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,rt,lt.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(D,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){const K=b.depthTexture,rt=K&&K.isDepthTexture?K.type:null,W=R(b.stencilBuffer,rt),xt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ot(b);ut(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,W,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,W,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,W,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,D)}else{const K=b.textures;for(let rt=0;rt<K.length;rt++){const W=K[rt],xt=s.convert(W.format,W.colorSpace),_t=s.convert(W.type),Ut=I(W.internalFormat,xt,_t,W.colorSpace),zt=ot(b);H&&ut(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,Ut,b.width,b.height):ut(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,Ut,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const rt=K.__webglTexture,W=ot(b);if(b.depthTexture.format===Fs)ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(b.depthTexture.format===Vs)ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Yt(D){const b=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const rt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",rt)};K.addEventListener("dispose",rt),b.__depthDisposeCallback=rt}b.__boundDepthTexture=K}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const K=D.texture.mipmaps;K&&K.length>0?Ft(b.__webglFramebuffer[0],D):Ft(b.__webglFramebuffer,D)}else if(H){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),yt(b.__webglDepthbuffer[K],D,!1);else{const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,W)}}else{const K=D.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),yt(b.__webglDepthbuffer,D,!1);else{const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(D,b,H){const K=n.get(D);b!==void 0&&It(K.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Yt(D)}function ve(D){const b=D.texture,H=n.get(D),K=n.get(b);D.addEventListener("dispose",M);const rt=D.textures,W=D.isWebGLCubeRenderTarget===!0,xt=rt.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),W){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[_t]=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)H.__webglFramebuffer[_t][Ut]=i.createFramebuffer()}else H.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)H.__webglFramebuffer[_t]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xt)for(let _t=0,Ut=rt.length;_t<Ut;_t++){const zt=n.get(rt[_t]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&ut(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _t=0;_t<rt.length;_t++){const Ut=rt[_t];H.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_t]);const zt=s.convert(Ut.format,Ut.colorSpace),lt=s.convert(Ut.type),bt=I(Ut.internalFormat,zt,lt,Ut.colorSpace,D.isXRRenderTarget===!0),Vt=ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,bt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,H.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,b);for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)It(H.__webglFramebuffer[_t][Ut],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut);else It(H.__webglFramebuffer[_t],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);_(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let _t=0,Ut=rt.length;_t<Ut;_t++){const zt=rt[_t],lt=n.get(zt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Ht(i.TEXTURE_2D,zt),It(H.__webglFramebuffer,D,zt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),_(zt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_t=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,K.__webglTexture),Ht(_t,b),b.mipmaps&&b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)It(H.__webglFramebuffer[Ut],D,b,i.COLOR_ATTACHMENT0,_t,Ut);else It(H.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,_t,0);_(b)&&m(_t),e.unbindTexture()}D.depthBuffer&&Yt(D)}function re(D){const b=D.textures;for(let H=0,K=b.length;H<K;H++){const rt=b[H];if(_(rt)){const W=U(D),xt=n.get(rt).__webglTexture;e.bindTexture(W,xt),m(W),e.unbindTexture()}}}const Wt=[],L=[];function pt(D){if(D.samples>0){if(ut(D)===!1){const b=D.textures,H=D.width,K=D.height;let rt=i.COLOR_BUFFER_BIT;const W=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(D),_t=b.length>1;if(_t)for(let zt=0;zt<b.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const Ut=D.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let zt=0;zt<b.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[zt]);const lt=n.get(b[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,rt,i.NEAREST),c===!0&&(Wt.length=0,L.length=0,Wt.push(i.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(W),L.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let zt=0;zt<b.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[zt]);const lt=n.get(b[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ot(D){return Math.min(r.maxSamples,D.samples)}function ut(D){const b=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function nt(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Dt(D,b){const H=D.colorSpace,K=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==jr&&H!==Ri&&(me.getTransfer(H)===ye?(K!==Vn||rt!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function at(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=et,this.setTextureCube=$,this.rebindTextures=Nt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=ut}function $x(i,t){function e(n,r=Ri){let s;const o=me.getTransfer(r);if(n===$n)return i.UNSIGNED_BYTE;if(n===hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return i.BYTE;if(n===kd)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===ch)return i.INT;if(n===rr)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Hd)return i.ALPHA;if(n===Gd)return i.RGB;if(n===Vn)return i.RGBA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Wd)return i.RED;if(n===fh)return i.RED_INTEGER;if(n===Xd)return i.RG;if(n===dh)return i.RG_INTEGER;if(n===ph)return i.RGBA_INTEGER;if(n===na||n===ia||n===ra||n===sa)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===lc||n===cc||n===hc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===fc||n===dc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uc||n===fc)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===vc||n===yc||n===Ec||n===xc||n===Sc||n===Tc||n===Mc||n===Ac||n===bc||n===wc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ec)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wc)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===Rc||n===Cc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qd||n===Pc||n===Ic||n===Dc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new vn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oi({vertexShader:Yx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Cn(new ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends fr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,h=null,u=null,f=null,p=null,g=null,x=null;const T=new Zx,_=e.getContextAttributes();let m=null,U=null;const I=[],R=[],V=new dt;let O=null;const M=new Rn;M.viewport=new De;const S=new Rn;S.viewport=new De;const y=[M,S],v=new _v;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=I[Z];return ft===void 0&&(ft=new Al,I[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=I[Z];return ft===void 0&&(ft=new Al,I[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=I[Z];return ft===void 0&&(ft=new Al,I[Z]=ft),ft.getHandSpace()};function w(Z){const ft=R.indexOf(Z.inputSource);if(ft===-1)return;const It=I[ft];It!==void 0&&(It.update(Z.inputSource,Z.frame,h||o),It.dispatchEvent({type:Z.type,data:Z.inputSource}))}function tt(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",tt),r.removeEventListener("inputsourceschange",J);for(let Z=0;Z<I.length;Z++){const ft=R[Z];ft!==null&&(R[Z]=null,I[Z].disconnect(ft))}A=null,N=null,T.reset(),t.setRenderTarget(m),g=null,p=null,f=null,r=null,U=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",tt),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,yt=null,Ft=null;_.depth&&(Ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=_.stencil?Vs:Fs,yt=_.stencil?Os:rr);const Yt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(Yt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),U=new sr(p.textureWidth,p.textureHeight,{format:Vn,type:$n,depthTexture:new rp(p.textureWidth,p.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const It={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,It),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),U=new sr(g.framebufferWidth,g.framebufferHeight,{format:Vn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await r.requestReferenceSpace(a),kt.setContext(r),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function J(Z){for(let ft=0;ft<Z.removed.length;ft++){const It=Z.removed[ft],yt=R.indexOf(It);yt>=0&&(R[yt]=null,I[yt].disconnect(It))}for(let ft=0;ft<Z.added.length;ft++){const It=Z.added[ft];let yt=R.indexOf(It);if(yt===-1){for(let Yt=0;Yt<I.length;Yt++)if(Yt>=R.length){R.push(It),yt=Yt;break}else if(R[Yt]===null){R[Yt]=It,yt=Yt;break}if(yt===-1)break}const Ft=I[yt];Ft&&Ft.connect(It)}}const Q=new F,et=new F;function $(Z,ft,It){Q.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(It.matrixWorld);const yt=Q.distanceTo(et),Ft=ft.projectionMatrix.elements,Yt=It.projectionMatrix.elements,Nt=Ft[14]/(Ft[10]-1),ve=Ft[14]/(Ft[10]+1),re=(Ft[9]+1)/Ft[5],Wt=(Ft[9]-1)/Ft[5],L=(Ft[8]-1)/Ft[0],pt=(Yt[8]+1)/Yt[0],ot=Nt*L,ut=Nt*pt,nt=yt/(-L+pt),Dt=nt*-L;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(nt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ft[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const at=Nt+nt,D=ve+nt,b=ot-Dt,H=ut+(yt-Dt),K=re*ve/D*at,rt=Wt*ve/D*at;Z.projectionMatrix.makePerspective(b,H,K,rt,at,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function gt(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ft=Z.near,It=Z.far;T.texture!==null&&(T.depthNear>0&&(ft=T.depthNear),T.depthFar>0&&(It=T.depthFar)),v.near=S.near=M.near=ft,v.far=S.far=M.far=It,(A!==v.near||N!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,N=v.far),M.layers.mask=Z.layers.mask|2,S.layers.mask=Z.layers.mask|4,v.layers.mask=M.layers.mask|S.layers.mask;const yt=Z.parent,Ft=v.cameras;gt(v,yt);for(let Yt=0;Yt<Ft.length;Yt++)gt(Ft[Yt],yt);Ft.length===2?$(v,M,S):v.projectionMatrix.copy(M.projectionMatrix),wt(Z,v,yt)};function wt(Z,ft,It){It===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(It.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(v)};let Pt=null;function Ht(Z,ft){if(u=ft.getViewerPose(h||o),x=ft,u!==null){const It=u.views;g!==null&&(t.setRenderTargetFramebuffer(U,g.framebuffer),t.setRenderTarget(U));let yt=!1;It.length!==v.cameras.length&&(v.cameras.length=0,yt=!0);for(let Nt=0;Nt<It.length;Nt++){const ve=It[Nt];let re=null;if(g!==null)re=g.getViewport(ve);else{const L=f.getViewSubImage(p,ve);re=L.viewport,Nt===0&&(t.setRenderTargetTextures(U,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(U))}let Wt=y[Nt];Wt===void 0&&(Wt=new Rn,Wt.layers.enable(Nt),Wt.viewport=new De,y[Nt]=Wt),Wt.matrix.fromArray(ve.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(ve.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(re.x,re.y,re.width,re.height),Nt===0&&(v.matrix.copy(Wt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),yt===!0&&v.cameras.push(Wt)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Nt=f.getDepthInformation(It[0]);Nt&&Nt.isValid&&Nt.texture&&T.init(t,Nt,r.renderState)}}for(let It=0;It<I.length;It++){const yt=R[It],Ft=I[It];yt!==null&&Ft!==void 0&&Ft.update(yt,ft,h||o)}Pt&&Pt(Z,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),x=null}const kt=new _p;kt.setAnimationLoop(Ht),this.setAnimationLoop=function(Z){Pt=Z},this.dispose=function(){}}}const ji=new Hn,Qx=new be;function tS(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,ep(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function r(_,m,U,I,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),f(_,m)):m.isMeshPhongMaterial?(s(_,m),u(_,m)):m.isMeshStandardMaterial?(s(_,m),p(_,m),m.isMeshPhysicalMaterial&&g(_,m,R)):m.isMeshMatcapMaterial?(s(_,m),x(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),T(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?c(_,m,U,I):m.isSpriteMaterial?h(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===_n&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===_n&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const U=t.get(m),I=U.envMap,R=U.envMapRotation;I&&(_.envMap.value=I,ji.copy(R),ji.x*=-1,ji.y*=-1,ji.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),_.envMapRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(ji)),_.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,U,I){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*U,_.scale.value=I*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function f(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function p(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function g(_,m,U){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,m){m.matcap&&(_.matcap.value=m.matcap)}function T(_,m){const U=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eS(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(U,I){const R=I.program;n.uniformBlockBinding(U,R)}function h(U,I){let R=r[U.id];R===void 0&&(x(U),R=u(U),r[U.id]=R,U.addEventListener("dispose",_));const V=I.program;n.updateUBOMapping(U,V);const O=t.render.frame;s[U.id]!==O&&(p(U),s[U.id]=O)}function u(U){const I=f();U.__bindingPointIndex=I;const R=i.createBuffer(),V=U.__size,O=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,V,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,R),R}function f(){for(let U=0;U<a;U++)if(o.indexOf(U)===-1)return o.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(U){const I=r[U.id],R=U.uniforms,V=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let O=0,M=R.length;O<M;O++){const S=Array.isArray(R[O])?R[O]:[R[O]];for(let y=0,v=S.length;y<v;y++){const A=S[y];if(g(A,O,y,V)===!0){const N=A.__offset,w=Array.isArray(A.value)?A.value:[A.value];let tt=0;for(let J=0;J<w.length;J++){const Q=w[J],et=T(Q);typeof Q=="number"||typeof Q=="boolean"?(A.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,N+tt,A.__data)):Q.isMatrix3?(A.__data[0]=Q.elements[0],A.__data[1]=Q.elements[1],A.__data[2]=Q.elements[2],A.__data[3]=0,A.__data[4]=Q.elements[3],A.__data[5]=Q.elements[4],A.__data[6]=Q.elements[5],A.__data[7]=0,A.__data[8]=Q.elements[6],A.__data[9]=Q.elements[7],A.__data[10]=Q.elements[8],A.__data[11]=0):(Q.toArray(A.__data,tt),tt+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(U,I,R,V){const O=U.value,M=I+"_"+R;if(V[M]===void 0)return typeof O=="number"||typeof O=="boolean"?V[M]=O:V[M]=O.clone(),!0;{const S=V[M];if(typeof O=="number"||typeof O=="boolean"){if(S!==O)return V[M]=O,!0}else if(S.equals(O)===!1)return S.copy(O),!0}return!1}function x(U){const I=U.uniforms;let R=0;const V=16;for(let M=0,S=I.length;M<S;M++){const y=Array.isArray(I[M])?I[M]:[I[M]];for(let v=0,A=y.length;v<A;v++){const N=y[v],w=Array.isArray(N.value)?N.value:[N.value];for(let tt=0,J=w.length;tt<J;tt++){const Q=w[tt],et=T(Q),$=R%V,gt=$%et.boundary,wt=$+gt;R+=gt,wt!==0&&V-wt<et.storage&&(R+=V-wt),N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=R,R+=et.storage}}}const O=R%V;return O>0&&(R+=V-O),U.__size=R,U.__cache={},this}function T(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function _(U){const I=U.target;I.removeEventListener("dispose",_);const R=o.indexOf(I.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function m(){for(const U in r)i.deleteBuffer(r[U]);o=[],r={},s={}}return{bind:c,update:h,dispose:m}}class nS{constructor(t={}){const{canvas:e=Kg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=new Uint32Array(4),T=new Int32Array(4);let _=null,m=null;const U=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let V=!1;this._outputColorSpace=An;let O=0,M=0,S=null,y=-1,v=null;const A=new De,N=new De;let w=null;const tt=new Qt(0);let J=0,Q=e.width,et=e.height,$=1,gt=null,wt=null;const Pt=new De(0,0,Q,et),Ht=new De(0,0,Q,et);let kt=!1;const Z=new _h;let ft=!1,It=!1;const yt=new be,Ft=new be,Yt=new F,Nt=new De,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Wt(){return S===null?$:1}let L=n;function pt(C,k){return e.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),L===null){const k="webgl2";if(L=pt(k,C),L===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ot,ut,nt,Dt,at,D,b,H,K,rt,W,xt,_t,Ut,zt,lt,bt,Vt,Xt,Rt,se,Kt,ge,B;function Tt(){ot=new fE(L),ot.init(),Kt=new $x(L,ot),ut=new sE(L,ot,t,Kt),nt=new qx(L,ot),ut.reverseDepthBuffer&&p&&nt.buffers.depth.setReversed(!0),Dt=new mE(L),at=new Lx,D=new jx(L,ot,nt,at,ut,Kt,Dt),b=new aE(R),H=new uE(R),K=new xv(L),ge=new iE(L,K),rt=new dE(L,K,Dt,ge),W=new _E(L,rt,K,Dt),Xt=new gE(L,ut,D),lt=new oE(at),xt=new Dx(R,b,H,ot,ut,ge,lt),_t=new tS(R,at),Ut=new Ux,zt=new zx(ot),Vt=new nE(R,b,H,nt,W,g,c),bt=new Wx(R,W,ut),B=new eS(L,Dt,ut,nt),Rt=new rE(L,ot,Dt),se=new pE(L,ot,Dt),Dt.programs=xt.programs,R.capabilities=ut,R.extensions=ot,R.properties=at,R.renderLists=Ut,R.shadowMap=bt,R.state=nt,R.info=Dt}Tt();const Y=new Jx(R,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(Q,et,!1))},this.getSize=function(C){return C.set(Q,et)},this.setSize=function(C,k,q=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,et=k,e.width=Math.floor(C*$),e.height=Math.floor(k*$),q===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(Q*$,et*$).floor()},this.setDrawingBufferSize=function(C,k,q){Q=C,et=k,$=q,e.width=Math.floor(C*q),e.height=Math.floor(k*q),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(Pt)},this.setViewport=function(C,k,q,X){C.isVector4?Pt.set(C.x,C.y,C.z,C.w):Pt.set(C,k,q,X),nt.viewport(A.copy(Pt).multiplyScalar($).round())},this.getScissor=function(C){return C.copy(Ht)},this.setScissor=function(C,k,q,X){C.isVector4?Ht.set(C.x,C.y,C.z,C.w):Ht.set(C,k,q,X),nt.scissor(N.copy(Ht).multiplyScalar($).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(C){nt.setScissorTest(kt=C)},this.setOpaqueSort=function(C){gt=C},this.setTransparentSort=function(C){wt=C},this.getClearColor=function(C){return C.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,q=!0){let X=0;if(C){let z=!1;if(S!==null){const ct=S.texture.format;z=ct===ph||ct===dh||ct===fh}if(z){const ct=S.texture.type,Et=ct===$n||ct===rr||ct===Us||ct===Os||ct===hh||ct===uh,At=Vt.getClearColor(),Ct=Vt.getClearAlpha(),jt=At.r,Gt=At.g,Ot=At.b;Et?(x[0]=jt,x[1]=Gt,x[2]=Ot,x[3]=Ct,L.clearBufferuiv(L.COLOR,0,x)):(T[0]=jt,T[1]=Gt,T[2]=Ot,T[3]=Ct,L.clearBufferiv(L.COLOR,0,T))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Vt.dispose(),Ut.dispose(),zt.dispose(),at.dispose(),b.dispose(),H.dispose(),W.dispose(),ge.dispose(),B.dispose(),xt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",os),Y.removeEventListener("sessionend",_i),En.stop()};function it(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const C=Dt.autoReset,k=bt.enabled,q=bt.autoUpdate,X=bt.needsUpdate,z=bt.type;Tt(),Dt.autoReset=C,bt.enabled=k,bt.autoUpdate=q,bt.needsUpdate=X,bt.type=z}function vt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function $t(C){const k=C.target;k.removeEventListener("dispose",$t),xe(k)}function xe(C){Fe(C),at.remove(C)}function Fe(C){const k=at.get(C).programs;k!==void 0&&(k.forEach(function(q){xt.releaseProgram(q)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,q,X,z,ct){k===null&&(k=ve);const Et=z.isMesh&&z.matrixWorld.determinant()<0,At=_r(C,k,q,X,z);nt.setMaterial(X,Et);let Ct=q.index,jt=1;if(X.wireframe===!0){if(Ct=rt.getWireframeAttribute(q),Ct===void 0)return;jt=2}const Gt=q.drawRange,Ot=q.attributes.position;let oe=Gt.start*jt,ce=(Gt.start+Gt.count)*jt;ct!==null&&(oe=Math.max(oe,ct.start*jt),ce=Math.min(ce,(ct.start+ct.count)*jt)),Ct!==null?(oe=Math.max(oe,0),ce=Math.min(ce,Ct.count)):Ot!=null&&(oe=Math.max(oe,0),ce=Math.min(ce,Ot.count));const we=ce-oe;if(we<0||we===1/0)return;ge.setup(z,X,At,q,Ct);let Ae,le=Rt;if(Ct!==null&&(Ae=K.get(Ct),le=se,le.setIndex(Ae)),z.isMesh)X.wireframe===!0?(nt.setLineWidth(X.wireframeLinewidth*Wt()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(z.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),nt.setLineWidth(Bt*Wt()),z.isLineSegments?le.setMode(L.LINES):z.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else z.isPoints?le.setMode(L.POINTS):z.isSprite&&le.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)la("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Bt=z._multiDrawStarts,Ve=z._multiDrawCounts,fe=z._multiDrawCount,dn=Ct?K.get(Ct).bytesPerElement:1,vi=at.get(X).currentProgram.getUniforms();for(let Ne=0;Ne<fe;Ne++)vi.setValue(L,"_gl_DrawID",Ne),le.render(Bt[Ne]/dn,Ve[Ne])}else if(z.isInstancedMesh)le.renderInstances(oe,we,z.count);else if(q.isInstancedBufferGeometry){const Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ve=Math.min(q.instanceCount,Bt);le.renderInstances(oe,we,Ve)}else le.render(oe,we)};function ae(C,k,q){C.transparent===!0&&C.side===hi&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,ti(C,k,q),C.side=Ui,C.needsUpdate=!0,ti(C,k,q),C.side=hi):ti(C,k,q)}this.compile=function(C,k,q=null){q===null&&(q=C),m=zt.get(q),m.init(k),I.push(m),q.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),C!==q&&C.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const X=new Set;return C.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ct=z.material;if(ct)if(Array.isArray(ct))for(let Et=0;Et<ct.length;Et++){const At=ct[Et];ae(At,q,z),X.add(At)}else ae(ct,q,z),X.add(ct)}),m=I.pop(),X},this.compileAsync=function(C,k,q=null){const X=this.compile(C,k,q);return new Promise(z=>{function ct(){if(X.forEach(function(Et){at.get(Et).currentProgram.isReady()&&X.delete(Et)}),X.size===0){z(C);return}setTimeout(ct,10)}ot.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let fn=null;function Me(C){fn&&fn(C)}function os(){En.stop()}function _i(){En.start()}const En=new _p;En.setAnimationLoop(Me),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(C){fn=C,Y.setAnimationLoop(C),C===null?En.stop():En.start()},Y.addEventListener("sessionstart",os),Y.addEventListener("sessionend",_i),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,k,S),m=zt.get(C,I.length),m.init(k),I.push(m),Ft.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z.setFromProjectionMatrix(Ft),It=this.localClippingEnabled,ft=lt.init(this.clippingPlanes,It),_=Ut.get(C,U.length),_.init(),U.push(_),Y.enabled===!0&&Y.isPresenting===!0){const ct=R.xr.getDepthSensingMesh();ct!==null&&as(ct,k,-1/0,R.sortObjects)}as(C,k,0,R.sortObjects),_.finish(),R.sortObjects===!0&&_.sort(gt,wt),re=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,re&&Vt.addToRenderList(_,C),this.info.render.frame++,ft===!0&&lt.beginShadows();const q=m.state.shadowsArray;bt.render(q,C,k),ft===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,z=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ct=k.cameras;if(z.length>0)for(let Et=0,At=ct.length;Et<At;Et++){const Ct=ct[Et];Qn(X,z,C,Ct)}re&&Vt.render(C);for(let Et=0,At=ct.length;Et<At;Et++){const Ct=ct[Et];lo(_,C,Ct,Ct.viewport)}}else z.length>0&&Qn(X,z,C,k),re&&Vt.render(C),lo(_,C,k);S!==null&&M===0&&(D.updateMultisampleRenderTarget(S),D.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(R,C,k),ge.resetDefaultState(),y=-1,v=null,I.pop(),I.length>0?(m=I[I.length-1],ft===!0&&lt.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,U.pop(),U.length>0?_=U[U.length-1]:_=null};function as(C,k,q,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){X&&Nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);const Et=W.update(C),At=C.material;At.visible&&_.push(C,Et,At,q,Nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Et=W.update(C),At=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Nt.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Nt.copy(Et.boundingSphere.center)),Nt.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray(At)){const Ct=Et.groups;for(let jt=0,Gt=Ct.length;jt<Gt;jt++){const Ot=Ct[jt],oe=At[Ot.materialIndex];oe&&oe.visible&&_.push(C,Et,oe,q,Nt.z,Ot)}}else At.visible&&_.push(C,Et,At,q,Nt.z,null)}}const ct=C.children;for(let Et=0,At=ct.length;Et<At;Et++)as(ct[Et],k,q,X)}function lo(C,k,q,X){const z=C.opaque,ct=C.transmissive,Et=C.transparent;m.setupLightsView(q),ft===!0&&lt.setGlobalState(R.clippingPlanes,q),X&&nt.viewport(A.copy(X)),z.length>0&&mr(z,k,q),ct.length>0&&mr(ct,k,q),Et.length>0&&mr(Et,k,q),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Qn(C,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new sr(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Zs:$n,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const ct=m.state.transmissionRenderTarget[X.id],Et=X.viewport||A;ct.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);const At=R.getRenderTarget();R.setRenderTarget(ct),R.getClearColor(tt),J=R.getClearAlpha(),J<1&&R.setClearColor(16777215,.5),R.clear(),re&&Vt.render(q);const Ct=R.toneMapping;R.toneMapping=Pi;const jt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),ft===!0&&lt.setGlobalState(R.clippingPlanes,X),mr(C,q,X),D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ot=0,oe=k.length;Ot<oe;Ot++){const ce=k[Ot],we=ce.object,Ae=ce.geometry,le=ce.material,Bt=ce.group;if(le.side===hi&&we.layers.test(X.layers)){const Ve=le.side;le.side=_n,le.needsUpdate=!0,co(we,q,X,Ae,le,Bt),le.side=Ve,le.needsUpdate=!0,Gt=!0}}Gt===!0&&(D.updateMultisampleRenderTarget(ct),D.updateRenderTargetMipmap(ct))}R.setRenderTarget(At),R.setClearColor(tt,J),jt!==void 0&&(X.viewport=jt),R.toneMapping=Ct}function mr(C,k,q){const X=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ct=C.length;z<ct;z++){const Et=C[z],At=Et.object,Ct=Et.geometry,jt=Et.group;let Gt=Et.material;Gt.allowOverride===!0&&X!==null&&(Gt=X),At.layers.test(q.layers)&&co(At,k,q,Ct,Gt,jt)}}function co(C,k,q,X,z,ct){C.onBeforeRender(R,k,q,X,z,ct),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(R,k,q,X,C,ct),z.transparent===!0&&z.side===hi&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,R.renderBufferDirect(q,k,X,z,C,ct),z.side=Ui,z.needsUpdate=!0,R.renderBufferDirect(q,k,X,z,C,ct),z.side=hi):R.renderBufferDirect(q,k,X,z,C,ct),C.onAfterRender(R,k,q,X,z,ct)}function ti(C,k,q){k.isScene!==!0&&(k=ve);const X=at.get(C),z=m.state.lights,ct=m.state.shadowsArray,Et=z.state.version,At=xt.getParameters(C,z.state,ct,k,q),Ct=xt.getProgramCacheKey(At);let jt=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?H:b).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",$t),jt=new Map,X.programs=jt);let Gt=jt.get(Ct);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===Et)return gr(C,At),Gt}else At.uniforms=xt.getUniforms(C),C.onBeforeCompile(At,R),Gt=xt.acquireProgram(At,Ct),jt.set(Ct,Gt),X.uniforms=At.uniforms;const Ot=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ot.clippingPlanes=lt.uniform),gr(C,At),X.needsLights=ho(C),X.lightsStateVersion=Et,X.needsLights&&(Ot.ambientLightColor.value=z.state.ambient,Ot.lightProbe.value=z.state.probe,Ot.directionalLights.value=z.state.directional,Ot.directionalLightShadows.value=z.state.directionalShadow,Ot.spotLights.value=z.state.spot,Ot.spotLightShadows.value=z.state.spotShadow,Ot.rectAreaLights.value=z.state.rectArea,Ot.ltc_1.value=z.state.rectAreaLTC1,Ot.ltc_2.value=z.state.rectAreaLTC2,Ot.pointLights.value=z.state.point,Ot.pointLightShadows.value=z.state.pointShadow,Ot.hemisphereLights.value=z.state.hemi,Ot.directionalShadowMap.value=z.state.directionalShadowMap,Ot.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ot.spotShadowMap.value=z.state.spotShadowMap,Ot.spotLightMatrix.value=z.state.spotLightMatrix,Ot.spotLightMap.value=z.state.spotLightMap,Ot.pointShadowMap.value=z.state.pointShadowMap,Ot.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function ls(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=ua.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function gr(C,k){const q=at.get(C);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function _r(C,k,q,X,z){k.isScene!==!0&&(k=ve),D.resetTextureUnits();const ct=k.fog,Et=X.isMeshStandardMaterial?k.environment:null,At=S===null?R.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:jr,Ct=(X.isMeshStandardMaterial?H:b).get(X.envMap||Et),jt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ot=!!q.morphAttributes.position,oe=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color;let we=Pi;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(we=R.toneMapping);const Ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=Ae!==void 0?Ae.length:0,Bt=at.get(X),Ve=m.state.lights;if(ft===!0&&(It===!0||C!==v)){const Zt=C===v&&X.id===y;lt.setState(X,C,Zt)}let fe=!1;X.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Ve.state.version||Bt.outputColorSpace!==At||z.isBatchedMesh&&Bt.batching===!1||!z.isBatchedMesh&&Bt.batching===!0||z.isBatchedMesh&&Bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Bt.instancing===!1||!z.isInstancedMesh&&Bt.instancing===!0||z.isSkinnedMesh&&Bt.skinning===!1||!z.isSkinnedMesh&&Bt.skinning===!0||z.isInstancedMesh&&Bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Bt.instancingMorph===!1&&z.morphTexture!==null||Bt.envMap!==Ct||X.fog===!0&&Bt.fog!==ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==lt.numPlanes||Bt.numIntersection!==lt.numIntersection)||Bt.vertexAlphas!==jt||Bt.vertexTangents!==Gt||Bt.morphTargets!==Ot||Bt.morphNormals!==oe||Bt.morphColors!==ce||Bt.toneMapping!==we||Bt.morphTargetsCount!==le)&&(fe=!0):(fe=!0,Bt.__version=X.version);let dn=Bt.currentProgram;fe===!0&&(dn=ti(X,k,z));let vi=!1,Ne=!1,cn=!1;const _e=dn.getUniforms(),$e=Bt.uniforms;if(nt.useProgram(dn.program)&&(vi=!0,Ne=!0,cn=!0),X.id!==y&&(y=X.id,Ne=!0),vi||v!==C){nt.buffers.depth.getReversed()?(yt.copy(C.projectionMatrix),Jg(yt),Qg(yt),_e.setValue(L,"projectionMatrix",yt)):_e.setValue(L,"projectionMatrix",C.projectionMatrix),_e.setValue(L,"viewMatrix",C.matrixWorldInverse);const Be=_e.map.cameraPosition;Be!==void 0&&Be.setValue(L,Yt.setFromMatrixPosition(C.matrixWorld)),ut.logarithmicDepthBuffer&&_e.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_e.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),v!==C&&(v=C,Ne=!0,cn=!0)}if(z.isSkinnedMesh){_e.setOptional(L,z,"bindMatrix"),_e.setOptional(L,z,"bindMatrixInverse");const Zt=z.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_e.setValue(L,"boneTexture",Zt.boneTexture,D))}z.isBatchedMesh&&(_e.setOptional(L,z,"batchingTexture"),_e.setValue(L,"batchingTexture",z._matricesTexture,D),_e.setOptional(L,z,"batchingIdTexture"),_e.setValue(L,"batchingIdTexture",z._indirectTexture,D),_e.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&_e.setValue(L,"batchingColorTexture",z._colorsTexture,D));const hn=q.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Xt.update(z,q,dn),(Ne||Bt.receiveShadow!==z.receiveShadow)&&(Bt.receiveShadow=z.receiveShadow,_e.setValue(L,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($e.envMap.value=Ct,$e.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&($e.envMapIntensity.value=k.environmentIntensity),Ne&&(_e.setValue(L,"toneMappingExposure",R.toneMappingExposure),Bt.needsLights&&Gn($e,cn),ct&&X.fog===!0&&_t.refreshFogUniforms($e,ct),_t.refreshMaterialUniforms($e,X,$,et,m.state.transmissionRenderTarget[C.id]),ua.upload(L,ls(Bt),$e,D)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ua.upload(L,ls(Bt),$e,D),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_e.setValue(L,"center",z.center),_e.setValue(L,"modelViewMatrix",z.modelViewMatrix),_e.setValue(L,"normalMatrix",z.normalMatrix),_e.setValue(L,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Zt=X.uniformsGroups;for(let Be=0,ei=Zt.length;Be<ei;Be++){const xn=Zt[Be];B.update(xn,dn),B.bind(xn,dn)}}return dn}function Gn(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function ho(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,k,q){const X=at.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),at.get(C.texture).__webglTexture=k,at.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const q=at.get(C);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const uo=L.createFramebuffer();this.setRenderTarget=function(C,k=0,q=0){S=C,O=k,M=q;let X=!0,z=null,ct=!1,Et=!1;if(C){const Ct=at.get(C);if(Ct.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ct.__hasExternalTextures)D.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ot=C.depthTexture;if(Ct.__boundDepthTexture!==Ot){if(Ot!==null&&at.has(Ot)&&(C.width!==Ot.image.width||C.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Et=!0);const Gt=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?z=Gt[k][q]:z=Gt[k],ct=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?z=at.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[q]:z=Gt,A.copy(C.viewport),N.copy(C.scissor),w=C.scissorTest}else A.copy(Pt).multiplyScalar($).floor(),N.copy(Ht).multiplyScalar($).floor(),w=kt;if(q!==0&&(z=uo),nt.bindFramebuffer(L.FRAMEBUFFER,z)&&X&&nt.drawBuffers(C,z),nt.viewport(A),nt.scissor(N),nt.setScissorTest(w),ct){const Ct=at.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,q)}else if(Et){const Ct=at.get(C.texture),jt=k;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.__webglTexture,q,jt)}else if(C!==null&&q!==0){const Ct=at.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(C,k,q,X,z,ct,Et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){nt.bindFramebuffer(L.FRAMEBUFFER,At);try{const Ct=C.texture,jt=Ct.format,Gt=Ct.type;if(!ut.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&q>=0&&q<=C.height-z&&L.readPixels(k,q,X,z,Kt.convert(jt),Kt.convert(Gt),ct)}finally{const Ct=S!==null?at.get(S).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(C,k,q,X,z,ct,Et){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(k>=0&&k<=C.width-X&&q>=0&&q<=C.height-z){nt.bindFramebuffer(L.FRAMEBUFFER,At);const Ct=C.texture,jt=Ct.format,Gt=Ct.type;if(!ut.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,ct.byteLength,L.STREAM_READ),L.readPixels(k,q,X,z,Kt.convert(jt),Kt.convert(Gt),0);const oe=S!==null?at.get(S).__webglFramebuffer:null;nt.bindFramebuffer(L.FRAMEBUFFER,oe);const ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zg(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ct),L.deleteBuffer(Ot),L.deleteSync(ce),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,q=0){const X=Math.pow(2,-q),z=Math.floor(C.image.width*X),ct=Math.floor(C.image.height*X),Et=k!==null?k.x:0,At=k!==null?k.y:0;D.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Et,At,z,ct),nt.unbindTexture()};const cs=L.createFramebuffer(),hs=L.createFramebuffer();this.copyTextureToTexture=function(C,k,q=null,X=null,z=0,ct=null){ct===null&&(z!==0?(la("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=z,z=0):ct=0);let Et,At,Ct,jt,Gt,Ot,oe,ce,we;const Ae=C.isCompressedTexture?C.mipmaps[ct]:C.image;if(q!==null)Et=q.max.x-q.min.x,At=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,jt=q.min.x,Gt=q.min.y,Ot=q.isBox3?q.min.z:0;else{const hn=Math.pow(2,-z);Et=Math.floor(Ae.width*hn),At=Math.floor(Ae.height*hn),C.isDataArrayTexture?Ct=Ae.depth:C.isData3DTexture?Ct=Math.floor(Ae.depth*hn):Ct=1,jt=0,Gt=0,Ot=0}X!==null?(oe=X.x,ce=X.y,we=X.z):(oe=0,ce=0,we=0);const le=Kt.convert(k.format),Bt=Kt.convert(k.type);let Ve;k.isData3DTexture?(D.setTexture3D(k,0),Ve=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(D.setTexture2DArray(k,0),Ve=L.TEXTURE_2D_ARRAY):(D.setTexture2D(k,0),Ve=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const fe=L.getParameter(L.UNPACK_ROW_LENGTH),dn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vi=L.getParameter(L.UNPACK_SKIP_PIXELS),Ne=L.getParameter(L.UNPACK_SKIP_ROWS),cn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ot);const _e=C.isDataArrayTexture||C.isData3DTexture,$e=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const hn=at.get(C),Zt=at.get(k),Be=at.get(hn.__renderTarget),ei=at.get(Zt.__renderTarget);nt.bindFramebuffer(L.READ_FRAMEBUFFER,Be.__webglFramebuffer),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let xn=0;xn<Ct;xn++)_e&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,at.get(C).__webglTexture,z,Ot+xn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,at.get(k).__webglTexture,ct,we+xn)),L.blitFramebuffer(jt,Gt,Et,At,oe,ce,Et,At,L.DEPTH_BUFFER_BIT,L.NEAREST);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||C.isRenderTargetTexture||at.has(C)){const hn=at.get(C),Zt=at.get(k);nt.bindFramebuffer(L.READ_FRAMEBUFFER,cs),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,hs);for(let Be=0;Be<Ct;Be++)_e?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hn.__webglTexture,z,Ot+Be):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hn.__webglTexture,z),$e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,ct,we+Be):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,ct),z!==0?L.blitFramebuffer(jt,Gt,Et,At,oe,ce,Et,At,L.COLOR_BUFFER_BIT,L.NEAREST):$e?L.copyTexSubImage3D(Ve,ct,oe,ce,we+Be,jt,Gt,Et,At):L.copyTexSubImage2D(Ve,ct,oe,ce,jt,Gt,Et,At);nt.bindFramebuffer(L.READ_FRAMEBUFFER,null),nt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $e?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ve,ct,oe,ce,we,Et,At,Ct,le,Bt,Ae.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ve,ct,oe,ce,we,Et,At,Ct,le,Ae.data):L.texSubImage3D(Ve,ct,oe,ce,we,Et,At,Ct,le,Bt,Ae):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ct,oe,ce,Et,At,le,Bt,Ae.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ct,oe,ce,Ae.width,Ae.height,le,Ae.data):L.texSubImage2D(L.TEXTURE_2D,ct,oe,ce,Et,At,le,Bt,Ae);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cn),ct===0&&k.generateMipmaps&&L.generateMipmap(Ve),nt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,q=null,X=null,z=0){return la('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,k,q,X,z)},this.initRenderTarget=function(C){at.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),nt.unbindTexture()},this.resetState=function(){O=0,M=0,S=null,nt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Pf={type:"change"},Sh={type:"start"},Sp={type:"end"},Yo=new Ba,If=new wi,iS=Math.cos(70*Yg.DEG2RAD),ke=new F,mn=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class rS extends yv{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Fr.ROTATE,TWO:Fr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new or,this._lastTargetPosition=new F,this._quat=new or().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rf,this._sphericalDelta=new rf,this._scale=1,this._panOffset=new F,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new F,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oS.bind(this),this._onPointerDown=sS.bind(this),this._onPointerUp=aS.bind(this),this._onContextMenu=pS.bind(this),this._onMouseWheel=hS.bind(this),this._onKeyDown=uS.bind(this),this._onTouchStart=fS.bind(this),this._onTouchMove=dS.bind(this),this._onMouseDown=lS.bind(this),this._onMouseMove=cS.bind(this),this._interceptControlDown=mS.bind(this),this._interceptControlUp=gS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pf),this.update(),this.state=Ee.NONE}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),r<-Math.PI?r+=mn:r>Math.PI&&(r-=mn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ke.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<iS?this.object.lookAt(this.target):(If.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(If,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Pf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ke.copy(r).sub(this.target);let s=ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function oS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function aS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sp),this.state=Ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lS(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ee.DOLLY;break;case Br.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}break;case Br.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Sh)}function cS(i){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hS(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(i.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Sp))}function uS(i){this.enabled!==!1&&this._handleKeyDown(i)}function fS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ee.TOUCH_ROTATE;break;case Fr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case Fr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ee.TOUCH_DOLLY_PAN;break;case Fr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(Sh)}function dS(i){switch(this._trackPointer(i),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ee.NONE}}function pS(i){this.enabled!==!1&&i.preventDefault()}function mS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _S=/^[og]\s*(.+)?/,vS=/^mtllib /,yS=/^usemtl /,ES=/^usemap /,Df=/\s+/,Lf=new F,kl=new F,Nf=new F,Uf=new F,wn=new F,Ko=new Qt;function xS(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const h={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;Lf.fromArray(r,t),kl.fromArray(r,e),Nf.fromArray(r,n),wn.subVectors(Nf,kl),Uf.subVectors(Lf,kl),wn.cross(Uf),wn.normalize(),s.push(wn.x,wn.y,wn.z),s.push(wn.x,wn.y,wn.z),s.push(wn.x,wn.y,wn.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,c,h){const u=this.vertices.length;let f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(e,u),g=this.parseVertexIndex(n,u);if(this.addVertex(f,p,g),this.addColor(f,p,g),a!==void 0&&a!==""){const x=this.normals.length;f=this.parseNormalIndex(a,x),p=this.parseNormalIndex(c,x),g=this.parseNormalIndex(h,x),this.addNormal(f,p,g)}else this.addFaceNormal(f,p,g);if(r!==void 0&&r!==""){const x=this.uvs.length;f=this.parseUVIndex(r,x),p=this.parseUVIndex(s,x),g=this.parseUVIndex(o,x),this.addUV(f,p,g),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class SS extends za{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,o=new pp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new xS;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let a=0,c=n.length;a<c;a++){const h=n[a].trimStart();if(h.length===0)continue;const u=h.charAt(0);if(u!=="#")if(u==="v"){const f=h.split(Df);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Ko.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),An),e.colors.push(Ko.r,Ko.g,Ko.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const p=h.slice(1).trim().split(Df),g=[];for(let T=0,_=p.length;T<_;T++){const m=p[T];if(m.length>0){const U=m.split("/");g.push(U)}}const x=g[0];for(let T=1,_=g.length-1;T<_;T++){const m=g[T],U=g[T+1];e.addFace(x[0],m[0],U[0],x[1],m[1],U[1],x[2],m[2],U[2])}}else if(u==="l"){const f=h.substring(1).trim().split(" ");let p=[];const g=[];if(h.indexOf("/")===-1)p=f;else for(let x=0,T=f.length;x<T;x++){const _=f[x].split("/");_[0]!==""&&p.push(_[0]),_[1]!==""&&g.push(_[1])}e.addLineGeometry(p,g)}else if(u==="p"){const p=h.slice(1).trim().split(" ");e.addPointGeometry(p)}else if((r=_S.exec(h))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);e.startObject(f)}else if(yS.test(h))e.object.startMaterial(h.substring(7).trim(),e.materialLibraries);else if(vS.test(h))e.materialLibraries.push(h.substring(7).trim());else if(ES.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=h.split(" "),r.length>1){const p=r[1].trim().toLowerCase();e.object.smooth=p!=="0"&&p!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}e.finalize();const s=new Ts;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){const h=e.objects[a],u=h.geometry,f=h.materials,p=u.type==="Line",g=u.type==="Points";let x=!1;if(u.vertices.length===0)continue;const T=new Pn;T.setAttribute("position",new Je(u.vertices,3)),u.normals.length>0&&T.setAttribute("normal",new Je(u.normals,3)),u.colors.length>0&&(x=!0,T.setAttribute("color",new Je(u.colors,3))),u.hasUVIndices===!0&&T.setAttribute("uv",new Je(u.uvs,2));const _=[];for(let U=0,I=f.length;U<I;U++){const R=f[U],V=R.name+"_"+R.smooth+"_"+x;let O=e.materials[V];if(this.materials!==null){if(O=this.materials.create(R.name),p&&O&&!(O instanceof ca)){const M=new ca;Yn.prototype.copy.call(M,O),M.color.copy(O.color),O=M}else if(g&&O&&!(O instanceof Ms)){const M=new Ms({size:10,sizeAttenuation:!1});Yn.prototype.copy.call(M,O),M.color.copy(O.color),M.map=O.map,O=M}}O===void 0&&(p?O=new ca:g?O=new Ms({size:1,sizeAttenuation:!1}):O=new dp,O.name=R.name,O.flatShading=!R.smooth,O.vertexColors=x,e.materials[V]=O),_.push(O)}let m;if(_.length>1){for(let U=0,I=f.length;U<I;U++){const R=f[U];T.addGroup(R.groupStart,R.groupCount,U)}p?m=new ju(T,_):g?m=new Rl(T,_):m=new Cn(T,_)}else p?m=new ju(T,_[0]):g?m=new Rl(T,_[0]):m=new Cn(T,_[0]);m.name=h.name,s.add(m)}else if(e.vertices.length>0){const a=new Ms({size:1,sizeAttenuation:!1}),c=new Pn;c.setAttribute("position",new Je(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new Je(e.colors,3)),a.vertexColors=!0);const h=new Rl(c,a);s.add(h)}return s}}class TS extends za{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new pp(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const c=s.parse(JSON.parse(a));e&&e(c)},n,r)}parse(t){return new MS(t)}}class MS{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=AS(t,e,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function AS(i,t,e){const n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[];let a=0,c=0;for(let h=0;h<n.length;h++){const u=n[h];if(u===`
`)a=0,c-=s;else{const f=bS(u,r,a,c,e);a+=f.offsetX,o.push(f.path)}}return o}function bS(i,t,e,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new vv;let a,c,h,u,f,p,g,x;if(s.o){const T=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let _=0,m=T.length;_<m;)switch(T[_++]){case"m":a=T[_++]*t+e,c=T[_++]*t+n,o.moveTo(a,c);break;case"l":a=T[_++]*t+e,c=T[_++]*t+n,o.lineTo(a,c);break;case"q":h=T[_++]*t+e,u=T[_++]*t+n,f=T[_++]*t+e,p=T[_++]*t+n,o.quadraticCurveTo(f,p,h,u);break;case"b":h=T[_++]*t+e,u=T[_++]*t+n,f=T[_++]*t+e,p=T[_++]*t+n,g=T[_++]*t+e,x=T[_++]*t+n,o.bezierCurveTo(f,p,g,x,h,u);break}}return{offsetX:s.ha*t,path:o}}class wS extends Eh{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}const Ii=new M_,RS=new gv(16777215,1);Ii.add(RS);const Tp=new mv(16777215,.8);Tp.position.set(1,1,1);Ii.add(Tp);const Th=new Rn(45,1/1,.1,1e3);Th.position.setZ(11);const eo=new nS({canvas:document.querySelector("#bg"),antialias:!0});eo.setPixelRatio(window.devicePixelRatio);eo.setSize(600,600);eo.setClearColor(2106154);const CS=new rS(Th,eo.domElement);let kc=0,zc=0;const Mp=new Qt(5949690),Ap=new Qt(16739179),Of=new Qt(16777215);let Ff=!1,Hs=null;window.updateBrainVisualization=function(i,t){kc=i/100,zc=t/100,Hs&&Mh(),Ff||(wp(),Ff=!0)};const bp=new SS,PS=new TS;bp.load("obj/freesurff.Obj",function(i){Hs=i,Mh(),Ii.add(i)});function Mh(){Hs&&(Hs.traverse(function(i){if(i.isMesh){const t=i.geometry,e=t.attributes.position.count,n=new Float32Array(e*3),r=new zn(n,3),s=[],o=[];for(let h=0;h<e;h++){const u=t.attributes.position.getX(h),f=t.attributes.position.getY(h);u<=0?s.push({index:h,y:f}):o.push({index:h,y:f})}s.sort((h,u)=>u.y-h.y),o.sort((h,u)=>u.y-h.y);const a=Math.floor(s.length*kc),c=Math.floor(o.length*zc);for(let h=0;h<s.length;h++){const{index:u}=s[h];(h<a?Mp:Of).toArray(n,u*3)}for(let h=0;h<o.length;h++){const{index:u}=o[h];(h<c?Ap:Of).toArray(n,u*3)}t.setAttribute("color",r),t.attributes.color.needsUpdate=!0,i.material=new av({vertexColors:!0,metalness:.3,roughness:.6})}}),IS(kc,zc))}function IS(i,t){Ii.children=Ii.children.filter(e=>e.name!=="percentage-label"),PS.load("fonts/helvetiker_regular.typeface.json",e=>{const n=(r,s,o)=>{const a=new wS(r,{font:e,size:1.5,height:.1,curveSegments:12});a.computeBoundingBox();const c=a.boundingBox,h=-.5*(c.max.x-c.min.x),u=new Cn(a,new dp({color:s}));u.name="percentage-label",u.position.set(h+o,0,0),u.scale.set(.3,.3,.001),Ii.add(u)};n(`${(i*100).toFixed(0)}%`,Mp,-1.9),n(`${(t*100).toFixed(0)}%`,Ap,4.7)})}function wp(){requestAnimationFrame(wp),CS.update(),eo.render(Ii,Th)}window.scene=Ii;window.loader=bp;window.brainObject=Hs;window.actualizarColoresYTexto=Mh;const Hc=[{id:1,q:"¿Prefieres resolver problemas con lógica o con intuición?",left:"Lógica",right:"Intuición"},{id:2,q:"¿Te resulta más fácil recordar hechos o imágenes?",left:"Hechos",right:"Imágenes"}],DS=`
  <h2 class="result-title">🧠 "El Lógico: Precisión y Estructura"</h2>
  <p class="result-subtitle"><em>Descripción:</em></p>
  <p class="result-text">
    Tu enfoque estructurado, tu pensamiento analítico y tu facilidad para comprender sistemas lógicos te convierten en una persona metódica y eficiente.
    En <em>Ingeniería Industrial</em>, destacarías en áreas que requieren:
  </p>
  <ul class="result-list">
    <li><em>Gestión de procesos</em>: Mejora continua mediante Six Sigma o Lean.</li>
    <li><em>Optimización de recursos</em>: Uso de modelos matemáticos para planificación.</li>
    <li><em>Calidad y control estadístico</em>: Análisis de datos e indicadores clave.</li>
    <li><em>Automatización</em>: Diseño de sistemas racionales de producción.</li>
  </ul>
  <p class="result-quote">
    "Transformas estructuras complejas en sistemas eficientes. Tu lógica es tu superpoder."
  </p>
`,LS=`
  <h2 class="result-title">🧠 "El Creativo: Intuición y Adaptabilidad"</h2>
  <p class="result-subtitle"><em>Descripción:</em></p>
  <p class="result-text">
    Tu capacidad para visualizar soluciones, adaptarte a lo inesperado y pensar de forma innovadora te convierte en alguien ideal para afrontar desafíos complejos.
    En <em>Ingeniería Industrial</em>, destacarías en áreas que requieren:
  </p>
  <ul class="result-list">
    <li><em>Diseño de espacios o productos</em>: Pensamiento creativo y visión global.</li>
    <li><em>Gestión del cambio</em>: Liderazgo en entornos inciertos o en transformación.</li>
    <li><em>Innovación organizacional</em>: Métodos ágiles, design thinking y prototipado.</li>
    <li><em>Comunicación visual</em>: Visualización de datos o sistemas complejos.</li>
  </ul>
  <p class="result-quote">
    "Tu creatividad rompe esquemas. Puedes imaginar nuevas soluciones donde otros solo ven problemas."
  </p>
`,NS=()=>{};var Vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},US=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(c>>10)),t[n++]=String.fromCharCode(56320+(c&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,c=r+2<i.length,h=c?i[r+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|h>>6,g=h&63;c||(g=64,o||(p=64)),n.push(e[u],e[f],e[p],e[g])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Rp(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):US(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const h=r<i.length?e[i.charAt(r)]:64;++r;const f=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||h==null||f==null)throw new OS;const p=s<<2|a>>4;if(n.push(p),h!==64){const g=a<<4&240|h>>2;if(n.push(g),f!==64){const x=h<<6&192|f;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class OS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FS=function(i){const t=Rp(i);return Cp.encodeByteArray(t,!0)},Sa=function(i){return FS(i).replace(/\./g,"")},VS=function(i){try{return Cp.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=()=>BS().__FIREBASE_DEFAULTS__,zS=()=>{if(typeof process>"u"||typeof Vf>"u")return;const i=Vf.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},HS=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&VS(i[1]);return t&&JSON.parse(t)},Ah=()=>{try{return NS()||kS()||zS()||HS()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},GS=i=>{var t,e;return(e=(t=Ah())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},WS=i=>{const t=GS(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},Pp=()=>{var i;return(i=Ah())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Sa(JSON.stringify(e)),Sa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $S(){var i;const t=(i=Ah())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YS(){return!$S()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KS(){try{return typeof indexedDB=="object"}catch{return!1}}function ZS(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="FirebaseError";class is extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=JS,Object.setPrototypeOf(this,is.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ip.prototype.create)}}class Ip{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?QS(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new is(r,a,n)}}function QS(i,t){return i.replace(tT,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const tT=/\{\$([^}]+)}/g;function Ta(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(Bf(s)&&Bf(o)){if(!Ta(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function Bf(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(i){return i&&i._delegate?i._delegate:i}class Ws{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new XS;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(iT(t))try{this.getOrInitializeService({instanceIdentifier:Yi})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=Yi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yi){return this.instances.has(t)}getOptions(t=Yi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:nT(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Yi){return this.component?this.component.multipleInstances?t:Yi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nT(i){return i===Yi?void 0:i}function iT(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new eT(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const sT={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},oT=ue.INFO,aT={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},lT=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=aT[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dp{constructor(t){this.name=t,this._logLevel=oT,this._logHandler=lT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const cT=(i,t)=>t.some(e=>i instanceof e);let kf,zf;function hT(){return kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uT(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lp=new WeakMap,Gc=new WeakMap,Np=new WeakMap,zl=new WeakMap,bh=new WeakMap;function fT(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Di(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Lp.set(e,i)}).catch(()=>{}),bh.set(t,i),t}function dT(i){if(Gc.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Gc.set(i,t)}let Wc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Gc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Np.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Di(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function pT(i){Wc=i(Wc)}function mT(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(Hl(this),t,...e);return Np.set(n,t.sort?t.sort():[t]),Di(n)}:uT().includes(i)?function(...t){return i.apply(Hl(this),t),Di(Lp.get(this))}:function(...t){return Di(i.apply(Hl(this),t))}}function gT(i){return typeof i=="function"?mT(i):(i instanceof IDBTransaction&&dT(i),cT(i,hT())?new Proxy(i,Wc):i)}function Di(i){if(i instanceof IDBRequest)return fT(i);if(zl.has(i))return zl.get(i);const t=gT(i);return t!==i&&(zl.set(i,t),bh.set(t,i)),t}const Hl=i=>bh.get(i);function _T(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=Di(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Di(o.result),c.oldVersion,c.newVersion,Di(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const vT=["get","getKey","getAll","getAllKeys","count"],yT=["put","add","delete","clear"],Gl=new Map;function Hf(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Gl.get(t))return Gl.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=yT.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||vT.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return n&&(h=h.index(a.shift())),(await Promise.all([h[e](...a),r&&c.done]))[0]};return Gl.set(t,s),s}pT(i=>({...i,get:(t,e,n)=>Hf(t,e)||i.get(t,e,n),has:(t,e)=>!!Hf(t,e)||i.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(xT(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function xT(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xc="@firebase/app",Gf="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Dp("@firebase/app"),ST="@firebase/app-compat",TT="@firebase/analytics-compat",MT="@firebase/analytics",AT="@firebase/app-check-compat",bT="@firebase/app-check",wT="@firebase/auth",RT="@firebase/auth-compat",CT="@firebase/database",PT="@firebase/data-connect",IT="@firebase/database-compat",DT="@firebase/functions",LT="@firebase/functions-compat",NT="@firebase/installations",UT="@firebase/installations-compat",OT="@firebase/messaging",FT="@firebase/messaging-compat",VT="@firebase/performance",BT="@firebase/performance-compat",kT="@firebase/remote-config",zT="@firebase/remote-config-compat",HT="@firebase/storage",GT="@firebase/storage-compat",WT="@firebase/firestore",XT="@firebase/vertexai",qT="@firebase/firestore-compat",jT="firebase",$T="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="[DEFAULT]",YT={[Xc]:"fire-core",[ST]:"fire-core-compat",[MT]:"fire-analytics",[TT]:"fire-analytics-compat",[bT]:"fire-app-check",[AT]:"fire-app-check-compat",[wT]:"fire-auth",[RT]:"fire-auth-compat",[CT]:"fire-rtdb",[PT]:"fire-data-connect",[IT]:"fire-rtdb-compat",[DT]:"fire-fn",[LT]:"fire-fn-compat",[NT]:"fire-iid",[UT]:"fire-iid-compat",[OT]:"fire-fcm",[FT]:"fire-fcm-compat",[VT]:"fire-perf",[BT]:"fire-perf-compat",[kT]:"fire-rc",[zT]:"fire-rc-compat",[HT]:"fire-gcs",[GT]:"fire-gcs-compat",[WT]:"fire-fst",[qT]:"fire-fst-compat",[XT]:"fire-vertex","fire-js":"fire-js",[jT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map,KT=new Map,jc=new Map;function Wf(i,t){try{i.container.addComponent(t)}catch(e){gi.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Aa(i){const t=i.name;if(jc.has(t))return gi.debug(`There were multiple attempts to register component ${t}.`),!1;jc.set(t,i);for(const e of Ma.values())Wf(e,i);for(const e of KT.values())Wf(e,i);return!0}function ZT(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function JT(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Li=new Ip("app","Firebase",QT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=$T;function Up(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:qc,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Li.create("bad-app-name",{appName:String(r)});if(e||(e=Pp()),!e)throw Li.create("no-options");const s=Ma.get(r);if(s){if(Ta(e,s.options)&&Ta(n,s.config))return s;throw Li.create("duplicate-app",{appName:r})}const o=new rT(r);for(const c of jc.values())o.addComponent(c);const a=new tM(e,n,o);return Ma.set(r,a),a}function nM(i=qc){const t=Ma.get(i);if(!t&&i===qc&&Pp())return Up();if(!t)throw Li.create("no-app",{appName:i});return t}function Hr(i,t,e){var n;let r=(n=YT[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gi.warn(a.join(" "));return}Aa(new Ws(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM="firebase-heartbeat-database",rM=1,Xs="firebase-heartbeat-store";let Wl=null;function Op(){return Wl||(Wl=_T(iM,rM,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Xs)}catch(e){console.warn(e)}}}}).catch(i=>{throw Li.create("idb-open",{originalErrorMessage:i.message})})),Wl}async function sM(i){try{const e=(await Op()).transaction(Xs),n=await e.objectStore(Xs).get(Fp(i));return await e.done,n}catch(t){if(t instanceof is)gi.warn(t.message);else{const e=Li.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gi.warn(e.message)}}}async function Xf(i,t){try{const n=(await Op()).transaction(Xs,"readwrite");await n.objectStore(Xs).put(t,Fp(i)),await n.done}catch(e){if(e instanceof is)gi.warn(e.message);else{const n=Li.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});gi.warn(n.message)}}}function Fp(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=1024,aM=30;class lM{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new hM(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qf();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>aM){const o=uM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){gi.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qf(),{heartbeatsToSend:n,unsentEntries:r}=cM(this._heartbeatsCache.heartbeats),s=Sa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return gi.warn(e),""}}}function qf(){return new Date().toISOString().substring(0,10)}function cM(i,t=oM){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),jf(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),jf(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class hM{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KS()?ZS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await sM(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xf(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function jf(i){return Sa(JSON.stringify({version:2,heartbeats:i})).length}function uM(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let n=1;n<i.length;n++)i[n].date<e&&(e=i[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(i){Aa(new Ws("platform-logger",t=>new ET(t),"PRIVATE")),Aa(new Ws("heartbeat",t=>new lM(t),"PRIVATE")),Hr(Xc,Gf,i),Hr(Xc,Gf,"esm2017"),Hr("fire-js","")}fM("");var dM="firebase",pM="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr(dM,pM,"app");var $f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wh;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,S){function y(){}y.prototype=S.prototype,M.D=S.prototype,M.prototype=new y,M.prototype.constructor=M,M.C=function(v,A,N){for(var w=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)w[tt-2]=arguments[tt];return S.prototype[A].apply(v,w)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(M,S,y){y||(y=0);var v=Array(16);if(typeof S=="string")for(var A=0;16>A;++A)v[A]=S.charCodeAt(y++)|S.charCodeAt(y++)<<8|S.charCodeAt(y++)<<16|S.charCodeAt(y++)<<24;else for(A=0;16>A;++A)v[A]=S[y++]|S[y++]<<8|S[y++]<<16|S[y++]<<24;S=M.g[0],y=M.g[1],A=M.g[2];var N=M.g[3],w=S+(N^y&(A^N))+v[0]+3614090360&4294967295;S=y+(w<<7&4294967295|w>>>25),w=N+(A^S&(y^A))+v[1]+3905402710&4294967295,N=S+(w<<12&4294967295|w>>>20),w=A+(y^N&(S^y))+v[2]+606105819&4294967295,A=N+(w<<17&4294967295|w>>>15),w=y+(S^A&(N^S))+v[3]+3250441966&4294967295,y=A+(w<<22&4294967295|w>>>10),w=S+(N^y&(A^N))+v[4]+4118548399&4294967295,S=y+(w<<7&4294967295|w>>>25),w=N+(A^S&(y^A))+v[5]+1200080426&4294967295,N=S+(w<<12&4294967295|w>>>20),w=A+(y^N&(S^y))+v[6]+2821735955&4294967295,A=N+(w<<17&4294967295|w>>>15),w=y+(S^A&(N^S))+v[7]+4249261313&4294967295,y=A+(w<<22&4294967295|w>>>10),w=S+(N^y&(A^N))+v[8]+1770035416&4294967295,S=y+(w<<7&4294967295|w>>>25),w=N+(A^S&(y^A))+v[9]+2336552879&4294967295,N=S+(w<<12&4294967295|w>>>20),w=A+(y^N&(S^y))+v[10]+4294925233&4294967295,A=N+(w<<17&4294967295|w>>>15),w=y+(S^A&(N^S))+v[11]+2304563134&4294967295,y=A+(w<<22&4294967295|w>>>10),w=S+(N^y&(A^N))+v[12]+1804603682&4294967295,S=y+(w<<7&4294967295|w>>>25),w=N+(A^S&(y^A))+v[13]+4254626195&4294967295,N=S+(w<<12&4294967295|w>>>20),w=A+(y^N&(S^y))+v[14]+2792965006&4294967295,A=N+(w<<17&4294967295|w>>>15),w=y+(S^A&(N^S))+v[15]+1236535329&4294967295,y=A+(w<<22&4294967295|w>>>10),w=S+(A^N&(y^A))+v[1]+4129170786&4294967295,S=y+(w<<5&4294967295|w>>>27),w=N+(y^A&(S^y))+v[6]+3225465664&4294967295,N=S+(w<<9&4294967295|w>>>23),w=A+(S^y&(N^S))+v[11]+643717713&4294967295,A=N+(w<<14&4294967295|w>>>18),w=y+(N^S&(A^N))+v[0]+3921069994&4294967295,y=A+(w<<20&4294967295|w>>>12),w=S+(A^N&(y^A))+v[5]+3593408605&4294967295,S=y+(w<<5&4294967295|w>>>27),w=N+(y^A&(S^y))+v[10]+38016083&4294967295,N=S+(w<<9&4294967295|w>>>23),w=A+(S^y&(N^S))+v[15]+3634488961&4294967295,A=N+(w<<14&4294967295|w>>>18),w=y+(N^S&(A^N))+v[4]+3889429448&4294967295,y=A+(w<<20&4294967295|w>>>12),w=S+(A^N&(y^A))+v[9]+568446438&4294967295,S=y+(w<<5&4294967295|w>>>27),w=N+(y^A&(S^y))+v[14]+3275163606&4294967295,N=S+(w<<9&4294967295|w>>>23),w=A+(S^y&(N^S))+v[3]+4107603335&4294967295,A=N+(w<<14&4294967295|w>>>18),w=y+(N^S&(A^N))+v[8]+1163531501&4294967295,y=A+(w<<20&4294967295|w>>>12),w=S+(A^N&(y^A))+v[13]+2850285829&4294967295,S=y+(w<<5&4294967295|w>>>27),w=N+(y^A&(S^y))+v[2]+4243563512&4294967295,N=S+(w<<9&4294967295|w>>>23),w=A+(S^y&(N^S))+v[7]+1735328473&4294967295,A=N+(w<<14&4294967295|w>>>18),w=y+(N^S&(A^N))+v[12]+2368359562&4294967295,y=A+(w<<20&4294967295|w>>>12),w=S+(y^A^N)+v[5]+4294588738&4294967295,S=y+(w<<4&4294967295|w>>>28),w=N+(S^y^A)+v[8]+2272392833&4294967295,N=S+(w<<11&4294967295|w>>>21),w=A+(N^S^y)+v[11]+1839030562&4294967295,A=N+(w<<16&4294967295|w>>>16),w=y+(A^N^S)+v[14]+4259657740&4294967295,y=A+(w<<23&4294967295|w>>>9),w=S+(y^A^N)+v[1]+2763975236&4294967295,S=y+(w<<4&4294967295|w>>>28),w=N+(S^y^A)+v[4]+1272893353&4294967295,N=S+(w<<11&4294967295|w>>>21),w=A+(N^S^y)+v[7]+4139469664&4294967295,A=N+(w<<16&4294967295|w>>>16),w=y+(A^N^S)+v[10]+3200236656&4294967295,y=A+(w<<23&4294967295|w>>>9),w=S+(y^A^N)+v[13]+681279174&4294967295,S=y+(w<<4&4294967295|w>>>28),w=N+(S^y^A)+v[0]+3936430074&4294967295,N=S+(w<<11&4294967295|w>>>21),w=A+(N^S^y)+v[3]+3572445317&4294967295,A=N+(w<<16&4294967295|w>>>16),w=y+(A^N^S)+v[6]+76029189&4294967295,y=A+(w<<23&4294967295|w>>>9),w=S+(y^A^N)+v[9]+3654602809&4294967295,S=y+(w<<4&4294967295|w>>>28),w=N+(S^y^A)+v[12]+3873151461&4294967295,N=S+(w<<11&4294967295|w>>>21),w=A+(N^S^y)+v[15]+530742520&4294967295,A=N+(w<<16&4294967295|w>>>16),w=y+(A^N^S)+v[2]+3299628645&4294967295,y=A+(w<<23&4294967295|w>>>9),w=S+(A^(y|~N))+v[0]+4096336452&4294967295,S=y+(w<<6&4294967295|w>>>26),w=N+(y^(S|~A))+v[7]+1126891415&4294967295,N=S+(w<<10&4294967295|w>>>22),w=A+(S^(N|~y))+v[14]+2878612391&4294967295,A=N+(w<<15&4294967295|w>>>17),w=y+(N^(A|~S))+v[5]+4237533241&4294967295,y=A+(w<<21&4294967295|w>>>11),w=S+(A^(y|~N))+v[12]+1700485571&4294967295,S=y+(w<<6&4294967295|w>>>26),w=N+(y^(S|~A))+v[3]+2399980690&4294967295,N=S+(w<<10&4294967295|w>>>22),w=A+(S^(N|~y))+v[10]+4293915773&4294967295,A=N+(w<<15&4294967295|w>>>17),w=y+(N^(A|~S))+v[1]+2240044497&4294967295,y=A+(w<<21&4294967295|w>>>11),w=S+(A^(y|~N))+v[8]+1873313359&4294967295,S=y+(w<<6&4294967295|w>>>26),w=N+(y^(S|~A))+v[15]+4264355552&4294967295,N=S+(w<<10&4294967295|w>>>22),w=A+(S^(N|~y))+v[6]+2734768916&4294967295,A=N+(w<<15&4294967295|w>>>17),w=y+(N^(A|~S))+v[13]+1309151649&4294967295,y=A+(w<<21&4294967295|w>>>11),w=S+(A^(y|~N))+v[4]+4149444226&4294967295,S=y+(w<<6&4294967295|w>>>26),w=N+(y^(S|~A))+v[11]+3174756917&4294967295,N=S+(w<<10&4294967295|w>>>22),w=A+(S^(N|~y))+v[2]+718787259&4294967295,A=N+(w<<15&4294967295|w>>>17),w=y+(N^(A|~S))+v[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,M.g[2]=M.g[2]+A&4294967295,M.g[3]=M.g[3]+N&4294967295}n.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var y=S-this.blockSize,v=this.B,A=this.h,N=0;N<S;){if(A==0)for(;N<=y;)r(this,M,N),N+=this.blockSize;if(typeof M=="string"){for(;N<S;)if(v[A++]=M.charCodeAt(N++),A==this.blockSize){r(this,v),A=0;break}}else for(;N<S;)if(v[A++]=M[N++],A==this.blockSize){r(this,v),A=0;break}}this.h=A,this.o+=S},n.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var y=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=y&255,y/=256;for(this.u(M),M=Array(16),S=y=0;4>S;++S)for(var v=0;32>v;v+=8)M[y++]=this.g[S]>>>v&255;return M};function s(M,S){var y=a;return Object.prototype.hasOwnProperty.call(y,M)?y[M]:y[M]=S(M)}function o(M,S){this.h=S;for(var y=[],v=!0,A=M.length-1;0<=A;A--){var N=M[A]|0;v&&N==S||(y[A]=N,v=!1)}this.g=y}var a={};function c(M){return-128<=M&&128>M?s(M,function(S){return new o([S|0],0>S?-1:0)}):new o([M|0],0>M?-1:0)}function h(M){if(isNaN(M)||!isFinite(M))return f;if(0>M)return _(h(-M));for(var S=[],y=1,v=0;M>=y;v++)S[v]=M/y|0,y*=4294967296;return new o(S,0)}function u(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return _(u(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(S,8)),v=f,A=0;A<M.length;A+=8){var N=Math.min(8,M.length-A),w=parseInt(M.substring(A,A+N),S);8>N?(N=h(Math.pow(S,N)),v=v.j(N).add(h(w))):(v=v.j(y),v=v.add(h(w)))}return v}var f=c(0),p=c(1),g=c(16777216);i=o.prototype,i.m=function(){if(T(this))return-_(this).m();for(var M=0,S=1,y=0;y<this.g.length;y++){var v=this.i(y);M+=(0<=v?v:4294967296+v)*S,S*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(x(this))return"0";if(T(this))return"-"+_(this).toString(M);for(var S=h(Math.pow(M,6)),y=this,v="";;){var A=R(y,S).g;y=m(y,A.j(S));var N=((0<y.g.length?y.g[0]:y.h)>>>0).toString(M);if(y=A,x(y))return N+v;for(;6>N.length;)N="0"+N;v=N+v}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function x(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function T(M){return M.h==-1}i.l=function(M){return M=m(this,M),T(M)?-1:x(M)?0:1};function _(M){for(var S=M.g.length,y=[],v=0;v<S;v++)y[v]=~M.g[v];return new o(y,~M.h).add(p)}i.abs=function(){return T(this)?_(this):this},i.add=function(M){for(var S=Math.max(this.g.length,M.g.length),y=[],v=0,A=0;A<=S;A++){var N=v+(this.i(A)&65535)+(M.i(A)&65535),w=(N>>>16)+(this.i(A)>>>16)+(M.i(A)>>>16);v=w>>>16,N&=65535,w&=65535,y[A]=w<<16|N}return new o(y,y[y.length-1]&-2147483648?-1:0)};function m(M,S){return M.add(_(S))}i.j=function(M){if(x(this)||x(M))return f;if(T(this))return T(M)?_(this).j(_(M)):_(_(this).j(M));if(T(M))return _(this.j(_(M)));if(0>this.l(g)&&0>M.l(g))return h(this.m()*M.m());for(var S=this.g.length+M.g.length,y=[],v=0;v<2*S;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var A=0;A<M.g.length;A++){var N=this.i(v)>>>16,w=this.i(v)&65535,tt=M.i(A)>>>16,J=M.i(A)&65535;y[2*v+2*A]+=w*J,U(y,2*v+2*A),y[2*v+2*A+1]+=N*J,U(y,2*v+2*A+1),y[2*v+2*A+1]+=w*tt,U(y,2*v+2*A+1),y[2*v+2*A+2]+=N*tt,U(y,2*v+2*A+2)}for(v=0;v<S;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=S;v<2*S;v++)y[v]=0;return new o(y,0)};function U(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function I(M,S){this.g=M,this.h=S}function R(M,S){if(x(S))throw Error("division by zero");if(x(M))return new I(f,f);if(T(M))return S=R(_(M),S),new I(_(S.g),_(S.h));if(T(S))return S=R(M,_(S)),new I(_(S.g),S.h);if(30<M.g.length){if(T(M)||T(S))throw Error("slowDivide_ only works with positive integers.");for(var y=p,v=S;0>=v.l(M);)y=V(y),v=V(v);var A=O(y,1),N=O(v,1);for(v=O(v,2),y=O(y,2);!x(v);){var w=N.add(v);0>=w.l(M)&&(A=A.add(y),N=w),v=O(v,1),y=O(y,1)}return S=m(M,A.j(S)),new I(A,S)}for(A=f;0<=M.l(S);){for(y=Math.max(1,Math.floor(M.m()/S.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),N=h(y),w=N.j(S);T(w)||0<w.l(M);)y-=v,N=h(y),w=N.j(S);x(N)&&(N=p),A=A.add(N),M=m(M,w)}return new I(A,M)}i.A=function(M){return R(this,M).h},i.and=function(M){for(var S=Math.max(this.g.length,M.g.length),y=[],v=0;v<S;v++)y[v]=this.i(v)&M.i(v);return new o(y,this.h&M.h)},i.or=function(M){for(var S=Math.max(this.g.length,M.g.length),y=[],v=0;v<S;v++)y[v]=this.i(v)|M.i(v);return new o(y,this.h|M.h)},i.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),y=[],v=0;v<S;v++)y[v]=this.i(v)^M.i(v);return new o(y,this.h^M.h)};function V(M){for(var S=M.g.length+1,y=[],v=0;v<S;v++)y[v]=M.i(v)<<1|M.i(v-1)>>>31;return new o(y,M.h)}function O(M,S){var y=S>>5;S%=32;for(var v=M.g.length-y,A=[],N=0;N<v;N++)A[N]=0<S?M.i(N+y)>>>S|M.i(N+y+1)<<32-S:M.i(N+y);return new o(A,M.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,wh=o}).apply(typeof $f<"u"?$f:typeof self<"u"?self:typeof window<"u"?window:{});var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vp,ws,Bp,fa,$c,kp,zp,Hp;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,E){return l==Array.prototype||l==Object.prototype||(l[d]=E.value),l};function e(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zo=="object"&&Zo];for(var d=0;d<l.length;++d){var E=l[d];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=e(this);function r(l,d){if(d)t:{var E=n;l=l.split(".");for(var P=0;P<l.length-1;P++){var G=l[P];if(!(G in E))break t;E=E[G]}l=l[l.length-1],P=E[l],d=d(P),d!=P&&d!=null&&t(E,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var E=0,P=!1,G={next:function(){if(!P&&E<l.length){var j=E++;return{value:d(j,l[j]),done:!1}}return P=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}r("Array.prototype.values",function(l){return l||function(){return s(this,function(d,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function h(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function u(l,d,E){return l.call.apply(l.bind,arguments)}function f(l,d,E){if(!l)throw Error();if(2<arguments.length){var P=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,P),l.apply(d,G)}}return function(){return l.apply(d,arguments)}}function p(l,d,E){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:f,p.apply(null,arguments)}function g(l,d){var E=Array.prototype.slice.call(arguments,1);return function(){var P=E.slice();return P.push.apply(P,arguments),l.apply(this,P)}}function x(l,d){function E(){}E.prototype=d.prototype,l.aa=d.prototype,l.prototype=new E,l.prototype.constructor=l,l.Qb=function(P,G,j){for(var mt=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)mt[Se-2]=arguments[Se];return d.prototype[G].apply(P,mt)}}function T(l){const d=l.length;if(0<d){const E=Array(d);for(let P=0;P<d;P++)E[P]=l[P];return E}return[]}function _(l,d){for(let E=1;E<arguments.length;E++){const P=arguments[E];if(c(P)){const G=l.length||0,j=P.length||0;l.length=G+j;for(let mt=0;mt<j;mt++)l[G+mt]=P[mt]}else l.push(P)}}class m{constructor(d,E){this.i=d,this.j=E,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function U(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function R(l){return R[" "](l),l}R[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function O(l,d,E){for(const P in l)d.call(E,l[P],P,l)}function M(l,d){for(const E in l)d.call(void 0,l[E],E,l)}function S(l){const d={};for(const E in l)d[E]=l[E];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(l,d){let E,P;for(let G=1;G<arguments.length;G++){P=arguments[G];for(E in P)l[E]=P[E];for(let j=0;j<y.length;j++)E=y[j],Object.prototype.hasOwnProperty.call(P,E)&&(l[E]=P[E])}}function A(l){var d=1;l=l.split(":");const E=[];for(;0<d&&l.length;)E.push(l.shift()),d--;return l.length&&E.push(l.join(":")),E}function N(l){a.setTimeout(()=>{throw l},0)}function w(){var l=gt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class tt{constructor(){this.h=this.g=null}add(d,E){const P=J.get();P.set(d,E),this.h?this.h.next=P:this.g=P,this.h=P}}var J=new m(()=>new Q,l=>l.reset());class Q{constructor(){this.next=this.g=this.h=null}set(d,E){this.h=d,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let et,$=!1,gt=new tt,wt=()=>{const l=a.Promise.resolve(void 0);et=()=>{l.then(Pt)}};var Pt=()=>{for(var l;l=w();){try{l.h.call(l.g)}catch(E){N(E)}var d=J;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}$=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function kt(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var Z=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const E=()=>{};a.addEventListener("test",E,d),a.removeEventListener("test",E,d)}catch{}return l}();function ft(l,d){if(kt.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var E=this.type=l.type,P=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){t:{try{R(d.nodeName);var G=!0;break t}catch{}G=!1}G||(d=null)}}else E=="mouseover"?d=l.fromElement:E=="mouseout"&&(d=l.toElement);this.relatedTarget=d,P?(this.clientX=P.clientX!==void 0?P.clientX:P.pageX,this.clientY=P.clientY!==void 0?P.clientY:P.pageY,this.screenX=P.screenX||0,this.screenY=P.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:It[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ft.aa.h.call(this)}}x(ft,kt);var It={2:"touch",3:"pen",4:"mouse"};ft.prototype.h=function(){ft.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),Ft=0;function Yt(l,d,E,P,G){this.listener=l,this.proxy=null,this.src=d,this.type=E,this.capture=!!P,this.ha=G,this.key=++Ft,this.da=this.fa=!1}function Nt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ve(l){this.src=l,this.g={},this.h=0}ve.prototype.add=function(l,d,E,P,G){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var mt=Wt(l,d,P,G);return-1<mt?(d=l[mt],E||(d.fa=!1)):(d=new Yt(d,this.src,j,!!P,G),d.fa=E,l.push(d)),d};function re(l,d){var E=d.type;if(E in l.g){var P=l.g[E],G=Array.prototype.indexOf.call(P,d,void 0),j;(j=0<=G)&&Array.prototype.splice.call(P,G,1),j&&(Nt(d),l.g[E].length==0&&(delete l.g[E],l.h--))}}function Wt(l,d,E,P){for(var G=0;G<l.length;++G){var j=l[G];if(!j.da&&j.listener==d&&j.capture==!!E&&j.ha==P)return G}return-1}var L="closure_lm_"+(1e6*Math.random()|0),pt={};function ot(l,d,E,P,G){if(Array.isArray(d)){for(var j=0;j<d.length;j++)ot(l,d[j],E,P,G);return null}return E=rt(E),l&&l[yt]?l.K(d,E,h(P)?!!P.capture:!1,G):ut(l,d,E,!1,P,G)}function ut(l,d,E,P,G,j){if(!d)throw Error("Invalid event type");var mt=h(G)?!!G.capture:!!G,Se=H(l);if(Se||(l[L]=Se=new ve(l)),E=Se.add(d,E,P,mt,j),E.proxy)return E;if(P=nt(),E.proxy=P,P.src=l,P.listener=E,l.addEventListener)Z||(G=mt),G===void 0&&(G=!1),l.addEventListener(d.toString(),P,G);else if(l.attachEvent)l.attachEvent(D(d.toString()),P);else if(l.addListener&&l.removeListener)l.addListener(P);else throw Error("addEventListener and attachEvent are unavailable.");return E}function nt(){function l(E){return d.call(l.src,l.listener,E)}const d=b;return l}function Dt(l,d,E,P,G){if(Array.isArray(d))for(var j=0;j<d.length;j++)Dt(l,d[j],E,P,G);else P=h(P)?!!P.capture:!!P,E=rt(E),l&&l[yt]?(l=l.i,d=String(d).toString(),d in l.g&&(j=l.g[d],E=Wt(j,E,P,G),-1<E&&(Nt(j[E]),Array.prototype.splice.call(j,E,1),j.length==0&&(delete l.g[d],l.h--)))):l&&(l=H(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Wt(d,E,P,G)),(E=-1<l?d[l]:null)&&at(E))}function at(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[yt])re(d.i,l);else{var E=l.type,P=l.proxy;d.removeEventListener?d.removeEventListener(E,P,l.capture):d.detachEvent?d.detachEvent(D(E),P):d.addListener&&d.removeListener&&d.removeListener(P),(E=H(d))?(re(E,l),E.h==0&&(E.src=null,d[L]=null)):Nt(l)}}}function D(l){return l in pt?pt[l]:pt[l]="on"+l}function b(l,d){if(l.da)l=!0;else{d=new ft(d,this);var E=l.listener,P=l.ha||l.src;l.fa&&at(l),l=E.call(P,d)}return l}function H(l){return l=l[L],l instanceof ve?l:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function rt(l){return typeof l=="function"?l:(l[K]||(l[K]=function(d){return l.handleEvent(d)}),l[K])}function W(){Ht.call(this),this.i=new ve(this),this.M=this,this.F=null}x(W,Ht),W.prototype[yt]=!0,W.prototype.removeEventListener=function(l,d,E,P){Dt(this,l,d,E,P)};function xt(l,d){var E,P=l.F;if(P)for(E=[];P;P=P.F)E.push(P);if(l=l.M,P=d.type||d,typeof d=="string")d=new kt(d,l);else if(d instanceof kt)d.target=d.target||l;else{var G=d;d=new kt(P,l),v(d,G)}if(G=!0,E)for(var j=E.length-1;0<=j;j--){var mt=d.g=E[j];G=_t(mt,P,!0,d)&&G}if(mt=d.g=l,G=_t(mt,P,!0,d)&&G,G=_t(mt,P,!1,d)&&G,E)for(j=0;j<E.length;j++)mt=d.g=E[j],G=_t(mt,P,!1,d)&&G}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var E=l.g[d],P=0;P<E.length;P++)Nt(E[P]);delete l.g[d],l.h--}}this.F=null},W.prototype.K=function(l,d,E,P){return this.i.add(String(l),d,!1,E,P)},W.prototype.L=function(l,d,E,P){return this.i.add(String(l),d,!0,E,P)};function _t(l,d,E,P){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var G=!0,j=0;j<d.length;++j){var mt=d[j];if(mt&&!mt.da&&mt.capture==E){var Se=mt.listener,Ye=mt.ha||mt.src;mt.fa&&re(l.i,mt),G=Se.call(Ye,P)!==!1&&G}}return G&&!P.defaultPrevented}function Ut(l,d,E){if(typeof l=="function")E&&(l=p(l,E));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function zt(l){l.g=Ut(()=>{l.g=null,l.i&&(l.i=!1,zt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class lt extends Ht{constructor(d,E){super(),this.m=d,this.l=E,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:zt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(l){Ht.call(this),this.h=l,this.g={}}x(bt,Ht);var Vt=[];function Xt(l){O(l.g,function(d,E){this.g.hasOwnProperty(E)&&at(d)},l),l.g={}}bt.prototype.N=function(){bt.aa.N.call(this),Xt(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rt=a.JSON.stringify,se=a.JSON.parse,Kt=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function ge(){}ge.prototype.h=null;function B(l){return l.h||(l.h=l.i())}function Tt(){}var Y={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function it(){kt.call(this,"d")}x(it,kt);function Mt(){kt.call(this,"c")}x(Mt,kt);var vt={},$t=null;function xe(){return $t=$t||new W}vt.La="serverreachability";function Fe(l){kt.call(this,vt.La,l)}x(Fe,kt);function ae(l){const d=xe();xt(d,new Fe(d))}vt.STAT_EVENT="statevent";function fn(l,d){kt.call(this,vt.STAT_EVENT,l),this.stat=d}x(fn,kt);function Me(l){const d=xe();xt(d,new fn(d,l))}vt.Ma="timingevent";function os(l,d){kt.call(this,vt.Ma,l),this.size=d}x(os,kt);function _i(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function as(l,d,E,P,G,j){l.info(function(){if(l.g)if(j)for(var mt="",Se=j.split("&"),Ye=0;Ye<Se.length;Ye++){var pe=Se[Ye].split("=");if(1<pe.length){var en=pe[0];pe=pe[1];var nn=en.split("_");mt=2<=nn.length&&nn[1]=="type"?mt+(en+"="+pe+"&"):mt+(en+"=redacted&")}}else mt=null;else mt=j;return"XMLHTTP REQ ("+P+") [attempt "+G+"]: "+d+`
`+E+`
`+mt})}function lo(l,d,E,P,G,j,mt){l.info(function(){return"XMLHTTP RESP ("+P+") [ attempt "+G+"]: "+d+`
`+E+`
`+j+" "+mt})}function Qn(l,d,E,P){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+co(l,E)+(P?" "+P:"")})}function mr(l,d){l.info(function(){return"TIMEOUT: "+d})}En.prototype.info=function(){};function co(l,d){if(!l.g)return d;if(!d)return null;try{var E=JSON.parse(d);if(E){for(l=0;l<E.length;l++)if(Array.isArray(E[l])){var P=E[l];if(!(2>P.length)){var G=P[1];if(Array.isArray(G)&&!(1>G.length)){var j=G[0];if(j!="noop"&&j!="stop"&&j!="close")for(var mt=1;mt<G.length;mt++)G[mt]=""}}}}return Rt(E)}catch{return d}}var ti={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ls={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function _r(){}x(_r,ge),_r.prototype.g=function(){return new XMLHttpRequest},_r.prototype.i=function(){return{}},gr=new _r;function Gn(l,d,E,P){this.j=l,this.i=d,this.l=E,this.R=P||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ho}function ho(){this.i=null,this.g="",this.h=!1}var uo={},cs={};function hs(l,d,E){l.L=1,l.v=Be(cn(d)),l.m=E,l.P=!0,C(l,null)}function C(l,d){l.F=Date.now(),X(l),l.A=cn(l.v);var E=l.A,P=l.R;Array.isArray(P)||(P=[String(P)]),Zh(E.i,"t",P),l.C=0,E=l.j.J,l.h=new ho,l.g=mu(l.j,E?d:null,!l.m),0<l.O&&(l.M=new lt(p(l.Y,l,l.g),l.O)),d=l.U,E=l.g,P=l.ca;var G="readystatechange";Array.isArray(G)||(G&&(Vt[0]=G.toString()),G=Vt);for(var j=0;j<G.length;j++){var mt=ot(E,G[j],P||d.handleEvent,!1,d.h||d);if(!mt)break;d.g[mt.key]=mt}d=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),ae(),as(l.i,l.u,l.A,l.l,l.R,l.m)}Gn.prototype.ca=function(l){l=l.target;const d=this.M;d&&ni(l)==3?d.j():this.Y(l)},Gn.prototype.Y=function(l){try{if(l==this.g)t:{const nn=ni(this.g);var d=this.g.Ba();const Er=this.g.Z();if(!(3>nn)&&(nn!=3||this.g&&(this.h.h||this.g.oa()||ru(this.g)))){this.J||nn!=4||d==7||(d==8||0>=Er?ae(3):ae(2)),ct(this);var E=this.g.Z();this.X=E;e:if(k(this)){var P=ru(this.g);l="";var G=P.length,j=ni(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),Et(this);var mt="";break e}this.h.i=new a.TextDecoder}for(d=0;d<G;d++)this.h.h=!0,l+=this.h.i.decode(P[d],{stream:!(j&&d==G-1)});P.length=0,this.h.g+=l,this.C=0,mt=this.h.g}else mt=this.g.oa();if(this.o=E==200,lo(this.i,this.u,this.A,this.l,this.R,nn,E),this.o){if(this.T&&!this.K){e:{if(this.g){var Se,Ye=this.g;if((Se=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Se)){var pe=Se;break e}}pe=null}if(E=pe)Qn(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ct(this,E);else{this.o=!1,this.s=3,Me(12),At(this),Et(this);break t}}if(this.P){E=!0;let In;for(;!this.J&&this.C<mt.length;)if(In=q(this,mt),In==cs){nn==4&&(this.s=4,Me(14),E=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(In==uo){this.s=4,Me(15),Qn(this.i,this.l,mt,"[Invalid Chunk]"),E=!1;break}else Qn(this.i,this.l,In,null),Ct(this,In);if(k(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nn!=4||mt.length!=0||this.h.h||(this.s=1,Me(16),E=!1),this.o=this.o&&E,!E)Qn(this.i,this.l,mt,"[Invalid Chunked Response]"),At(this),Et(this);else if(0<mt.length&&!this.W){this.W=!0;var en=this.j;en.g==this&&en.ba&&!en.M&&(en.j.info("Great, no buffering proxy detected. Bytes received: "+mt.length),nl(en),en.M=!0,Me(11))}}else Qn(this.i,this.l,mt,null),Ct(this,mt);nn==4&&At(this),this.o&&!this.J&&(nn==4?uu(this.j,this):(this.o=!1,X(this)))}else sg(this.g),E==400&&0<mt.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),At(this),Et(this)}}}catch{}finally{}};function k(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function q(l,d){var E=l.C,P=d.indexOf(`
`,E);return P==-1?cs:(E=Number(d.substring(E,P)),isNaN(E)?uo:(P+=1,P+E>d.length?cs:(d=d.slice(P,P+E),l.C=P+E,d)))}Gn.prototype.cancel=function(){this.J=!0,At(this)};function X(l){l.S=Date.now()+l.I,z(l,l.I)}function z(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_i(p(l.ba,l),d)}function ct(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Gn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mr(this.i,this.A),this.L!=2&&(ae(),Me(17)),At(this),this.s=2,Et(this)):z(this,this.S-l)};function Et(l){l.j.G==0||l.J||uu(l.j,l)}function At(l){ct(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Xt(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Ct(l,d){try{var E=l.j;if(E.G!=0&&(E.g==l||ce(E.h,l))){if(!l.K&&ce(E.h,l)&&E.G==3){try{var P=E.Da.g.parse(d)}catch{P=null}if(Array.isArray(P)&&P.length==3){var G=P;if(G[0]==0){t:if(!E.u){if(E.g)if(E.g.F+3e3<l.F)vo(E),go(E);else break t;el(E),Me(18)}}else E.za=G[1],0<E.za-E.T&&37500>G[2]&&E.F&&E.v==0&&!E.C&&(E.C=_i(p(E.Za,E),6e3));if(1>=oe(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else zi(E,11)}else if((l.K||E.g==l)&&vo(E),!U(d))for(G=E.Da.g.parse(d),d=0;d<G.length;d++){let pe=G[d];if(E.T=pe[0],pe=pe[1],E.G==2)if(pe[0]=="c"){E.K=pe[1],E.ia=pe[2];const en=pe[3];en!=null&&(E.la=en,E.j.info("VER="+E.la));const nn=pe[4];nn!=null&&(E.Aa=nn,E.j.info("SVER="+E.Aa));const Er=pe[5];Er!=null&&typeof Er=="number"&&0<Er&&(P=1.5*Er,E.L=P,E.j.info("backChannelRequestTimeoutMs_="+P)),P=E;const In=l.g;if(In){const Eo=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Eo){var j=P.h;j.g||Eo.indexOf("spdy")==-1&&Eo.indexOf("quic")==-1&&Eo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(we(j,j.h),j.h=null))}if(P.D){const il=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;il&&(P.ya=il,Zt(P.I,P.D,il))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-l.F,E.j.info("Handshake RTT: "+E.R+"ms")),P=E;var mt=l;if(P.qa=pu(P,P.J?P.ia:null,P.W),mt.K){Ae(P.h,mt);var Se=mt,Ye=P.L;Ye&&(Se.I=Ye),Se.B&&(ct(Se),X(Se)),P.g=mt}else cu(P);0<E.i.length&&_o(E)}else pe[0]!="stop"&&pe[0]!="close"||zi(E,7);else E.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?zi(E,7):tl(E):pe[0]!="noop"&&E.l&&E.l.ta(pe),E.v=0)}}ae(4)}catch{}}var jt=class{constructor(l,d){this.g=l,this.map=d}};function Gt(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ot(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function oe(l){return l.h?1:l.g?l.g.size:0}function ce(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function we(l,d){l.g?l.g.add(d):l.h=d}function Ae(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Gt.prototype.cancel=function(){if(this.i=le(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function le(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const E of l.g.values())d=d.concat(E.D);return d}return T(l.i)}function Bt(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],E=l.length,P=0;P<E;P++)d.push(l[P]);return d}d=[],E=0;for(P in l)d[E++]=l[P];return d}function Ve(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var E=0;E<l;E++)d.push(E);return d}d=[],E=0;for(const P in l)d[E++]=P;return d}}}function fe(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var E=Ve(l),P=Bt(l),G=P.length,j=0;j<G;j++)d.call(void 0,P[j],E&&E[j],l)}var dn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vi(l,d){if(l){l=l.split("&");for(var E=0;E<l.length;E++){var P=l[E].indexOf("="),G=null;if(0<=P){var j=l[E].substring(0,P);G=l[E].substring(P+1)}else j=l[E];d(j,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function Ne(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ne){this.h=l.h,_e(this,l.j),this.o=l.o,this.g=l.g,$e(this,l.s),this.l=l.l;var d=l.i,E=new us;E.i=d.i,d.g&&(E.g=new Map(d.g),E.h=d.h),hn(this,E),this.m=l.m}else l&&(d=String(l).match(dn))?(this.h=!1,_e(this,d[1]||"",!0),this.o=ei(d[2]||""),this.g=ei(d[3]||"",!0),$e(this,d[4]),this.l=ei(d[5]||"",!0),hn(this,d[6]||"",!0),this.m=ei(d[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Ne.prototype.toString=function(){var l=[],d=this.j;d&&l.push(xn(d,$h,!0),":");var E=this.g;return(E||d=="file")&&(l.push("//"),(d=this.o)&&l.push(xn(d,$h,!0),"@"),l.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&l.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&l.push("/"),l.push(xn(E,E.charAt(0)=="/"?Ym:$m,!0))),(E=this.i.toString())&&l.push("?",E),(E=this.m)&&l.push("#",xn(E,Zm)),l.join("")};function cn(l){return new Ne(l)}function _e(l,d,E){l.j=E?ei(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function $e(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function hn(l,d,E){d instanceof us?(l.i=d,Jm(l.i,l.h)):(E||(d=xn(d,Km)),l.i=new us(d,l.h))}function Zt(l,d,E){l.i.set(d,E)}function Be(l){return Zt(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ei(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xn(l,d,E){return typeof l=="string"?(l=encodeURI(l).replace(d,jm),E&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jm(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var $h=/[#\/\?@]/g,$m=/[#\?:]/g,Ym=/[#\?]/g,Km=/[#\?@]/g,Zm=/#/g;function us(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function yi(l){l.g||(l.g=new Map,l.h=0,l.i&&vi(l.i,function(d,E){l.add(decodeURIComponent(d.replace(/\+/g," ")),E)}))}i=us.prototype,i.add=function(l,d){yi(this),this.i=null,l=vr(this,l);var E=this.g.get(l);return E||this.g.set(l,E=[]),E.push(d),this.h+=1,this};function Yh(l,d){yi(l),d=vr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Kh(l,d){return yi(l),d=vr(l,d),l.g.has(d)}i.forEach=function(l,d){yi(this),this.g.forEach(function(E,P){E.forEach(function(G){l.call(d,G,P,this)},this)},this)},i.na=function(){yi(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),E=[];for(let P=0;P<d.length;P++){const G=l[P];for(let j=0;j<G.length;j++)E.push(d[P])}return E},i.V=function(l){yi(this);let d=[];if(typeof l=="string")Kh(this,l)&&(d=d.concat(this.g.get(vr(this,l))));else{l=Array.from(this.g.values());for(let E=0;E<l.length;E++)d=d.concat(l[E])}return d},i.set=function(l,d){return yi(this),this.i=null,l=vr(this,l),Kh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},i.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Zh(l,d,E){Yh(l,d),0<E.length&&(l.i=null,l.g.set(vr(l,d),T(E)),l.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var E=0;E<d.length;E++){var P=d[E];const j=encodeURIComponent(String(P)),mt=this.V(P);for(P=0;P<mt.length;P++){var G=j;mt[P]!==""&&(G+="="+encodeURIComponent(String(mt[P]))),l.push(G)}}return this.i=l.join("&")};function vr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Jm(l,d){d&&!l.j&&(yi(l),l.i=null,l.g.forEach(function(E,P){var G=P.toLowerCase();P!=G&&(Yh(this,P),Zh(this,G,E))},l)),l.j=d}function Qm(l,d){const E=new En;if(a.Image){const P=new Image;P.onload=g(Ei,E,"TestLoadImage: loaded",!0,d,P),P.onerror=g(Ei,E,"TestLoadImage: error",!1,d,P),P.onabort=g(Ei,E,"TestLoadImage: abort",!1,d,P),P.ontimeout=g(Ei,E,"TestLoadImage: timeout",!1,d,P),a.setTimeout(function(){P.ontimeout&&P.ontimeout()},1e4),P.src=l}else d(!1)}function tg(l,d){const E=new En,P=new AbortController,G=setTimeout(()=>{P.abort(),Ei(E,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:P.signal}).then(j=>{clearTimeout(G),j.ok?Ei(E,"TestPingServer: ok",!0,d):Ei(E,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(G),Ei(E,"TestPingServer: error",!1,d)})}function Ei(l,d,E,P,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),P(E)}catch{}}function eg(){this.g=new Kt}function ng(l,d,E){const P=E||"";try{fe(l,function(G,j){let mt=G;h(G)&&(mt=Rt(G)),d.push(P+j+"="+encodeURIComponent(mt))})}catch(G){throw d.push(P+"type="+encodeURIComponent("_badmap")),G}}function fo(l){this.l=l.Ub||null,this.j=l.eb||!1}x(fo,ge),fo.prototype.g=function(){return new po(this.l,this.j)},fo.prototype.i=function(l){return function(){return l}}({});function po(l,d){W.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(po,W),i=po.prototype,i.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,ds(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jh(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jh(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?fs(this):ds(this),this.readyState==3&&Jh(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,fs(this))},i.Qa=function(l){this.g&&(this.response=l,fs(this))},i.ga=function(){this.g&&fs(this)};function fs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ds(l)}i.setRequestHeader=function(l,d){this.u.append(l,d)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var E=d.next();!E.done;)E=E.value,l.push(E[0]+": "+E[1]),E=d.next();return l.join(`\r
`)};function ds(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Qh(l){let d="";return O(l,function(E,P){d+=P,d+=":",d+=E,d+=`\r
`}),d}function Qa(l,d,E){t:{for(P in E){var P=!1;break t}P=!0}P||(E=Qh(E),typeof l=="string"?E!=null&&encodeURIComponent(String(E)):Zt(l,d,E))}function Pe(l){W.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Pe,W);var ig=/^https?$/i,rg=["POST","PUT"];i=Pe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,d,E,P){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?B(this.o):B(gr),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(j){tu(this,j);return}if(l=E||"",E=new Map(this.headers),P)if(Object.getPrototypeOf(P)===Object.prototype)for(var G in P)E.set(G,P[G]);else if(typeof P.keys=="function"&&typeof P.get=="function")for(const j of P.keys())E.set(j,P.get(j));else throw Error("Unknown input type for opt_headers: "+String(P));P=Array.from(E.keys()).find(j=>j.toLowerCase()=="content-type"),G=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(rg,d,void 0))||P||G||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,mt]of E)this.g.setRequestHeader(j,mt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{iu(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){tu(this,j)}};function tu(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,eu(l),mo(l)}function eu(l){l.A||(l.A=!0,xt(l,"complete"),xt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,xt(this,"complete"),xt(this,"abort"),mo(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mo(this,!0)),Pe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?nu(this):this.bb())},i.bb=function(){nu(this)};function nu(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ni(l)!=4||l.Z()!=2)){if(l.u&&ni(l)==4)Ut(l.Ea,0,l);else if(xt(l,"readystatechange"),ni(l)==4){l.h=!1;try{const mt=l.Z();t:switch(mt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var E;if(!(E=d)){var P;if(P=mt===0){var G=String(l.D).match(dn)[1]||null;!G&&a.self&&a.self.location&&(G=a.self.location.protocol.slice(0,-1)),P=!ig.test(G?G.toLowerCase():"")}E=P}if(E)xt(l,"complete"),xt(l,"success");else{l.m=6;try{var j=2<ni(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",eu(l)}}finally{mo(l)}}}}function mo(l,d){if(l.g){iu(l);const E=l.g,P=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||xt(l,"ready");try{E.onreadystatechange=P}catch{}}}function iu(l){l.I&&(a.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function ni(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<ni(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),se(d)}};function ru(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function sg(l){const d={};l=(l.g&&2<=ni(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let P=0;P<l.length;P++){if(U(l[P]))continue;var E=A(l[P]);const G=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const j=d[G]||[];d[G]=j,j.push(E)}M(d,function(P){return P.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(l,d,E){return E&&E.internalChannelParams&&E.internalChannelParams[l]||d}function su(l){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,l),this.cb=ps("retryDelaySeedMs",1e4,l),this.Wa=ps("forwardChannelMaxRetries",2,l),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Gt(l&&l.concurrentRequestLimit),this.Da=new eg,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=su.prototype,i.la=8,i.G=1,i.connect=function(l,d,E,P){Me(0),this.W=l,this.H=d||{},E&&P!==void 0&&(this.H.OSID=E,this.H.OAID=P),this.F=this.X,this.I=pu(this,null,this.W),_o(this)};function tl(l){if(ou(l),l.G==3){var d=l.U++,E=cn(l.I);if(Zt(E,"SID",l.K),Zt(E,"RID",d),Zt(E,"TYPE","terminate"),ms(l,E),d=new Gn(l,l.j,d),d.L=2,d.v=Be(cn(E)),E=!1,a.navigator&&a.navigator.sendBeacon)try{E=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!E&&a.Image&&(new Image().src=d.v,E=!0),E||(d.g=mu(d.j,null),d.g.ea(d.v)),d.F=Date.now(),X(d)}du(l)}function go(l){l.g&&(nl(l),l.g.cancel(),l.g=null)}function ou(l){go(l),l.u&&(a.clearTimeout(l.u),l.u=null),vo(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function _o(l){if(!Ot(l.h)&&!l.s){l.s=!0;var d=l.Ga;et||wt(),$||(et(),$=!0),gt.add(d,l),l.B=0}}function og(l,d){return oe(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_i(p(l.Ga,l,d),fu(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const G=new Gn(this,this.j,l);let j=this.o;if(this.S&&(j?(j=S(j),v(j,this.S)):j=this.S),this.m!==null||this.O||(G.H=j,j=null),this.P)t:{for(var d=0,E=0;E<this.i.length;E++){e:{var P=this.i[E];if("__data__"in P.map&&(P=P.map.__data__,typeof P=="string")){P=P.length;break e}P=void 0}if(P===void 0)break;if(d+=P,4096<d){d=E;break t}if(d===4096||E===this.i.length-1){d=E+1;break t}}d=1e3}else d=1e3;d=lu(this,G,d),E=cn(this.I),Zt(E,"RID",l),Zt(E,"CVER",22),this.D&&Zt(E,"X-HTTP-Session-Id",this.D),ms(this,E),j&&(this.O?d="headers="+encodeURIComponent(String(Qh(j)))+"&"+d:this.m&&Qa(E,this.m,j)),we(this.h,G),this.Ua&&Zt(E,"TYPE","init"),this.P?(Zt(E,"$req",d),Zt(E,"SID","null"),G.T=!0,hs(G,E,null)):hs(G,E,d),this.G=2}}else this.G==3&&(l?au(this,l):this.i.length==0||Ot(this.h)||au(this))};function au(l,d){var E;d?E=d.l:E=l.U++;const P=cn(l.I);Zt(P,"SID",l.K),Zt(P,"RID",E),Zt(P,"AID",l.T),ms(l,P),l.m&&l.o&&Qa(P,l.m,l.o),E=new Gn(l,l.j,E,l.B+1),l.m===null&&(E.H=l.o),d&&(l.i=d.D.concat(l.i)),d=lu(l,E,1e3),E.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),we(l.h,E),hs(E,P,d)}function ms(l,d){l.H&&O(l.H,function(E,P){Zt(d,P,E)}),l.l&&fe({},function(E,P){Zt(d,P,E)})}function lu(l,d,E){E=Math.min(l.i.length,E);var P=l.l?p(l.l.Na,l.l,l):null;t:{var G=l.i;let j=-1;for(;;){const mt=["count="+E];j==-1?0<E?(j=G[0].g,mt.push("ofs="+j)):j=0:mt.push("ofs="+j);let Se=!0;for(let Ye=0;Ye<E;Ye++){let pe=G[Ye].g;const en=G[Ye].map;if(pe-=j,0>pe)j=Math.max(0,G[Ye].g-100),Se=!1;else try{ng(en,mt,"req"+pe+"_")}catch{P&&P(en)}}if(Se){P=mt.join("&");break t}}}return l=l.i.splice(0,E),d.D=l,P}function cu(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;et||wt(),$||(et(),$=!0),gt.add(d,l),l.v=0}}function el(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_i(p(l.Fa,l),fu(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_i(p(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),go(this),hu(this))};function nl(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function hu(l){l.g=new Gn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=cn(l.qa);Zt(d,"RID","rpc"),Zt(d,"SID",l.K),Zt(d,"AID",l.T),Zt(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Zt(d,"TO",l.ja),Zt(d,"TYPE","xmlhttp"),ms(l,d),l.m&&l.o&&Qa(d,l.m,l.o),l.L&&(l.g.I=l.L);var E=l.g;l=l.ia,E.L=1,E.v=Be(cn(d)),E.m=null,E.P=!0,C(E,l)}i.Za=function(){this.C!=null&&(this.C=null,go(this),el(this),Me(19))};function vo(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function uu(l,d){var E=null;if(l.g==d){vo(l),nl(l),l.g=null;var P=2}else if(ce(l.h,d))E=d.D,Ae(l.h,d),P=1;else return;if(l.G!=0){if(d.o)if(P==1){E=d.m?d.m.length:0,d=Date.now()-d.F;var G=l.B;P=xe(),xt(P,new os(P,E)),_o(l)}else cu(l);else if(G=d.s,G==3||G==0&&0<d.X||!(P==1&&og(l,d)||P==2&&el(l)))switch(E&&0<E.length&&(d=l.h,d.i=d.i.concat(E)),G){case 1:zi(l,5);break;case 4:zi(l,10);break;case 3:zi(l,6);break;default:zi(l,2)}}}function fu(l,d){let E=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(E*=2),E*d}function zi(l,d){if(l.j.info("Error code "+d),d==2){var E=p(l.fb,l),P=l.Xa;const G=!P;P=new Ne(P||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||_e(P,"https"),Be(P),G?Qm(P.toString(),E):tg(P.toString(),E)}else Me(2);l.G=0,l.l&&l.l.sa(d),du(l),ou(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function du(l){if(l.G=0,l.ka=[],l.l){const d=le(l.h);(d.length!=0||l.i.length!=0)&&(_(l.ka,d),_(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function pu(l,d,E){var P=E instanceof Ne?cn(E):new Ne(E);if(P.g!="")d&&(P.g=d+"."+P.g),$e(P,P.s);else{var G=a.location;P=G.protocol,d=d?d+"."+G.hostname:G.hostname,G=+G.port;var j=new Ne(null);P&&_e(j,P),d&&(j.g=d),G&&$e(j,G),E&&(j.l=E),P=j}return E=l.D,d=l.ya,E&&d&&Zt(P,E,d),Zt(P,"VER",l.la),ms(l,P),P}function mu(l,d,E){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Pe(new fo({eb:E})):new Pe(l.pa),d.Ha(l.J),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function gu(){}i=gu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function yo(){}yo.prototype.g=function(l,d){return new Sn(l,d)};function Sn(l,d){W.call(this),this.g=new su(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!U(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!U(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new yr(this)}x(Sn,W),Sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){tl(this.g)},Sn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var E={};E.__data__=l,l=E}else this.u&&(E={},E.__data__=Rt(l),l=E);d.i.push(new jt(d.Ya++,l)),d.G==3&&_o(d)},Sn.prototype.N=function(){this.g.l=null,delete this.j,tl(this.g),delete this.g,Sn.aa.N.call(this)};function _u(l){it.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){t:{for(const E in d){l=E;break t}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}x(_u,it);function vu(){Mt.call(this),this.status=1}x(vu,Mt);function yr(l){this.g=l}x(yr,gu),yr.prototype.ua=function(){xt(this.g,"a")},yr.prototype.ta=function(l){xt(this.g,new _u(l))},yr.prototype.sa=function(l){xt(this.g,new vu)},yr.prototype.ra=function(){xt(this.g,"b")},yo.prototype.createWebChannel=yo.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,Hp=function(){return new yo},zp=function(){return xe()},kp=vt,$c={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ti.NO_ERROR=0,ti.TIMEOUT=8,ti.HTTP_ERROR=6,fa=ti,ls.COMPLETE="complete",Bp=ls,Tt.EventType=Y,Y.OPEN="a",Y.CLOSE="b",Y.ERROR="c",Y.MESSAGE="d",W.prototype.listen=W.prototype.K,ws=Tt,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,Vp=Pe}).apply(typeof Zo<"u"?Zo:typeof self<"u"?self:typeof window<"u"?window:{});const Yf="@firebase/firestore",Kf="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Dp("@firebase/firestore");function Ur(){return lr.logLevel}function Lt(i,...t){if(lr.logLevel<=ue.DEBUG){const e=t.map(Rh);lr.debug(`Firestore (${rs}): ${i}`,...e)}}function cr(i,...t){if(lr.logLevel<=ue.ERROR){const e=t.map(Rh);lr.error(`Firestore (${rs}): ${i}`,...e)}}function Ga(i,...t){if(lr.logLevel<=ue.WARN){const e=t.map(Rh);lr.warn(`Firestore (${rs}): ${i}`,...e)}}function Rh(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(i,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Gp(i,n,e)}function Gp(i,t,e){let n=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw cr(n),new Error(n)}function Le(i,t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,i||Gp(t,r,n)}function Te(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qt extends is{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(an.UNAUTHENTICATED))}shutdown(){}}class gM{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class _M{constructor(t){this.t=t,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Le(this.o===void 0,42304);let n=this.i;const r=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(Lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Le(typeof n.accessToken=="string",31837,{l:n}),new Wp(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Le(t===null||typeof t=="string",2055,{h:t}),new an(t)}}class vM{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yM{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new vM(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EM{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,JT(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Le(this.o===void 0,3512);const n=s=>{s.error!=null&&Lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Lt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{Lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zf(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Le(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Zf(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=xM(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%62))}return n}}function de(i,t){return i<t?-1:i>t?1:0}function Yc(i,t){let e=0;for(;e<i.length&&e<t.length;){const n=i.codePointAt(e),r=t.codePointAt(e);if(n!==r){if(n<128&&r<128)return de(n,r);{const s=SM(),o=TM(s.encode(Jf(i,e)),s.encode(Jf(t,e)));return o!==0?o:de(n,r)}}e+=n>65535?2:1}return de(i.length,t.length)}function Jf(i,t){return i.codePointAt(t)>65535?i.substring(t,t+2):i.substring(t,t+1)}function TM(i,t){for(let e=0;e<i.length&&e<t.length;++e)if(i[e]!==t[e])return de(i[e],t[e]);return de(i.length,t.length)}function Kr(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=-62135596800,td=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(t){return je.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*td);return new je(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new qt(ht.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new qt(ht.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Qf)throw new qt(ht.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new qt(ht.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/td}_compareTo(t){return this.seconds===t.seconds?de(this.nanoseconds,t.nanoseconds):de(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Qf;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(t){return new Re(t)}static min(){return new Re(new je(0,0))}static max(){return new Re(new je(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="__name__";class Wn{constructor(t,e,n){e===void 0?e=0:e>t.length&&ie(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&ie(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Wn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Wn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=Wn.compareSegments(t.get(r),e.get(r));if(s!==0)return s}return de(t.length,e.length)}static compareSegments(t,e){const n=Wn.isNumericId(t),r=Wn.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Wn.extractNumericId(t).compare(Wn.extractNumericId(e)):Yc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return wh.fromString(t.substring(4,t.length-2))}}class Ie extends Wn{construct(t,e,n){return new Ie(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new qt(ht.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Ie(e)}static emptyPath(){return new Ie([])}}const MM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Wn{construct(t,e,n){return new Qe(t,e,n)}static isValidIdentifier(t){return MM.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ed}static keyField(){return new Qe([ed])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new qt(ht.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new qt(ht.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new qt(ht.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new qt(ht.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qe(e)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.path=t}static fromPath(t){return new ee(Ie.fromString(t))}static fromName(t){return new ee(Ie.fromString(t).popFirst(5))}static empty(){return new ee(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ie.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ee(new Ie(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=-1;function AM(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Re.fromTimestamp(n===1e9?new je(e+1,0):new je(e,n));return new Fi(r,ee.empty(),t)}function bM(i){return new Fi(i.readTime,i.key,qs)}class Fi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Fi(Re.min(),ee.empty(),qs)}static max(){return new Fi(Re.max(),ee.empty(),qs)}}function wM(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=ee.comparator(i.documentKey,t.documentKey),e!==0?e:de(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(i){if(i.code!==ht.FAILED_PRECONDITION||i.message!==RM)throw i;Lt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new st((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof st?e:st.resolve(e)}catch(e){return st.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):st.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):st.reject(e)}static resolve(t){return new st((e,n)=>{e(t)})}static reject(t){return new st((e,n)=>{n(t)})}static waitFor(t){return new st((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},c=>n(c))}),o=!0,s===r&&e()})}static or(t){let e=st.resolve(!1);for(const n of t)e=e.next(r=>r?st.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new st((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const h=c;e(t[h]).next(u=>{o[h]=u,++a,a===s&&n(o)},u=>r(u))}})}static doWhile(t,e){return new st((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function PM(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function no(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Ph.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=-1;function Dh(i){return i==null}function ba(i){return i===0&&1/i==-1/0}function IM(i){return typeof i=="number"&&Number.isInteger(i)&&!ba(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="";function DM(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=nd(t)),t=LM(i.get(e),t);return nd(t)}function LM(i,t){let e=t;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":e+="";break;case qp:e+="";break;default:e+=s}}return e}function nd(i){return i+qp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function ss(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function jp(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e){this.comparator=t,this.root=e||Ke.EMPTY}insert(t,e){return new yn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(t){return new yn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jo(this.root,t,this.comparator,!0)}}class Jo{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ke{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??Ke.RED,this.left=r??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ke(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw ie(27949);return t+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.comparator=t,this.data=new yn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new rd(this.data.getIterator())}getIteratorFrom(t){return new rd(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tn)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tn(this.comparator);return e.data=t,e}}class rd{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.fields=t,t.sort(Qe.comparator)}static empty(){return new Bn([])}unionWith(t){let e=new tn(Qe.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Bn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Kr(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NM("Invalid base64 string: "+s):s}}(t);return new Kn(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new Kn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return de(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kn.EMPTY_BYTE_STRING=new Kn("");const UM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(i){if(Le(!!i,39018),typeof i=="string"){let t=0;const e=UM.exec(i);if(Le(!!e,46558,{timestamp:i}),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Ze(i.seconds),nanos:Ze(i.nanos)}}function Ze(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Zr(i){return typeof i=="string"?Kn.fromBase64String(i):Kn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="server_timestamp",Yp="__type__",Kp="__previous_value__",Zp="__local_write_time__";function Lh(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[Yp])===null||e===void 0?void 0:e.stringValue)===$p}function Nh(i){const t=i.mapValue.fields[Kp];return Lh(t)?Nh(t):t}function wa(i){const t=hr(i.mapValue.fields[Zp].timestampValue);return new je(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(t,e,n,r,s,o,a,c,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}const Ra="(default)";class Ca{constructor(t,e){this.projectId=t,this.database=e||Ra}static empty(){return new Ca("","")}get isDefaultDatabase(){return this.database===Ra}isEqual(t){return t instanceof Ca&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="__type__",FM="__max__",Qo={mapValue:{}},Qp="__vector__",Kc="value";function ur(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Lh(i)?4:BM(i)?9007199254740991:VM(i)?10:11:ie(28295,{value:i})}function Zn(i,t){if(i===t)return!0;const e=ur(i);if(e!==ur(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return wa(i).isEqual(wa(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=hr(r.timestampValue),a=hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return Zr(r.bytesValue).isEqual(Zr(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Ze(r.geoPointValue.latitude)===Ze(s.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ze(r.integerValue)===Ze(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Ze(r.doubleValue),a=Ze(s.doubleValue);return o===a?ba(o)===ba(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return Kr(i.arrayValue.values||[],t.arrayValue.values||[],Zn);case 10:case 11:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(id(o)!==id(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Zn(o[c],a[c])))return!1;return!0}(i,t);default:return ie(52216,{left:i})}}function js(i,t){return(i.values||[]).find(e=>Zn(e,t))!==void 0}function Jr(i,t){if(i===t)return 0;const e=ur(i),n=ur(t);if(e!==n)return de(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return de(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Ze(s.integerValue||s.doubleValue),c=Ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(i,t);case 3:return sd(i.timestampValue,t.timestampValue);case 4:return sd(wa(i),wa(t));case 5:return Yc(i.stringValue,t.stringValue);case 6:return function(s,o){const a=Zr(s),c=Zr(o);return a.compareTo(c)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let h=0;h<a.length&&h<c.length;h++){const u=de(a[h],c[h]);if(u!==0)return u}return de(a.length,c.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=de(Ze(s.latitude),Ze(o.latitude));return a!==0?a:de(Ze(s.longitude),Ze(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return od(i.arrayValue,t.arrayValue);case 10:return function(s,o){var a,c,h,u;const f=s.fields||{},p=o.fields||{},g=(a=f[Kc])===null||a===void 0?void 0:a.arrayValue,x=(c=p[Kc])===null||c===void 0?void 0:c.arrayValue,T=de(((h=g==null?void 0:g.values)===null||h===void 0?void 0:h.length)||0,((u=x==null?void 0:x.values)===null||u===void 0?void 0:u.length)||0);return T!==0?T:od(g,x)}(i.mapValue,t.mapValue);case 11:return function(s,o){if(s===Qo.mapValue&&o===Qo.mapValue)return 0;if(s===Qo.mapValue)return 1;if(o===Qo.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),h=o.fields||{},u=Object.keys(h);c.sort(),u.sort();for(let f=0;f<c.length&&f<u.length;++f){const p=Yc(c[f],u[f]);if(p!==0)return p;const g=Jr(a[c[f]],h[u[f]]);if(g!==0)return g}return de(c.length,u.length)}(i.mapValue,t.mapValue);default:throw ie(23264,{Pe:e})}}function sd(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return de(i,t);const e=hr(i),n=hr(t),r=de(e.seconds,n.seconds);return r!==0?r:de(e.nanos,n.nanos)}function od(i,t){const e=i.values||[],n=t.values||[];for(let r=0;r<e.length&&r<n.length;++r){const s=Jr(e[r],n[r]);if(s)return s}return de(e.length,n.length)}function Qr(i){return Zc(i)}function Zc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=hr(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Zr(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return ee.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=Zc(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${Zc(e.fields[o])}`;return r+"}"}(i.mapValue):ie(61005,{value:i})}function da(i){switch(ur(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Nh(i);return t?16+da(t):16;case 5:return 2*i.stringValue.length;case 6:return Zr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,s)=>r+da(s),0)}(i.arrayValue);case 10:case 11:return function(n){let r=0;return ss(n.fields,(s,o)=>{r+=s.length+da(o)}),r}(i.mapValue);default:throw ie(13486,{value:i})}}function Jc(i){return!!i&&"integerValue"in i}function Uh(i){return!!i&&"arrayValue"in i}function pa(i){return!!i&&"mapValue"in i}function VM(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[Jp])===null||e===void 0?void 0:e.stringValue)===Qp}function Is(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return ss(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Is(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Is(i.arrayValue.values[e]);return t}return Object.assign({},i)}function BM(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===FM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.value=t}static empty(){return new Fn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Is(e)}setAll(t){let e=Qe.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=Is(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());pa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];pa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ss(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new Fn(Is(this.value))}}function tm(i){const t=[];return ss(i.fields,(e,n)=>{const r=new Qe([e]);if(pa(n)){const s=tm(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new Bn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Un(t,0,Re.min(),Re.min(),Re.min(),Fn.empty(),0)}static newFoundDocument(t,e,n,r){return new Un(t,1,e,Re.min(),n,r,0)}static newNoDocument(t,e){return new Un(t,2,e,Re.min(),Re.min(),Fn.empty(),0)}static newUnknownDocument(t,e){return new Un(t,3,e,Re.min(),Re.min(),Fn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Fn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Un&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Un(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.position=t,this.inclusive=e}}function ad(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=ee.comparator(ee.fromName(o.referenceValue),e.key):n=Jr(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function ld(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Zn(i.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e="asc"){this.field=t,this.dir=e}}function kM(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{}class Xe extends em{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new HM(t,e,n):e==="array-contains"?new XM(t,n):e==="in"?new qM(t,n):e==="not-in"?new jM(t,n):e==="array-contains-any"?new $M(t,n):new Xe(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new GM(t,n):new WM(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Jr(e,this.value)):e!==null&&ur(this.value)===ur(e)&&this.matchesComparison(Jr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vi extends em{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Vi(t,e)}matches(t){return nm(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function nm(i){return i.op==="and"}function im(i){return zM(i)&&nm(i)}function zM(i){for(const t of i.filters)if(t instanceof Vi)return!1;return!0}function Qc(i){if(i instanceof Xe)return i.field.canonicalString()+i.op.toString()+Qr(i.value);if(im(i))return i.filters.map(t=>Qc(t)).join(",");{const t=i.filters.map(e=>Qc(e)).join(",");return`${i.op}(${t})`}}function rm(i,t){return i instanceof Xe?function(n,r){return r instanceof Xe&&n.op===r.op&&n.field.isEqual(r.field)&&Zn(n.value,r.value)}(i,t):i instanceof Vi?function(n,r){return r instanceof Vi&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&rm(o,r.filters[a]),!0):!1}(i,t):void ie(19439)}function sm(i){return i instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Qr(e.value)}`}(i):i instanceof Vi?function(e){return e.op.toString()+" {"+e.getFilters().map(sm).join(" ,")+"}"}(i):"Filter"}class HM extends Xe{constructor(t,e,n){super(t,e,n),this.key=ee.fromName(n.referenceValue)}matches(t){const e=ee.comparator(t.key,this.key);return this.matchesComparison(e)}}class GM extends Xe{constructor(t,e){super(t,"in",e),this.keys=om("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class WM extends Xe{constructor(t,e){super(t,"not-in",e),this.keys=om("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function om(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>ee.fromName(n.referenceValue))}class XM extends Xe{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Uh(e)&&js(e.arrayValue,this.value)}}class qM extends Xe{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&js(this.value.arrayValue,e)}}class jM extends Xe{constructor(t,e){super(t,"not-in",e)}matches(t){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!js(this.value.arrayValue,e)}}class $M extends Xe{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Uh(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>js(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.Ie=null}}function cd(i,t=null,e=[],n=[],r=null,s=null,o=null){return new YM(i,t,e,n,r,s,o)}function Oh(i){const t=Te(i);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Qc(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Dh(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Qr(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Qr(n)).join(",")),t.Ie=e}return t.Ie}function Fh(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!kM(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!rm(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!ld(i.startAt,t.startAt)&&ld(i.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function KM(i,t,e,n,r,s,o,a){return new Wa(i,t,e,n,r,s,o,a)}function ZM(i){return new Wa(i)}function hd(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function JM(i){return i.collectionGroup!==null}function Ds(i){const t=Te(i);if(t.Ee===null){t.Ee=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ee.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tn(Qe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ee.push(new Ia(s,n))}),e.has(Qe.keyField().canonicalString())||t.Ee.push(new Ia(Qe.keyField(),n))}return t.Ee}function ir(i){const t=Te(i);return t.de||(t.de=QM(t,Ds(i))),t.de}function QM(i,t){if(i.limitType==="F")return cd(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ia(r.field,s)});const e=i.endAt?new Pa(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Pa(i.startAt.position,i.startAt.inclusive):null;return cd(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function th(i,t,e){return new Wa(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function am(i,t){return Fh(ir(i),ir(t))&&i.limitType===t.limitType}function lm(i){return`${Oh(ir(i))}|lt:${i.limitType}`}function Ss(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>sm(r)).join(", ")}]`),Dh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qr(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qr(r)).join(",")),`Target(${n})`}(ir(i))}; limitType=${i.limitType})`}function Vh(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):ee.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Ds(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,c){const h=ad(o,a,c);return o.inclusive?h<=0:h<0}(n.startAt,Ds(n),r)||n.endAt&&!function(o,a,c){const h=ad(o,a,c);return o.inclusive?h>=0:h>0}(n.endAt,Ds(n),r))}(i,t)}function tA(i){return(t,e)=>{let n=!1;for(const r of Ds(i)){const s=eA(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function eA(i,t,e){const n=i.field.isKeyField()?ee.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),h=a.data.field(s);return c!==null&&h!==null?Jr(c,h):ie(42886)}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return ie(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ss(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return jp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new yn(ee.comparator);function Da(){return nA}const cm=new yn(ee.comparator);function ta(...i){let t=cm;for(const e of i)t=t.insert(e.key,e);return t}function hm(i){let t=cm;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function er(){return Ls()}function um(){return Ls()}function Ls(){return new dr(i=>i.toString(),(i,t)=>i.isEqual(t))}const iA=new yn(ee.comparator),rA=new tn(ee.comparator);function ln(...i){let t=rA;for(const e of i)t=t.add(e);return t}const sA=new tn(de);function oA(){return sA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ba(t)?"-0":t}}function fm(i){return{integerValue:""+i}}function aA(i,t){return IM(t)?fm(t):Bh(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this._=void 0}}function lA(i,t,e){return i instanceof La?function(r,s){const o={fields:{[Yp]:{stringValue:$p},[Zp]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Lh(s)&&(s=Nh(s)),s&&(o.fields[Kp]=s),{mapValue:o}}(e,t):i instanceof $s?pm(i,t):i instanceof Ys?mm(i,t):function(r,s){const o=dm(r,s),a=ud(o)+ud(r.Re);return Jc(o)&&Jc(r.Re)?fm(a):Bh(r.serializer,a)}(i,t)}function cA(i,t,e){return i instanceof $s?pm(i,t):i instanceof Ys?mm(i,t):e}function dm(i,t){return i instanceof Na?function(n){return Jc(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class La extends Xa{}class $s extends Xa{constructor(t){super(),this.elements=t}}function pm(i,t){const e=gm(t);for(const n of i.elements)e.some(r=>Zn(r,n))||e.push(n);return{arrayValue:{values:e}}}class Ys extends Xa{constructor(t){super(),this.elements=t}}function mm(i,t){let e=gm(t);for(const n of i.elements)e=e.filter(r=>!Zn(r,n));return{arrayValue:{values:e}}}class Na extends Xa{constructor(t,e){super(),this.serializer=t,this.Re=e}}function ud(i){return Ze(i.integerValue||i.doubleValue)}function gm(i){return Uh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function hA(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof $s&&r instanceof $s||n instanceof Ys&&r instanceof Ys?Kr(n.elements,r.elements,Zn):n instanceof Na&&r instanceof Na?Zn(n.Re,r.Re):n instanceof La&&r instanceof La}(i.transform,t.transform)}class uA{constructor(t,e){this.version=t,this.transformResults=e}}class pi{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pi}static exists(t){return new pi(void 0,t)}static updateTime(t){return new pi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ma(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class qa{}function _m(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new ym(i.key,pi.none()):new io(i.key,i.data,pi.none());{const e=i.data,n=Fn.empty();let r=new tn(Qe.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new pr(i.key,n,new Bn(r.toArray()),pi.none())}}function fA(i,t,e){i instanceof io?function(r,s,o){const a=r.value.clone(),c=dd(r.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof pr?function(r,s,o){if(!ma(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dd(r.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(vm(r)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ns(i,t,e,n){return i instanceof io?function(s,o,a,c){if(!ma(s.precondition,o))return a;const h=s.value.clone(),u=pd(s.fieldTransforms,c,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(i,t,e,n):i instanceof pr?function(s,o,a,c){if(!ma(s.precondition,o))return a;const h=pd(s.fieldTransforms,c,o),u=o.data;return u.setAll(vm(s)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(i,t,e,n):function(s,o,a){return ma(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function dA(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=dm(n.transform,r||null);s!=null&&(e===null&&(e=Fn.empty()),e.set(n.field,s))}return e||null}function fd(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Kr(n,r,(s,o)=>hA(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class io extends qa{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pr extends qa{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vm(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function dd(i,t,e){const n=new Map;Le(i.length===e.length,32656,{Ve:e.length,me:i.length});for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,cA(o,a,e[r]))}return n}function pd(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,lA(s,o,t))}return n}class ym extends qa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pA extends qa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&fA(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ns(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ns(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=um();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const c=_m(o,a);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Re.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ln())}isEqual(t){return this.batchId===t.batchId&&Kr(this.mutations,t.mutations,(e,n)=>fd(e,n))&&Kr(this.baseMutations,t.baseMutations,(e,n)=>fd(e,n))}}class kh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Le(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let r=function(){return iA}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new kh(t,e,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,he;function _A(i){switch(i){case ht.OK:return ie(64938);case ht.CANCELLED:case ht.UNKNOWN:case ht.DEADLINE_EXCEEDED:case ht.RESOURCE_EXHAUSTED:case ht.INTERNAL:case ht.UNAVAILABLE:case ht.UNAUTHENTICATED:return!1;case ht.INVALID_ARGUMENT:case ht.NOT_FOUND:case ht.ALREADY_EXISTS:case ht.PERMISSION_DENIED:case ht.FAILED_PRECONDITION:case ht.ABORTED:case ht.OUT_OF_RANGE:case ht.UNIMPLEMENTED:case ht.DATA_LOSS:return!0;default:return ie(15467,{code:i})}}function vA(i){if(i===void 0)return cr("GRPC error has no .code"),ht.UNKNOWN;switch(i){case Oe.OK:return ht.OK;case Oe.CANCELLED:return ht.CANCELLED;case Oe.UNKNOWN:return ht.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return ht.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return ht.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return ht.INTERNAL;case Oe.UNAVAILABLE:return ht.UNAVAILABLE;case Oe.UNAUTHENTICATED:return ht.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return ht.INVALID_ARGUMENT;case Oe.NOT_FOUND:return ht.NOT_FOUND;case Oe.ALREADY_EXISTS:return ht.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return ht.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return ht.FAILED_PRECONDITION;case Oe.ABORTED:return ht.ABORTED;case Oe.OUT_OF_RANGE:return ht.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return ht.UNIMPLEMENTED;case Oe.DATA_LOSS:return ht.DATA_LOSS;default:return ie(39323,{code:i})}}(he=Oe||(Oe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new wh([4294967295,4294967295],0);class yA{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function eh(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function EA(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function xA(i,t){return eh(i,t.toTimestamp())}function Gr(i){return Le(!!i,49232),Re.fromTimestamp(function(e){const n=hr(e);return new je(n.seconds,n.nanos)}(i))}function Em(i,t){return nh(i,t).canonicalString()}function nh(i,t){const e=function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function SA(i){const t=Ie.fromString(i);return Le(PA(t),10190,{key:t.toString()}),t}function ih(i,t){return Em(i.databaseId,t.path)}function TA(i){const t=SA(i);return t.length===4?Ie.emptyPath():AA(t)}function MA(i){return new Ie(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function AA(i){return Le(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function md(i,t,e){return{name:ih(i,t),fields:e.value.mapValue.fields}}function bA(i,t){let e;if(t instanceof io)e={update:md(i,t.key,t.value)};else if(t instanceof ym)e={delete:ih(i,t.key)};else if(t instanceof pr)e={update:md(i,t.key,t.data),updateMask:CA(t.fieldMask)};else{if(!(t instanceof pA))return ie(16599,{ft:t.type});e={verify:ih(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof La)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Na)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw ie(20930,{transform:o.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:xA(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie(27497)}(i,t.precondition)),e}function wA(i,t){return i&&i.length>0?(Le(t!==void 0,14353),i.map(e=>function(r,s){let o=r.updateTime?Gr(r.updateTime):Gr(s);return o.isEqual(Re.min())&&(o=Gr(s)),new uA(o,r.transformResults||[])}(e,t))):[]}function RA(i){let t=TA(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){Le(n===1,65062);const u=e.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(f){const p=xm(f);return p instanceof Vi&&im(p)?p.getFilters():[p]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(p=>function(x){return new Ia(Or(x.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(p))}(e.orderBy));let a=null;e.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Dh(p)?null:p}(e.limit));let c=null;e.startAt&&(c=function(f){const p=!!f.before,g=f.values||[];return new Pa(g,p)}(e.startAt));let h=null;return e.endAt&&(h=function(f){const p=!f.before,g=f.values||[];return new Pa(g,p)}(e.endAt)),KM(t,r,o,s,a,"F",c,h)}function xm(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Or(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Or(e.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Or(e.unaryFilter.field);return Xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(e.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(i):i.fieldFilter!==void 0?function(e){return Xe.create(Or(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Vi.create(e.compositeFilter.filters.map(n=>xm(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(e.compositeFilter.op))}(i):ie(30097,{filter:i})}function Or(i){return Qe.fromServerFormat(i.fieldPath)}function CA(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function PA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(t){this.wt=t}}function DA(i){const t=RA({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?th(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.yn=new NA}addToCollectionParentIndex(t,e){return this.yn.add(e),st.resolve()}getCollectionParents(t,e){return st.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return st.resolve()}deleteFieldIndex(t,e){return st.resolve()}deleteAllFieldIndexes(t){return st.resolve()}createTargetIndexes(t,e){return st.resolve()}getDocumentsMatchingTarget(t,e){return st.resolve(null)}getIndexType(t,e){return st.resolve(0)}getFieldIndexes(t,e){return st.resolve([])}getNextCollectionGroupToUpdate(t){return st.resolve(null)}getMinOffset(t,e){return st.resolve(Fi.min())}getMinOffsetFromCollectionGroup(t,e){return st.resolve(Fi.min())}updateCollectionGroup(t,e,n){return st.resolve()}updateIndexEntries(t,e){return st.resolve()}}class NA{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new tn(Ie.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new tn(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sm=41943040;class gn{static withCacheSize(t){return new gn(t,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(Sm,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new ts(0)}static ir(){return new ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="LruGarbageCollector",UA=1048576;function vd([i,t],[e,n]){const r=de(i,e);return r===0?de(t,n):r}class OA{constructor(t){this.cr=t,this.buffer=new tn(vd),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();vd(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class FA{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){Lt(_d,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){no(e)?Lt(_d,"Ignoring IndexedDB error during garbage collection: ",e):await Ch(e)}await this.Ir(3e5)})}}class VA{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return st.resolve(Ph.le);const n=new OA(e);return this.Er.forEachTarget(t,r=>n.Pr(r.sequenceNumber)).next(()=>this.Er.Ar(t,r=>n.Pr(r))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Er.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(Lt("LruGarbageCollector","Garbage collection skipped; disabled"),st.resolve(gd)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(Lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gd):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let n,r,s,o,a,c,h;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(t,r))).next(f=>(n=f,a=Date.now(),this.removeTargets(t,n,e))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(f=>(h=Date.now(),Ur()<=ue.DEBUG&&Lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(h-c)+`ms
Total Duration: ${h-u}ms`),st.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:f})))}}function BA(i,t){return new VA(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this.changes=new dr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Un.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?st.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Ns(n.mutation,r,Bn.empty(),je.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,ln()).next(()=>n))}getLocalViewOfDocuments(t,e,n=ln()){const r=er();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=ta();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=er();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,ln()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=Da();const o=Ls(),a=function(){return Ls()}();return e.forEach((c,h)=>{const u=n.get(h.key);r.has(h.key)&&(u===void 0||u.mutation instanceof pr)?s=s.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),Ns(u.mutation,h,u.mutation.getFieldMask(),je.now())):o.set(h.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((h,u)=>o.set(h,u)),e.forEach((h,u)=>{var f;return a.set(h,new zA(u,(f=o.get(h))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,e){const n=Ls();let r=new yn((o,a)=>o-a),s=ln();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const h=e.get(c);if(h===null)return;let u=n.get(c)||Bn.empty();u=a.applyToLocalView(h,u),n.set(c,u);const f=(r.get(a.batchId)||ln()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),h=c.key,u=c.value,f=um();u.forEach(p=>{if(!s.has(p)){const g=_m(e.get(p),n.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,f))}return st.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):JM(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):st.resolve(er());let a=qs,c=s;return o.next(h=>st.forEach(h,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?st.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,c,h,ln())).next(u=>({batchId:a,changes:hm(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ee(e)).next(n=>{let r=ta();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=ta();return this.indexManager.getCollectionParents(t,s).next(a=>st.forEach(a,c=>{const h=function(f,p){return new Wa(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,n,r).next(u=>{u.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((c,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,Un.newInvalidDocument(u)))});let a=ta();return o.forEach((c,h)=>{const u=s.get(c);u!==void 0&&Ns(u.mutation,h,Bn.empty(),je.now()),Vh(e,h)&&(a=a.insert(c,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return st.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Gr(r.createTime)}}(e)),st.resolve()}getNamedQuery(t,e){return st.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(r){return{name:r.name,query:DA(r.bundledQuery),readTime:Gr(r.readTime)}}(e)),st.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.overlays=new yn(ee.comparator),this.Or=new Map}getOverlay(t,e){return st.resolve(this.overlays.get(e))}getOverlays(t,e){const n=er();return st.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.St(t,e,s)}),st.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Or.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Or.delete(n)),st.resolve()}getOverlaysForCollection(t,e,n){const r=er(),s=e.length+1,o=new ee(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>n&&r.set(c.getKey(),c)}return st.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new yn((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>n){let u=s.get(h.largestBatchId);u===null&&(u=er(),s=s.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=er(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(h,u)),!(a.size()>=r)););return st.resolve(a)}St(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Or.get(r.largestBatchId).delete(n.key);this.Or.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new gA(e,n));let s=this.Or.get(e);s===void 0&&(s=ln(),this.Or.set(e,s)),this.Or.set(e,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.sessionToken=Kn.EMPTY_BYTE_STRING}getSessionToken(t){return st.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,st.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.Nr=new tn(We.Br),this.Lr=new tn(We.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const n=new We(t,e);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Qr(new We(t,e))}$r(t,e){t.forEach(n=>this.removeReference(n,e))}Ur(t){const e=new ee(new Ie([])),n=new We(e,t),r=new We(e,t+1),s=[];return this.Lr.forEachInRange([n,r],o=>{this.Qr(o),s.push(o.key)}),s}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new ee(new Ie([])),n=new We(e,t),r=new We(e,t+1);let s=ln();return this.Lr.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new We(t,0),n=this.Nr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class We{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return ee.comparator(t.key,e.key)||de(t.Gr,e.Gr)}static kr(t,e){return de(t.Gr,e.Gr)||ee.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new tn(We.Br)}checkEmpty(t){return st.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mA(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.zr=this.zr.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return st.resolve(o)}lookupMutationBatch(t,e){return st.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Hr(n),s=r<0?0:r;return st.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return st.resolve(this.mutationQueue.length===0?Ih:this.Jn-1)}getAllMutationBatches(t){return st.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new We(e,0),r=new We(e,Number.POSITIVE_INFINITY),s=[];return this.zr.forEachInRange([n,r],o=>{const a=this.jr(o.Gr);s.push(a)}),st.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tn(de);return e.forEach(r=>{const s=new We(r,0),o=new We(r,Number.POSITIVE_INFINITY);this.zr.forEachInRange([s,o],a=>{n=n.add(a.Gr)})}),st.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ee.isDocumentKey(s)||(s=s.child(""));const o=new We(new ee(s),0);let a=new tn(de);return this.zr.forEachWhile(c=>{const h=c.key.path;return!!n.isPrefixOf(h)&&(h.length===r&&(a=a.add(c.Gr)),!0)},o),st.resolve(this.Jr(a))}Jr(t){const e=[];return t.forEach(n=>{const r=this.jr(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Le(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return st.forEach(e.mutations,r=>{const s=new We(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.zr=n})}Xn(t){}containsKey(t,e){const n=new We(e,0),r=this.zr.firstAfterOrEqual(n);return st.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,st.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(t){this.Zr=t,this.docs=function(){return new yn(ee.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Zr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return st.resolve(n?n.document.mutableCopy():Un.newInvalidDocument(e))}getEntries(t,e){let n=Da();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():Un.newInvalidDocument(r))}),st.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=Da();const o=e.path,a=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:h,value:{document:u}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||wM(bM(u),n)<=0||(r.has(u.key)||Vh(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return st.resolve(s)}getAllFromCollectionGroup(t,e,n,r){ie(9500)}Xr(t,e){return st.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new $A(this)}getSize(t){return st.resolve(this.size)}}class $A extends kA{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.vr.addEntry(t,r)):this.vr.removeEntry(n)}),st.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(t){this.persistence=t,this.ei=new dr(e=>Oh(e),Fh),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.ti=0,this.ni=new zh,this.targetCount=0,this.ri=ts.rr()}forEachTarget(t,e){return this.ei.forEach((n,r)=>e(r)),st.resolve()}getLastRemoteSnapshotVersion(t){return st.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return st.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),st.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ti&&(this.ti=e),st.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new ts(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,st.resolve()}updateTargetData(t,e){return this.ar(e),st.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,st.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.ei.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.ei.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),st.waitFor(s).next(()=>r)}getTargetCount(t){return st.resolve(this.targetCount)}getTargetData(t,e){const n=this.ei.get(e)||null;return st.resolve(n)}addMatchingKeys(t,e,n){return this.ni.qr(e,n),st.resolve()}removeMatchingKeys(t,e,n){this.ni.$r(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),st.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),st.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ni.Wr(e);return st.resolve(n)}containsKey(t,e){return st.resolve(this.ni.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e){this.ii={},this.overlays={},this.si=new Ph(0),this.oi=!1,this.oi=!0,this._i=new XA,this.referenceDelegate=t(this),this.ai=new YA(this),this.indexManager=new LA,this.remoteDocumentCache=function(r){return new jA(r)}(n=>this.referenceDelegate.ui(n)),this.serializer=new IA(e),this.ci=new GA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new WA,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ii[t.toKey()];return n||(n=new qA(e,this.referenceDelegate),this.ii[t.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,n){Lt("MemoryPersistence","Starting transaction:",t);const r=new KA(this.si.next());return this.referenceDelegate.li(),n(r).next(s=>this.referenceDelegate.hi(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Pi(t,e){return st.or(Object.values(this.ii).map(n=>()=>n.containsKey(t,e)))}}class KA extends CM{constructor(t){super(),this.currentSequenceNumber=t}}class Hh{constructor(t){this.persistence=t,this.Ti=new zh,this.Ii=null}static Ei(t){return new Hh(t)}get di(){if(this.Ii)return this.Ii;throw ie(60996)}addReference(t,e,n){return this.Ti.addReference(n,e),this.di.delete(n.toString()),st.resolve()}removeReference(t,e,n){return this.Ti.removeReference(n,e),this.di.add(n.toString()),st.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),st.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(r=>this.di.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.di.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return st.forEach(this.di,n=>{const r=ee.fromPath(n);return this.Ai(t,r).next(s=>{s||e.removeEntry(r,Re.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return st.or([()=>st.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Ua{constructor(t,e){this.persistence=t,this.Ri=new dr(n=>DM(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=BA(this,e)}static Ei(t,e){return new Ua(t,e)}li(){}hi(t){return st.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(r=>n+r))}Vr(t){let e=0;return this.Ar(t,n=>{e++}).next(()=>e)}Ar(t,e){return st.forEach(this.Ri,(n,r)=>this.gr(t,n,r).next(s=>s?st.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.Xr(t,o=>this.gr(t,o,e).next(a=>{a||(n++,s.removeEntry(o,Re.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),st.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),st.resolve()}removeReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),st.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),st.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=da(t.data.value)),e}gr(t,e,n){return st.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const r=this.Ri.get(e);return st.resolve(r!==void 0&&r>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ls=n,this.hs=r}static Ps(t,e){let n=ln(),r=ln();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Gh(t,e.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return YS()?8:PM(jS())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Rs(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Vs(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZA;return this.fs(t,e,o).next(a=>{if(s.result=a,this.Is)return this.gs(t,e,o,a.size)})}).next(()=>s.result)}gs(t,e,n,r){return n.documentReadCount<this.Es?(Ur()<=ue.DEBUG&&Lt("QueryEngine","SDK will not create cache indexes for query:",Ss(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),st.resolve()):(Ur()<=ue.DEBUG&&Lt("QueryEngine","Query:",Ss(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(Ur()<=ue.DEBUG&&Lt("QueryEngine","The SDK decides to create cache indexes for query:",Ss(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ir(e))):st.resolve())}Rs(t,e){if(hd(e))return st.resolve(null);let n=ir(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=th(e,null,"F"),n=ir(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=ln(...s);return this.As.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(c=>{const h=this.ps(e,a);return this.ys(e,h,o,c.readTime)?this.Rs(t,th(e,null,"F")):this.ws(t,h,e,c)}))})))}Vs(t,e,n,r){return hd(e)||r.isEqual(Re.min())?st.resolve(null):this.As.getDocuments(t,n).next(s=>{const o=this.ps(e,s);return this.ys(e,o,n,r)?st.resolve(null):(Ur()<=ue.DEBUG&&Lt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ss(e)),this.ws(t,o,e,AM(r,qs)).next(a=>a))})}ps(t,e){let n=new tn(tA(t));return e.forEach((r,s)=>{Vh(t,s)&&(n=n.add(s))}),n}ys(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}fs(t,e,n){return Ur()<=ue.DEBUG&&Lt("QueryEngine","Using full collection scan to execute query:",Ss(e)),this.As.getDocumentsMatchingQuery(t,e,Fi.min(),n)}ws(t,e,n,r){return this.As.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="LocalStore";class tb{constructor(t,e,n,r){this.persistence=t,this.bs=e,this.serializer=r,this.Ss=new yn(de),this.Ds=new dr(s=>Oh(s),Fh),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(n)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new HA(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function eb(i,t,e,n){return new tb(i,t,e,n)}async function Mm(i,t){const e=Te(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.Fs(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let c=ln();for(const h of r){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of s){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return e.localDocuments.getDocuments(n,c).next(h=>({Ms:h,removedBatchIds:o,addedBatchIds:a}))})})}function nb(i,t){const e=Te(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.Cs.newChangeBuffer({trackRemovals:!0});return function(a,c,h,u){const f=h.batch,p=f.keys();let g=st.resolve();return p.forEach(x=>{g=g.next(()=>u.getEntry(c,x)).next(T=>{const _=h.docVersions.get(x);Le(_!==null,48541),T.version.compareTo(_)<0&&(f.applyToRemoteDocument(T,h),T.isValidDocument()&&(T.setReadTime(h.commitVersion),u.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let c=ln();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(c=c.add(a.batch.mutations[h].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function ib(i){const t=Te(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function rb(i,t){const e=Te(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ih),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}class yd{constructor(){this.activeTargetIds=oA()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sb{constructor(){this.So=new yd,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,n){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new yd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="ConnectivityMonitor";class xd{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){Lt(Ed,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){Lt(Ed,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea=null;function rh(){return ea===null?ea=function(){return 268435456+Math.round(2147483648*Math.random())}():ea++,"0x"+ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="RestConnection",ab={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lb{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${n}/databases/${r}`,this.qo=this.databaseId.database===Ra?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Qo(t,e,n,r,s){const o=rh(),a=this.$o(t,e.toUriEncodedString());Lt(Xl,`Sending RPC '${t}' ${o}:`,a,n);const c={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(c,r,s),this.Ko(t,a,c,n).then(h=>(Lt(Xl,`Received RPC '${t}' ${o}: `,h),h),h=>{throw Ga(Xl,`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",n),h})}Wo(t,e,n,r,s,o){return this.Qo(t,e,n,r,s)}Uo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((r,s)=>t[s]=r),n&&n.headers.forEach((r,s)=>t[s]=r)}$o(t,e){const n=ab[t];return`${this.Lo}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="WebChannelConnection";class hb extends lb{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,n,r){const s=rh();return new Promise((o,a)=>{const c=new Vp;c.setWithCredentials(!0),c.listenOnce(Bp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case fa.NO_ERROR:const u=c.getResponseJson();Lt(on,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case fa.TIMEOUT:Lt(on,`RPC '${t}' ${s} timed out`),a(new qt(ht.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const f=c.getStatus();if(Lt(on,`RPC '${t}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const x=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(ht).indexOf(m)>=0?m:ht.UNKNOWN}(g.status);a(new qt(x,g.message))}else a(new qt(ht.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new qt(ht.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{s_:t,streamId:s,o_:c.getLastErrorCode(),__:c.getLastError()})}}finally{Lt(on,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(r);Lt(on,`RPC '${t}' ${s} sending request:`,r),c.send(e,"POST",h,n,15)})}a_(t,e,n){const r=rh(),s=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Hp(),a=zp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Uo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const u=s.join("");Lt(on,`Creating RPC '${t}' stream ${r}: ${u}`,c);const f=o.createWebChannel(u,c);let p=!1,g=!1;const x=new cb({Go:_=>{g?Lt(on,`Not sending because RPC '${t}' stream ${r} is closed:`,_):(p||(Lt(on,`Opening RPC '${t}' stream ${r} transport.`),f.open(),p=!0),Lt(on,`RPC '${t}' stream ${r} sending:`,_),f.send(_))},zo:()=>f.close()}),T=(_,m,U)=>{_.listen(m,I=>{try{U(I)}catch(R){setTimeout(()=>{throw R},0)}})};return T(f,ws.EventType.OPEN,()=>{g||(Lt(on,`RPC '${t}' stream ${r} transport opened.`),x.t_())}),T(f,ws.EventType.CLOSE,()=>{g||(g=!0,Lt(on,`RPC '${t}' stream ${r} transport closed`),x.r_())}),T(f,ws.EventType.ERROR,_=>{g||(g=!0,Ga(on,`RPC '${t}' stream ${r} transport errored. Name:`,_.name,"Message:",_.message),x.r_(new qt(ht.UNAVAILABLE,"The operation could not be completed")))}),T(f,ws.EventType.MESSAGE,_=>{var m;if(!g){const U=_.data[0];Le(!!U,16349);const I=U,R=(I==null?void 0:I.error)||((m=I[0])===null||m===void 0?void 0:m.error);if(R){Lt(on,`RPC '${t}' stream ${r} received error:`,R);const V=R.status;let O=function(y){const v=Oe[y];if(v!==void 0)return vA(v)}(V),M=R.message;O===void 0&&(O=ht.INTERNAL,M="Unknown error status: "+V+" with message "+R.message),g=!0,x.r_(new qt(O,M)),f.close()}else Lt(on,`RPC '${t}' stream ${r} received:`,U),x.i_(U)}}),T(a,kp.STAT_EVENT,_=>{_.stat===$c.PROXY?Lt(on,`RPC '${t}' stream ${r} detected buffering proxy`):_.stat===$c.NOPROXY&&Lt(on,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.n_()},0),x}}function ql(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(i){return new yA(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e,n=1e3,r=1.5,s=6e4){this.bi=t,this.timerId=e,this.u_=n,this.c_=r,this.l_=s,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),r=Math.max(0,e-n);r>0&&Lt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,r,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="PersistentStream";class ub{constructor(t,e,n,r,s,o,a,c){this.bi=t,this.R_=n,this.V_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Am(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===ht.RESOURCE_EXHAUSTED?(cr(e.toString()),cr("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===ht.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.m_===e&&this.B_(n,r)},n=>{t(()=>{const r=new qt(ht.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(r)})})}B_(t,e){const n=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(r=>{n(()=>this.L_(r))}),this.stream.onMessage(r=>{n(()=>++this.p_==1?this.q_(r):this.onNext(r))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return Lt(Sd,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(Lt(Sd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fb extends ub{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return Le(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Le(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){Le(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=wA(t.writeResults,t.commitTime),n=Gr(t.commitTime);return this.listener.j_(n,e)}H_(){const t={};t.database=MA(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>bA(this.serializer,n))};this.F_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{}class pb extends db{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.J_=!1}Y_(){if(this.J_)throw new qt(ht.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,n,r){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Qo(t,nh(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ht.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new qt(ht.UNKNOWN,s.toString())})}Wo(t,e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,nh(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ht.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new qt(ht.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class mb{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(cr(e),this.ea=!1):Lt("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="RemoteStore";class gb{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=s,this.ca.vo(o=>{n.enqueueAndForget(async()=>{oo(this)&&(Lt(ro,"Restarting streams for network reachability change."),await async function(c){const h=Te(c);h.aa.add(4),await so(h),h.la.set("Unknown"),h.aa.delete(4),await $a(h)}(this))})}),this.la=new mb(n,r)}}async function $a(i){if(oo(i))for(const t of i.ua)await t(!0)}async function so(i){for(const t of i.ua)await t(!1)}function oo(i){return Te(i).aa.size===0}async function bm(i,t,e){if(!no(t))throw t;i.aa.add(1),await so(i),i.la.set("Offline"),e||(e=()=>ib(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Lt(ro,"Retrying IndexedDB access"),await e(),i.aa.delete(1),await $a(i)})}function wm(i,t){return t().catch(e=>bm(i,e,t))}async function Ya(i){const t=Te(i),e=Bi(t);let n=t.oa.length>0?t.oa[t.oa.length-1].batchId:Ih;for(;_b(t);)try{const r=await rb(t.localStore,n);if(r===null){t.oa.length===0&&e.v_();break}n=r.batchId,vb(t,r)}catch(r){await bm(t,r)}Rm(t)&&Cm(t)}function _b(i){return oo(i)&&i.oa.length<10}function vb(i,t){i.oa.push(t);const e=Bi(i);e.b_()&&e.W_&&e.G_(t.mutations)}function Rm(i){return oo(i)&&!Bi(i).w_()&&i.oa.length>0}function Cm(i){Bi(i).start()}async function yb(i){Bi(i).H_()}async function Eb(i){const t=Bi(i);for(const e of i.oa)t.G_(e.mutations)}async function xb(i,t,e){const n=i.oa.shift(),r=kh.from(n,t,e);await wm(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await Ya(i)}async function Sb(i,t){t&&Bi(i).W_&&await async function(n,r){if(function(o){return _A(o)&&o!==ht.ABORTED}(r.code)){const s=n.oa.shift();Bi(n).D_(),await wm(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ya(n)}}(i,t),Rm(i)&&Cm(i)}async function Td(i,t){const e=Te(i);e.asyncQueue.verifyOperationInProgress(),Lt(ro,"RemoteStore received new credentials");const n=oo(e);e.aa.add(3),await so(e),n&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await $a(e)}async function Tb(i,t){const e=Te(i);t?(e.aa.delete(2),await $a(e)):t||(e.aa.add(2),await so(e),e.la.set("Unknown"))}function Bi(i){return i.Ta||(i.Ta=function(e,n,r){const s=Te(e);return s.Y_(),new fb(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{jo:()=>Promise.resolve(),Jo:yb.bind(null,i),Zo:Sb.bind(null,i),z_:Eb.bind(null,i),j_:xb.bind(null,i)}),i.ua.push(async t=>{t?(i.Ta.D_(),await Ya(i)):(await i.Ta.stop(),i.oa.length>0&&(Lt(ro,`Stopping write stream with ${i.oa.length} pending writes`),i.oa=[]))})),i.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new Wh(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qt(ht.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pm(i,t){if(cr("AsyncQueue",`${t}: ${i}`),no(i))return new qt(ht.UNAVAILABLE,`${t}: ${i}`);throw i}class Mb{constructor(){this.queries=Md(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,n){const r=Te(e),s=r.queries;r.queries=Md(),s.forEach((o,a)=>{for(const c of a.Ra)c.onError(n)})})(this,new qt(ht.ABORTED,"Firestore shutting down"))}}function Md(){return new dr(i=>lm(i),am)}function Ab(i){i.fa.forEach(t=>{t.next()})}var Ad,bd;(bd=Ad||(Ad={})).ya="default",bd.Cache="cache";const bb="SyncEngine";class wb{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new dr(a=>lm(a),am),this.iu=new Map,this.su=new Set,this.ou=new yn(ee.comparator),this._u=new Map,this.au=new zh,this.uu={},this.cu=new Map,this.lu=ts.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Rb(i,t,e){const n=Db(i);try{const r=await function(o,a){const c=Te(o),h=je.now(),u=a.reduce((g,x)=>g.add(x.key),ln());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let x=Da(),T=ln();return c.Cs.getEntries(g,u).next(_=>{x=_,x.forEach((m,U)=>{U.isValidDocument()||(T=T.add(m))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,x)).next(_=>{f=_;const m=[];for(const U of a){const I=dA(U,f.get(U.key).overlayedDocument);I!=null&&m.push(new pr(U.key,I,tm(I.value.mapValue),pi.exists(!0)))}return c.mutationQueue.addMutationBatch(g,h,m,a)}).next(_=>{p=_;const m=_.applyToLocalDocumentSet(f,T);return c.documentOverlayCache.saveOverlays(g,_.batchId,m)})}).then(()=>({batchId:p.batchId,changes:hm(f)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let h=o.uu[o.currentUser.toKey()];h||(h=new yn(de)),h=h.insert(a,c),o.uu[o.currentUser.toKey()]=h}(n,r.batchId,e),await Ka(n,r.changes),await Ya(n.remoteStore)}catch(r){const s=Pm(r,"Failed to persist write");e.reject(s)}}function wd(i,t,e){const n=Te(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.ru.forEach((s,o)=>{const a=o.view.ga(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=Te(o);c.onlineState=a;let h=!1;c.queries.forEach((u,f)=>{for(const p of f.Ra)p.ga(a)&&(h=!0)}),h&&Ab(c)}(n.eventManager,t),r.length&&n.nu.Q_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Cb(i,t){const e=Te(i),n=t.batch.batchId;try{const r=await nb(e.localStore,t);Dm(e,n,null),Im(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Ka(e,r)}catch(r){await Ch(r)}}async function Pb(i,t,e){const n=Te(i);try{const r=await function(o,a){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let u;return c.mutationQueue.lookupMutationBatch(h,a).next(f=>(Le(f!==null,37113),u=f.keys(),c.mutationQueue.removeMutationBatch(h,f))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,u)).next(()=>c.localDocuments.getDocuments(h,u))})}(n.localStore,t);Dm(n,t,e),Im(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Ka(n,r)}catch(r){await Ch(r)}}function Im(i,t){(i.cu.get(t)||[]).forEach(e=>{e.resolve()}),i.cu.delete(t)}function Dm(i,t,e){const n=Te(i);let r=n.uu[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.uu[n.currentUser.toKey()]=r}}async function Ka(i,t,e){const n=Te(i),r=[],s=[],o=[];n.ru.isEmpty()||(n.ru.forEach((a,c)=>{o.push(n.Pu(c,t,e).then(h=>{var u;if((h||e)&&n.isPrimaryClient){const f=h?!h.fromCache:(u=void 0)===null||u===void 0?void 0:u.current;n.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){r.push(h);const f=Gh.Ps(c.targetId,h);s.push(f)}}))}),await Promise.all(o),n.nu.Q_(r),await async function(c,h){const u=Te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>st.forEach(h,p=>st.forEach(p.ls,g=>u.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>st.forEach(p.hs,g=>u.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!no(f))throw f;Lt(QA,"Failed to update sequence numbers: "+f)}for(const f of h){const p=f.targetId;if(!f.fromCache){const g=u.Ss.get(p),x=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(x);u.Ss=u.Ss.insert(p,T)}}}(n.localStore,s))}async function Ib(i,t){const e=Te(i);if(!e.currentUser.isEqual(t)){Lt(bb,"User change. New user:",t.toKey());const n=await Mm(e.localStore,t);e.currentUser=t,function(s,o){s.cu.forEach(a=>{a.forEach(c=>{c.reject(new qt(ht.CANCELLED,o))})}),s.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Ka(e,n.Ms)}}function Db(i){const t=Te(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Pb.bind(null,t),t}class Oa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ja(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return eb(this.persistence,new JA,t.initialUser,this.serializer)}Ru(t){return new Tm(Hh.Ei,this.serializer)}Au(t){return new sb}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oa.provider={build:()=>new Oa};class Lb extends Oa{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){Le(this.persistence.referenceDelegate instanceof Ua,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new FA(n,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new Tm(n=>Ua.Ei(n,e),this.serializer)}}class sh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>wd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ib.bind(null,this.syncEngine),await Tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Mb}()}createDatastore(t){const e=ja(t.databaseInfo.databaseId),n=function(s){return new hb(s)}(t.databaseInfo);return function(s,o,a,c){return new pb(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new gb(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>wd(this.syncEngine,e,0),function(){return xd.C()?new xd:new ob}())}createSyncEngine(t,e){return function(r,s,o,a,c,h,u){const f=new wb(r,s,o,a,c,h);return u&&(f.hu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=Te(r);Lt(ro,"RemoteStore shutting down."),s.aa.add(5),await so(s),s.ca.shutdown(),s.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}sh.provider={build:()=>new sh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="FirestoreClient";class Nb{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=an.UNAUTHENTICATED,this.clientId=Xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{Lt(ki,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(Lt(ki,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Pm(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function jl(i,t){i.asyncQueue.verifyOperationInProgress(),Lt(ki,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Mm(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Rd(i,t){i.asyncQueue.verifyOperationInProgress();const e=await Ub(i);Lt(ki,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>Td(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>Td(t.remoteStore,r)),i._onlineComponents=t}async function Ub(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Lt(ki,"Using user provided OfflineComponentProvider");try{await jl(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(r){return r.name==="FirebaseError"?r.code===ht.FAILED_PRECONDITION||r.code===ht.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(e))throw e;Ga("Error using user provided cache. Falling back to memory cache: "+e),await jl(i,new Oa)}}else Lt(ki,"Using default OfflineComponentProvider"),await jl(i,new Lb(void 0));return i._offlineComponents}async function Ob(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Lt(ki,"Using user provided OnlineComponentProvider"),await Rd(i,i._uninitializedComponentsProvider._online)):(Lt(ki,"Using default OnlineComponentProvider"),await Rd(i,new sh))),i._onlineComponents}function Fb(i){return Ob(i).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(i,t,e){if(!e)throw new qt(ht.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Vb(i,t,e,n){if(t===!0&&n===!0)throw new qt(ht.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Pd(i){if(!ee.isDocumentKey(i))throw new qt(ht.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Id(i){if(ee.isDocumentKey(i))throw new qt(ht.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Xh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":ie(12329,{type:typeof i})}function Um(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new qt(ht.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Xh(i);throw new qt(ht.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="firestore.googleapis.com",Dd=!0;class Ld{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new qt(ht.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Om,this.ssl=Dd}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Dd;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Sm;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<UA)throw new qt(ht.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lm((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new qt(ht.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new qt(ht.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new qt(ht.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Za{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qt(ht.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new qt(ht.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mM;switch(n.type){case"firstParty":return new yM(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new qt(ht.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cd.get(e);n&&(Lt("ComponentProvider","Removing Datastore"),Cd.delete(e),n.terminate())}(this),Promise.resolve()}}function Bb(i,t,e,n={}){var r;const s=(i=Um(i,Za))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:i._getEmulatorOptions()}),a=`${t}:${e}`;s.host!==Om&&s.host!==a&&Ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},s),{host:a,ssl:!1,emulatorOptions:n});if(!Ta(c,o)&&(i._setSettings(c),n.mockUserToken)){let h,u;if(typeof n.mockUserToken=="string")h=n.mockUserToken,u=an.MOCK_USER;else{h=qS(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new qt(ht.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new an(f)}i._authCredentials=new gM(new Wp(h,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new qh(this.firestore,t,this._query)}}class mi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mi(this.firestore,t,this._key)}}class Ni extends qh{constructor(t,e,n){super(t,e,ZM(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mi(this.firestore,null,new ee(t))}withConverter(t){return new Ni(this.firestore,t,this._path)}}function kb(i,t,...e){if(i=Gs(i),Nm("collection","path",t),i instanceof Za){const n=Ie.fromString(t,...e);return Id(n),new Ni(i,null,n)}{if(!(i instanceof mi||i instanceof Ni))throw new qt(ht.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ie.fromString(t,...e));return Id(n),new Ni(i.firestore,null,n)}}function zb(i,t,...e){if(i=Gs(i),arguments.length===1&&(t=Xp.newId()),Nm("doc","path",t),i instanceof Za){const n=Ie.fromString(t,...e);return Pd(n),new mi(i,null,new ee(n))}{if(!(i instanceof mi||i instanceof Ni))throw new qt(ht.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Ie.fromString(t,...e));return Pd(n),new mi(i.firestore,i instanceof Ni?i.converter:null,new ee(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="AsyncQueue";class Ud{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Am(this,"async_queue_retry"),this.ju=()=>{const n=ql();n&&Lt(Nd,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=t;const e=ql();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=ql();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new nr;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!no(t))throw t;Lt(Nd,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(n=>{throw this.Ku=n,this.Wu=!1,cr("INTERNAL UNHANDLED ERROR: ",Od(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=e,e}enqueueAfterDelay(t,e,n){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const r=Wh.createAndSchedule(this,t,e,n,s=>this.Xu(s));return this.Uu.push(r),r}Ju(){this.Ku&&ie(47125,{ec:Od(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function Od(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class Fm extends Za{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Ud,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ud(t),this._firestoreClient=void 0,await t}}}function Hb(i,t){const e=typeof i=="object"?i:nM(),n=typeof i=="string"?i:Ra,r=ZT(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=WS("firestore");s&&Bb(r,...s)}return r}function Gb(i){if(i._terminated)throw new qt(ht.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Wb(i),i._firestoreClient}function Wb(i){var t,e,n;const r=i._freezeSettings(),s=function(a,c,h,u){return new OM(a,c,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Lm(u.experimentalLongPollingOptions),u.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new Nb(i._authCredentials,i._appCheckCredentials,i._queue,s,i._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ks(Kn.fromBase64String(t))}catch(e){throw new qt(ht.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ks(Kn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new qt(ht.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new qt(ht.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new qt(ht.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return de(this._lat,t._lat)||de(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=/^__.*__$/;class qb{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new pr(t,this.data,this.fieldMask,e,this.fieldTransforms):new io(t,this.data,e,this.fieldTransforms)}}function Hm(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{oc:i})}}class jh{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this._c(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new jh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.ac({path:n,cc:!1});return r.lc(t),r}hc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.ac({path:n,cc:!1});return r._c(),r}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Fa(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(Hm(this.oc)&&Xb.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class jb{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ja(t)}dc(t,e,n,r=!1){return new jh({oc:t,methodName:e,Ec:n,path:Qe.emptyPath(),cc:!1,Ic:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $b(i){const t=i._freezeSettings(),e=ja(i._databaseId);return new jb(i._databaseId,!!t.ignoreUndefinedProperties,e)}function Yb(i,t,e,n,r,s={}){const o=i.dc(s.merge||s.mergeFields?2:0,t,e,r);qm("Data must be an object, but it was:",o,n);const a=Wm(n,o);let c,h;if(s.merge)c=new Bn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const p=Kb(t,f,e);if(!o.contains(p))throw new qt(ht.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Qb(u,p)||u.push(p)}c=new Bn(u),h=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,h=o.fieldTransforms;return new qb(new Fn(a),c,h)}function Gm(i,t){if(Xm(i=Gs(i)))return qm("Unsupported field value:",t,i),Wm(i,t);if(i instanceof Bm)return function(n,r){if(!Hm(r.oc))throw r.Tc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Tc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let c=Gm(a,r.Pc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=Gs(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return aA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=je.fromDate(n);return{timestampValue:eh(r.serializer,s)}}if(n instanceof je){const s=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:eh(r.serializer,s)}}if(n instanceof km)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ks)return{bytesValue:EA(r.serializer,n._byteString)};if(n instanceof mi){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Em(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof zm)return function(o,a){return{mapValue:{fields:{[Jp]:{stringValue:Qp},[Kc]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw a.Tc("VectorValues must only contain numeric values.");return Bh(a.serializer,h)})}}}}}}(n,r);throw r.Tc(`Unsupported field value: ${Xh(n)}`)}(i,t)}function Wm(i,t){const e={};return jp(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ss(i,(n,r)=>{const s=Gm(r,t.uc(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function Xm(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof je||i instanceof km||i instanceof Ks||i instanceof mi||i instanceof Bm||i instanceof zm)}function qm(i,t,e){if(!Xm(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=Xh(e);throw n==="an object"?t.Tc(i+" a custom object"):t.Tc(i+" "+n)}}function Kb(i,t,e){if((t=Gs(t))instanceof Vm)return t._internalPath;if(typeof t=="string")return Jb(i,t);throw Fa("Field path arguments must be of type string or ",i,!1,void 0,e)}const Zb=new RegExp("[~\\*/\\[\\]]");function Jb(i,t,e){if(t.search(Zb)>=0)throw Fa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Vm(...t.split("."))._internalPath}catch{throw Fa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Fa(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new qt(ht.INVALID_ARGUMENT,a+i+c)}function Qb(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(i,t,e){let n;return n=i?i.toFirestore(t):t,n}function ew(i,t){const e=Um(i.firestore,Fm),n=zb(i),r=tw(i.converter,t);return nw(e,[Yb($b(i.firestore),"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,pi.exists(!1))]).then(()=>n)}function nw(i,t){return function(n,r){const s=new nr;return n.asyncQueue.enqueueAndForget(async()=>Rb(await Fb(n),r,s)),s.promise}(Gb(i),t)}(function(t,e=!0){(function(r){rs=r})(eM),Aa(new Ws("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new Fm(new _M(n.getProvider("auth-internal")),new EM(o,n.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new qt(ht.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ca(h.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Hr(Yf,Kf,t),Hr(Yf,Kf,"esm2017")})();const iw={apiKey:"vpTX4fWslY7czlHq5SJ7rBXE",authDomain:"usfx-quiz.firebaseapp.com",projectId:"usfx-quiz",storageBucket:"usfx-quiz.firebasestorage.app",messagingSenderId:"747537221320",appId:"1:747537221320:web:4c5bf1a825450a2454c7fd"},rw=Up(iw),sw=Hb(rw);async function ow(i){try{await ew(kb(sw,"results"),i),console.log("✅ Resultado guardado en Firebase")}catch(t){console.error("❌ Error al guardar resultado:",t)}}let qn=0,Rs=0,ga=0,Ja=[];function ao(){const i=document.getElementById("quiz-container"),t=Hc[qn],e=Hc.length,n=(qn+1)/e*100,r=Ja[t.id];i.innerHTML=`
      <div class="card">
        <div class="card-header">
          <h2>Pregunta ${qn+1} de ${e}</h1>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${n}%"></div>
          </div>
        </div>
        <div class="card-body">
          <h3 class="question-text">${t.q}</h3>
          <div class="options">
            <div class="option ${r==="left"?"selected":""}" onclick="selectAnswer(${t.id}, 'left')">
              <span class="circle">${r==="left"?"✓":""}</span> ${t.left}
            </div>
            <div class="option ${r==="right"?"selected":""}" onclick="selectAnswer(${t.id}, 'right')">
              <span class="circle">${r==="right"?"✓":""}</span> ${t.right}
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="nav-button" onclick="prevQuestion()" ${qn===0?"disabled":""}>Anterior</button>
          <button class="nav-button primary" onclick="nextQuestion()" ${r?"":"disabled"}>${qn===e-1?"Finalizar":"Siguiente"}</button>
        </div>
      </div>
    `}function aw(i,t){Ja[i]=t,ao()}function lw(){qn>0&&(qn--,ao())}function cw(){qn<Hc.length-1?(qn++,ao()):uw()}window.selectAnswer=aw;window.prevQuestion=lw;window.nextQuestion=cw;function hw(i){const t=setInterval(()=>{typeof window.updateBrainVisualization=="function"&&(clearInterval(t),i())},50)}function uw(){Rs=0,ga=0;for(const r of Ja)r==="left"?Rs++:r==="right"&&ga++;const i=Rs+ga,t=Math.round(Rs/i*100),e=100-t,n=t>e;hw(()=>{updateBrainVisualization(t,e),fw(n,t,e),document.getElementById("quiz-container").style.display="none",document.getElementById("nav-buttons").style.display="none",document.querySelector(".content-wrapper").style.display="flex"})}function fw(i,t,e){const n=document.getElementById("right-panel");n.innerHTML="";const r=document.createElement("div");r.className="message";const s=document.createElement("h1");s.className="message-title",s.textContent=i?"Predominancia del Hemisferio Izquierdo":"Predominancia del Hemisferio Derecho";const o=document.createElement("div");o.className="quiz-result",o.innerHTML=i?DS:LS;const a=document.createElement("button");a.className="nav-button",a.textContent="Reiniciar Test",a.onclick=dw;const c=document.createElement("button");c.className="nav-button",c.textContent="Guardar Resultados",c.onclick=()=>pw(t,e),r.appendChild(s),r.appendChild(o),r.appendChild(a),r.appendChild(c),n.appendChild(r)}function dw(){qn=0,Rs=0,ga=0,document.getElementById("quiz-container").style.display="block",document.querySelector(".content-wrapper").style.display="none",document.getElementById("right-panel").innerHTML="",Ja=[],window.scene.children=window.scene.children.filter(i=>i.name!=="percentage-label"),window.brainObject&&(window.scene.remove(window.brainObject),window.brainObject=null,window.loader.load("obj/freesurff.Obj",function(i){window.brainObject=i,window.actualizarColoresYTexto(),window.scene.add(i)})),ao()}function pw(i,t){const e=document.createElement("div");e.className="results-modal",e.innerHTML=`
  <div class="results-form">
    <h2>Guardar Resultados</h2>
    <p><strong>Hemisferio Izquierdo:</strong> ${i}%</p>
    <p><strong>Hemisferio Derecho:</strong> ${t}%</p>
    
    <label>Nombre completo:
      <input type="text" id="form-name" required />
      <div class="input-error-message" id="error-name">Este campo es obligatorio.</div>
    </label>

    <label>Correo electrónico:
      <input type="email" id="form-email" required />
      <div class="input-error-message" id="error-email">Formato de correo no válido.</div>
    </label>

    <label>Celular:
      <input type="text" id="form-phone" required />
      <div class="input-error-message" id="error-phone">Debe tener 8 dígitos.</div>
    </label>

    <label>Puntaje del juego físico:
      <input type="number" id="form-score" />
      <div class="input-error-message" id="error-score">Debe ser un número entre 1 y 100.</div>
    </label>

    <button id="submit-results" class="nav-button primary">Enviar</button>
    <button class="nav-button" id="close-modal" onclick="closeModal()">Cancelar</button>
  </div>
`,document.body.appendChild(e),setTimeout(()=>{e.classList.add("active")},10),document.getElementById("submit-results").addEventListener("click",()=>{document.querySelector(".results-form").classList.add("loading"),mw(i,t)}),document.getElementById("close-modal").addEventListener("click",oh),e.addEventListener("click",n=>{n.target===e&&oh()})}async function mw(i,t,e){const n=document.getElementById("form-name"),r=document.getElementById("form-email"),s=document.getElementById("form-phone"),o=document.getElementById("form-score"),a=n.value.trim(),c=r.value.trim(),h=s.value.trim(),u=o.value.trim();[n,r,s,o].forEach(m=>m.classList.remove("invalid"));const p={name:document.getElementById("error-name"),email:document.getElementById("error-email"),phone:document.getElementById("error-phone"),score:document.getElementById("error-score")};Object.values(p).forEach(m=>m.style.display="none");let g=!1;a||(n.classList.add("invalid"),p.name.style.display="block",g=!0),(!c||!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(c))&&(r.classList.add("invalid"),p.email.style.display="block",g=!0),/^[0-9]{8,}$/.test(h)||(s.classList.add("invalid"),p.phone.style.display="block",g=!0);const T=parseInt(u,10);if(u!==""&&(isNaN(T)||T<1||T>100)&&(o.classList.add("invalid"),p.score.style.display="block",g=!0),g)return;const _={name:a,email:c,phone:h,score:isNaN(T)?null:T,leftPercentage:i,rightPercentage:t,timestamp:new Date};try{await ow(_),alert("Resultado guardado correctamente."),oh()}catch(m){alert("Error al guardar: "+m.message)}}function oh(){const i=document.querySelector(".results-modal");i&&i.remove()}ao();
