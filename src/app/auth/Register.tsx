import Link from "next/link";

import { useState } from "react";
import { register } from "../services/authService";

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
  

  export default Register
  