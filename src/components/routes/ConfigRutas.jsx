import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import ItemListConteiner from "../itemsconteiners/ItemListConteiner";
import ItemDetailsConteiner from "../itemsconteiners/ItemDetailsConteiner";
import { CartProvider } from "../../usecontext/CartContext";
import Carrito from "../carrito/Carrito";
import Checkout from "../checkout/Checkout";

const ConfigRutas = () => {
  return (
    <BrowserRouter>
      <Header 
        title='Muebles Marolio' 
        subtitle='Diseño y confort en cada rincón'
      />

      <CartProvider>
        <Navbar/>
        
          <main className='main'>
            <Routes>
                <Route path='/' element={<ItemListConteiner title='Todo lo que hacemos esta aquí'/>}/>
                <Route path='/categoria/:idCategoria' element={<ItemListConteiner title='Tienes hasta para elegir'/>} />
                <Route path='/item/:idItem' 
                      element={<ItemDetailsConteiner title='ItemDetailsConteiner'/>}
                />
                <Route path="/orden" element={<Checkout/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
            </Routes>
          </main>
      </CartProvider>

    </BrowserRouter>
  );
};

export default ConfigRutas;
