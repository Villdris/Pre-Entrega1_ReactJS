import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../usecontext/CartContext"

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext);
  return (
      <NavLink to='/carrito' className={({ isActive }) => isActive ? 'ruta_actual_cart' : ''}>
        
        <span className="li_a_span">{cantidadTotal}</span>
        
        <img className='li_a_img' src="./truckicon.png" alt="carrito de compras"/>
      </NavLink>
  )
}

export default CartWidget