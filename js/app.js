const map = L.map("iiif-map", {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
});


const endNode = imgJson["sequences"][0]["canvases"][0]["images"][0]["resource"]["service"]["@id"]

const mercatorMap = new L.tileLayer.iiif(endNode + "/info.json").addTo(map);

// split to get this to like one line

document.getElementById('ui').addEventListener('click', e => {
    const target = e.target;
    console.log(e)
    if (target.id === "start") {
        document.getElementById("text-box").innerText = pagesJson["start"]["description"]; 
        map.flyToBounds([pagesJson["start"]["mapZoom"]]);
        
    } 
    else if (target.id === "scene_1") {
        document.getElementById("text-box").innerText = pagesJson["scene1"]["description"]; 
        map.flyToBounds([pagesJson["scene1"]["mapZoom"]]);
        
    }
    else if (target.id === "scene-two") {
        document.getElementById("text-box").innerText = pagesJson["scene2"]["description"]; 
        map.flyToBounds([pagesJson["scene2"]["mapZoom"]]);

    } else if (target.id == "scene-three"){
        document.getElementById("text-box").innerText = pagesJson["scene3"]["description"]; 
        map.flyToBounds([pagesJson["scene3"]["mapZoom"]]);
    }
    else if (target.id == "scene-four"){
        document.getElementById("text-box").innerText = pagesJson["scene4"]["description"]; 
        map.flyToBounds([pagesJson["scene4"]["mapZoom"]]);
    }
    else if (target.id == "scene-four-continued"){
        document.getElementById("text-box").innerText = pagesJson["scene4Continued"]["description"]; 
        map.flyToBounds([pagesJson["scene4Continued"]["mapZoom"]]);
    }
    else if (target.id == "scene-five"){
        document.getElementById("text-box").innerText = pagesJson["scene5"]["description"]; 
        map.flyToBounds([pagesJson["scene5"]["mapZoom"]]);
    }
    else if (target.id == "scene-six"){
        document.getElementById("text-box").innerText = pagesJson["scene6"]["description"]; 
        map.flyToBounds([pagesJson["scene6"]["mapZoom"]]);
    }
    else if (target.id == "scene-seven"){
        document.getElementById("text-box").innerText = pagesJson["scene7"]["description"]; 
        map.flyToBounds([pagesJson["scene7"]["mapZoom"]]);
    }
    else if (target.id == "scene-eight"){
        document.getElementById("text-box").innerText = pagesJson["scene8"]["description"]; 
        map.flyToBounds([pagesJson["scene8"]["mapZoom"]]);
    }
    else if (target.id == "scene-eight-continued"){
        document.getElementById("text-box").innerText = pagesJson["scene8Continued"]["description"]; 
        map.flyToBounds([pagesJson["scene8Continued"]["mapZoom"]]);
    }
    else if (target.id == "end"){
        document.getElementById("text-box").innerText = pagesJson["end"]["description"]; 
        map.flyToBounds([pagesJson["end"]["mapZoom"]]);
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

