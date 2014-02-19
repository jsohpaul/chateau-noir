$(document).ready(function() {

	$('li').hover(function(){
		$(this).find('ul>li').stop().slideToggle(300, 'swing');

	});
});