import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useCartContext } from "../Context/CartContext"
import "./cart.css"
import {Link} from "react-router-dom"


const Cart = () => {

    const {carrito, precioTotal, vaciarCarrito} = useCartContext();

    const handleVaciar = () =>{
        vaciarCarrito()
    }

  return (
    <div className="cart-container">
        <Paper elevation={15}>
            <Typography variant= "h6" component="div" align="center" sx={{p:2}}>
                Tus Productos En El Carrito
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Producto</TableCell>
                            <TableCell>Precio X Unidad</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        carrito.map((prod) =>(
                            <TableRow key={prod.id}>
                                <TableCell><img style={{width:"100%" , height:"100%" }} src={prod.img} alt = {prod.nombre} /></TableCell>
                                <TableCell>{prod.nombre}</TableCell>
                                <TableCell>{prod.precio}</TableCell>
                                <TableCell>{prod.precio * prod.cantidad}</TableCell>
                            </TableRow>
                        ))
                    }
                        <TableRow>
                            <TableCell colSpan={3}>Total:</TableCell>
                            <TableCell>${precioTotal()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
            {
                carrito.length > 0 ?
                <>
                <button onClick={handleVaciar}>Vaciar Carrito</button>
                <Link to="/checkout"> Finalizar Compra </Link>
                </> :
                <h2>El Carrito esta vacio</h2>                
            }
            </div>
        </Paper>
    </div>
    )
}
                
export default Cart;