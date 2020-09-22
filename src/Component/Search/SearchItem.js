import React from 'react';
import DemoImg from '../../assets/Image/Rectangle26.png';
import starImg from '../../assets/Icon/star_1_.png'
import './Search.css'
const SearchItem = (props) => {
    const {name ,price ,ratting ,img} = props.hotel
    return (
            <div className="row search-row">
                <div className="col-md-6">
                    <img className="img-fluid" src={img} alt=""/>
                </div>
                <div className="col-md-6">
                    <div className="details-box">
                        <strong>{name}</strong>
                        <br/>
                        <small>4 guests   2 bedrooms   2 beds   2 baths</small>
                        <small>Wif Air conditioning Kitchen</small>
                        <small>Cancellation fexibility availiable</small>
                        <div className="review d-flex justify-content-between">
                            <div className="d-flex">
                                <img className="star" src={starImg} alt=""/>
                                <p>{ratting}</p>
                            </div>
                            <div>
                                <strong><span>${price}</span>/night</strong>
                                <small>$167 total</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SearchItem;