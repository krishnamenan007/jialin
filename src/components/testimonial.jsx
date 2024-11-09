import React from 'react';

const Testimonials=() => {
  return (
    <section id="testimonial" className="testimonial section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>What clients say about us</h2>
        <p>
          Be among the thousands of happy clients who have greatly improved their finance controlling with our unique products. Listen to what they have to say about our tools and how they have benefited them.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <img src="./assets/img/testimonials/t1.png" alt="Sarah's Testimonial" style={{ width: '160%' }} />
              </div>
              <h3>Sarah, <span><p>Project Manager</p></span></h3>
              <p>
                The configuration system completely changed the way I handle my assets; I can see and decide all in one place and it feels like having my financial assistant with me.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <img src="./assets/img/testimonials/t2.png" alt="Jenny's Testimonial" style={{ width: '160%' }} />
              </div>
              <h3>Jenny, <span><p>CEO</p></span></h3>
              <p>
                The real-time alerts and secured transactions are the best. I am fully aware of all transactions going through my account and they actually occur in real time, indicating that my money is secure at all times.
              </p>
            </div>
          </div>
          {/* End Service Item */}

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <img src="./assets/img/testimonials/t3.png" alt="James's Testimonial" style={{ width: '160%' }} />
              </div>
              <h3>James, <span><p>Finance Manager</p></span></h3>
              <p>
                I was astounded by the Portfolio Manager's ease of use in managing my investments. It's perceptive and intuitive, and it's made it easy for me to optimize the profits of our business.
              </p>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
