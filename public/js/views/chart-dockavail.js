'use strict';
var stationData = [];
var chooseStationBikes = function(stationId) { //this uses array index; if we use id we have to subtract 1
  for (i = 0; i < gba.length; i++) {
    stationData.push(gda[i][stationId]);
  }
};
//when user selects a station on the stats page, select array index with chooseStationBikes to generate station-specific array, then call displayBikeAvailChart
function displayDockAvailChart() {
  console.log('displaying dock availability chart');
  var bikectx = document.getElementById('chart-dockavail').getContext('2d');
  var bikeAvailChart = new Chart(bikectx, {
    type: 'line',
    data: {
      labels: stationData, //this needs to be an array of labels just as long as the data, timestamps in the future but just reusing data for now
      datasets: [{
        label: 'Weekly Dock Availability',
        fill: false,
        lineTension: 0.1,
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
        data: stationData, //ex gda[0][0]first is the timestamp, second is station index in array (id -1)
      }]
    },
  });
};
