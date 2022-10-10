
function getRandomLatLng(map) {
  var bounds = map.getBounds(),
    southWest = bounds.getSouthWest(),
    northEast = bounds.getNorthEast(),
    lngSpan = northEast.lng - southWest.lng,
    latSpan = northEast.lat - southWest.lat;
    
  return new L.LatLng(
      southWest.lat + latSpan * Math.random(),
      southWest.lng + lngSpan * Math.random());
}



    var x="Eugenio Velia"
    var y=0 
    y=Math.floor(Math.random() * 30);
    
    function addlike(){
      y++
      document.getElementById("like").innerHTML=y
    }
