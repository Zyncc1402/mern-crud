import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CreateUser = () => {

  const {id} = useParams()
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

  useEffect(() => {
    axios.get("http://localhost:3001/users/" + id)
    .then((res) => {
      setname(res.data.name)
      setusername(res.data.username)
      setemail(res.data.email)
      setpassword(res.data.password)
      setphone(res.data.phone)
      setwebsite(res.data.website)
      setstreet(res.data.address.street)
      setsuite(res.data.address.suite)
      setcity(res.data.address.city)
      setzipcode(res.data.address.zipcode)
    });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/users/update/" + id, {
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
        <h1>Update User</h1>
        <div className="card">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="input"
              required
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Username"
              className="input"
              required
              onChange={(e) => setusername(e.target.value)}
              value={username}
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              required
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              required
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="input"
              required
              onChange={(e) => setphone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              placeholder="Website"
              className="input"
              required
              onChange={(e) => setwebsite(e.target.value)}
              value={website}
            />
            <input
              type="text"
              placeholder="Street"
              className="input"
              required
              onChange={(e) => setstreet(e.target.value)}
              value={street}
            />
            <input
              type="text"
              placeholder="Suite"
              className="input"
              required
              onChange={(e) => setsuite(e.target.value)}
              value={suite}
            />
            <input
              type="text"
              placeholder="City"
              className="input"
              required
              onChange={(e) => setcity(e.target.value)}
              value={city}
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input"
              required
              onChange={(e) => setzipcode(e.target.value)}
              value={zipcode}
            />
            <button type="submit" className="operationBtn blue addBtn">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
