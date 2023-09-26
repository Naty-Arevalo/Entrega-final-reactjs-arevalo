import "./ItemListContainer.css"
import productos from "../../data/productos.json"
import PedirDatos from "../../hooks/PedirDatos"
import ItemList from "./itemList/ItemList"

const ItemListContainer = () => {

    const {data} = PedirDatos(productos)

    return (<>
    <div className="div-itemContainer">
        <h2 className="productos-title">Productos</h2>
        <div className="productos">
        {data.map ((productos) =>{
                return (
                    <ItemList key={productos.id} productos={productos}/>
                      )}
        
            )}
        </div>
            
                
    </div>
    
    </>)

}

export default ItemListContainer