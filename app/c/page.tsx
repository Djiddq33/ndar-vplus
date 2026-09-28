export default function C() {
  const films = ["ATLANTIQUE","XALÉ","DARO DUCK","TCHADWOOD","SAHEL","NDJAMENA"];
  return (
    <div style={{background:"#000", color:"#fff", minHeight:"100vh", padding:"20px"}}>
      <a href="/" style={{color:"#E50914", textDecoration:"none", fontWeight:"bold"}}>← NDAR VPLUS</a>
      <h1 style={{color:"#E50914", fontSize:"30px", marginTop:"20px"}}>DJIDDah Films</h1>
      <p style={{color:"#aaa"}}>Collection exclusive Tchad - Sénégal</p>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"15px", marginTop:"20px"}}>
        {films.map(n=>(
          <div key={n} style={{background:"#111", height:"180px", borderRadius:"10px", display:"flex", flexDirection:"column", justifyContent:"end", padding:"15px", border:"1px solid #222"}}>
            <div style={{fontWeight:"bold"}}>{n}</div>
            <div style={{fontSize:"12px", color:"#E50914", marginTop:"5px"}}>▶ Regarder</div>
          </div>
        ))}
      </div>
    </div>
  )
}
