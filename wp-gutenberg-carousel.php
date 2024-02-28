<?php
/**
 * Plugin Name:       WP Gutenberg Carousel
 * Description:       Create carousel for WordPress Gutenberg editor
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-gutenberg-carousel
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wp_gutenberg_carousel_wp_gutenberg_carousel_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'wp_gutenberg_carousel_wp_gutenberg_carousel_block_init' );


/**
 * Load Swiper.js script
 */
/* function load_wp_gutenberg_carousel_script() {
  
    wp_register_script('wp-gutenberg-carousel', plugin_dir_url(__FILE__) . 'assets/wp-gutenberg-carousel.js', '1.0.0', true);
    wp_enqueue_script('wp-gutenberg-carousel');
}
add_action('wp_enqueue_scripts', 'load_wp_gutenberg_carousel_script'); */

/**
 * Load Swiper.js styles
 */
function load_wp_gutenberg_carousel_styles() {
    wp_register_style('wp-gutenberg-carousel', plugin_dir_url(__FILE__) . 'assets/wp-gutenberg-carousel.css', array(), '1.0.0');
    wp_enqueue_style('wp-gutenberg-carousel');

}
add_action('wp_enqueue_scripts', 'load_wp_gutenberg_carousel_styles');
