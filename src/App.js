import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.
  console.log(unfaelle[unfaelle.length -1]);
  console.log(unfaelle[unfaelle.length -1].id_unfall);
  console.log(unfaelle[unfaelle.length -1].schwere);
  const idUndSchwere = `${unfaelle[unfaelle.length -1].id_unfall}:${unfaelle[unfaelle.length -1].schwere}`;
  
  const unfaelleNebenstrassen = unfaelle.filter(a=> a.strasseart === "Nebenstrasse");
  console.log(unfaelleNebenstrassen)

  const unfallVelo = unfaelle.find(b=> b.jahr === "2015" && b.monat=== 11 && b.fahrrd_bet === true)  
  console.log(unfallVelo)
  
  return (
    <div className="App">
      <div>{idUndSchwere}</div> 
    </div>
  );
}
