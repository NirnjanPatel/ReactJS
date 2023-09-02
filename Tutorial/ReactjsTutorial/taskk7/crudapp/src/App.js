import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Delete from "./components/Delete";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit" element={<Edit />} />
          <Route exact path="/delete" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
