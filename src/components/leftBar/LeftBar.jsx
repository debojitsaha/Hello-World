import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftBar.scss";
import { menu, others, shortcuts } from "./LeftbarData";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="items">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          {menu.map((data, i) => (
            <div className="items" key={i}>
              <img src={data.pic} alt="" />
              <span>{data.name}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="shortcuts">
          <span>Your Shortcuts</span>
          {shortcuts.map((data, i) => (
            <div className="items" key={i}>
              <img src={data.pic} alt="" />
              <span>{data.name}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="others">
          <span>Others</span>
          {others.map((data, i) => (
            <div className="items" key={i}>
              <img src={data.pic} alt="" />
              <span>{data.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
