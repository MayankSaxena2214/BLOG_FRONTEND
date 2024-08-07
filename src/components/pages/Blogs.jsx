import React, { useContext } from 'react'
import { Context } from '../../main'
import LatestBlogs from '../miniComponents/LatestBlogs';

const Blogs = () => {
  const {mode,blogs}=useContext(Context);

  return (
    <article className={mode==="dark"?"dark-bg":"light-bg"}>
      <LatestBlogs blogs={blogs} title={"BLOGS"}/>
    </article>
  )
}

export default Blogs