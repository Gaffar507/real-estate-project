import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ id, img, title, price, address, bedroom, bathroom, latitude, longitude }) => {
    return (
        <div className="card">
            <div className="cardImg">
                <Link to={`/${id}`}>
                    <img src={img} alt="card" />
                </Link>
            </div>

            <div className="cardInfo">
                <div className="cardWrapper">
                    <Link to={`${id}`} className="title">
                        <h3>{title}</h3>
                    </Link>
                    <div className="address">
                        <img src="pin.png" alt="location" />
                        <p>{address}</p>
                    </div>

                    <p className="price">${price}</p>

                    <div className="bottom">
                        <div className="left">
                            <div className="bed">
                                <img src="bed.png" alt="bed" />
                                <p>{`${bedroom} Bedroom`}</p>
                            </div>
                            <div className="bed">
                                <img src="bath.png" alt="bed" />
                                <p>{`${bathroom} Bathroom`}</p>
                            </div>
                        </div>

                        <div className="right">
                            <Link>
                                <img src="save.png" alt="save" />
                            </Link>
                            <Link>
                                <img src="chat.png" alt="chat" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
