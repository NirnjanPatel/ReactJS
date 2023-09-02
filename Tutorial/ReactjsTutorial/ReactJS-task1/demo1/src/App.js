import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>

    </div>

  );
}

export default App;