"use client"

import { login, register } from '@/app/services/authService';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React, { SyntheticEvent, useState } from "react";
import Register from './Register';
import Login from './Login';

interface AuthToggleProps {
    authState: string;
    setAuthState: React.Dispatch<React.SetStateAction<string>>;
}


const ToggleSwitch: React.FC<AuthToggleProps> = ({ authState, setAuthState }) => {

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const buttonId = event.currentTarget.id; // Access the button's id
        console.log(buttonId); // Log the id ('signin' in this case)
        setAuthState(buttonId);
    
    };
   

    const baseStyle = {
        borderRadius: "5px",
        cursor: "pointer",
        transition: "all 0.3s ease-out", // Smooth transition for all style changes
    };

    const normalStyle = {
        ...baseStyle,
        color:'white',
        fontSize:'14px'
    }
    const activeStyle = {
        ...baseStyle,
        color:'#D98C07',
        fontSize:'14px',
        fontFamily:'Avenir-Heavy',
        backgroundColor:'white',
        padding:'10px 8px',
        margin:'0px -24px',
        borderRadius:'24px',
          transform: "scale(1)"
    }

    return (
        <>
            <button id='signin' onClick={handleToggle} style={authState === "signin" ? activeStyle : normalStyle}>Sign in</button>
            <button id='signup' onClick={handleToggle} style={authState === "signup" ? activeStyle : normalStyle}>Sign up </button>
        </>
    );
};


const RegisterPage = () => {

    const [authState, setAuthState] = useState<string>("signin");
    return (
        <>
            <div className=" flex w-full  bg-[#2F333E]  justify-center items-center    " style={{ height: '100vh' }}>
                <div className=" flex w-[1366px] h-[768px]  justify-between  ">
                    <div className='flex-col w-full  '>
                        <div className="flex w-full  " >
                            <Link  href={'/'} className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-4 mb-28">
                                <img src="/assets/left-arrow.png" height={'22px'} width={'22px'} alt="" />
                            </Link>
                            <p style={{ color: 'white' }}>Back</p>
                        </div>

                             {authState === "signin" ? <Login /> : <Register />}

                            {/* <div className='flex items-end justify-end w-[397px] '>
                                <Link href={'#'} style={{color:'#707070', fontFamily:'Avenir-Oblique', fontSize:'15px',marginTop:'10px'}}>Forget Password? </Link>
                               
                            </div> */}
                            <div className='flex justify-between  pr-20  ' style={{marginTop:'6em'}}>
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

export default RegisterPage