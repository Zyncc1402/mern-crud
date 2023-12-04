import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState([]);
  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/users/" + id);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/users/").then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="table">
            <Link to="/create">
              <button className="operationBtn blue addUserBtn">Add User</button>
            </Link>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Address</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, id) => {
                  return (
                    <tr className="active-row" key={id}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>
                        {user.address.street}
                        <br /> {user.address.suite}
                        <br /> {user.address.city}
                        <br /> {user.address.zipcode}
                      </td>
                      <td className="operations">
                        <Link to={`/update/${user._id}`}>
                          <button className="operationBtn blue">Update</button>
                        </Link>
                        <button
                          className="operationBtn red"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
