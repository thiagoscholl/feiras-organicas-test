import React, { useEffect, useState, useRef } from "react";
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

function MapboxMap() {
  const [lng, setLng] = useState(-52.31701511798634);
  const [lat, setLat] = useState(-31.7431904761913);
  const [zoom, setZoom] = useState(14.5);
  //const [isClicked, setIsClicked] = useState(false);
  const isClicked = useRef(false);
  //const [selectedMarker, setSelectedMarker] = useState(null);
  const selectedMarker = useRef(null);

  const urlMarkerSmall = {
    feira: MarkerFeiraSmall,
    produtor: MarkerProdutorSmall,
    loja: MarkerLojaSmall,
    restaurante: MarkerRestauranteSmall,
    servico: MarkerServicoSmall,
  };

  const urlMarkerBig = {
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
      // Cria os marcadores
      const el = document.createElement("div");
      const width = 30;
      const height = 48;
      el.className = "marker";
      el.style.backgroundImage = `url(${
        urlMarkerSmall[marker.properties.type]
      })`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      // Adiciona os marcadores no mapa
      const markerInstance = new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      // Cria os popups com os titulos
      const popup = new mapboxgl.Popup({
        closeButton: false,
        className: `marker-title`,
        offset: [0, -40],
      }).setHTML(`<h1>${marker.properties.title}</h1>`);

      // Quando clicar no marcador, abrir o popup e alterar o Marker
      markerInstance.getElement().addEventListener("click", () => {
        if (isClicked.current) {
          markerInstance.setPopup(popup).togglePopup();
        }

        // Se clicar no marcador e ele estiver selecionado, deselecionar
        if (selectedMarker.current === marker) {
          selectedMarker.current = null;
          isClicked.current = false;

          console.log("marker deselecionado");

          el.style.backgroundImage = `url(${
            urlMarkerSmall[marker.properties.type]
          })`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = "100%";

          return;
        } else {
          selectedMarker.current = marker;
          isClicked.current = true;
          console.log("marker clicado");

          el.style.backgroundImage = `url(${
            urlMarkerBig[marker.properties.type]
          })`;
          el.style.width = `${width + 35}px`;
          el.style.height = `${height + 53.5}px`;
          el.style.backgroundSize = "100%";
        }
      });

      // Quando o cursor passar por cima do marcador, abrir o popup e aumentar marker
      markerInstance.getElement().addEventListener("mouseenter", () => {
        if (!isClicked.current) {
          markerInstance.setPopup(popup).togglePopup();

          el.style.backgroundImage = `url(${
            urlMarkerBig[marker.properties.type]
          })`;
          el.style.width = `${width + 35}px`;
          el.style.height = `${height + 53.5}px`;
          el.style.backgroundSize = "100%";
          el.style.cursor = "pointer";
        }
      });

      // Quando o cursor sair de cima do marcador, fechar o popup e diminuir marker
      markerInstance.getElement().addEventListener("mouseout", () => {
        if (!isClicked.current) {
          markerInstance.togglePopup();

          el.style.backgroundImage = `url(${
            urlMarkerSmall[marker.properties.type]
          })`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = "100%";
        }
      });

      // Quando marker estiver selecionado, ao clicar no mapa, deselecionar marker
      map.on("click", () => {
        //if (markerInstance.getPopup() !== null) {
        //  console.log("tem popup", markerInstance.getPopup());
        //}

        //  deu tilt n sei de mais nada
        if (!isClicked.current) {
          console.log("mapa clicado");
          selectedMarker.current = null;
          el.style.backgroundImage = `url(${
            urlMarkerSmall[marker.properties.type]
          })`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = "100%";
        }
      });

      // Altera o tamanho do marcador de acordo com o zoom
      map.on("zoom", () => {
        const currentZoom = map.getZoom();
        const scaleFactor = Math.pow(1.15, currentZoom - zoom);
        const scaledWidth = width * scaleFactor;
        const scaledHeight = height * scaleFactor;

        el.style.width = `${scaledWidth}px`;
        el.style.height = `${scaledHeight}px`;

        if (currentZoom < 4.5) {
          map.setZoom(4.5);
        }
      });

      // Clean up marker instance
      markerInstance.getElement().addEventListener("DOMNodeRemoved", () => {
        markerInstance.remove();
      });
    });

    return () => {
      map.remove();
    };
  });

  return <div id='map' className='flex-1 h-full' />;
}

export default MapboxMap;

