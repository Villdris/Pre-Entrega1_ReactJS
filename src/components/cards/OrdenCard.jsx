const OrdenCard = ({mueble, cantidad}) => {

  const precioFinal = (precio, multiplicar)=>{
    return precio * multiplicar
  }

  const precioConPunto = (n)=>{
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

    return (
        <article className="card_orden">
          <p>{cantidad}x {mueble.nombre}........{precioConPunto(precioFinal(mueble.precio, cantidad))}</p>
      </article>
    )
}

export default OrdenCard