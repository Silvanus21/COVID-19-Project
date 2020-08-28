document.addEventListener("DOMContentLoaded", () => {
  let countriesData = [];

  fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    .then((res) => res.json())
    .then((data) => {
      let datesList = Object.keys(data.deaths);
      datesList.forEach((date) => {
        let singleDayData = [];

        singleDayData.push(Date.parse(`${date} 00:00:00 UTC`));
        singleDayData.push(data.deaths[date]);
        countriesData.push(singleDayData);
      });


      // Apply the grey theme
      Highcharts.setOptions({
        colors: [
          "#7798BF"
        ],
        chart: {
          backgroundColor: {
            linearGradient: [0, 0, 0, 400],
            stops: [
              [0, "rgb(60, 66, 66)"],
              [1, "rgb(16, 16, 16)"],
            ],
          },
          borderWidth: 0,
          borderRadius: 0,
          plotBackgroundColor: null,
          plotShadow: false,
          plotBorderWidth: 0,
        },
        title: {
          style: {
            color: "#FFF",
            font:
              "16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
          },
        },
        subtitle: {
          style: {
            color: "#DDD",
            font:
              "12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
          },
        },
        xAxis: {
          gridLineWidth: 0,
          lineColor: "#999",
          tickColor: "#999",
          labels: {
            style: {
              color: "#999",
              fontWeight: "bold",
            },
          },
          title: {
            style: {
              color: "#AAA",
              font:
                "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
            },
          },
        },
        yAxis: {
          alternateGridColor: null,
          minorTickInterval: null,
          gridLineColor: "rgba(255, 255, 255, .1)",
          lineWidth: 0,
          tickWidth: 0,
          labels: {
            style: {
              color: "#999",
              fontWeight: "bold",
            },
          },
          title: {
            style: {
              color: "#AAA",
              font:
                "bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",
            },
          },
        },
        legend: {
          itemStyle: {
            color: "#CCC",
          },
          itemHoverStyle: {
            color: "#FFF",
          },
          itemHiddenStyle: {
            color: "#333",
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
              [0, "rgba(96, 96, 96, .8)"],
              [1, "rgba(16, 16, 16, .8)"],
            ],
          },
          borderWidth: 0,
          style: {
            color: "#FFF",
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


      Highcharts.chart("container-two", {
        chart: {
          zoomType: "x",
        },
        title: {
          text: "Number of Deaths over time",
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
            text: "Total Deaths",
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
            name: "Total Deaths",
            data: countriesData,
          },
        ],
      });
    });
});
