import axios from "axios";
import React from "react";
import "../assets/style/UserTable.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserTable() {

  const [data1,setData]=useState([]);

  const CullectData=async ()=>{
    let {data}=await axios.get("http://localhost:2000/user/user-data");
    setData(data.data);
    console.log(data1);
    
  }
  CullectData();
  return (
    <div className="user-table-page">
      <div className="user-table-container">
        <h1>User List</h1>
        <Link to="/add-user"><button>ADD User</button></Link>

        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Sandip Das</td>
              <td>sandip@example.com</td>
              <td>••••••••</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
