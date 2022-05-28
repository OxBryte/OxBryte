import React from 'react';
import { useState } from 'react';
import '../App.css';
import '../css/portfolio.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Twitter } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { ArrowUpRight } from 'react-bootstrap-icons';
Imp

function Portfolio() {

    const [key, setKey] = useState('Portfolio');

    return (
        <div className='portfolio container'>
            <div className='row'>
                <div className='portfolio-head '>
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                        <Tab eventKey="Portfolio" title="Portfolio" className='col'>
                            
                        </Tab>
                        <Tab eventKey="Resume" title="Resume" className='col'>
                            <div className='container'>
                                <div className='row portfolio-item'>
                                    <div className='item col-4'>
                                        <h1>DynastyPad</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>
                                    </div>
                                    <div className='item col-4'>
                                        <h1>okay</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>
                                    </div>
                                    <div className='item col-4'>
                                        <h1>okay</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>
                                    </div>
                                    <div className='item col-4'>
                                        <h1>okay</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>
                                    </div>
                                    <div className='item col-4'>
                                        <h1>okay</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>
                                    </div>
                                    <div className='item col-4'>
                                        <h1>DynastyPad</h1>
                                        <h6>REACT + CONTEXT API</h6>
                                        <h4>Landing page for Job board application</h4>
                                        <div className='social'>
                                            <a href=''><span><Twitter /> Twitter <ArrowUpRight /></span></a>
                                            <a href=''><span><EnvelopeFill /> Email <ArrowUpRight /></span></a>
                                        </div>
                                    </div>
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