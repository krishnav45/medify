import React from "react";
import img from "../../assets/Blog-image.png";
import editor from "../../assets/RebeccaLee.png"
import "./BlogsAndNews.css";

const BlogsAndNews = () => {
  return (
<div className='BlogAndNews'>
      <h4>Blog & News</h4>
      <h1>Read Our Latest News</h1>
      <div className="blogs">
        <div className="card">
          <img src={img} alt="" srcset="" />
          <div className="content">
          <h5>Medical <span>|</span> March 31, 2022</h5>
          <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
          <div className="editor">
            <img src={editor} alt="" srcset="" />
            <h4>Rebecca Lee</h4>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" srcset="" />
          <div className="content">
          <h5>Medical <span>|</span> March 31, 2022</h5>
          <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
          <div className="editor">
            <img src={editor} alt="" srcset="" />
            <h4>Rebecca Lee</h4>
          </div>
          </div>
        </div>
        <div className="card">
          <img src={img} alt="" srcset="" />
          <div className="content">
          <h5>Medical <span>|</span> March 31, 2022</h5>
          <h3>6 Tips To Protect Your Mental Health When You’re Sick</h3>
          <div className="editor">
            <img src={editor} alt="" srcset="" />
            <h4>Rebecca Lee</h4>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default BlogsAndNews;