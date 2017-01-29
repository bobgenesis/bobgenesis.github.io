//============================ TESTING:  ============================ //
$(window).bind(
  'touchmove',
   function(e) {
    e.preventDefault();
  }
);
document.ontouchmove = function(event){
event.preventDefault(); 
}
document.onTouchMove = function(e) {
    e.stopPropagation(); e.stopImmediatePropagation();
}
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};
//============================ Checks whether storage works (private mode?)  ============================ //
if (typeof(Storage) !== "undefined") {
} else {
alert("Game is broken! Turn off private mode!")
} 
//============================ Checks whether storage works (private mode?)  ============================ //
////
// --------------------------------------------------------- //
// ++++++++++++++++++++++++ Game ++++++++++++++++++++++++ //
// --------------------------------------------------------- //
////
//___________________GAME FUNCTION / CHECKER___________________ //
function newgame() { //Restart Game//
var ng = confirm("This will reset your current progress, continue?");
if (ng == true) {
localStorage.removeItem("bobs");
localStorage.removeItem("autoclick");
localStorage.removeItem("AClvl");
localStorage.AClvl = 0;
localStorage.removeItem("priceAC");
localStorage.priceAC = 100;
document.getElementById("autoclickshop").style.display = "block";
document.getElementById("autoclickshopbrought").style.display = "none";
document.getElementById("upgradeautoclick").style.display = "none";
document.getElementById("cbob").innerHTML = "0";
document.getElementById("msgPBACR").style.display = "block";
document.getElementById("Nmb20").style.display = "block";
Bps();
localStorage.bobs = 0;
alert("Reset: successful!");
CLOSEshop();
} else {
    alert("Good choice!")
}
}
//Checks Autoclick [whether brought or not]//
if (localStorage.autoclick == 2) {
document.getElementById("autoclickshop").style.display = "none";
document.getElementById("autoclickshopbrought").style.display = "block";
document.getElementById("upgradeautoclick").style.display = "block";
document.getElementById("msgPBACR").style.display = "none"; 
}
else {
localStorage.autoclick = 1
document.getElementById("msgPBACR").style.display = "block";    
} 
//___________________GAME FUNCTION / CHECKER___________________ //
//___________________GAME MANGER___________________ //
// Bob count management//
// Fixes undefined NaN bug
if (localStorage.bobs == 'NaN') {   
localStorage.bobs = 0;
}
else {
    localStorage.bobs = localStorage.bobs
}
function Bob() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.bobs) {
            localStorage.bobs = Number(localStorage.bobs)+1; ConvertNUM(); clearTimeout(this.cBc); CheckBC(); Bps();
        } else {
            localStorage.bobs = 0;
        }
        document.getElementById("cbob").innerHTML = +localStorage.bobs;
}   
}
        if (localStorage.AClvl) {
        } else {
            localStorage.AClvl = 0;
        }   
        if (localStorage.priceAC) {
        } else {
            localStorage.priceAC = 100;
        }
function CheckBC() {
localStorage.CBC = 1;
this.cBc = setTimeout(function(){ endBC(); }, 1000);
}
function endBC() {
localStorage.CBC = 0;
Bps();
}        
function Bps() {
var Bacr = parseInt(localStorage.AClvl);
var Bc = parseInt(localStorage.CBC);
var BPS = Bacr + Bc;
document.getElementById("bps").innerHTML = BPS;
}
//___________________GAME MANGER___________________ //
// AUTOCLICKER//
function Autoclicker() {
var AClvl = parseInt(localStorage.AClvl);
localStorage.bobs = Number(localStorage.bobs)+AClvl;
document.getElementById("cbob").innerHTML = +localStorage.bobs;
ConvertNUM();
}
function ACpriceinc() {
var ACpilvl = parseInt(localStorage.AClvl);
var ACpiprice = parseInt(localStorage.priceAC);
localStorage.priceAC = ACpilvl * 100;
}
//___________________UPGRADE___________________ //
function upgradeAC() {
var priceACR = parseInt(localStorage.priceAC)
var ACprice = priceACR;
if (ACprice <= parseInt(localStorage.bobs)) {
localStorage.bobs = Number(localStorage.bobs)-ACprice;   
localStorage.AClvl = Number(localStorage.AClvl)+1;
document.getElementById("cbob").innerHTML = localStorage.bobs;
document.getElementById("AClvl").innerHTML = localStorage.AClvl;
document.getElementById("AClvl2").innerHTML = localStorage.AClvl;
ACpriceinc();
document.getElementById("ACprice").innerHTML = localStorage.priceAC;
Bps(); ACUplaychaching();
}
else {
ACUplaybeep();
alert("Not enough 'Bob'");    
}
}
//___________________^^UPGRADE^^___________________ //

