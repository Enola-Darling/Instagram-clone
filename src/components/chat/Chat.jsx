import React, { useEffect, useState } from "react";
import SingleChat from "../singleChat";
import "./chat.css";
import { Search } from "../../icons";

const Chat = () => {
  const url = "https://api.npoint.io/45615d0ddef177eef95b";
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMessages(data.messageList));
  }, []);

  return (
    <div>
      <input id="" type="text" name="search" className="Chat__search" />
      <Search/>
      <ul className="Chat__List">
       {messages.map((message) => (
          <li className="Chat__Item" key={message.id}>
            <SingleChat message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;