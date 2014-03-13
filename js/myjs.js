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
