import NavbarChildCart from '../navbar/CartWidget'
import './main.css'
import ItemListConteiner from './ItemListConteiner'

const Main = () => {
  return (
    <main className='main'>
        <NavbarChildCart/>
        <ItemListConteiner title='ItemListConteiner'/>
    </main>
  )
}

export default Main