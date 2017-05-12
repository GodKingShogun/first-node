$(document).ready(function () {
  var temp = null;
  var on = false;
  const placeId = "AIzaSyAUYqLqu63L8-9ZpYiIio41pAFuF_2TpbU";

$("#getW").click(function () {
  const coord = `http://ip-api.com/json`;
  axios.get(coord).then((response) => {
    const id = "6b5216c389dc27fe53457d96bc7aae93";
    var lat = response.data.lat;
    var lon = response.data.lon;
    var weatherMap = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${id}`;
    return axios.get(weatherMap);
  }).then((response) => {
     temp = response.data.main.temp;
     var icon = response.data.weather[0].icon;
     var iconL = `http://openweathermap.org/img/w/${icon}.png`;
     $("#celsius").html(temp);
     $("#wimg").html(`<img src=${iconL}>`);
   }).catch((e) => {
   $("#celsius").html(e.message);
  });
});

$("#conT").click(function () {
   if (temp !== null) {
  if($("#conT").html()==="Celsius") {
      var fToC = () => {
      const d = 9/5;
      temp = temp-32;
      temp = temp/d;
      temp = parseFloat(temp.toFixed(2));
      return temp;
    };

$("#conT").html("Fahrenheit");
$("#convert").html("C");
       fToC();
$("#celsius").html(temp);

    } else if ($("#conT").html()==="Fahrenheit") {

      var cToF = () => {
            const d = 9/5;
            temp = temp*d;
            temp = temp+32;
            temp = parseFloat(temp.toFixed(2));
            return temp;
          };
    $("#convert").html("F");
    $("#conT").html("Celsius");
      cToF();
      $("#celsius").html(temp);
    }
  }
});
});
