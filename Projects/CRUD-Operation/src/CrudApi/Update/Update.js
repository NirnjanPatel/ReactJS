import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigbar from "../../Task_1/Navigbar";
import { json } from "react-router";
import { useNavigate } from "react-router";

const Update = () => {
    const navigate =useNavigate();
  const [data, setData] = useState({});
//   const [ID,setID] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name+" "+value)
    setData({ ...data, [name]: value });
  };

  const sendDataToApi = () => {
    if (data.name && data.address && data.company && data.email && data.phone) {
      axios.put(`https://63a2e940471b38b2060026fc.mockapi.io/Crud/${data.id}`, data)
      .then(()=>{
        navigate('/read')
      })
      setData({
        name: "",
        email: "",
        address: "",
        phone: "",
        company: "",
      });
      toast("Data is Updated Successfully");
    }
  };

  useEffect(() => {
    const details = localStorage.getItem('data');

    // setData(localStorage.getItem('name','email','address','phone','company'));

    // setData(data);
    const dt = JSON.parse(details);
    // console.log(dt);
    setData(dt)
    // setID(localStorage.getItem())
  }, []);

  return (
    <div>
      <Navigbar />
      <Form style={{ borderRadius: "10px", backgroundColor: "#a9c8ff",width:"max-content",marginInline: "auto"}}>
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            placeholder="Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={data.address}
            placeholder="Address"
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={data.phone}
            placeholder="Phone"
          />
        </Form.Field>
        <Form.Field>
          <label>Company</label>
          <input
            type="text"
            name="company"
            onChange={handleChange}
            value={data.company}
            placeholder="Company"
          />
        </Form.Field>
        <Button class="btn btn-danger" onClick={sendDataToApi} type="submit">
          Update
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Update;
