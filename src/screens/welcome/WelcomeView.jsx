import "../../styles/Global.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import HomeController from "../home/HomeController";

export default function WelcomeView() {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  	
  const userString = "" + user;
  // const firstFour = userString.substring(0, 4);
  // const lastFour = userString.substring(userString.length - 4);
  // const userPreview = firstFour + "..." + lastFour;
  
  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    }).then((res) => {
      res.data.id ? setUser(res.data.id) : setUser(null);
      console.log(res);
    })
  })

  // const navigateHome = () => {
  //   navigate("/");
  // };

  // const navigateLogin = () => {
  //   window.location.replace("http://localhost:3001/login")
  // };

  const navigateLogout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/logout",
    }).then((res) => {
      setUser(null);
      navigate("/")
      console.log(res);
    })
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/home" element={<HomeController />} />
      </Routes>
    </div>
  );
}