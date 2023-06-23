import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import MarkerProdutorSmall from "../../assets/MarkerProdutorSmall.png";
import MarkerProdutorBig from "../../assets/MarkerProdutorBig.png";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-52.32134967125439, -31.74151271155462],
      },
      properties: {
        title: "Feira do Produtor 1",
        description: "Descrição da feira do Produtor 1",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-52.32059285322547, -31.74763032531852],
      },
      properties: {
        title: "Feira do Produtor 2",
        description: "Descrição da feira do Produtor 2",
      },
    },
  ],
};

function MapboxMap() {
  const [lng, setLng] = useState(-52.31701511798634);
  const [lat, setLat] = useState(-31.7431904761913);
  const [zoom, setZoom] = useState(14.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/thiagoscholl/cliuqmr8u00is01qib46p1nmn",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    geojson.features.forEach((marker) => {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      const width = 30;
      const height = 48;
      el.className = "marker";
      el.style.backgroundImage = `url(${MarkerProdutorSmall})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      //el.addEventListener('click', () => {
      //window.alert(marker.properties.message);
      //});

      // Se o cursor passar por cima do marcador, aumentar o tamanho do marcador
      el.addEventListener("mouseover", () => {
        el.style.backgroundImage = `url(${MarkerProdutorBig})`;
        el.style.width = `62px`;
        el.style.height = `90px`;
        el.style.backgroundSize = "100%";
        el.style.cursor = "pointer";
      });

      // Se o cursor sair de cima do marcador, voltar ao tamanho original do marcador
      el.addEventListener("mouseout", () => {
        el.style.backgroundImage = `url(${MarkerProdutorSmall})`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = "100%";
      });

      // Add markers to the map.
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });

    return () => {
      map.remove();
    };
  });

  return <div id='map' className='h-screen' />;
}

export default MapboxMap;

