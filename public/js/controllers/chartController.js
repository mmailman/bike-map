$('#station-select').on('change', function(){
  if(true){};
  displayAvailChart(oneStationHourlyAverage(gba,$('#station-select').val()),oneStationHourlyAverage(gda,$('#station-select').val()));
});
