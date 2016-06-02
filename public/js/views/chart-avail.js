'use strict';
function displayAvailChart(bikeArray, dockArray) {
  if (bikeAvailChart){
    bikeAvailChart.destroy();
  }
  var bikeAvailChart;
  var bikectx = document.getElementById('chart-bikeavail').getContext('2d');
  bikeAvailChart = new Chart(bikectx, {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels: bikeArray, //TODO: this needs to be an array of labels; either figure out how to disable this or figure something out instead of reusing
      datasets: [{
        label: 'Avg. Weekly Bike Availability',
        fill: false,
        lineTension: 0.25,
        backgroundColor: 'rgba(105,190,40,0.4)',
        borderColor: 'rgba(105,190,40,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(105,190,40,1)',
        pointBackgroundColor: 'rgba(105,190,40,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(105,190,40,1)',
        pointHoverBorderColor: 'rgba(105,190,40,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: bikeArray,
      },{
        label: 'Avg. Weekly Dock Availability',
        fill: false,
        lineTension: 0.25,
        backgroundColor: 'rgba(0,21,50,0.4)',
        borderColor: 'rgba(0,21,50,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0,21,50,1)',
        pointBackgroundColor: 'rgba(0,21,50,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(0,21,50,1)',
        pointHoverBorderColor: 'rgba(0,21,50,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: dockArray,
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1,
            beginAtZero:true
          }
        }]
      }
    }
  });
};
