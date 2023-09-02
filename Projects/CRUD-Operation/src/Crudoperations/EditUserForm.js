import React, { useState , useEffect } from 'react'

const EditUserForm = (props) => {

    const [user,setUser]=useState(props.currentUser);

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      if(user.firstname && user.lastname && user.mail && user.password && user.contact){
        props.updateUser(user);
      }
    }

    useEffect(()=>{
      setUser(props.currentUser)
    },[props])

  return (
    <div>
        <form style={{ borderRadius: "10px", backgroundColor: "#a9c8ff" }}>
            <br/>
            <input className="u-full-width" 
            type="text" 
            name="firstname" 
            value={user.firstname}
            placeholder="First Name" 
            onChange={handleChange} />
            <br/>
            <br/>

            <input className="u-full-width" 
            type="text" 
            name="lastname" 
            value={user.lastname}
            placeholder="Last Name" 
            onChange={handleChange}/>
            <br/>
            <br/>

            <input className="u-full-width" 
            type="email" name="mail" 
            value={user.mail} 
            placeholder="Email"
            onChange={handleChange}/>
            <br/>
            <br/>

            <input className="u-full-width" 
            type="password" 
            name="password" 
            value={user.password}
            placeholder="Password" 
            onChange={handleChange}/>
            <br/>
            <br/>

            <input className="u-full-width" 
            type="text" 
            name="contact" 
            value={user.contact} 
            placeholder="Contact"
            onChange={handleChange}/>
            <br/>
            <br/>
            <br/>

            <button class="btn-primary" 
            type="submit" style={{ fontSize: "17px" }}
            onClick={handleSubmit}>Edit User</button>

            <button style={{ fontSize: "17px" }} class="btn-danger" type="submit"
            onClick={()=>{props.setEditing(false)}}
            >Cancel</button>
        </form>
    </div>
  )
}

export default EditUserForm