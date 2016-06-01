var snapshotVal;
var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
var gba = [];
var gda = [];

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

//this needs to be rebuilt after Kyle's getData branch (pair programming ~~)
// var averageFilter = function (array, interval) {
//   var result = [];
//   for (var i = 0; i < array.length; i += interval) {
//     var sum = array.slice(i, i + interval).reduce(function(prev, cur){
//       return prev + cur;
//     });
//     result.push(sum / interval);
//   }
//
//   return result;
// };
