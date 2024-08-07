import React, { useContext } from 'react'
import { Context } from '../../main';

const About = () => {
  const {mode}=useContext(Context);

  return (
    <article className={mode==="dark"?"dark-bg about":"light-bg about"}>
        <div className="container">
        <h2>ABOUT</h2>
        <p>Welcome to Mayank's Blog, a vibrant online space where curiosity meets knowledge. We are committed to fostering a community of lifelong learners by offering insightful articles across a broad spectrum of topics including lifestyle, technology, sports, travel, business, and economy. Our goal is to inspire, educate, and entertain our readers with every piece we publish.</p>
        <p>At the heart of our blog is the belief that knowledge should be accessible to all. We curate content that is both informative and engaging, ensuring that our readers find value in every article they read. Whether you're a seasoned professional looking to expand your expertise or a curious individual eager to learn something new, our blog has something for you.</p>
        <p>Our team of writers is comprised of passionate experts in their respective fields, bringing a wealth of experience and insight to our pages. They are dedicated to creating content that not only informs but also sparks conversations and encourages further exploration. We believe in the power of storytelling and the impact of well-researched, thoughtfully written pieces.</p>
        <p>Mayank's Blog is more than just a collection of articles; it's a platform for growth, discovery, and connection. By subscribing to our newsletter, you join a community of like-minded individuals who share a passion for learning and personal development. Stay informed about the latest trends, gain insights into emerging technologies, and discover new perspectives that challenge and enrich your worldview.</p>
        <p>In an age where information overload is a common challenge, we strive to cut through the noise and deliver content that matters. Our editorial team meticulously selects and curates articles to ensure relevance and quality, making sure that our readers always find something of interest and value. Engage with us, explore our categories, and let Mayank's Blog be your go-to source for meaningful content that inspires and enlightens.</p>
        <p>Have questions? Looking to collaborate? Reach out to us. We welcome feedback, suggestions, and opportunities to connect with our readers and contributors. Together, let's continue to grow this vibrant community and make a positive impact through shared knowledge and experiences.</p>
        </div>
    </article>
  )
}

export default About;