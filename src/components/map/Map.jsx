import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pop from '../../components/popup/Pop';
const Map = ({ items }) => {
    return (
        <MapContainer center={[52.4749, -1.90269]} zoom={7} scrollWheelZoom={false} className="map">
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {items.map((item) => (
                <Pop key={item.id} {...item} />
            ))}
        </MapContainer>
    );
};

export default Map;
