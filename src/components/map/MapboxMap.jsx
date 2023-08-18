import React, { useEffect, useRef } from "react";
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

function MapboxMap(props) {
  const isClicked = useRef(false);
  const selectedMarker = useRef(null);

  let lng = -52.31701511798634;
  let lat = -31.7431904761913;
  let zoom = 14.5;

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
      let popupCounter = 0; // Contador para quando o marker é clicado e o popup é aberto
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

      markerInstance.getElement().addEventListener("click", () => {
        // Quando clicar no marcador se ele estiver selecionado, deselecionar
        if (selectedMarker.current === marker) {
          selectedMarker.current = null;
          isClicked.current = false;
          popupCounter = 0;
          //console.log("marker deselecionado");
        } else {
          // Se clicar no marcador e ele não estiver selecionado, selecionar
          markerInstance.setPopup(popup).togglePopup();
          selectedMarker.current = marker;
          props.handleSelectProduct(selectedMarker.current);
          // console.log(selectedMarker.current);
          isClicked.current = true;
          //console.log("marker clicado");
        }

        // Se clicar em ALGUM marcador e já estiver algum outro selecionado deseleciona o marker já selecionado
        if (
          isClicked.current &&
          selectedMarker.current !== null &&
          popupCounter === 1
        ) {
          selectedMarker.current = null;
          isClicked.current = false;
          popupCounter = 0;
          //console.log("marker deselecionado mouse em cima de outro");
        }
      });

      // Quando o cursor passar por cima do marcador e ele não estiver selecionado, abrir o popup
      markerInstance.getElement().addEventListener("mouseover", () => {
        if (!isClicked.current) {
          markerInstance.setPopup(popup).togglePopup();
        }
      });

      // Quando o cursor sair de cima do marcador e ele não estiver selecionado, fechar o popup
      markerInstance.getElement().addEventListener("mouseout", () => {
        if (!isClicked.current) {
          markerInstance.togglePopup();
        }
      });

      // Quando o popup abrir
      popup.on("open", () => {
        //console.log("Popup aberto!", popupCounter);
        // Se tiver o marker for clicado, soma 1 no popupCounter
        if (isClicked.current) {
          popupCounter++;
          //console.log("POPUP ++", popupCounter);
        }
        // Ação a ser executada quando sempre que o popup é aberto
        el.style.backgroundImage = `url(${
          urlMarkerBig[marker.properties.type]
        })`;
        el.style.width = `${width + 35}px`;
        el.style.height = `${height + 53.5}px`;
        el.style.backgroundSize = "100%";
      });

      popup.on("close", () => {
        // Quando o popup fechar, se o marker não tiver selecionado, diminuir o marker
        if (!isClicked.current) {
          el.style.backgroundImage = `url(${
            urlMarkerSmall[marker.properties.type]
          })`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = "100%";
        }

        // Quando o popup fechar, se o marker tiver selecionado(popupCounter vai ser 1), deselecionar o marker e zerar o popupCounter
        if (isClicked.current && popupCounter >= 1) {
          selectedMarker.current = null;
          isClicked.current = false;
          popupCounter = 0;
          el.style.backgroundImage = `url(${
            urlMarkerSmall[marker.properties.type]
          })`;
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
          el.style.backgroundSize = "100%";

          //console.log("popup fechado", popupCounter);
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
    });

    return () => {
      map.remove();
    };
  });

  return <div id='map' className='flex-1 h-full' />;
}

export default MapboxMap;

