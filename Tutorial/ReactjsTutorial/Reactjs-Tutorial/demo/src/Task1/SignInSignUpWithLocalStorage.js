import React,{useRef,useEffect, useState} from 'react';
import HomePage from '../pages/Home';
import './SignInSignUpWithLocalStorage.css';

function SignInSignUpWithLocalStorage() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confimPassword = useRef();
  const mobileNumber = useRef();

  // const [showHome, setShowHome] = useState(false);

  // const handleClick = () => {
  //   if (name.current.value && email.current.value && password.current.value) {
  // // set item to local storage
  // localStorage.setItem("name", name.current.value);
  // localStorage.setItem("email", email.current.value);
  // localStorage.setItem("password", password.current.value);
  // alert("Account Created Successfully.......!!!!!! ")
  //   }
  // }

  return (
    <div>
      <div className='container'>
        <div className='loginForm'>

          <div className='input_space'>
            <input placeholder=' Enter your first name' type="text" ref={firstName} />
          </div>
          <span id='firstName'></span><br />

          <div className='input_space'>
            <input placeholder=' Enter your last name' type="text" ref={lastName} />
          </div>
          <span id='lastName'></span><br />

          <div className='input_space'>
            <input placeholder=' Enter your email' type="email" ref={email} />
          </div>
          <span id='email'></span><br />
          
          <div className='input_space'>
            <input placeholder=' Enter password' type="password" ref={password} />
          </div>
          <span id='password'></span><br />
          
          <div className='input_space'>
            <input placeholder=' Confirm password' type="password" ref={confimPassword} />
          </div>
          <span id='confimPassword'></span><br />
          
          <div className='input_space'>
            <input placeholder=' Enter contact number' type="text" ref={mobileNumber} />
          </div>
          <span id='mobileNumber'></span><br />

          <button type='button'  >Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpWithLocalStorage;