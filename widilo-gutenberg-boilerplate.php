<?php
/**
 * Plugin Name: widilo Gutenberg Boilerplate
 * Description: This is a Boilerplate plugin to start building Gutenberg Blocks.
 * Text Domain: widilo_gutenberg_boilerplate
 * Version: 1.0.0
 **/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

// Block Initializer.
require_once plugin_dir_path( __FILE__ ) . 'blocks/init.php';