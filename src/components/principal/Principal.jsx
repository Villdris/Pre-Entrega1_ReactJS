import './principal.css'
import ItemListConteiner from './ItemListConteiner'
import CartWidget from '../navbar/CartWidget'

const principal = () => {

  return (
    <>
        
        <ItemListConteiner title='ItemListConteiner'/>

        <CartWidget/>

    </>
  )
}

export default principal