 "use client"
import Image from "next/image"
import DevNavigation from "./components/DevNavigation"
interface ContentDivProps {
    contentHead:string,
    content:string
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
    // const router = useRouter();

    // const goToPage = (path: string): void => {
    //   router.push(path); // Navigate to the specified path
    // };

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
              <Image src={buttonIcon} width={10} height={10} alt="Button Icon" />
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
    
  }) => {
    return (
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
              <p style={{ color: "#2F2D2D", fontSize: "13px", fontFamily:'Avenir-Medium' }}>{buttonText}</p>
              <Image src={buttonIcon} width={14} height={14} alt="Button Icon" />
            </div>
          </button>
        </div>
  
        {/* Circular Avatar */}
    
      </div>
    );
  };
  

const DevDashboard = () => {

    return (
  
      <div className="flex w-full bg-red-500 " style={{height:'100vh'}}>
          {/* Navigation */}
                  <DevNavigation/>
          {/* Navigation */}
  
  
          {/* center content */}
              <div className="flex flex-col items-center  w-full bg-[#2F2D2D]">
                  <div className="flex  w-full   p-8">
                    
                      <div className="flex w-full  " >
                              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                  <Image src="/assets/left-arrow.png" height={18} width={18} alt="" />
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