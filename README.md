Titre du projet : Dashboard Utilisateur – React + Node.js

# 📍 Stack utilisée :

Frontend : React (React Router v6, Axios)

Backend : Node.js, Express

Base de données : Fichier JSON (users.json)

Style : CSS custom

# Description du projet

Cette application permet de gérer des utilisateurs :

Ajouter un utilisateur

Supprimer un utilisateur

Modifier un utilisateur

Afficher la liste des utilisateurs

# Le projet est divisé en frontend et backend :

Frontend : pages React pour l’interface utilisateur et les formulaires

Backend : API RESTful Express pour gérer les utilisateurs avec un fichier JSON

# Installation et lancement

# Backend
cd backend
npm install
node server.js

L’API sera accessible sur : http://localhost:5000

# Frontend
cd frontend
npm install
npm start

L’application sera accessible sur : http://localhost:3000
# Routes API :

/users: GET	Liste des utilisateurs
/users: POST  	Ajouter un utilisateur
/users/:id: PUT	 Modifier un utilisateur
/users/:id: DELETE	Supprimer un utilisateur

# Structure :
Test_Seomaniak_PrénomNom_2025/
├─ backend/                # Dossier backend Node.js / Express
│  ├─ users.json           # Fichier de stockage JSON des utilisateurs
│  ├─ package.json         # Dépendances Node.js
│  └─ server.js            # Fichier principal du serveur Express
│
├─ frontend/               # Dossier frontend React
│  ├─ public/
│  │  └─ index.html
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ UserCard.jsx
│  │  │  ├─ UserForm.jsx
│  │  │  └─ Logo.jsx
│  │  ├─ pages/
│  │  │  ├─ Users.jsx
│  │  │  ├─ AddUser.jsx
│  │  │  ├─ EditUser.jsx
│  │  │  └─ Dashboard.jsx
│  │  ├─ App.jsx
│  │  ├─ index.jsx
│  │  └─ styles.css
│  ├─ package.json
│  └─ README.md
│
├─ README.md        # Présentation globale du projet
└─ .gitignore


