const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// function to insert commas in long numbers...
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

router.get("/", (req, res) => {

  const countryName = req.session.country

  fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      let globalTotal = numberWithCommas(data.cases);
      let globalRecovered = numberWithCommas(data.recovered);
      let globalDeaths = numberWithCommas(data.deaths);
      let newCases;
      let totalCases;
      let newDeaths;
      let totalDeaths;
      let newRecovered;
      let totalRecovered;
      let tests;
      let fatalityRate;
      let recoveryRate;

      fetch(`https://disease.sh/v3/covid-19/countries/${countryName}`)
        .then((responseCountry) => responseCountry.json())
        .then((dataCountry) => {
          newCases = numberWithCommas(dataCountry.todayCases);
          totalCases = numberWithCommas(dataCountry.cases);
          newDeaths = numberWithCommas(dataCountry.todayDeaths);
          totalDeaths = numberWithCommas(dataCountry.deaths);
          newRecovered = numberWithCommas(dataCountry.todayRecovered);
          totalRecovered = numberWithCommas(dataCountry.recovered);
          tests = numberWithCommas(dataCountry.tests);
          
          // calculation for fatality rate...
          const fatality = ((dataCountry.deaths / dataCountry.cases)* 100).toFixed(1)
          fatalityRate = numberWithCommas(fatality)   

          // calcuation for recovery rate....
          const recovery = ((dataCountry.recovered / dataCountry.cases)* 100).toFixed(1)
          recoveryRate = numberWithCommas(recovery)   
          
          res.render("resultPage", {
            globalTotal,
            globalRecovered,
            globalDeaths,
            newCases,
            totalCases,
            newDeaths,
            totalDeaths,
            newRecovered,
            totalRecovered,
            tests,
            recoveryRate,
            fatalityRate,
            countryName
          });

        });
    });
});


router.get("/resultGraph", (req, res) => {
  const countryName = req.session.country
  res.render("resultGraph", { countryName })
})


router.get("/countriesOverview", (req, res) => {
  res.render("countriesOverview")
})

module.exports = router;