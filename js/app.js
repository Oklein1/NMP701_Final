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
// Creating multi polylines
//const multipolyline = L.polygon(tri, {color: 'red'}).addTo(map) // this goes in conditional for certain slide


document.getElementById('ui').addEventListener('click', e => {
    const id = e.target.id
    if (id == "scene2") {
        document.getElementById("text-box").innerText = data[[id]]["description"];
        map.flyToBounds([data[[id]]["mapZoom"]]);
        triPolygon.addTo(map)
    } else {
        triPolygon.remove(); // DIE FRAGE: how to streamline this is the question... hm.
        document.getElementById("text-box").innerText = data[[id]]["description"];
        map.flyToBounds([data[[id]]["mapZoom"]]);
    }
}, false);



// FUNCTIONS

// const textToHTML = function (str) {
//     // check for DOMParser support
//     if (support) {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(str, 'text/html');
//         return doc.body.innerHTML;
//     }

//     // Otherwise, create div and append HTML
//     var dom = document.createElement('div');
//     dom.innerHTML = str;
//     return dom;

// };


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