// IMPORT CUSTOM-HOOK - useSwitch
import useSwitch from "./useSwitch";


function App() {

  // Qui dichiaro all'interno del COMPONENT gli elementi del mio hook che voglio utilizzare.
  const [isOn, toggle] = useSwitch();

  return (
    <>
      <div>
        {/* Nel titolo sto usando il VALUE reattivo del mio hook personalizzato */}
        <h1>Il valore è: {isOn ? 'ON' : 'OFF'}</h1>

        {/* Nel bottone invece sto passando la funzione "toggle" da utilizzare al click */}
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </>
  )
}

export default App
