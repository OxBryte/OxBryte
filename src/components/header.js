import React from 'react';
import '../App.css';
import '../css/header.css';
import logo from '../images/logo.png';
import { motion } from "framer-motion"

function Header() {
    return (
        <div className='header container'>
            <div className='row'>
                <div className='logo'>
                    <motion.img initial={{ y: -100}} animate={{ y: 0}} transition={{ type: "spring", delay: 0.1, stiffness: 100 }} src={logo} alt='' width={35}/>
                </div>
            </div>
        </div>
    );
}

export default Header;