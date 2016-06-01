var snapshotVal;
var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
var gba = [];
var gda = [];
var result = [];
var averageAll = [];

var averageAllFilter = function (array) {
  averageAll = [];
  for(var i = 0; i < array.length; i ++) {
    averageAll.push(array[i].reduce(function(prev,cur){
      return (prev + cur);
    }) / array[i].length);
  }
  return averageAll;
};

var condenseAverage = function(array, interval){
  var result = [];
  for (var i = 0; i < array.length; i += interval) {
    var sum = array.slice(i, i + interval).reduce(function(prev, cur){
      return prev + cur;
    });
    result.push(sum / interval);
  }
  return result;
};
//station will be 0-53.
var oneStationByInterval = function(array, interval, station){
  var result = [];
  for (var i = 0; i < array.length; i += interval) {
    result.push(array[i][station]);
  }
  return result;
};

var oneStationHourlyAverage = function(array,station){
  var result = [];
  var avg = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i][station]);
  };
  for (var i = 0; i < result.length; i += 12) {
    var sum = result.slice(i, i + 12).reduce(function(prev, cur){
      return prev + cur;
    });
    avg.push(Math.floor(sum / 12));
  }
  return avg;
};

ref.on('value', function(snapshot) {
  snapshotVal = snapshot.val();
  console.log(snapshot.val());
  bikesAvailableAll();
  docksAvailableAll();
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});

function gbaReduce (arrArr){
  for(var i = 0; i < arrArr.length; i ++) {
    result.push(arrArr[i].reduce(function(prev,cur){
      return (prev + cur)
 })/arrArr[i].length);
}


function bikesAvailableAll (){
  gba = [];
  for(var i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    temp = [];
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      temp.push(station.ba);
    });
    gba.push(temp);
  };
}

function docksAvailableAll (){
  gda = [];
  for(var i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    temp = [];
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      temp.push(station.da);
    });
    gda.push(temp);
  };
}
