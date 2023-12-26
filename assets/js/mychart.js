var options = {
  series: [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ],
  chart: {
    height: 350,
    type: "line",
  },
  stroke: {
    width: [0, 4],
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  labels: [
    "01 Jan 2001",
    "02 Jan 2001",
    "03 Jan 2001",
    "04 Jan 2001",
    "05 Jan 2001",
    "06 Jan 2001",
    "07 Jan 2001",
    "08 Jan 2001",
    "09 Jan 2001",
    "10 Jan 2001",
    "11 Jan 2001",
    "12 Jan 2001",
  ],
  xaxis: {
    type: "datetime",
  },
  yaxis: [
    {},
    {
      opposite: true,
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
//   chart 2

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_india2019High;

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(0).brighten(1),
  min: chart.colors.getIndex(1).brighten(0.3),
  // logarithmic: true
  // "min": am4core.color("#ffd7b1"),
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = [
  {
    id: "IN-JK",
    value: 10,
  },
  {
    id: "IN-MH",
    value: 12,
  },
  {
    id: "IN-UP",
    value: 10,
  },
  {
    id: "US-AR",
    value: 13,
  },
  {
    id: "IN-RJ",
    value: 30,
  },
  {
    id: "IN-AP",
    value: 40,
  },
  {
    id: "IN-MP",
    value: 90,
  },
  {
    id: "IN-TN",
    value: 40,
  },
  {
    id: "IN-JH",
    value: 3,
  },
  {
    id: "IN-WB",
    value: 0,
  },
  {
    id: "IN-GJ",
    value: 0,
  },
  {
    id: "IN-BR",
    value: 0,
  },
  {
    id: "IN-TG",
    value: 0,
  },
  {
    id: "IN-GA",
    value: 0,
  },
  {
    id: "IN-DN",
    value: 0,
  },
  {
    id: "IN-DL",
    value: 0,
  },
  {
    id: "IN-DD",
    value: 0,
  },
  {
    id: "IN-CH",
    value: 0,
  },
  {
    id: "IN-CT",
    value: 0,
  },
  {
    id: "IN-AS",
    value: 0,
  },
  {
    id: "IN-AR",
    value: 0,
  },
  {
    id: "IN-AN",
    value: 0,
  },
  {
    id: "IN-KA",
    value: 0,
  },
  {
    id: "IN-KL",
    value: 0,
  },
  {
    id: "IN-OR",
    value: 0,
  },
  {
    id: "IN-SK",
    value: 0,
  },
  {
    id: "IN-HP",
    value: 15,
  },
  {
    id: "IN-PB",
    value: 14,
  },
  {
    id: "IN-HR",
    value: 13,
  },
  {
    id: "IN-UT",
    value: 12,
  },
  {
    id: "IN-LK",
    value: 12,
  },
  {
    id: "IN-MN",
    value: 5,
  },
  {
    id: "IN-TR",
    value: 4,
  },
  {
    id: "IN-MZ",
    value: 3,
  },
  {
    id: "IN-NL",
    value: 2,
  },
  {
    id: "IN-ML",
    value: 1,
  },
];

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#ff7d01");

// pia chart
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: 380,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  legend: {
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },

  },
  title: {
    text: "Store Visits by source",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart_3"), options);
chart.render();
