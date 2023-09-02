import './App.css';
import SignupBootdtrap from './Task_1/SignupBootdtrap'
import Login from './Task_1/Login';
import Home from './Task_1/Home';
import {Routes, Route} from 'react-router-dom';
import Profile from "./Task_1/Profile.js"
import Error from './Task_1/Error';
import Userdetails from './Crudoperations/Userdetails';
import FetchApi from './Apies/FetchApi';
import Update from './CrudApi/Update/Update';
import Create from './CrudApi/Create/Create';
import Read from './CrudApi/Read/Read';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<SignupBootdtrap/>} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/userdetails" element={<Userdetails />} />
          <Route exact path='/fetchapi' element={<FetchApi />}/>    
          <Route exact path='/update' element={<Update />} />
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read />} />
          <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;