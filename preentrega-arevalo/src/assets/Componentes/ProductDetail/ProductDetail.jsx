import { useParams } from "react-router-dom";
import PedirDatos from "../../hooks/PedirDatos";
import productos from "../../data/productos.json"
import "./productDetail.css"

const ProductDetail = () => {
    const { id } = useParams();
    const {data} = PedirDatos(productos)
  

  const product = productos.find((product) => product.id === parseInt(id));
   
 return ( <> 
    <div className="div-container">
        <h2 className="detalle-title">Detalles del Producto</h2>
        <div className="div-detalle">
            <img className="img-detalle" src={product.img} alt={product.nombre} />
            <div>
                <p className="cont-detalle">{product.nombre}</p>
                <p className="cont-detalle">Uso:{product.uso}</p>
                <p className="cont-detalle">Composicion:{product.composicion}</p>
                <p className="cont-detalle">Categoria:{product.category}</p>
                
            </div>
        </div>
       
    </div>
 </> );
}
 
export default ProductDetail;