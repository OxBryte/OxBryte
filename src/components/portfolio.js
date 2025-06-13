import React from "react";
import { useState } from "react";
import "../App.css";
import "../css/portfolio.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Twitter,
  Link,
  ArrowUpRight,
  EyeFill,
  CloudArrowDownFill,
  Globe,
} from "react-bootstrap-icons";
// import { LogoFigma } from 'react-bootstrap-icons'
import { motion } from "framer-motion";
import pics from "../images/image.svg";
import ResumePDF from "../images/OlumideSilas-Resume.pdf";

function Portfolio() {
  const [key, setKey] = useState("Portfolio");

  return (
    <div className="portfolio container">
      <div className="row">
        <div className="portfolio-head ">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="Portfolio" title="Portfolio" className="col">
              <div className="container p-0 col-10">
                <div className="row portfolio-item">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="item col-4"
                  >
                    <h1>Sessions</h1>
                    <h6>REACT VITE + SOLIDITY + NESTJS + POSTGRESS</h6>
                    <h4>
                      A web3 plarform built for creators to earn seamlessly.
                    </h4>
                    <div className="social">
                      <a href="https://twitter.com/sessions">
                        <span>
                          <Twitter /> Twitter <ArrowUpRight />
                        </span>
                      </a>
                      <a href="https://sessions.xyz/">
                        <span>
                          <Globe /> Website <ArrowUpRight />
                        </span>
                      </a>
                      {/* <a href='https://www.figma.com/file/VwR11wImcgMNth6lmkOL44/DynastyPro' target='_blank' rel="noreferrer"><span><Link /> Figma Link <ArrowUpRight /></span></a> */}
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="item col-4"
                  >
                    <h1>ADC</h1>
                    <h6>REACT VITE + TAILWIND</h6>
                    <h4 className="">
                      Agile Digital College is a Company that delivers Project
                      Management course...
                    </h4>
                    <div className="social">
                      <a href="https://agiledigitalcollege.com/">
                        <span>
                          <Globe /> Website <ArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="item col-4"
                  >
                    <h1>ILearnBlock</h1>
                    <h6>UI/UX + Frontend</h6>
                    <h4>A blockchain and cryptocurrency education platform</h4>
                    <div className="social">
                      <a href="https://twitter.com/ilearnblock">
                        <span>
                          <Twitter /> Twitter <ArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="item col-4"
                  >
                    <h1>Rethinkable</h1>
                    <h6>REACTJS</h6>
                    <h4>A web3 job board/platform</h4>
                    <div className="social">
                      <a href="https://twitter.com/rethinkablexyz">
                        <span>
                          <Twitter /> Twitter <ArrowUpRight />
                        </span>
                      </a>
                      <a href="https://rethinkable.xyz/">
                        <span>
                          <Globe /> Website <ArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="item col-4"
                  >
                    <h1>Loozr</h1>
                    <h6>REACT + NODEJS</h6>
                    <h4>
                      Web3 music platform that allows users to discover and
                      listen to music from various artists.
                    </h4>
                    <div className="social">
                      <a href="https://x.com/officialloozr">
                        <span>
                          <Twitter /> Twitter <ArrowUpRight />
                        </span>
                      </a>
                      <a href="https://loozr.io/">
                        <span>
                          <Globe /> Website <ArrowUpRight />
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Tab>
            {/* <Tab eventKey="Resume" title="Resume" className="col">
              <div className="container col-12">
                <div className="row resume col-lg-12 col-md-12">
                  <div className="">
                    <img src={pics} alt="" />
                  </div>
                </div>
                <div className="social">
                  <a href="">
                    <span>
                      {" "}
                      Preview <EyeFill />
                    </span>
                  </a>
                  <a href={ResumePDF} download="OlumideSilas.pdf">
                    <span>
                      {" "}
                      Download <CloudArrowDownFill />
                    </span>
                  </a>
                </div>
              </div>
            </Tab> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
