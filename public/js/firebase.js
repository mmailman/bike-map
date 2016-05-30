var Firebase = require('firebase');
$('#data').on('click',function(e){
  e.preventDefault();
  var ref = new Firebase("https://bike-map-fd305.firebaseio.com/");
// Attach an asynchronous callback to read the data at our posts reference
  ref.on('value', function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
});
