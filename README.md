<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# sincospi

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Simultaneously compute the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a number times [π][@stdlib/constants/float64/pi].

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-sincospi
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var sincospi = require( '@stdlib/math-base-special-sincospi' );
```

#### sincospi( \[out,] x )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` times [π][@stdlib/constants/float64/pi] more accurately than `sincos(pi*x)`, especially for large `x`.

```javascript
var v = sincospi( 0.0 );
// returns [ 0.0, 1.0 ]

v = sincospi( 0.5 );
// returns [ 1.0, 0.0 ]

v = sincospi( 0.1 );
// returns [ ~0.309, ~0.951 ]

v = sincospi( NaN );
// returns [ NaN, NaN ]
```

By default, the function returns a two-element `array` containing `sin(πx)` and `cos(πx)`. To avoid extra memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = sincospi( out, 0.0 );
// returns <Float64Array>[ 0.0, 1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var sincospi = require( '@stdlib/math-base-special-sincospi' );

var x = linspace( 0.0, 2.0, 101 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( sincospi( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cospi`][@stdlib/math/base/special/cospi]</span><span class="delimiter">: </span><span class="description">compute cos(πx).</span>
-   <span class="package-name">[`@stdlib/math/base/special/sincos`][@stdlib/math/base/special/sincos]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math/base/special/sinpi`][@stdlib/math/base/special/sinpi]</span><span class="delimiter">: </span><span class="description">compute sin(πx).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sincospi.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sincospi

[test-image]: https://github.com/stdlib-js/math-base-special-sincospi/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-sincospi/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sincospi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sincospi?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sincospi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sincospi/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sincospi/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-sincospi/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-sincospi/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-sincospi/main/LICENSE

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos

[@stdlib/constants/float64/pi]: https://github.com/stdlib-js/constants-float64-pi

<!-- <related-links> -->

[@stdlib/math/base/special/cospi]: https://github.com/stdlib-js/math-base-special-cospi

[@stdlib/math/base/special/sincos]: https://github.com/stdlib-js/math-base-special-sincos

[@stdlib/math/base/special/sinpi]: https://github.com/stdlib-js/math-base-special-sinpi

<!-- </related-links> -->

</section>

<!-- /.links -->
