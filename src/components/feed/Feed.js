import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./inputOptions/InputOption";
import Post from "../posts/Post";
// import db from "./fireBase";
// import firebase from 'firebase'
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState("");

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);
  const sendPost = (e) => {
    e.preventDefault();

    const post = { messages };
    setPosts((prevPosts) => [post, ...prevPosts]);
    setMessages("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={messages}
              type="text"
              onChange={(e) => setMessages(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputsOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* {console.log(messages)} */}
      {posts.map((post) => (
        <Post name="Junaid zafar" description="junaid.zafar@gmail.com" post={post} />
      ))}
      {/* <Post
        name="Junaid zafar"
        description="This is a test"
        message="Wow thus worked"
      /> */}
    </div>
  );
};

export default Feed;
