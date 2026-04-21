"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=m(function(A,u){
var b=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-infinite/dist'),P=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-sincos/dist').assign,R=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/constants-float64-pi/dist'),p=require('@stdlib/math-base-special-copysign/dist');function h(e,r,v,i){var g,l,a,n;return b(e)||O(e)?(r[i]=NaN,r[i+v]=NaN,r):(n=e%2,a=P(n),a===0||a===1?(l=R(a),r[i]=p(0,n),r[i+v]=l%2===1?-1:1,r):a<.25?q(c*n,r,v,i):a<.75?(a=.5-a,q(c*a,r,v,i),g=r[i],r[i]=p(r[i+v],n),r[i+v]=g,r):a<1.25?(n=p(1,n)-n,q(c*n,r,v,i),r[i+v]*=-1,r):a<1.75?(a-=1.5,q(c*a,r,v,i),g=r[i],r[i]=-p(r[i+v],n),r[i+v]=g,r):(n-=p(2,n),q(c*n,r,v,i)))}u.exports=h
});var y=m(function(B,x){
var j=N();function k(e){return j(e,[0,0],1,0)}x.exports=k
});var s=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=y(),w=N();s(I,"assign",w);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
