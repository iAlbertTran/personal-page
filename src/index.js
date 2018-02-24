import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import me from './img/me.png';
let aboutStartPos;
let portfolioStartPos;
let contactStartPos;
let windowPosition;
let currentSection;


class Title extends React.Component{
	render(){
		let title = this.props.id;
		title += "Title";

		return(
			<div id={title}>{this.props.title}</div>
		);
	}
}

class TitleBox extends React.Component{
	render(){
		let titleBox = this.props.id;
		titleBox += "TitleBox";

		return(
			<div id={titleBox}>
				<Title id={this.props.id} title={this.props.title.toUpperCase()}/>
			</div>
		);
	}
}
class TitleContainer extends React.Component{

	render(){
		let title = this.props.id;
		title += "TitleContainer";

		return(
			<div id={title}>
				<TitleBox id={this.props.id} title={this.props.title}/>
			</div>
		);
	}
}


class Content extends React.Component{
	render(){
		let contentContainer = this.props.id + "ContentContainer";

		let content;
		switch (this.props.id){
			case "about":
				content = (
					<div id={contentContainer}>
						<div id="photoContainer">
		                	<img id="me" src={me} alt="me"/>
		            	</div>
		            	<div id="aboutTxtContainer">
		                	<p id="aboutMeTxt">
			                    Hello! My name is Albert and I'm a 22 year old web developer based in the Bay Area! I'm a recent college graduate from the University of California, Davis with a Bachelor's of Science in Computer Science.<br/><br/>
			                    Regardless if its a static web page or a dynamic web application, I love the process of taking a website from an idea all the way up to deployment. Being able to create something that's visually and functionally beautiful is what motivates and excites me most about web development. It is my passion, my profession, and, soon, my employee position!<br/><br/>

			                    My interests include Software Development and UI / UX Design. I enjoy playing video games, watching basketball and movies, as well as just hanging out and socializing!<br/><br/>

			                    I'm always looking to better myself. If you'd like to learn more about what I can offer, continue on!<br/><br/>
			                    <em id="quote">"Tell me and I forget, teach me and I may remember, involve me and I learn"<br/></em>
			                    <em id="author">- Benjamin Franklin</em>
		                	</p>
	            		</div>
	            	</div>
				);
				break;

			case "portfolio":
				content = (
					<div id={contentContainer}>
			            <div className="drop" id="currentContainer" onClick={() => this.props.onClick("current")}>
			                <a>Learned</a>
			                <div id="current">
			                    <i className="devicon-html5-plain-wordmark colored"></i>
			                    <i className="devicon-css3-plain-wordmark colored"></i>
			                    <i className="devicon-javascript-plain colored"></i>
			                    <i className="devicon-postgresql-plain-wordmark colored"></i>
			                    <i className="devicon-python-plain-wordmark colored"></i>
			                </div>
			            </div>



			            <div className="drop" id="inProgressContainer" onClick={() => this.props.onClick("inProgress")}>
			                <a>In Progress...</a>
			                <div id="inProgress">
			                    <i className="devicon-react-original-wordmark colored"></i>
			                </div>
			            </div>



			            <div className="drop" id="nextContainer" onClick={() => this.props.onClick("next")}>
			                <a>Next</a>
			                <div id="next">
			                    <i className="devicon-nodejs-plain-wordmark colored"></i>
			                    <i className="devicon-mysql-plain-wordmark colored"></i>
			                </div>
			            </div>


			            <div id="projectContainer">
			                <a href="https://ialberttran.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
			                    <div id="weatherApp">
			                        <div className="colorBox">
			                            <p>Weather App</p>
			                        </div>
			                    </div>
			                </a>
			                <a href="https://ialberttran.github.io/quote-machine/" target="_blank" rel="noopener noreferrer">
			                    <div id="quoteMachine">
			                        <div className="colorBox">
			                            <p>Quote Machine</p>
			                        </div>
			                    </div>
			                </a>

			                <a href="https://ialberttran.github.io/checkers/" target="_blank" rel="noopener noreferrer">
			                    <div id="checkers">
			                        <div className="colorBox">
			                            <p>Checkers</p>
			                        </div>
			                    </div>
			                </a>
			            </div>
			       	</div>
			    );
				break;
			case "contact":
				content = (
					<div id={contentContainer}>
			            <form method="POST" action="https://formspree.io/albtran@ucdavis.edu" target="_blank">
			                <div id="email">
			                    <i className="fa fa-envelope"></i>
			                    <p className="username">AlbTran@ucdavis.edu</p>
			                </div>
			                <input type="email" required name="email" placeholder="Email"/>
			                <textarea name="message" required placeholder="How can I help you?"></textarea>
			                <button type="submit">Send</button>
			            </form>
					</div>
				);
				break;

			default:
				break;
		}

			return content;
		}
}

