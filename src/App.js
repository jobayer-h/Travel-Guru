import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Search from './Component/Search/Search';
import Booking from './Component/Booking/Booking';

export const Userconst = createContext();

function App() {
  const [signInUser, setSignInUser] =useState({});
  return (
    <Userconst.Provider value={[signInUser, setSignInUser]}>
    <Router>
      
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </Userconst.Provider>
  );
}

export default App;
