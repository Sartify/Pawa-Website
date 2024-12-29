import Image from "next/image";

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
            <Image
              src={'/assets/message-logo.png'}
              height={22}
              width={22}
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