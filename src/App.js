import React from 'react';
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

function App() {
  return (
    <Router>
      
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
