import React, { useState } from "react";
import "./Post.css";
import img1 from "../../assets/IMG-20221106-164440-764.JPG";
import { Avatar } from "@mui/material";
import InputOption from "../feed/inputOptions/InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const Post = ({ name, description, post: { messages, image, videoFile } }) => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  const handleClick = () => {
    setIsIconClicked(!isIconClicked);
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={img1} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{messages}</p>
      </div>
      <div className="post__bodyImage">
        {image && !videoFile && <img src={image} alt="post" />}
        {videoFile && !image && <video src={videoFile} alt="post" controls />}
      </div>
      <div className="post__buttons">
        <button onClick={handleClick}>
          <InputOption
            Icon={isIconClicked ? ThumbUpIcon : ThumbUpOffAltIcon}
            title="Like"
            color={isIconClicked ? "#0077b5" : "gray"}
          />
        </button>
        <InputOption Icon={MessageOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
