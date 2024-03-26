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


function wp_gutenberg_carousel_wp_gutenberg_carousel_block_init() {

    register_block_type( __DIR__ . '/build' );

    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'wp-gutenberg-carousel-item',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'wp-gutenberg-carousel-item-style',
        plugins_url( 'build/index.css', __FILE__ ),
        array(),
        $asset_file['version']
    );

    register_block_type('wp-gutenberg/carousel-dynamic-feeback', array(
        'api_version' => 2,
        'editor_script' => 'wp-gutenberg-carousel-item',
        'editor_style' => 'wp-gutenberg-carousel-item-style',
        'render_callback' => 'render_feedback_content',
    ) );
}
add_action( 'init', 'wp_gutenberg_carousel_wp_gutenberg_carousel_block_init' );




function render_feedback_content($attributes) {
    $post = get_post( $attributes['articleId'] );
    $text_content = get_field('feedback_text', $post);
    $feedback = '<div class="swiper-slide">
    <h1>' . $post->post_title . '</h1>
    <p>' . $text_content . '</p> 
    </div>';
	return $feedback;
 }

/* function load_wp_gutenberg_carousel_styles() {
    wp_register_style('wp-gutenberg-carousel', plugin_dir_url(__FILE__) . 'assets/wp-gutenberg-carousel.css', array(), '1.0.0');
    wp_enqueue_style('wp-gutenberg-carousel');

}
add_action('wp_enqueue_scripts', 'load_wp_gutenberg_carousel_styles');
 */
