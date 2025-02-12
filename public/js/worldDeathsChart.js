document.addEventListener("DOMContentLoaded", () => {
  let t = [];
  fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    .then((t) => t.json())
    .then((e) => {
      Object.keys(e.deaths).forEach((o) => {
        let l = [];
        l.push(Date.parse(o + " 00:00:00 UTC")), l.push(e.deaths[o]), t.push(l);
      }),
        Highcharts.setOptions({
          colors: ["#7798BF"],
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
            plotShadow: !1,
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
            labels: { style: { color: "#444", fontWeight: "bold" } },
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
            labels: { style: { color: "#444", fontWeight: "bold" } },
            title: { style: { color: "#444", font: "bold 13px sans-serif" } },
          },
          credits: { style: { right: "50px" } },
          labels: { style: { color: "#CCC" } },
          tooltip: {
            backgroundColor: {
              linearGradient: [0, 0, 0, 50],
              stops: [
                [0, "rgb(210,200,216)"],
                [1, "rgb(190, 196, 196, 0.6)"],
              ],
            },
            borderWidth: 0,
            style: { color: "#444" },
          },
          plotOptions: {
            line: {
              dataLabels: { color: "#CCC" },
              marker: { lineColor: "#333" },
            },
            spline: { marker: { lineColor: "#333" } },
            scatter: { marker: { lineColor: "#333" } },
          },
          toolbar: { itemStyle: { color: "#CCC" } },
        }),
        Highcharts.chart("container-two", {
          chart: { zoomType: "x" },
          title: { text: "Number of Deaths over time" },
          subtitle: {
            text:
              void 0 === document.ontouchstart
                ? "Click and drag in the plot area to zoom in"
                : "Pinch the chart to zoom in",
          },
          xAxis: { type: "datetime" },
          yAxis: { title: { text: "Total Deaths" } },
          legend: { enabled: !1 },
          plotOptions: {
            area: {
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
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
              marker: { radius: 2 },
              lineWidth: 1,
              states: { hover: { lineWidth: 1 } },
              threshold: null,
            },
          },
          series: [{ type: "area", name: "Total Deaths", data: t }],
        });
    });
});
