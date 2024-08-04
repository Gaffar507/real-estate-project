import React, { useEffect, useState } from 'react';
import './slider.scss';

const Slider = ({ images }) => {
    const [imageIndex, setIndex] = useState(null);

    const change = (value) => {
        if (value === 'right') {
            setIndex(imageIndex + 1);
            if (imageIndex === images.length - 1) {
                setIndex(0);
            }
        } else {
            setIndex(imageIndex - 1);
            if (imageIndex === 0) {
                setIndex(images.length - 1);
            }
        }
    };

    return (
        <div className="slider">
            {/* full slider */}
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow">
                        <img src="/arrow.png" alt="left arrow" onClick={() => change('left')} />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="bed" />
                    </div>
                    <div className="arrow">
                        <img src="/arrow.png" alt="right arrow" className="rightArrow" onClick={() => change('right')} />
                    </div>
                    <div className="cancel" onClick={() => setIndex(null)}>
                        X
                    </div>
                </div>
            )}

            {/* multiimages section */}
            <div className="bigImg">
                <img src={images[0]} alt="bed" onClick={() => setIndex(0)} />
            </div>
            <div className="smallImg">
                {images.slice(1).map((img, index) => (
                    <img src={img} key={index} onClick={() => setIndex(index + 1)} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
