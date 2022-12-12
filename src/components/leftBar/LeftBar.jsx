import React from "react";
import "./leftBar.scss";
import { menu, others, shortcuts } from "./LeftbarData";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">

        <div className="menu">
          {menu.map((data,i) => (
            <div className="items" key={i}>
              <img src={data.pic} alt="" />
              <span>{data.name}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="shortcuts">
          <span>Your Shortcuts</span>
          {shortcuts.map((data,i) => (
            <div className="items" key={i}>
              <img src={data.pic} alt="" />
              <span>{data.name}</span>
            </div>
          ))}
        </div>

        <hr />

        <div className="others">
          <span>Others</span>
          {others.map((data,i) => (
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
