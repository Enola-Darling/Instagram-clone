import "./SingleChat.css";

const SingleChat = ({message}) => {
// console.log(message.message)
    return(
        <div className="SingleChat__Content">
            <>
            <img className="SingleChat__Image"
            src={message.participants[1].avatar_url}
            alt={message.username}
            />
            <p className="SingleChat">{message.participants[1].username}</p>
            </> 
            <p className="SingleChat__lastMessage">
				{message.messages.at(-1).content} {message.last_message_timestamp}
			</p>     
      </div>
    );
};

export default SingleChat