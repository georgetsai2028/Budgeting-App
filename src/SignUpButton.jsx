import { useNavigate } from "react-router-dom";

export function SignUpButton() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/sign-up")
            
       
    }
       

    return (
        <button onClick={handleButtonClick}>
            Click Here to Make Your Own Budget!
        </button>
        
            
    )

}