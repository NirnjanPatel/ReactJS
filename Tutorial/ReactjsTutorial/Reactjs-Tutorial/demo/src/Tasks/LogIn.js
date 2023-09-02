import './Style.css';
import { useState, useRef,useEffect } from "react";
const LogIn = () => {

    const [eye, seteye] = useState(true);
    const [inputtext, set_inputtext] = useState("password");
    const [warning, setwarning] = useState(false);

    const [warningEmail, setWarningEmail] = useState(false);
    const [warningPassword, setWarningPassword] = useState(false);

    const email = useRef();
    const password = useRef();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem(email));
        console.log(items);

    },[])
    
    const handleLogin = () => {

        // const savedEmail = localStorage.getItem(email.current.value);
        // console.log(savedEmail);

        if (email.current.value && password.current.value) {
            // let checkEmail = localStorage.getItem(email.current.value);
            // let checkPassword = localStorage.getItem(password.current.value);

            if (email.current.value !== localStorage.getItem(email.current.value) ||  password.current.value !== localStorage.getItem(password.current.value)) {
                alert("Not verified");
            }
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
        }
        else if (email.current.value && password.current.value == "") {
            setWarningEmail(true);
            setWarningPassword(true);
        }
    }
 
    const Eye = () => {
        if (inputtext == "password") {
            set_inputtext("text");
            seteye(false);
            setwarning(true);
        }
        else {
            set_inputtext("password");
            seteye(true);
            setwarning(false);
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="card" style={{height: "450px"}}>
                    <div className="top_div">
                        <div className="bric">
                            <span></span>
                            <h3>Login</h3>
                        </div>
                        <p style={{fontSize:"17px"}}>Don't have an account?<a href="#">Sign Up</a></p>
                  
                    </div>
                    <div className="text">
                    </div>                 

                    <div className="input_text">
                        <input style={{fontSize:"17px",padding:"10px",marginTop:"20px"}} type="text" ref={email} className={`${warningEmail ? "warningEmail" : ""}`}  onChange={email}  />
                        <label style={{fontSize:"17px", color:"blue"}}>Enter email</label>
                        <span>{warningEmail}</span>
                    </div>   
                    
                    <div className="input_text">
                        <input style={{fontSize:"17px",padding:"10px",marginTop:"20px"}} type={inputtext} ref={password} className={`${warningPassword ? "warningPassword" : ""}`}  onChange={password}  />
                            <label style={{fontSize:"17px", color:"blue"}}>Enter password</label>
                        <span>{warningPassword}</span>
                        <i onClick={Eye} style={{marginTop:"18px"}} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </div>

                    <div className="button">
                        <button style={{fontSize:"16px"}} onClick={handleLogin}>Login</button>
                        <h6>By signing up you are agreeing to our</h6>
                        <a href="#">Terms and Condition</a>
                    </div>
                </div>
          
            </div>
        </>
    )

}

export default LogIn;