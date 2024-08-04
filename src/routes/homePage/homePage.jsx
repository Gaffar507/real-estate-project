import React from 'react';
import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';

function HomePage() {
    return (
        <div className="homePage">
            {/* text container starts */}
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Find Real Estate & Get Your Dream Place</h1>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quibusdam aut ex quo ad eos esse, doloremque voluptatem, dignissimos libero inventore eligendi explicabo in. Ea
                        inventore veniam placeat magni? Cum.
                    </p>

                    <SearchBar />

                    <div className="boxs">
                        <div className="item">
                            <h3>16+</h3>
                            <span>Years of Experience</span>
                        </div>
                        <div className="item">
                            <h3>200</h3>
                            <span>Award Gained</span>
                        </div>
                        <div className="item">
                            <h3>1200+</h3>
                            <span>Property Ready</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* image container starts */}
            <div className="imageContainer">
                <img src="bg.png" alt="background" />
            </div>
        </div>
    );
}

export default HomePage;
