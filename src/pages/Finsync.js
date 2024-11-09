import React from "react";
import Nav from "../components/header";
import Footer from "../components/footer";
import './finsync.css';
import Demo from "../components/demo";
import CallToAction from "../components/cta";
import FAQ from "../components/faq";

const Head = () => {
    return (
      <section className="head">
          <iframe
        width="560"
        height="515"
        src="https://www.youtube.com/embed/-Eqa1I3inss?autoplay=1&mute=1&loop=1&playlist=-Eqa1I3inss"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
  
        <h6>
        Innovative Market Insights with <span className="gradient-text highlight-bg"><cite>FinSync AI</cite></span>
        </h6>
        <p>Experience the next generation of market analysis with FinSync AI. Our AI-driven insights empower you to make informed decisions and stay ahead of the curve.</p>
        <a href="#demo" className="btn11"><b>Try Free Demo</b></a>
      </section>
    );
  };
  
  const Card = () => {
    return (
      <div className="car">
        <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
  
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><img src='/assets/img/nvidea/Predictive.svg' width="80px"/></div>
                  <h4 className="title">
                    <a href="" className="stretched-link">Predictive<br />Analytics</a>
                  </h4>
                  <p>Anticipate market trends and identify potential opportunities or risks ahead of time, empowering you to adapt your financial strategy proactively.</p>
                </div>
              </div>
  
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><img src='/assets/img/nvidea/Ai.svg' width="80px"/></div>
                  <h4 className="title">
                    <a href="" className="stretched-link">Advanced AI<br />Algorithms</a>
                  </h4>
                  <p>Our module employs state-of-the-art AI algorithms to analyze market data with precision, providing you with actionable insights to make informed decisions.</p>
                </div>
              </div>
  
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><img src='/assets/img/nvidea/Nvidea.svg' width="80px"/></div>
                  <h4 className="title">
                    <a href="" className="stretched-link">NVIDIA CUDA<br />Powered</a>
                  </h4>
                  <p>Experience lightning-fast processing speed and unparalleled performance with NVIDIA CUDA technology, ensuring swift and efficient market analysis.</p>
                </div>
              </div>
  
              <div className="col-xl-3 col-md-6">
                <div className="icon-box">
                  <div className="icon"><img src='/assets/img/nvidea/Real.svg' width="80px"/></div>
                  <h4 className="title">
                    <a href="" className="stretched-link">Secured<br />Transactions</a>
                  </h4>
                  <p>Superior encryption and security measures for all of your financial transactions will give you peace of mind.</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  };

export default function Finsync(){
    return(
        <>
        <Nav/>
        <Head />
      {/* <Features /> */}
      <Card/>
      <Demo/>
        <CallToAction/>
        <FAQ/>
  
        
        <Footer/>
        </>
    );

}