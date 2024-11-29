 "use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import DashMenuBottom from "../components/DashMenuBottom"

interface ContentDivProps {
    contentHead:String,
    content:String
  }

  const ContentDiv : React.FC<ContentDivProps> = ({ contentHead,content})=>{
    return(
        <div className="mb-3 flex flex-row  items-center justify-between mb-2 p-1 " style={{border:'1px solid #FFFFFF',opacity:'1 ', borderRadius:'5px'}}>
            <div className=" flex flex-row  items-center justify-between px-10  bg-[#FFFFFF29]">
                <div className="flex  flex-col justify-center  w-[722px]   py-5  " style={{opacity:'0.9 ', borderRadius:'5px'}}>
                        <p className="mb-2" style={{color:'white', fontFamily:'Avenir-Medium', fontSize:'15px'}}>{contentHead}</p>
                        <p  style={{color:'white', fontSize:'14px', fontFamily:'Avenir-Oblique', opacity:'0.7'}}>{content}</p>
                </div>
                <Image src={'/assets/right-arrow.svg'} width={25} height={17} alt="" />
            </div>
    </div>
    )

  }


  const DevMenu = () => {
   
    const [activeLink, setActiveLink] = useState("Homepage");
  
    const links = [
      { name: "Homepage", href: "dev",icon:'devhomepage-active.svg' },
      { name: "API Tokens", href: "dev/apitoken", icon:'api-token-active.svg' },
      { name: "API Endpoint", href: "dev/apiendpoint",icon:'api-end-point-active.svg' },
      { name: "Documentation", href: "dev/documentation", icon:'documentation-active.svg' },
    ];
  
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
          Menu
        </p>
        {links.map((link) => (
          <div
            key={link.name}
            className={`flex mt-4 ${
              activeLink === link.name ? "bg-[#3F3E3D]" : "bg-transparent"
            } p-2 rounded `}
            onClick={() => setActiveLink(link.name)}
          >
           <Image 
                src={`/assets/${link.icon}`} 
                height={22} 
                width={22} 
                alt="" 
                className={`${activeLink === link.name ? "" : "grayscale" }`}
                />
            <Link
              href={link.href}
              className={`ml-3 ${
                activeLink === link.name ? "font-bold  color-[#FFA200]  opacity-100" : ""
              }`}
              
              style={{
                
                color: `${activeLink === link.name ? "#FFA200":"#FFFFFF" } `,
                fontFamily: "Avenir-Light",
                fontSize: "15px",
                opacity: activeLink === link.name ? "1" : "0.7",
              }}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    );
  };



  interface ActionButtonProps {
    buttonText: string; // Text for the button (e.g., "Share")
    buttonIcon: string; // Path to the icon for the button
    avatarText: string; // Text inside the circular avatar (e.g., "ND")
  }
  
  const ActionButton: React.FC<ActionButtonProps> = ({
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
  
        {/* Circular Avatar */}
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



  

const DevDashboard = () => {
    return (
  
      <div className="flex w-full bg-red-500 " style={{height:'100vh'}}>
          {/* Navigation */}
              <div className="flex-col w-[296px] bg-[#50504F] p-8 justify"  >
                      
                        <Image src="/assets/pawa-dash-logo.png" width={126} height={33} alt="" />
                        <DevMenu/>
                        <DashMenuBottom/>
                    
              </div>
          {/* Navigation */}
  
  
          {/* center content */}
              <div className="flex flex-col items-center  w-full bg-[#2F2D2D]">
                  <div className="flex  w-full   p-8">
                    
                      <div className="flex w-full  " >
                              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                  <img src="/assets/left-arrow.png" height={'18px'} width={'18px'} alt="" />
                              </button>
                              <p style={{ color: '#FCFEFB', opacity:'0.8' }}>Back to Website </p>
                          </div>
                  
                        <ActionButton
                            buttonText="Share"
                            buttonIcon="/assets/share-icon.png"
                            avatarText="ND"
                        />
                  </div>

                  <div className="flex justify-center items-center">
                      <div><Image src="/assets/pawa-logo-svg.svg" height={130} width={147} alt="" className="grayscale" /></div>
                  </div>
                  <div className="flex justify-center items-center my-10">
                      <p  style={{fontSize:'25px',fontFamily:'Chillax-Bold', color:'white'}}>This is what PAWA offers…</p>
                  </div>
  
  
                  {/* section Content Divs */}
                        <ContentDiv contentHead={'API Tokens'}  content={'For a newsletter featuring local weekends events'}  />
                        <ContentDiv contentHead={'API Endpoints'}  content={'Vocabulary for college'}  />
                        <ContentDiv contentHead={'Short documentation to programatically send request '}  content={' for my social media with trends'}  />
                  {/* section */}
  
                  <div className="flex flex-col  w-[721px] mt-36">
                        
                         
                          <p className="text-[#F7F7F7] text-center text-[12px] mt-10" style={{opacity:'0.8'}}>PAWA can make mistake. Consider checking important information. Read our <span className=" underline text-[#D98C07]">Privacy Policy</span></p>
                  </div>
  
              </div>
          {/* center content */}
  
      </div>
  
    )
  }


  
  export default DevDashboard