import PropTypes from 'prop-types';

const BotonAgregarAlCarrito = ({funcionAgregar, contador}) => {
    return (
        <div className='card_footer_button'>
            <button className='footer_button' onClick={() => funcionAgregar(contador)}>Agregar</button>
        </div>
    )
}


BotonAgregarAlCarrito.propTypes = {
    funcionAgregar: PropTypes.func.isRequired,
    contador: PropTypes.number.isRequired
}

export default BotonAgregarAlCarrito;