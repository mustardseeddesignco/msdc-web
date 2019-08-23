import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import iphonemock from '../assets/images/iphone-mock-up.png';
import bowlermock from '../assets/images/marketing-collateral.jpg'
import bbemugs from '../assets/images/coffeemug-mockup.jpg'
import dogfight from '../assets/images/dogfight.jpg'
import { from } from 'rxjs';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
    <br/>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1>
              Corporate Branding, Logo Design, Graphic Design, and Photography. We cater to many companies big and small creating and designing logo designs and brand identity systems. 
              </h1>
              <br/>
              <Scroll type="id" element="contact">
                <a href="#contact" className="btn btn-outline btn-xl">
                  Let's Talk About Your Project
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
                <div className="device">
                  <div className="screen">
                    <img src={iphonemock} className="img-fluid" alt="" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-bg1 text-center" id="projects">
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <h2 className="section-heading">
              Discover what all the buzz is about!
            </h2>
            <p>
              Some of our recent projects
            </p>
            
          </div>
          <div className="row">
            <div className="col-xs-8 col-md-3">
              <Link to="/projects/bowlers-hat-co"><img src={bowlermock} className="img-fluid" alt="" /></Link>
            </div>
              <div className="col-xs-8 col-md-3">
                <Link to="projects//broadbrook-exclusive"><img src={bbemugs} className="img-fluid" alt="" /></Link>
              </div>
                  <div className="col-xs-8 col-md-3">
                    <img src={dogfight} className="img-fluid" alt="" />
                  </div>
                  <div className="col-xs-8 col-md-3">
                    <img src={dogfight} className="img-fluid" alt="" />
                  </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="workwithmsdc">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Working With MSDC = Unlimited Fun</h2>
          <p className="gradient">
            When you choose to work with Mustard Seed Design Co. you are choosing to design your brand with talented foreward-thinking logo designers, web designers, and web developers.
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
                <div className="device">
                  <div className="screen">
                    <img src={iphonemock} className="img-fluid" alt="" />
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-secondary"></i>
                    <h3 className="white-text">Device Mockups</h3>
                    <p className="white-text">
                      Ready to use HTML/CSS device mockups, no Photoshop
                      required!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3 className="white-text">Flexible Use</h3>
                    <p className="white-text">
                      Put an image, video, animation, or anything else in the
                      screen!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3 className="white-text">Free to Use</h3>
                    <p className="white-text">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3 className="white-text">Open Source</h3>
                    <p className="white-text">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop Waiting.
          </h2>
            
          <h2>
            Make A Splash.
          </h2>
          <br />
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact" id="contact">
      <div className="container">
        <h2>
          Show some
          <i className=" fas fa-heart"></i>
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
