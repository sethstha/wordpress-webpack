<?php
function theme_function() {
	register_post_type(
		'dish',
		array(
			'labels'      => array(
				'name'          => __( 'Dish', '_s' ),
				'singular_name' => __( 'Dishes', '_s' ),
			),
			'public'      => true,
			'has_archive' => false,
			'rewrite'     => array( 'slug' => 'dish' ),
		)
	);
}

add_action( 'init', 'theme_function' );
