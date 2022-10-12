
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
y=Math.floor(Math.random() * 30);
fetch('https://dummyjson.com/users/'+y)
.then(res => res.json())
.then(results => {
            console.log(results)
            document.getElementById("card-title").innerHTML=results.username})

fetch('https://dummyjson.com/posts/'+y)
  .then(res => res.json())
  .then(results => {
    console.log(results)
  document.getElementById("card-body").innerHTML=results.body})


  
  var y=0 
    y=Math.floor(Math.random() * 30);
    
    function addlike(){
      y++
      document.getElementById("like").innerHTML=y
      
    }
