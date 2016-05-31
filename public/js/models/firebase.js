var snapshotVal;

$('#data').on('click',function(e){
  e.preventDefault();
  console.log('button fucking clicked');
  var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
  ref.on('value', function(snapshot) {
    snapshotVal = snapshot.val();
    console.log(snapshot.val());
    snapshotVal.data[1464579162191].stations.forEach(function(station){
      $('.data').append('<li>' + station.s + '</li>');
    });
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
});

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDGOKNzi3oLaVYw7OdtZ1AbjRmuQvJm4uA',
  authDomain: 'bike-map-aa221.firebaseapp.com',
  databaseURL: 'https://bike-map-aa221.firebaseio.com',
  storageBucket: 'bike-map-aa221.appspot.com',
};
firebase.initializeApp(config);
