import './App.css'
import ItemListContainer from './assets/Componentes/ItemListContainer/ItemListContainer'
import Navbar from './assets/Componentes/Navbar/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Categories from './assets/Componentes/categories/Categories'

import CategoriesProductList from './assets/Componentes/CategoriesProductList/CategoriesProductList'
import Home from './assets/Componentes/Home/Home'

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exaxt path="/" element={<ItemListContainer/>} />
        <Route exact path="/categories/" element= {<Categories/>}/>
        <Route exact path= "categories/:categoryId" element={<CategoriesProductList/>}/>
      </Routes>
    </Router>




  
    </>
  )
}

export default App
