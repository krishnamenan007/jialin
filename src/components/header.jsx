import React, {useState} from 'react';
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-scroll';

export default function Nav() {

    const [isNavActive, setNavActive] = useState(false);

    const handleNavToggle = () => {
        setNavActive(!isNavActive);
    };

    return (
        <>
            {/* <header id="header" className="header fixed-top"> */}
            <header id="header" className={`header fixed-top ${isNavActive ? 'mobile-nav-active' : ''}`}>
                <div className="topbar d-flex align-items-center">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope d-flex align-items-center">
                                <a href="mailto:support@jialinfintech.com">support@jialinfintech.com</a>
                            </i>
                            <i className="bi bi-phone d-flex align-items-center ms-4">
                                <span>(+94) 112 574 303</span>
                            </i>
                        </div>
                        <div className="social-links d-none d-md-flex align-items-center">
                            <a href="https://x.com/JialinFinTech" className="twitter"><i className="bi bi-twitter-x"></i></a>
                            <a href="https://web.facebook.com/JialinFinTech/" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.youtube.com/@JialinFinTech" className="youtube"><i className="bi bi-youtube"></i></a>
                            <a href="https://www.linkedin.com/company/jialin-fintech/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="/" className="logo d-flex align-items-center">
                        <img src={Logo} alt="Company Logo" className="logo" width="220px"/>
            
                        </a>

                        <nav id="navmenu" className={`navmenu ${isNavActive ? 'mobile-nav-active' : ''}`}>
                            <ul>
                                <li><a href="/#" className="">Home<br /></a></li>
                                <li><a href="/#why">About</a></li>
                                <li><a href="/#about">Services</a></li>
                                <li><a href="/#pricing">Pricing</a></li>
                                <li><a href="/#blog">Blog</a></li>
                                <li><a href="/#contact">Contact Us</a></li>
                                
                               
                                <li><a href="http://login.jialinfintech.com/" className="btn">Register Now</a></li>
                                
                            </ul>
                            <i className={`mobile-nav-toggle d-xl-none bi ${isNavActive ? 'bi-x' : 'bi-list'}`} onClick={handleNavToggle}></i>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
