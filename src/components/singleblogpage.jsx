import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blog';
import Blog from '../components/blog';
import DOMPurify from 'dompurify';


const SingleBlog = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>;
    }
    const sanitizedContent = DOMPurify.sanitize(blog.content);

    return (
        <div className="container">
        <div className="row">
  
          <div className="col-lg-8">
  
            {/* Blog Details Section */}
            <section id="blog-details" className="blog-details section">
              <div className="container">
  
                <article className="article">
  
                  <div className="post-img">
                    <img src={blog.image} alt="" className="img-fluid" />
                  </div>
  
                  <h2 className="title">{blog.title}</h2>
  
                  <div className="meta-top">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <a href={blog.link}>John Doe</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-clock"></i> <a href={blog.link}><time dateTime="2020-01-01">Jan 1, 2022</time></a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-chat-dots"></i> <a href={blog.link}>12 Comments</a>
                      </li>
                    </ul>
                  </div>
  
                  <div className="content">
                    <p>
                    {blog.content }
                    </p>
                  </div>
  
                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li><a href="#">Business</a></li>
                    </ul>
  
                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li><a href="#">Creative</a></li>
                      <li><a href="#">Tips</a></li>
                      <li><a href="#">Marketing</a></li>
                    </ul>
                  </div>
  
                </article>
  
              </div>
            </section>
  
            {/* Blog Author Section */}
            <section id="blog-author" className="blog-author section">
              <div className="container">
                <div className="author-container d-flex align-items-center">
                  <img src="assets/img/blog/blog-author.jpg" className="rounded-circle flex-shrink-0" alt="" />
                  <div>
                    <h4>{blog.author}</h4>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Comment Form Section */}
            <section id="comment-form" className="comment-form section">
              <div className="container">
                <form action="">
                  <h4>Post Comment</h4>
                  <p>Your email address will not be published. Required fields are marked * </p>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <input name="website" type="text" className="form-control" placeholder="Your Website" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col form-group">
                      <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Post Comment</button>
                  </div>
                </form>
              </div>
            </section>
  
          </div>
  
          <div className="col-lg-4 sidebar">
            <div className="widgets-container">
  
              {/* Categories Widget */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li><a href="#">General <span>(25)</span></a></li>
                  <li><a href="#">Lifestyle <span>(12)</span></a></li>
                  <li><a href="#">Travel <span>(5)</span></a></li>
                  <li><a href="#">Design <span>(22)</span></a></li>
                  <li><a href="#">Creative <span>(8)</span></a></li>
                  <li><a href="#">Education <span>(14)</span></a></li>
                </ul>
              </div>
  
              {/* Recent Posts Widget */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>
                {/* <div className="post-item">
                  <img src="assets/img/blog/blog-recent-1.jpg" alt="" className="flex-shrink-0" />
                  <div>
                    <h4><a href="blog-details.html">Nihil blanditiis at in nihil autem</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div> */}
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
                           
                {/* Add more recent posts here */}
              </div>
  
              {/* Tags Widget */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>
  
            </div>
          </div>
  
        </div>
      </div>
    );
  };

export default SingleBlog;