import React, { useState } from 'react'

const AddUserForm  = (props) => {
    const initUser ={id:null,firstname:"",lastname:"",mail:"",password:"",contact:""};

    const [user,setUser] = useState(initUser);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.firstname && user.lastname && user.mail && user.password && user.contact){
            handleChange(e,props.addUser(user));
        }
        setUser({
            firstname:"",lastname:"",mail:"",password:"",contact:""
        })
    }

  return (
    <div style={{ borderRadius: "10px", backgroundColor: "#a9c8ff" }}>
        <form style={{ borderRadius: "29px", backgroundColor: "#a9c8ff" }}>
            <br/>
            <input style={{ fontSize: "17px" }} className="u-full-width" type="text" placeholder="First Name" name="firstname" value={user.firstname} onChange={handleChange} />
            <br/>
            <br/>
            <input style={{ fontSize: "17px" }} className="u-full-width" type="text" placeholder="Last Name" name="lastname" value={user.lastname} onChange={handleChange}/>
            <br/>
            <br/>
            <input style={{ fontSize: "17px" }} className="u-full-width" type="email" placeholder="Email" name="mail" value={user.mail} onChange={handleChange}/>
            <br/>
            <br/>
            <input style={{ fontSize: "17px" }} className="u-full-width" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <br/>
            <br/>
            <input style={{ fontSize: "17px" }} className="u-full-width" type="text" placeholder="Contact" name="contact" value={user.contact} onChange={handleChange}/>
            <br/>
            <br/>
            <br/>
            <button style={{ fontSize: "17px" }} class="btn-primary" type="submit" onClick={handleSubmit}>Add User</button>
        </form>
    </div>
  )
}

export default AddUserForm;