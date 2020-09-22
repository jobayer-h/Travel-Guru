import React from 'react';
import Header from '../Header/Header';
import DatePickers from './Datepicker';
import './Booking.css'

const Booking = () => {
    return (
        <div className="container coxs-bazar-page">
            <Header></Header>
            <div className="row home-row">
                <div className="col-md-6 padding">
                    <h2>Cox's bazar</h2>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island..</p>
                </div>
                <div className="col-md-6">
                    <div className="booking-conatainer">
                        <form action="/search">
                            <label htmlFor="from">Origin</label>
                            <br/>
                            <input className="form-control" type="text" id="from" required placeholder="Dhaka"/>
                            <br/>
                            <label htmlFor="to">Destination</label>
                            <br/>
                            <input className="form-control" type="text" id="to" required placeholder="Cox's Bazar"/>
                            <br/>

                            <div className="datepicker">
                                <div>
                                    <label htmlFor="starting">Form</label>
                                    <DatePickers></DatePickers>
                                </div>
                                <div>
                                    <label htmlFor="ending">To</label>
                                    <DatePickers></DatePickers>
                                </div>
                            </div>
                            
                            <br/>

                            <input className="form-control yellow-btn booking-btn" type="submit" value="Start Booking"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;