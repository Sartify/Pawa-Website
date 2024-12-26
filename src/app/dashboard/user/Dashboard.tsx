
import { useRef, useState } from "react";
import DashMenuBottom from "../components/DashMenuBottom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LogoutButton from "../components/LogoutButton";
import { ChatCompletionRequest, chatCompletionStream } from "@/services/chatService";

interface HistoryChatsProps {
    chats: { title: string}[];
  }
  const chatData = [
    { title: "Sleep Management Tips"},
    { title: "Healthy Eating Habits" },
  ];

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


  interface ContentBoxProps {
    title: string;
    description: string;
  }
  
  const ContentBox: React.FC<ContentBoxProps> = ({ title, description }) => {
    return (
      <div
        className="flex flex-col justify-center items-center w-[722px] bg-[#FFFFFF29] py-4 mb-2"
        style={{
          opacity: "0.7",
          borderRadius: "5px",
        }}
      >
        <p
          className="mb-2"
          style={{
            color: "white",
            fontFamily: "Avenir-Heavy",
            fontSize: "15px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "15px",
          }}
        >
          {description}
        </p>
      </div>
    );
  };
  

  const AskInput = () => {


    const [response, setResponse] = useState('');
    const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the input element

    const handleContainerClick = () => {
      console.log("Container clicked!");
      if (inputRef.current) {
        inputRef.current.focus(); // Focus the input when the container is clicked
      }
    };
  
    return (
      <div
        className="p-1 mt-2"
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
          <div className="flex flex-row gap-2 items-center">
            <div>
              <img
                height={24}
                width={24}
                src="/assets/image-icon.png"
                alt="Input Icon"
              />
            </div>
            <input
            ref={inputRef} 
              style={{
                background: "none",
                color: "white",
                outline: "none",
                border: "none",
                flex: "1",
              }}
              type="text"
              placeholder="Ask me anything"
              onClick={(e) => e.stopPropagation()} // Prevent input click from triggering the container click
            />
          </div>
  
          {/* Microphone Button */}
          <button
            className="flex justify-center items-center h-[32px] w-[32px] rounded-full"
            style={{
              backgroundColor: "#FFA200",
            }}
            onClick={async (e) => {
              setResponse(''); // reset before streaming
              e.stopPropagation(); // Prevent button click from triggering the container click
              //  const response = await chatCompletion()

              const requestData: ChatCompletionRequest = {
                model: 'pawa-mini-v0',
                messages: [{ role: 'user', content: 'unaweza kueleza kwa kina maana ya neno upendo?' }],
                temperature: 0.1,
                max_tokens: 1024,
                top_p: 0.95,
                frequency_penalty: 0.3,
                presence_penalty: 0.3,
                seed: 2024,
                stream: true,
                save_history: true,
              };


              const handleClick = async () => {
                // Clear response
                setResponse('');
            
                try {
                  await chatCompletionStream(requestData, (chunk: string) => {
                    // Append chunk to state
                    setResponse((prev) => prev + chunk);
                  });
                } catch (error) {
                  console.error(error);
                }
              };


              console.log("Microphone button clicked!");
              console.log({
                response
              })
              
            }}
          >
            <img
              width={24}
              height={24}
              src="/assets/microphone-icon.png"
              alt="Microphone Icon"
            />
          </button>
        </div>
      </div>
    );
  };


  // const DevButton2: React.FC<ActionButtonProps> = ({
  //   buttonText,
  //   buttonIcon,
  //   avatarText,
  // }) => {
  //   const router = useRouter();

  //   const goToPage = (path: string): void => {
  //     router.push(path); // Navigate to the specified path
  //   };
  


    
      <div className="flex mx-2" >
        {/* Share Button */}
        <div>
          <button
            className="w-[130px]"
            style={{
              border: "1px solid #DDDDDD",
              backgroundColor: "#FAFFFF",
              padding: "4px 10px",
              borderRadius: "5px",
            }}
          >
            <div className="flex justify-between items-center">
              <p style={{ color: "#2F2D2D", fontSize: "13px", fontFamily:'Avenir-Medium' }}>{'PAWA for Dev'}</p>
              <img src={'/assets/code.png'} width="14px" alt="Button Icon" />
            </div>
          </button>
        </div>
  
        {/* Circular Avatar */}
    
      </div>
   
 


const Dashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();




  const goToPage = (path: string): void => {
    router.push(path); // Navigate to the specified path
  };
  
  return (

    <div className="flex w-full bg-red-500 " style={{height:'100vh'}}>
        {/* Navigation */}
            <div className="flex-col w-[296px] bg-[#50504F] p-8 justify"  >
                    <Image src="/assets/pawa-dash-logo.png" width={126} height={33} alt="" />
                    <NewChatButton/>
                      <HistoryChats chats={chatData} />
                    <DashMenuBottom/>
                    <LogoutButton/>
            </div>
        {/* Navigation */}


        {/* center content */}
            <div className="flex flex-col items-center  w-full bg-[#2F2D2D]">
                <div className="flex  w-full   p-8">
                  
                    <div className="flex w-full  " >
                            <Link href={'/'} className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                <img src="/assets/left-arrow.png" height={'18px'} width={'18px'} alt="" />
                            </Link>
                            <p style={{ color: '#FCFEFB', opacity:'0.8' }}>Back to Website </p>
                        </div>
                
                    <div className="flex flex-row">

                    <div className="flex mx-2" >
      
        <div>
          <button
          onClick={() => goToPage('/dashboard/dev' )}
            className="w-[130px]"
            style={{
              border: "1px solid #DDDDDD",
              backgroundColor: "#FAFFFF",
              padding: "4px 10px",
              borderRadius: "5px",
            }}
          >
            <div className="flex justify-between items-center">
              <p style={{ color: "#2F2D2D", fontSize: "13px", fontFamily:'Avenir-Medium' }}>{'PAWA for Dev'}</p>
              <img src={'/assets/code.png'} width="14px" alt="Button Icon" />
            </div>
          </button>
        </div>
  
        {/* Circular Avatar */}
    
      </div>
                        <div>
                            <button  className="w-[78px] " style={{border:'1px solid #DDDDDD', backgroundColor:'#FFFFFF29', padding:'4px 10px', borderRadius:'5px'}}>
                                <div className="flex justify-between items-center">
                                        <p style={{color:'#E4E4E4', fontSize:'13px'}}>Share</p>
                                        <img src="/assets/share-icon.png"  width={'10px'}  alt="" />
                                </div>
                            </button>
                        </div>
                        

                        <div className=" flex justify-center items-center relative rounded-full w-[50px] h-[50px]  top-[-10px] bg-[#FFFFFF29]  ml-6  " style={{border:'1px solid white'}}>
                                <p className="uppercase" style={{fontSize:'22px',color:'white'}}>{session?.user?.email ? session.user.email.charAt(0) : 'Guest'}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div><img src="/assets/buddy.png" height={'130px'} width={'147'} alt="" /></div>
                </div>
                <div className="flex justify-center items-center my-10">
                    <p  style={{fontSize:'25px',fontFamily:'Chillax-Bold', color:'white'}}>How can I help you today?</p>
                </div>


                {/* section */}
                        <ContentBox
                            title="Make a content strategy"
                            description="For a newsletter featuring local weekend events"
                        />
                   
                        <ContentBox
                            title="Make a content strategy"
                            description="For a newsletter featuring local weekend events"
                        />
                        <ContentBox
                            title="Plan a social media campaign"
                            description="For promoting new product launches"
                        />
                {/* section */}

                <div className="flex flex-col  w-[721px] mt-20">
                        <div className="flex flex-row gap-2 ">
                                <div style={{padding:'4px 8px',backgroundColor:'#FFA2002C',fontSize:'11px',border:'1px solid #DC8F0A', borderRadius:'3px', color:'#ABAAAB'}}>
                                    <p>Image Generator</p>
                                </div>
                                <div style={{padding:'4px 8px',backgroundColor:'#FFA2002C',fontSize:'11px',border:'1px solid #DC8F0A', borderRadius:'3px', color:'#ABAAAB'}}>
                                    <p>Loading......</p>
                                </div>
                        </div>
                            <AskInput/>
                        <p className="text-[#F7F7F7] text-center text-[12px] mt-4" style={{opacity:'0.8'}}>PAWA can make mistake. Consider checking important information. Read our <span className=" underline text-[#D98C07]">Privacy Policy</span></p>
                </div>

            </div>
        {/* center content */}

    </div>

  )
}

export default Dashboard