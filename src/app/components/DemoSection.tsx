

const DemoSection = () => {
  return (
     <div className="mt-100 flex w-full h-[380px]  justify-center items-start mt-20 ">
        <div className="w-[1366px] flex-col items-center justify-center text-center">
          <p className="mb-4" style={{fontFamily:'Avenir-Black', color:'#FF3601' , fontSize:'16px'}}>DEMONSTRATION</p>
          <p className="mb-4" style={{fontFamily:'Avenir-Black', color:'#12141D' , fontSize:'30px'}}>
          Interested in exploring the full potential of PAWA for<br/> your organization or project?
          </p>
          <p className="mb-10"
            style={{fontFamily:'Avenir-Light', color:'#707070' , fontSize:'20px'}}
          >Request a personalized demo to see how our Swahili AI model can meet your needs.</p>

          <button className=" mb-10 p-4" style={{backgroundColor:'#DC8F0A', fontFamily:'Avenir-Heavy', fontSize:'16px', borderRadius:'5px', color:'2F333E'}}> REQUEST A DEMO</button>
          <div  className=" flex justify-center items-center">
            <img src="/assets/sponsors.png" width={"900px"} height={'95px'} alt="" />
          </div>

        </div>
     </div>
  )
}

export default DemoSection