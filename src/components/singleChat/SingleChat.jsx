import "./SingleChat.css";

const SingleChat = ({message}) => {
// console.log(message.message)
    return(
        <div className="SingleChat__Content">
            <div className="SingleChat__Image">
            <img 
            src={message.participants[1].avatar_url}
            alt={message.username}/>
            </div>
            <div className="SingleChat">
            <p >{message.participants[1].username}</p>
            <p className="SingleChat__lastMessage" >
				{message.messages.at(-1).content} {message.last_message_timestamp}
			</p>
            </div> 
      </div>
    );
};

export default SingleChat