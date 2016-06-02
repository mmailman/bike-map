'use strict';

(function(module){
  var aboutController = {};
  aboutController.index = function(){
    $('.about-page').show().siblings().hide();
  };
  module.aboutController = aboutController;
})(window);
