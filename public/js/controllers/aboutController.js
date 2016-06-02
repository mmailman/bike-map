'use strict';

(function(module){
  var aboutController = {};
  aboutController.index = function(){
    $('.about-page').show().siblings().hide();
    $('.nearest').hide();
    if(!Station.all){
      Station.requestData(Station.initStation);
    }
  };
  module.aboutController = aboutController;
})(window);
