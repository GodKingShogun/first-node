$(document).ready(function(){
var won=false;
var ul=false;
var um=false;
var ur=false;
var ml=false;
var mm=false;
var mr=false;
var ll=false;
var lm=false;
var lr=false;
var choosex=false;
var chooseo=false;

 function reset(){
 won=false;
 ul=false;
 um=false;
 ur=false;
 ml=false;
 mm=false;
 mr=false;
 ll=false;
 lm=false;
lr=false;
choosex=false;
chooseo=false;
$("#tic-tac-toe").find("button").empty();
$("#results").empty();
 $("#play").empty();
 $("#x-o").html("Choose");
 }

 var res = ((but) => {
   if (but===0 && choosex===true) {
     $("#results").html("You Lose");
   } else {
     $("#results").html("You Win");
   }
 });

  $(document).mousemove(function() {
  if (ul===um && ul===ur && ul!==false){
   won=true;
     $("#play").html("Play Again").click(function(){
       reset();
     });

res(ul);
}

    if (ml===mm&&ml===mr&&ml!==false){
      won=true;
    $("#play").html("Play Again").click(function(){
       reset();
     });

   res(ml)
 }

    if (ll===lm&&ll===lr&&ll!==false){
      won=true;
 $("#play").html("Play Again").click(function(){
       reset();
     });

   res(ll);
     }

  if (ul===ml&&ul===ll&&ul!==false) {
    won=true;
     $("#play").html("Play Again").click(function(){
       reset();
     });

    res(ul);
 }

  if (um===mm&&um===lm&&um!==false) {
    won=true;
     $("#play").html("Play Again").click(function(){
       reset();
     });

    res(um);
 }

  if (ur===mr&&ur===lr&&ur!==false) {
    won=true;
     $("#play").html("Play Again").click(function(){
       reset();
     });

   res(ur);
 }

  if (ul===mm&&ul===lr&&ul!==false) {
    won=true;
     $("#play").html("Play Again").click(function(){
       reset();
     });

   res(ul);
 }

  if (ur===mm&&ur===ll&&ur!==false) {
    won=true;
     $("#play").html("Play Again").click(function(){
       reset();
     });

   res(ur);
 }
  });

$("#x").on("click", function(){
if (choosex===false&&chooseo===false){
 choosex=true;
 $("#x-o").html("You Are X");
}
});

$("#o").on("click", function(){
if(choosex===false&&chooseo===false){
  chooseo=true;
$("#x-o").html("You Are O");
}
});

$("#ul").on("click",function(){
 if (ul===false&&won===false){
   if (choosex===true){
     ul=1;
   $("#ul").html("X");
     if(won===false){
     if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     ul=0;
     $("#ul").html("O");
     if(won===false){
       if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
 });

$("#um").on("click",function(){
  if (um===false&&won===false){
   if (choosex===true){
     um=1;
   $("#um").html("X");
     if(won===false){
       if (ul===false) {
    ul=0;
    $("#ul").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     um=0;
     $("#um").html("O");
     if(won===false){
       if (ul===false) {
    ul=1;
    $("#ul").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
});

$("#ur").on("click",function(){
  if (ur===false&&won===false){
   if (choosex===true){
     ur=1;
   $("#ur").html("X");
     if(won===false){
      if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     ur=0;
     $("#ur").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
});

$("#ml").on("click",function(){
  if (ml===false&&won===false){
   if (choosex===true){
     ml=1;
   $("#ml").html("X");
     if(won===false){
      if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     ml=0;
     $("#ml").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
});

$("#mm").on("click",function(){
 if (mm===false&&won===false){
   if (choosex===true){
     mm=1;
   $("#mm").html("X");
     if(won===false){
      if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     mm=0;
     $("#mm").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
});

$("#mr").on("click",function(){
 if (mr===false&&won===false){
   if (choosex===true){
     mr=1;
   $("#mr").html("X");
     if(won===false){
      if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     mr=0;
     $("#mr").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
});

$("#ll").on("click",function(){
 if (ll===false&&won===false){
   if (choosex===true){
     ll=1;
   $("#ll").html("X");
     if(won===false){
      if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
   }
   }

   else if (chooseo===true){
     ll=0;
     $("#ll").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
   }
   }
 }
});

$("#lm").on("click",function(){
if (lm===false&&won===false){
   if (choosex===true){
     lm=1;
   $("#lm").html("X");
     if(won===false){
      if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   } else if (lr===false) {
    lr=0;
    $("#lr").html("O");
   }
     }
   }

   else if (chooseo===true){
     lm=0;
     $("#lm").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   } else if (lr===false) {
    lr=1;
    $("#lr").html("X");
   }
     }
   }
 }
});

$("#lr").on("click",function(){
 if (lr===false&&won===false){
   if (choosex===true){
     lr=1;
   $("#lr").html("X");
     if(won===false){
    if (um===false) {
    um=0;
    $("#um").html("O");
     } else if (ur===false) {
    ur=0;
    $("#ur").html("O");
   } else if (ml===false) {
    ml=0;
    $("#ml").html("O");
   } else if (mm===false) {
    mm=0;
    $("#mm").html("O");
   } else if (mr===false) {
    mr=0;
    $("#mr").html("O");
   } else if (ll===false) {
    ll=0;
    $("#ll").html("O");
   } else if (lm===false) {
    lm=0;
    $("#lm").html("O");
   } else if (ul===false) {
    ul=0;
    $("#ul").html("O");
   }
    }
   }

   else if (chooseo===true){
     lr=0;
     $("#lr").html("O");
     if(won===false){
      if (um===false) {
    um=1;
    $("#um").html("X");
     } else if (ur===false) {
    ur=1;
    $("#ur").html("X");
   } else if (ml===false) {
    ml=1;
    $("#ml").html("X");
   } else if (mm===false) {
    mm=1;
    $("#mm").html("X");
   } else if (mr===false) {
    mr=1;
    $("#mr").html("X");
   } else if (ll===false) {
    ll=1;
    $("#ll").html("X");
   } else if (lm===false) {
    lm=1;
    $("#lm").html("X");
   } else if (ul===false) {
    ul=1;
    $("#ul").html("X");
   }
   }
   }
 }
  });
});
