// const colorsAllGreen = ['#54c53c', '#21a235', '#9cd353', '#125131', '#e7f4b8', '#36ba39', '#78cb42', '#167633', '#c2e576', '#081f1c'];
// const colorsAllBlue = ['#308bc4', '#1f4cab', '#51c7d2', '#1c1880', '#b8f0e5', '#266aba', '#3dabcb', '#1d2d96', '#51c7d2', '#0e003c'];
const colorsAllGreen = ['#54c53c', '#21a235', '#9cd353', '#125131', '#e7f4b8', '#36ba39', '#78cb42', '#167633', '#c2e576', '#081f1c', '#54c53f', '#21a240', '#9cd360', '#125140', '#e7f4a4', '#46ea50', '#78cb43', '#167634', '#c2e577', '#081f1d'];
const colorsAllBlue = ['#308bc4', '#1f4cab', '#51c7d2', '#1c1880', '#b8f0e5', '#266aba', '#3dabcb', '#1d2d96', '#51c7d2', '#0e003c', '#308bc9', '#1f4cbb', '#51c7d9', '#1c1889', '#b8f0e0', '#266abf', '#3dabcf', '#1d2d89', '#51c7d9', '#0e003a'];
const colorsMixedBlueGreen = ['#2a8bb0', '#76bf64', '#1a419e', '#c2e576', '#0e003c', '#4ba68f', '#1a69b1', '#9cd353', '#1b2085', '#e7f4b8', '#167633'];

const portfolioData = [
  {
    y: 21.0,
    name: "US Stocks"
  },
  {
    y: 0.3,
    name: "Intl. Stocks"
  },
  {
    y: 0.1,
    name: "US Fixed Income"
  },
  {
    y: 0.0,
    name: "Intl. Fixed Income"
  },
  {
    y: 0.0,
    name: "Convertibles"
  },
  {
    y: 0.0,
    name: "Preferred"
  },
  {
    y: 0.1,
    name: "Other"
  },
  {
    y: 78.5,
    name: "Cash"
  }
];

const comparisonData = [
  {
    y: 10.0,
    name: "US Stocks"
  },
  {
    y: 0.0,
    name: "Intl. Stocks"
  },
  {
    y: 0.0,
    name: "US Fixed Income"
  },
  {
    y: 0.0,
    name: "Intl. Fixed Income"
  },
  {
    y: 0.0,
    name: "Convertibles"
  },
  {
    y: 0.0,
    name: "Preferred"
  },
  {
    y: 0.0,
    name: "Other"
  },
  {
    y: 50.0,
    name: "Cash"
  }
];

const portfolioSectorsData = [
  {
    y: 21.0,
    name: "Energy"
  },
  {
    y: 0.3,
    name: "Materials"
  },
  {
    y: 0.1,
    name: "Industrials"
  },
  {
    y: 0.0,
    name: "Consumer Disc"
  },
  {
    y: 0.0,
    name: "Consumer Staples"
  },
  {
    y: 0.0,
    name: "Health Care"
  },
  {
    y: 0.1,
    name: "Financials"
  },
  {
    y: 78.5,
    name: "5-7 Years"
  },
  {
    y: 0.0,
    name: "Comm Services"
  },
  {
    y: 0.0,
    name: "Utilities"
  },
  {
    y: 0.0,
    name: "Real Estate"
  },
  {
    y: 0.0,
    name: "Non-Member"
  }
];

const comparisonSectorsData = [
  {
    y: 10.0,
    name: "Energy"
  },
  {
    y: 0.0,
    name: "Materials"
  },
  {
    y: 0.0,
    name: "Industrials"
  },
  {
    y: 0.0,
    name: "Consumer Disc"
  },
  {
    y: 0.0,
    name: "Consumer Staples"
  },
  {
    y: 0.0,
    name: "Health Care"
  },
  {
    y: 0.0,
    name: "Financials"
  },
  {
    y: 50.0,
    name: "Info Tech"
  },
  {
    y: 0.0,
    name: "Comm Services"
  },
  {
    y: 0.0,
    name: "Utilities"
  },
  {
    y: 0.0,
    name: "Real Estate"
  },
  {
    y: 0.0,
    name: "Non-Member"
  }
];

