/**
 * Created by rdaen_000 on 31/01/2017.
 */
angular.module('main').controller('GaugeCtrl',GaugeCtrl);
function GaugeCtrl() {
  var vm=this;
   vm.gauge ={
    value: 50,
    intervals : {
      values: [0,10,20,30,40,50] // The interval is sorted and repeated values are removed
    },
    options : {
      needleColor: 'blue',
      min: 0,
      max: 50,
      intervalFormatter: function (v){return v;},
      mainFormatter: function(v){return v;},
      unit: 'lts'
      // Other options...
    }
  };
}
