import Link from "next/link";
import { login } from "../services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  export default Login
  
  
  