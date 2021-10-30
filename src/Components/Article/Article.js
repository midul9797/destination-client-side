import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
const Article = () => {
    return (
        <div className="row article d-flex m-1 p-5 text-light">
            <img src="https://media.fshoq.com/images/290/two-happy-travelers-290-small.jpg" alt="" className="col-lg-5 col-sm-12 rounded" />
            <div className="introduction mt-4 ps-5 col-lg-7 col-sm-12">
                <h1 className="text-center text-cyan fw-bold mb-5">Let us Introduce</h1>
                <h3>We are one of the best travel agency in the world. We provide best tour guides in the world</h3>
                <p className="text-gray pt-3 lh-lg">We are in this service for almost 50 years. Our service is available for everyone. We make sure our travelers gets proper care. We provide healthy foods to our travelers.</p>
                <Link to="/contact"><button className="button">Contact Us</button></Link>
            </div>
        </div>
    );
};

export default Article;