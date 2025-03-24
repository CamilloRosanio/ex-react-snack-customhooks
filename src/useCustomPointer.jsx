// UTILITY
import { useEffect, useState } from "react";



// DICHIARAZIONE CUSTOM-HOOK
export default function useCustomPointer(component) {

    // Ci passiamo il "component" come parametro, cioè ciò che vogliamo mostrare al posto del cursore a freccia classico.

    const [position, setPosition] = useState({ x: 0, y: 0, });

    useEffect(() => {
        const handleMouseMove = event => {
            setPosition({ x: event.clientX, y: event.clientY })
        }

        document.addEventListener("mousemove", handleMouseMove);

        return () => document.removeEventListener('mousemove', handleMouseMove);

    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
                cursor: "none",
            }}
        >
            {component}
        </div>
    );

}

// SPIEGAZIONE
/*
Prima di tutto uso uno useState per definire le mie coordinate iniziali del cursore.
Dopodichè uso uno useEffect che aggiorni queste coordinate ad ogni spostamento del cursore.
Utilizzo in questo caso "clientX, clientY" invece della window perchè mi interessano le coordinate del cursore nella pagina web, non nella finestra intera.

Lo useEffect al montaggio del componente (ecco perchè dipendenze vuote []), aggiunge l'addEventListener che ci fornisce le nuove coordinate quando accade l'evento "mousemove", ed esegue appunto la funzione CALLBACK che gli abbiamo passato, cioè aggiornare lo useState.

Fondamentale eseguire subito dopo il REMOVE del Listener (CLEAN-UP FUNCTION).

RIASSUMENDO:
Ad ogni spostamento il listener viene montato, ci comunica l'aggiornamento delle coordinate, e poi viene smontato.
*/


// Per vederne l'utilizzo, andare su App.jsx