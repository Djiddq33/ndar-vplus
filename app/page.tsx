export default function Home() {
  return (
    <div style={{background:"#000", color:"#fff", minHeight:"100vh"}}>
      <header style={{padding:"20px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #222"}}>
        <h1 style={{color:"#E50914", fontWeight:"900", fontSize:"28px"}}>NDAR VPLUS</h1>
        <a href="/c" style={{background:"#E50914", color:"#fff", padding:"8px 16px", borderRadius:"4px", textDecoration:"none"}}>DJIDDah Films</a>
      </header>
      
      <div style={{padding:"40px 20px", textAlign:"center"}}>
        <h2 style={{fontSize:"48px", fontWeight:"bold", marginBottom:"20px"}}>Films, séries et plus<br/>en illimité.</h2>
        <p style={{fontSize:"20px", color:"#aaa", marginBottom:"30px"}}>Regarde où tu veux. Sans pub.</p>
        <a href="/c" style={{background:"#E50914", color:"#fff", padding:"15px 30px", fontSize:"20px", borderRadius:"4px", textDecoration:"none", display:"inline-block"}}>Voir les Films ▶</a>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"15px", padding:"20px"}}>
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} style={{background:"#111", aspectRatio:"2/3", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid #222"}}>
            Film {i}
          </div>
        ))}
      </div>
    </div>
  )
}
