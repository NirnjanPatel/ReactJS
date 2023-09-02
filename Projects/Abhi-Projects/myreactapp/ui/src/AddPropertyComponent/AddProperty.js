import './AddProperty.css';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIurls';

import { useEffect, useState } from 'react';

function AddProperty() {

    const [title, setTitle] = useState();
    const [file, setFile] = useState();
    const [catName, setCatName] = useState();
    const [description, setDescription] = useState();
    const [output, setOutput] = useState();
    const [scDetails, setSubCategoryDetails] = useState([]);

    useEffect(() => {
        axios.get(_webapiadmin + "fetchsubcategory").then((result) => {
            setSubCategoryDetails(result.data.scDetails);
        })
    }, []);

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('subcatname', catName);
        formData.append('description', description);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        //console.log(formData);
        axios.post(_webapiadmin + "addproperty", formData, config).then((response) => {
            setCatName("");
            setDescription("");
            // console.log(response.data);
            setOutput("Property Added Successfully....");
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
                        <label for="title" class="form-label">Title:</label>
                        <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label for="catname">Category Name:</label>
                        <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                            <option>Select Category</option>
                            {
                                scDetails.map((row) => (
                                    <option>{row.subcatname}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description:</label>
                        <textarea rows="4" cols="100" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>


                    <div class="mb-3">
                        <label for="caticon" class="form-label">Property Icon:</label>
                        <input type="file" class="form-control" onChange={handleChange} />

                    </div>

                    <button type="submit" class="btn btn-success" >Add Property
                    </button>
                </form>

            </div>

        </div>
    );
}

export default AddProperty;