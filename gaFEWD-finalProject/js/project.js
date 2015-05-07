// $(document).ready(function(){

	// Intro banner animation
	// $("#banner").show().delay(1000).animate({
	// 	top:"100%"
	// },2000);

// });
$(document).ready(function(){
	$("#address").click(function(){
		$("#address").val("")
	});

	$("#submit").click(function(){
		$("#neighborhood").slideDown(1000);
	});

	$(".transportation").click(function(){
		$("#transportation").slideDown(1000);
	});

});