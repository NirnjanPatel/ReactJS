import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React,{useState} from "react";

export default function Textarea(){
    const [Textarea,setTextarea] = useState("The content of a textarea goes in the value attribute");

    const handlechange=(event)=>{
        setTextarea(event.target.value);
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        alert(`The content is changed as : ${Textarea}`)
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <textarea value={Textarea} onChange={handlechange} ></textarea>
                <br/>
                <input type={"submit"}></input>
                <br/>
                <br/>
            </form>
        </div>
    )
}