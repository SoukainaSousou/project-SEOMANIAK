import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard({ users }) {
  // ---- STATISTIQUES ----
  const totalUsers = users.length;

  const hommes = useMemo(
    () => users.filter((u) => u.gender === "male").length,
    [users]
  );

  const femmes = useMemo(
    () => users.filter((u) => u.gender === "female").length,
    [users]
  );

  const utilisateursCetteSemaine = useMemo(
    () =>
      users.filter(
        (u) =>
          new Date(u.createdAt) >=
          Date.now() - 7 * 24 * 60 * 60 * 1000
      ).length,
    [users]
  );

  // Grouper par mois pour le graphique en ligne
  const donneesGraphiqueLigne = useMemo(() => {
    const usersParMois = users.reduce((acc, u) => {
      const mois = new Date(u.createdAt).toLocaleString("fr-FR", {
        month: "short",
      });
      acc[mois] = (acc[mois] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(usersParMois).map(([mois, count]) => ({
      mois,
      count,
    }));
  }, [users]);

  // Données pour le graphique circulaire (pie)
  const donneesGraphiqueCamembert = useMemo(
    () => [
      { name: "Hommes", value: hommes },
      { name: "Femmes", value: femmes },
    ],
    [hommes, femmes]
  );

  const COULEURS = ["#5B8FF9", "#FF8A8A"];

  return (
    <div className="dashboard-page">
      <h2 className="title">Tableau de bord</h2>

      {/* ---- CARTES DE STATISTIQUES ---- */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total d'utilisateurs</h3>
          <p className="number">{totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Nouveaux cette semaine</h3>
          <p className="number">{utilisateursCetteSemaine}</p>
        </div>
        <div className="stat-card">
          <h3>Hommes</h3>
          <p className="number">{hommes}</p>
        </div>
        <div className="stat-card">
          <h3>Femmes</h3>
          <p className="number">{femmes}</p>
        </div>
      </div>

      {/* ---- GRAPHIQUES CÔTE À CÔTE ---- */}
      <div className="graphs-row">
        {/* ----- GRAPHIQUE EN LIGNE ----- */}
        <div className="graph-section">
          <h3>Utilisateurs ajoutés par mois</h3>
          <LineChart
            width={500}
            height={280}
            data={donneesGraphiqueLigne}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#5B8FF9"
              strokeWidth={3}
            />
          </LineChart>
        </div>

        {/* ----- GRAPHIQUE CIRCULAIRE ----- */}
        <div className="graph-section">
          <h3>Répartition par genre</h3>
          <PieChart width={350} height={280}>
            <Pie
              data={donneesGraphiqueCamembert}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {donneesGraphiqueCamembert.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COULEURS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
