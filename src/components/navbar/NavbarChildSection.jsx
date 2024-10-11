import './navbar.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarChildSection = ({ section }) => {

  const convertirAMinusculas = (texto) => {
    return `/categoria/${texto.toLowerCase()}`;
  }

  return (
      <li className='nav_ul_li'>
        <NavLink to={convertirAMinusculas(section)}
            className={({ isActive }) => isActive ? 'ruta_actual' : ''}>
          {section}
        </NavLink>
      </li>
  );
}

NavbarChildSection.propTypes = {
  section: PropTypes.string.isRequired
};

export default NavbarChildSection;