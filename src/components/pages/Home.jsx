import React, { useContext } from 'react'
import {Context} from "../../main.jsx"
import TrendingBlogs from '../miniComponents/TrendingBlogs.jsx';
import HeroSection from "../miniComponents/HeroSection.jsx"
import LatestBlogs from "../miniComponents/LatestBlogs.jsx"
import PopularAuthors from "../miniComponents/PopularAuthors.jsx"
const Home = () => {
  const {mode,blogs}=useContext(Context);
  const filteredBlogs=blogs.slice(0,6);
  return (
    <>
    <article className={mode==="dark"?"dark-bg":"light-bg"}>
      
        <HeroSection/>
        <TrendingBlogs/>
        <LatestBlogs blogs={filteredBlogs} heading={"LATEST BLOGS"}/>
        <PopularAuthors/>
    </article>
    </>
  )
}

export default Home