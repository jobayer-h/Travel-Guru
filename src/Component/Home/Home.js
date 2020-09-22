import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import sajek from '../../assets/Image/Sajek.png'
import Sreemongol from '../../assets/Image/Sreemongol.png'
import sundorbon from '../../assets/Image/sundorbon.png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="container height">
           <Header></Header>
            <div className="row home-row">
                <div className="col-md-6 padding">
                    <h1>Cox's bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to="/booking"><button className="form-control yellow-btn booking-btn">Booking <ArrowForwardIcon /></button></Link>
                </div>
                <div className="col-md-2 padding">
                    <Link to="/booking">
                        <img className="img-fluid img-box" src={sajek} alt=""/>
                    </Link>                    
                </div>
                <div className="col-md-2 padding">
                    <Link to="/booking">
                        <img className="img-fluid img-box" src={Sreemongol} alt=""/>
                    </Link>                    
                </div>
                <div className="col-md-2 padding">
                    <Link to="/booking">
                        <img className="img-fluid img-box" src={sundorbon} alt=""/>
                    </Link>                    
                </div>
            </div>
        </div>
    );
};

export default Home;