import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import EditUser  from "./pages/EditUser";
import Users from "./pages/Users";
import axios from "axios";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  const [users, setUsers] = useState([]);

  const refreshUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="main-modern">
          <Header />

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard users={users} />} />
              <Route
                path="/users"
                element={
                  <Users
                    users={users}
                    setUsers={setUsers}
                    refreshUsers={refreshUsers}
                  />
                }
              />
             <Route path="/edit-user/:id" element={<EditUser />} />
               <Route path="/add-user" element={<AddUser />} />  {/* Nouvelle page */}
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
}
