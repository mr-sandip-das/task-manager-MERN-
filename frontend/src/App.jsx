import React from 'react';
import AddUser from './pages/AddUser.jsx';
import EditUser from './pages/EditUser.jsx';
import UserTable from './pages/UserTable.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/" element={<UserTable />} />
    </Routes>
     </BrowserRouter>
     
  );
}

export default App;