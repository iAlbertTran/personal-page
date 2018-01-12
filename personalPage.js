window.onscroll = function() {
	var navBarContainer = document.getElementById("navBarContainer");
	navBarContainer.style.backgroundColor = "#282828";
	navBarContainer.style.color = "white";
	
	if($(window).scrollTop() === 0){
		navBarContainer.style.backgroundColor = "white";
		navBarContainer.style.color = "#282828";
	}
}