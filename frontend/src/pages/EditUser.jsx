
import React from "react";
import "../assets/style/EditUser.css";

function EditUser() {
  return (
    <div className="edit-user-page">
      <div className="edit-user-card">
        <h1>Edit User</h1>

        <form className="edit-user-form">
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            minLength={8}
            required
          />

          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
