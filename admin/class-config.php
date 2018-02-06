<?php
/**
 * @package WPSEO\Admin
 */

/**
 * Class WPSEO_Admin_Pages
 *
 * Class with functionality for the Yoast SEO admin pages.
 */
class WPSEO_Admin_Pages {

	/**
	 * @var string $currentoption The option in use for the current admin page.
	 */
	public $currentoption = 'wpseo';

	/**
	 * Holds the asset manager.
	 *
	 * @var WPSEO_Admin_Asset_Manager
	 */
	private $asset_manager;

	/**
	 * Class constructor, which basically only hooks the init function on the init hook
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'init' ), 20 );
		$this->asset_manager = new WPSEO_Admin_Asset_Manager();
	}

	/**
	 * Make sure the needed scripts are loaded for admin pages
	 */
	public function init() {
		if ( filter_input( INPUT_GET, 'wpseo_reset_defaults' ) && wp_verify_nonce( filter_input( INPUT_GET, 'nonce' ), 'wpseo_reset_defaults' ) && current_user_can( 'manage_options' ) ) {
			WPSEO_Options::reset();
			wp_redirect( admin_url( 'admin.php?page=' . WPSEO_Admin::PAGE_IDENTIFIER ) );
		}

		add_action( 'admin_init', array( $this, 'admin_init' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'config_page_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'config_page_styles' ) );
	}

	/**
	 * Run admin-specific actions.
	 */
	public function admin_init() {

		$page         = filter_input( INPUT_GET, 'page' );
		$tool         = filter_input( INPUT_GET, 'tool' );
		$export_nonce = filter_input( INPUT_POST, WPSEO_Export::NONCE_NAME );

		if ( 'wpseo_tools' === $page && 'import-export' === $tool && $export_nonce !== null ) {
			$this->do_yoast_export();
		}
	}

	/**
	 * Loads the required styles for the config page.
	 */
	public function config_page_styles() {
		wp_enqueue_style( 'dashboard' );
		wp_enqueue_style( 'thickbox' );
		wp_enqueue_style( 'global' );
		wp_enqueue_style( 'wp-admin' );
		$this->asset_manager->enqueue_style( 'select2' );

		$this->asset_manager->enqueue_style( 'admin-css' );
	}

	/**
	 * Loads the required scripts for the config page.
	 */
	public function config_page_scripts() {
		$this->asset_manager->enqueue_script( 'admin-script' );
		$this->asset_manager->enqueue_script( 'help-center' );

		wp_enqueue_script( 'dashboard' );
		wp_enqueue_script( 'thickbox' );

		$page = filter_input( INPUT_GET, 'page' );

		wp_localize_script( WPSEO_Admin_Asset_Manager::PREFIX . 'admin-script', 'wpseoSelect2Locale', WPSEO_Utils::get_language( WPSEO_Utils::get_user_locale() ) );

		if ( in_array( $page, array( 'wpseo_social', WPSEO_Admin::PAGE_IDENTIFIER ), true ) ) {
			wp_enqueue_media();

			$this->asset_manager->enqueue_script( 'admin-media' );
			wp_localize_script( WPSEO_Admin_Asset_Manager::PREFIX . 'admin-media', 'wpseoMediaL10n', $this->localize_media_script() );
		}

		if ( 'wpseo_tools' === $page ) {
			$this->enqueue_tools_scripts();
		}
	}

	/**
	 * Pass some variables to js for upload module.
	 *
	 * @return  array
	 */
	public function localize_media_script() {
		return array(
			'choose_image' => __( 'Use Image', 'wordpress-seo' ),
		);
	}

	/**
	 * Enqueues and handles all the tool dependencies.
	 */
	private function enqueue_tools_scripts() {
		$tool = filter_input( INPUT_GET, 'tool' );

		if ( empty( $tool ) ) {
			$this->asset_manager->enqueue_script( 'yoast-seo' );
		}

		if ( 'bulk-editor' === $tool ) {
			$this->asset_manager->enqueue_script( 'bulk-editor' );
		}
	}

	/**
	 * Runs the yoast exporter class to possibly init the file download.
	 */
	private function do_yoast_export() {
		check_admin_referer( WPSEO_Export::NONCE_ACTION, WPSEO_Export::NONCE_NAME );

		if ( ! WPSEO_Capability_Utils::current_user_can( 'wpseo_manage_options' ) ) {
			return;
		}

		$wpseo_post       = filter_input( INPUT_POST, 'wpseo' );
		$include_taxonomy = ! empty( $wpseo_post['include_taxonomy'] );
		$export           = new WPSEO_Export( $include_taxonomy );

		if ( $export->has_error() ) {
			add_action( 'admin_notices', array( $export, 'set_error_hook' ) );

		}
	}
} /* End of class */
