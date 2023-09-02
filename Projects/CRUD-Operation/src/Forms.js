import React,{useState} from "react";

export default function Forms(){
    const [name,setname] = useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`The name you Entered was : ${name}`);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Your name:
                    <input type={"text"} value={name} onChange ={(e)=>setname(e.target.value)} ></input>
                </label>
                <br/>
                <input type={"submit"}></input>
                <br/>
                <br/>
            </form>
        </div>
    )
}