//___________________PURCHASE___________________ //
// Purchases Autoclick//    
function buyautoclick() { 
if (20 <= parseInt(localStorage.bobs)) {
localStorage.bobs = Number(localStorage.bobs)-20;
document.getElementById("cbob").innerHTML = parseInt(localStorage.bobs);
localStorage.autoclick = 2;
document.getElementById("autoclickshop").style.display = "none";
document.getElementById("autoclickshopbrought").style.display = "block";
document.getElementById("upgradeautoclick").style.display = "block";
document.getElementById("msgPBACR").style.display = "none";
ACUplaychaching();
}
else {
ACUplaybeep();
alert("Not enough Bob!")
}
}
//___________________PURCHASE___________________ //
////
//============================ Toggle Display ============================ //
////
//---------------------------------------//
//========Toggle Menu=========//
function OPENshop() { //* Shop (Display: block) *//
document.getElementById("SHOPmenu").style.display = "block";
document.getElementById("overlay").style.display = "block";
document.getElementById("ACprice").innerHTML = localStorage.priceAC;
document.getElementById("AClvl").innerHTML = localStorage.AClvl;
document.getElementById("AClvl2").innerHTML = localStorage.AClvl;
if (20 <= parseInt(localStorage.bobs)) {
    document.getElementById("b20").style.color = "green";
}
else {document.getElementById("b20").style.color = "red";}
var nb= localStorage.bobs;
if (20 > localStorage.bobs) {
    document.getElementById("n20").innerHTML = 20-nb;   
}
if (20 <= localStorage.bobs) {
    document.getElementById("Nmb20").style.display = "none";
}
}
function CLOSEshop() { //* Shop (Display: none) *//
document.getElementById("SHOPmenu").style.display = "none";
document.getElementById("overlay").style.display = "none";       
}
function OPENmap() { //* Map (Display: block) *//
alert("This feature is unavailable. (W.I.P)");
}
function OPENnews() { //* News (Display: block) *//
alert("This feature is unavailable. (W.I.P)");
}
function OPENlore() { //* Lore (Display: block) *//
alert("This feature is unavailable. (W.I.P)");
}
//========Toggle Menu=========//
//---------------------------------------//
////
//============================ Toggle Display ============================ //
////
//============================ MENU ============================ //
////
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
////


//============================ Jquery============================ //
$(function(){
$('#Bob').mouseenter(function(){
    $("#Bob").css({"transform": "scale(1.1)", "opacity": "0.96"});
});
$( "#Bob" ).mousedown(function(){ Bob();
    $("#Bob").css({"transform": "scale(1)", "opacity": "1"});
});
$( "#Bob" ).mouseup(function(){
    $("#Bob").css({"transform": "scale(1.1)", "opacity": "1"});
});
$( "#Bob" ).mouseleave(function() {
    $("#Bob").css({"transform": "scale(1)", "opacity": "0.96"});
});
$( "#Bob" ).touchstart(function(){ Bob();
    $("#Bob").css({"transform": "scale(1.1)", "opacity": "1"});
});
$( "#Bob" ).touchend(function(){
    $("#Bob").css({"transform": "scale(1)", "opacity": "1"});
});
});
//jqurey +num animation//
$("#clickarea").on('mousedown touchstart', function(e) {
    //var AClvlAC = parseInt(localStorage.AClvl);//
    //var pluseff = AClvlAC;//
    var pluseff = 1;
    var obj = $("#clickarea").clone();
    $("body").append(obj);
    obj.html("+"+pluseff);
    obj.css('position','absolute');
	obj.offset({left: e.pageX-10, top: e.pageY-25});
    
    obj.animate({"top": "-=55px"}, 350, "linear");
    obj.animate({"opacity": 1, "top": "-=65px"}, 500, "linear", function() {
	$(this).remove();	
	});
});//]]> 
//============================ MENU ============================ //
$(document).ready(function () {
    //Disable full page
    $("body").on("contextmenu",function(e){
        return false;
    });
    
    //Disable part of page
    $("#id").on("contextmenu",function(e){
        return false;
    });
});

