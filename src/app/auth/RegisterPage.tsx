"use client"

import { login, register } from '@/app/services/authService';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React, { SyntheticEvent, useState } from "react";

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

         {/* <button className='ml-[-40px]' style={{color:'white',fontSize:'13px'}}> <p> Log in</p> </button>
                                    <button className="flex items-center justify-center absolute top-0 left-[55px] h-[38px] w-[70px]  bg-white rounded-full">
                                        <p style={{color:'#D98C07',fontSize:'13px',fontFamily:'Avenir-Heavy'}} >Register</p>
                                    </button> */}

    return (
        <>
            <button id='signin' onClick={handleToggle} style={authState === "signin" ? activeStyle : normalStyle}>Sign in</button>
            <button id='signup' onClick={handleToggle} style={authState === "signup" ? activeStyle : normalStyle}>Sign up </button>
        </>
    );
};






export  function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response); // Store token if successful
      router.push('/dashboard');
    } catch (error) {
      console.log('Login failed:', error);
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Heading */}
      <p style={{ fontSize: '25px', fontFamily: 'Avenir-Light', color: 'white' }}>Hello!</p>
      <p className="mb-12" style={{ fontSize: '25px', fontFamily: 'Chillax-Bold', color: 'white' }}>
        Welcome to <span style={{ color: '#D98C07' }}>PAWA.</span>
      </p>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div
          className="mb-4 flex items-center w-[395px] gap-3"
          style={{ border: '1px solid white', padding: '1em', borderRadius: '6px' }}
        >
          <img src="/assets/email-icon.png" height="22" width="22" alt="Email Icon" />
          <input
            type="email"
            placeholder="Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ background: 'none', fontSize: '15px' }}
          />
        </div>

        {/* Password */}
        <div
          className="mb-6 flex items-center w-[395px] gap-3"
          style={{ border: '1px solid white', padding: '1em', borderRadius: '6px' }}
        >
          <img src="/assets/password-icon.png" height="22" width="22" alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ background: 'none', fontSize: '15px' }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '397px',
            color: 'white',
            backgroundColor: '#D98C07',
            padding: '1em',
            borderRadius: '5px',
            fontSize: '16px',
            fontFamily: 'Avenir-Heavy',
          }}
        >
          Sign In
        </button>
      </form>

      <div className="flex items-end justify-end w-[397px] mb-[12em]">
        <Link href={'#'} style={{ color: '#707070', fontFamily: 'Avenir-Oblique', fontSize: '15px', marginTop: '10px' }}>
          Forget Password?
        </Link>
      </div>
    </div>
  );
}



const Register = () => {
  const router = useRouter();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    
    try {
      const response = await register(firstname,lastname,email,password);
      console.log(response); // Store token if successful
      router.push('/dashboard');
    } catch (error) {
      console.log('Login failed:', error);
      alert('Invalid credentials, please try again.');
    }
  };

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong'}`);
        return;
      }

      router.push('/login');
    } catch (error) {
      console.log('Error submitting form:', error);
      alert('Failed to submit the form');
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Heading */}
      <p style={{ fontSize: '25px', fontFamily: 'Avenir-Light', color: 'white' }}>Hello!</p>
      <p className="mb-12" style={{ fontSize: '25px', fontFamily: 'Chillax-Bold', color: 'white' }}>
        Register to <span style={{ color: '#D98C07' }}>PAWA.</span>
      </p>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div
          className="mb-6 flex items-center w-[395px] gap-3"
          style={{ border: '1px solid white', padding: '1em', borderRadius: '6px' }}
        >
          <img src="/assets/password-icon.png" height="22" width="22" alt="First Name Icon" />
          <input
            type="text"
            placeholder="Your First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            style={{ background: 'none', fontSize: '15px' }}
          />
        </div>

        {/* Last Name */}
        <div
          className="mb-6 flex items-center w-[395px] gap-3"
          style={{ border: '1px solid white', padding: '1em', borderRadius: '6px' }}
        >
          <img src="/assets/password-icon.png" height="22" width="22" alt="Last Name Icon" />
          <input
            type="text"
            placeholder="Your Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            style={{ background: 'none', fontSize: '15px' }}
          />
        </div>

        {/* Email */}
        <div
          className="mb-4 flex items-center w-[395px] gap-3"
          style={{ border: '1px solid white', padding: '1em', borderRadius: '6px' }}
        >
          <img src="/assets/email-icon.png" height="22" width="22" alt="Email Icon" />
          <input
            type="email"
            placeholder="Your E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ background: 'none', fontSize: '15px' }}
          />
        </div>

        {/* Password */}
        <div
          className="mb-6 flex items-center w-[395px] gap-3"
          style={{ border: '1px solid white', padding: '1em', borderRadius: '6px' }}
        >
          <img src="/assets/password-icon.png" height="22" width="22" alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ background: 'none', fontSize: '15px' }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '397px',
            color: 'white',
            backgroundColor: '#D98C07',
            padding: '1em',
            borderRadius: '5px',
            fontSize: '16px',
            fontFamily: 'Avenir-Heavy',
          }}
        >
          Sign Up
        </button>
      </form>

      <div className="flex items-end justify-end w-[397px] mb-[12em]">
        <Link
          href="/login"
          style={{
            color: '#707070',
            fontFamily: 'Avenir-Oblique',
            fontSize: '15px',
            marginTop: '10px',
          }}
        >
          Already have an account? Log in
        </Link>
      </div>
    </div>
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