import Link from "next/link"
import Image from "next/image"


const DocumentSection = () => {
  return (
    <>
            {/* up section recaped  */}
                <div  id="documentation" className="mt-100 flex w-full h-[300px] pt-20  justify-center items-center"></div>
            {/* up section recaped  */}
            <div className="mt-100 flex w-full h-[520px]  justify-center items-center"
                style={{
                
                    background: 'linear-gradient(90deg, rgba(76,79,88,1) 0%, rgba(76,79,88,1) 46%, rgba(255,255,255,1) 46%, rgba(255,255,255,1) 100%)'
                }}  
            >
                <div className="flex-col w-[1368px] h-[520px]    justify-center items-start">
                <div
                    className="flex w-[1170px]  h-[520px] bg-[url('/assets/globe.png')] bg-cover bg-center  " style={{backgroundSize:'102%', borderTopRightRadius:'20px' ,borderBottomRightRadius:'20px'}}
                    >
                    </div>
                </div>
                <div className="flex justify-between  w-[1368px] h-[600px]  pt-16 " style={{
                    position:'absolute'
                }}>
                        <div className="flex-col w-full">
                                <p style={{color:'#FFA200', fontFamily:'Avenir-Black', fontSize:'14px', paddingBottom:'1em'}}>DOCUMENTATION</p>
                                <p style={{fontFamily:'Avenir-Black', fontSize:'30px', color:'#FDFEFF'}}>Explore Our Comprehensive<br/> Documentation to Get Started.</p>
                                <p style={{fontFamily:'Avenir-Light', fontSize:'16px', color:'#DDDDDD', opacity:'0.9', paddingTop:'1em'}} >
                                    Unlock the full potential of PAWA with our easy-to-follow guides and
                                    resources. Whether you’re a developer, business owner, or tech
                                    enthusiast, our documentation will help you integrate and interact with
                                    PAWA seamlessly.
                                </p>
                                <div style={{marginTop:'2.6em',}}>
                                <Link href="/get_started"  style={{border:'1px solid #FCFCFC', borderRadius:'5px', color:'#FCFCFC', fontSize:'16px',  padding:'0.8em'}}>
                                    Get Started With PAWA
                                </Link>
                                </div>
                                <div className="flex justify-between  mt-14 gap-6">
                                        <div className="flex-col">
                                            <div className="flex items-center justify-center w-6 h-6 bg-[#D98C07] rounded-full mb-2">
                                                <p className="text-white font-semibold">1</p>
                                            </div>
                                            <p style={{fontFamily:'Avenir-Black',fontSize:'14px',color:'#DADADA'}}>Create an Account</p>
                                            <p className="mt-2"  style={{fontFamily:'Avenir-Light',fontSize:'14px',color:'#DADADA'}}>Sign up and log in to your PAWA account.</p>
                                        </div>
                                        <div className="flex-col">
                                            <div className="flex items-center justify-center w-6 h-6 bg-[#D98C07] rounded-full mb-2">
                                                <p className="text-white font-semibold">2</p>
                                            </div>
                                            <p style={{fontFamily:'Avenir-Black',fontSize:'14px',color:'#DADADA'}}>Generate API Token:</p>
                                            <p className="mt-2"  style={{fontFamily:'Avenir-Light',fontSize:'14px',color:'#DADADA'}}>Navigate to the Auth Tokens page to generate your token..</p>
                                        </div>
                                        <div className="flex-col">
                                            <div className="flex items-center justify-center w-6 h-6 bg-[#D98C07] rounded-full mb-2">
                                                <p className="text-white font-semibold">3</p>
                                            </div>
                                            <p style={{fontFamily:'Avenir-Black',fontSize:'14px',color:'#DADADA'}}>API Key Setup: </p>
                                            <p className="mt-2"  style={{fontFamily:'Avenir-Light',fontSize:'14px',color:'#DADADA'}}> Add your API token to your requests as a Bearer token.</p>
                                        </div>
                                </div>
                        </div>
                        <div className="flex w-full items-center ml-10 mb-10 gap-10">
                                <div className="flex-col h-[386px] w-[298px] bg-[#EEF2F5]  p-10 " style={{borderRadius:'12px'}}>
                                        <p className="mb-6" style={{color:'#1B609F', fontFamily:'Avenir-Light', fontSize:'14px'}}>DECEMBER 6, 2024 | PDF</p>
                                        <div className="mb-6">
                                            <Image src="/assets/document.png" width={62} height={82} alt="" />
                                        </div>
                                        <p className="mb-2" style={{color:'#1E325E', fontFamily:'Avenir-Black', fontSize:'20px'}}>Getting Started<br/> Guide</p>
                                       <p className="mb-6" style={{color:'#1E325E', fontFamily:'Avenir-Light', fontSize:'14px'}}>Step-by-step guide to get started.</p>
                                       <button className="p-3" style={{border:'1px solid #DC8F0A', borderRadius:'4px', backgroundColor:'white'}}>Download a PDF</button>
                                
                                </div>
                                <div className="flex-col h-[386px] w-[298px] bg-[#EEF2F5]  p-10 " style={{borderRadius:'12px', boxShadow:' 0px 3px 15px #00000029'}}>
                                        <p className="mb-6" style={{color:'#1B609F', fontFamily:'Avenir-Light', fontSize:'14px'}}>DECEMBER 6, 2024 | PDF</p>
                                        <div className="mb-6">
                                            <Image src="/assets/document.png" width={62} height={82} alt="" />
                                        </div>
                                        <p className="mb-2" style={{color:'#1E325E', fontFamily:'Avenir-Black', fontSize:'20px'}}>Getting Started<br/> Guide</p>
                                       <p className="mb-6" style={{color:'#1E325E', fontFamily:'Avenir-Light', fontSize:'14px'}}>Step-by-step guide to get started.</p>
                                       <button className="p-3" style={{border:'1px solid #DC8F0A', borderRadius:'4px', backgroundColor:'white'}}>Download a PDF</button>
                                
                                </div>
                        </div>
                </div>
            </div>

    </>
  )
}

export default DocumentSection