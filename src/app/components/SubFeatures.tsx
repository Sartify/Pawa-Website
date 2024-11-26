const PawaStats = () => {

}



const SubFeatures = () => {
    return (
        <>
            <div className="flex w-full h-[520px] pt-20   justify-center items-center">
                <div className="flex-col w-[1368px] h-[520px]    justify-center items-start">
                    <div className="w-full border border-[#D98C06] rounded-[15px] opacity-100 p-2 " style={{ borderWidth: '2px' }}>
                        <div className=" flex justify-between items-center rounded-[15px]  bg-[#F4F4F4] p-14 ">
                            <div className="flex ">
                                <div className="pr-6">
                                    <img src="/assets/semi-conductor.png" height={"73.2px"} width={'73.2px'} alt="" />
                                </div>
                                <div >
                                    <p className="" style={{ fontFamily: 'Avenir-Heavy', fontSize: '17px', marginTop: '-14px', lineHeight: '20px' }}>Conversational<br /> Interface:</p>
                                    <p style={{ color: '#2F333E', fontSize: '17px', lineHeight: '19px', paddingTop: '16px', opacity: '0.9' }}>Seamless interaction tailored for<br /> Swahili language nuances.</p>
                                </div>

                            </div>
                            <div className="flex">
                                <div className="pr-6">
                                    <img src="/assets/calender-loading.png" height={"73.2px"} width={'73.2px'} alt="" />
                                </div>
                                <div >
                                    <p className="" style={{ fontFamily: 'Avenir-Heavy', fontSize: '17px', marginTop: '-14px', lineHeight: '20px' }}>API Access For<br />  Developers::</p>
                                    <p style={{ color: '#2F333E', fontSize: '17px', lineHeight: '19px', paddingTop: '16px', opacity: '0.9' }}>Suitable for both small projects<br /> and large enterprises.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="pr-6">
                                    <img src="/assets/calender.png" height={"73.2px"} width={'73.2px'} alt="" />
                                </div>
                                <div >
                                    <p className="" style={{ fontFamily: 'Avenir-Heavy', fontSize: '17px', marginTop: '-14px', lineHeight: '20px' }}>Comprehensive<br /> Documentation:</p>
                                    <p style={{ color: '#2F333E', fontSize: '17px', lineHeight: '19px', paddingTop: '16px', opacity: '0.9' }}>Easy-to-follow guides for <br />  developers</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-between mt-20">

                        <div className="flex flex-col items-center gap-6 p-6">
                            {/* <!-- Title Section --> */}
                            <h1 className=" text-center" style={{ fontFamily: 'Avenir-Heavy', fontSize: '16px' }}>
                                The Most <span className="text-[#D33513]">Accurate</span> &
                                <span className="text-[#D33513]"> Performant</span> Models
                            </h1>

                            {/* <!-- Performance Section --> */}
                            <div className="relative flex flex-col  items-center gap-4">
                                {/* <!-- Performance Title --> */}
                                <div className="text-center" style={{ border: '1px solid black ', borderRadius: '30px', width: '356px', padding:'2px 0px' }}>
                                    <p className="font-semibold">PERFORMANCE</p>
                                    <p className="text-sm">PAWA customers report</p>
                                </div>

                                {/* <!-- Connecting Line --> */}
                                <div className="w-[1px] " style={{ marginTop: '-16px', backgroundColor: 'black', height: '60px' }}></div>

                                {/* <!-- Box Content --> */}
                                <div className="border rounded-lg p-6  flex justify-between" style={{ width: '356px', border: '1px solid #4B525C', marginTop: '-17px' }}>
                                    {/* <!-- Left Column --> */}
                                    <div className="flex flex-col items-center " >
                                        <p className="text-sm mb-2 text-center">Improved Internal Benchmarks</p>
                                        <div className="h-32 w-10 bg-gradient-to-b from-red-600 to-blue-800 rounded w-[100px]"></div>
                                    </div>
                                    {/* 
                                    <!-- Right Column --> */}
                                    <div className="flex flex-col justify-end items-center">
                                        <p className="text-sm mb-2 text-center">Fewer Hallucinations</p>
                                        <div className="h-6 w-10 bg-gray-400 rounded w-[100px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 p-6">
                            {/* <!-- Title Section --> */}
                            <h1 className=" text-center" style={{ fontFamily: 'Avenir-Heavy', fontSize: '16px' }}>
                                The Most <span className="text-[#D33513]">Efficient</span> &
                                <span className="text-[#D33513]"> Cost-Effective</span> Models
                            </h1>

                            {/* <!-- Performance Section --> */}
                            <div className="relative flex flex-col  items-center gap-4">
                                {/* <!-- Performance Title --> */}
                                <div className="text-center" style={{ border: '1px solid black ', borderRadius: '30px', width: '356px', padding:'2px 0px' }}>
                                    <p className="font-semibold">EFFICIENCY</p>
                                    <p className="text-sm">PAWA customers getting</p>
                                </div>

                                {/* <!-- Connecting Line --> */}
                                <div className="w-[1px] " style={{ marginTop: '-16px', backgroundColor: 'black', height: '60px' }}></div>

                                {/* <!-- Box Content --> */}
                                <div className="border rounded-lg p-6  flex justify-between" style={{ width: '356px', border: '1px solid #4B525C', marginTop: '-17px' }}>
                                    {/* <!-- Left Column --> */}
                                    <div className="flex flex-col items-center " >
                                        <p className="text-sm mb-2 text-center"><span className="font-semibold">20,000,000 Tsh</span><br/> Our competitors</p>
                                        <div className="h-32 w-10 bg-gradient-to-b from-red-600 to-blue-800 rounded w-[100px]"></div>
                                    </div>
                                    {/* 
                                    <!-- Right Column --> */}
                                    <div className="flex flex-col justify-end items-center">
                                    <p className="text-sm mb-2 text-center"><span className="font-semibold">6,000,000 Tsh</span><br/> PAWA</p>
                                        <div className="h-6 w-10 bg-gray-400 rounded w-[100px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 p-6">
                            {/* <!-- Title Section --> */}
                            <h1 className=" text-center" style={{ fontFamily: 'Avenir-Heavy', fontSize: '16px' }}>
                                The Most <span className="text-[#D33513]">Swahilli</span> 
                                <span className="text-[#D33513]"> </span>understanding  Models
                            </h1>

                            {/* <!-- Performance Section --> */}
                            <div className="relative flex flex-col  items-center gap-4">
                                {/* <!-- Performance Title --> */}
                                <div className="text-center" style={{ border: '1px solid black ', borderRadius: '30px', width: '356px', padding:'2px 0px' }}>
                                    <p className="font-semibold">LANGUAGE</p>
                                    <p className="text-sm">PAWA customers getting</p>
                                </div>

                                {/* <!-- Connecting Line --> */}
                                <div className="w-[1px] " style={{ marginTop: '-16px', backgroundColor: 'black', height: '60px' }}></div>

                                {/* <!-- Box Content --> */}
                                <div className="border rounded-lg p-6  flex justify-between" style={{ width: '356px', border: '1px solid #4B525C', marginTop: '-17px' }}>
                                    {/* <!-- Left Column --> */}
                                    <div className="flex flex-col items-center " >
                                        <p className="text-sm mb-2 text-center">Improved<br/>Swahilli</p>
                                        <div className="h-32 w-10 bg-gradient-to-b from-red-600 to-blue-800 rounded w-[100px]"></div>
                                    </div>
                                    {/* 
                                    <!-- Right Column --> */}
                                    <div className="flex flex-col justify-end items-center">
                                        <p className="text-sm mb-2 text-center">Fewer<br/> Misunderstanding</p>
                                        <div className="h-6 w-10 bg-gray-400 rounded w-[100px]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            
        </>
    )
}

export default SubFeatures