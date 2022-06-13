$(document).ready(function(){
	$('.header-menu__hamburger').click(function(){
		$(this).toggleClass('open');
		$('.header-menu__navbar').toggleClass('active')
		$('.header-menu__buttons').toggleClass('active')
	});
}); 