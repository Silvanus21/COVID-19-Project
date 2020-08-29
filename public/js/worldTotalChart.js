document.addEventListener("DOMContentLoaded", () => {
  let countriesData = [];

  fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    .then((res) => res.json())
    .then((data) => {
      let datesList = Object.keys(data.cases);
      datesList.forEach((date) => {
        let singleDayData = [];

        singleDayData.push(Date.parse(`${date} 00:00:00 UTC`));
        singleDayData.push(data.cases[date]);
        countriesData.push(singleDayData);
      });


       // Apply the grey theme
       Highcharts.setOptions({
        colors: [
          "#DF5353"
        ],
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 0, 400],
            stops: [
              [0, "rgb(240, 235, 235)"],
              [1, "rgb(211,211,211)"],
            ],
          },
          borderWidth: 0,
          borderRadius: 10,
          plotBackgroundColor: null,
          plotShadow: false,
          plotBorderWidth: 0,
        },
        title: {
          style: {
            color: "#333",
            font:
              "16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
          },
        },
        subtitle: {
          style: {
            color: "#555",
            font:
              "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
          },
        },
        xAxis: {
          gridLineWidth: 0,
          lineColor: "#444",
          tickColor: "#444",
          labels: {
            style: {
              color: "#444",
              fontWeight: "bold",
            },
          },
          title: {
            style: {
              color: "#444",
              font:
                "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
            },
          },
        },
        yAxis: {
          alternateGridColor: null,
          minorTickInterval: null,
          gridLineColor: "rgba(0, 0, 0, 0.1)",
          lineWidth: 0,
          tickWidth: 0,
          labels: {
            style: {
              color: "#444",
              fontWeight: "bold",
            },
          },
          title: {
            style: {
              color: "#444",
              font:
                "bold 13px sans-serif",
            },
          },
        },
        credits: {
          style: {
            right: "50px",
          },
        },
        labels: {
          style: {
            color: "#CCC",
          },
        },
        tooltip: {
          backgroundColor: {
            linearGradient: [0, 0, 0, 50],
            stops: [
              [0, "rgb(210,200,216)"],
              [1, "rgb(190, 196, 196, 0.6)"],
            ],
          },
          borderWidth: 0,
          style: {
            color: "#444",
          },
        },

        plotOptions: {
          line: {
            dataLabels: {
              color: "#CCC",
            },
            marker: {
              lineColor: "#333",
            },
          },
          spline: {
            marker: {
              lineColor: "#333",
            },
          },
          scatter: {
            marker: {
              lineColor: "#333",
            },
          },
        },

        toolbar: {
          itemStyle: {
            color: "#CCC",
          },
        },
      });


      Highcharts.chart("container-one", {
        chart: {
          zoomType: "x",
        },
        title: {
          text: "Spread of COVID'19 over time",
        },
        subtitle: {
          text:
            document.ontouchstart === undefined
              ? "Click and drag in the plot area to zoom in"
              : "Pinch the chart to zoom in",
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: "Total recorded cases",
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba"),
                ],
              ],
            },
            marker: {
              radius: 2,
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1,
              },
            },
            threshold: null,
          },
        },

        series: [
          {
            type: "area",
            name: "Total Cases",
            data: countriesData,
          },
        ],
      });
    });
});
