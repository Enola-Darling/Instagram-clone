import React, { useEffect, useState } from "react";
import Story from "../story";
import "./chat.css";

const Chat = () => {
  const url = "https://api.npoint.io/c59d0538fafba6432ffe";
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div>
      <input id="" type="text" name="search" className="Chat__search" />
      <ul className="Chat__List">
        {stories.map((story) => (
          <li className="Chat__Item" key={story.id}>
            <Story story={story} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;