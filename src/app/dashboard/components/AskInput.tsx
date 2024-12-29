// import { ChatCompletionRequest, chatCompletion } from "@/services/chatService";
// import axios from "axios";
import Image from "next/image";
// import { IncomingMessage } from "node:http";
import { useRef } from "react";

const AskInput = ({fetchResults, setQuery}:any) => {

    const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input element
    const handleContainerClick = () => {
      console.log("Container clicked!");
      if (inputRef.current) {
        inputRef.current.focus(); // Focus the input when the container is clicked
      }
    };

    const handleInputChange = (e:any) => {
      setQuery(e.target.value); 
    };
    return (
        <>
        <ChatNotification/>
      <div
        className="p-1 mt-2 "
        style={{
          border: "0.8px solid #F7F7F7",
          borderRadius: "7px",
        }}
      >
        <div
          className="flex flex-row justify-between bg-[#50504F] py-3 px-4 cursor-pointer"
          style={{
            borderRadius: "7px",
          }}
          onClick={handleContainerClick} // Trigger on clicking anywhere
        >
          {/* Input Section */}
          <div className="flex flex-row gap-2 items-center scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900  ">
            <div>
              <Image
                height={24}
                width={24}
                src="/assets/image-icon.png"
                alt="Input Icon"
              />
            </div>
            <textarea
            onChange={handleInputChange}
            className=" scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900 overflow-y-scroll"
            
        style={{
            background: "none",
            color: "white",
            outline: "none",
            border: "none",
            resize: "vertical", // Prevent resizing (optional)
             width:"620px",// Ensure it expands to the container
            minHeight: "10px", 
            maxHeight: "250px", // Adjust height as needed
            padding: "10px", // Add some padding for better UX
            fontSize: "16px",
            // Adjust font size for readability
        }}
        placeholder="Ask me anything..."
        onClick={(e) => e.stopPropagation()} // Prevent textarea click from triggering the container click
        />
          </div>
  
          {/* Microphone Button */}
          <button
            className="flex justify-center items-center h-[32px] w-[32px] rounded-full"
            style={{
              backgroundColor: "#FFA200",
            }}
            onClick={fetchResults}
              
          >
            <Image
              width={24}
              height={24}
              src="/assets/microphone-icon.png"
              alt="Microphone Icon"
            />
          </button>
        </div>
      </div>
      </>
    );
  };



 export  const ChatNotification = ()=>{
    return (
        <div className="flex flex-row gap-2 ">
            <div style={{ padding: '4px 8px', backgroundColor: '#FFA2002C', fontSize: '11px', border: '1px solid #DC8F0A', borderRadius: '3px', color: '#ABAAAB' }}>
                <p>Image Generator</p>
            </div>
            <div style={{ padding: '4px 8px', backgroundColor: '#FFA2002C', fontSize: '11px', border: '1px solid #DC8F0A', borderRadius: '3px', color: '#ABAAAB' }}>
                <p>Loading......</p>
            </div>
        </div>
    )

  }





  export default AskInput