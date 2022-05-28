import React from 'react';
import '../App.css';
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import { Github } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { ArrowUpRight } from 'react-bootstrap-icons';
// import template from '../images/template.jpg';

function Profile() {
    return (
        <div className='profile container col-12'>
            <div className='row'>
                <div className='profile-text col-lg-6 col-md-12'>
                    <h1>Hi,I'm</h1>
                    <h2>OLUMIDE SILAS</h2>
                    <h3>I’m a frontend developer and designer, passionate about solving problems with code and transforming ideas into designs.
                    I create usable wireframes, prototypes, user flows and social media contents to be developed, I also create applications with user experience as a top priority using various web tools and languages.</h3>
                    <div className='social'>
                        <a href='https://github.com/BrightTechnologies1' target='_blank'><span><Github /> Githhub <ArrowUpRight /></span></a>
                        <a href='https://twitter.com/OlumideSilas' target='_blank'><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                        <a href='' target='_blank'><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                    </div>
                </div>

                <div className='profile-image col-lg-6 col-md-12'>
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

export default Profile;