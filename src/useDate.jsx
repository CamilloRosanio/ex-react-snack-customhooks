// UTILITY
import { useEffect, useState } from "react";



// DICHIARAZIONE CUSTOM-HOOK
export default function useDate() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // CLEAN-UP FUNCTION
        // Devo ricordarmi in questo caso di "ripulire" l'intervallo altrimenti vengono creati in memoria molteplici interval che proseguono senza senso al ri-montaggio del componente dove vengono usati. In questo modo invece, li interrompo dopo che hanno svolto la loro funzione.
        return () => {
            clearInterval(interval);
        }
    }, [])

    return currentDate;

}


// Per vederne l'utilizzo, andare su App.jsx