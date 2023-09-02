import './Addcategory.css';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIurls';

import React, { useState } from 'react';

function Addcategory() {

    const [file, setFile] = useState()
    const [catName, setCatName] = useState();
    const [output, setOutput] = useState();

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = _webapiadmin + '/addcategory';
        const formData = new FormData();
        formData.append('catnm', catName);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        //console.log(formData);
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
            setOutput("Category Added Successfully....");
        });

    }

    return (


        <div class="row , about">
            <div class="col-1"></div>
            <div class="col-6 pt-5 mb-5" id="addsubcategory">
                <h2>Add Category here!!</h2>
                <font style={{ 'color': 'blue', 'font-weight': '800', 'font-size': '16px' }}>{output}
                </font>
                <form onSubmit={handleSubmit} >
                    <div class="mb-3">
                        <label for="catname" class="form-label">Category Name:</label>
                        <input type="text" value={catName} onChange={e => setCatName(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label for="caticon" class="form-label">Category Icon:</label>
                        <input type="file" onChange={handleChange} />
                    </div>

                    <button type="submit" class="btn btn-success" value="Add  Category">Add Category
                    </button>
                </form>

            </div>

        </div>
    );
}

export default Addcategory;