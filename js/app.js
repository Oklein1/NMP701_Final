const map = L.map("iiif-map", {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
});


const endNode = imgJson["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]

const mercatorMap = new L.tileLayer.iiif(endNode + "/info.json").addTo(map);


map.on("moveend", () => {
    // returns 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' of current view
    const currentBounds = map.getBounds().toBBoxString();
    //console.log(currentBounds)

    // output current bounds to screen
    document.getElementById("current-bounds").innerText = currentBounds;
    document.getElementById("caption-wrapper").innerText = "Test";
});

document
    .getElementById("zoom-to-legend")
    .addEventListener("click", () => {
        map.flyToBounds([
            [-584, 12],
            [-284, 312],
        ]);
    });




