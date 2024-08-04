import React from 'react';
import './filter.scss';

const Filter = () => {
    return (
        <div className="filterContainer">
            <h1>
                Search Results for <b>London</b>
            </h1>

            <div className="topPart">
                <div className="item">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" placeholder="City Location" />
                </div>
            </div>

            <div className="bottomPart">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="any">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property ">
                        <option value="any">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" name="minPrice" id="minPrice" placeholder="Any" />
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" name="maxPrice" id="maxPrice" placeholder="Any" />
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" name="bedroom" id="bedroom" placeholder="Any" />
                </div>

                <button>
                    <img src="search.png" alt="search button" />
                </button>
            </div>
        </div>
    );
};

export default Filter;