const portfolioMaturitiesData = [
  {
    y: 21.0,
    name: "1-7 Days"
  },
  {
    y: 0.3,
    name: "8-30 Days"
  },
  {
    y: 0.1,
    name: "31-90 Days"
  },
  {
    y: 0.0,
    name: "91-182 Days"
  },
  {
    y: 0.0,
    name: "183-364 Days"
  },
  {
    y: 0.0,
    name: "1-3 Years"
  },
  {
    y: 0.1,
    name: "3-5 Years"
  },
  {
    y: 78.5,
    name: "5-7 Years"
  },
  {
    y: 0.0,
    name: "7-10 Years"
  },
  {
    y: 0.0,
    name: "10-15 Years"
  },
  {
    y: 0.0,
    name: "15-20 Years"
  },
  {
    y: 0.0,
    name: "20-30 Years"
  },
  {
    y: 0.0,
    name: ">30 Years"
  }
];

const comparisonMaturitiesData = [
  {
    y: 10.0,
    name: "1-7 Days"
  },
  {
    y: 0.0,
    name: "8-30 Days"
  },
  {
    y: 0.0,
    name: "31-90 Days"
  },
  {
    y: 0.0,
    name: "91-182 Days"
  },
  {
    y: 0.0,
    name: "183-364 Days"
  },
  {
    y: 0.0,
    name: "1-3 Years"
  },
  {
    y: 0.0,
    name: "3-5 Years"
  },
  {
    y: 50.0,
    name: "5-7 Years"
  },
  {
    y: 0.0,
    name: "7-10 Years"
  },
  {
    y: 0.0,
    name: "10-15 Years"
  },
  {
    y: 0.0,
    name: "15-20 Years"
  },
  {
    y: 0.0,
    name: "20-30 Years"
  },
  {
    y: 0.0,
    name: ">30 Years"
  }
];


Highcharts.portfolioChartTheme = {
  colors: colorsAllGreen,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 500,
    height: 500,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Type (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '18px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '17px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: portfolioData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};



Highcharts.comparisonChartTheme = {
  colors: colorsAllBlue,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 500,
    height: 500,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Type (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '18px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '17px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: comparisonData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};

Highcharts.portfolioSectorsChartTheme = {
  colors: colorsAllGreen,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 700,
    height: 700,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Type (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '22px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '22px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: portfolioSectorsData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};


Highcharts.comparisonSectorsChartTheme = {
  colors: colorsAllBlue,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 700,
    height: 700,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Type (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '22px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '22px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: comparisonSectorsData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};

Highcharts.comparisonSectorsChartTheme = {
  colors: colorsAllBlue,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 700,
    height: 700,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Type (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '22px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '22px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>&nbsp;' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: comparisonSectorsData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};

Highcharts.portfolioMaturitiesChartTheme = {
  colors: colorsAllGreen,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 800,
    height: 800,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Maturity (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '22px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '22px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>&nbsp;' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: portfolioMaturitiesData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};

Highcharts.comparisonMaturitiesChartTheme = {
  colors: colorsAllBlue,
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    width: 800,
    height: 800,
  },
  legend: {
    enabled: true,
    align: 'right',
    layout: 'vertical',
    verticalAlign: 'middle',
    title: {
      text: 'Allocation By Maturity (%)',
      style: {
        fontFamily: 'Open Sans Condensed',
        fontSize: '22px'
      }
    },
    squareSymbol: true,
    symbolRadius: 0,
    symbolWidth: 20,
    itemStyle: {
      fontWeight: 'normal',
      fontFamily: 'Open Sans Condensed',
      fontSize: '22px'
    },
    itemMarginBottom: 7,
    labelFormatter: function () {
      return '<span>' + this.name + ': </span><strong>&nbsp;&nbsp;' + Highcharts.numberFormat(this.y, 1) + '</strong><br/>';
    }
  },
  title: {
    text: null
  },
  xAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false
      },
      center: ['50%', '50%'],
      size: '100%',
      showInLegend: true
    }
  },
  series: [{
    type: 'pie',
    name: 'Portfolio (%)',
    innerSize: '70%',
    data: comparisonMaturitiesData
  }],
  navigation: {
    buttonOptions: {
      enabled: false
    }
  }
};


document.addEventListener('DOMContentLoaded', function () {
  /***
   * On document load, donut charts is generated from `couponBreakdownChartData`and `benchmarkData`.
   */
  Highcharts.chart('portfolio-donut-chart', Highcharts.portfolioChartTheme);
  Highcharts.chart('comparison-donut-chart', Highcharts.comparisonChartTheme);
  Highcharts.chart('portfolio-sectors-donut-chart', Highcharts.portfolioSectorsChartTheme);
  Highcharts.chart('comparison-sectors-donut-chart', Highcharts.comparisonSectorsChartTheme);
  Highcharts.chart('portfolio-maturities-donut-chart', Highcharts.portfolioMaturitiesChartTheme);
  Highcharts.chart('comparison-maturities-donut-chart', Highcharts.comparisonMaturitiesChartTheme);
});