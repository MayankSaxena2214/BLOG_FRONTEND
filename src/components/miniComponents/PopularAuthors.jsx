import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import axios from 'axios';
import {BeatLoader} from "react-spinners"
import { useSearchParams } from 'react-router-dom';
const PopularAuthors = () => {
  const [authors,setAuthors]=useState([]);
  useEffect(()=>{
    const fetchUser=async()=>{
      const {data}=await axios.get("https://blog-backend-48oa.onrender.com/api/v1/user/authors",{withCredentials:true});
      setAuthors(data.authors);
    }
    fetchUser();
  },[]);
  return (
    <section className="popularAuthors">
      <h3>Popular Authors</h3>
      <div className="container">
        {authors && authors.length > 0 ? (
          authors.slice(0, 4).map((element) => {
            return (
              <div className="card" key={element._id}>
                <img src={element.avatar.url} alt="author" />
                <p>{element.name}</p>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={30} />
        )}
      </div>
    </section>
  )
}

export default PopularAuthors