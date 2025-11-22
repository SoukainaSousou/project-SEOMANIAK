# 📊 Dashboard Utilisateur – React + Node.js

## 🔗 Lien GitHub

Lien du projet :  
https://github.com/SoukainaSousou/project-SEOMANIAK


## 📍 Stack utilisée

- **Frontend :** React (React Router v6, Axios)
- **Backend :** Node.js, Express
- **Base de données :** Fichier JSON (`users.json`)
- **Style :** Bootstrap 5 + CSS personnalisé

---

## 📝 Description du projet

Cette application est un **mini dashboard de gestion des utilisateurs (CRUD)**.  
Elle permet de :

- ➕ Ajouter un utilisateur  
- ✏️ Modifier un utilisateur  
- 🗑️ Supprimer un utilisateur  
- 📄 Afficher la liste des utilisateurs  
- 📊 Visualiser des statistiques simples sur le dashboard

Le projet est **séparé en deux parties** :

- **Frontend :** Interface utilisateur en React, avec des pages pour :
  - Dashboard
  - Liste des utilisateurs
  - Ajout d’un utilisateur
  - Modification d’un utilisateur

- **Backend :** API RESTful construite avec Express qui manipule un fichier JSON (`users.json`) jouant le rôle de base de données.

---

## 🚀 Installation & Lancement

### 1️⃣ Backend

cd backend
npm install
node server.js
L’API sera accessible sur : http://localhost:5000

### 2️⃣ Frontend

cd frontend
npm install
npm start
L’application sera accessible sur :  http://localhost:3000

### 🌐 Routes API


/users :	GET	Récupérer la liste des utilisateurs
/users :	POST	Ajouter un nouvel utilisateur
/users/:id :	PUT	Modifier un utilisateur existant
/users/:id :	DELETE	Supprimer un utilisateur

### 📂 Structure du projet

test-seomaniak-dashboard/
├─ backend/                 # Backend Node.js / Express
│  ├─ users.json            # Fichier de stockage JSON des utilisateurs
│  ├─ package.json          # Dépendances backend
│  └─ server.js             # Serveur Express (API REST)
│
├─ frontend/                # Frontend React
│  ├─ public/
│  │  └─ index.html
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ UserCard.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Logo.jsx
│  │  ├─ pages/
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Users.jsx
│  │  │  ├─ AddUser.jsx
│  │  │  └─ EditUser.jsx
│  │  ├─ App.jsx
│  │  ├─ index.jsx
│  │  └─ styles.css
│  ├─ package.json
│  └─ README.md
│
├─ README.md                # Présentation globale du projet
└─ .gitignore
