"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var N=m(function(A,u){
var b=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-infinite/dist'),P=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-sincos/dist').assign,R=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/constants-float64-pi/dist'),p=require('@stdlib/math-base-special-copysign/dist');function h(e,r,a,i){var g,l,n,v;return b(e)||O(e)?(r[i]=NaN,r[i+a]=NaN,r):(v=e%2,n=P(v),n===0||n===1?(l=R(n),r[i]=p(0,v),r[i+a]=l%2===1?-1:1,r):n<.25?q(c*v,r,a,i):n<.75?(n=.5-n,q(c*n,r,a,i),g=r[i],r[i]=p(r[i+a],v),r[i+a]=g,r):n<1.25?(v=p(1,v)-v,q(c*v,r,a,i),r[i+a]*=-1,r):n<1.75?(n-=1.5,q(c*n,r,a,i),g=r[i],r[i]=-p(r[i+a],v),r[i+a]=g,r):(v-=p(2,v),q(c*v,r,a,i)))}u.exports=h
});var y=m(function(B,x){
var j=N();function k(e){return j(e,[0,0],1,0)}x.exports=k
});var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=y(),w=N();s(I,"assign",w);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
