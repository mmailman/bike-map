'use strict';
function displayAvailChart(bikeArray, dockArray) {
  console.log('displaying bike availability chart');
  var bikectx = document.getElementById('chart-bikeavail').getContext('2d');
  var bikeAvailChart = new Chart(bikectx, {
    type: 'line',
    data: {
      labels: bikeArray, //TODO: this needs to be an array of labels; either figure out how to disable this or figure something out instead of reusing
      datasets: [{
        label: 'Avg. Weekly Bike Availability',
        fill: false,
        lineTension: 0.25,
        backgroundColor: 'rgba(220,180,0,0.4)',
        borderColor: 'rgba(220,180,0,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(220,180,0,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(220,180,0,1)',
        pointHoverBorderColor: 'rgba(220,180,0,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: bikeArray,
      },{
        label: 'Avg. Weekly Dock Availability',
        fill: false,
        lineTension: 0.25,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
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
