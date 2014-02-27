$(document).ready(function() {

	$('li').hover(function(){
		$(this).find('ul>li').stop().slideToggle(300, 'swing');

	});
});




//shopping cart

window.onload = function(){ 
var mainImage = document.getElementById("mainImage"); 
var img1 = document.getElementById("img1"); 
var img2 = document.getElementById("img2"); 
var img3 = document.getElementById("img3"); 
var img4 = document.getElementById("img4"); 
var img5 = document.getElementById("img5"); 

img1.onmouseover = function(){ mainImage.src = img1.src; } 
img2.onmouseover = function(){ mainImage.src = img2.src; } 
img3.onmouseover = function(){ mainImage.src = img3.src; } 
img4.onmouseover = function(){ mainImage.src = img4.src; } 
img5.onmouseover = function(){ mainImage.src = img5.src; } 
img6.onmouseover = function(){ mainImage.src = img6.src; } 
} 

//return policy

$(document).ready(function() {
	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});