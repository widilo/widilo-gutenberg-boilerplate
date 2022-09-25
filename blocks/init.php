<?php 
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

function widilo_gutenberg_boilerplate_assets() { 

    // Register our block script with WordPress
    wp_register_script(
        'widilo-gutenberg-boilerplate-block-js',
        plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), 
        array( 'wp-blocks', 'wp-i18n' ), 
        filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), 
        true 
    ); 

    // Enqueue the script in the editor
    register_block_type('widilo-gutenberg-boilerplate/blocks', array(
        'editor_script' => 'widilo-gutenberg-boilerplate-block-js',
    ));
}

add_action( 'init', 'widilo_gutenberg_boilerplate_assets' );