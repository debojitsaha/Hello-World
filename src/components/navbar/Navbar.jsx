import React, { useContext } from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>hello-world</span>
        </Link>
        <div className="leftinner">
        <HomeOutlinedIcon style={{ cursor: "pointer" }} />
        </div>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} style={{ cursor: "pointer" }} />
        ) : (
          <DarkModeOutlinedIcon
            onClick={toggle}
            style={{ cursor: "pointer" }}
          />
        )}
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" name="" id="" placeholder="Search.." />
        </div>
      </div>
      <div className="rightouter">
      <div className="right">
        <NotificationsOutlinedIcon style={{ cursor: "pointer" }} />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
        </div>
        <div className="logout" onClick={logOutHandler}>
          <LogoutIcon style={{ cursor: "pointer" }} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
