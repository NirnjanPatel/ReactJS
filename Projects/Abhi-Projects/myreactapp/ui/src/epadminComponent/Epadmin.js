import './Epadmin.css';

import React, { useState } from 'react';

function Epadmin() {

    const [users, setUsers] = useState();

    return (
        <div class="row , about-search">
            <div class="col-1"></div>
            <div class="col-6 pt-4 mb-5" id="addsubcategory">
                <h2>Edit Profile Here</h2>
                <font style={{ 'color': 'blue', 'font-weight': '800', 'fontsize': '16px' }}>
                    {/* {output} */}
                </font>

                <form method="post" action="/admin/epadmin">

                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" name="name" value="" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" name="email" readonly
                            value="<%- userDetails.email%>" />
                    </div>
                    <div class="mb-3">
                        <label for="mobile" class="form-label">Mobile</label>
                        <input type="text" class="form-control" id="mobile" name="mobile" value="" />
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">address</label>
                        <textarea class="form-control" name="address" id="address"
                            rows="3"> </textarea>

                    </div>
                    <div>
                        <label for="city" value="">City:</label>
                        <select class="form-control" id="city" name="city" aria-label="Default select example">
                            <option>

                            </option>
                            <option>Pune</option>
                            <option>Indore</option>
                            <option>Dewas</option>
                            <option>Bhopal</option>
                        </select>
                    </div>
                    <div>
                        <label for="check">Gender:</label>&nbsp;&nbsp;
                        <input type="radio" name="gender" id="male" value="male" />Male
                        &nbsp;&nbsp;
                        <input type="radio" name="gender" id="female" value="female" />Female
                        &nbsp;&nbsp;
                    </div>

                    <button type="submit" class="btn btn-success">Update</button>
                </form>

            </div>

        </div>
    );
}

export default Epadmin;