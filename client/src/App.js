import "./App.css";
import CodeforInterview from "./components/CodeforInterview";
import NavBar from "./components/NavBar";
import Allusers from "./components/Allusers";
import Adduser from "./components/Adduser";
import Edituser from "./components/EditUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeforInterview />} />
        <Route path="/all" element={<Allusers />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element ={<Edituser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
