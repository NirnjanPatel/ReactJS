import React,{useState} from "react";

export default function Multipleform(){
    const [inputs,setInputs]=useState({});

    const handlesubmit=(event)=>{
        event.preventDefault();
        alert((`${inputs.username} ${inputs.age}`))
    }

    const handlechange =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    return(
        <div>
        <br/>
        <br/>
            <form onSubmit={handlesubmit}>
                <label>Enter your name:
                    <input type="text" 
                    name="username" 
                    value={(inputs.username) || " "} 
                    onChange={handlechange} ></input>
                </label>
                <label>Enter your age:
                    <input type="number" 
                    name="age" 
                    value={(inputs.age) || " "}
                    onChange={handlechange} ></input>
                </label>
                <input type={"submit"}></input>
                <br/>
                <br/>
            </form>
        </div>
    )
}