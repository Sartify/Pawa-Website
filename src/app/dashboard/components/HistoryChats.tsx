interface HistoryChatsProps {
    chats: { title: string}[];
  }
 

  const HistoryChats: React.FC<HistoryChatsProps> = ({ chats }) => {
    return (
      <div className="mt-10">
        <p
          style={{
            color: "#FFFFFF",
            fontFamily: "Avenir-Medium",
            fontSize: "15px",
            opacity: "0.7",
          }}
        >
          Yesterday
        </p>
        {chats.map((chat, index) => (
          <div key={index} className="flex ml-2 mt-4">
            <img
              src={'/assets/message-logo.png'}
              height="22px"
              width="22px"
              alt={`${chat.title} icon`}
            />
            <p
              className="ml-3"
              style={{
                color: "#FFFFFF",
                fontFamily: "Avenir-Light",
                fontSize: "15px",
                opacity: "0.7",
              }}
            >
              {chat.title}
            </p>
          </div>
        ))}
      </div>
    );
  };


  export default HistoryChats