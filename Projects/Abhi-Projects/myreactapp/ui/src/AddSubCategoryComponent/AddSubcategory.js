import './AddSubcategory.css';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIurls';

import React, { useEffect, useState } from 'react';

function AddSubcategory() {

    const [file, setFile] = useState()
    const [catName, setCatName] = useState();
    const [subcatName, setSubCatName] = useState();
    const [output, setOutput] = useState();
    const [cDetails, setCategoryDetails] = useState([]);

    useEffect(() => {
        axios.get(_webapiadmin + "addsubcategory").then((result) => {
            setCategoryDetails(result.data.cDetails);
        })
    }, []);

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('catname', catName);
        formData.append('subcatname', subcatName);
        formData.append('caticon', file)
        const config = {
            'content-type': 'multipart/form-data'
        };
        //console.log(formData);
        axios.post(_webapiadmin + "addsubcategory", formData, config).then((response) => {
            setCatName("");
            setSubCatName("");
            // console.log(response.data);
            setOutput("Category Added Successfully....");
        });

    }

    return (


        <div class="row , about">
            <div class="col-1"></div>
            <div class="col-6 pt-5 mb-5" id="addsubcategory">
                <h2>Add Sub Category here!!</h2>
                <font style={{ 'color': 'blue', 'font-weight': '800', 'font-size': '16px' }}>{output}</font>

                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="catname">Category Name:</label>
                        <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                            <option>Select Category</option>
                            {
                                cDetails.map((row) => (
                                    <option>{row.catname}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="subcatname" class="form-label">Sub Category Name:</label>
                        <input type="text" class="form-control" value={subcatName} onChange={e => setSubCatName(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label for="caticon" class="form-label">Sub Category Icon:</label>
                        <input type="file" class="form-control" onChange={handleChange} />

                    </div>

                    <button type="submit" class="btn btn-success">Add Sub Category
                    </button>
                </form>

            </div>

        </div>
    );
}

export default AddSubcategory;