import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './SignUp.css';

import user_icon from "../assets/user.png";
import email_icon from "../assets/mail.png";
import password_icon from "../assets/padlock.png";

export const SignUp = () => {
    
    const [action, setAction] = useState("Sign Up");
    return(
        <div className="signUpContainer">

            <div className="signUpHeader">
                <div className="signUpText">{action}</div>
                <div className="signUpUnderline"></div>
                </div>

                <div className="signUpInputsContainer">

                {action === "Login" ? <div></div> : 
                <div className="signUpInput">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Username'/>
                </div>}
                
                <div className="signUpInput">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="signUpInput">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
                
                {action === "Sign Up"? <div></div> : 
                <div className="forgotPassword">Forgot Password? <span>Click Here!</span></div> }

                <div className='submitContainer'>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
                    <div className={action === "Login" ? "submit gray" :"submit" } onClick={()=>{setAction("Login")}}> Login</div>
                </div>
                </div>

            </div>

        
    )
}
