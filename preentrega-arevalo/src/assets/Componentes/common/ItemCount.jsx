
import { useState } from "react";
import "./itemCount.css"

const ItemCount = ({ stock, initial, onAdd}) => {    


    const [cantidad, setCantidad] = useState(initial);

    const handleIncrement = () => {
        cantidad < stock && setCantidad(cantidad + 1);
        };

    const handleDecrement = () => {
        cantidad > initial && setCantidad(cantidad - 1);
        };


    return (
        <div className="contador-container">
            <button className="btn-contador" onClick={handleDecrement} disabled={cantidad <= 1}>-</button>
            <span className="span-contador">{cantidad}</span>
            <button className="btn-contador" onClick={handleIncrement} disabled={cantidad >= stock}>+</button>
            <button className="btn-contador" onClick={()=>{onAdd(cantidad)}} disabled={cantidad === 0}>Sumar al carrito</button>
        </div>
    );
}

export default ItemCount;