import './Manageuser.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _webapi, _webapiadmin } from '../BaseAPIurls';
import { useNavigate } from 'react-router-dom';

function Manageuser() {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        axios.get(_webapiadmin + "manageusers").then((result) => {
            setUserDetails(result.data.userDetails);
        })
    }, []);

    const manageUserStatus = (_id, s) => {
        // alert(_id + "-------" + s);
        var apiURL = _webapiadmin + "manageuserstatus?s=" + s + "&regid=" + _id
        axios.get(apiURL).then((result) => {
            window.location.reload();
        })
    }

    return (
        <div id="about" class="about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="about-box">


                            <h3>view and Manageuser Details </h3>
                            <br />
                            <table class="table table-bordered">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    userDetails.map((row) => (
                                        <tr>
                                            <td>{row._id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.mobile}</td>
                                            <td>{row.address}</td>
                                            <td>{row.city}</td>
                                            <td>{row.gender}</td>
                                            <td>{row.info}</td>
                                            <td>
                                                {row.status == 0 &&
                                                    <a id="verify" onClick={() => { manageUserStatus(row._id, "verify") }}>Verify User</a>
                                                }
                                                {row.status == 1 &&
                                                    <a id="block" onClick={() => { manageUserStatus(row._id, "block") }} >Block User</a>

                                                }
                                            </td>
                                            <td>
                                                <a id="delete" onClick={() => { manageUserStatus(row._id, "delete") }} >Delete User</a>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </table>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Manageuser; 