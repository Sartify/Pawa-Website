"use client"
import Link from 'next/link'
import React, {  useState } from "react";
import Register from './Register';
import Login from './Login';
import ToggleSwitch from './components/ToggleSwitch'
import Image from 'next/image';



const AuthPage = () => {

    const [authState, setAuthState] = useState<string>("signin");
    return (
        <>
            <div className=" flex w-full  bg-[#2F333E]  justify-center items-center    " style={{ height: '100vh' }}>
                <div className=" flex w-[1366px] h-[768px]  justify-between  ">
                    <div className='flex-col w-full  '>
                        <div className="flex w-full  " >
                            <Link  href={'/'} className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                <Image src="/assets/left-arrow.png" height={22} width={22} alt="" />
                            </Link>
                            <p style={{ color: 'white' }}>Back</p>
                        </div>

                             {authState === "signin" ? <Login /> : <Register />}

                            {/* <div className='flex items-end justify-end w-[397px] '>
                                <Link href={'#'} style={{color:'#707070', fontFamily:'Avenir-Oblique', fontSize:'15px',marginTop:'10px'}}>Forget Password? </Link>
                               
                            </div> */}
                            <div className='flex justify-between  pr-20  ' style={{marginTop:'4em'}}>
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
                                <div><Image height={44} width={48} src="/assets/pawa-logo.png" alt="" /></div>
                                <div className="w-[120px] h-[38px] rounded-full bg-[#4B525C] flex items-center justify-between px-4 relative cursor-pointer ">
                                    <ToggleSwitch authState={authState} setAuthState={setAuthState} />
                                </div>
                           </div>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage