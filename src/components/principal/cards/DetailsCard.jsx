import './card.css'
import PropTypes from 'prop-types';

const DetailsCard = ({nombre, categoria, material, dimensiones, precio, stock, descripcion, img}) => {
  
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
      <div className='card_footer_button'>
        <button id='footer_button'>Agregar</button>
      </div>
    </div>
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
  id: PropTypes.number.isRequired
};


export default DetailsCard