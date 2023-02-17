let map;

function initMap() {
    const myLatLng = { lat: -14.798614153727822, lng: -39.170296909176216 }
    const map = new google.maps.Map(document.getElementById("mapa"), {
        center: myLatLng,
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Evento CCE",
    });

    const contentString =
        '<div id="content"><h4>I CONGRESSO DE CIÊNCIAS DA EDUCAÇÃO: CONSTRUINDO PROPOSTAS NA PESQUISA, ENSINO E NA EXTENSÃO CCE – UESC / 2023</h4><img src="https://crm.intellisys.com.br/IMG/Intellisys/Banner/Teste/ColoridaPequena.svg" alt="logo" style="height: 75px;width: 150px;"></div>';

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