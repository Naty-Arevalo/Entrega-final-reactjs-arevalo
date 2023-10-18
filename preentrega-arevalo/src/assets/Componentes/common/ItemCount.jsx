import "./itemCount.css"

const ItemCount = ({ cantidad, handleIncrement, handleDecrement, item, handleAgregar}) => {    

    return (
        <div className="btn-contador">
            <button onClick={handleDecrement} disabled={cantidad <= 1}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleIncrement} disabled={cantidad >= item.stock}>+</button>
            <button onClick={handleAgregar} disabled={cantidad === 0}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;