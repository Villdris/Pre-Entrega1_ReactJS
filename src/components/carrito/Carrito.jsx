import './carrito.css'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../usecontext/CartContext';
import CarritoCard from '../cards/CarritoCard';
import HistorialCard from '../cards/HistorialCard';

const Carrito = () => {

  const {carrito, precioTotal, cantidadTotal} = useContext(CartContext);
  const [historial, setHistorial] = useState([]);

  const precioConPunto = (n)=>{
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

useEffect(() => {
  const historialGuardado = JSON.parse(localStorage.getItem('historialCompras')) || [];
  setHistorial(historialGuardado);
}, []);

  if(cantidadTotal === 0){
    return(
      <>
      <section className='carrito'>
        <h2>Tu Carrito Esta Vacio</h2>
        <div>
          <img src="../../../public/vacio.png" alt="" />
          <Link to='/'>Ver mas muebles...</Link>
        </div>
      </section>

      {historial.length > 0 && (
        <section className='historial'>
          <h2>Compras anteriores</h2>
          {historial.map((compra, index) => (
            <div key={index} className='historial_card'>
              <h3>Compra realizada el {compra.fecha}</h3>
                {compra.productos.map((producto) => (
                  <HistorialCard key={producto.id} {...producto} />
              ))}
          </div>
          ))}
        </section>
      )}

      
      </>

      
    )
  }
  return(
    <>
      <section className='carrito'>
        <h2>Tu Carrito contiene: {cantidadTotal} productos</h2>
          {carrito.map(item => <CarritoCard key={item.mueble.id} {...item}/>)}
        <p className='carrito_cantidadtotal'>Precio Total a pagar: <span>${precioConPunto(precioTotal)}</span></p>
        <Link to='/orden' className='footer_button'> --Pasar por caja-- </Link>
    </section>


    {historial.length > 0 && (
        <section className='historial'>
          <h2>Compras anteriores</h2>
          {historial.map((compra, index) => (
            <div key={index}>
              <h3>Compra realizada el {compra.fecha}</h3>
              {compra.productos.map((producto) => (
                <HistorialCard key={producto.id} {...producto} />
              ))}
            </div>
          ))}
        </section>
      )}
    </>
  )

}

export default Carrito