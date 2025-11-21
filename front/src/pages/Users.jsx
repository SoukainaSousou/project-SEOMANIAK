import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
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
    <div className="users-page">
      <div className="users-header-box">
        <h1 className="users-title">Gestion des utilisateurs</h1>
        <Link to="/add-user">
          <button
            style={{
              padding: "10px 15px",
              background: "#0F6CBD",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Ajouter un utilisateur
          </button>
        </Link>
      </div>

      <div className="user-cards-container">
        {users.length === 0 ? (
          <p className="empty-text">Aucun utilisateur pour le moment.</p>
        ) : (
          users.map(user => (
            <UserCard key={user.id} user={user} refreshUsers={refreshUsers} />
          ))
        )}
      </div>
    </div>
  );
}
