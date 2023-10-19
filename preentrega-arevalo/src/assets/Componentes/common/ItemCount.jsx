import "./itemCount.css"

const ItemCount = ({ cantidad, handleIncrement, handleDecrement, item, handleAgregar}) => {    

    return (
        <div className="contador-container">
            <button className="btn-contador" onClick={handleDecrement} disabled={cantidad <= 1}>-</button>
            <span className="span-contador">{cantidad}</span>
            <button className="btn-contador" onClick={handleIncrement} disabled={cantidad >= item.stock}>+</button>
            <button className="btn-contador" onClick={handleAgregar} disabled={cantidad === 0}>Sumar al carrito</button>
        </div>
    );
}

export default ItemCount;