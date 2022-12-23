import React from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

function getIcon(_iconSize) {
  console.log(_iconSize);
  return L.icon({
    iconUrl: require("./pin-location.png"),
    iconSize: [_iconSize],
    iconAnchor: [24, 46],
  });
}

const MapView = ({ position }) => {
  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "60vh", zIndex: 5 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={getIcon(50)}></Marker>
        <ChangeMapView coords={position} />
      </MapContainer>
    </div>
  );
};

export default MapView;

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}
