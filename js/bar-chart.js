const colorsAllGreen = ['#54c53c', '#21a235', '#9cd353', '#125131', '#e7f4b8', '#36ba39', '#78cb42', '#167633', '#c2e576', '#081f1c'];
const colorsAllBlue = ['#308bc4', '#1f4cab', '#51c7d2', '#1c1880', '#b8f0e5', '#266aba', '#3dabcb', '#1d2d96', '#51c7d2', '#0e003c'];
const colorsMixedBlueGreen = ['#2a8bb0', '#76bf64', '#1a419e', '#c2e576', '#0e003c', '#4ba68f', '#1a69b1', '#9cd353', '#1b2085', '#e7f4b8', '#167633'];

document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('bar-chart-portfolio-value', {
    chart: {
      type: 'bar',
      width: 700
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Value End'],
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      max: 200000,
      tickInterval: 100000,
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    tooltip: {
      valueSuffix: null,
      valuePrefix: '$'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            fontFamily: 'Open Sans Condensed',
            fontSize: '30px',
            color: 'white',
          },
          inside: true,
          align: 'left',
          formatter: function () {
            return '$' + Highcharts.numberFormat(this.y, 0, '.', ',');
          }
        }
      },
      series: {
        pointWidth: 70
      }
    },
    legend: {
      enabled: true,
      symbolRadius: 0,
      floating: true,
      y: 25,
      itemStyle: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans Condensed',
        fontSize: '24px'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Portfolio',
        data: [139696.00],
        color: '#21a235'
      }
    ],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    lang: {
      thousandsSep: ','
    }
  });


  Highcharts.chart('bar-chart-comparison-value', {
    chart: {
      type: 'bar',
      width: 700
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Value End'],
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      max: 400000,
      tickInterval: 100000,
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    tooltip: {
      valueSuffix: null,
      valuePrefix: '$'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            fontFamily: 'Open Sans Condensed',
            fontSize: '30px',
            color: 'white'
          },
          inside: true,
          align: 'left',
          formatter: function () {
            return '$' + Highcharts.numberFormat(this.y, 0, '.', ',');
          }
        }
      },
      series: {
        pointWidth: 70
      }
    },
    legend: {
      enabled: true,
      symbolRadius: 0,
      floating: true,
      y: 25,
      itemStyle: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans Condensed',
        fontSize: '24px'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Portfolio',
        data: [139696.00],
        color: '#21a235'
      },
      {
        name: 'Comparison',
        data: [328879.00],
        color: '#266aba'
      },
      {
        name: 'Difference',
        data: [189183.00],
        color: 'lightgrey'
      }
    ],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    lang: {
      thousandsSep: ','
    }
  });

  Highcharts.chart('bar-chart-portfolio-return', {
    chart: {
      type: 'bar',
      width: 700
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Value End'],
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      max: 75,
      tickInterval: 25,
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            fontFamily: 'Open Sans Condensed',
            fontSize: '30px'
          },
          inside: true,
          align: 'left',
          formatter: function () {
            return Highcharts.numberFormat(this.y, 1, '.', ',') + ' %';
          }
        }
      },
      series: {
        pointWidth: 70
      }
    },
    legend: {
      enabled: true,
      symbolRadius: 0,
      floating: true,
      y: 20,
      itemStyle: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans Condensed',
        fontSize: '24px'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Portfolio',
        data: [39.70],
        color: '#21a235'
      }
    ],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    lang: {
      thousandsSep: ','
    }
  });


  Highcharts.chart('bar-chart-comparison-return', {
    chart: {
      type: 'bar',
      width: 700
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Value End'],
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    yAxis: {
      min: 0,
      max: 250,
      tickInterval: 50,
      title: {
        text: null
      },
      labels: {
        enabled: false
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            fontFamily: 'Open Sans Condensed',
            fontSize: '30px'
          },
          inside: true,
          align: 'left',
          formatter: function () {
            return Highcharts.numberFormat(this.y, 1, '.', ',') + ' %';
          }
        }
      },
      series: {
        pointWidth: 70
      }
    },
    legend: {
      enabled: true,
      symbolRadius: 0,
      floating: true,
      y: 25,
      itemStyle: {
        fontWeight: 'bold',
        fontFamily: 'Open Sans Condensed',
        fontSize: '24px'
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Portfolio',
        data: [39.70],
        color: '#21a235'
      },
      {
        name: 'Comparison',
        data: [228.88],
        color: '#266aba'
      },
      {
        name: 'Difference',
        data: [189.18],
        color: 'lightgrey'
      }
    ],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
    lang: {
      thousandsSep: ','
    }
  });
});