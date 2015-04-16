$(document).ready(function(){

	// $("h1").css("color", "black");

	$("#submit").click(function(){	
	// $("form[name='pargraphs']").children("select, input");

	var output = $("#pargraphs").val();
	// var para = ".ipsum", "+output+";
	 
	// var count = 0 
	// var para = $(".ipsum").children;
	// output = para;

// THIS NAME ATTRIBUTE MIGHT WORK, BUT NOT THIS PARTICULAR ONE 
// CHECK OVERAPI FOR MORE. 
// 	// $('.ipsum'| = output).slideDown('slow');


// THE SLIDEDOWN WORKS BUT NO TEXT IS DISPLAYED IN THE DIV	
// 	$(".ipsum").slideDown('p', output);
	// $(".ipsum").show("p", output);
	
	// $(para).slideDown('slow');
	
	// I KNOW THE NEXT LINE WORKS. IT AT LEAST SLIDESDOWN AN EMPTY DIV
	$(".ipsum").slideDown('slow');
// THIS PRINTS "WILL THIS WORK INTO DIV.Does this replace paragraphs with the desired text
 // HOW CAN I GET THESE PARAGRAPHS TO SHOW UP?"
	$(".ipsum").html("I can't figure out how to put the right number of ipsum paragraphs in the div. I did figure out how to clear the submit box and slide the div back up.")

	// $(".ipsum").children(output).css('display', 'show');



	// THIS WORKS YAY!!!
	$("#paragraphs").click(function(){
	$("#paragraphs").val("");
	$(".ipsum").slideUp('slow');
	});	
	
// THIS DOES NOTHING 
// 	$('p').contents(function(){
// 		$(".ipsum").show(output);
// 		$(".ipsum").slideDown('slow');
// 		});
	// THIS IDEA DOESN'T WORK
// 	// $('p[.ipsum| = output]').show('slow');
// 	// $('p[.ipsum| = output]').slideDown('slow');
	});	
});