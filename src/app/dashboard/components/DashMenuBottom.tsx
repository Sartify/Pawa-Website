import Image from "next/image"

function DashMenuBottom() {
  return (
    <>
        {/* bottom content */}
        <div className="absolute bottom-8 ml-[-7px]">
                            <div>
                                <button style={{border:'1px solid white', padding:'12px' , borderRadius:'4px'}}>
                                    <div className="flex">
                                        <Image height={24} width={24} src="/assets/light-icon.png" alt="" />
                                        <p style={{color:'#E7E7E7', paddingLeft:'4px'}}>Upgrade to PAWA plus</p>
                                    </div>
                                </button>
                            </div>

                            <div className="flex  w-full justify-between mt-10 ">
                                    <div className="flex items-center justify-center">
                                        <Image width={27} height={27} src="/assets/moon-icon.png" alt="" />
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
    </>
  )
}

export default DashMenuBottom