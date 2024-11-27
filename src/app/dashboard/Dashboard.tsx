const Dashboard = () => {
  return (

    <div className="flex w-full bg-red-500 " style={{height:'100vh'}}>
        {/* Navigation */}
            <div className="flex-col w-[296px] bg-[#50504F] p-8 justify"  >
             

                    <div>
                        <img src="/assets/pawa-dash-logo.png" width={'126px'} height={'33px'} alt="" />
                    </div>

                    <div className="mt-6"  style={{border:'1px solid #707070',padding:'3px',borderRadius:'4px'}}>
                        <button  className="p-2 bg-[#2F2D2D] w-[209px] " style={{borderRadius:'4px', opacity:'0.7'}}>
                            <div className="flex justify-between w-full ">
                                <p className="text-white">New Chat</p>
                                <div><img width={'22px'} height={'22px'} src="assets/new-chat-icon.png" alt="" /></div>
                            </div>
                        </button>
                    </div>

                    {/* History Chats */}

                        <div className="mt-10">
                            <p style={{color:'#FFFFFF',fontFamily:'Avenir-Medium',fontSize:'15px',opacity:'0.7'}} >Today</p>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                        </div>

                    {/* History Chats */}
                    {/* History Chats */}

                        <div className="mt-10">
                            <p style={{color:'#FFFFFF',fontFamily:'Avenir-Medium',fontSize:'15px',opacity:'0.7'}} >Yesterday</p>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                        </div>

                    {/* History Chats */}
                      {/* History Chats */}

                      <div className="mt-10">
                            <p style={{color:'#FFFFFF',fontFamily:'Avenir-Medium',fontSize:'15px',opacity:'0.7'}} >Yesterday</p>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                        </div>

                    {/* History Chats */}
                      {/* History Chats */}

                      <div className="mt-10">
                            <p style={{color:'#FFFFFF',fontFamily:'Avenir-Medium',fontSize:'15px',opacity:'0.7'}} >Yesterday</p>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                            <div className="flex  ml-2  mt-4">
                                <img src="/assets/message-logo.png" height={'22px'} width={'22px'} alt="" />
                                <p className="ml-3" style={{color:'#FFFFFF',fontFamily:'Avenir-Light',fontSize:'15px',opacity:'0.7'}}>Sleep Management Tips</p>
                            </div>
                        </div>

                    {/* History Chats */}

                    {/* bottom content */}
                         <div className="absolute bottom-8">
                            <div>
                                <button style={{border:'1px solid white', padding:'12px' , borderRadius:'4px'}}>
                                    <div className="flex">
                                        <img height={'24px'} width={'24px'} src="/assets/light-icon.png" alt="" />
                                        <p style={{color:'#E7E7E7', paddingLeft:'4px'}}>Upgrade to PAWA plus</p>
                                    </div>
                                </button>
                            </div>

                            <div className="flex  w-full justify-between mt-10 ">
                                    <div className="flex items-center justify-center">
                                        <img width={'27px'} height={'27px'} src="/assets/moon-icon.png" alt="" />
                                        <p style={{color:'#D3D2D2',fontFamily:'Avenir-Heavy', fontSize:'16px', marginLeft:'8px'}}>Dark Mode</p>
                                    </div>
                                    <div>
                                    <div className="w-[54px] h-[24px] rounded-full bg-[#FFFFFF] flex items-center justify-center relative cursor-pointer">
                                 
                                    <div className="flex items-center justify-center absolute top-[2px] left-[32px] h-[20px] w-[20px]  bg-[#DC8F0A] rounded-full">
                                        
                                    </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                    {/* bottom content */}
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
                
                    <div className="flex ">
                        <div>
                            <button  className="w-[78px] " style={{border:'1px solid #DDDDDD', backgroundColor:'#FFFFFF29', padding:'4px 10px', borderRadius:'5px'}}>
                                <div className="flex justify-between items-center">
                                        <p style={{color:'#E4E4E4', fontSize:'13px'}}>Share</p>
                                        <img src="/assets/share-icon.png"  width={'10px'}  alt="" />
                                </div>
                            </button>
                        </div>
                        

                        <div className=" flex justify-center items-center relative rounded-full w-[50px] h-[50px]  top-[-10px] bg-[#FFFFFF29]  ml-6  " style={{border:'1px solid white'}}>
                                <p style={{fontSize:'22px',color:'white'}}>ND</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div><img src="assets/buddy.png" height={'130px'} width={'147'} alt="" /></div>
                </div>
                <div className="flex justify-center items-center my-10">
                    <p  style={{fontSize:'25px',fontFamily:'Chillax-Bold', color:'white'}}>How can I help you today?</p>
                </div>


                {/* section */}
                    <div className="flex flex-col justify-center items-center w-[722px] bg-[#FFFFFF29]  py-4 mb-2" style={{opacity:'0.7', borderRadius:'5px'}}>
                            <p className="mb-2" style={{color:'white', fontFamily:'Avenir-Heavy', fontSize:'15px'}}>Make a content strategy</p>
                            <p  style={{color:'white', fontSize:'15px'}}>For a newsletter featuring local weekend events</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[722px] bg-[#FFFFFF29]  py-4 mb-2" style={{opacity:'0.7', borderRadius:'5px'}}>
                            <p className="mb-2" style={{color:'white', fontFamily:'Avenir-Heavy', fontSize:'15px'}}>Help me study</p>
                            <p  style={{color:'white', fontSize:'15px'}}>Vocabulary for a college entrance exam</p>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[722px] bg-[#FFFFFF29]  py-4 mb-2" style={{opacity:'0.7', borderRadius:'5px'}}>
                            <p style={{color:'white', fontFamily:'Avenir-Heavy', fontSize:'15px'}}>Give mw ideas</p>
                            <p  style={{color:'white', fontSize:'15px'}}>For my social media with trend</p>
                    </div>
                {/* section */}

            </div>
        {/* center content */}

    </div>

  )
}

export default Dashboard