import logo from './logo.svg';
import './App.css';
import SignUp from './Task1/SignUp';
import Login from './Task1/Login';
import HomePage from './Task1/HomePage';
import { Route , BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Login /> */}
      {/* <Formmm/> */}
    </div>
  );
}

export default App;
