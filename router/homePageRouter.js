const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// function to insert commas in long numbers...
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

router.get("/", (req, res) => {
  fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      let globalTotal = numberWithCommas(data.cases);
      let globalRecovered = numberWithCommas(data.recovered);
      let globalDeaths = numberWithCommas(data.deaths);

      res.render("homePage", {
        globalTotal,
        globalRecovered,
        globalDeaths,
      });
    });
});

router.post("/", (req, res) => {
  req.session.country = req.body.search;
  res.redirect("/resultPage");
});

router.get("/countriesOverview", (req, res) => {
  res.render("countriesOverview")
})

module.exports = router;
