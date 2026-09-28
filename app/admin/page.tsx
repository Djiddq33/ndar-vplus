"use client"
import { useState } from "react"

export default function AdminPage() {
  const [videos] = useState([
    { id: 1, titre: "Clip N'Djamena - Perso", user: "Djiddah33", statut: "En attente" },
    { id: 2, titre: "Danse Sabar Dakar", user: "Moussa_SN", statut: "En attente" },
  ])

  return (
    <div style={{padding: 20, background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif"}}>
      <h1>🔐 NDAR V+ - CONTROLE TOTAL A+B</h1>
      <p>Connecté en tant que: PATRON (Djiddah33)</p>
      <hr style={{margin: "20px 0"}} />
      <h2>Règle d'Or: PAS DE VIDEO VOLEE</h2>
      <p>Chaque vidéo doit être cochée: "Je jure que j'ai filmé moi-même"</p>

      {videos.map(v => (
        <div key={v.id} style={{border: "1px solid #333", padding: 15, marginTop: 15, borderRadius: 10}}>
          <b>{v.titre}</b> par {v.user} - {v.statut}
          <div style={{marginTop: 10, display: "flex", gap: 10}}>
            <button style={{background: "green", color: "white", padding: "8px 15px", borderRadius: 5, border: 0}}>✅ APPROUVER (Vert)</button>
            <button style={{background: "red", color: "white", padding: "8px 15px", borderRadius: 5, border: 0}}>❌ REFUSER - Volée (Rouge)</button>
            <button style={{background: "#444", color: "white", padding: "8px 15px", borderRadius: 5, border: 0}}>🚫 BANNIR</button>
          </div>
        </div>
      ))}

      <div style={{marginTop: 30, padding: 15, background: "#111", borderRadius: 10}}>
        <h3>💰 Monétisation LIVE - Ta Commission 20%</h3>
        <p>Lion du Tchad 🦁 = 5000 FCFA (toi tu prends 1000 FCFA)</p>
        <p>Thé à la menthe 🫖 = 1000 FCFA (toi tu prends 200 FCFA)</p>
      </div>
    </div>
  )
}
