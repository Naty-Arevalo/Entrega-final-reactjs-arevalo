import "./itemList.css";
const ItemList = ({productos, children}) => {
   
    return (  <>
    <div className="div-productos" >
        <img className="img-card" src={productos.img} />
        <div className="div-prod">
            <h2 className="card-nombre">{productos.nombre}</h2>
            <p className="card-price">${productos.precio}</p>
            <button>Ver Detalles</button>
        </div>
                        
    </div>
    
    </>);
}
 
export default ItemList;