import React from 'react';

const IconBoxSection = () => {
  return (
    <div className="car">
      <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><img src='/assets/img/customdb.svg'/></div>
                <h4 className="title">
                  <a href="" className="stretched-link">Customized<br />Dashboard</a>
                </h4>
                <p>Create a Modify dashboard with real-time data and intuitive controls for Coherent monitoring.</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><img src='/assets/img/pm.svg'/></div>
                <h4 className="title">
                  <a href="" className="stretched-link">Portfolio<br />Manager</a>
                </h4>
                <p>Use our extensive portfolio tools to easily manage and optimize your investments.</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><img src='/assets/img/cm.svg'/></div>
                <h4 className="title">
                  <a href="" className="stretched-link">Card<br />Management</a>
                </h4>
                <p>You can make payments, set limits, and keep track of your spending with all of your cards in one location.</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><img src='/assets/img/st.svg'/></div>
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

export default IconBoxSection;
