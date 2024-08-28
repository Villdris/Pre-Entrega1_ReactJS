import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Main   from './components/main/Main.jsx'

export const App = () => {
  return (
    <>
    <Header title='Muebles Marolio' subtitle='Diseño y confort en cada rincón'/>
    <Navbar/>
    <Main/>
    </>
  )
}

export default App