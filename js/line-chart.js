const colorsAllGreen = ['#54c53c', '#21a235', '#9cd353', '#125131', '#e7f4b8', '#36ba39', '#78cb42', '#167633', '#c2e576', '#081f1c'];
const colorsAllBlue = ['#308bc4', '#1f4cab', '#51c7d2', '#1c1880', '#b8f0e5', '#266aba', '#3dabcb', '#1d2d96', '#51c7d2', '#0e003c'];
const colorsMixedBlueGreen = ['#2a8bb0', '#76bf64', '#1a419e', '#c2e576', '#0e003c', '#4ba68f', '#1a69b1', '#9cd353', '#1b2085', '#e7f4b8', '#167633'];

document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('line-chart-single-portfolio', {
    chart: {
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '20px'
      },
      height: 600
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      type: 'year',
      labels: {
        style: {
          fontSize: '20px'
        }
      },
    },
    yAxis: [{
      title: {
        text: 'Total Value ($)'
      },
      labels: {
        style: {
          fontSize: '20px'
        }
      }
    }],
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      itemStyle: {
        fontSize: '20px'
      }
    },
    plotOptions: {
      series: {
        label: {
          enabled: false
        },
        pointStart: 2011,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Portfolio',
      data: [100000, 105000, 110000, 120000, 125000, 135000, 130000, 140000, 145000, 150000, 160000],
      color: '#21a235'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
      }]
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });


  Highcharts.chart('line-chart-comparison-5y', {
    chart: {
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '20px'
      },
      height: 600
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        style: {
          fontSize: '20px'
        }
      },
      tickInterval: 1
    },
    yAxis: [{
      title: {
        text: 'Total Value ($)'
      },
      labels: {
        style: {
          fontSize: '20px'
        }
      }
    }],
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      itemStyle: {
        fontSize: '20px'
      }
    },
    plotOptions: {
      series: {
        label: {
          enabled: false
        },
        pointStart: 2016,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Portfolio',
      data: [100000, 130000, 140000, 145000, 150000, 160000],
      color: '#21a235'
    }, {
      name: 'Comparison',
      data: [100000, 175000, 190000, 230000, 220000, 280000],
      color: '#266aba'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
      }]
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });


  Highcharts.chart('line-chart-comparison-10y', {
    chart: {
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '20px'
      },
      height: 600
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        style: {
          fontSize: '20px'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'Total Value ($)'
      },
      labels: {
        style: {
          fontSize: '20px'
        }
      }
    }],
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      itemStyle: {
        fontSize: '20px'
      }
    },
    plotOptions: {
      series: {
        label: {
          enabled: false
        },
        pointStart: 2011,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Portfolio',
      data: [100000, 105000, 110000, 120000, 125000, 135000, 130000, 140000, 145000, 150000, 160000],
      color: '#21a235'
    }, {
      name: 'Comparison',
      data: [100000, 110000, 125000, 155000, 175000, 180000, 175000, 190000, 230000, 220000, 280000],
      color: '#266aba'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
      }]
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });


  Highcharts.chart('line-chart-comparison-20y', {
    chart: {
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '20px'
      },
      height: 600
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        style: {
          fontSize: '20px'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'Total Value ($)'
      },
      labels: {
        style: {
          fontSize: '20px'
        }
      }
    }],
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      itemStyle: {
        fontSize: '20px'
      }
    },
    plotOptions: {
      series: {
        label: {
          enabled: false
        },
        pointStart: 2001,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Portfolio',
      data: [100000, 105000, 110000, 120000, 125000, 135000, 130000, 140000, 145000, 150000, 160000, 165000, 170000, 180000, 185000, 186000, 190000, 191000, 192000, 185000, 180000],
      color: '#21a235'
    }, {
      name: 'Comparison',
      data: [100000, 110000, 125000, 155000, 175000, 180000, 175000, 190000, 185000, 220000, 225000, 230000, 232000, 233000, 235000, 240000, 242000, 245000, 246000, 248000, 250000],
      color: '#266aba'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
      }]
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    }
  });
});