$(document).ready(function(){
var breakLength=10.00;
var workLength=20.00
var breakCounter=breakLength;
var workCounter=workLength;
var isTicking=false;
var breakTime= false;
var interval=null;
 if (isTicking=false){
$("#addB").on("click",function(){
breakLength=breakLength+1.00;
breakCounter=breakCounter+1;
$("#break-well").html(breakCounter);
});}
  if (isTicking=false){
$("#subtractB").on("click",function(){
breakLength=breakLength-1.00;
breakCounter=breakCounter-1;
$("#break-well").html(breakCounter);
});}
  if (isTicking=false){
$("#addW").on("click",function(){
workLength=workLength+1.00;
workCounter=workCounter+1;
$("#work-well").html(workCounter);
});}
  if (isTicking=false){
$("#subtractW").on("click",function(){
 workLength=workLength-1;
 workCounter= workCounter-1;
$("#work-well").html(workCounter);
});}

$("#breakSS").on("click",function(){
  if (!isTicking) {
    isTicking=true;
interval=setInterval(function(){
$("#break-well").html(breakCounter--);
  if (breakCounter<0){
    $("#alert").html("It's Time To Study");
  clearInterval(interval);
  isTicking=false;
  breakCounter=breakLength;
$("#break-well").html(breakCounter);
  }
},1000)}else {
  isTicking=false;
  clearInterval(interval);
  }
});
$("#workSS").on("click",function(){
  if (!isTicking) {
    isTicking=true;
interval=setInterval(function(){
$("#work-well").html(workCounter--);
  if (workCounter<0){
    $("#alert").html("It's Time For A Break");
    isTicking=false;
   clearInterval(interval);
    workCounter=workLength;
  $("#work-well").html(workCounter);
  }
},1000)}else {
  isTicking=false;
  clearInterval(interval);
}
});
});
