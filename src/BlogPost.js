import React from 'react';
import './BlogPost.css';

const BlogPost = ({ 
  title, 
  date, 
  content, 
  backgroundImage,
  onBack 
}) => {
  return (
    <div 
      className="blog-post-wrapper"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className="blog-post-overlay"></div>
      
      <div className="blog-post-content">
        {/* Back button */}
        <div className="blog-post-nav">
          <button className="back-button" onClick={onBack}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>

        {/* Header */}
        <div className="blog-post-header">
          <h1 className="blog-post-title">{title}</h1>
          {date && <div className="blog-post-date">{date}</div>}
        </div>

        {/* Content */}
        <div 
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default BlogPost;