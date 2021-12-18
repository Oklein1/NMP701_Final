const map = L.map("iiif-map", {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
});


const endNode = imgJson["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]
const mercatorMap = new L.tileLayer.iiif(endNode + "/info.json").addTo(map);

const tri = [
    [-240.17660522460938, 322.4518280029297],
    [-147.80023956298828, 482.82305908203125],
    [-70.38028907775879, 406.868106842041],
    [-240.17660522460938, 322.4518280029297]
]

const triPolygon = L.polygon(tri, {
    color: 'red'
})

const decan = [
    [
        [-70.75, 407.5],
        [-55.75, 415.75],
        [-59.8125, 422.625],
        [-67.5, 433.25],
        [-73.625, 441.3125],
        [-80.74147033691406, 450.4189224243164],
        [-95.61647033691406, 440.5439224243164],
        [-86.125, 429.3125],
        [-80.4375, 421.9375],
        [-70.375, 406.875],
        [-70.75, 407.5]
    ],

    [
        [-95.5, 440.625],
        [-104.125, 449.875],
        [-110.375, 455.625],
        [-118.125, 461.875],
        [-106.75, 474.625],
        [-95, 465.125],
        [-80.875, 450.375],
        [-95.5, 440.625]
    ],

    [
        [-118.08413314819336, 461.93527603149414],
        [-132.83413314819336, 472.87277603149414],
        [-147.75100326538086, 482.81695556640625],
        [-139.43850326538086, 497.75445556640625],
        [-126.97190475463867, 489.7614517211914],
        [-117.90940475463867, 483.4489517211914],
        [-106.67619895935059, 474.6742744445801],
        [-117.98869895935059, 461.8617744445801]
    ]
]

const decanPolygon = L.polygon(decan, {
    color: 'blue'
})
// Creating multi polylines
//const multipolyline = L.polygon(tri, {color: 'red'}).addTo(map) // this goes in conditional for certain slide


document.getElementById('ui').addEventListener('click', e => {
    const id = e.target.id
    if (id == "scene3") {
        document.getElementById("text-box").innerText = data[[id]]["description"];
        map.flyToBounds([data[[id]]["mapZoom"]]);
        triPolygon.addTo(map)
        decanPolygon.addTo(map)
    } else {
        triPolygon.remove(); // DIE FRAGE: how to streamline this is the question... hm.
        decanPolygon.remove()
        document.getElementById("text-box").innerText = data[[id]]["description"];
        map.flyToBounds([data[[id]]["mapZoom"]]);
    }
}, 
false);



// FUNCTIONS




// MAP TOOLS: 

map.on("moveend", () => {
    // GETS BOUNDS
    // returns 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' of current view
    const currentBounds = map.getBounds().toBBoxString();
    document.getElementById("current-bounds").innerText = currentBounds;
});


map.on('click', function (e) {
    // gets lat/lon for geometry creation
    console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});





// NOTES: 
// 1) example: https://qawithexperts.com/article/javascript/convert-text-to-html-using-javascript/331
// 2) Example for function: document.getElementById("divMain").innerHTML= textToHTML('<h1>Hello</h1><p>Your HTML Contents are visible now</p>');
// 3) Example for inputing points: L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),