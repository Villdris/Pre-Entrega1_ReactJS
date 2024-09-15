import './card.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const SimpleCard = ({nombre, precio, img, id}) => {
    
    const precioConPunto = (n)=>{
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    
    return (
        <Link to={`/item/${id}`}>
        <article className="simpleCard">
            <div className="simpleCard_img">
                <img src={img} alt="" />
            </div>

            <div className="simpleCard_info">
                <h3 className='info_marca'>Muebles Marolio</h3>
                <h3 className="info_nombre">{nombre}</h3>
                <p className='info_precio'>${precioConPunto(precio)}</p>
            </div>

            <div className='simpleCard_envio_armado'>
                <p className='envio'>Envios gratis</p>
                <p className='armado'>Servicio de Armado</p>
            </div>
        </article>
        </Link>
    );
};

SimpleCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    };
