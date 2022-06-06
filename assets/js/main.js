$(document).ready(function(){
	$('.header-menu-actions-hamburger').click(function(){
		$(this).toggleClass('open');
		$('.header-menu-navbar').toggleClass('active')
		$('.header-menu-actions-buttons').toggleClass('active')
	});
}); 