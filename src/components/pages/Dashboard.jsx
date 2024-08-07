// import React, { useContext, useState } from 'react'
// import { Context } from '../../main'
// import { Navigate } from 'react-router-dom';
// import Sidebar from "../layout/Sidebar"
// import MyProfile from "../miniComponents/MyProfile"
// import Chart from "../miniComponents/Chart"
// import MyBlogs from "../miniComponents/MyBlogs"
// import CreateBlog from "../miniComponents/CreateBlog";
// const Dashboard = () => {
//   const [component,setComponent]=useState("MyBlogs");
//   const {mode,isAuthenticated,user}=useContext(Context);
//   if(!isAuthenticated || user.role==="Reader"){
//     return <Navigate to={"/"}/>
//   }
//   return (
//     <section className={mode==="dark"?"dark-bg dashboard":"light-bg dashboard"}>
//       <Sidebar component={component} setComponent={setComponent}/>
//       {
//         component==="MY Profile"?(<MyProfile/>):component==="Create Blog"?(<CreateBlog/>):component==="Chart"?(<Chart/>):(<MyBlogs/>)
//       }
//     </section>
//   )
// }

// export default Dashboard
import React, { useContext, useState } from "react";
import SideBar from "../layout/Sidebar";
import MyBlogs from "../miniComponents/MyBlogs";
import MyProfile from "../miniComponents/MyProfile";
import CreateBlog from "../miniComponents/CreateBlog";
import Chart from "../miniComponents/Chart";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
const Dashboard = () => {
  const [component, setComponent] = useState("MyBlogs");
  const { mode, isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section
      className={mode === "dark" ? "dark-bg dashboard" : "light-bg dashboard"}
    >
      <SideBar component={component} setComponent={setComponent} />
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : component === "Analytics" ? (
        <Chart />
      ) : (
        <MyBlogs />
      )}
    </section>
  );
};

export default Dashboard;