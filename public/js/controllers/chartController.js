$('#station-select').on('change', function(){
  if($('#station-select').val() == ''){
    ChartAvail.displayAvailChart(DataCollector.condenseAverage(DataCollector.averageAllFilter(DataCollector.gba),12),DataCollector.condenseAverage(DataCollector.averageAllFilter(DataCollector.gda),12));
  }else{
    ChartAvail.displayAvailChart(DataCollector.oneStationHourlyAverage(DataCollector.gba,$('#station-select').val()),DataCollector.oneStationHourlyAverage(DataCollector.gda,$('#station-select').val()));
  }
});
