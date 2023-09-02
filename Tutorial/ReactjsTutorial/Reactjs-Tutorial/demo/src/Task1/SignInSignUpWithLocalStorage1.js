import React,{useRef,useEffect, useState} from 'react';
import HomePage from '../pages/Home';
import './SignInSignUpWithLocalStorage.css';

function SignInSignUpWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const [showHome, setShowHome] = useState(false);
  const localSignUp = localStorage.getItem("signUp");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
  }
})

  const handleClick = () => {
 
    if (name.current.value && email.current.value && password.current.value) {
  // set item to local storage
  localStorage.setItem("name", name.current.value);
  localStorage.setItem("email", email.current.value);
  localStorage.setItem("password", password.current.value);
  localStorage.setItem("signUp", email.current.value);
  alert("Account Created Successfully.......!!!!!! ")
    }
  }

  // retrieve item from local storage
  // document.getElementById('name').innerHTML = localStorage.getItem("name");
  // document.getElementById('email').innerHTML = localStorage.getItem("email");
  // document.getElementById('password').innerHTML = localStorage.getItem("password");
  
    return (
        <div>
            {showHome ? <HomePage /> :
                <div className='container'>
                    <div className='loginForm'>
                        <div className='input_space'>
                            <input placeholder='Enter your name' type="text" ref={name} />
                        </div>
                        <span id='name'></span><br />
                        <div className='input_space'>
                            <input placeholder='Enter your email' type="email" ref={email} />
                        </div>
                        <span id='email'></span><br />
                        <div className='input_space'>
                            <input placeholder='Enter your password' type="password" ref={password} />
                        </div>
                        <span id='password'></span><br />
                        <button onClick={handleClick} >Sign Up..!</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default SignInSignUpWithLocalStorage;