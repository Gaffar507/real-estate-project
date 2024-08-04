import React from 'react';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { listData } from '../../library/dummyData';
import './listPage.scss';

const ListPage = () => {
    return (
        <div className="listPage">
            {/* list container starts */}
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    {listData.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>

            {/* map container starts */}
            <div className="mapContainer">
                <div className="container">
                    <Map items={listData} />
                </div>
            </div>
        </div>
    );
};

export default ListPage;
