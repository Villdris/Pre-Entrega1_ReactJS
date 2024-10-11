import './notificaciones.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const NotifiAgregar = ({ nombreMueble, mostrar, cuantas, img}) => {
  const [visible, setVisible] = useState(false);
  const [tipoNotificacion, setTipoNotificacion] = useState('');

  useEffect(() => {
    if (mostrar) {
      if (cuantas === 0) {
        setTipoNotificacion('advertencia');
      } else {
        setTipoNotificacion('agregar');
      }

      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [mostrar, cuantas]);

  return (
    visible && (
      <div className={`notificacion ${tipoNotificacion}`}>
          {tipoNotificacion === 'advertencia' ? (
            <div className='notifi_advertencia'>
              <p>Debes especificar la cantidad antes de agregar al carrito.</p>
            </div>
          ) 
          :
          ( <div className='notifi_detalles'>
              <h2>Acabas de Agregar al Carrito</h2>
              <p>{cuantas}x <strong>{nombreMueble}</strong></p>
              <div className='notifi_img'>
                <img src={img} alt={nombreMueble}/>
              </div>
            </div>
        )}
      </div>
    )
  );
};

NotifiAgregar.propTypes = {
  nombreMueble: PropTypes.string.isRequired,
  mostrar: PropTypes.bool.isRequired,
  cuantas: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default NotifiAgregar;