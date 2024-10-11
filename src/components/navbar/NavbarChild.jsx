import './navbar.css'
import NavbarChildSection from './NavbarChildSection'
import CartWidget from './CartWidget'
import {NavLink } from 'react-router-dom'



const NavbarChild = () => {
  return (
      <ul className='nav_ul'>

        <NavbarChildSection section='Living'/>
        <NavbarChildSection section='Habitacion'/>
        <NavbarChildSection section='Cocina'/>
        <NavbarChildSection section='Accesorios'/>

        <li className='nav_ul_li'>
        <NavLink to='/'
            className={({isActive})=> isActive ? 'ruta_actual ruta_actual_home' : ''}>
          HOME
        </NavLink>
        </li>
        <li className='nav_ul_li'>
          <CartWidget/>
        </li>
      </ul>
  )
}

export default NavbarChild