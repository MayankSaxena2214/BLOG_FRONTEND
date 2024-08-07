import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
export const Context=createContext({isAuthenticated:false});
const AppWrapper=()=>{
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [user,setUser]=useState({});
  const [mode,setMode]=useState("dark");
  const [blogs,setBlogs]=useState([]);
  return (
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser,mode,setMode,blogs,setBlogs}} >
      <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AppWrapper/>
  </React.StrictMode>,
)
