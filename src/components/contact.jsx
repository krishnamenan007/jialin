import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Feel Free to Reach Us</p>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gx-lg-0 gy-4">

                    <div className="col-lg-4">
                        <div className="info-container d-flex flex-column align-items-center justify-content-center">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>66 Sir Ernest de Silva Mawatha, Colombo 00700, Sri Lanka.</p>
                                </div>
                            </div>
                            {/* End Info Item */}

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+94 112 574 303
                                    </p>
                                </div>
                            </div>
                            {/* End Info Item */}

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>support@jialinfintech.com</p>
                                </div>
                            </div>
                            {/* End Info Item */}

                            {/* <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                                <i className="bi bi-clock flex-shrink-0"></i>
                                <div>
                                    <h3>Open Hours:</h3>
                                    <p>Mon-Sat: 11AM - 23PM</p>
                                </div>
                            </div> */}
                            {/* End Info Item */}
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade" data-aos-delay="100">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control" 
                                        placeholder="Your Name" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        required 
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        required 
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="col-md-12">
                                    <textarea 
                                        className="form-control" 
                                        name="message" 
                                        rows="8" 
                                        placeholder="Message" 
                                        required 
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </div>

                            </div>
                        </form>
                    </div>
                    {/* End Contact Form */}

                </div>

            </div>

        </section>
    );
}
