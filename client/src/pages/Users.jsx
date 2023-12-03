import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const Users = () => {

  const [user, setUser] = useState([{}]);

  useEffect(() => {
    axios.get('http://localhost:3001/users/')
    .then((res) => {
      setUser(res.data)
    })
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/users/' + id)
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="table">
            <Link to="/create">
              <button className="operationBtn blue">Add User</button>
            </Link>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>UID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, id) => {
                  return (
                    <tr className="active-row" key={id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
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