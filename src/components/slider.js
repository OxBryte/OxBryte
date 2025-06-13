import React from 'react';
import '../App.css';
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from '../images/slider1.png'
import Slider2 from '../images/slider2.jpeg'
import Slider3 from '../images/slider3.jpeg'

function Slider() {
    return (
        <div className=''>
            <div className='row'>
                <div className=''>
                    <Carousel>
                        <Carousel.Item interval={1400}>
                            <img
                            className="d-block w-100"
                            src={Slider1}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1400}>
                            <img
                            className="d-block w-100"
                            src={Slider2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1400}>
                            <img
                            className="d-block w-100"
                            src={Slider3}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Slider;