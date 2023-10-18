import './App.css'
import ItemListContainer from './assets/Componentes/ItemListContainer/ItemListContainer'
import Navbar from './assets/Componentes/Navbar/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Categories from './assets/Componentes/categories/Categories'
import CategoriesProductList from './assets/Componentes/CategoriesProductList/CategoriesProductList'
import Home from './assets/Componentes/Home/Home'
import CartProvider from './assets/Componentes/Context/CartContext'
import Cart from './assets/Componentes/Cart/Cart'
import ProductDetailContainer from './assets/Componentes/ProductDetail/ProductDetailContainer'
import Checkout from './assets/Componentes/Checkout/Checkout'

function App() {

  

  return (
    <>
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exaxt path="/" element={<ItemListContainer/>} />
          <Route exact path="/producto/:id" element={<ProductDetailContainer/>}/>
          <Route exact path="/categories/" element= {<Categories/>}/>
          <Route exact path= "categories/:categoryId" element={<CategoriesProductList/>}/>
          <Route exact path= "/cart" element= {<Cart/>}/>
          <Route exact path= "/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </CartProvider>

  
    </>
  )
}

export default App
