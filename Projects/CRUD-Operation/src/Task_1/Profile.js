import React from "react";
import Navigbar from "./Navigbar";

 function Profile(){

    const localData =  localStorage.getItem("Sign-up Details")
    const sData = JSON.parse(localData);

    const fName = sData.firstName ;
    const lName = sData.lastName;
    const email = sData.mail;
    // const password = sData.password;
    // const confirmPassword = sData.confirmPassword;
    const contact = sData.contact;

    // console.log(sData)

//     for (let i in sData)
// {
//     // console.log(sData[i]);
// }
    return(
        <div>
        <Navigbar />
        <div class="bg-light">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 mt-5 pt-5">
                        <div class="row z-depth-3">
                            <div class="col-sm-4 bg-info rounded-left">
                                <div class="card-block text-center text-white">
                                    <i class="fas fa-user-tie fa-7x mt-5"></i>
                                    <h2 class="font-weight-bold mt-4">{fName}</h2>
                                    <p>{lName}</p>
                                    <i class="far fa-edit fa-2x mb-4"></i>
                                </div>
                            </div>
                            <div class="col-sm-8 bg-white rounded-right">
                                <h3 class="mt-3 text-center">Profile</h3>
                                <hr class="badge-primary mt-0 w-25" />
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="font-weight-bold">Email:</p>
                                        <h6 class="text muted">{email}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="font-weight-bold">Contact:</p>
                                        <h6 class="text muted">{contact}</h6>
                                    </div>
                                </div>
                                <h4></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile;