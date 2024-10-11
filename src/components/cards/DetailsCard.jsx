import './card.css'
import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import Contador from '../contador/Contador';
import { CartContext } from '../../usecontext/CartContext';
import NotifiAgregar from '../notificaciones/NotifiAgregar';
import { Link } from 'react-router-dom';

const DetailsCard = ({nombre, categoria, material, dimensiones, precio, stock, descripcion, img, id}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarAlCarrito}= useContext(CartContext);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio, img}
    agregarAlCarrito (item, cantidad, img);
    setMostrarNotificacion(true);
    
    setTimeout(() => {
      setMostrarNotificacion(false)
    }, 4000);
  }

  
  const precioConPunto = (n)=>{
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
  
  
  return (
    <article className='card'>
      <div className='card_header'>
        <div className='card_header_line'></div>
        <h3 className='card_header_title'>{categoria}</h3>
      </div>

      <div className='card_main'>
        <div className='card_main_front'>
          <h3 className='front_title'>{nombre}</h3>
          <p className='front_subtitle'>{material}</p>
          <p className='front_price'>${precioConPunto(precio)}</p>
          <img className='front_img' src={img} alt="" />
        </div>
        <div className='card_main_details'>
          <p className='details_description'>{descripcion}</p>
          <p className='details_stock'>STOCK : {stock}</p>
        </div>
      </div>

      <div className='card_footer'>
        <div className='card_footer_createby'>
          <p className='createby_subtitle'>Dimensiones</p>
          <p className='createby_title'>{dimensiones}</p>
        </div>

        <Contador stock={stock} inicial={0} funcionAgregar={manejadorCantidad}/>
      </div>
      <Link to='/carrito'>
        <NotifiAgregar
          nombreMueble={nombre}
          mostrar={mostrarNotificacion}
          cuantas={agregarCantidad}
          img={img}
        />
      </Link>
    </article>
  )
}

DetailsCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  dimensiones: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};


export default DetailsCard