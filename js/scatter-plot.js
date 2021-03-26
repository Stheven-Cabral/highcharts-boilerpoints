const colorsAllGreen = ['#54c53c', '#21a235', '#9cd353', '#125131', '#e7f4b8', '#36ba39', '#78cb42', '#167633', '#c2e576', '#081f1c'];
const colorsAllBlue = ['#308bc4', '#1f4cab', '#51c7d2', '#1c1880', '#b8f0e5', '#266aba', '#3dabcb', '#1d2d96', '#51c7d2', '#0e003c'];
const colorsMixedBlueGreen = ['#2a8bb0', '#76bf64', '#1a419e', '#c2e576', '#0e003c', '#4ba68f', '#1a69b1', '#9cd353', '#1b2085', '#e7f4b8', '#167633'];

document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('scatter-plot-portfolio', {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      width: 950,
      height: 800,
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '25px'
      }
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Standard Deviation'
      },
      labels: {
        style: {
          fontSize: '25px'
        }
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      gridLineWidth: 1,
      min: 2,
      max: 6
    },
    yAxis: {
      title: {
        text: 'Return'
      },
      labels: {
        style: {
          fontSize: '25px'
        }
      },
      min: 3,
      max: 4
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      x: 0,
      y: 0,
      floating: false,
      itemStyle: {
        fontSize: '25px',
        fontWeight: 'normal'
      },
      labelFormatter: function () {
        console.log(this);
        return '<strong>&nbsp;' + this.name + '</strong><br/>' + '&nbsp;Return: ' + '<strong>' + Highcharts.numberFormat(this.yData, 1) + '</strong><br/>' + '&nbsp;Std Dev: ' + '<strong>' + Highcharts.numberFormat(this.xData, 1) + '</strong><br/>';
      }
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 10,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: 'Std. Dev: {point.x}, Return: {point.y}'
        }
        // ,
        // dataLabels: {
        //   enabled: true,
        //   style: {
        //     fontWeight: '600',
        //     fontFamily: 'Open Sans Condensed',
        //     fontSize: '23px'
        //   },
        //   align: 'right',
        //   verticalAlign: 'top',
        //   padding: 15,
        //   formatter: function () {
        //     return 'Std. Dev: ' + Highcharts.numberFormat(this.x, 1) + '<br>Return: ' + Highcharts.numberFormat(this.y, 1);
        //   }
        // }
      }
    },
    series: [{
      name: 'Portfolio',
      color: '#21a235',
      data: [[4, 3.5]]

    }],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });

  Highcharts.chart('scatter-plot-comparison', {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      width: 950,
      height: 800,
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '25px'
      }
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      title: {
        enabled: true,
        text: 'Standard Deviation'
      },
      labels: {
        style: {
          fontSize: '25px'
        }
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true,
      gridLineWidth: 1
    },
    yAxis: {
      title: {
        text: 'Return'
      },
      labels: {
        style: {
          fontSize: '25px'
        }
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      x: 0,
      y: 0,
      floating: false,
      itemStyle: {
        fontSize: '25px',
        fontWeight: 'normal',
      },
      itemMarginBottom: 25,
      itemMarginLeft: 30,
      labelFormatter: function () {
        return '<strong>&nbsp;' + this.name + '</strong><br/>' + '&nbsp;Return: ' + '<strong>' + Highcharts.numberFormat(this.yData, 1) + '</strong><br/>' + '&nbsp;Std Dev: ' + '<strong>' + Highcharts.numberFormat(this.xData, 1) + '</strong><br/>';
      }
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 10,
          states: {
            hover: {
              enabled: true,
              lineColor: 'rgb(100,100,100)'
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: 'Std. Dev: {point.x}, Return: {point.y}'
        }
        // ,
        // dataLabels: {
        //   enabled: true,
        //   style: {
        //     fontWeight: '600',
        //     fontFamily: 'Open Sans Condensed',
        //     fontSize: '23px'
        //   },
        //   align: 'right',
        //   verticalAlign: 'top',
        //   padding: 15,
        //   formatter: function () {
        //     return 'Std. Dev: ' + Highcharts.numberFormat(this.x, 1) + '<br>Return: ' + Highcharts.numberFormat(this.y, 1);
        //   }
        // }
      }
    },
    series: [{
      name: 'Portfolio',
      color: '#21a235',
      data: [[4, 3.5]]

    }, {
      name: 'Comparison',
      color: '#266aba',
      data: [[15, 13]]
    }],
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });

});