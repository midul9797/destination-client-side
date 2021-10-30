import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <div className="">
            {/* Navigation Bar/ Menu */}
            {
                user.email ?
                    <div className="navbar glass row">
                        <div className="navbar-items col-lg-8 col-sm-4 m-sm-0 mx-lg-5">
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/home">Home</NavLink>
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/contact">Contact Us</NavLink>
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/myBookings">My Bookings</NavLink>
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/manageAllBookings">Manage All Bookings</NavLink>
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/addDestination">Add a Destination</NavLink>
                        </div>
                        <div className=" col-lg-3 d-flex">
                            <p className="text-light fw-bold me-2 pt-2">{user.displayName}</p>
                            <button className="button me-3" onClick={logOut}>Log Out</button>
                        </div>
                    </div>

                    :

                    <div className="navbar glass row">
                        <div className="navbar-items col-lg-8 m-sm-0 mx-lg-5">
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/home">Home</NavLink>
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/guides">Travel Guides</NavLink>
                            <NavLink className="item text-decoration-none p-lg-3 p-2 text-light fw-bold" to="/contact">Contact Us</NavLink>
                        </div>
                        <div className="col-lg-3 d-flex ">
                            <Link to="./login"><button className="button me-2">Log In</button></Link>
                        </div>
                    </div>


            }

        </div>
    );
};

export default Header;