import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useCartContext } from "../Context/CartContext"
import "./cart.css"
import {Link} from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const {carrito, precioTotal, vaciarCarrito, removeItem} = useCartContext();

    const handleVaciar = () =>{
        vaciarCarrito()
    }
   
        if(carrito.length > 0) {
            return(
            <div className="cart-container">
                <Paper className="paper" elevation={15} sx={{backgroundColor:"#7f5a1a", marginLeft:"100px", width:"75%", borderColor:"white",borderStyle:"solid", boxShadow:"7px 2px 56px 4px rgba(0,0,0,0.75)",
                webkitBoxShadow:"-7px 2px 56px 4px rgba(0,0,0,0.75)", mozBoxShadow:"-7px 2px 56px 4px rgba(0,0,0,0.75)"}}>
                <Typography className="title"variant= "h6" component="div" align="center" sx={{p:2, fontSize:"30px"}}>
                Tus Productos En El Carrito
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{backgroundColor:"#775110"}}>
                                <TableCell sx={{fontSize:"20px", width:"25px", textAlign:"center"}} >Imagen</TableCell>
                                <TableCell sx={{fontSize:"20px", textAlign:"center"}}>Producto</TableCell>
                                <TableCell sx={{fontSize:"20px", textAlign:"center"}}>Precio X Unidad</TableCell>
                                <TableCell sx={{fontSize:"20px", textAlign:"center"}}>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            carrito.map((prod) =>(
                                <TableRow key={prod.id}>
                                    <TableCell ><img style={{width:"100%" , height:"100%", p:2 }} src={prod.img} alt = {prod.nombre} /></TableCell>
                                    <TableCell sx={{textAlign:"center"}}>{prod.nombre}</TableCell>
                                    <TableCell sx={{textAlign:"center"}}>{prod.precio}</TableCell>
                                    <TableCell>{prod.precio * prod.cantidad}</TableCell>
                                    <TableCell sx={{fontSize:"20px",textAlign:"center" }}><button onClick={()=>removeItem(prod.id)}><DeleteIcon/></button></TableCell>
                                </TableRow>
                            ))
                        }
                            <TableRow>
                                <TableCell colSpan={3} sx={{fontSize:"30px"}}>TOTAL:</TableCell>
                                <TableCell sx={{fontSize:"30px"}}>${precioTotal()}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className="container-btns">
                        <button className="vaciar-carrito" onClick={handleVaciar}>Vaciar Carrito</button>
                        <Link to="/checkout" className="btn-compra"> Continuar Compra </Link>
                    </div>
                </TableContainer>
                </Paper>
            </div>)
        }else{
            return (<>
                <h2 className="text-vacio">- El Carrito Está Vacio -</h2> 
                <Link to={"/"} className="link-productos"> Ver Productos</Link>
                </> )
        }
        }
export default Cart;