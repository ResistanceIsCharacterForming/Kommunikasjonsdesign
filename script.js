
const centerLat = 59.128611;
const centerLong = 11.352778;

const coordinates = [
   {
      index: 0,
      center: [centerLat, centerLong],
      zoom: 17.5
   }
]

coordinates.map((coord) => {
   console.log(coord.center);
   console.log(coord.zoom);
})


let map = L.map('map').setView([coordinates[0].center.map(coord => {

})], coordinates[0].zoom);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 20,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([centerLat, centerLong]).addTo(map)