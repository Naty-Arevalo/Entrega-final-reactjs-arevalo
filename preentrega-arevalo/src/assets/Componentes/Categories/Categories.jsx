import PedirDatos from "../../hooks/PedirDatos";
import categories from "../../data/categorias.json"
import { Link } from "react-router-dom";
import "./categorias.css"

const Categories = () => {
    const {data} = PedirDatos(categories)


    return (
    <div className="categorias">
        <h2 className="categ-title">Categorias</h2>
        {
            data.map((category) =>{
                return (
                    <Link to={`/categories/${category.category}`} key={category.id} className="categ-link">
                        <p>{category.category}</p>

                    </Link>
                )
            })
        }
    </div> );
}
 
export default Categories;