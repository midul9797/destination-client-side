import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import './PlaceBooking.css'
const PlaceBooking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    })
    const onSubmit = data => {
        fetch('http://localhost:4000/allBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Booking Placed Successfully');
                reset();
            }
        })
    };
    return (
        <div>
            {
                destinations.map(destination => destination._id === _id ?
                    <div className="booking-form">
                        <h1 className="text-cyan text-center m-5">Booking Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} placeholder="Name" />
                            <input type="email" {...register("email")} placeholder="Email" value={user.email} />
                            <input {...register("destination")} placeholder="Destination" value={destination.name} />
                            <input {...register("price")} placeholder="Destination" value={destination.price} />
                            <input type="hidden" {...register("status")} placeholder="Status" value="pending" />
                            
                            <textarea {...register("address")} placeholder="Address" required />
                            <input type="number" {...register("zip-code")} placeholder="Zip Code" required />
                            <input type="number" {...register("phone")} placeholder="Phone Number" required/>
                            <input type="submit" className="button w-25" value="Submit" />
                        </form>
                    </div> : '')
            }

        </div>
    );
};

export default PlaceBooking;