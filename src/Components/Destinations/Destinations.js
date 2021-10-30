import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import './Destinations.css';
const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/destinations')
        .then(res=> res.json())
        .then(data => setDestinations(data))
    })
    return (
        <div id="destinations">
            <h1 className="text-light text-center">Our <span className="text-cyan">Destinations</span></h1>
            <div className="row text-center destinations"> 
                {
                    destinations.map(destination => <Destination keys={destination.id} destination={destination}></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;