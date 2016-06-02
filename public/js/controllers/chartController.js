$('#station-select').on('change', function(){
  displayAvailChart(oneStationHourlyAverage(gba,$('#station-select').val()),oneStationHourlyAverage(gda,$('#station-select').val()));
});
