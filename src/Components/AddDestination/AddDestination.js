import React from 'react';
import { useForm } from "react-hook-form";
const AddDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    fetch('http://localhost:4000/destinations', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
    .then(res => res.json())
    .then(result => {
        if(result.insertedId){
            alert('Destination Added Successfully');
            reset();
        }
    })
}
    return (
        <div className="booking-form text-light fw-bold">
            <h1 className="text-cyan fw-bold text-center m-5">Add a Destination</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Destination Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder=" Destination Name" />
                <label htmlFor="country">Country</label>
                <input  {...register("country")} placeholder="Country" />
                <label htmlFor="image">Image URL</label>
                <input {...register("image")} placeholder="Image URL" />
                <label htmlFor="description">Description</label>
                <textarea {...register("description")} placeholder="Description" />
                <label htmlFor="price">Price</label>
                <input type="number" {...register("price")} placeholder="Price" />
                <label htmlFor="duration">Duration</label>
                <input type="number" {...register("duration")} placeholder="Days" />
                <input type="submit" className="button w-25" value="Submit" />
            </form>
        </div>
    );
};

export default AddDestination;