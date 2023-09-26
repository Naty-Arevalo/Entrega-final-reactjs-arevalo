import { useParams } from "react-router-dom";
import productos from "../../data/productos.json"
import PedirDatos from "../../hooks/PedirDatos";
import ItemList from "../ItemListContainer/itemList/ItemList";
import "./categoriesProductList.css"


const CategoriesProductList = () => {
    const{categoryId}=useParams()

    const {data}= PedirDatos(productos)

    const categorySelected = data.filter(category =>category.category.toLowerCase()=== categoryId.toLowerCase());
    
    return (<>
        <div>
            <h2>Detalle</h2>
            <div className="container">
                {
                categorySelected.map((productos) =>{
                    return <ItemList key={productos.Id} productos={productos}/>
                    
                })
                }
            </div>
            
        </div>
        
    </>
        
      );
}
 
export default CategoriesProductList;