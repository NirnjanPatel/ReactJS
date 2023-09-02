import React from "react";

export default function Signup(){
    return(
        <div>
            <label>First-Name : 
                 <input placeholder="First-Name" type={"text"}></input>
            </label>

            <label>Last-Name :
                 <input placeholder="Last-Name" type={"text"}></input>
            </label>

            <label>Email :
                 <input placeholder="Email" type={"email"}></input>
            </label>

            <label>Password :
                 <input placeholder="Password" type={"password"}></input>
            </label>

            <label>Confirm-Password :
                 <input placeholder="Re-Enter the same password" type={"password"}></input>
            </label>

            <label>Contact-Number :
                 <input placeholder="Phone number" type={"number"}></input>
            </label>

        </div>
    )
}