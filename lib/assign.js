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

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
var abs = require( '@stdlib/math-base-special-abs' );
var sincos = require( '@stdlib/math-base-special-sincos' ).assign;
var floor = require( '@stdlib/math-base-special-floor' );
var PI = require( '@stdlib/constants-float64-pi' );
var copysign = require( '@stdlib/math-base-special-copysign' );


// MAIN //

/**
* Simultaneously computes the sine and cosine of a number times π.
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} two-element array containing sin(πx) and cos(πx)
*
* @example
* var v = sincospi( 0.0, [0.0, 0.0], 1, 0 );
* // returns [ 0.0, 1.0 ]
*
* @example
* var v = sincospi( 0.5, [0.0, 0.0], 1, 0 );
* // returns [ 1.0, 0.0 ]
*
* @example
* var v = sincospi( 0.1, [0.0, 0.0], 1, 0 );
* // returns [ ~0.309, ~0.951 ]
*
* @example
* var v = sincospi( NaN, [0.0, 0.0], 1, 0 );
* // returns [ NaN, NaN ]
*/
function sincospi( x, out, stride, offset ) {
	var tmp;
	var ix;
	var ar;
	var r;

	if ( isnan( x ) || isInfinite( x ) ) {
		out[ offset ] = NaN;
		out[ offset+stride ] = NaN;
		return out;
	}
	r = x % 2.0;
	ar = abs( r );
	if ( ar === 0.0 || ar === 1.0 ) {
		ix = floor( ar );
		out[ offset ] = copysign( 0.0, r );
		out[ offset+stride ] = ( ix%2 === 1 ) ? -1.0 : 1.0;
		return out;
	}
	if ( ar < 0.25 ) {
		return sincos( PI*r, out, stride, offset );
	}
	if ( ar < 0.75 ) {
		ar = 0.5 - ar;
		sincos( PI*ar, out, stride, offset );
		tmp = out[ offset ];
		out[ offset ] = copysign( out[ offset+stride ], r );
		out[ offset+stride ] = tmp;
		return out;
	}
	if ( ar < 1.25 ) {
		r = copysign( 1.0, r ) - r;
		sincos( PI*r, out, stride, offset );
		out[ offset+stride ] *= -1;
		return out;
	}
	if ( ar < 1.75 ) {
		ar -= 1.5;
		sincos( PI*ar, out, stride, offset );
		tmp = out[ offset ];
		out[ offset ] = -copysign( out[ offset+stride ], r );
		out[ offset+stride ] = tmp;
		return out;
	}
	r -= copysign( 2.0, r );
	return sincos( PI*r, out, stride, offset );
}


// EXPORTS //

module.exports = sincospi;
