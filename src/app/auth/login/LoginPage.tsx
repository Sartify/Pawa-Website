import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
    return (
        <>
            <div className=" flex w-full  bg-[#2F333E]  justify-center items-center    " style={{ height: '100vh' }}>
                <div className=" flex w-[1366px] h-[768px]  justify-between  ">
                    <div className='flex-col w-full  '>
                        <div className="flex w-full  " >
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                <img src="/assets/left-arrow.png" height={'22px'} width={'22px'} alt="" />
                            </div>
                            <p style={{ color: 'white' }}>Back</p>
                        </div>

                        <p style={{ fontSize: '25px', fontFamily: 'Avenir-Light', color: 'white' }}>Hello!</p>
                        <p className='mb-12' style={{ fontSize: '25px', fontFamily: 'Chillax-Bold', color: 'white' }} >Welcome to <span style={{ color: '#D98C07' }}>PAWA.</span></p>

                        <div>
                            <div className=' mb-4 flex  items-center w-[395px] gap-3' style={{border:'1px solid white', padding:'1em', borderRadius:'6px'}}>
                                <img src="/assets/email-icon.png" height={'22px'} width={'22px'} alt="" />
                                <input type="text" placeholder='Your E-mail' style={{background:'none',fontSize:'15px'}} />
                            </div>
                        </div>

                        <div>
                            <div  className=' mb-6 flex  items-center w-[395px] gap-3' style={{border:'1px solid white', padding:'1em', borderRadius:'6px'}}>
                                <img src="/assets/password-icon.png" height={'22px'} width={'22px'} alt="" />
                                <input type="text" placeholder='Password' style={{background:'none',fontSize:'15px'}} />
                            </div>
                        </div>
                        <div>
                            <button style={{width:'397px',color:'white',backgroundColor:'#D98C07',padding:'1em', borderRadius:'5px', fontSize:'16px', fontFamily:'Avenir-Heavy'}}>Log In</button>
                        </div>
                            <div className='flex items-end justify-end w-[397px] '>
                                <Link href={'#'} style={{color:'#707070', fontFamily:'Avenir-Oblique', fontSize:'15px',marginTop:'10px'}}>Forget Password? </Link>
                               
                            </div>
                            <div className='flex justify-between  pr-20  ' style={{marginTop:'13em'}}>
                                <p style={{color:'#ACACAC', fontFamily:'Avenir-Light', fontSize:'13px',marginTop:'10px'}}>Contact technical team</p>
                                <div className='flex justify-between gap-6' style={{color:'#D98C06', fontSize:'13px'}}>
                                    <Link href={'#'}>Whatsapp</Link>
                                    <Link href={'#'}>Email</Link>
                                    <Link href={'#'}>Phone</Link>
                                </div>
                                
                            </div>
                    </div>
                    <div className=" bg-[url('/assets/spacecraft.png')]  bg-cover bg-center  flex justify-between bg-red-500 w-full p-14" style={{backgroundSize:'102%', borderRadius:'30px', border:'1px solid white'}}>
                            <div className='flex w-full justify-between '>
                                <div><img height={'44px'} width={'48px'} src="/assets/pawa-logo.png" alt="" /></div>
                                <div className="w-[100px] h-[38px] rounded-full bg-[#4B525C] flex items-center justify-center relative cursor-pointer">
                                    <p className='ml-[-40px]' style={{color:'white',fontSize:'13px'}}>Log in</p>
                                    <div className="flex items-center justify-center absolute top-0 left-[55px] h-[38px] w-[70px]  bg-white rounded-full">
                                        <p style={{color:'#D98C07',fontSize:'13px',fontFamily:'Avenir-Heavy'}} >Register</p>
                                    </div>
                                </div>
                           </div>   
                    </div>



                </div>
            </div>
        </>
    )
}

export default LoginPage