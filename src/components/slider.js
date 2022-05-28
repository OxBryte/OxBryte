import React from 'react';
import '../App.css';
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
        <div className=''>
            <div className='row'>
                <div className=''>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1653711801517-4439c2343a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1653704552419-c0d3f741282d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1653680689379-7fd2ad66e39e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
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