const map = L.map("iiif-map", {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
});


const endNode = imgJson["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]

const mercatorMap = new L.tileLayer.iiif(endNode + "/info.json").addTo(map);


document.getElementById('ui').addEventListener('click', e => {
    const id = e.target.id
    if (id) {
        document.getElementById("text-box").innerText = pagesJson[[id]]["description"];
        map.flyToBounds([pagesJson[[id]]["mapZoom"]]);
    }
}, false);


// get bounds
map.on("moveend", () => {
    // returns 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' of current view
    const currentBounds = map.getBounds().toBBoxString();
    //console.log(currentBounds)

    // output current bounds to screen
    document.getElementById("current-bounds").innerText = currentBounds;
    //document.getElementById("text-box").innerText = "Test"; // place this anywhere extactly as it is
});