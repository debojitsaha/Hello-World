import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";
import dummypic from "../../assets/loginleft.jpeg";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: dummypic,
    },
    {
      id: 2,
      name: "John Doe",
      img: dummypic,
    },
    {
      id: 3,
      name: "John Doe",
      img: dummypic,
    },
    {
      id: 4,
      name: "John Doe",
      img: dummypic,
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
