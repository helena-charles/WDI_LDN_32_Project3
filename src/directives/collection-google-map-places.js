/* global google */

function googleMap() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="collection-google-map"></div>',
    scope: {
      center: '=',
      place: '='
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        zoom: 9,
        center: { lat: 51.515328, lng: -0.072031 }
      });
      let infoWindow = null;
      $scope.$watch('place', () => {
        infoWindow = new google.maps.InfoWindow();
        $scope.place.forEach(place => showMarkers(place));
      });

      function showMarkers(place) {
        console.log(place.weather.data[0].icon);
        const marker = new google.maps.Marker({
          position: { lat: place.location.lat, lng: place.location.lng },
          map: map,
          icon: `/assets/images/weather-SVG/${place.weather.data[0].icon}.svg`
        });
        marker.addListener('click', () => {
          showInfoWindow(place, marker);
        });
      }
      function showInfoWindow(place, marker) {
        infoWindow.close();
        infoWindow.setContent(`<div><img class="infoWindow" src=${place.image}><h1>${place.name}</h1><h1>${place.type}</h1><h1>${place.address}</h1><a href="/#!/places/${place._id}">Show More</a></div>`);
        infoWindow.open(map, marker);
        map.setCenter(marker.getPosition());
      }
    }
  };
}

export default googleMap;

/* <h1>${place.weather.data.day.moonPhase}</h1> */