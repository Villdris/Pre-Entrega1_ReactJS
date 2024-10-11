import { useContext } from 'react';
import { CartContext } from '../../usecontext/CartContext';
import OrdenCard from '../cards/OrdenCard';
import Formulario from '../formulario/Formulario';

const Checkout = () => {
  
    const {carrito} = useContext(CartContext);
  
    return (
    <section className='orden'>
        <h2>Boleta o Factura</h2>

        {carrito.map(item => <OrdenCard key={item.id} {...item}/>)}

        <Formulario/>

    </section>
  )
}

export default Checkout