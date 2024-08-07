import React, { useContext, useEffect, useState } from 'react'
import {Context} from "../../main"
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const SingleBlog = () => {
  const{mode,isAuthenticated,user}=useContext(Context);
  const {id}=useParams();
  const [blog,setBlog]=useState({});
  useEffect(()=>{
    const getSingleBlog=async()=>{
      try{
        const {data}=await axios.get(`https://blog-backend-48oa.onrender.com/api/v1/blog/singleBlog/${id}`,{withCredentials:true});
        setBlog(data.blog);
      }
      
      catch(error){
        toast.error("Some error occured fetching blog api");
        setBlog({});
      }
    }
    getSingleBlog();
  },[])
  if(!isAuthenticated ){
    toast.error("Please login to view full details");
    return <Navigate to={"/login"}/>
  }
  return (
    <article className={mode==="dark"?"dark-bg singleBlog":"light-bg singleBlog"}>
      {
        blog && (
          <section className="container">
            <div className="category">{blog.category}</div>
            <h1>{blog.title}</h1>
            <div className="writer_section">
              <div className="author">
                <img src={blog.authorAvatar} alt="Author avatar" />
                <p>{blog.authorName} </p>
              </div>
            </div>
            {
              blog && blog.mainImage && (
                <img src={blog.mainImage.url} alt="Main Image" className='mainImg1'/>

              )
            }
            <p className="intro-text">{blog.intro}</p>
            <div className="sub-para">
              <h3>{blog.paraOneTitle}</h3>
              {
                blog && blog.paraOneImage && (
                  <img src={blog.paraOneImage.url} alt="Para One Image" className='paraOneImg'/>
                )
              }
              <p>{blog.paraOneDescription}</p>
            </div>
            <div className="sub-para">
              <h3>{blog.paraTwoTitle}</h3>
              {
                blog && blog.paraTwoImage && (
                  <img src={blog.paraTwoImage.url} alt="Para Two Image" className='paraOneImg'/>
                )
              }
              <p>{blog.paraTwoDescription}</p>
            </div>
            <div className="sub-para">
              <h3>{blog.paraThreeTitle}</h3>
              {
                blog && blog.paraThreeImage && (
                  <img src={blog.paraThreeImage.url} alt="Para Three Image" className='paraOneImg'/>
                )
              }
              <p>{blog.paraThreeDescription}</p>
            </div>
          </section>
        )
      }
    </article>
  )
}

export default SingleBlog