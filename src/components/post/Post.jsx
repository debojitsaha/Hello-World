import React, { useState } from "react";
import "./post.scss";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  //Temporary

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <Link
              to={`profile/${post.userId}`}
              style={{
                cursor: "pointer",
              }}
            >
              <img src={post.profilePic} alt="" />
            </Link>
            <div className="details">
              <Link
                to={`profile/${post.userId}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon style={{ cursor: "pointer" }} />
        </div>
        <hr />

        <div className="content">
          <p>{post.desc}</p>
          {post.img && <img src={post.img} alt="" />}
        </div>

        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon onClick={() => setLiked(!liked)} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={() => setLiked(!liked)} />
            )}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
