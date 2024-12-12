"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const headerStyle = {
    // maxWidth:"2366px",
    // height:"764px",
    backgroundColor: "#2f333e"

}

const imageGrad1 = {
    backgroundImage: 'linear-gradient(to right, #2F333E 0%,  transparent 100%)'
}
const imageGrad2 = {
    backgroundImage: 'linear-gradient(to left, #2F333E 0%, transparent 100%)'
}

const DefaultButton = () => {
    return (
        <Link href={'/auth/register'} className="px-[19px] py-[12px] bg-[#DC8F0A] rounded-[6px] opacity-100 text-black font-medium">
            CREATE
        </Link>
    );
};

const SearchDiv = () => {
    return <div className="flex items-center pr-3 pl-8 justify-between w-[540px] h-[67px] bg-white rounded-[8px] opacity-100 mt-20">
        <div>
            <p className="typewriter">Jinsi ya kuandaa somo la sayansi</p>
        </div>
        < DefaultButton />

    </div>;
};


const ColumnLayout = () => {

    return (
        <div className=" relative flex w-[363px]  h-[250px] rounded-[26px] ml-10 mr-10 bg-[#4B525C] opacity-100 p-8">

            <div className="flex-col">
                <img height={49} width={49} src={"/assets/calender-loading-faded.png"}></img>
                <div className="pb-6 pt-6">
                    <p style={{ fontFamily: "Chillax-Bold" }} className="text-white text-[20px] mb-[-25px]">Conversational</p> <br />
                    <p style={{ fontFamily: "Chillax-Bold" }} className="text-white text-[20px]">Interface:</p>
                </div>

                <div>
                    <p className="text-white text-[18px] avenir"> Seamless interaction in Swahili.</p>
                </div>

            </div>
        </div>

    );
}
const ColumnLayoutEdgesLeft = () => {

    return (
        <div className="absolute -left-10  flex w-[200px] h-[250px] rounded-[26px] bg-[#4B525C] opacity-100 p-8">

            <div className="flex-col">
                {/* <img height={49} width={49} src={"/assets/calender-loading-faded.png"}></img> */}
                <div className="pb-6 pt-6">
                    <p style={{ fontFamily: "Chillax-Bold" }} className="text-white text-[20px]"></p> <br />
                    {/* <text style={{fontFamily:"Chillax-Bold"}} className="text-white text-[20px]">Interface:</text> */}
                </div>

                <div>
                    <p className="text-white text-[18px] avenir"> </p>
                </div>

            </div>
        </div>

    );
}
const ColumnLayoutEdgesRight = () => {

    return (
        <div className="absolute -right-10   flex w-[200px] h-[250px] rounded-[26px] bg-[#4B525C] opacity-100 p-8">

            <div className="flex-col">
                <img height={49} width={49} src={"/assets/calender-loading-faded.png"}></img>
                <div className="pb-6 pt-6">
                    <p style={{ fontFamily: "Chillax-Bold" }} className="text-white mb-[-25px] text-[20px]">API Access</p> <br />
                    {/* <text style={{fontFamily:"Chillax-Bold"}} className="text-white text-[20px]">Interface:</text> */}
                </div>

                <div>
                    <p className="text-white text-[18px] avenir"> Easy  integration  applications</p>
                </div>

            </div>
        </div>

    );
}

const LinkStyle = {
    display:'block',
    fontFamily:'Avenir-Light',
    fontSize:'17px',
    color:'white',
    padding:'6px 0px 6px 0px',
    marginLeft:'1em',
    marginRight:'1em'

}

const ActiveLinkStyle = {
    display:'block',
    fontFamily:'Avenir-Light',
    fontSize:'17px',
    color:'#FFA200',
    padding:'4px 0px 4px 0px',
    borderTop: '2px solid #FFA200',
    borderBottom: '2px solid #FFA200',
    marginLeft:'1em',
    marginRight:'1em'
    
}
export const AuthLinkStyle = {
    display:'block',
    fontFamily:'Avenir-Light',
    fontSize:'17px',
    color:'white',
    padding:'0.5em 1em',
    border: '1px solid white',
    borderRadius: '5px',
    marginLeft:'1em',
    marginRight:'1em',
   
    
}

const ScrollToHomeButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 300); // Show button when scrolled more than 300px
    };

    const scrollToHome = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToHome}
                className="fixed bottom-8 right-8 bg-[#FFA200] text-white font-bold p-3 rounded-full shadow-lg hover:bg-[#e69500] transition"
                aria-label="Scroll to Home"
                style={{ zIndex: 1000 }}
            >
                ↑
            </button>
        )
    );
};



