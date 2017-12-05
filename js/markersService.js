angular.module('starter.service', [])

.service('markersMgr',function(){

	this.markers = [];

	this.addMarker = function(map,position){
		var marker = new google.maps.Marker({
          position: position,
          map: map          
        });
        this.markers.push(marker);
	};

	this.removeMarkers = function(){		
		angular.forEach(this.markers, function(value,key){
			value.setMap(null);
		});
	};

});