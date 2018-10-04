import '../assets/css/app.css';
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './home';
import NormalExample from './normal_example';
import EasyExample from './easy_example';

const App = () => (
    <div className="container">
        <h1 className="center">Accordion Example</h1>
        <ul className="nav center">
            <li><NavLink to="/true-accordion">View True Accordion</NavLink><div/></li>
            <li><NavLink to="/" exact>Home</NavLink><div /></li>
            <li><NavLink to="/easy-accordion">View Easier Accordion</NavLink><div/></li>
        </ul>
        
        <Route path="/" exact component={Home}/>
        <Route path="/true-accordion" component={NormalExample}/>
        <Route path="/easy-accordion" component={EasyExample}/>
    </div>
);

export default App;
