import React from 'react';
import blogs from '../data/blog';
import Blog from './blog';

export default function BlogSection() {
    return (
        <section id="blog" className="blog section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Blog<br /></h2>
            </div>
            {/* End Section Title */}

            <div className="container">

                <div className="row gy-4">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                        <div className="content ps-0 ps-lg-5">
                        {blogs.map((blog, index) => (
                                <Blog
                                    key={blog.id}
                                    title={blog.title}
                                    image={blog.image}
                                    authorImage={blog.authorImage}
                                    author={blog.author}
                                    date={blog.date}
                                    link={blog.link}
                                />
                            ))}
                           
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/blogsvg.svg" className="img-fluid rounded-4 mb-4" alt="" />
                    </div>
                </div>

            </div>

        </section>
    );
}
