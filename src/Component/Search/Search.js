import React from 'react';
import Header from '../Header/Header';
import './Search.css';
import SearchItem from './SearchItem';
import hotelImg1 from '../../assets/Image/Rectangle26.png'
import hotelImg2 from '../../assets/Image/Rectangle28.png'
import hotelImg3 from '../../assets/Image/Rectangle7.png'
import { WrappedMap } from '../Map/Map';
import { googleAPI } from '../../APIs/googleApi';
const Search = () => {
    const hotels = [
        {
            name: 'Light bright airy stylish apt & safe peaceful stay',
            price: '34',
            ratting:'4.9 (20)',
            img:hotelImg1
        },
        {
            name: 'Apartment in Lost Panorama',
            price: '52',
            ratting:'4.8 (10)',
            img:hotelImg2
        },
        {
            name: 'AR Lounge & Pool (r&r + b&b)',
            price: '44',
            ratting:'4.9 (25)',
            img:hotelImg3
        }
    ];

    return (
        <div className="container">
            <Header></Header>
            <h3>Stay with Travel Guru</h3>
            <div className="row">
                <div className="col-md-6">
                    {
                        hotels.map( hotel => <SearchItem hotel={hotel}></SearchItem>)
                    }
                </div>
                <div className="col-md-6">
                    <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleAPI}`}
                    loadingElement={<div style={{height:'100%'}}/>}
                    containerElement={<div style={{height:'100%'}}/>}
                    mapElement={<div style={{height:'100%'}}/>}
                    >

                    </WrappedMap>
                </div>
            </div>
        </div>
    );
};

export default Search;