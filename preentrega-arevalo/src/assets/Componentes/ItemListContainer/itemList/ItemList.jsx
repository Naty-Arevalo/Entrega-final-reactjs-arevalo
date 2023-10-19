import { Link } from "react-router-dom";
import "./itemList.css";
import ProductDetail from "../../ProductDetail/ProductDetail";

const ItemList = ({productos}) => {
    

    return (  <>
        <div className="div-productos">
            <img className="img-card" src={productos.img} />
            <div className="div-prod">
                <h2 className="card-nombre">{productos.nombre}</h2>
                <p className="card-price">${productos.precio}</p>
                <Link to={`/producto/${productos.id}`} key={productos.nombre} element={<ProductDetail />} className="detalles">Ver Detalles</Link>
            </div>
        </div>    
    </>);
}

export default ItemList;