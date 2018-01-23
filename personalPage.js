var frontCoverStartPos;
var aboutStartPos;
var portfolioStartPos;
var contactStartPos;
var windowPosition;
var currentSection;

window.onload = function(){
	var atTop = false;
	windowPosition = $(window).scrollTop();

	if(windowPosition == 0)
		atTop = true;
	navBarHover(atTop);
	navBarColors(atTop);
	typingAnimation("portfolio");
	typingAnimation("about");
	typingAnimation("contact");
	adjustSectionTitle("about", 12);
	adjustSectionTitle("portfolio", 12);
	adjustSectionTitle("contact", 12);

	frontCoverStartPos = $('#frontCover').offset().top;
	aboutStartPos = $('#aboutMe').offset().top;
	portfolioStartPos = $('#myPortfolio').offset().top;
	contactStartPos = $('#contactMe').offset().top;

	currentSection = highlightButton();
}

window.onscroll = function() {
	windowPosition = $(window).scrollTop();

	navBarColors(false);
	navBarHover(false);
	currentSection = highlightButton();
	transparentBG(document.getElementById("aboutContentContainer"));
	//transparentBG(document.getElementById("aboutTitleContainer"));

	if($(window).scrollTop() === 0){
		navBarColors(true);
		navBarHover(true);
	}
}

window.onresize = function(){
	adjustSectionTitle("about", 12);
	adjustSectionTitle("portfolio", 12);
	adjustSectionTitle("contact", 12);
}

//adjusts the size of the text to fit the title container, as well as the position
//takes in the section title and number of letters in the titlev to properly format it
function adjustSectionTitle(section, letters){
	var sectionTitleContainer = document.getElementById(section + "TitleContainer");
	var sectionTitle = document.getElementById(section + "Title");
	sectionTitle.style.fontSize = sectionTitleContainer.clientWidth / letters + "px";

	var sectionContentContainer = document.getElementById(section + "ContentContainer");
	sectionTitleContainer.style.top = sectionContentContainer.clientHeight/20 + "px";
}

//jquery code used to set the animations when hovering over anchors and logo in the navbar
function navBarHover(topOfPage){
	//when scrolled all the way to the top page
	if(topOfPage){
		//mouseenter for hovering
		$("#navBar > a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#FF3b3F").css("color", "#F8F8F8");
		});

		//mouseleave for when no longer hovering
		$("#about, #portfolio, #contact, #aplusplus").mouseleave(function(){
			$(this).css("background", "#F8F8F8").css("color", "#282828");
		});
		$("#top").mouseleave(function(){
			$(this).css("background", "#FF3b3F").css("color", "#F8F8F8");
		});
	}
	else{
		var hoverAnimation = $("#navBar > a, #aplusplus").mouseenter(function(){
			$(this).css("background", "#FF3b3F").css("color", "#282828");
		});

		hoverAnimation.mouseleave(function(){
			$(this).css("background", "#282828").css("color", "#F8F8F8");
		});

		$(currentSection).mouseleave(function(){
			$(this).css("background", "#FF3b3F").css("color", "#282828");
		});


	}
}

//changes the appearance of the navBar depending on if user scrolled all the way up or down
//uses jquery to reduce code to two lines, rather than having to use a for loop on the anchors
function navBarColors(topOfPage){
	//when scrolled all the way to the top page
	if(topOfPage){

		$("#about, #portfolio, #contact, #navBarContainer, #aplusplus").css("backgroundColor", "#F8F8F8").css("color", "#282828");
		$("#aplusplus").css("borderColor", "#FF3b3F");

	}

	else{

		$("#navBar > a, #navBarContainer, #aplusplus").css("backgroundColor", "#282828").css("color", "#F8F8F8");
		$("#aplusplus").css("borderColor", "#FF3b3F");


	}

}


//highlights the button in the navbar that corresponds to the current section being viewed
//subtracts by sectionMidPoint so transition of highlights begin when atleast half of the next section is visible.
function highlightButton(){
	//gets the height of a section / 2, all sections are equal height
	var sectionMidPoint = document.getElementById("frontCover").getBoundingClientRect().height / 2;
	switch(true){
		case(windowPosition === 0):
			var top = document.getElementById("top");
			top.style.backgroundColor = "#FF3B3F";
			top.style.color = "#F8F8F8";
			return("#top");

		case (windowPosition > 0 && windowPosition < aboutStartPos - sectionMidPoint):
			var top = document.getElementById("top");
			top.style.backgroundColor = "#FF3B3F";
			top.style.color = "#282828";
			return("#top");

		case (windowPosition >= aboutStartPos - sectionMidPoint && windowPosition < portfolioStartPos - sectionMidPoint):
			var about = document.getElementById("about");
			about.style.backgroundColor = "#FF3B3F";
			about.style.color = "#282828";
			return("#about");

		case (windowPosition >= portfolioStartPos - sectionMidPoint && windowPosition < contactStartPos - sectionMidPoint):
			var portfolio = document.getElementById("portfolio");
			portfolio.style.backgroundColor = "#FF3B3F";
			portfolio.style.color = "#282828";
			return("#portfolio");

		case (windowPosition >= contactStartPos - sectionMidPoint):
			var contact = document.getElementById("contact");
			contact.style.backgroundColor = "#FF3b3F";
			contact.style.color = "#282828";
			return("#contact");

	}

}

//makes the about section text box transparent when scrolling, then solid when not, fun little style change
function transparentBG(element){
	element.style.background = "rgba(40, 40, 40, 0.25)";
	setTimeout(function(){
		element.style.background = "rgba(40, 40, 40, 1)"
	}, 500);
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
}


//a animation for section titles to give the look of typing
function typingAnimation(section){
	//actual typing animation
	var sectionTitle = document.getElementById(section + "Title");
	sectionTitle.style.width = "100%";
	setInterval(function(){

		if(sectionTitle.style.width == "0px"){
			sectionTitle.style.width = "100%";
			sectionTitle.style.transitionDuration = "2.5s";
		}
		else{
			sectionTitle.style.width = "0px";
			sectionTitle.style.transitionDuration = "1s";
		}

	}, 3500);


	//code for the blinking cursor animation using the div border
	sectionTitle.style.borderRight = "solid rgba(255, 59, 63)";
	setInterval(function(){
		if(sectionTitle.style.borderRight === "solid rgb(255, 59, 63)")
			sectionTitle.style.borderRight = "solid transparent";
		else
			sectionTitle.style.borderRight = "solid rgb(255, 59, 63)";
	}, 500);
}