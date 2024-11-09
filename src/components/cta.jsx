import React from 'react';

export default function CallToAction() {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <div className="container">
        <img src="assets/img/cta.png" alt="Call to Action Background" />
        <div className="content row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              
              <h3>Unlock the Power of AI Market Analysis</h3>
              <p>
              Leveraging advanced artificial intelligence to gain deep insights into market trends, consumer behavior, and competitive landscapes.
              </p>
              <a className="cta-btn" href="/#contact">Purchase Full Version</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
