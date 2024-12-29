import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EmailInput, PasswordInput } from "./components/CustomInputs";
import { signIn } from "next-auth/react";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
              });
          
              if (result?.error) {
                alert('Invalid credentials');
              } else {
                router.push('/dashboard/user');
              }
            
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
                    Sign In
                </button>
                {/* Submit Button */}
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


