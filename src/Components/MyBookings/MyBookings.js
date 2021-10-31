import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://grim-coffin-84586.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    })
    return (
        <div>
            <h1 className="text-cyan text-center m-5">My Bookings</h1>
            {
                allBookings.map(myBooking => myBooking.email === user.email ?
                    <div className="text-light text-center">
                        <h1>Name:{myBooking.name}</h1>
                        <h1>Email:{myBooking.email}</h1>
                        <h1>Destination:{myBooking.destination}</h1>
                        <h1>Price:{myBooking.price}</h1>
                        <h1>Booking Status:{myBooking.status}</h1>
                        <h1>Phone Number:{myBooking.phone}</h1>

                    </div> : <p className="text-light">Not Found</p>)
            }
        </div>
    );
};

export default MyBookings;