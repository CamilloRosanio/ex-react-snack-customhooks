// IMPORT CUSTOM-HOOKS
import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";
import useKeyPress from "./useKeyPress";


function App() {

  // Qui dichiaro all'interno del COMPONENT gli elementi del mio hook che voglio utilizzare.
  const [isOn, toggle] = useSwitch();
  // Esempio con cambio nome delle variabili destrutturate:
  // const [isAltroNome, isAltroToggle] = useSwitch();

  const currentDate = useDate();

  // const customPointer = useCustomPointer(<span>🚀</span>);

  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
      {/* ESEMPIO CON NOMI VARIABILI IDENTICI */}
      <div className="debug">
        {/* Nel titolo sto usando il VALUE reattivo del mio hook personalizzato */}
        <h1>Il valore è: {isOn ? 'ON' : 'OFF'}</h1>

        {/* Nel bottone invece sto passando la funzione "toggle" da utilizzare al click */}
        <button onClick={toggle}>Cambia Stato</button>
      </div>


      {/* ESEMPIO CON NOMI VARIABILI CAMBIATI*/}
      <div className="debug">
        {/* Nel titolo sto usando il VALUE reattivo del mio hook personalizzato */}
        {/* <h1>Il valore è: {isAltroNome ? 'ON' : 'OFF'}</h1> */}

        {/* Nel bottone invece sto passando la funzione "toggle" da utilizzare al click */}
        {/* <button onClick={isAltroToggle}>Cambia Stato</button> */}
      </div>


      {/* SNACK 2 */}
      <div className="debug">
        <h2>Data e ora attuali:</h2>

        <p>{currentDate.toLocaleString()}</p>
      </div>


      {/* SNACK 3 */}
      {/* <div className="debug">
        <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
        {customPointer}
      </div> */}


      {/* BONUS */}
      <div className="debug">
        <h2>Tieni premuto Enter per testare il custom hook</h2>
        <p>{isEnterPressed ? '✅ Enter premuto!' : 'Aspettando input...'}</p>
      </div>
    </>
  )
}

export default App
