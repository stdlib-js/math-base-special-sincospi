// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function a(r,t,n){var a=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,a&&(r="-"+r)),r}var o=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=a(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=a(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===i.call(r.specifier)?i.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,s=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,e,a=parseFloat(r.arg);if(!isFinite(a)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);a=r.arg}switch(r.specifier){case"e":case"E":e=a.toExponential(r.precision);break;case"f":case"F":e=a.toFixed(r.precision);break;case"g":case"G":u(a)<1e-4?((t=r.precision)>0&&(t-=1),e=a.toExponential(t)):e=a.toPrecision(r.precision),r.alternate||(e=y.call(e,b,"$1e"),e=y.call(e,w,"e"),e=y.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=y.call(e,s,"e+0$1"),e=y.call(e,v,"e-0$1"),r.alternate&&(e=y.call(e,d,"$1."),e=y.call(e,g,"$1.e")),a>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function U(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var S=String.fromCharCode,F=isNaN,N=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function _(r){var t,n,e,o,i,u,l,p,y;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))u+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,y=0;y<n.length;y++)switch(o=n.charAt(y)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,F(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,F(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!F(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=F(i)?String(e.arg):S(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=a(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=U(e.arg,e.width,e.padRight)),u+=e.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function T(r){var t,n,e,a;for(n=[],a=0,e=I.exec(r);e;)(t=r.slice(a,I.lastIndex-e[0].length)).length&&n.push(t),n.push(j(e)),a=I.lastIndex,e=I.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function k(r){return"string"==typeof r}function O(r){var t,n;if(!k(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[T(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return _.apply(null,t)}var x=Object.prototype,V=x.toString,G=x.__defineGetter__,$=x.__defineSetter__,H=x.__lookupGetter__,P=x.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,a,o,i;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(H.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,i="set"in n,a&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,t,n.get),i&&$&&$.call(r,t,n.set),r};function C(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r){return r!=r}var R=Number.POSITIVE_INFINITY,Z=Number,M=Z.NEGATIVE_INFINITY;function Y(r){return r===R||r===M}function X(r){return Math.abs(r)}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function J(r,t){return null!=r&&D.call(r,t)}var K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"";var rr=q()?function(r){var t,n,e;if(null==r)return B.call(r);n=r[Q],t=J(r,Q);try{r[Q]=void 0}catch(t){return B.call(r)}return e=B.call(r),t?r[Q]=n:delete r[Q],e}:function(r){return B.call(r)},tr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var er,ar="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=er,ir="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var fr,ur="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),n=t,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var lr=fr,pr=Object.prototype.toString;var yr="function"==typeof Symbol?Symbol:void 0,sr="function"==typeof yr?yr.toStringTag:"";var vr=q()?function(r){var t,n,e;if(null==r)return pr.call(r);n=r[sr],t=J(r,sr);try{r[sr]=void 0}catch(t){return pr.call(r)}return e=pr.call(r),t?r[sr]=n:delete r[sr],e}:function(r){return pr.call(r)},dr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var hr,wr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),n=t,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===vr(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=hr,Ar=Object.prototype.toString;var mr="function"==typeof Symbol?Symbol:void 0,Ur="function"==typeof mr?mr.toStringTag:"";var Sr=q()?function(r){var t,n,e;if(null==r)return Ar.call(r);n=r[Ur],t=J(r,Ur);try{r[Ur]=void 0}catch(t){return Ar.call(r)}return e=Ar.call(r),t?r[Ur]=n:delete r[Ur],e}:function(r){return Ar.call(r)},Fr="function"==typeof Uint16Array;var Nr="function"==typeof Uint16Array?Uint16Array:null;var Er,_r="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Fr&&n instanceof Uint16Array||"[object Uint16Array]"===Sr(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Ir,jr={uint16:Er,uint8:br};(Ir=new jr.uint16(1))[0]=4660;var Tr=52===new jr.uint8(Ir.buffer)[0],kr=!0===Tr?1:0,Or=new lr(1),xr=new or(Or.buffer);function Vr(r){return Or[0]=r,xr[kr]}var Gr=Object.prototype.toString;var $r="function"==typeof Symbol?Symbol:void 0,Hr="function"==typeof $r?$r.toStringTag:"";var Pr=q()?function(r){var t,n,e;if(null==r)return Gr.call(r);n=r[Hr],t=J(r,Hr);try{r[Hr]=void 0}catch(t){return Gr.call(r)}return e=Gr.call(r),t?r[Hr]=n:delete r[Hr],e}:function(r){return Gr.call(r)},Wr="function"==typeof Uint32Array;var Cr="function"==typeof Uint32Array?Uint32Array:null;var Lr,Rr="function"==typeof Uint32Array?Uint32Array:void 0;Lr=function(){var r,t,n;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Wr&&n instanceof Uint32Array||"[object Uint32Array]"===Pr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Zr=Lr,Mr="function"==typeof Float64Array;var Yr="function"==typeof Float64Array?Float64Array:null;var Xr,zr="function"==typeof Float64Array?Float64Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,NaN]),n=t,r=(Mr&&n instanceof Float64Array||"[object Float64Array]"===Pr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr=!0===Tr?0:1,Br=new Xr(1),Dr=new Zr(Br.buffer);var Jr=Object.prototype.toString;var Kr="function"==typeof Symbol?Symbol:void 0,Qr="function"==typeof Kr?Kr.toStringTag:"";var rt=q()?function(r){var t,n,e;if(null==r)return Jr.call(r);n=r[Qr],t=J(r,Qr);try{r[Qr]=void 0}catch(t){return Jr.call(r)}return e=Jr.call(r),t?r[Qr]=n:delete r[Qr],e}:function(r){return Jr.call(r)},tt="function"==typeof Uint32Array;var nt="function"==typeof Uint32Array?Uint32Array:null;var et,at="function"==typeof Uint32Array?Uint32Array:void 0;et=function(){var r,t,n;if("function"!=typeof nt)return!1;try{t=new nt(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(tt&&n instanceof Uint32Array||"[object Uint32Array]"===rt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?at:function(){throw new Error("not implemented")};var ot=et,it="function"==typeof Float64Array;var ct="function"==typeof Float64Array?Float64Array:null;var ft,ut,lt,pt="function"==typeof Float64Array?Float64Array:void 0;ft=function(){var r,t,n;if("function"!=typeof ct)return!1;try{t=new ct([1,3.14,-3.14,NaN]),n=t,r=(it&&n instanceof Float64Array||"[object Float64Array]"===rt(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pt:function(){throw new Error("not implemented")},!0===Tr?(ut=1,lt=0):(ut=0,lt=1);var yt={HIGH:ut,LOW:lt},st=new ft(1),vt=new ot(st.buffer),dt=yt.HIGH,gt=yt.LOW;function ht(r,t){return vt[dt]=r,vt[gt]=t,st[0]}var wt=Math.floor,bt=Number.POSITIVE_INFINITY,At=Z.NEGATIVE_INFINITY,mt=Object.prototype.toString;var Ut="function"==typeof Symbol?Symbol:void 0,St="function"==typeof Ut?Ut.toStringTag:"";var Ft=q()?function(r){var t,n,e;if(null==r)return mt.call(r);n=r[St],t=J(r,St);try{r[St]=void 0}catch(t){return mt.call(r)}return e=mt.call(r),t?r[St]=n:delete r[St],e}:function(r){return mt.call(r)},Nt="function"==typeof Uint32Array;var Et="function"==typeof Uint32Array?Uint32Array:null;var _t,It="function"==typeof Uint32Array?Uint32Array:void 0;_t=function(){var r,t,n;if("function"!=typeof Et)return!1;try{t=new Et(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Nt&&n instanceof Uint32Array||"[object Uint32Array]"===Ft(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?It:function(){throw new Error("not implemented")};var jt=_t,Tt="function"==typeof Float64Array;var kt="function"==typeof Float64Array?Float64Array:null;var Ot,xt,Vt,Gt="function"==typeof Float64Array?Float64Array:void 0;Ot=function(){var r,t,n;if("function"!=typeof kt)return!1;try{t=new kt([1,3.14,-3.14,NaN]),n=t,r=(Tt&&n instanceof Float64Array||"[object Float64Array]"===Ft(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gt:function(){throw new Error("not implemented")},!0===Tr?(xt=1,Vt=0):(xt=0,Vt=1);var $t={HIGH:xt,LOW:Vt},Ht=new Ot(1),Pt=new jt(Ht.buffer),Wt=$t.HIGH,Ct=$t.LOW;function Lt(r,t,n,e){return Ht[0]=r,t[e]=Pt[Wt],t[e+n]=Pt[Ct],t}function Rt(r){return Lt(r,[0,0],1,0)}C(Rt,"assign",Lt);var Zt=[0,0];function Mt(r,t){var n,e;return Rt.assign(r,Zt,1,0),n=Zt[0],n&=2147483647,e=Vr(t),ht(n|=e&=2147483648,Zt[1])}function Yt(r,t,n,e){return L(r)||Y(r)?(t[e]=r,t[e+n]=0,t):0!==r&&X(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}C((function(r){return Yt(r,[0,0],1,0)}),"assign",Yt);var Xt=[0,0],zt=[0,0];function qt(r,t){var n,e;return 0===t||0===r||L(r)||Y(r)?r:(Yt(r,Xt,1,0),t+=Xt[1],t+=function(r){var t=Vr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Xt[0]),t<-1074?Mt(0,r):t>1023?r<0?At:bt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Rt.assign(r,zt,1,0),n=zt[0],n&=2148532223,e*ht(n|=t+1023<<20,zt[1])))}function Bt(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Dt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Jt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Kt=5.960464477539063e-8,Qt=Bt(20),rn=Bt(20),tn=Bt(20),nn=Bt(20);function en(r,t,n,e,a,o,i,c,f){var u,l,p,y,s,v,d,g,h;for(y=o,h=e[n],g=n,s=0;g>0;s++)l=Kt*h|0,nn[s]=h-16777216*l|0,h=e[g-1]+l,g-=1;if(h=qt(h,a),h-=8*wt(.125*h),h-=d=0|h,p=0,a>0?(d+=s=nn[n-1]>>24-a,nn[n-1]-=s<<24-a,p=nn[n-1]>>23-a):0===a?p=nn[n-1]>>23:h>=.5&&(p=2),p>0){for(d+=1,u=0,s=0;s<n;s++)g=nn[s],0===u?0!==g&&(u=1,nn[s]=16777216-g):nn[s]=16777215-g;if(a>0)switch(a){case 1:nn[n-1]&=8388607;break;case 2:nn[n-1]&=4194303}2===p&&(h=1-h,0!==u&&(h-=qt(1,a)))}if(0===h){for(g=0,s=n-1;s>=o;s--)g|=nn[s];if(0===g){for(v=1;0===nn[o-v];v++);for(s=n+1;s<=n+v;s++){for(f[c+s]=Dt[i+s],l=0,g=0;g<=c;g++)l+=r[g]*f[c+(s-g)];e[s]=l}return en(r,t,n+=v,e,a,o,i,c,f)}}if(0===h)for(n-=1,a-=24;0===nn[n];)n-=1,a-=24;else(h=qt(h,-a))>=16777216?(l=Kt*h|0,nn[n]=h-16777216*l|0,a+=24,nn[n+=1]=l):nn[n]=0|h;for(l=qt(1,a),s=n;s>=0;s--)e[s]=l*nn[s],l*=Kt;for(s=n;s>=0;s--){for(l=0,v=0;v<=y&&v<=n-s;v++)l+=Jt[v]*e[s+v];tn[n-s]=l}for(l=0,s=n;s>=0;s--)l+=tn[s];for(t[0]=0===p?l:-l,l=tn[0]-l,s=1;s<=n;s++)l+=tn[s];return t[1]=0===p?l:-l,7&d}function an(r,t,n,e){var a,o,i,c,f,u,l;for(4,(o=(n-3)/24|0)<0&&(o=0),c=n-24*(o+1),u=o-(i=e-1),l=i+4,f=0;f<=l;f++)Qt[f]=u<0?0:Dt[u],u+=1;for(f=0;f<=4;f++){for(a=0,u=0;u<=i;u++)a+=r[u]*Qt[i+(f-u)];rn[f]=a}return 4,en(r,t,4,rn,c,4,o,i,Qt)}var on=Math.round;function cn(r,t,n){var e,a,o,i,c;return o=r-1.5707963267341256*(e=on(.6366197723675814*r)),i=6077100506506192e-26*e,c=t>>20|0,n[0]=o-i,c-(Vr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((a=o)-(o=a-(i=6077100506303966e-26*e))-i),n[0]=o-i,c-(Vr(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((a=o)-(o=a-(i=20222662487111665e-37*e))-i),n[0]=o-i)),n[1]=o-n[0]-i,e}var fn=1.5707963267341256,un=6077100506506192e-26,ln=2*un,pn=4*un,yn=[0,0,0],sn=[0,0];function vn(r,t){var n,e,a,o,i,c,f;if((a=2147483647&Vr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(a<=1074752122)return 598523==(1048575&a)?cn(r,a,t):a<=1073928572?r>0?(f=r-fn,t[0]=f-un,t[1]=f-t[0]-un,1):(f=r+fn,t[0]=f+un,t[1]=f-t[0]+un,-1):r>0?(f=r-2*fn,t[0]=f-ln,t[1]=f-t[0]-ln,2):(f=r+2*fn,t[0]=f+ln,t[1]=f-t[0]+ln,-2);if(a<=1075594811)return a<=1075183036?1074977148===a?cn(r,a,t):r>0?(f=r-3*fn,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*fn,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===a?cn(r,a,t):r>0?(f=r-4*fn,t[0]=f-pn,t[1]=f-t[0]-pn,4):(f=r+4*fn,t[0]=f+pn,t[1]=f-t[0]+pn,-4);if(a<1094263291)return cn(r,a,t);if(a>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Br[0]=r,Dr[qr]}(r),f=ht(a-((e=(a>>20)-1046)<<20|0),n),i=0;i<2;i++)yn[i]=0|f,f=16777216*(f-yn[i]);for(yn[2]=f,o=3;0===yn[o-1];)o-=1;return c=an(yn,sn,e,o),r<0?(t[0]=-sn[0],t[1]=-sn[1],-c):(t[0]=sn[0],t[1]=sn[1],c)}var dn=-.16666666666666632;function gn(r,t,n,e,a){var o,i,c,f,u;return i=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(f=u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),c=u*r,n[a]=0===t?r+c*(dn+u*i):r-(u*(.5*t-c*i)-t-c*dn),i=u*(.0416666666666666+u*(2480158728947673e-20*u-.001388888888887411)),i+=f*f*(u*(2.087572321298175e-9+-11359647557788195e-27*u)-2.7557314351390663e-7),f=1-(o=.5*u),n[a+e]=f+(1-f-o+(u*i-r*t)),n}var hn=[0,0];function wn(r,t,n,e){var a,o;if(a=Vr(r),(a&=2147483647)<=1072243195)return a<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),gn(r,0,t,n,e);if(a>=2146435072)return t[e]=NaN,t[e+n]=NaN,t;switch(o=vn(r,hn),gn(hn[0],hn[1],t,n,e),3&o){case 1:return a=t[e+n],t[e+n]=-t[e],t[e]=a,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return a=-t[e+n],t[e+n]=t[e],t[e]=a,t;default:return t}}C((function(r){return wn(r,[0,0],1,0)}),"assign",wn);var bn=3.141592653589793;function An(r,t,n,e){var a,o,i,c;return L(r)||Y(r)?(t[e]=NaN,t[e+n]=NaN,t):0===(i=X(c=r%2))||1===i?(o=wt(i),t[e]=Mt(0,c),t[e+n]=o%2==1?-1:1,t):i<.25?wn(bn*c,t,n,e):i<.75?(wn(bn*(i=.5-i),t,n,e),a=t[e],t[e]=Mt(t[e+n],c),t[e+n]=a,t):i<1.25?(c=Mt(1,c)-c,wn(bn*c,t,n,e),t[e+n]*=-1,t):i<1.75?(wn(bn*(i-=1.5),t,n,e),a=t[e],t[e]=-Mt(t[e+n],c),t[e+n]=a,t):(c-=Mt(2,c),wn(bn*c,t,n,e))}function mn(r){return An(r,[0,0],1,0)}C(mn,"assign",An);export{An as assign,mn as default};
//# sourceMappingURL=mod.js.map
