function displayTable(data) {
  var table = new Tabulator("#example-table", {
    data: data,
    initialSort: [{ column: "cases", dir: "desc" }],
    height: "100%",
    columns: [
      {
        title: "Country",
        resizable: true,
        field: "country",
        sorter: "string",
        frozen: true,
        hozAlign: "center",
      },
      {
        title: "Cases",
        field: "cases",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "New Cases",
        field: "todayCases",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Deaths",
        field: "deaths",
        hozAlign: "center",
        resizable: false,
        sorter: "number",
      },
      {
        title: "New Deaths",
        field: "todayDeaths",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Recovered",
        field: "recovered",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "New Recovered",
        field: "todayRecovered",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Active",
        field: "active",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Critial",
        field: "critical",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Population",
        field: "population",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Cases Per 1M ",
        field: "cpom",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
      {
        title: "Deaths Per 1M",
        field: "dpom",
        sorter: "number",
        hozAlign: "center",
        resizable: false,
      },
    ],
  });
}

// fetch country data........

let data = [];

fetch("https://disease.sh/v3/covid-19/countries")
  .then((response) => response.json())
  .then((countriesList) => {
    countriesList.forEach((eachCountry) => {
      let countryOverview = {
        country: eachCountry.country,
        cases: eachCountry.cases,
        todayCases: eachCountry.todayCases,
        deaths: eachCountry.deaths,
        todayDeaths: eachCountry.todayDeaths,
        recovered: eachCountry.recovered,
        todayRecovered: eachCountry.todayRecovered,
        active: eachCountry.active,
        critical: eachCountry.critical,
        population: eachCountry.population,
        cpom: eachCountry.casesPerOneMillion,
        dpom: eachCountry.deathsPerOneMillion,
      };

      data.push(countryOverview);
    });

    displayTable(data);
  });
