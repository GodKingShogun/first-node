$(document).ready(function () {
  var temp = null;
  var on = false;
  const placeId = "AIzaSyAUYqLqu63L8-9ZpYiIio41pAFuF_2TpbU";
  const id = "aee2fc94235eab1054e9f605fafbf39f";
  var lat;
  var lon;



  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    on = true;
  });


$("#getW").click(function () {
  if (on === true) {
  var weatherUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${id}/${lat},${lon}?exclude=minutely,hourly,daily,alerts,flags&units=si`
    axios.get(weatherUrl).then((response) => {
     console.log(response);
      temp = response.data.currently.temperature;
     $("#celsius").html(temp);
   }).catch((e) => {
   $("#error").html(e.message);
  });
}
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
