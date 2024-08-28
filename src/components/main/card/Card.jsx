import './card.css'

const Card = () => {
  return (
   <article className='card'>
    <div className='card_header'>
      <div className='card_header_line'></div>
      <h4 className='card_header_title'>Habitacion</h4>
    </div>

    <div className='card_main'>
      <div className='card_main_front'>
        <h5 className='front_title'>Mesa</h5>
        <p className='front_subtitle'>Tipo Isla</p>
        <p className='front_price'>$40.000</p>
        <img className='front_img' src="https://www.ohcielos.com/images/thumbs/Apardor-con-puerta-y-tres-cajones-29888.jpg" alt="" />
      </div>
      <div className='card_main_details'>
        <p className='details_description'>Es una mesa linda, creado por el mismisimo Don Mario, nieto del Magnifico Don Marolio, dueño del Maroliodin</p>
        <p className='details_stock'>STOCK : 2</p>
      </div>
    </div>

    <div className='card_footer'>
      <div className='card_footer_createby'>
        <p className='createby_subtitle'>Creado por</p>
        <h5 className='createby_title'>El sobrino de Marolio</h5>
      </div>
      <div className='card_footer_button'>
        <button id='footer_button'>Agregar</button>
      </div>
    </div>
   </article>
  )
}

export default Card