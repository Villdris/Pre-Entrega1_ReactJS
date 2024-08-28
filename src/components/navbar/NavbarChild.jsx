import './navbar.css'
import NavbarChildSection from './NavbarChildSection'
import CartWidget from './CartWidget'

const NavbarChild = () => {
  return (
    <>
      <ul className='nav_ul'>
          <NavbarChildSection section='Cocina'/>
          <NavbarChildSection section='Habitacion'/>
          <NavbarChildSection section='Accesorios'/>
          <CartWidget/>
      </ul>
    </>
  )
}

export default NavbarChild