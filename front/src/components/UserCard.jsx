import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user, refreshUsers }) {
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      refreshUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const editUser = () => {
    navigate(`/edit-user/${user.id}`);
  };

  return (
    <div className="user-card" style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      marginBottom: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{user.name}</h3>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Téléphone :</strong> {user.phone}</p>
      <p><strong>Sexe :</strong> {user.gender}</p>
      <p><strong>Pays :</strong> {user.country}</p>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={() => deleteUser(user.id)}
          style={{
            backgroundColor: "#E74C3C", // rouge
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Supprimer
        </button>
        <button
          onClick={editUser}
          style={{
            backgroundColor: "#3498DB", // bleu
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}
