'use strict';
(function () {


googlemaps.controller('mainCtrl', function mainCtrl($scope) {
 
  $scope.map = {
    sensor: true, //required
    size: '500x300',
    zoom: 15, //a low zoom number indicates a wider view of the world.
    center: 'university of houston', //center location. it can be entered as a set of coordinates or a physical address.
    markers: ['m.d. anderson library', 'moody towers', 'cougar place, university of houston', 'cullen family plaza fountain', 'calhoun road and university dr', 'university of houston'], //marker locations
    mapevents: {redirect: true, loadmap: false}
	  /* setting loadmap=true loads the map when clicked. loadmap=false will not load the map. 
	  when the map is clicked on, the function(MAP_EVENTS), line 104 in adaptive-googlemaps.js is called.
	  the function reads if (MAP_EVENTS.redirect) as true and it will evaluate the body of the if statement.
	  */
  };

});

})();