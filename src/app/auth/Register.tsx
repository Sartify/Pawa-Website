import { useState } from "react";
import { register } from "../../services/authService";
import { CustomInput, EmailInput, PasswordInput } from "./components/CustomInputs";


const Register = () => {
  // const router = useRouter();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(firstname, lastname, email, password);

      if (response?.error) {
        alert('Invalid credentials');
      } else {
        // router.push('/auth');
        alert('Successfully registered! Redirecting...');
        window.location.href = '/auth';
      }
    } catch (error) {
      console.log('Registration failed:', error);
      alert('Invalid credentials, please try again.');
    }
  };

  // const submit = async (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:4000/auth/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         firstname,
  //         lastname,
  //         email,
  //         password,
  //       }),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       alert(`Error: ${errorData.message || 'Something went wrong'}`);
  //       return;
  //     }

  //     router.push('/login');
  //   } catch (error) {
  //     console.log('Error submitting form:', error);
  //     alert('Failed to submit the form');
  //   }
  // };

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
        <CustomInput inputName="Firstname" inputValue={firstname} setInputValue={setFirstname} />
        {/* Last Name */}
        <CustomInput inputName="Lastname" inputValue={lastname} setInputValue={setLastname} />
        {/* Email */}
        <EmailInput email={email} setEmail={setEmail} />
        {/* Password */}
        <PasswordInput password={password} setPassword={setPassword} />

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

      <div className="flex items-end justify-end w-[397px] mb-[4em]">
    
      </div>
    </div>
  );
};


export default Register
