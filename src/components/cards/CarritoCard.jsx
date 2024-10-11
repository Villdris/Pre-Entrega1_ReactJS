import { useContext } from 'react';
import { CartContext } from '../../usecontext/CartContext';

const CarritoCard = ({mueble, cantidad, img}) => {

    const {eliminarDelCarrito} = useContext(CartContext);

    const precioConPunto = (n)=>{
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const precioTotalPoritem = (precio, multiplicar)=>{
        return precio * multiplicar; 
    }

  return (
    <article className='card_carrito'>
        <div className='carrito_img'>
            <img src={img} alt="" />
        </div>
        <div className='carrito_detalles'>
            <h2>{mueble.nombre}</h2>
            <p>$ {precioConPunto(mueble.precio)} c/u</p>
            <p>Cantidad : {cantidad}</p>

            <p className='carrito_total'>Total: ${precioConPunto(precioTotalPoritem(mueble.precio, cantidad))}</p>
        </div>

        <div className='boton_eliminar'>
            <p onClick={()=>eliminarDelCarrito(mueble.id)}>Quitar</p>
        </div>

    </article>
  )
}

export default CarritoCard