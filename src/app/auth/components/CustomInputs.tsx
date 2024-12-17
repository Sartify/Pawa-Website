import React, { useRef } from 'react'


interface EmailInputProps {
    email: string;
    setEmail: (email: string) => void;
  }

 interface CustomInputProps {
    inputName: string;
    inputValue: string;
    setInputValue: (inputValue: string) => void;
  }

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
  }
  


  export const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
    const inputRef = useRef<HTMLInputElement>(null); // Type the ref for input
  
    const handleDivClick = () => {
      inputRef.current?.focus(); // Focus the input element
    };
  
    return (
      <div
        className="mb-6 flex items-center w-[395px] gap-3"
        style={{
          border: '1px solid white',
          padding: '1em',
          borderRadius: '6px',
          boxSizing: 'border-box',
          cursor: 'pointer', // Indicates clickable behavior
        }}
        onClick={handleDivClick} // Triggers input focus
      >
        <img
          src="/assets/password-icon.png"
          height={22}
          width={22}
          alt="Password Icon"
          style={{ flexShrink: 0 }} // Prevents the image from shrinking
        />
        <input
          ref={inputRef} // Attach ref to the input element
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            flex: '1', // Makes the input expand to fill the space
            background: 'none',
            fontSize: '15px',
            border: 'none', // Removes input borders
            outline: 'none', // Removes focus outline
            color: 'white', // Matches white theme text color
            padding: '0',
          }}
        />
      </div>
    );
  };


  export const EmailInput: React.FC<EmailInputProps> = ({ email, setEmail }) => {
    const inputRef = useRef<HTMLInputElement>(null); // Ref for the input element
  
    const handleDivClick = () => {
      inputRef.current?.focus(); // Focus the input when div is clicked
    };
  
    return (
      <div
        className="mb-4 flex items-center w-[395px] gap-3"
        style={{
          border: '1px solid white',
          padding: '1em',
          borderRadius: '6px',
          boxSizing: 'border-box',
          cursor: 'pointer', // Makes it clear the div is clickable
        }}
        onClick={handleDivClick} // Trigger input focus on div click
      >
        <img
          src="/assets/email-icon.png"
          height={22}
          width={22}
          alt="Email Icon"
          style={{ flexShrink: 0 }} // Prevents the image from shrinking
        />
        <input
          ref={inputRef} // Attach the ref to the input
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: '1', // Input takes up remaining space
            background: 'none',
            fontSize: '15px',
            border: 'none', // Removes borders
            outline: 'none', // Removes focus outline
            color: 'white', // Ensures text color fits the white theme
            padding: '0',
          }}
        />
      </div>
    );
  };


  export const CustomInput: React.FC<CustomInputProps> = ({inputName, inputValue, setInputValue }) => {
    const inputRef = useRef<HTMLInputElement>(null); // Ref for the input element
  
    const handleDivClick = () => {
      inputRef.current?.focus(); // Focus the input when div is clicked
    };
  
    return (
      <div
        className="mb-4 flex items-center w-[395px] gap-3"
        style={{
          border: '1px solid white',
          padding: '1em',
          borderRadius: '6px',
          boxSizing: 'border-box',
          cursor: 'pointer', // Makes it clear the div is clickable
        }}
        onClick={handleDivClick} // Trigger input focus on div click
      >
        <img
          src="/assets/email-icon.png"
          height={22}
          width={22}
          alt="Email Icon"
          style={{ flexShrink: 0 }} // Prevents the image from shrinking
        />
        <input
          ref={inputRef} // Attach the ref to the input
          type="text"
          placeholder={`Your ${inputName}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          style={{
            flex: '1', // Input takes up remaining space
            background: 'none',
            fontSize: '15px',
            border: 'none', // Removes borders
            outline: 'none', // Removes focus outline
            color: 'white', // Ensures text color fits the white theme
            padding: '0',
          }}
        />
      </div>
    );
  };
  