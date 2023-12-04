import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/add" element={<CreateUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </Router>
  );
};

export default App;