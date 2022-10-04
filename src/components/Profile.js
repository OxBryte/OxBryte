import React from 'react';
import '../App.css';
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"
import { Github, Twitter, At, Linkedin} from 'react-bootstrap-icons';
import Slider from './slider';
// import template from '../images/template.jpg';

function Profile() {
    return (
        <div className='profile container col-12'>
            <div className='row'>
                <motion.div initial={{ x: -100}} animate={{ x: 0}} transition={{ type: "spring", stiffness: 200 }} className='profile-text col-lg-6 col-md-12'>
                    <h1>Hi,I'm</h1>
                    <h2>OLUMIDE SILAS</h2>
                    <h3>I’m a frontend developer and designer, passionate about solving problems with code and transforming ideas into designs.
                    I create usable wireframes, prototypes, user flows and social media contents to be developed, I also create applications with user experience as a top priority using various web tools and languages.</h3>
                    <div className='social'>
                        <a href='https://github.com/oxbryte' target='_blank'><span><Github /> Githhub</span></a>
                        <a href='https://twitter.com/_OlumideSilas' target='_blank'><span><Twitter /> Twitter</span></a>
                        <a href='https://www.linkedin.com/in/olumide-silas/' target='_blank'><span><Linkedin /> LinkedIn</span></a>
                        <a href='mailto:silascyrax@gmail.com' target='_blank'><span><At /> Email</span></a>
                    </div>
                </motion.div>

                <motion.div initial={{ y: -100}} animate={{ y: 0}} transition={{ type: "spring", stiffness: 200 }} className='profile-image col-lg-6 col-md-12'>
                    <Slider />
                </motion.div>
            </div>
        </div>
    );
}

export default Profile;