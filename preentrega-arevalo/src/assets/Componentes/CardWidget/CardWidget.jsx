import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCartContext } from '../Context/CartContext';

const CardWidget = () =>{
    const {cantidadEnCarrito} = useCartContext();
    return(<>
    <div>
        <AddShoppingCartIcon sx={{ color: "#1010106b"}} /> 
        <span style={{ color: "#1010106b"}}>{cantidadEnCarrito()}</span>
    </div>
    </>) 
}

export default CardWidget;