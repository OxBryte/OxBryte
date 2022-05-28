import React from 'react';
import '../App.css';
import '../css/header.css';
import logo from '../images/logo.png';

function Header() {
    return (
        <div className='header container'>
            <div className='row'>
                <div className='logo'>
                    <img src={logo} alt='' width={35}/>
                </div>
            </div>
        </div>
    );
}

export default Header;