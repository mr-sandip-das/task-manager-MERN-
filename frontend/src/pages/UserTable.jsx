import axios from "axios";
import React from "react";
import "../assets/style/UserTable.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function UserTable() {

  // ------- FETCH USER CODE -------- //

  const [data1, setData] = useState([]);

  const CullectData = async () => {
    let { data } = await axios.get("http://localhost:2000/user/user-data");
    setData(data.data);
    // console.log(data1, "data"); have confutuion 
  }

  useEffect(() => {
    CullectData();
  }, []);
  // console.log(data1, "data"); have confutuion  


  // ------- DELETE USER CODE -------- //


  async function deleteUser(id) {
    const de = await axios.delete(`http://localhost:2000/user/detete/${id}`);
    console.log("asdasdas", de);
    setData(data1.filter((u) => u._id !== id));
  }



  return (

    <div className="user-table-page">
      <div className="user-table-container">
        <h1>User List</h1>
        <Link to="/add-user">
          <button>ADD User</button>
        </Link>

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
            {
              data1.map((element, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.password}</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn" onClick={() => deleteUser(element._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
