import React,{useContext} from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Context } from '../../main';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const TrendingBlogs = () => {
  const {blogs}=useContext(Context);
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  
  return (
    <div className="trending">
      <h3>Trending Blogs</h3>
          <Carousel responsive={responsive}>
              {
                blogs && blogs.length>0?(
                  //how many you want to display
                  blogs.slice(0,6).map((element)=>{
                    return (
                      <Link to={`/blog/${element._id}`} className='card' key={element._id}>
                        <img src={element.mainImage.url} alt="Main Image" className='blogImg'/>
                        <span className="category">
                          {element.category}
                        </span>
                        <h4>{element.title}</h4>
                        <div className="writer_section">
                          <div className="author">
                            <img src={element.authorAvatar} alt="Author Image" />
                            <p>{element.authorName}</p>
                          </div>
                        </div>
                      </Link>
                    )
                  })
                ):(<BeatLoader size={30} color='grey'/>)
              }
          </Carousel>
    </div>
  )
}

export default TrendingBlogs