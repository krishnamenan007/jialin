import React from 'react';


const AboutUs=() => {
  return (
    <section id="why" className="why section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us<br /></h2>
        <p>Enhancing Economic Development with Invention</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/aboutsvg.svg" className="img-fluid rounded-4 mb-4" alt="Why Us" />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Our state-of-the-art fintech options are made to simplify your money management. We provide organizations and people with the tools they need to confidently and easily optimize their financial plans, from real-time dashboards and secure transactions to sophisticated reporting and developer tools.
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> <span>Mission</span></li>
                <p className="vision">
                  -To be the world's top supplier of easy-to-use, safe, and intuitive financial tools that revolutionize the way people handle their money everywhere.
                </p>
                <li><i className="bi bi-check-circle-fill"></i> <span>Vision</span></li>
                <p className="vision">
                  -To be the world's top supplier of easy-to-use, safe, and intuitive financial tools that revolutionize the way people handle their money everywhere.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
