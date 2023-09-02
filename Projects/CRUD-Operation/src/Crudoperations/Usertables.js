import React from 'react'
import { Button } from 'react-bootstrap';

const Usertables = (props) => {
  return (
    <div class="p-3 mb-2 bg-dark text-white">
    <div class="display-1">
        <table className='u-full-width'>
            <thead>
                <tr>
                    <th style={{ fontSize: "15px" }}>ID</th>
                    <th style={{ fontSize: "15px" }}>FirstName</th>
                    <th style={{ fontSize: "15px" }}>Lastname</th>
                    <th style={{ fontSize: "15px" }}>Email</th>
                    <th style={{ fontSize: "15px" }}>Contact</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user =>{
                        const {id,firstname,lastname,mail,contact} = user;
                        return(
                            <tr>
                                <td style={{ fontSize: "13px" }}>{id}</td>
                                <td style={{ fontSize: "13px" }}>{firstname}</td>
                                <td style={{ fontSize: "13px" }}>{lastname}</td>
                                <td style={{ fontSize: "13px" }}>{mail}</td>
                                <td style={{ fontSize: "13px" }}>{contact}</td>
                                <td>
                                    <button class="btn-danger" onClick={()=>props.deleteUser(id)}>Delete</button>
                                    <button class="btn-primary" onClick={()=>props.editUser(id,user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ):(
                    <tr>
                        <td colSpan={4}>No User Found</td>
                    </tr>
                )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Usertables;