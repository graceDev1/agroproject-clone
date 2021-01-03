import React from 'react';
import '../style/Map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map() {
    const position = [51.505, -0.09]
    return (
        <div className="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
