import { useState } from 'react';

const useContador = (inicial = 0) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => setContador(contador + 1);

    const decrementar = () => setContador(contador - 1);

    return { contador, incrementar, decrementar };
};

export default useContador;