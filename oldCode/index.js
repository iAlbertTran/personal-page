/**
 * Created by Albert on 4/9/2017.
 */

var panels = ["frontCover", "AboutMe"];

window.onload = function setUp(){
    var panels = document.getElementsByClassName("panel");
    var offset = 0;
    var windowHeight = window.innerHeight;
    for(var i =0; i < panels.length; ++i){
        panels[i].style.top = offset + "px";
        offset = offset + windowHeight;
    }
};


window.onscroll = function change() {
    var position = $(document).scrollTop();
    var navBar = document.getElementById("navBar").style;
    var navBarA = document.getElementById("navBar").getElementsByTagName("a");
    var logo = document.getElementById("logo").style;
    if (position != 0) {
        navBar.backgroundColor = "#EFEFEF";
        navBar.borderBottomColor = "#FF3B3F";
        logo.borderColor = "#FF3B3F";
        logo.color = "#FF3B3F";
        for(var i = 0; i<navBarA.length; ++i){
            navBarA[i].style.color = "#FF3B3F";
            navBarA[i].style.borderColor = "#EFEFEF";
        }
    }
    else if(position === 0){
        navBar.backgroundColor = "#FF3B3F";
        navBar.borderBottomColor = "#EFEFEF";
        logo.borderColor = "#EFEFEF";
        logo.color = "#EFEFEF";
        for(var i = 0; i<navBarA.length; ++i){
            navBarA[i].style.color = "#EFEFEF";
            navBarA[i].style.borderColor = "#FF3B3F";
        }
    }
};

document.getElementById("coverArrow").onclick = function(){
    var pos = document.getElementById("AboutMe").style.top;
    $("html, body").animate({ scrollTop: pos }, 1000);
};

document.addEventListener('click', function(clickedLink) {
    var id = panels[parseFloat(clickedLink.target.id)];
    var pos = document.getElementById(id).style.top;
    $("html, body").animate({ scrollTop: pos }, 1000);

});