import './principal.css'
import {getProductosMuebles, getProductoCategoria} from '../asyncmock'
import { useEffect, useState } from 'react'
import { SimpleCard } from './cards/SimpleCard'
import { useParams } from 'react-router-dom'

const ItemListConteiner = (greeting) => {
  const [muebles, setMuebles] = useState([]);
  const [cargando, setCargando] = useState(true);

  const {idCategoria} = useParams()
  
  useEffect(()=>{
    let FiltrarONo = idCategoria ? getProductoCategoria : getProductosMuebles;

    FiltrarONo(idCategoria)
      .then( response => {setMuebles(response), setCargando(false)})
      .catch(error => console.log(error))
  }, [idCategoria])


  return (
    <>
      <h2 className='main_h2'>{greeting.title}</h2>
      <section className='main_conteiner'>
        
        {cargando ? <h3 className='cargando'>Armando Muebles...</h3>
          : 
          muebles.map(mueble => <SimpleCard key={mueble.id} {...mueble}/>)
        }
        
      </section>
    </>
  )
}

export default ItemListConteiner