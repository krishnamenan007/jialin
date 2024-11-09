import React from 'react';


export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Adaptable Cost Structures: Developer, Business, and Free Choices Available</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Basic Plan</h3>
              <div className="icon">
                <i className="bi bi-box"></i>
              </div>
              <h4><sup>$</sup>9.99<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Basic aspects of the portfolio and dashboard.</span></li>
                <li><i className="bi bi-check"></i> <span>Availability of both recent and past data.</span></li>
                <li><i className="bi bi-check"></i> <span>Basic encryption for transactions.</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Routine account notifications.</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Top priority client service.</span></li>
              </ul>
              <div className="text-center"><a href="#contact" className="buy-btn">Buy Now</a></div>
            </div>
          </div>
          {/* End Pricing Item */}

          <div className="col-lg-4">
            <div className="pricing-item featured">
              <h3>Business Plan</h3>
              <div className="icon">
                <i className="bi bi-rocket"></i>
              </div>
              <h4><sup>$</sup>29.99<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Increased access to data.</span></li>
                <li><i className="bi bi-check"></i> <span>Improved encryption and security.</span></li>
                <li><i className="bi bi-check"></i> <span>Notifications on activity and changes in the market in real time.</span></li>
                <li><i className="bi bi-check"></i> <span>Comprehensive automated reporting.</span></li>
                <li><i className="bi bi-check"></i> <span>Top priority client service.</span></li>
              </ul>
              <div className="text-center"><a href="#contact" className="buy-btn">Buy Now</a></div>
            </div>
          </div>
          {/* End Pricing Item */}

          <div className="col-lg-4">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <div className="icon">
                <i className="bi bi-send"></i>
              </div>
              <h4><sup>$</sup>49.99<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>API access in order to integrate fintech.</span></li>
                <li><i className="bi bi-check"></i> <span>Total access to the data.</span></li>
                <li><i className="bi bi-check"></i> <span>Sophisticated encryption choices.</span></li>
                <li><i className="bi bi-check"></i> <span>Personalized notifications.</span></li>
                <li><i className="bi bi-check"></i> <span>Enhanced reporting through the use of developer tools.</span></li>
                <li><i className="bi bi-check"></i> <span>Committed technical assistance.</span></li>
              </ul>
              <div className="text-center"><a href="#contact" className="buy-btn">Buy Now</a></div>
            </div>
          </div>
          {/* End Pricing Item */}
        </div>
      </div>
    </section>
  );
}
