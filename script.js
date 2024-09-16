const centerLat = 59.128611;
const centerLong = 11.352778;

const coordinates = [
   {
      index: 0,
      center: [centerLat, centerLong],
      zoom: 17.5
   }
];

// Loop through the coordinates array to set map view and add markers
coordinates.map((coord) => {
   console.log(coord.center);
   console.log(coord.zoom);

   // Create a map view for each coordinate
   let map = L.map('map').setView(coord.center, coord.zoom);

   // Add tile layer to the map
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);

   // Add a marker for each coordinate
   L.marker(coord.center).addTo(map);
});

