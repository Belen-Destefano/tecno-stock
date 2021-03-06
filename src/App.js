import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import OrderDetailContainer from './components/OrderDetailContainer/OrderDetailContainer';

import CustomProvider from './context/CartContext';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (   
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes> 

          <Route path='/tecno-stock' element= {<ItemListContainer greeting="Tecno-Stock" />}/>      
          <Route path='/tecno-stock/categoria/:categoryId' element= {<ItemListContainer greeting="Tecno-Stock" />}/>
          <Route path='/tecno-stock/producto/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/tecno-stock/carrito' element={<Cart/>}/>
          <Route path='/tecno-stock/detalle/:idBuy' element={<OrderDetailContainer/>}/>
        </Routes>
      </CustomProvider>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
