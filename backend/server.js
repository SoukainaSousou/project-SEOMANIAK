const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const DATA_FILE = path.join(__dirname, "users.json");

// Lire les utilisateurs
const readUsers = () => {
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
};

// Écrire les utilisateurs
const writeUsers = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
};

// GET all users
app.get("/users", (req, res) => {
  const users = readUsers();
  res.json(users);
});

// POST add user
// POST add user
app.post("/users", (req, res) => {
  const users = readUsers();

  const newUser = {
    ...req.body,
    id: Date.now() + Math.floor(Math.random() * 1000), // ID unique
  };

  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
});


// DELETE user
app.delete("/users/:id", (req, res) => {
  const users = readUsers();
  const idToDelete = Number(req.params.id);
  const filtered = users.filter(u => Number(u.id) !== idToDelete);
  writeUsers(filtered);
  res.status(200).json({ message: "Utilisateur supprimé" });
});

// Récupérer un utilisateur par id
app.get("/users/:id", (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
  res.json(user);
});

// Modifier un utilisateur
app.put("/users/:id", (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Utilisateur non trouvé" });

  users[index] = { ...users[index], ...req.body }; // met à jour les champs
  writeUsers(users);
  res.json(users[index]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
