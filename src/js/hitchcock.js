/**
 * HITCHCOCK
 *
 * @package uri-effects-library
 */

( function() {

	'use strict';

	window.addEventListener( 'load', initHitchcock, false );

	function initHitchcock() {
		var heros, els, i;

		heros = document.querySelectorAll( '.cl-hero' );

		for ( i = 0; i < heros.length; i++ ) {

			els = heros[i].querySelectorAll( '.el-hitchcock' );
			if ( 2 == els.length ) {
				els[0].classList.add( 'el-hitchcock-backdrop' );
				els[1].classList.add( 'el-hitchcock-cutout' );
				heros[i].classList.add( 'el-ready' );
			}

		}

	}

})();
