$('#station-select').on('change', function(){
  if('#station-select'.val() == null){
    displayAvailChart(condenseAverage(averageAllFilter(gba),12),condenseAverage(averageAllFilter(gda),12));
  }else{
    displayAvailChart(oneStationHourlyAverage(gba,$('#station-select').val()),oneStationHourlyAverage(gda,$('#station-select').val()));
  }
});
