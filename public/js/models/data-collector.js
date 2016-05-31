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
    temp = [];
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      temp.push(station.ba);
      gba.push(temp);
    });
  };
}

function docksAvailableAll (){
  for(i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
    temp = [];
    snapshotVal.data[Object.keys(snapshotVal.data)[i]].stations.forEach(function(station){
      temp.push(station.da);
      gda.push(temp);
    });
  };
}
