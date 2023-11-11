$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
  ua = navigator.userAgent,

  gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

  scaleFix = function () {
    if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
      viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      document.addEventListener("gesturestart", gestureStart, false);
    }
  };
  
  scaleFix();
 
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

var currentYear = (new Date).getFullYear();
  $(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
  });




// DEVICE.JS AND SMOOTH SCROLLIG

function include(url){document.write('<script type="text/javascript" src="'+url+'"></script>')}
include('js/jquery.mousewheel.js');
include('js/jquery.simplr.smoothscroll.js');

  $(function () { 
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll();
    }
  });

 document.getElementById("links").addEventListener("click", function (event) {
  event.preventDefault();
  
  var popup = document.getElementById("popup");

  // Toggle the display of the popup
  popup.style.display = (popup.style.display === "none") ? "block" : "none";

  // Toggle the class on the body to apply/remove the blur effect
  document.body.classList.toggle("popup-blur");
});

// Add event listener for the close button
document.getElementById("closeBtn").addEventListener("click", function (e) {
  e.preventDefault();
  
  var popup = document.getElementById("popup");
  
  // Close the popup
  popup.style.display = "none";

  // Remove the class from the body to remove the blur effect
  document.body.classList.remove("popup-blur");
});