import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams(); // récupère l'id de l'utilisateur depuis l'URL
  const navigate = useNavigate();

  // états pour le formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("");

  // récupérer les données de l'utilisateur
 useEffect(() => {
  axios.get(`http://localhost:5000/users/${id}`)
    .then(res => {
      const user = res.data;
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setGender(user.gender);
      setCountry(user.country);
    })
    .catch(err => console.error(err));
}, [id]);

  // soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${id}`, {
        name,
        email,
        phone,
        gender,
        country
      });
      navigate("/users"); // revenir à la liste après modification
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="user-form-container">
      <h2>Modifier l'utilisateur</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
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
          required
        />
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}
