import React from 'react';
import { Link } from 'react-router-dom';

const Destination = ({ destination }) => {
    const {name, image, description, price, _id} = destination;
    
    return (
        <div className="col-lg-4 g-5 text-light destination rounded">
            <img src={image} alt="" className="img-fluid mb-4 p-2"/>
            <h3 className="fw-bold">{name}</h3>
            <p className="text-gray" style={{height: '150px'}}>{description}</p>
            <h1 className="text-cyan">$ {price}</h1>
            <Link to={`/reviewBooking/${_id}`}><button className="button my-2">Book Now</button></Link>
        </div>
    );
};

export default Destination;