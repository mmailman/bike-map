var snapshotVal;
var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
gba = [];
gda = [];

ref.on('value', function(snapshot) {
  snapshotVal = snapshot.val();
  console.log(snapshot.val());
  bikesAvailableAll();
  docksAvailableAll();
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});

function bikesAvailableAll (){
  for(i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      gba.push(station.ba);
    });
  };
}

function docksAvailableAll (){
  for(i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      gda.push(station.da);
    });
  };
}
