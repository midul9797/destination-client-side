import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    // React Bootstrap Slider
    return (
        <div className="banner">
            
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <a href="#destinations"><button className="button">Book Now</button></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://touristjourney.com/wp-content/uploads/2020/07/How-to-See-the-Northern-Lights-in-Iceland-scaled.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <a href="#destinations"><button className="button">Book Now</button></a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://image.jimcdn.com/app/cms/image/transf/dimension=940x10000:format=jpg/path/s94661150d5d734fb/image/ic301c71d66e9d889/version/1460441105/image.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <a href="#destinations"><button className="button">Book Now</button></a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;