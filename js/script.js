$(function(){ //same as document.eventListener("DOMContentLoaded")
//Same as document.querySelector("#navbarToggle").addEventListener("blur", function())    
$("#navbarToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});