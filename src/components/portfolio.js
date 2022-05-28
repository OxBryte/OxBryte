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
import { EyeFill } from 'react-bootstrap-icons';
import { CloudArrowDownFill } from 'react-bootstrap-icons';

function Portfolio() {

    const [key, setKey] = useState('Portfolio');

    return (
        <div className='portfolio container'>
            <div className='row'>
                <div className='portfolio-head '>
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                        <Tab eventKey="Portfolio" title="Portfolio" className='col'>
                            <div className='container p-0 col-10'>
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
                                        <h1>DynastyPad</h1>
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
                                        <h1>DynastyPad</h1>
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
                        <Tab eventKey="Resume" title="Resume" className='col'>
                            <div className='container col-12'>
                                <div className='row resume'>
                                     <div className='col-12 resume-details'>
                                        <h1>OLUMIDE SILAS</h1>
                                        <h2>Front-end Developer / Designer</h2>
                                        <h3>I’m a frontend developer and designer, passionate about solving problems with code and transforming ideas into designs. I create usable wireframes, prototypes, user flows and social media contents to be developed, I also create applications with user experience as a top priority using various web tools and languages.</h3>

                                        <div className='work-details'>
                                            <h4>Work Experience</h4>
                                            <h5>IlearnBlock <span>UI/UX Designer</span></h5>
                                        </div>
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