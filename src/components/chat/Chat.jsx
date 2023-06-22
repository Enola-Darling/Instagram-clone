import React, { useEffect, useState } from "react";
import SingleChat from "../singleChat";
import "./chat.css";
import { Search } from "../../icons";

const Chat = () => {
  const url = "https://api.npoint.io/45615d0ddef177eef95b";
  const [messages, setMessages] = useState([]);
  const [chatName, setChatName] = useState("");
  const currentUser = "John";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMessages(data.messageList));
  }, []);

  //const onSetChatName = (value) => setChatName(value)

  const onChatRendering =() =>{
    switch (chatName) {
      case "": 
        return (
          <div >
            <input id="" type="text" name="search" className="Chat__search" />
            <div className="Icon"> <Search/> </div>
            <ul className="Chat__List" >
            {messages.map((chat) => (
                <li className="Chat__Item" 
                  key={chat.id}
                  onClick={() => setChatName(chat.participants[1].username)}>
                  <SingleChat message={chat} />
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        // console.log(`chatName is not empty: ${chatName}`);
        return (
          <div className="singleChat">
            <p onClick={() => setChatName("")}>{"<-"}</p>
            {messages.find((c) => c.participants[1].username === chatName)?.messages.map((message) => (
              <p
                key={"message-" + message.id}
                className="singleChat__msg"
                style={{
                  alignSelf: message.sender === currentUser ? "end" : "start",
                }}
              >
                {message.content}
              </p>
            ))}
          </div>
        );
    }

  }

  return <div className="Chat">{onChatRendering()}</div>;
};

export default Chat;