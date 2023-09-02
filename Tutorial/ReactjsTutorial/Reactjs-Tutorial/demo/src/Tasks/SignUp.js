import './Style.css';
import { useState } from "react";
const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");


    const handleSignUp = () => {

        localStorage.setItem('firstName', JSON.stringify(firstName));
        localStorage.setItem('lastName', JSON.stringify(lastName));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));
        localStorage.setItem('confirmPassword', JSON.stringify(confirmPassword));
        localStorage.setItem('mobileNumber', JSON.stringify(mobileNumber));
    }

    const [eye, seteye] = useState(true);
    const [inputtext, set_inputtext] = useState("password");
    const [warning, setwarning] = useState(false);

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="top_div">
                        <div className="bric">
                            <span></span>
                            <h3>Sign Up</h3>
                        </div>
                        <p style={{ fontSize: "17px" }}>Have an account?<a href="#">Log in</a></p>

                    </div>
                    <div className="text">
                    </div>

                    <div className="input_text">
                        <input style={{ fontSize: "17px", padding: "10px", marginTop: "20px" }}
                            type="text" value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                        <label style={{ fontSize: "17px", color: "blue" }} >Enter first name</label>
                    </div>

                    <div className="input_text">
                        <input style={{ fontSize: "17px", padding: "10px", marginTop: "20px" }} type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                        <label style={{ fontSize: "17px", color: "blue" }}>Enter last name</label>
                    </div>

                    <div className="input_text">
                        <input style={{ fontSize: "17px", padding: "10px", marginTop: "20px" }} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label style={{ fontSize: "17px", color: "blue" }}>Enter email</label>
                    </div>

                    <div className="input_text">
                        <input style={{ fontSize: "17px", padding: "10px", marginTop: "20px" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label style={{ fontSize: "17px", color: "blue" }}>Enter password</label>
                        {/* <i onClick={Eye} style={{marginTop:"18px"}} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i> */}
                    </div>

                    <div className="input_text">
                        <input style={{ fontSize: "17px", padding: "10px", marginTop: "20px" }} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <label style={{ fontSize: "17px", color: "blue" }}>Confirm password</label>
                    </div>

                    <div className="input_text">
                        <input style={{ fontSize: "17px", padding: "10px", marginTop: "20px" }} type="text" onChange={(e) => setMobileNumber(e.target.value)} />
                        <label style={{ fontSize: "17px", color: "blue" }}>Enter mobile number</label>
                    </div>

                    <div className="button">
                        <button style={{ fontSize: "16px" }} onClick={handleSignUp}>SignUp</button>
                        <h6>By signing up you are agreeing to our</h6>
                        <a href="#">Terms and Condition</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp;