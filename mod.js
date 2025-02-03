// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,h,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,u,s,l,p,g,y,v;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,v=void 0,(v=g-p.length)<0?p:p=y?p+m(v):m(v)+p)),f+=n.arg||"",u+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}function R(r){return Math.abs(r)}var Z=2147483647,M=2146435072;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Y.call(r);t=r[B],a=B,e=null!=(i=r)&&z.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[B]=t:delete r[B],n}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(J&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,tr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var ir,ar="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),t=e,r=(tr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,cr="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var ur,sr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),t=e,r=(cr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=ur,pr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var yr,vr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(pr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr,hr={uint16:yr,uint8:lr};(dr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(dr.buffer)[0],br=!0===wr?1:0,mr=new or(1),Ar=new er(mr.buffer);function _r(r){return mr[0]=r,Ar[br]}var Er,Ur,Sr=1048575,Ir=!0===wr?0:1,Nr=new or(1),kr=new er(Nr.buffer);!0===wr?(Er=1,Ur=0):(Er=0,Ur=1);var xr={HIGH:Er,LOW:Ur},Fr=new or(1),jr=new er(Fr.buffer),Tr=xr.HIGH,Or=xr.LOW;function Vr(r,e){return jr[Tr]=r,jr[Or]=e,Fr[0]}var $r,Gr,Hr=Math.floor,Wr=1023,Cr=1023,Lr=-1023,Pr=-1074,Rr=2147483648;!0===wr?($r=1,Gr=0):($r=0,Gr=1);var Zr={HIGH:$r,LOW:Gr},Mr=new or(1),Xr=new er(Mr.buffer),Yr=Zr.HIGH,zr=Zr.LOW;function qr(r,e,t,n){return Mr[0]=r,e[n]=Xr[Yr],e[n+t]=Xr[zr],e}function Br(r){return qr(r,[0,0],1,0)}H(Br,"assign",qr);var Dr=[0,0];function Jr(r,e){var t,n;return Br.assign(r,Dr,1,0),t=Dr[0],t&=Z,n=_r(e),Vr(t|=n&=Rr,Dr[1])}var Kr=22250738585072014e-324,Qr=4503599627370496;function re(r,e,t,n){return W(r)||P(r)?(e[n]=r,e[n+t]=0,e):0!==r&&R(r)<Kr?(e[n]=r*Qr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=2220446049250313e-31,te=2148532223,ne=[0,0],ie=[0,0];function ae(r,e){var t,n;return 0===e||0===r||W(r)||P(r)?r:(re(r,ne,1,0),r=ne[0],e+=ne[1],e+=function(r){var e=_r(r);return(e=(e&M)>>>20)-Wr|0}(r),e<Pr?Jr(0,r):e>Cr?r<0?L:C:(e<=Lr?(e+=52,n=ee):n=1,Br.assign(r,ie,1,0),t=ie[0],t&=te,n*Vr(t|=e+Wr<<20,ie[1])))}function oe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ue=16777216,se=5.960464477539063e-8,le=oe(20),pe=oe(20),ge=oe(20),ye=oe(20);function ve(r,e,t,n,i,a,o,c,f){var u,s,l,p,g,y,v,d,h;for(p=a,h=n[t],d=t,g=0;d>0;g++)s=se*h|0,ye[g]=h-ue*s|0,h=n[d-1]+s,d-=1;if(h=ae(h,i),h-=8*Hr(.125*h),h-=v=0|h,l=0,i>0?(v+=g=ye[t-1]>>24-i,ye[t-1]-=g<<24-i,l=ye[t-1]>>23-i):0===i?l=ye[t-1]>>23:h>=.5&&(l=2),l>0){for(v+=1,u=0,g=0;g<t;g++)d=ye[g],0===u?0!==d&&(u=1,ye[g]=16777216-d):ye[g]=16777215-d;if(i>0)switch(i){case 1:ye[t-1]&=8388607;break;case 2:ye[t-1]&=4194303}2===l&&(h=1-h,0!==u&&(h-=ae(1,i)))}if(0===h){for(d=0,g=t-1;g>=a;g--)d|=ye[g];if(0===d){for(y=1;0===ye[a-y];y++);for(g=t+1;g<=t+y;g++){for(f[c+g]=ce[o+g],s=0,d=0;d<=c;d++)s+=r[d]*f[c+(g-d)];n[g]=s}return ve(r,e,t+=y,n,i,a,o,c,f)}}if(0===h)for(t-=1,i-=24;0===ye[t];)t-=1,i-=24;else(h=ae(h,-i))>=ue?(s=se*h|0,ye[t]=h-ue*s|0,i+=24,ye[t+=1]=s):ye[t]=0|h;for(s=ae(1,i),g=t;g>=0;g--)n[g]=s*ye[g],s*=se;for(g=t;g>=0;g--){for(s=0,y=0;y<=p&&y<=t-g;y++)s+=fe[y]*n[g+y];ge[t-g]=s}for(s=0,g=t;g>=0;g--)s+=ge[g];for(e[0]=0===l?s:-s,s=ge[0]-s,g=1;g<=t;g++)s+=ge[g];return e[1]=0===l?s:-s,7&v}function de(r,e,t,n){var i,a,o,c,f,u,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)le[f]=u<0?0:ce[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*le[o+(f-u)];pe[f]=i}return 4,ve(r,e,4,pe,c,4,a,o,le)}var he=Math.round,we=.6366197723675814,be=1.5707963267341256,me=6077100506506192e-26,Ae=6077100506303966e-26,_e=20222662487959506e-37,Ee=20222662487111665e-37,Ue=84784276603689e-45,Se=2047;function Ie(r,e,t){var n,i,a,o,c;return a=r-(n=he(r*we))*be,o=n*me,c=e>>20|0,t[0]=a-o,c-(_r(t[0])>>20&Se)>16&&(o=n*_e-((i=a)-(a=i-(o=n*Ae))-o),t[0]=a-o,c-(_r(t[0])>>20&Se)>49&&(o=n*Ue-((i=a)-(a=i-(o=n*Ee))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ne=0,ke=16777216,xe=1.5707963267341256,Fe=6077100506506192e-26,je=2*Fe,Te=3*Fe,Oe=4*Fe,Ve=598523,$e=1072243195,Ge=1073928572,He=1074752122,We=1074977148,Ce=1075183036,Le=1075388923,Pe=1075594811,Re=1094263291,Ze=[0,0,0],Me=[0,0];function Xe(r,e){var t,n,i,a,o,c,f;if((i=_r(r)&Z|0)<=$e)return e[0]=r,e[1]=0,0;if(i<=He)return(i&Sr)===Ve?Ie(r,i,e):i<=Ge?r>0?(f=r-xe,e[0]=f-Fe,e[1]=f-e[0]-Fe,1):(f=r+xe,e[0]=f+Fe,e[1]=f-e[0]+Fe,-1):r>0?(f=r-2*xe,e[0]=f-je,e[1]=f-e[0]-je,2):(f=r+2*xe,e[0]=f+je,e[1]=f-e[0]+je,-2);if(i<=Pe)return i<=Ce?i===We?Ie(r,i,e):r>0?(f=r-3*xe,e[0]=f-Te,e[1]=f-e[0]-Te,3):(f=r+3*xe,e[0]=f+Te,e[1]=f-e[0]+Te,-3):i===Le?Ie(r,i,e):r>0?(f=r-4*xe,e[0]=f-Oe,e[1]=f-e[0]-Oe,4):(f=r+4*xe,e[0]=f+Oe,e[1]=f-e[0]+Oe,-4);if(i<Re)return Ie(r,i,e);if(i>=M)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Nr[0]=r,kr[Ir]}(r),f=Vr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Ze[o]=0|f,f=(f-Ze[o])*ke;for(Ze[2]=f,a=3;Ze[a-1]===Ne;)a-=1;return c=de(Ze,Me,n,a),r<0?(e[0]=-Me[0],e[1]=-Me[1],-c):(e[0]=Me[0],e[1]=Me[1],c)}var Ye=-.16666666666666632,ze=.00833333333332249,qe=-.0001984126982985795,Be=27557313707070068e-22,De=-2.5050760253406863e-8,Je=1.58969099521155e-10,Ke=.0416666666666666,Qe=-.001388888888887411,rt=2480158728947673e-20,et=-2.7557314351390663e-7,tt=2.087572321298175e-9,nt=-11359647557788195e-27;function it(r,e,t,n,i){var a,o,c,f,u;return o=ze+(u=r*r)*(qe+u*Be)+u*(f=u*u)*(De+u*Je),c=u*r,t[i]=0===e?r+c*(Ye+u*o):r-(u*(.5*e-c*o)-e-c*Ye),o=u*(Ke+u*(Qe+u*rt)),o+=f*f*(et+u*(tt+u*nt)),f=1-(a=.5*u),t[i+n]=f+(1-f-a+(u*o-r*e)),t}var at=1072243195,ot=1044381696,ct=[0,0];function ft(r,e,t,n){var i,a,o;if(a=_r(r),(a&=Z)<=at)return a<ot&&0==(0|r)&&(e[n]=r,e[n+t]=0),it(r,0,e,t,n);if(a>=M)return e[n]=NaN,e[n+t]=NaN,e;switch(o=Xe(r,ct),it(ct[0],ct[1],e,t,n),3&o){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}H((function(r){return ft(r,[0,0],1,0)}),"assign",ft);var ut=3.141592653589793;function st(r,e,t,n){var i,a,o,c;return W(r)||P(r)?(e[n]=NaN,e[n+t]=NaN,e):0===(o=R(c=r%2))||1===o?(a=Hr(o),e[n]=Jr(0,c),e[n+t]=a%2==1?-1:1,e):o<.25?ft(ut*c,e,t,n):o<.75?(ft(ut*(o=.5-o),e,t,n),i=e[n],e[n]=Jr(e[n+t],c),e[n+t]=i,e):o<1.25?(c=Jr(1,c)-c,ft(ut*c,e,t,n),e[n+t]*=-1,e):o<1.75?(ft(ut*(o-=1.5),e,t,n),i=e[n],e[n]=-Jr(e[n+t],c),e[n+t]=i,e):(c-=Jr(2,c),ft(ut*c,e,t,n))}function lt(r){return st(r,[0,0],1,0)}H(lt,"assign",st);export{st as assign,lt as default};
//# sourceMappingURL=mod.js.map
