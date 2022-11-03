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



<section class="usage">

## Usage

```javascript
import sincospi from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincospi@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-sincospi/tags). For example,

```javascript
import sincospi from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincospi@v0.0.7-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincospi@deno/mod.js';
```

#### sincospi( x )

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

#### sincospi( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` times [π][@stdlib/constants/float64/pi] more accurately than `sincos(pi*x)`, especially for large `x`, and assigns results to a provided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 2 );

var v = sincospi.assign( 0.0, out, 1, 0 );
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
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import sincospi from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincospi@deno/mod.js';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[test-image]: https://github.com/stdlib-js/math-base-special-sincospi/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/math-base-special-sincospi/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sincospi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sincospi?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sincospi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sincospi/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sincospi/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-sincospi/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-sincospi/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-sincospi/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-sincospi/main/LICENSE

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin/tree/deno

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos/tree/deno

[@stdlib/constants/float64/pi]: https://github.com/stdlib-js/constants-float64-pi/tree/deno

<!-- <related-links> -->

[@stdlib/math/base/special/cospi]: https://github.com/stdlib-js/math-base-special-cospi/tree/deno

[@stdlib/math/base/special/sincos]: https://github.com/stdlib-js/math-base-special-sincos/tree/deno

[@stdlib/math/base/special/sinpi]: https://github.com/stdlib-js/math-base-special-sinpi/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
