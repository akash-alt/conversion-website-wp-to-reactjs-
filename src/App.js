
import React from 'react'
import './App.css'
import Header from './Component/Header';
import About from './Component/About';
import Shop from './Component/Shop';
import Menu from './Component/Menu';
import Client from './Component/Client';
import Prices from './Component/Prices';

function App(props)
{
    return(
        <div>
            <Header/>
            <About/>
            <Shop/>
            <Menu/>
            <Client/>
            <Prices/>
        </div>
    );
}

export default App;