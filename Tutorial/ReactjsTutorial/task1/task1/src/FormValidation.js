import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function FormValidation() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    // }
    return (
        <div class='container mt-5' style={{marginTop:"100px", backgroundColor:"GrayText"}}>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" style={{ backgroundColor: "Highlight",  }}>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                    />
                </Form.Field>
                {/* {errors.firstName && <p>Please check the First Name</p>} */}
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                    />
                </Form.Field>
                {/* {errors.lastName && <p>Please check the Last Name</p>} */}
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                     
                    />
                </Form.Field>
                {/* {errors.email && <p>Please check the Email</p>} */}
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        
                    />
                </Form.Field>
                {/* {errors.password && <p>Please check the Password</p>} */}
                <Button type='submit'>Submit</Button>
            </Form>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    )
}

export default FormValidation;