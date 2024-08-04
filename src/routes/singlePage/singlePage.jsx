import React from 'react';
import Slider from '../../components/slider/Slider';
import Map from '../../components/map/Map';
import './singlePage.scss';
import { singlePostData, userData } from '../../library/dummyData';

const SinglePage = () => {
    return (
        <div className="singlePageContainer">
            {/* user details start */}
            <div className="userDetails">
                <div className="wrapper">
                    {/* slider */}
                    <Slider images={singlePostData.images} />

                    {/* user information */}
                    <div className="userInfo">
                        <div className="top">
                            <div className="left">
                                <h1>{singlePostData.title}</h1>
                                <div className="location">
                                    <img src="/pin.png" alt="location" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <span className="price">${singlePostData.price}</span>
                            </div>
                            <div className="right">
                                <img src={userData.img} alt="user" />
                                <span>{userData.name}</span>
                            </div>
                        </div>

                        <div className="bottom">
                            <p>{singlePostData.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* user feature starts */}
            <div className="userFeatures">
                <div className="wrapper">
                    <div className="general">
                        <h3>General</h3>
                        <div className="vertical">
                            <div className="item">
                                <img src="/utility.png" alt="utility" />
                                <div className="info">
                                    <h4>Utilities</h4>
                                    <span>Renter is responsible</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/pet.png" alt="pet" />
                                <div className="info">
                                    <h4>Pet Policy</h4>
                                    <span>Pets Allowed</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/fee.png" alt="property" />
                                <div className="info">
                                    <h4>Property Fees</h4>
                                    <span>Must have 3x the rent in total household income</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sizes">
                        <h3>Room Sizes</h3>
                        <div className="roomContainer">
                            <div className="size">
                                <img src="/size.png" alt="size" />
                                <span>80sqm (861sqft)</span>
                            </div>
                            <div className="size">
                                <img src="/bed.png" alt="bedroom" />
                                <span>2 bed</span>
                            </div>
                            <div className="size">
                                <img src="/bath.png" alt="bathroom" />
                                <span>1 bathroom</span>
                            </div>
                        </div>
                    </div>

                    <div className="places">
                        <h3>Nearby Places</h3>
                        <div className="horaizontal">
                            <div className="item">
                                <img src="/school.png" alt="school" />
                                <div className="info">
                                    <h4>School</h4>
                                    <span>250m away</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/bus.png" alt="bus" />
                                <div className="info">
                                    <h4>Bus Stop</h4>
                                    <span>100m away</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/restaurant.png" alt="restaurant" />
                                <div className="info">
                                    <h4>Restaurant</h4>
                                    <span>200m away</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="location">
                        <Map items={[singlePostData]} />
                    </div>
                    <button>
                        <div className="message">
                            <img src="/chat.png" alt="message" />
                            <span>Send a Message</span>
                        </div>
                        <div className="message">
                            <img src="/save.png" alt="save" />
                            <span>Save the Place</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
