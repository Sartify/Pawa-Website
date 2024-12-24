"use client"
import Image from "next/image"
import DevNavigation from "../components/DevNavigation"
import InfoFooter from "../components/InfoFooter"
import { CustomButton } from "../apitoken/ApiToken"
import SyntaxHighlighter from "react-syntax-highlighter"
import { dark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


interface ContentDivProps {
  contentHead: String,
  content: String
}

const ContentDiv: React.FC<ContentDivProps> = ({ contentHead, content }) => {
  return (
    <div className="mb-3 flex flex-row  items-center justify-between mb-2 p-1 " style={{ border: '1px solid #FFFFFF', opacity: '1 ', borderRadius: '5px' }}>
      <div className=" flex flex-row  items-center justify-between px-10  bg-[#FFFFFF29]">
        <div className="flex  flex-col justify-center  w-[722px]   py-5  " style={{ opacity: '0.9 ', borderRadius: '5px' }}>
          <p className="mb-2" style={{ color: 'white', fontFamily: 'Avenir-Medium', fontSize: '15px' }}>{contentHead}</p>
          <p style={{ color: 'white', fontSize: '14px', fontFamily: 'Avenir-Oblique', opacity: '0.7' }}>{content}</p>
        </div>
        <Image src={'/assets/right-arrow.svg'} width={25} height={17} alt="" />
      </div>
    </div>
  )

}

interface ActionButtonProps {
  buttonText: string; // Text for the button (e.g., "Share")
  buttonIcon: string; // Path to the icon for the button
  avatarText: string; // Text inside the circular avatar (e.g., "ND")
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  buttonText,
  buttonIcon,
  avatarText,
}) => {
  return (
    <div className="flex">
      {/* Share Button */}
      <div>
        <button
          className="w-[78px]"
          style={{
            border: "1px solid #DDDDDD",
            backgroundColor: "#FFFFFF29",
            padding: "4px 10px",
            borderRadius: "5px",
          }}
        >
          <div className="flex justify-between items-center">
            <p style={{ color: "#E4E4E4", fontSize: "13px" }}>{buttonText}</p>
            <img src={buttonIcon} width="10px" alt="Button Icon" />
          </div>
        </button>
      </div>
          <  DevButton
           buttonText="PAWA for Dev"
           buttonIcon="/assets/code.png"
           avatarText="ND"
          
          />
      {/* Ci  rcular Avatar */}
      <div
        className="flex justify-center items-center relative rounded-full w-[50px] h-[50px] top-[-10px] bg-[#FFFFFF29] ml-6"
        style={{
          border: "1px solid white",
        }}
      >
        <p style={{ fontSize: "22px", color: "white" }}>{avatarText}</p>
      </div>
    </div>
  );
};


export const DevButton: React.FC<ActionButtonProps> = ({
  buttonText,
  buttonIcon,
  avatarText,
}) => {
  return (
    <div className="flex mx-2" >
      {/* Share Button */}
      <div>
        <button
          className="w-[120px]"
          style={{
            border: "1px solid #DDDDDD",
            backgroundColor: "#FAFFFF",
            padding: "4px 10px",
            borderRadius: "5px",
          }}
        >
          <div className="flex justify-between items-center">
            <p style={{ color: "#2F2D2D", fontSize: "13px" }}>{buttonText}</p>
            <img src={buttonIcon} width="14px" alt="Button Icon" />
          </div>
        </button>
      </div>

      {/* Circular Avatar */}
  
    </div>
  );
};



const ApiEndPoint = () => {

  const onCreate = () => {
    console.log("created");
  }


  const codeString = `
  import  name

  function greet(name) {
      return "Hello, " + name + "!";
  }

  function special(name) {
      return "special, " + name + "!";
  }

   function Integration(name) {
      return "special, " + name + "!";
  }
  console.log(greet("World"));
`;


  return (


    <div className="flex w-full bg-red-500 " style={{ height: '100vh' }}>
      {/* Navigation */}
      <DevNavigation />
      {/* Navigation */}


      {/* center content */}
      {/* profile */}
      <div className="flex flex-col items-center  w-full bg-[#2F2D2D] pb-4">
        {/* profile */}
        <div className="flex flex-row  w-full  p-8">
          <div className="flex w-full  " >
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
              <img src="/assets/left-arrow.png" height={'18px'} width={'18px'} alt="" />
            </button>
            <p style={{ color: '#FCFEFB', opacity: '0.8' }}>Back to Website </p>
          </div>

          <ActionButton
            buttonText="Share"
            buttonIcon="/assets/share-icon.png"
            avatarText="ND"
          />

     
        </div>
        {/* profile */}
        {/* mid-centerd */}
        <div className=" h-[100vh]  w-full flex flex-col justify-start gap-2 items-center pb-3  ">
          <div className="flex flex-row  justify-end  w-[864px]  ">
              
            <CustomButton onClick={onCreate}>
              <div className="flex text-center flex-row justify-between items-center gap-2">
                <p className="opacity-80" style={{ fontSize: '13px', fontFamily: 'Avenir-Medium' }}>Create Endpoint</p>
                <Image className="" src="/assets/plus.svg" height={14} width={14} alt="" />
              </div>
            </CustomButton>

           
          </div>
          <div className="flex rounded-[5px] h-[483px]  flex-col bg-[#525050] w-[864px]  px-10 py-8  " style={{borderLeft:'7px solid #17A57E' ,borderTop:'1px solid #7D7B7B', borderBottom:'1px solid #7D7B7B'}}>
                  <div className="flex lex-row justify items-center ">
                        <p className=" rounded-[4px] px-4 py-2 text-white" style={{backgroundColor:'#0E7E5F',fontFamily:'Avenir-Heavy', fontSize:'14px'}}>GET</p>
                        <div className="text-white ml-6">
                            <p style={{fontFamily:'Avenir-Heavy'}}>Connecting Swahili Model</p>
                            <p style={{fontFamily:'Avenir-Light', fontSize:'14px'}} >https://api.pawa.ai/chat</p>
                        </div> 
                  </div>

                  <div className="mt-4  ">
                      <div className=" flex  gap-1 flex-row justify-end w-full items-center bg-[#2F2F2F] p-4  "style={{borderTopRightRadius:'6px', borderTopLeftRadius:'6px'}}>
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" // Adjust to match your SVG's viewBox
                      width={20}
                      height={20}
                      className="grayscale opacity-70 hover:opacity-100 cursor-pointer"
                      style={{ fill: "#7D7B7B" }} // Adjust fill color dynamically
                  >
                      {/* Replace the path below with the path data from your SVG */}
                      <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm1 2v14h12V5H6zm2 2h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                  </svg>
                            <button className=" flex flex-row text-[12px] text-[#7D7B7B] ">Copy code</button>
                      </div>
                      <SyntaxHighlighter customStyle={{fontSize:'12px'}} language="javascript" style={dark}>
                          {codeString} 
                      </SyntaxHighlighter>
                      
                  </div>
                  
          </div>

          
        </div>
        <InfoFooter />
        {/* mid-centerd */}
      </div>
      {/* center content */}

    </div>

  )
}



export default ApiEndPoint