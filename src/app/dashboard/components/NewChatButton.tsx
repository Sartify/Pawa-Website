import Image from "next/image";

const NewChatButton = () => {
    return (
      <div
        className="mt-6 border border-gray-500 rounded-md p-1"
      >
        <button
          className="p-2 bg-[#2F2D2D] w-[209px] rounded opacity-70 hover:opacity-100 transition duration-300 flex justify-between items-center"
          aria-label="Start a new chat"
        >
          <p className="text-white">New Chat</p>
          <Image
            width={22}
            height={22}
            src="/assets/new-chat-icon.png"
            alt="New Chat Icon"
          />
        </button>
      </div>
    );
  };

  export default NewChatButton