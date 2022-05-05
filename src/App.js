import './App.css';
import BarraNav from './components/BarraNav'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import CartContainer from './components/CartContainer';
import Contacto from "./components/Contacto";
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';

function App() {


  return (
      <CartContextProvider>
        <BrowserRouter>
          <BarraNav />
          <ErrorBoundary>
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/item/:idDetail' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/contacto' element={<Contacto />} />
          </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
