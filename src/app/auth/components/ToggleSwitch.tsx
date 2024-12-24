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


export default ToggleSwitch