import PropTypes from 'prop-types';

const OrdenCard = ({ mueble, cantidad }) => {

  const precioFinal = (precio, multiplicar) => {
    return precio * multiplicar;
  }

  const precioConPunto = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <article className="card_orden">
      <p>{cantidad}x {mueble.nombre}........{precioConPunto(precioFinal(mueble.precio, cantidad))}</p>
    </article>
  );
}

OrdenCard.propTypes = {
  mueble: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  cantidad: PropTypes.number.isRequired,
};

export default OrdenCard;