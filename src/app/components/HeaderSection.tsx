


const headerStyle = {
    // maxWidth:"2366px",
    // height:"764px",
    backgroundColor:"#2f333e"

}

const imageGrad1 = {
    backgroundImage: 'linear-gradient(to right, #2F333E 0%, #2F333E 34%, transparent 80%)'
}
const imageGrad2 = {
    backgroundImage: 'linear-gradient(to left, #2F333E 0%, #2F333E 34%, transparent 80%)'
}

const HeaderSection = () => {
  return (
    <div style={headerStyle} className="w-full h-[764px]  flex items-center justify-center">
        <div className=" z-10 flex-1 bg-red-500 h-[764px] flex items-center justify-center">
            <p className=" text-white text-lg">Div 1</p>
        </div>
      <div className="flex-1 bg-green-500 h-[764px]  bg-[url('/assets/spacecraft.png')] bg-contain bg-center  flex items-center justify-between  " style={{backgroundSize: '68%'}}>
            {/* primary color background blending */}
        <div className="absolute  z-0 h-[764px] w-[100%]   inset-0 bg-[#2F333E] mix-blend-color" ></div>
            {/* right and left gradients */}
            <div className="flex  h-[764px]  w-[50%]  " style={imageGrad1}></div>
            <div className="flex  h-[764px]  w-[50%] " style={imageGrad2}></div>
            {/* right and left gradients */}
      </div>
    </div>
  )
}

export default HeaderSection