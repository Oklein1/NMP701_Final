const map = L.map("iiif-map", {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
});


const endNode = imgJson["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]

const mercatorMap = new L.tileLayer.iiif(endNode + "/info.json").addTo(map);


const scenes = document.getElementById('ui-box');

document.getElementById('ui').addEventListener('click', function (e) {
    var target = e.target;
    if (target.id === "scene-one") {
        console.log('s1?')

        document.getElementById("caption-wrapper").innerText = "onnnnnneeeee"; // place this anywhere extactly as it is

        map.flyToBounds([
                        [-584, 12],
                        [-284, 312],
                    ]);
        //scenes.style.backgroundColor = "red";
    } else if (target.id === "scene-two") {
        console.log('s2?')

        document.getElementById("caption-wrapper").innerText = "ttttwwwwwooooo"; // place this anywhere extactly as it is
        
        map.flyToBounds([
                        [-300, 11],
                        [-250, 300],
                    ]);
        //scenes.style.backgroundColor = "green";
    } else if (target.id == "scene-three"){
        console.log('s3')
        document.getElementById("caption-wrapper").innerText = "ttthhhrrrwwww"; // place this anywhere extactly as it is
        
        map.flyToBounds([
                        [-584, 12],
                        [-284, 312],
                    ]);
        //scenes.style.backgroundColor = "purple";
    }
}, false);




map.on("moveend", () => {
    // returns 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' of current view
    const currentBounds = map.getBounds().toBBoxString();
    //console.log(currentBounds)

    // output current bounds to screen
    document.getElementById("current-bounds").innerText = currentBounds;
    //document.getElementById("caption-wrapper").innerText = "Test"; // place this anywhere extactly as it is
});

// document
//     .getElementById("scene-one")
//     .addEventListener("click", () => {
//         map.flyToBounds([
//             [-584, 12],
//             [-284, 312],
//         ]);
//     });