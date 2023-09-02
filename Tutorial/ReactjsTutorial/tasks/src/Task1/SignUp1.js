import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import './Eye';

const SignUp = () => {
    
    return (
        <div class="container mt-5">
            <div class="row ">
                <div class="col-md-3"></div>
                <div class="col-lg-6 col-md-6 p-3" style={{ background: "#e3dfee" }}>
                    <div class="about-text p-3">
                        <h2>Register Here!!!</h2>
                        <form>
                            <div class="form-group mt-5  p-3">
                                <input type="text" placeholder='Enter first name' class="form-control" id="firstName" name="firstName" />
                            </div>
                            <div class="form-group p-3">
                                <input type="text" placeholder='Enter last name' class="form-control" id="lastName" name="lastName" />
                            </div>
                            <div class="form-group p-3">
                                <input type="email" placeholder='Enter email' class="form-control" id="email" name="email" />
                            </div>
                            <div class="form-group p-3">
                                <input type="text" placeholder='Enter password' class="form-control" name="password" />
                                <i class="fa fa-eye-slash" id="show_hide_password" aria-hidden="true"></i>
                            </div>
                            <div class="form-group p-3">
                                <input type="password" placeholder='Confirm password' class="form-control" id="cPassword" name="cPassword" />
                            </div>
                            <div class="form-group p-3 maxlength=10">
                                <input type="text" placeholder='Enter mobile number' class="form-control" id="mobile" name="mobile" />
                            </div>
                            <button  type="submit" class="btn btn-primary col-lg-6">Sign Up</button>
                        </form>
                    </div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;