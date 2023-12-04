import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState();
  const [website, setwebsite] = useState("");
  const [street, setstreet] = useState("");
  const [suite, setsuite] = useState("");
  const [city, setcity] = useState("");
  const [zipcode, setzipcode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/add", {
        name,
        username,
        email,
        password,
        phone,
        website,
        street,
        suite,
        city,
        zipcode,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div className="wrapper createWrapper">
      <div className="container">
        <h1>Add User</h1>
        <div className="card">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="input"
              required
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className="input"
              required
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              required
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone"
              className="input"
              required
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Website"
              className="input"
              required
              onChange={(e) => setwebsite(e.target.value)}
            />
            <input
              type="text"
              placeholder="Street"
              className="input"
              required
              onChange={(e) => setstreet(e.target.value)}
            />
            <input
              type="text"
              placeholder="Suite"
              className="input"
              required
              onChange={(e) => setsuite(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="input"
              required
              onChange={(e) => setcity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input"
              required
              onChange={(e) => setzipcode(e.target.value)}
            />
            <button type="submit" className="operationBtn blue addBtn">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;