// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import{assign as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.0.7-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@esm/index.mjs";function a(s,a,o,l){var p,j,h,c;return t(s)||e(s)?(a[l]=NaN,a[l+o]=NaN,a):0===(h=i(c=s%2))||1===h?(j=m(h),a[l]=d(0,c),a[l+o]=j%2==1?-1:1,a):h<.25?n(r*c,a,o,l):h<.75?(n(r*(h=.5-h),a,o,l),p=a[l],a[l]=d(a[l+o],c),a[l+o]=p,a):h<1.25?(c=d(1,c)-c,n(r*c,a,o,l),a[l+o]*=-1,a):h<1.75?(n(r*(h-=1.5),a,o,l),p=a[l],a[l]=-d(a[l+o],c),a[l+o]=p,a):(c-=d(2,c),n(r*c,a,o,l))}function o(s){return a(s,[0,0],1,0)}s(o,"assign",a);export{a as assign,o as default};
//# sourceMappingURL=index.mjs.map
