window.onload = function(){
	navBarHover(true);
}

window.onscroll = function() {

	navBarColors(false);
	navBarHover(false);

	if($(window).scrollTop() === 0){
		navBarColors(true);
		navBarHover(true);
	}
}

//jquery code used to set the animations when hovering over anchors and logo in the navbar
function navBarHover(topOfPage){
	if(topOfPage){

		var hoverAnimation = $("a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#282828").css("color", "white");
		});


		hoverAnimation.mouseleave(function(){
			$(this).css("background", "white").css("color", "#282828");
		});
	}

	else{

		var hoverAnimation = $("a, #aplusplus").mouseenter(function(){
			$(this).css("background", "white").css("color", "#282828");
		});


		hoverAnimation.mouseleave(function(){
			$(this).css("background", "#282828").css("color", "white");
		});
	}
}

//changes the appearance of the navBar depending on if user scrolled all the way up or down
//uses jquery to reduce code to two lines, rather than having to use a for loop on the anchors
function navBarColors(topOfPage){
	if(topOfPage){
		$("a, #navBarContainer, #aplusplus").css("backgroundColor", "white").css("color", "#282828");
		$("#aplusplus").css("borderColor", "#282828");
	}
	else{
		$("a, #navBarContainer, #aplusplus").css("backgroundColor", "#282828").css("color", "white");
		$("#aplusplus").css("borderColor", "white");
	}

}