class Section extends React.Component{
	
	render(){
		return(
			<div id={this.props.id} className={this.props.className}>
				<div className="sectionContainer">
					<TitleContainer id={this.props.id} title={this.props.title}/>
					<Content id={this.props.id} onClick={this.props.onClick}/>
				</div>
			</div>
		);
	}
}

class FrontCover extends React.Component{
	render(){
		return(
			<div id={this.props.id} className={this.props.className}>
		        <div id="frontCoverOverlay">
		            <div id="textContainer">
		                <p id="line1">Albert T. Tran</p>
		                <p id="line2">Web Developer</p>
		                <p id="line3">Bay Area, California</p>
		            </div>
		            <a href="#aboutMe" id="arrowContainer" onClick={() => this.props.onClick('about')} >

		                <i id="arrow" className="fa fa-angle-double-down animated infinite bounce"></i>

		            </a>

		        </div>
		    </div>
		);
	}
}

class Footer extends React.Component{

	render(){
		return(

				<div id="connectionsContainer">

	                <a href="https://www.linkedin.com/in/alberttran17/" target="_blank" rel="noopener noreferrer">
	                    <div id="linkedIn">
	                        <i className="fa-fw fab fa-linkedin"></i>
	                    </div>
	                </a>

	                <a href="https://github.com/iAlbertTran" target="_blank" rel="noopener noreferrer">
	                    <div id="github">
	                        <i className="fa-fw fab fa-github"></i>
	                    </div>
	                </a>

	                <a href="https://www.facebook.com/albert.tran.77" target="_blank" rel="noopener noreferrer">
	                    <div id="facebook">
	                        <i className="fa-fw fab fa-facebook-square"></i>
	                    </div>
	                </a>

	                <a>
	                    <div id="skype">
	                        <i className="fa-fw fab fa-skype"></i>
	                    </div>
	                </a>

	                <a href="https://www.freecodecamp.org/ialberttran" target="_blank" rel="noopener noreferrer">
	                    <div id="fcc">
	                        <i className="fa-fw fab fa-free-code-camp"></i>
	                    </div>
	                </a>

			    </div>

		);
	}
}

function AnchorIcon(props){
	let classes = "fa-fw " + props.fontAwesome;
	return(
		<i className={classes}></i>
	);
}

function NavAnchor(props){
	let anchorClasses = "anchor " + props.specificAnchor;
	let href = "#" + props.specificAnchor;
	return (
		<a className={anchorClasses} href={href} onClick={props.onClick}>
			<AnchorIcon fontAwesome={props.fontAwesome} />
			{props.specificAnchor.toUpperCase()}
		</a>
	);
}

function NavBar(props){
	let mobile = false;
	mobile = (window.innerWidth < 767);

	let navBar = (!mobile) ? 
		<div id="navBar">
			<NavAnchor 
            	specificAnchor="home" 
            	onClick={() => props.onClick('home')} 
            	fontAwesome = "far fa-arrow-alt-circle-up"
            />

            <NavAnchor 
            	specificAnchor="about" 
            	onClick={() => props.onClick('about')} 
            	fontAwesome = "far fa-address-card"
            />

            <NavAnchor 
            	specificAnchor="portfolio" 
            	onClick={() => props.onClick('portfolio')} 
            	fontAwesome = "fas fa-cogs"
            />

            <NavAnchor 
            	specificAnchor="contact" 
            	onClick={() => props.onClick('contact')} 
            	fontAwesome = "far fa-envelope"
            />
		</div>: 

		<i id="hamburgerMenu" className="fa fa-bars"></i>;
	return navBar;

}

