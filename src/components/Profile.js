import React from 'react';
import '../App.css';
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Github } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { ArrowUpRight } from 'react-bootstrap-icons';
import Slider from './slider';
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
                    <Slider />
                </div>
            </div>
        </div>
    );
}

export default Profile;