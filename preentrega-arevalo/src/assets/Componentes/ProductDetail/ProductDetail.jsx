import { useContext, useState } from "react";
import ItemCount from "../common/ItemCount";
import "./productDetail.css"
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ProductDetail = ( { item }) => {
    const [cantidad, setCantidad] = useState(0);
    const {agregarAlCarrito} = useContext(CartContext)
    
    const onAdd = (quantity) =>{
        setCantidad(quantity);
        agregarAlCarrito(item, quantity)
    }
    return (
    <div>
        <div className="div-container">
            <h2 className="detalle-title">Detalles del Producto</h2>
            <div className="div-detalle">
                
                <img className="img-detalle" src={item.img} alt={item.nombre} />
                <div className="div-miniDetalle">
                    <p className="cont-detalle">{item.nombre}</p>
                    <p className="cont-detalle">Uso:{item.uso}</p>
                    <p className="cont-detalle">Composición:{item.composicion}</p>
                    <p className="cont-detalle">Categoría:{item.category}</p>            
                </div>
            </div>
            {cantidad > 0 ? <Link to="/cart" className="btn-ver-carrito">Ver Carrito</Link> : 
            <div className="contador">          
                <ItemCount  
                stock={item.stock}
                initial={1}
                onAdd={onAdd}
                ></ItemCount>/
            </div>
            }
            <p className="descripcion">{item.descripcion}</p>
        </div>
    </div>
  )
}
export default ProductDetail;