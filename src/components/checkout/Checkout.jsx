import "./checkout.css"
import { useContext, useState, useEffect} from 'react';
import { CartContext } from '../../usecontext/CartContext';
import OrdenCard from '../cards/OrdenCard';
import Formulario from '../formulario/Formulario';

const Checkout = () => {
  
    const {carrito} = useContext(CartContext);
    const [historialLocal, setHistorialLocal] = useState('');

    const guardarHistorial = () => {
      if (carrito.length === 0) {
          return;
      }

      const nuevaCompra = {
          productos: carrito,
          fecha: new Date().toLocaleString(),
      };

      const nuevoHistorial = [...historialLocal, nuevaCompra];
      setHistorialLocal(nuevoHistorial);
      localStorage.setItem('historialCompras', JSON.stringify(nuevoHistorial));
  };


    useEffect(() => {
      const historialGuardado = JSON.parse(localStorage.getItem('historialCompras')) || [];
      setHistorialLocal(historialGuardado);
  }, []);
  
    return (
    <>
    <section className='orden'>

      <Formulario guardarHistorial={guardarHistorial}/>

      {carrito != "" && (<section>
        
        <h2>Resumen de tu carrito</h2>
        {carrito.map(item => <OrdenCard key={item.mueble.id} {...item}/>)}

      </section>)}
      
    </section>
    </>
  )
}

export default Checkout