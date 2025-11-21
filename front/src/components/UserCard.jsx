import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user, refreshUsers }) {
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if (!confirmDelete) return; // si l'utilisateur annule, ne fait rien

    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      refreshUsers(); // rafraîchit la liste après suppression
    } catch (err) {
      console.error(err);
    }
  };

  const editUser = () => {
    navigate(`/edit-user/${user.id}`);
  };

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Téléphone :</strong> {user.phone}</p>
      <p><strong>Sexe :</strong> {user.gender}</p>
      <p><strong>Pays :</strong> {user.country}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button 
          onClick={() => deleteUser(user.id)} 
          style={{ backgroundColor: "#e74c3c", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
        >
          Supprimer
        </button>
        <button 
          onClick={editUser} 
          style={{ backgroundColor: "#3498db", color: "#fff", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}
