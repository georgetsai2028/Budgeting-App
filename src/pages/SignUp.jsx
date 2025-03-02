
import './SignUp.css';

import user_icon from "../assets/user.png";
import email_icon from "../assets/mail.png";
import password_icon from "../assets/padlock.png";

const SignUp = () => {
    return(
        <div className="signUpContainer">

            <div className="signUpHeader">
                <div className="signUpText">Sign Up</div>
                <div className="signUpUnderline"></div>
                </div>

                <div className="signUpInputsContainer">

                <div className="signUpInput">
                    <img src={user_icon} alt="" />
                    <input type="text"/>
                </div>
                <div className="signUpInput">
                    <img src={email_icon} alt="" />
                    <input type="email"/>
                </div>
                <div className="signUpInput">
                    <img src={password_icon} alt="" />
                    <input type="password"/>
                </div>
                <div className="forgotPassword">Forgot Password? <span>Click Here!</span></div>
                <div className='submitContainer'>
                    <div className="submit"> Sign Up</div>
                    <div className="submit"> Login</div>
                </div>

                </div>

            </div>

        
    )
}
