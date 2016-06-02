(function(module) {
  var DataCollector = {};

  DataCollector.snapshotVal;
  DataCollector.ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
  DataCollector.gba = [];
  DataCollector.gda = [];
  var result = [];
  var averageAll = [];

  DataCollector.averageAllFilter = function(array) {
    averageAll = [];
    for(var i = 0; i < array.length; i++) {
      averageAll.push(Math.floor(array[i].reduce(function(prev,cur) {
        return (prev + cur);
      }) / array[i].length));
    }
    return averageAll;
  };

  DataCollector.condenseAverage = function(array, interval) {
    var result = [];
    for (var i = 0; i < array.length; i += interval) {
      var sum = array.slice(i, i + interval).reduce(function(prev, cur) {
        return prev + cur;
      });
      result.push(Math.floor(sum / interval));
    }
    result.pop();
    return result;
  };

  DataCollector.oneStationByInterval = function(array, interval, station) {
    var result = [];
    for (var i = 0; i < array.length; i += interval) {
      result.push(array[i][station]);
    }
    return result;
  };

  DataCollector.oneStationHourlyAverage = function(array,station) {
    var result = [];
    var avg = [];
    for (var i = 0; i < array.length; i++) {
      result.push(array[i][station]);
    };
    for (var i = 0; i < result.length; i += 12) {
      var sum = result.slice(i, i + 12).reduce(function(prev, cur) {
        return prev + cur;
      });
      avg.push(Math.floor(sum / 12));
    }
    avg.pop();
    return avg;
  };

  DataCollector.bikesAvailableAll = function() {
    DataCollector.gba = [];
    for(var i = 0 ; i < Object.keys(DataCollector.snapshotVal.data).length; i++) {
      temp = [];
      DataCollector.snapshotVal.data[Object.keys(DataCollector.snapshotVal.data)[i]].stations.forEach(function(station) {
        temp.push(station.ba);
      });
      DataCollector.gba.push(temp);
    };
  };

  DataCollector.docksAvailableAll = function() {
    DataCollector.gda = [];
    for(var i = 0 ; i < Object.keys(DataCollector.snapshotVal.data).length; i++) {
      temp = [];
      DataCollector.snapshotVal.data[Object.keys(DataCollector.snapshotVal.data)[i]].stations.forEach(function(station) {
        temp.push(station.da);
      });
      DataCollector.gda.push(temp);
    };
  };

  module.DataCollector = DataCollector;
})(window);
