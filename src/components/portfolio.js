import React from 'react';
import { useState } from 'react';
import '../App.css';
import '../css/portfolio.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Twitter, EnvelopeFill, ArrowUpRight, EyeFill, CloudArrowDownFill } from 'react-bootstrap-icons';
import { motion } from "framer-motion"
import pics from "../images/image.svg";

function Portfolio () {

    const [key, setKey] = useState('Portfolio');

    return (
        <div className='portfolio container'>
            <div className='row'>
                <div className='portfolio-head '>
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                        <Tab eventKey="Portfolio" title="Portfolio" className='col'>
                            <div className='container p-0 col-10'>
                                <div className='row portfolio-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <h1>DynastyPad</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>An aggregator that helps near projects to create high quality experience</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>  
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <h1>Woof Solana</h1>
                                        <h6>REACT + DEX</h6>
                                        <h4>Solana project built for the blockchain</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>  
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <h1>GreatPan</h1>
                                        <h6>REACT + MINT FUNCTION</h6>
                                        <h4>Landing page for nft project and mint page</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>  
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <h1>Sneakers Hub</h1>
                                        <h6>REACT + MOCK API</h6>
                                        <h4>Website for a sneakers retail store</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>  
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <h1>DynastyPad</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>  
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <h1>DynastyPad</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>  
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Resume" title="Resume" className='col'>
                            <div className='container col-12'>
                                <div className='row resume col-lg-12 col-md-12'>
                                    <div className=''>
                                        <img src={pics} alt=''/>
                                    </div>
                                </div>
                                <div className='social'>
                                    <a href=''><span> Preview <EyeFill /></span></a>
                                    <a href=''><span> Download <CloudArrowDownFill /></span></a>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;