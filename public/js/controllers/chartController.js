$('#station-select').on('change', function(){
  displayAvailChart(oneStationHourlyAverage(gba,$('#station-select').val() - 1),oneStationHourlyAverage(gda,$('#station-select').val() - 1));
// -1 on .val() to get index number from id
});
