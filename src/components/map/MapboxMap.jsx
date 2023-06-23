import React, { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import MarkerFeiraSmall from "../../assets/MarkerFeiraSmall.png";
import MarkerFeiraBig from "../../assets/MarkerFeiraBig.png";
import MarkerLojaSmall from "../../assets/MarkerLojaSmall.png";
import MarkerLojaBig from "../../assets/MarkerLojaBig.png";
import MarkerRestauranteSmall from "../../assets/MarkerRestauranteSmall.png";
import MarkerRestauranteBig from "../../assets/MarkerRestauranteBig.png";
import MarkerServicoSmall from "../../assets/MarkerServicoSmall.png";
import MarkerServicoBig from "../../assets/MarkerServicoBig.png";
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
        description: "Descrição da Feira do Produtor 1",
        type: "feira",
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
        description: "Descrição do Produtor 2",
        type: "produtor",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-52.3206499411289, -31.739828233116636],
      },
      properties: {
        title: "Loja do Produtor 3",
        description: "Descrição da Loja do Produtor 3",
        type: "loja",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-52.32466252577608, -31.739499758037592],
      },
      properties: {
        title: "Restaurante do Produtor 4",
        description: "Descrição do Restaurante do Produtor 4",
        type: "restaurante",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-52.32519896757382, -31.74070416096591],
      },
      properties: {
        title: "Serviço do Produtor 5",
        description: "Descrição do Seriço do Produtor 5",
        type: "servico",
      },
    },
  ],
};

//tipos: Serviço, Loja, Feira, Restaurante, Produdor

function MapboxMap() {
  const [lng, setLng] = useState(-52.31701511798634);
  const [lat, setLat] = useState(-31.7431904761913);
  const [zoom, setZoom] = useState(14.5);

  const markerSmall = {
    feira: MarkerFeiraSmall,
    produtor: MarkerProdutorSmall,
    loja: MarkerLojaSmall,
    restaurante: MarkerRestauranteSmall,
    servico: MarkerServicoSmall,
  };

  const markerBig = {
    feira: MarkerFeiraBig,
    produtor: MarkerProdutorBig,
    loja: MarkerLojaBig,
    restaurante: MarkerRestauranteBig,
    servico: MarkerServicoBig,
  };

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
      el.style.backgroundImage = `url(${markerSmall[marker.properties.type]})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      //el.addEventListener('click', () => {
      //window.alert(marker.properties.message);
      //});

      // Se o cursor passar por cima do marcador, aumentar o tamanho do marcador
      el.addEventListener("mouseover", () => {
        el.style.backgroundImage = `url(${markerBig[marker.properties.type]})`;
        el.style.width = `57.8px`;
        el.style.height = `90px`;
        el.style.backgroundSize = "100%";
        el.style.cursor = "pointer";
      });

      // Se o cursor sair de cima do marcador, voltar ao tamanho original do marcador
      el.addEventListener("mouseout", () => {
        el.style.backgroundImage = `url(${
          markerSmall[marker.properties.type]
        })`;
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

