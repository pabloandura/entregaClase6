import './App.css';
import BarraNav from './components/BarraNav'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import CartContainer from './components/CartContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter>
      <BarraNav/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idDetail' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
