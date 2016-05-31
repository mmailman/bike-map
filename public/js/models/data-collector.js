var snapshotVal;
var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');

ref.on('value', function(snapshot) {
  snapshotVal = snapshot.val();
  console.log(snapshot.val());
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});

for(i = 0 ; i < Object.keys(snapshotVal.data).length; i++){
  snapshotVal.data[i].stations.forEach(function(station){
    console.log(Object.keys(snapshotVal.data));
  });
}
