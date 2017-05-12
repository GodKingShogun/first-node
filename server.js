const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use((req,res,next) => {
var now = new Date().toString();
var log = `${now}: ${req.method} ${req.url}`;
console.log(log);
fs.appendFile("server.log", log + "\n");
next();
});

// app.use((req,res,next) => {
//   res.render("maintenance.hbs");
// });

app.use(express.static(__dirname + "/views"));

hbs.registerHelper("getCurrentYear", () => {
return new Date().getFullYear()
});

hbs.registerHelper("screamIt", (text) => {
return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send("<h1>Hello Express</h1>");
  res.render("home.hbs", {
   pageTitle: "Home Page"
  });
});

app.get("/kevin_hart", (req, res) => {
  res.render("./kevin_hart/kevin_hart.hbs", {
    pageTitle: "Kevin Hart"
  });
});

app.get("/pomodoro_clock", (req, res) => {
  res.render("./pomodoro_clock/pomodoro_clock.hbs", {
    pageTitle: "Pomodoro Clock"
  });
});

app.get("/tic_tac_toe", (req, res) => {
  res.render("./tic_tac_toe/tic_tac_toe.hbs", {
    pageTitle: "Tic Tac Toe"
  });
});

app.get("/calculator", (req, res) => {
  res.render("./calculator/calculator.hbs", {
    pageTitle: "Calculator"
  });
});

app.get("/simon_game", (req, res) => {
  res.render("./simon_game/simon_game.hbs", {
    pageTitle: "Simon Game"
  });
});


app.get("/weather_app", (req, res) => {
  res.render("./weather_app/weather_app.hbs", {
    pageTitle: "Weather App"
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
