$(document).ready(function() {
 
//      // .mouseenter
//      // .mouseleave
//      // .click 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
//     $("h2").mouseenter(function (){
//         $("#hr_html").addClass("lightBlueBackground");
//         $("#hr_mysql").addClass("lightBlueBackground");
//         $("#hr_python").addClass("lightBlueBackground");
//         $("#hr_jquery").addClass("lightBlueBackground");
//         $("#hr_django").addClass("lightBlueBackground");
//         $("#hr_css").addClass("lightBlueBackground");
//     });  // Works on console but makes ALL of them light blue in the background.

//     $("#hr_html").mouseenter(function(){
//         $("#hr_html").css("font-size", "20px");
//     }); // WORKS ON CONSOLE 

//     $("p").click(function(){
//         $(".card_para").css("color", "red");
//     });  // Works on console!

//     $(".bottom_button").mouseenter(function(){
//         $("#container").css("background-color", "#000");
//     });
//     $(".bottom_button").mouseleave(function(){
//         $("#container").css("background-color", "#A9A9A9");
//     });  // Both of these work on the console 

//     $("#firstButton").click(function(){
//         $("#firstButton").hide(2000);
//     }); // Works on console

//     $("#secondButton").click(function(){
//         $("#secondPara").slideToggle();
//         $("#secondPara").slideToggle();
//     }); // Works on console

//     $("#thirdButton").mouseenter(function(){
//         $("#thirdButton").fadeTo(1000, 0.5);
//     });
//     $("#thirdButton").mouseleave(function(){
//         $("#thirdButton").fadeTo(1000, 1);
//     }); //Works on console

//     $(".card_para").click(function(){
//         $(".card_para").children("a").css("background-color", "yellow");
//     });   // traversing through the DOM - actioning anchor tags without a class or ID 

//     /*--- TRAVERSING THROUGH THE DOM SIDEWAYS --- */

//     $(".card_image").click(function(){
//         var someCards = $(this).next();
//         someCards.next().slideDown();
//     }); // working fine for 4 of the cards

    /* TUTOR TO LOOK AT */

    $(".card").click(function(){
        $(this).toggleClass("pinkBackground");
    });  // Works on console 

    /* difficult challenge... */

    $("#select").clicked(function(){
        $(".card:not(.highlight_stream)").hide();
    });

    $("#all").clicked(function(){
        $(".card").show();
    });




}); 
