import React from 'react';


const HeroSection = () => {
    return (
        <section id="hero" className="hero section accent-background">
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2>
                            <span>Transform your </span>
                            <span className="accent"> Financial management </span>
                            <span> in second </span>
                        </h2>
                        <p>
                            Our innovative platform interprets financial management, helping you to make more strategic decisions faster.
                        </p>
                        <div className="d-flex">
                            <a href="#about" className="btn-get-started">Get Started</a>
                            <a href="/finsync_ai" className="glightbox btn-watch-video d-flex align-items-center">
                            <i class="bi bi-robot"></i>
                                <span>Check Our AI!</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src="/assets/img/herosvg.svg" className="img-fluid" alt="Hero" />
                    </div>
                </div>
            </div>
        </section>

        

    );
};

export default HeroSection;
