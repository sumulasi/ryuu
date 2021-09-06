<?php
/**
 * Displays the site header.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

$wrapper_classes  = 'site-header';
$wrapper_classes .= has_custom_logo() ? ' has-logo' : '';
$wrapper_classes .= ( true === get_theme_mod( 'display_title_and_tagline', true ) ) ? ' has-title-and-tagline' : '';
$wrapper_classes .= has_nav_menu( 'primary' ) ? ' has-menu' : '';
?>

<header id="masthead" class="<?php echo esc_attr( $wrapper_classes ); ?>" role="banner">
	<div class="container">
		<div class="row main-header">
			<div class="col-12 col-xl-3 main-header__logo">
				<?php get_template_part( 'template-parts/header/site-branding' ); ?>
			</div>
			<div class="col-12 col-xl-9 main-header__nav">
				<?php get_template_part( 'template-parts/header/site-nav' ); ?>
			</div>
		</div>
	</div>

</header><!-- #masthead -->
