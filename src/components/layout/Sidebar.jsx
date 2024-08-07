// import React, { useContext, useState } from 'react'
// import { Context } from '../../main';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { RxHamburgerMenu } from 'react-icons/rx';
// import {FaArrowLeft} from "react-icons/fa"
// import { CiLight } from 'react-icons/ci';
// import { MdDarkMode } from 'react-icons/md';
// const Sidebar = ({component,setComponent}) => {
//     const [show,setShow]=useState(false);
//     const {mode,setMode,isAuthenticated,setIsAuthenticated}=useContext(Context);
//     const navigateTo=useNavigate();
//     const handleLogout = async (e) => {
//         e.preventDefault();
//         try {
//           const { data } = await axios.get(
//             "https://blog-backend-48oa.onrender.com/api/v1/user/logout",
//             { withCredentials: true }
//           );
//           setIsAuthenticated(false);
//           toast.success(data.message);
//           navigateTo("/");
//         } catch (error) {
//           toast.error(error.response.data.message);
//         }
//       };
//       const goToHome=()=>{
//         navigateTo("/");
//       }
//       const handleComponent=(value)=>{
//         setComponent(value);
//       }

//   return (<>
//     <div className="icon-wrapper" onClick={()=>setShow(!show)}>
//         <RxHamburgerMenu/>
//     </div>
//     <section className={show?"show-sidebar sidebar":"sidebar"}>
//         <div className="icon-wrapper-arrow" onClick={()=>setShow(!show)}>
//             <FaArrowLeft/>
//         </div>
//         <div className="user-detail">
//             <img src="/pic.img" alt="avatar" />
//             <p>JHON WICK</p>
//         </div>
//         <ul>
//             <button onClick={()=>setComponent("My Blogs")}>My Blogs</button>
//             <button onClick={()=>setComponent("Create Blog")}>Create Blog</button>
//             <button onClick={()=>setComponent("Chart")}>Chart</button>
//             <button onClick={()=>setComponent("My Profile")}>My Profile</button>
//             <button onClick={goToHome}>Home</button>
//             <button onClick={handleLogout}>Logout</button>
//             <button onClick={ mode==="light"?setMode("dark"):setMode("light")} className={mode==="light"?"mode-btn light-mode":"mode-btn dark-mode"}>
//                 {
//                     mode==="light"?<CiLight className='light-icon'/>:<MdDarkMode className="dark-icon"/>
//                 }
//             </button>
//         </ul>
//     </section>
//     </>
//   )
// }

// export default Sidebar
import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Context } from "../../main";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const SideBar = ({ setComponent }) => {
  const [show, setShow] = useState(false);
  const { mode, setMode, setIsAuthenticated, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://blog-backend-48oa.onrender.com/api/v1/user/logout",
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const gotoHome = () => {
    navigateTo("/");
  };
  const handleComponent = (value) => {
    setComponent(value);
  };
  return (
    <>
      <div className="icon-wrapper" onClick={() => setShow(!show)}>
        <RxHamburgerMenu />
      </div>
      <section className={show ? "show-sidebar sidebar" : "sidebar"}>
        <div className="icon-wrapper-arrow" onClick={() => setShow(!show)}>
          <FaArrowLeft />
        </div>
        <div className="user-detail">
          <img src={user && user.avatar.url} alt="avatar" />
          <p>{user.name}</p>
        </div>
        <ul>
          <button onClick={() => handleComponent("My Blogs")}>MY BLOGS</button>
          <button onClick={() => handleComponent("Create Blog")}>
            CREATE BLOG
          </button>
          <button onClick={() => handleComponent("Analytics")}>
            CHART
          </button>
          <button onClick={() => handleComponent("My Profile")}>
            MY PROFILE
          </button>
          <button onClick={gotoHome}>HOME</button>
          <button onClick={handleLogout}>LOGOUT</button>
          <button
            onClick={() =>
              mode === "light" ? setMode("dark") : setMode("light")
            }
            className={
              mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
            }
          >
            {mode === "light" ? (
              <CiLight className="light-icon" />
            ) : (
              <MdDarkMode className="dark-icon" />
            )}
          </button>
        </ul>
      </section>
    </>
  );
};

export default SideBar;