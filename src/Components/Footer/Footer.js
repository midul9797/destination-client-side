import React from 'react';
import { FaFacebook,FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <ul className="d-flex justify-content-center list-unstyled ">
                <li><a href="facebook.com"  className="icons"><FaFacebook/></a></li>
                <li><a href="instagram.com" className="icons"><FaInstagram/></a></li>
                <li><a href="twitter.com"   className="icons"><FaTwitter/></a></li>
                <li><a href="linkedin.com"  className="icons"><FaLinkedin/></a></li>
            </ul>
            <p className="text-light text-center">Copyrights &copy; 2021-2025. All rights reserved by PsychoCare</p>
        </div>
    );
};

export default Footer;