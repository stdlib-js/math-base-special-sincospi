/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var pow = require( '@stdlib/math-base-special-pow' );
var Float64Array = require( '@stdlib/array-float64' );
var sincospi = require( './../lib/assign.js' );


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sincospi, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided negative infinity, the function returns `[NaN,NaN]`', function test( t ) {
	var out;
	var y;

	out = [ 0.0, 0.0 ];
	y = sincospi( NINF, out, 1, 0 );
	t.equal( y, out, 'returns output array' );
	t.equal( isnan( y[ 0 ] ), true, 'returns expected value' );
	t.equal( isnan( y[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided positive infinity, the function returns `[NaN,NaN]`', function test( t ) {
	var out;
	var y;

	out = [ 0.0, 0.0 ];
	y = sincospi( PINF, out, 1, 0 );
	t.equal( y, out, 'returns output array' );
	t.equal( isnan( y[ 0 ] ), true, 'returns expected value' );
	t.equal( isnan( y[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `[NaN,NaN]`', function test( t ) {
	var out;
	var y;

	out = [ 0.0, 0.0 ];
	y = sincospi( NaN, out, 1, 0 );
	t.equal( y, out, 'returns output array' );
	t.equal( isnan( y[ 0 ] ), true, 'returns expected value' );
	t.equal( isnan( y[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes sin(πx) and cos(πx) for integer input', function test( t ) {
	var out;
	var c;
	var s;
	var x;
	var y;
	var i;

	x = integers.x;
	s = integers.sin;
	c = integers.cos;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		y = sincospi( x[ i ], out, 1, 0 );
		t.equal( y, out, 'returns output array' );
		t.equal( y[ 0 ], s[ i ], 'returns '+s[ i ] );
		t.equal( y[ 1 ], c[ i ], 'returns '+c[ i ] );
	}
	t.end();
});

tape( 'if provided a value exceeding `2**53` (max (unsafe) float64 integer), the function returns [0,1]', function test( t ) {
	var out;
	var x;
	var y;
	var i;

	x = pow( 2.0, 53 ) + 1.0;
	for ( i = 0; i < 100; i++ ) {
		out = [ 0.0, 0.0 ];
		y = sincospi( x + i, out, 1, 0 );
		t.equal( y, out, 'returns output array' );
		t.equal( y[ 0 ], 0.0, 'returns expected value' );
		t.equal( y[ 1 ], 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the sin(πx) and cos(πx) for fractional part equal to 1/2', function test( t ) {
	var out;
	var x;
	var y;
	var i;

	for ( i = -100; i <= 100; i++ ) {
		x = 0.5 + ( 1.0 * i );
		out = [ 0.0, 0.0 ];
		y = sincospi( x, out, 1, 0 );
		t.equal( y, out, 'returns output array' );
		t.equal( y[ 0 ], ( (i%2 === 0) ? 1.0 : -1.0 ), 'x: '+x+'. Expected: 0' );
		t.equal( y[ 1 ], 0.0, 'x: '+x+'. Expected: 0' );
	}
	t.end();
});

tape( 'the function computes the sin(πx) and cos(πx) for decimal input', function test( t ) {
	var delta;
	var out;
	var x;
	var y;
	var i;
	var s;
	var c;

	x = decimals.x;
	s = decimals.sin;
	c = decimals.cos;
	for ( i = 0; i < x.length; i++ ) {
		out = [ 0.0, 0.0 ];
		y = sincospi( x[ i ], out, 1, 0 );
		t.equal( y, out, 'returns output array' );

		if ( y[ 0 ] === s[ i ] ) {
			t.equal( y[ 0 ], s[ i ], 'x: '+x[ i ]+'. Expected: '+s[ i ] );
		} else {
			delta = abs( y[ 0 ] - s[ i ] );
			t.ok( delta <= EPS, 'within tolerance. x: '+x[ i ]+'. Value: '+y[ 0 ]+'. Expected: '+s[ i ]+'. Tolerance: '+EPS+'.' );
		}
		if ( y[ 1 ] === c[ i ] ) {
			t.equal( y[ 1 ], c[ i ], 'x: '+x[ i ]+'. Expected: '+c[ i ] );
		} else {
			delta = abs( y[ 1 ] - c[ i ] );
			t.ok( delta <= EPS, 'within tolerance. x: '+x[ i ]+'. Value: '+y[ 1 ]+'. Expected: '+c[ i ]+'. Tolerance: '+EPS+'.' );
		}
	}
	t.end();
});

tape( 'the function supports providing an output typed array', function test( t ) {
	var parts;
	var out;

	out = new Float64Array( 2 );
	parts = sincospi( NaN, out, 1, 0 );

	t.strictEqual( parts, out, 'returns output array' );
	t.equal( isnan( parts[ 0 ] ), true, 'returns expected value' );
	t.equal( isnan( parts[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = sincospi( NaN, out, 2, 0 );

	t.strictEqual( val, out, 'returns output array' );
	t.equal( isnan(val[ 0 ]), true, 'returns expected value' );
	t.strictEqual( val[ 1 ], 0, 'returns expected value' );
	t.equal( isnan( val[ 2 ]), true, 'returns expected value' );
	t.strictEqual( val[ 3 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var out;
	var val;

	out = new Float64Array( 4 );
	val = sincospi( NaN, out, 2, 1 );

	t.strictEqual( val, out, 'returns output array' );
	t.strictEqual( val[ 0 ], 0, 'returns expected value' );
	t.equal( isnan(val[ 1 ]), true, 'returns expected value' );
	t.strictEqual( val[ 2 ], 0, 'returns expected value' );
	t.equal( isnan( val[ 3 ]), true, 'returns expected value' );

	t.end();
});
