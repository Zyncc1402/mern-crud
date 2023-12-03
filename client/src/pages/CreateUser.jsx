import { React, useState, useEffect } from 'react'
import axios from "axios";

const CreateUser = () => {

  const [name, setname] = useState("");
  const [age, setage] = useState();
  const [email, setemail] = useState("");
  const [phone, setphone] = useState();
  const [address, setaddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:3001/users/add")
      .then()
      .catch((err) => res.status(400).json("Error: " + err));
  }

  return (
    <div className="wrapper createWrapper">
      <div className="container">
        <h1>Add User</h1>
        <div className="card">
          <input
            type="text"
            placeholder="Name"
            className="input"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="input"
            onChange={(e) => setage(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone"
            className="input"
            onChange={(e) => setphone(e.target.value)}
          />
          <textarea
            type="text"
            cols="24"
            placeholder="Address"
            className="input"
            onChange={(e) => setaddress(e.target.value)}
          />
          <button
            type="submit"
            className="operationBtn blue addBtn"
            onSubmit={handleSubmit}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateUser