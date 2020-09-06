function displayTable(e){new Tabulator("#example-table",{data:e,initialSort:[{column:"cases",dir:"desc"}],height:"100%",columns:[{title:"Country",resizable:!0,field:"country",sorter:"string",frozen:!0,hozAlign:"center"},{title:"Cases",field:"cases",sorter:"number",hozAlign:"center",resizable:!1},{title:"New Cases",field:"todayCases",sorter:"number",hozAlign:"center",resizable:!1},{title:"Deaths",field:"deaths",hozAlign:"center",resizable:!1,sorter:"number"},{title:"New Deaths",field:"todayDeaths",sorter:"number",hozAlign:"center",resizable:!1},{title:"Recovered",field:"recovered",sorter:"number",hozAlign:"center",resizable:!1},{title:"New Recovered",field:"todayRecovered",sorter:"number",hozAlign:"center",resizable:!1},{title:"Active",field:"active",sorter:"number",hozAlign:"center",resizable:!1},{title:"Critial",field:"critical",sorter:"number",hozAlign:"center",resizable:!1},{title:"Population",field:"population",sorter:"number",hozAlign:"center",resizable:!1},{title:"Cases Per 1M ",field:"cpom",sorter:"number",hozAlign:"center",resizable:!1},{title:"Deaths Per 1M",field:"dpom",sorter:"number",hozAlign:"center",resizable:!1}]})}let data=[];fetch("https://disease.sh/v3/covid-19/countries").then(e=>e.json()).then(e=>{e.forEach(e=>{let t={country:e.country,cases:e.cases,todayCases:e.todayCases,deaths:e.deaths,todayDeaths:e.todayDeaths,recovered:e.recovered,todayRecovered:e.todayRecovered,active:e.active,critical:e.critical,population:e.population,cpom:e.casesPerOneMillion,dpom:e.deathsPerOneMillion};data.push(t)}),displayTable(data)});