import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import useAuth from '../../Hook/useAuth';

const ReviewBooking = () => {
    const {id} = useParams();
    const [destinations, setDestinations] = useState([]);
    useEffect(()=>{
        fetch('https://grim-coffin-84586.herokuapp.com/destinations')
        .then(res=> res.json())
        .then(data => setDestinations(data))
    })
    return (
        <div>
            <h1 className="text-cyan text-center mt-5">Review Your Booking</h1>
            {
                destinations.map(destination => destination._id === id ? 
                    <div className="text-light text-center m-5 p-5 destination w-50 ">
                        {/* {setDestination(destination)} */}
                        <h1>Destination: {destination.name}</h1>
                        <h1>Country: {destination.country}</h1>
                        <h1>Price: {destination.price}</h1>
                        <h1>Duration: {destination.duration} Days</h1>
                        <Link to={`/placeBooking/${destination._id}`}><button className="button m-3">Proceed</button></Link>
                        <button className="button m-3">Delete</button>
                    </div> : "")
            }
        </div>
    );
};

export default ReviewBooking;