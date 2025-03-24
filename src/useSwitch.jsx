// CUSTOM-HOOKS
/*
Per creare dei CUSTOM-HOOKS con REACT, è fondamentale che il componente si chiami"useNome".
La creazione di CUSTOM-HOOKS è fondamentale per gestire, alleggerire e centralizzare il nostro codice
qualora si necessitasse di logiche da ripetere e usare in più contesti, anche differenti tra loro.

Proprio come i COMPONENTS, i CUSTOM-HOOKS devono essere dichiarati; in questo caso si parla di funzioni dichiarative.
In seguito devono essere esportati.

Importantissimo ricordare che i CUSTOM-HOOKS possono usare al loro interno gli HOOKS di REACT (useEffect, useState, etc..),
e che la cosa più comoda è scriverne la logica in un file a parte come questo, per poi importarlo dove ci serve,
proprio come un qualsiasi altro componente.

Il vantaggio dei CUSTOM-HOOKS è che scroporo la logica dai COMPONENTS in cui vengono utilizzati.
*/



// UTILITY
import { useState } from "react";



// DICHIARAZIONE CUSTOM-HOOK

/* Un parametro che si può passare è il valore iniziale (o di DEFAULT qualora manchi quello iniziale).
Per applicare un DEFAULT basta mettere "parametro = valore di default". In questo caso sto usando FALSE come DEFAULT.*/
export default function useSwitch(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue)

    const toggle = () => {
        // Ricordiamoci che i SET di useState accettano come argomento il valore corrente (qui chiamato "curr").
        // In questo caso, trattandosi di un BOOLEANO, imposto tramite toggle il valore opposto a quello corrente.  
        setIsOn(curr => !curr)
    }

    // Nel RETURN specifico l'array di elementi di questo CUSTOM-HOOK che voglio restituire.
    // Li potrò usare nel componente in cui li importo tramite DESTRUCTURING se voglio.
    return [isOn, toggle];

    /*
    NOTA FONDAMENTALE
    
    ***** ARRAY *****
    in questo caso sto esportando un ARRAY con dentro i miei valori/funzioni.
    Se utilizzo un ARRAY, nel DESTRUCTURING sul COMPONENT posso cambiare anche nome a queste variabili,
    perchè tanto viene considerato il loro INDEX (vedi esempio nel COMPONENT).

    ***** OBJECT *****
    Se passo questi valori in un OBJECT, invece non posso cambiare il loro nome nel COMPONENT, perchè
    in questo caso devo utilizzarli richiamandoli col nome della loro KEY.

    */

}

// Per vederne l'utilizzo, andare su App.jsx


