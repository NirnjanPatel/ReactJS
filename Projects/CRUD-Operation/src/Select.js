import React,{useState} from "react";

export default function Select(){
    const [myCar,setMyCar] = useState("volvo");

    const handleChange=(event)=>{
        setMyCar(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(myCar);
        console.log(myCar);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <br/><br/>
            <h2>This is select BOX</h2>
                <select  value={myCar} onChange={handleChange}>
                    <option value={"Ford"}>Ford</option>
                    <option value={"Volvo"}>Volvo</option>
                    <option value={"Fiat"}>Fiat</option>
                    <option value={"Figo"}>Figo</option>
                </select>
                <input type={"submit"}></input>
            </form>
        </div>
    )
}