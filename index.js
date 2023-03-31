mapboxgl.accessToken = 'pk.eyJ1IjoibXZpdmVyb3MiLCJhIjoiY2xiZjRjeWJmMDJtdjN2bXZwNjdwaGxndCJ9.yRsQl5ihNEjn3jMKVFVkhg';
const mapElemento = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-58.5054959, -34.5949309],
    zoom: 11.15
});

const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
    'Nombre: Alberto heredia. Especializado es mecánica. Telefono: 1155834810'
    );

const tdp1 = new mapboxgl.Marker()
.setLngLat([-58.455421,-34.586787])
.addTo(mapElemento)
.setPopup(popup1); // sets a popup on this marker


    