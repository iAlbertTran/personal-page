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

/*window.onresize = function(){
    var textContainer = document.getElementById("textContainer");
    var textContainerWidth = textContainer.getBoundingClientRect().width;
    textContainer.style.fontSize = textContainerWidth / 11 + "px";
    //textContainer.style.fontSize = textContainer.style
}*/

//jquery code used to set the animations when hovering over anchors and logo in the navbar
function navBarHover(topOfPage){
	//when scrolled all the way to the top page
	if(topOfPage){
		//mouseenter for hovering
		var hoverAnimation = $("#navBar > a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#FF3b3F").css("color", "#F8F8F8");
		});

		//mouseleave for when no longer hovering
		hoverAnimation.mouseleave(function(){
			$(this).css("background", "#F8F8F8").css("color", "#282828");
		});
	}
	else{

		var hoverAnimation = $("#navBar > a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#FF3b3F").css("color", "#282828");
		});


		hoverAnimation.mouseleave(function(){
			$(this).css("background", "#282828").css("color", "#F8F8F8");
		});
	}
}

//changes the appearance of the navBar depending on if user scrolled all the way up or down
//uses jquery to reduce code to two lines, rather than having to use a for loop on the anchors
function navBarColors(topOfPage){
	//when scrolled all the way to the top page
	if(topOfPage){

		$("#navBar > a, #navBarContainer, #aplusplus").css("backgroundColor", "#F8F8F8").css("color", "#282828");
		$("#aplusplus").css("borderColor", "#FF3b3F");

	}

	else{

		$("#navBar > a, #navBarContainer, #aplusplus").css("backgroundColor", "#282828").css("color", "#F8F8F8");
		$("#aplusplus").css("borderColor", "#FF3b3F");

	}

}



//uses an event listener for a click to animate scrolling to a section of the webpage
document.getElementById("navBar").addEventListener('click', scrollAnimation);
document.getElementById("arrowContainer").addEventListener('click', scrollAnimation);

function scrollAnimation(clickedLink){

	//hard code what splitHref is when the double arrow is clicked because the function reads the arrow instead of its container.
	if(clickedLink.target.id == "arrow")
		var splitHref = "#aboutMe";

	//splits the href of the anchor by '#' to guarantee the second element of the array is the id of the div the anchor is linked to
	//for example, when "About" is clicked, splitHref contains "#aboutMe".
	else
		var splitHref = '#' + clickedLink.target.href.split("#")[1];

	//gets the offset of splitHref to find how far from the top it is
	var pageSectionPosition = $(splitHref).offset().top;

	//animates the scrolling function by making the scrollTop of the body change over 1000ms
	$("html, body").animate({scrollTop: pageSectionPosition}, 1000);
	//console.log(($(targetDiv).offset().top));
}