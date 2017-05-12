$(document).ready(function() {
  let start = $("#start");
  let strict= $("#strict");
  let onOff=  $("#on-off");
  let startSound= new Audio
 (" http://soundbible.com/grab.php?id=1542&type=mp3");
  let victorySound= new Audio("http://soundbible.com/grab.php?id=1823&type=mp3");
  let red= $("#red");
   let redSound= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  let blue= $("#blue");
  let blueSound= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  let yellow= $("#yellow");
  let yellowSound= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  let green=$("#green");
  let greenSound= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  let wrongSound= new Audio ("http://soundbible.com/grab.php?id=1636&type=mp3");
  let gameSquares= {
    0 : red,
    1 : blue,
    2 : yellow,
    3 : green
  };
  let status= {
  "running" : false,
  "on" : false,
   "start" : false,
    "strict" : false,
   }
  let counter=1;
  let sequence=[];
  let sound= {
    0 : redSound,
    1 : blueSound,
    2 : yellowSound,
    3 : greenSound,
    4 : victorySound,
    5 : wrongSound
  }
let sounds = {
  "red" : redSound,
  "blue" : blueSound,
  "yellow" : yellowSound,
  "green" : greenSound,
}
let colors = ["red", "blue", "yellow", "green"];
let copyPlay=[];

function play(color) {
  $("#" + color)
    .animate({opacity:".5"},100)
    .animate({opacity:"1"},100);
  sounds[color].play();
}
  function playSequence(sequence, index,counter) {
 if (status.on===true){
  if (index < counter) {
    setTimeout(function(){
 copyPlay=copyPlay.concat(sequence[index]);
  play(colors[sequence[index]]);
      index++;
playSequence(sequence, index, counter);
      },1000);
  }
  if (index===counter && index<sequence.length-1) {
  userSequence();
  }
 if (index===sequence.length-1) {
 sound[4].play;
  setTimeout(reset,2500);
 }
 }
};
 function userSequence(){
  let playBack=copyPlay;
 function check(key){
 gameSquares[key].animate({opacity: .5},100).animate({opacity:1},100);
  if (key===playBack[0]) {
 sound[key].play();
    playBack.shift();
    playBackLength();
  } else if (key!==playBack[0]) {
    if (!status.strict) {
playSequenceAgain();
    } else {
 reset();
    }
  }
  }
  red.click(function(){
    check(0);
  })
  blue.click(function(){
    check(1);
  })
  yellow.click(function(){
    check(2);
  })
  green.click(function(){
    check(3);
  })

   function playSequenceAgain() {
     copyPlay=[];
     red.off();
     blue.off();
     yellow.off();
     green.off();
     sound[5].play();
     return setTimeout(playSequence(sequence,0,counter),2000);
  }

 function playBackLength(){
 if (playBack.length===0){
  red.off();
  blue.off();
  yellow.off();
  green.off();
   copyPlay=[];
   counter++;
$("#display").html(counter);
  return setTimeout(playSequence(sequence,0, counter),1000);
      }
 }
}

  function reset(){
     red.off();
     blue.off();
     yellow.off();
     green.off();
    counter=1;
$("#display").html(counter);
    copyPlay=[];
 sequence=[];
 for(let i=0; i<=20; i++) {
sequence.push(Math.floor(Math.random()*4));
 }
 return setTimeout(playSequence(sequence,0,counter),2000);
 }

  function off(){
 status.on=false;
 status.start=false;
 status.strict=false;
  $("#display").html("");
 $("#on-off").html("off");
 $("#on-off-dot").css("background","white");
  $("#start-dot").css("background","white");
  $("#strict-dot").css("background","white");
    sequence=[];
    copyPlay=[];
    red.off();
    blue.off();
    yellow.off();
    green.off();
  }

function colorToClick(){
  copyPlay=[];
  sequence=[];
  counter=1;
 $("#display").html(counter);
 for(let i=0; i<=20; i++) {
sequence.push(Math.floor(Math.random()*4));
 }
playSequence(sequence,0,counter);
}
  //initiating gamestart
 $("#on-off").on("click",function(){
 if (!status.on) {
   status.on=true;
 $("#display").html("--");
 $("#on-off").html("on");
 $("#on-off-dot").css("background","red");
 $("#red,#blue,#yellow,#green").animate({opacity:".5"},100).animate({opacity:"1"},100);
   startSound.play();
 } else {
off();
 }
 });

$("#start").on("click",function(){
 if (status.on===true) {
 if (!status.start) {
    status.start=true;
 $("#start-dot").css("background","red");
return colorToClick();
 } else {
   reset();
 }
 }
 });

 $("#strict").on("click",function(){
if (status.start===true) {
if (!status.strict) {
  status.strict=true;
$("#strict-dot").css("background","red");
} else {
 status.strict=false;
$("#strict-dot").css("background","white");
}
}
});
});
