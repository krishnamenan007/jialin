import React from 'react';

const Services = () => {
  return (
    <div className="row gy-4 d-flex align-items-stretch">
      {/* About Section */}
      <section id="about" className="about section col-lg-6 d-flex flex-column">
        <div className="container flex-grow-1">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <h4>
              With a configurable dashboard, real-time alerts, and automated reporting for seamless financial management,
              you can manage investments, keep tabs on spending, and secure transactions.
            </h4>
            <img src="assets/img/s1.png" className="img-fluid rounded-4 mb-4" alt="" />
          </div>
        </div>
      </section>
      {/* /About Section */}
      
      {/* About1 Section */}
      <section id="about1" className="about1 section col-lg-6 d-flex flex-column">
        <div className="container flex-grow-1">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <div className="container flex-grow-1">
                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                  <img src="assets/img/s2.png" className="img-fluid rounded-4 mb-4" alt="" />
                  <h4>
                    With simple-to-use tools for card control, portfolio management, and real-time monitoring—all supported
                    by strong security and prompt alerts—you can streamline your financial life.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About1 Section */}
    </div>
  );
};

export default Services;
