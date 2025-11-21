import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("");

  const navigate = useNavigate(); // pour rediriger après ajout

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !country) return;

    const newUser = {
      name,
      email,
      phone,
      gender,
      country,
      createdAt: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:5000/users", newUser);
      // rediriger vers la page des utilisateurs
      navigate("/users");
    } catch (err) {
      console.error(err);
    }

    // reset du formulaire
    setName("");
    setEmail("");
    setPhone("");
    setGender("male");
    setCountry("");
  };

  return (
    <div className="dashboard-page">
      <h2>Ajouter un utilisateur</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>
        <input
          type="text"
          placeholder="Pays"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
