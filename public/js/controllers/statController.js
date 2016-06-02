//controller for stats page
'use strict';

(function(module){
  var statController = {};
  statController.index = function(){
    $('.stats-page').show().siblings().hide();
  };
  module.statController = statController;
})(window);
