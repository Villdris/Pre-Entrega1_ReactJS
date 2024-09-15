import './navbar.css'
import NavbarChildSection from './NavbarChildSection'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'



const NavbarChild = () => {
  return (
    <>
      <ul className='nav_ul'>

        <NavLink to='/categoria/Living'>
            <NavbarChildSection section='Living'/>
        </NavLink>

        <NavLink to='/categoria/Habitación'>
          <NavbarChildSection section='Habitacion'/>
        </NavLink>

        <NavLink to='/categoria/Cocina'>
          <NavbarChildSection section='Cocina'/>
        </NavLink>  

        <NavLink to='/categoria/Accesorios'>
          <NavbarChildSection section='Accesorios'/>
        </NavLink>

        <Link to='/'>HOM</Link>


          <CartWidget/>
      </ul>
    </>
  )
}

export default NavbarChild