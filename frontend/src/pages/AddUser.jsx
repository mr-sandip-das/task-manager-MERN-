
import React, { useState } from "react";
import "../assets/style/AddUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  let navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handelForm= async (e)=>{
    e.preventDefault();
     let data=await axios.post("http://localhost:2000/user/add-user",{name,email,password});
     console.log(data.data.data);
     setEmail("");
     setName("");
     setPassword("");

     navigate("/");
      
  }
  return (
    <div className="add-user-page">
      <div className="add-user-card">
        <h1>Add User</h1>

        <form className="add-user-form" method="post" onSubmit={handelForm}>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            required
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
