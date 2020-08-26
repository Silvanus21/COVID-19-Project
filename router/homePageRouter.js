const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const url = require("url")

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
      let globalActive = numberWithCommas(data.active);

      let indiaTotal;
      fetch("https://disease.sh/v3/covid-19/countries/india")
        .then((responseIndia) => responseIndia.json())
        .then((dataIndia) => {
          indiaTotal = numberWithCommas(dataIndia.cases);

          res.render("homePage", {
            globalTotal,
            globalRecovered,
            globalActive,
            indiaTotal,
          });
        });
    });
});

router.post("/", (req, res) => {
  const countryName = req.body.search;

  res.redirect(
    url.format({
      pathname: "/resultPage",
      query: {
        country: req.body.search,
      },
    })
  );
});

module.exports = router;
