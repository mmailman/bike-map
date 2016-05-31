(function(module) {
  var mapView = {};

  mapView.renderMarkerInfo = function(station, scriptTemplateId) {
    var template = Handlebars.compile($(scriptTemplateId).text());
    return template(station);
  };
  module.mapView = mapView;
})(window);
