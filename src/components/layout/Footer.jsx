import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <>
      <footer
        className={
          isDashboard.pathname === "/dashboard"
            ? "hideFooter"
            : mode === "light"
            ? "light-footer"
            : "dark-footer"
        }
      >
        <div className="container">
          <div className="about">
            <h3>About</h3>
            <p>
            Welcome to Mayank's Blog, a vibrant space dedicated to sharing insights, experiences, and knowledge across various domains including lifestyle, technology, sports, travel, business, and economy. Explore engaging articles, weekly newsletters, and subscribe to stay updated. Connect with us on our social media platforms for more content and interactions.
            </p>
            <p>
              <span>Email:</span>mayanksaxena2214@gmail.com
            </p>
            <p>
              <span>Phone:</span>+91 92595 25543
            </p>
          </div>
          <div className="quick_links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <Link to={"/about"}>About</Link>
              <Link to={"/blogs"}>Blogs</Link>
              <Link to={"/dashboard"}>Dashboard</Link>
            </ul>
          </div>
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Sports</li>
              <li>Travel</li>
              <li>Business</li>
              <li>Economy</li>
            </ul>
          </div>
          <div className="news_letter">
            <div>
              <h3>Weekly News Letter</h3>
              <p>Get blog articles and offer by email</p>
            </div>
            <div>
              <input type="text" placeholder="your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="logo">
            MS <span>BLOG</span>
          </div>
          <div className="links">
            <a href="https://www.instagram.com/mayanksaxena2214">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mayank-saxena-419388239/">
              <AiFillLinkedin/>
            </a>
            <a href="https://github.com/MayankSaxena2214"></a>
            <a href="mailto:mayanksaxena2214@gmail.com">
              <AiFillMail />
            </a>
            <a href="https://wa.me/+919259525543">
              <IoLogoWhatsapp />
            </a>
            <a href="https://leetcode.com/u/Mayanksaxena2114/">
              <SiLeetcode/>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
