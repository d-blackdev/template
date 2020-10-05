import React from "react";
import "../../css/User/User.css";
import { useLocation } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Logo from "../../images/crypto.png";

function User() {
  let location = useLocation();
 
  const type = location.pathname === "/user/login" ? <Login /> : <Register />;
  return (
    <div className="user">
      {/* <div className="user-content"> */}
        <div className="side1">
     
          <div className="img-cont">
            <img src={Logo} alt="logo" className="img" />
          </div>
        </div>
        <div className="side2">{type}</div>
      {/* </div> */}
    </div>
  );
}

export default User;
