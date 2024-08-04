import React from 'react';
import { Popup, Marker } from 'react-leaflet';
import './popup.scss';
import { Link } from 'react-router-dom';

const Pop = ({ id, img, title, price, bedroom, latitude, longitude }) => {
    return (
        <Marker position={[latitude, longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={img} alt="room" />
                    <div className="textPopup">
                        <Link to={`/${id}`}>{title}</Link>
                        <span>{bedroom} Bedroom</span>
                        <span>${price}</span>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
};

export default Pop;
