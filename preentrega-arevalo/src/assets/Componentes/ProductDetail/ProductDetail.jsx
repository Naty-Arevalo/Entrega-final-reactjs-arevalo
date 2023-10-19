import { useContext, useState } from "react";
import ItemCount from "../common/ItemCount";
import "./productDetail.css"
import { CartContext } from "../Context/CartContext";

const ProductDetail = ( { item }) => {

    const [cantidad, setCantidad] = useState(1);
    const {agregarAlCarrito} = useContext(CartContext)
    
    const handleIncrement = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
        };

    const handleDecrement = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
        };

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
            <div className="contador">
                <ItemCount cantidad={cantidad} 
                handleIncrement={handleIncrement} 
                handleDecrement={handleDecrement} 
                handleAgregar={()=>{agregarAlCarrito (item, cantidad)}} 
                item={item}></ItemCount>/
            </div>
            <p className="descripcion">{item.descripcion}</p>
        </div>
    </div>
  )
}
export default ProductDetail;