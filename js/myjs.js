$(document).ready(function() {

	$('li').hover(function(){
		$(this).find('ul>li').stop().slideDown(1000);

	});
});