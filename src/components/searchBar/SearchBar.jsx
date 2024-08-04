import React, { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent'];

export default function SearchBar() {
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0
    });

    const typeChange = (type) => {
        setQuery((prev) => ({ ...prev, type }));
    };

    return (
        <div className="searchBarContainer">
            <div className="type">
                {types.map((type, index) => (
                    <button key={index} onClick={() => typeChange(type)} className={`${type === query.type ? 'active' : ''}`}>
                        {type}
                    </button>
                ))}
            </div>
            <form action="#">
                <input type="text" name="location" placeholder="City Location" id="location" />
                <input type="number" name="minPrice" min={0} max={100000} placeholder="Min Price" id="minPrice" />
                <input type="number" name="maxPrice" min={0} max={100000} placeholder="Max Price" id="maxPrice" />

                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    );
}
