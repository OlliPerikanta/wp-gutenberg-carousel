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

    register_block_type( __DIR__ . '/build/carousel-container' );
    register_block_type( __DIR__ . '/build/carousel-item-dynamic-feedback', array(
		'render_callback' => 'render_feedback_content'
	) );
}
add_action( 'init', 'wp_gutenberg_carousel_wp_gutenberg_carousel_block_init' );


function render_feedback_content($attributes) {
    $post = get_post( $attributes['articleId'] );
    $text_content = get_field('feedback_text', $post);
    $feedback = '<div class="swiper-slide dynamic-feeback__content-box">
    <p><i>' . $text_content . '</i></p> 
    <h3>' . $post->post_title . '</h3>
    </div>';
	return $feedback;
 }
