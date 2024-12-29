import Image from "next/image"


function FooterSection() {
  return (
    <>
    <div className="mt-100 flex w-full h-[400px] bg-[#2F333E]  justify-center items-start mt-20 "> 
            <div className="w-[1366px] h-[400px]  flex items-center justify-between  ">
                    <div>
                        <Image src="/assets/pawa-footer-logo.png" height={80} width={78} alt="" />
                        <p className="mt-6" style={{color:'white', fontSize:'15px', opacity:'0.9', fontFamily:'Avenir-Light'}}>
                        It is a long established fact that a reader will<br/>
                         be distracted by the readable content of a<br/>
                         page when looking at its layout.
                        </p>
                        <div className="flex gap-6  mt-8">
                                <div className="flex justify-center items-center"  style={{borderRadius:'100%',backgroundColor:'#FF3600', height:'42px', width:'42px'}}>
                                    <Image src="/assets/facebook-logo.png" width={9} height={9} alt="" />
                                </div>
                                <div className="flex justify-center items-center"  style={{borderRadius:'100%',backgroundColor:'#FF3600', height:'42px', width:'42px'}}>
                                    <Image src="/assets/x-logo.png" width={17} height={17} alt="" />
                                </div>
                               
                                <div className="flex justify-center items-center"  style={{borderRadius:'100%',backgroundColor:'#FF3600', height:'42px', width:'42px'}}>
                                    <Image src="/assets/linkedin-logo.png" width={17} height={17} alt="" />
                                </div>
                                <div className="flex justify-center items-center"  style={{borderRadius:'100%',backgroundColor:'#FF3600', height:'42px', width:'42px'}}>
                                    <Image src="/assets/instagram-logo.png" width={17} height={17} alt="" />
                                </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-4" style={{fontFamily:'Avenir-Heavy', color:'white', fontSize:'20px'}}>About</p>
                        <ul style={{color:'white', fontSize:'16px',lineHeight:'3em',opacity:'0.8'}}>
                            <li>Home</li>
                            <li>Features</li>
                            <li>Documentation</li>
                            <li>Demo</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-4" style={{fontFamily:'Avenir-Heavy', color:'white', fontSize:'20px'}}>Contacts</p>
                        <ul style={{color:'white', fontSize:'16px',lineHeight:'2em',opacity:'0.8'}}>
                            <li><strong>Call:</strong> +255 678 302 365 </li>
                            <li><strong>Email:</strong> info@pawa.com</li>
                            <li className="mt-4">P.O. Box 1111111</li>
                            <li> Dar Es Salaam, Tanzania.</li>
                            <li className="underline mt-2" > Google Maps</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{fontFamily:'Avenir-Light', color:'white', fontSize:'16px'}}>
                        Be the first to get the latest news about us,<br/> including blogs and so much more.
                        </p>
                        <div>
                            <div className="w-[323px] h-[47px] bg-[#D9D9D9]/30 rounded-lg flex justify-between items-center mt-10" >
                                <input className="focus:outline-none text-white " style={{background:'none', paddingLeft:'10px'}} type="text" placeholder="Write your email here" />
                                <div className="h-full flex justify-center  items-center p-3" style={{backgroundColor:'white ', borderTopRightRadius:'5px',borderBottomRightRadius:'5px'}}><Image src="/assets/pawa-logo-tilted.png" width={24} height={24} alt="" /></div>
                            </div>
                        </div>
                        <p className="text-white mt-10">By subscribing you accept the Privacy Policy.</p>
                    </div>
            </div>
            
    
    </div>
    <div className=" flex w-full  bg-[#2F333E]  justify-center items-start  "> 
    <div 
        className="flex h-[71px] w-[1366px]  bg-[url('/assets/footer-path.png')] bg-cover bg-center items-center justify-between pr-20 pl-20">
    <div style={{color:'#0F3859', fontFamily:'Avenir-Medium'}}>
    <p>Designed By Aliko All Rights reserved</p>
    </div>
    <div style={{color:'#0F3859', fontFamily:'Avenir-Medium'}}>
    <p>Website User Terms and Conditions</p>
    </div>


</div>
            </div>
    </>
    
  )
}

export default FooterSection