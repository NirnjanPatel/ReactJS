import './Contact.css';

import React, { useState } from 'react';

function Contact() {

    const [users, setUsers] = useState([{ "uid": 1, "username": "admin", "password": 12345 }, { "uid": 2, "username": "abhishek", "password": 12345 }, { "uid": 3, "username": "ab", "password": 123321 }]);

    return (
        <div id="about" class="about">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                        <table class="table table-bordered">
                            <tr>
                                <th>UserId</th>
                                <th>Username</th>
                                <th>password</th>
                            </tr>
                            {
                                users.map((row) => (
                                    <tr>
                                        <td>{row.uid}</td>
                                        <td>{row.username}</td>
                                        <td>{row.password}</td>
                                    </tr>
                                ))
                            }
                        </table>


                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;