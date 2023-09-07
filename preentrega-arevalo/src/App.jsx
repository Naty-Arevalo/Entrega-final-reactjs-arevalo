import './App.css'
import ItemListContainer from './assets/Componentes/ItemListContainer/ItemListContainer'
import Navbar from './assets/Componentes/Navbar/Navbar'


function App() {
  const greeting = "Bienvenidos"

  return (
    <>

     <Navbar/> 
     <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
