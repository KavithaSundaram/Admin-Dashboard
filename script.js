let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")


btn.onclick = function(){
    sidebar.classList.toggle("active")
}


/*==========chart============== */

var barChartOptions = {
    series: [{
    data: [1500,10000,8000]
  }],
    chart: {
    background:"transparent",
    type: 'bar',
    height: 350,
    toolbar:{
        show:false
    }
  },
  colors: [
    "#2962ff",
    "#d50000",
    "#2e7d32",
  ],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      distributed:true,
      columnwidth:"40%",
    }
  },
  dataLabels: {
    enabled: false
  },
  fill:{
    opacity:1,
  },
  grid:{
    borderColor:"#55596e",
    yaxis:{
        lines:{
            show:true,
        },
    },
    xaxis:{
        lines:{
            show:false,
        },
    },
  },
  xaxis: {
    categories: ['Expanse', 'Allowance','Transport',],
    title:{
        style:{
            color:"#f5f7ff",
        },
    },
  },
  };

 
    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();



/*============Area chart==============*/

var areaChartOptions = {
    series: [{
    name: 'ONLINE',
    type: 'area',
    data: [10000, 15000, 25000, 13000, 8000, 12000, 4000,15000]
  }, {
    name: 'OFFLINE',
    type: 'line',
    data: [3000, 6000, 10000, 20000, 10000, 7000, 10000, 15000]
  }],
    chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['MON', 'TUE','WED','THUR','FRI','SAT','SUN',],
  markers: {
    size: 0
  },
  colors: [
    "#2962ff",
    "#2e7d32",
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();
