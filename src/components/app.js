import React from 'react';
import '../assets/css/app.css';
import NormalExample from './normal_example';
import EasyExample from './easy_example';

const App = () => (
    <div className="container">
        <h1 className="center">Accordion Example</h1>
        <NormalExample/>
        <EasyExample/>
    </div>
);

export default App;
