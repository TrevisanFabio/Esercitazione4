
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
var n=1;
while(n<7){
y=Math.floor(Math.random() * 30);
console.log("card-title"+n )
fetch('https://dummyjson.com/users/'+y)
.then(res => res.json())
.then(results => {
            /*console.log(results)*/
            document.getElementById("card-title"+n).innerHTML=results.username})
}
  
fetch('https://dummyjson.com/posts/'+y)
  .then(res => res.json())
  .then(results => {
    
  document.getElementById("card-body1").innerHTML=results.body})


  
  var y=0 
    y=Math.floor(Math.random() * 30);
    
    function addlike(){
      y++
      document.getElementById("like1").innerHTML=y
      
    }
