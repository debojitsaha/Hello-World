import React from "react";
import "./rightBar.scss";
import { latestActivities, onlineFriends, suggestions } from "./RightbarData";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>
          {suggestions.map((data, i) => (
            <div className="user">
              <div className="userInfo" key={i}>
                <img src={data.pic} alt="" />
                <span>{data.name}</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Latest Activities</span>
          {latestActivities.map((data, i) => (
            <div className="user">
              <div className="userInfo" key={i}>
                <img src={data.pic} alt="" />
                <p>
                  <span>{data.name}</span> {data.activity}
                </p>
              </div>
              <span>{data.time}</span>
            </div>
          ))}
        </div>
        
        <div className="item">
          <span>Online Friends</span>
          {onlineFriends.map((data, i) => (
            <div className="user">
              <div className="userInfo" key={i}>
                <img src={data.pic} alt="" />            
                <div className="online" />
                <span>{data.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
