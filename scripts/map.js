let map;

function initMap() {
    const myLatLng = { lat: -14.815257, lng: -39.2902629 }
    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });

    const contentString =
        '<div id="content"><img src="ativos/logo.jpeg" alt="logo" style="height: 100px;width: 200px;"></div>';

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
    });
}

window.initMap = initMap;
