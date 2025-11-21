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
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary">Gestion des utilisateurs</h1>
        <Link to="/add-user" className="btn btn-primary">
          <i className="fas fa-user-plus me-2"></i> Ajouter un utilisateur
        </Link>
      </div>

      <div className="row">
        {users.length === 0 ? (
          <p className="text-muted">Aucun utilisateur pour le moment.</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="col-md-4 mb-4">
              <UserCard user={user} refreshUsers={refreshUsers} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
