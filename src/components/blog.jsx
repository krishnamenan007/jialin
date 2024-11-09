// src/components/Blog.js
import React from 'react';

const Blog = ({ title, image, authorImage, author, date, link }) => {
    return (
        <article className="post-row pb-5">
            <div className="post-img">
                <img src={image} alt="" className="img-fluid" />
            </div>
            <div className="post-content">
                <h2 className="title">
                    <a href={link}>{title}</a>
                </h2>
                <div className="d-flex align-items-center">
                    <img src={authorImage} alt="" className="img-fluid post-author-img flex-shrink-0" />
                    <div className="post-meta">
                        <p className="post-author">{author}</p>
                        <p className="post-date">
                            <time dateTime={date}>{date}</time>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Blog;