const Navlinks = ()=>{

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };



    return (
        <>
            <div className="flex ">
                <div>
                    <button 
                    onClick={() => handleScroll("home")}
                      style={LinkStyle}>
                        Home
                    </button>
                </div>
                <div>
                <button 
                    onClick={() => handleScroll("features")}
                      style={LinkStyle}>
                        Features
                    </button>
                </div>
                <div>
                <button 
                    onClick={() => handleScroll("documentation")}
                      style={LinkStyle}>
                        Documentation
                    </button>
                </div>
                <div>
                <button 
                    onClick={() => handleScroll("demo")}
                      style={LinkStyle}>
                        Demo
                    </button>
                </div>
            </div>        
        </>
    )
}

const AuthLinks = ()=>{
    return (
        <>
            <div className="flex ">
                <div>
                    <Link href="/auth/register"  style={LinkStyle}>
                        Log In
                    </Link>
                </div>
                <div>
                    <Link href="/auth/register"  style={AuthLinkStyle}>
                        Register
                    </Link>
                </div>
            </div>        
        </>
    )
}



const HeaderSection = () => {
    return (
        <>
        <ScrollToHomeButton/>
            <div id="home" className="flex justify-center items-center h-[764px] bg-[#2F333E]  ">
                <div style={headerStyle} className="w-[1366px] z-10  h-[764px]  flex items-center justify-center">
                    <div className=" z-10 flex w-full bg-red-500 h-[764px] flex items-center justify-center">
                        <p className=" text-white text-lg">Div 1</p>
                    </div>
                    <div className=" relative flex w-[106%]  h-[764px]  bg-[url('/assets/spacecraft.png')] bg-cover bg-center  flex items-center justify-center   " style={{ backgroundSize: '102%', overflow: "hidden" }}>
                        {/* primary color background blending */}
                        <div className="absolute  z-0 h-[764px] w-[100%]   inset-0 bg-[#2F333E] mix-blend-color" ></div>

                        {/* <ThreeColumnLayout/> */}
                        <ColumnLayoutEdgesLeft />
                        <ColumnLayout />
                        <ColumnLayoutEdgesRight />

                    </div>
                </div>
                <div className="flex  justify-center items-center z-20 w-[1366px]  h-[764px]    " style={{ position: 'absolute', top: 0 }}>
                    <div className="flex w-[98%] bg-[#2F333E] h-[764px] flex-col   " style={{paddingTop:"14em"}}>
                        <div className="flex">
                            <h1 style={{ fontFamily: 'Chillax-Bold', fontSize: "46px" }} className="text-white ">Experience the Power<br /> of <span style={{ color: "#DC8F0A" }}>PAWA</span>, The Swahili<br /> Language AI Model</h1>
                        </div>
                        <div className="flex pt-4">
                            <p className="avenir" style={{ fontSize: "17px", color: 'white' }}>Unlock the potential of Swahili language understanding<br /> with our state-of-the-art AI model.</p>
                        </div>
                        <SearchDiv />

                        <div className="flex flex-row ">
                            <div className="flex  flex-row mt-20 mr-20">
                                <div>
                                    <p className="text-white mr-4 text-[17px]">Try PAWA Now</p>
                                </div>
                                <div >
                                    <div ><img height={27} width={27} src="/assets/arrow.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="flex  flex-row mt-20">
                                <div>
                                    <p className="text-white mr-4 text-[17px]">Get Started</p>
                                </div>
                                <div >
                                    <div ><img height={27} width={27} src="/assets/arrow.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full  h-[764px] flex items-center justify-center">
                        {/* right and left gradients */}
                        <div className="flex  h-[764px]  w-[50%]  " style={imageGrad1}></div>
                        <div className="flex  h-[764px]  w-[50%] " style={imageGrad2}></div>
                        {/* right and left gradients */}

                    </div>

                    <div className="flex items-center justify-between  absolute z-100  w-full h-[140px] top-0 ">

                        <div>
                            <img src="/assets/pawa-logo.png" height={"45px"} width={"45px"} alt="" />
                        </div>
                        <div><Navlinks/></div>
                        <div><AuthLinks/></div>

                    </div>
                </div>
            </div>
           

        </>
    )
}
export default HeaderSection