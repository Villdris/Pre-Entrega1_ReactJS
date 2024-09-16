import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Principal from './components/principal/Principal.jsx'
import ItemListConteiner from './components/principal/ItemListConteiner.jsx'
import ItemDetailsConteiner from './components/principal/ItemDetailsConteiner.jsx'

export const App = () => {
  return (
    <>
      <Header 
        title='Muebles Marolio' 
        subtitle='Diseño y confort en cada rincón'
      />


      <BrowserRouter>

          <Navbar/>
        <main className='main'>
          <Routes>
              <Route path='/' element={<Principal/>}/>
              <Route path='/categoria/:idCategoria' element={<ItemListConteiner title='ItemListConteiner'/>} />
              <Route path='/item/:idItem' 
                    element={<ItemDetailsConteiner title='ItemDetailsConteiner'/>}
              />
          </Routes>

        </main>

      </BrowserRouter>
    </>
  )
}

export default App