class Navigation extends React.Component{
	render(){

		return(
			<div id="navBarContainer">

		        <div id="aplusplus">A++</div>

		        <NavBar onClick={this.props.onClick}/>

	    	</div>
		);
	}
}

class Site extends React.Component{
	constructor(props){
		super(props);
		this.state = {mobile: null}
	}

	handleClick(clickedLink){
		const splitHref = '#' + clickedLink;

		//gets the offset of splitHref to find how far from the top it is
		var pageSectionPosition = $(splitHref).offset().top;

		//animates the scrolling function by making the scrollTop of the body change over 1000ms
		$("html, body").animate({scrollTop: pageSectionPosition}, 500);
	}

	//expands the list of skills on the portoflio section
	expand(target) {
	    //gets what was clicked minus "Container" to expand the content;
	    let content = document.getElementById(target);

	    //switch case for window size (mobile or desktop). 
	    //If desktop, containers are to the right of anchors
	    //if mobile, containers are below anchors
	    switch (true) {

	        case (window.innerWidth > 767):
	            if (content.style.width === "100%")
	                content.style.width = "0px";
	            else
	                content.style.width = "100%";
	            break;

	        case (window.innerWidth <= 767):
	            if (content.style.height === "100%") {
	                content.style.height = "0px";
	                content.style.display = "none";
	            }
	            else {
	                content.style.height = "100%";
	                content.style.display = "flex";
	            }
	            break;

	        default:
	        	break;
	    }

	}


