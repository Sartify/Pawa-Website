
const FeaturesSection = () => {
  return (
    <div className="flex w-full h-[500px]    justify-center items-center">
         <div className="absolute z-30 left-0   w-[800px] h-[80px]  top-[763px] bg-[#2F333E]"
            style={{
                transform: 'skew(-35deg, 0deg)',
                borderBottomRightRadius:'35px',
                marginLeft:'-100px'
            }}
            >
            </div>
            <div className="absolute z-20 left-300   w-[1300px] h-[70px]  top-[750px] bg-white"
            style={{
                transform: 'skew(-35deg, 0deg)',
                borderTopLeftRadius:'36px',
                marginLeft:'806px'
            }}
            >
            </div>
        <div className="flex w-[1368px] h-[430px] bg-green-500">
            <div className=" z-10 flex-col w-full bg-white pt-28">
                <div>
                    <p
                    style={{
                        fontSize:'14px',
                        fontFamily:'Avenir-Black',
                        textAlign:'left',
                        color:'#FF3601',
                        textTransform:'uppercase'
                    }}
                    >Features</p>
                </div>
                <div>
                    <p 
                        style={{
                            fontSize:'30px',
                            fontFamily:'Avenir-Black',
                            textAlign:'left',
                            padding:'0.5em  0px 1em 0px'
                        }}
                    >
                        AI Model Designed to<br/> Understand and Generate<br/> Content In Swahili.
                    </p>
                </div>
                <div>
                    <p
                     style={{
                        fontSize:'16px',
                        textAlign:'left',
                        color:'#807E83'
                    }}
                    >
                    PAWA, developed by Sartify LLC, is an AI model designed to understand<br/>
                    and generate content in Swahili. It’s a powerful tool for businesses,<br/>
                    educators, and developers looking to leverage Swahili language processing.
                    </p>

                </div>

            </div>
            <div className=" z-10 flex-col w-full bg-white pt-10 ">
                <img src="/assets/bee.png" alt="" />
            </div>
            {/* curved div */}
           
        </div>



    </div>
  )
}



export default FeaturesSection