
import { useState } from "react";
import DashMenuBottom from "../components/DashMenuBottom";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AskInput from "../components/AskInput";
import NewChatButton from "../components/NewChatButton";
import UserAvatar from "../components/UserAvatar";
import HistoryChats from "../components/HistoryChats";
import axios from "axios";



// const CenterStatic = () =>{

//   return(
//     <>
//     <div className="flex justify-center items-center">
//         <div><Image src="/assets/buddy.png" height={130} width={147} alt="" /></div>
//     </div>
//     <div className="flex justify-center items-center my-10">
//         <p  style={{fontSize:'25px',fontFamily:'Chillax-Bold', color:'white'}}>How can I help you today?</p>
//     </div>

//     {/* section */}
//             <ContentBox
//                 title="Make a content strategy"
//                 description="For a newsletter featuring local weekend events"
//             />
       
//             <ContentBox
//                 title="Make a content strategy"
//                 description="For a newsletter featuring local weekend events"
//             />
//             <ContentBox
//                 title="Plan a social media campaign"
//                 description="For promoting new product launches"
//             />
//     {/* section */}
//     </>
//   )
// }

interface ResultBoxProps {
  resultContent: string; // Specify the type of resultContent
}




const ResultBox: React.FC<ResultBoxProps> = ({resultContent}) =>{

  return(
    <div
    className="flex flex-col mt-[-100px] justify-center items-center w-[722px] bg-[#FFFFFF10] p-4 mb-2 "
    style={{
      opacity: "0.7",
      borderRadius: "5px",
      marginBottom:'14em',
    }}
  >
    <p
      className="mb-4"
      style={{
       
        color: "white",
        fontFamily: "Avenir-light",
        fontSize: "15px",
      }}
    >
        {resultContent}
    </p>
 
  </div>
  )
}

const Dashboard = () => {
  const router = useRouter();
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');
 
  
  
  const goToPage = (path: string): void => {
    router.push(path); // Navigate to the specified path
  };

  const chatData = [
    { title: "Sleep Management Tips"},
    { title: "Healthy Eating Habits" },
  ];



     const fetchResults = async (e: React.MouseEvent<HTMLButtonElement>) =>{
        setResponse(''); // reset before streaming
                e.stopPropagation(); // Prevent button click from triggering the container click
                //  const response = await chatCompletion()
                console.log(query)
                const bodyData  = {
                  model: "pawa-mini-v0",
                  messages: [
                    {
                      role: "user",
                      content: `${query}`
                    }
                  ],
                  temperature: 0.1,
                  max_tokens: 1024,
                  top_p: 0.95,
                  frequency_penalty: 0.3,
                  presence_penalty: 0.3,
                  seed: 2024,
                  stream: false,
                  save_history: true
                }
              
                const response = await axios("http://localhost:4000/api/v1/chats/completions", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data:bodyData
                
                });
                const choices = response.data.data[0]
                const content = choices.choices[0].message.content
                setResponse(content); 
                console.log(content)
                console.log("Microphone button clicked!");
             
              }
  
  return (

    <div className="flex w-full bg-red-500 " style={{height:'100vh'}}>
        {/* Navigation */}
            <div className="flex-col w-[296px] bg-[#50504F] p-8 justify"  >
                    <Image src="/assets/pawa-dash-logo.png" width={126} height={33} alt="" />
                    <NewChatButton/>
                      <HistoryChats chats={chatData} />
                    <DashMenuBottom/>
            </div>
        {/* Navigation */}

        {/* center content */}
            <div className="flex flex-col items-center   w-full bg-[#2F2D2D] overflow-y-auto custom-scrollbar  ">
                <div className="flex  w-full   p-8">
                  
                    <div className="flex w-full  " >
                            <Link href={'/'} className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                <Image src="/assets/left-arrow.png" height={18} width={18} alt="" />
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
              <Image src={'/assets/code.png'} width={14} height={14} alt="Button Icon" />
            </div>
          </button>
        </div>
  
                  {/* Circular Avatar */}
                      </div>
                            <UserAvatar/>
                      </div>
                  {/* end */}

                </div>

               < ResultBox resultContent={response} />

  
                <div className="flex flex-col  w-[721px] mt-20 fixed bottom-0">

                            <AskInput  fetchResults={fetchResults} setQuery={setQuery} />
                        <p className="text-[#F7F7F7] text-center text-[12px] mt-14" style={{opacity:'0.8'}}>PAWA can make mistake. Consider checking important information. Read our <span className=" underline text-[#D98C07]">Privacy Policy</span></p>
                </div>

            </div>
        {/* center content */}

    </div>

  )
}

export default Dashboard