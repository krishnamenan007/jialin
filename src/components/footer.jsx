import React from 'react';
import Logo from '../assets/img/logo_d.svg';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };
    return (
        <footer id="footer" className="footer accent-background">

            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-6 col-md-12 footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                        <img src={Logo} alt="Company Logo" className="" />
                        </a>
                        <p><b>Utilize our comprehensive fintech suite to revolutionize your money management. Take use of an easily customized dashboard, sophisticated portfolio tools, smooth card control, and strong security to help you stay ahead of the game.</b></p>
                        <div className="d-flex mt-4">
                            <a href="https://x.com/JialinFinTech" target='_blank'> <img src='/assets/img/x.svg' alt="X" className="" width="50%"/></a>
                            <a href="https://web.facebook.com/JialinFinTech/" target='_blank'><img src='/assets/img/fb.svg' alt="fb" className="" width="50%"/></a>
                            <a href="https://www.youtube.com/@JialinFinTech"><img src='/assets/img/youtube.svg' alt="youtube" className="youtube" width="50%"/></a>
                            <a href="https://www.linkedin.com/company/jialin-fintech/"><img src='/assets/img/ln.svg' alt="Linkedin" className="" width="50%"/></a>
                            <a href="https://www.crunchbase.com/organization/jialin-fintech"><img src='/assets/img/cb.svg' alt="CB" className="" width="50%"/></a>
                            <a href="https://www.f6s.com/profile/5514969"><img src='/assets/img/f6s.svg' alt="F6S" className="" width="50%"/></a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
      <li><a href="#" onClick={() => handleNavigate('/')}>Home</a></li>
      <li><a href="/#why" onClick={() => handleNavigate('/#why')}>About us</a></li>
      <li><a href="/#about" onClick={() => handleNavigate('/#about')}>Services</a></li>
      {/* <li><a href="">Terms of service</a></li> */}
      <li><a href="/privacy_policy">Privacy policy</a></li>
    </ul>
                    </div>

                    {/* <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div> */}

                    <div className="col-lg-3 col-6 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>66 Sir Ernest de Silva Mawatha,</p>
                        <p>Colombo 00700</p>
                        <p>Sri Lanka.</p>
                        <p className="mt-4"><strong>Phone:</strong> <span>0112 574 303
                        </span></p>
                        <p><strong>Email:</strong> <span>support@jialinfintech.com</span></p>
                    </div>

                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> 2024 <strong className="px-1 sitename"><a href="">JialinFintech</a></strong> <span>All Rights Reserved</span></p>
               
            </div>

        </footer>
    );
};

export default Footer;
