<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress-webpack
 */

get_header();
?>

	<main id="primary" class="site-main">
		<div class="load-more-content" id="ajax-posts">
			<?php
			$dishes = new WP_Query(
				array(
					'post_type'      => 'dish',
					'post_status'    => 'publish',
					'posts_per_page' => 2,
				)
			);
			if ( $dishes->have_posts() ) {
				while ( $dishes->have_posts() ) :
					$dishes->the_post();
					the_title( '<h4 class="dish-item">', '</h4>' );
				endwhile;
				wp_reset_postdata();
			}
			?>
		</div>
		<div id="more_posts">Load More</div>
	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
