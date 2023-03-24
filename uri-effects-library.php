<?php
/**
 * Plugin Name: URI Effects Library
 * Plugin URI: http://www.uri.edu
 * Description: Effects Library
 * Version: 0.2.0
 * Author: URI Web Communications
 * Author URI:
 *
 * @author: Brandon Fuller <bjcfuller@uri.edu>
 * @package uri-effects-library
 */

// Block direct requests
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

/**
 * Include css and js
 */
function uri_el_enqueues() {

	wp_register_style( 'uriel-css', plugins_url( '/css/el.built.css', __FILE__ ) );
	wp_enqueue_style( 'uriel-css' );

	wp_register_script( 'uriel-js', plugins_url( '/js/el.built.js', __FILE__ ) );
	wp_enqueue_script( 'uriel-js' );

}
add_action( 'wp_enqueue_scripts', 'uri_el_enqueues' );

// Enable styles in the WYSIWYG Editor
if ( is_admin() ) {
	add_editor_style( plugins_url( 'css/el.built.css', __FILE__ ) );
}