	render(){

		return(
			<div>
				<FrontCover id="home" className="section"
					onClick={(clickedLink) => this.handleClick(clickedLink)}
				/>
				<Navigation 
					onClick={(clickedLink) => this.handleClick(clickedLink)}
				/>
				<Section id="about" className="section" title="About Me"/>
				<Section id="portfolio" className="section" title="Portfolio" onClick={(clickedLink) => this.expand(clickedLink)}/>
				<Section id="contact" className="section" title="Connect With Me"/>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<Site/>, document.getElementById('root'));


window.onload = function(){

	windowPosition = $(window).scrollTop();

	typingAnimation("portfolio");
	typingAnimation("about");
	typingAnimation("contact");
	//adjustSectionTitle("about", 10);
	//adjustSectionTitle("portfolio", 10);
	//adjustSectionTitle("contact", 10);

	//frontCoverStartPos = $('#frontCover').offset().top;
	aboutStartPos = $('#about').offset().top;
	portfolioStartPos = $('#portfolio').offset().top;
	contactStartPos = $('#contact').offset().top;

	let nav = document.getElementById("navBarContainer");

	if($(window).scrollTop() >= aboutStartPos){
			nav.style.position = "fixed";
	}
	else
		nav.style.position = "static";
	if(window.innerWidth > 767)
    	currentSection = highlightButton();
}

window.onscroll = function() {
	windowPosition = $(window).scrollTop();

	//transparentBG(document.getElementById("aboutContentContainer"));
	//transparentBG(document.getElementById("aboutTitleContainer"));

	let nav = document.getElementById("navBarContainer");

	if($(window).scrollTop() >= aboutStartPos){
			nav.style.position = "fixed";
			nav.style.padding = 0;
	}
	else{
		nav.style.position = "static";
		nav.style.padding = "1% 0";
	}

	navBarColors();

	if(window.innerWidth > 767)
		currentSection = highlightButton();
}

window.onresize = function () {
}


//jquery code used to set the animations when hovering over anchors and logo in the navbar
function navBarHover(color){
		//mouseenter for hovering
		$("#navBar > a").mouseenter(function(){
			$(this).css("borderBottom", color + " solid");
		});

		//mouseleave for when no longer hovering
		$("#navBar > a").mouseleave(function(){
			$(this).css("borderBottom", "transparent solid");
		});
		$(currentSection).mouseleave(function(){
			$(this).css("borderBottom", color + " solid");
		});
}

//changes the appearance of the navBar depending on if user scrolled all the way up or down
//uses jquery to reduce code to two lines, rather than having to use a for loop on the anchors
function navBarColors(){
		$("#navBar > a").css("borderBottom", "transparent solid");
}


//highlights the button in the navbar that corresponds to the current section being viewed
//subtracts by sectionMidPoint so transition of highlights begin when atleast half of the next section is visible.
function highlightButton(){
	//gets the height of a section / 2, all sections are equal height
	var sectionMidPoint = document.getElementById("about").getBoundingClientRect().height / 2;
	switch(true){
		case(windowPosition === 0):
			let home = document.getElementsByClassName("home")[0];
			home.style.borderBottom = "#FF3b3F solid";
			$("#navBar a .fa-fw").css("color","#FF3b3F");
			$("#aplusplus").css("border", "#FF3b3F solid");
			navBarHover("#FF3b3F");
			return(".home");

		case (windowPosition > 0 && windowPosition < aboutStartPos - sectionMidPoint):
			home = document.getElementsByClassName("home")[0];
			home.style.borderBottom = "#FF3b3F solid";
			$("#navBar a .fa-fw").css("color","#FF3b3F");
			$("#aplusplus").css("border", "#FF3b3F solid");
			navBarHover("#FF3b3F");
			return(".home");

		case (windowPosition >= aboutStartPos - sectionMidPoint && windowPosition < portfolioStartPos - sectionMidPoint):
			let about = document.getElementsByClassName("about")[0];
			about.style.borderBottom = "#FF3b3F solid";
			$("#navBar a .fa-fw").css("color","#FF3b3F");
			$("#aplusplus").css("border", "#FF3b3F solid");
			navBarHover("#FF3b3F");
			return(".about");

		case (windowPosition >= portfolioStartPos - sectionMidPoint && windowPosition < contactStartPos - sectionMidPoint):
			let portfolio = document.getElementsByClassName("portfolio")[0];
			portfolio.style.borderBottom = "#65CCB8 solid";
			$("#navBar a .fa-fw").css("color","#65CCB8");
			$("#aplusplus").css("border", "#65CCB8 solid");
			navBarHover("#65CCB8");
			return(".portfolio");

		case (windowPosition >= contactStartPos - sectionMidPoint):
			let contact = document.getElementsByClassName("contact")[0];
			contact.style.borderBottom = "#F76C6C solid";
			$("#navBar a .fa-fw").css("color","#F76C6C");
			$("#aplusplus").css("border", "#F76C6C solid");
			navBarHover("#F76C6C");
			return(".contact");

		default: break;

	}

}


//a animation for section titles to give the look of typing
function typingAnimation(section){
	//actual typing animation
	let sectionTitle = document.getElementById(section + "Title");
	let sectionTitleContainer = document.getElementById(section + "TitleContainer").style.borderBottom;
	sectionTitle.style.width = "100%";
	setInterval(function(){

		if(sectionTitle.style.width === "0px"){
			sectionTitle.style.width = "100%";
			sectionTitle.style.transitionDuration = "2s";
		}
		else{
			sectionTitle.style.width = "0px";
			sectionTitle.style.transitionDuration = "1s";
		}

	}, 3000);


	//code for the blinking cursor animation using the div border
	sectionTitle.style.borderRight = sectionTitleContainer;
	setInterval(function(){
		if(sectionTitle.style.borderRight === sectionTitleContainer)
			sectionTitle.style.borderRight = "solid transparent";
		else
			sectionTitle.style.borderRight = sectionTitleContainer;
	}, 500);
}