//============================ MENU ============================ //
//// //Page on load (post)//
var LoopACR
LoopACR = setInterval(Autoclicker, 1000);
document.getElementById("defaultOpen").click();
document.getElementById("shop").addEventListener('click', OPENshop);
document.getElementById("map").addEventListener("click", OPENmap);
document.getElementById("news").addEventListener("click", OPENnews);
document.getElementById("lore").addEventListener("click", OPENlore);
document.getElementById("cbob").innerHTML = parseInt(localStorage.bobs);
localStorage.CBC = 0;
Bps();
// sound //
$(function(){
$("#Bob").bind( "mouseup touchend", function(e){ 
var audiobob = new Audio('bob.mp3');
audiobob.play();
});
$("#shop").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audioopen = new Audio('open.mp3');
audioopen.play();
});
$("#closemenux").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audioclose = new Audio('close.mp3');
audioclose.play();
});
$("#map").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audiobeep = new Audio('beep.mp3');
audiobeep.play();
});
$("#news").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audiobeep = new Audio('beep.mp3');
audiobeep.play();
});
$("#lore").bind( "mousedown touchstart", function(e){e.preventDefault();
var audiobeep = new Audio('beep.mp3');
audiobeep.play();
});
$("#btn-reset").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audiobeep = new Audio('beep.mp3');
audiobeep.play();
});
$("#defaultOpen").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audiobob = new Audio('bob.mp3');
audiobob.play();
});
$("#menuUP").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audiobob = new Audio('bob.mp3');
audiobob.play();
});
$("#menuS").bind( "mousedown touchstart", function(e){e.preventDefault(); 
var audiobob = new Audio('bob.mp3');
audiobob.play();
});
$("#ACupgrade").bind( "mousedown touchstart", function(e){e.preventDefault();
upgradeAC();
});
$("#autoclick").bind( "mousedown touchstart", function(e){e.preventDefault();
buyautoclick();  
});
});
//^ SOUND ^//
function ACUplaychaching() {
var audiochaching = new Audio('chaching.mp3');
audiochaching.play();
}
function ACUplaybeep() {
var audiobeep = new Audio('beep.mp3');
audiobeep.play();
}
function ACplaychaching() {
var audiochaching = new Audio('chaching.mp3');
audiochaching.play();
} 
function ACplaybeep() {
var audiobeep = new Audio('beep.mp3');
audiobeep.play();
}
// convert large numbles to number+word //
function ConvertNUM() {
var count = document.getElementById("cbob").innerHTML
  var str = count.toString();
  var tmpCount;
  if (count < 1000000) {
    tmpCount = "";
  } else if (count >= 1000000 && count < 1000000000) {
    str = "Million";
    tmpCount = (count / 1000000).toFixed(6);
} else if (count >= 1000000000 && count < 1000000000000) {
    str = "Billion";
    tmpCount = (count / 1000000000).toFixed(9);
} else if (count >= 1000000000000 && count < 1000000000000000) {
    str = "Trillion";
    tmpCount = (count / 1000000000000).toFixed(12);
} else if (count >= 1000000000000000 && count < 1000000000000000000) {
str = "Quadrillion";
    tmpCount = (count / 1000000000000000).toFixed(15);
}     else if (count >= 1000000000000000000 && count < 1000000000000000000000) {
    str = "Quintillion";
    tmpCount = (count / 1000000000000000000).toFixed(18);
} else if (count >= 1000000000000000000000 && count < 1000000000000000000000000) {
    str = "Sextillion";
    tmpCount = (count / 1000000000000000000000).toFixed(21);
} else if (count >= 1000000000000000000000000 && count < 1000000000000000000000000000) {
    str = "Septillion";
    tmpCount = (count / 1000000000000000000000000).toFixed(24);
} else if (count >= 1000000000000000000000000000 && count < 1000000000000000000000000000000) {
    str = "Octillion";
    tmpCount = (count / 1000000000000000000000000000).toFixed(27);
} else if (count >= 1000000000000000000000000000000 && count < 1000000000000000000000000000000000) {
    str = "Nonillion";
    tmpCount = (count / 1000000000000000000000000000000).toFixed(30);
} else if (count >= 1000000000000000000000000000000000 && count < 1000000000000000000000000000000000000) {
    str = "Decillion";
    tmpCount = (count / 1000000000000000000000000000000000).toFixed(33);
} else if (count >= 1000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000) {
    str = "Undecillion";
    tmpCount = (count / 1000000000000000000000000000000000000).toFixed(36);
} else if (count >= 1000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000) {
    str = "Duodecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000).toFixed(39);
} else if (count >= 1000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000) {
    str = "Tredecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000).toFixed(42);
} else if (count >= 1000000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000000) {
    str = "Quattuordecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000).toFixed(45);
} else if (count >= 1000000000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000000000) {
    str = "Quindecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000000).toFixed(48);
} else if (count >= 1000000000000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000000000000) {
    str = "Sexdecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000000000).toFixed(51);
} else if (count >= 1000000000000000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000000000000000) {
    str = "Septendecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000000000000).toFixed(54);
} else if (count >= 1000000000000000000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000000000000000000) {
    str = "Octodecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000000000000000).toFixed(57);
} else if (count >= 1000000000000000000000000000000000000000000000000000000000000 && count < 1000000000000000000000000000000000000000000000000000000000000000) {
    str = "Novemdecillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000000000000000000).toFixed(60);
} else if (count >= 1000000000000000000000000000000000000000000000000000000000000000 && count < 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
    str = "Vigintillion";
    tmpCount = (count / 1000000000000000000000000000000000000000000000000000000000000000).toFixed(63);
} else if (count >= 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 && count) {
    str = "Googol";
    tmpCount = (count / 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(100);
}
  document.getElementById("cbobc").innerHTML = tmpCount + ' ' + str;
}
ConvertNUM();