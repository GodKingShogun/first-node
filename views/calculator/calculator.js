$(document).ready(function(){          
var calculator="";
$("#AC").on("click", function(){
$(".well").empty();
  calculator="";
});
$("#CE").on("click",function(){
 if (calculator.charAt(calculator.length-1)===" "){
calculator=calculator.slice(0,-2);
$(".well").empty().append(calculator);
 } else {
 calculator=calculator.slice(0,-1);
$(".well").empty().append(calculator);
 }
 });
$("#divide").on("click",function(){
$(".well").append("/");
 calculator+=" / ";
});
$("#multiply").on("click",function(){
$(".well").append("*");
 calculator+=" * ";
});
$("#seven").on("click",function(){
$(".well").append("7");
 calculator+="7";
});
$("#eight").on("click",function(){
$(".well").append("8");
calculator+="8";
});
$("#nine").on("click",function(){
$(".well").append("9");
calculator+="9";
});
$("#subtract").on("click",function(){
$(".well").append("-");
calculator+=" - ";
});
$("#four").on("click",function(){
$(".well").append("4");
calculator+="4";
});
$("#five").on("click",function(){
$(".well").append("5");
calculator+="5"
});
$("#six").on("click",function(){
$(".well").append("6");
calculator+="6";
});
$("#plus").on("click",function(){
$(".well").append("+");
calculator+=" + "
});
$("#one").on("click",function(){
$(".well").append("1");
calculator+="1";
});
$("#two").on("click",function(){
$(".well").append("2");
calculator+="2";
});
$("#three").on("click",function(){
$(".well").append("3");
calculator+="3";
});
$("#zero").on("click",function(){
$(".well").append("0");
calculator+="0";
});
$("#decimal").on("click",function(){
$(".well").append(".");
calculator+=".";
});
$("#equal").on("click",function(){
calculator=eval(calculator);
$(".well").html(eval(calculator));
});
});
