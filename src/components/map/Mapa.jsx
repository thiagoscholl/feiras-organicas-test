import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidGhpYWdvc2Nob2xsIiwiYSI6ImNsaXN4OGE3djA0OWEzcm1zcHdkdm5yM2wifQ.4aDd0R5MJjQgvin406In0A';

function Mapa() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-52.31701511798634);
    const [lat, setLat] = useState(-31.7431904761913);
    const [zoom, setZoom] = useState(14.5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/thiagoscholl/cliuqmr8u00is01qib46p1nmn',
            center: [lng, lat],
            zoom: zoom
            
        });
    });  



    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Mapa;