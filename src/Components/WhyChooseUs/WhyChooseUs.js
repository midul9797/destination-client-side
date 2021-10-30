import React from 'react';
import { FaRegCompass} from 'react-icons/fa';
import { GiWorld} from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import { RiHeadphoneLine} from 'react-icons/ri';
import './WhyChooseUs.css';
const WhyChooseUs = () => {
    return (
        <div>
            <h1 className="text-cyan text-center mt-5">Why Choose Us</h1>
            <div className="cards row ms-5">
                <div className="card col-lg-2 text-light text-center"><FaRegCompass className="icon"/><h2>Experienced</h2></div>
                <div className="card col-lg-2 text-light text-center"><GiWorld className="icon"/><h2>Worldwide</h2></div>
                <div className="card col-lg-2 text-light text-center"><IoWalletOutline className="icon"/><h2>Cheap</h2></div>
                <div className="card col-lg-2 text-light text-center"><RiHeadphoneLine className="icon"/><h2>24/7 Service</h2></div>
            </div>
        </div>
    );
};

export default WhyChooseUs;