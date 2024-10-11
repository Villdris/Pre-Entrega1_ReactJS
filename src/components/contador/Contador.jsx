import PropTypes from 'prop-types';

import './contador.css'

import useContador from '../../customhooks/useContador';
import BotonAgregarAlCarrito from '../botonagregaralcarrito/BotonAgregarAlCarrito';

const Contador = ({stock, inicial, funcionAgregar}) => {
    const { contador, incrementar, decrementar } = useContador(inicial);

    const suma=()=> {if(contador < stock) incrementar()};
    const resta=()=> {if(contador > inicial) decrementar()};

    return (
        <>
        <div className='contador'>
            <button onClick={resta}>-</button>
            <p>{contador}</p>
            <button onClick={suma}>+</button>
        </div>

        <BotonAgregarAlCarrito funcionAgregar={funcionAgregar} contador={contador}/>
        </>
    );
};

Contador.propTypes = {
    stock: PropTypes.number.isRequired, // debe ser un número y es obligatorio
    inicial: PropTypes.number.isRequired, // debe ser un número y es obligatorio
    funcionAgregar: PropTypes.func.isRequired // debe ser una función y es obligatoria
};

export default Contador;