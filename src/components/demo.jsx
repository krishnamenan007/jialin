import React from 'react';
 // Assuming you have a CSS file for styling

const Demo = () => {
  return (
    <section className="welcome-one" id="demo">
      <div className="welcome-one-shape"  style={{ backgroundImage: 'url(/assets/img/welcome-one-shape.png)' }}>
      </div>
      <div className="container">
        <div className="welcome-one__top">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="welcome-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Why Choose FinSync AI?</span>
                  <h3 className="free-consultation__content">
                    Elevate your finance management system with our groundbreaking <span style={{ color: '#FE2424' }}>FinSync AI</span>.
                  </h3>
                  <p className="welcome-one__find-solutions-text">
                  FinSync AI delivers accurate predictions and actionable insights through advanced algorithms, all within a user-friendly and secure platform designed for both beginners and experts. Enjoy a seamless experience with confidence in the confidentiality and integrity of your financial data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="welcome-one__top-right">
                <div className="welcome-one__video-link wow fadeInRight" data-wow-delay="200ms">
                  <div className="main-construct-sec" style={{ overflowX: 'hidden' }}>
                    <div className="col-lg-12">
                      <div className="cons-img">
                        &nbsp;
                        <form
                          encType="multipart/form-data"
                          id="predictionForm"
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            padding: '20px',
                            border: '2px solid #FE2424',
                            borderRadius: '10px',
                            backgroundColor: '#fcebeb',
                            width: '370px',
                            margin: '0 auto'
                          }}
                        >
                          <label
                            htmlFor="csvFile"
                            style={{
                              fontFamily: 'Arial, sans-serif',
                              fontSize: '16px',
                              marginBottom: '10px',
                              color: '#333'
                            }}
                          >
                            Upload Market Data CSV:
                          </label>
                          <input
                            id="csvFile"
                            name="csvFile"
                            style={{
                              marginBottom: '20px',
                              padding: '5px',
                              border: '1px solid #ccc',
                              borderRadius: '5px'
                            }}
                            type="file"
                          />
                          <button
                            style={{
                              backgroundColor: '#FE2424',
                              border: 'none',
                              color: 'white',
                              padding: '10px 10px',
                              textAlign: 'center',
                              textDecoration: 'none',
                              display: 'inline-block',
                              fontSize: '16px',
                              borderRadius: '5px',
                              cursor: 'pointer'
                            }}
                            type="submit"
                          >
                            Analyze and Predict
                          </button>
                        </form>
                        <div id="predictionResult">&nbsp;</div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-one__bottom">
          <ul className="list-unstyled welcome-one__feature">
            <li className="welcome-one__feature-single wow fadeInUp" data-wow-delay="100ms">
              <div className="welcome-one__feature-content">
                <h3 className="welcome-one__feature-title"><a href="#">Real-Time Data Analysis</a></h3>
              </div>
              <div className="welcome-one__feature-icon">
                <span className="icon-mobile-analytics"><img src='/assets/img/nvidea/1.svg' width="80px"/></span>
              </div>
              {/* <div className="welcome-one__feature-count"></div> */}
            </li>
            <li className="welcome-one__feature-single wow fadeInUp" data-wow-delay="200ms">
              <div className="welcome-one__feature-content">
                <h3 className="welcome-one__feature-title"><a href="#">Informed Decisions</a></h3>
              </div>
              <div className="welcome-one__feature-icon">
                <span className="icon-verification"><img src='/assets/img/nvidea/2.svg'/></span>
              </div>
              {/* <div className="welcome-one__feature-count"></div> */}
            </li>
            <li className="welcome-one__feature-single wow fadeInUp" data-wow-delay="300ms">
              <div className="welcome-one__feature-content">
                <h3 className="welcome-one__feature-title"><a href="#">AI Support</a></h3>
              </div>
              <div className="welcome-one__feature-icon">
                <span className="icon-conversation"><img src='/assets/img/nvidea/3.svg'/></span>
              </div>
              {/* <div className="welcome-one__feature-count"></div> */}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Demo;
