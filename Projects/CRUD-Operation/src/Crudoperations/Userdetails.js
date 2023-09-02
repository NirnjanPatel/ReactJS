import React, { useState } from "react";
import Navigbar from "../Task_1/Navigbar";
import AddUserForm from "./AddUserForm ";
import EditUserForm from "./EditUserForm";
import UserList from "./UserList";
import Usertables from "./Usertables";
// import './All.css'

function Userdetails(){

    const [data,setData]=useState([]);

    const fetchApi =()=>{
        
    }

    const [users,setUsers]=useState(UserList);

    const addUser=(user)=>{
        user.id = users.length+1;
        setUsers([...users,user]);
    }

    const deleteUser=(id)=>{
        setUsers(users.filter((user)=>user.id !== id));
    }

    const [editing,setEditing]=useState(false);
    const initialUser = {id:null,firstname:"",lastname:"",mail:"",password:"",contact:""}
    const [currentUser,setCurrentUser]=useState(initialUser);

    const editUser=(id,user)=>{
        setEditing(true);
        setCurrentUser(user);
    }

    const updateUser=(newUser)=>{
        setUsers(users.map(user=>(user.id === currentUser.id ? newUser : user)))
    }

    return(
        <div>
        <Navigbar />
        <div className="container">
            <h1>USERS DETAILS</h1>
            <div className="row">
                <div className="five columns">
                    {editing? (
                        <div>
                            <h2>EDIT USER</h2>
                            <EditUserForm 
                                currentUser={currentUser}
                                setEditing ={setEditing}
                                updateUser={updateUser}
                            />        
                        </div>
                    ):(
                        <div>
                            <h2>ADD USER</h2>
                            <AddUserForm addUser={addUser} />
                        </div>    
                    )}
            
                </div>
                <div className="seven columns">
                    <h2>VIEW USERS</h2>
                    <Usertables users={users} deleteUser={deleteUser} editUser={editUser}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Userdetails;