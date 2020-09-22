import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import sajek from '../../assets/Image/Sajek.png'
import Sreemongol from '../../assets/Image/Sreemongol.png'
import sundorbon from '../../assets/Image/sundorbon.png'
const Home = () => {
    return (
        <div className="container height">
           <Header></Header>
            <div className="row">
                <div className="col-md-6">
                    <h1>Cox's bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className="form-control yellow-btn booking-btn">Booking <ArrowForwardIcon /></button>
                </div>
                <div className="col-md-2 ">
                    <img className="img-fluid img-box" src={sajek} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid img-box" src={Sreemongol} alt=""/>
                </div>
                <div className="col-md-2">
                    <img className="img-fluid img-box" src={sundorbon} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Home;