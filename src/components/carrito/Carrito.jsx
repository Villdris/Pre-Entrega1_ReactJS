import './carrito.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../usecontext/CartContext';
import CarritoCard from '../cards/CarritoCard';

const Carrito = () => {

  const {carrito, precioTotal, cantidadTotal} = useContext(CartContext);

  const precioConPunto = (n)=>{
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

  if(cantidadTotal === 0){
    return(
      <section className='carrito'>
        <h2>Tu Carrito Esta Vacio</h2>
        <div>
          <img src="../../../public/vacio.png" alt="" />
          <Link to='/'>Ir a la Tienda</Link>
        </div>
      </section>
    )
  }
  return(
    <section className='carrito'>
      <h2>Tu Carrito contiene: {cantidadTotal} productos </h2>
      {carrito.map(item=> <CarritoCard key={item.id} {...item}/>)}
      <p className='carrito_cantidadtotal'>Precio Total a pagar: <span>${precioConPunto(precioTotal)}</span></p>
      <Link to='/orden' className='footer_button'>Finalizar Compra</Link>
    </section>
  )

}

export default Carrito