var snapshotVal;
var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
var gba = [];
var gda = [];

var averageFilter = function (array, interval) {
  var average = [];
  for(var i = 0; i < array.length; i ++) {
    average.push(array[i].reduce(function(prev,cur){
      return (prev + cur);
    }) / array[i].length);
  }
  return average;
};

ref.on('value', function(snapshot) {
  snapshotVal = snapshot.val();
  console.log(snapshot.val());
  bikesAvailableAll();
  docksAvailableAll();
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});

function bikesAvailableAll (){
  gba = [];
  for(var i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    temp = [];
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      temp.push(station.ba);
      gba.push(temp);
    });
  };
}

function docksAvailableAll (){
  gda = [];
  for(var i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    temp = [];
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      temp.push(station.da);
      gda.push(temp);
    });
  };
}
