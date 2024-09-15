import { useEffect, useState } from 'react'
import { getProductoDetails } from '../asyncmock'
import DetailsCard from './cards/DetailsCard'
import { useParams } from 'react-router-dom'

const ItemDetailsConteiner = (greeting) => {
    
    const [productDetails, setProductDetails] = useState(null)
    const [cargando, setCargando] = useState(true)

    const {idItem} = useParams()

    useEffect(()=>{                  
        console.log(typeof(idItem))       //1 hora, buscando el error :ccc 
        getProductoDetails(parseInt(idItem))// no se porque lo cambia a string
        .then(response => {setProductDetails(response), setCargando(false)})
        .catch (error => console.log(error))
    }, [idItem])
  
    
    
    return (
    <>  
        <h2 className='main_h2'>{greeting.title}</h2>

        <section className='contenedor_detalles'>

        { cargando ? <h3 className='cargando'>Detallado Producto...</h3>
            :
            <DetailsCard key={productDetails.id} {...productDetails}/>
        }
        </section>
    </>
  )
}

export default ItemDetailsConteiner