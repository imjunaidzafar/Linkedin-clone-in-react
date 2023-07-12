import React from "react";
import './Post.css'
import img1 from "../../assets/IMG-20221106-164440-764.JPG"
import { Avatar } from "@mui/material";
import InputOption from "../feed/inputOptions/InputOption";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const Post = ({name, description, message, photoUrl, post:{messages}}) => {

    
  return <div className="post">
    <div className="post__header">
        <Avatar src={img1}/>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <div className="post__body">
        <p>{messages}</p>
    </div>
    <div className="post__buttons">
        <InputOption  Icon={ThumbUpOffAltIcon} title='Like' color='gray'/>
        <InputOption  Icon={MessageOutlinedIcon} title='Comment' color='gray'/>
        <InputOption  Icon={ShareOutlinedIcon} title='Share' color='gray'/>
        <InputOption  Icon={SendOutlinedIcon} title='Send' color='gray'/>
    </div>
  </div>;
};

export default Post;
