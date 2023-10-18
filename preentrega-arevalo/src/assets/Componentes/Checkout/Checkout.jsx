import { useCartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form"
import { collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from "react";

function Checkout() {
    const {carrito, precioTotal, vaciarCarrito} = useCartContext();
    const {register, handleSubmit} = useForm()
    const db = getFirestore();
    const [pedidoId, setPedidoId] = useState("");
    const [datosCompra, setDatosCompra] = useState(null);
    
    const comprar= (data)=>{
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
console.log(pedido)
    

    const pedidoRef = collection(db, "pedidos")

    addDoc(pedidoRef, pedido)
    .then((doc) =>{
        setPedidoId(doc.id)
        setDatosCompra(pedido)
        vaciarCarrito()
    })

    }

    if(pedidoId) {
        return(
            <div>
            <h1>gracias por tu compra</h1>
            
            <p>Tu compra:</p>
        {datosCompra && (
          <div>
            <p>Cliente: {datosCompra.cliente.nombre}</p>
            <p>Email: {datosCompra.cliente.email}</p>
            <p>Teléfono: {datosCompra.cliente.telefono}</p>
            <p>Total: {datosCompra.total}</p>
            
            <p>Productos:</p>
          <ul>
            {datosCompra.productos.map((producto, index) => (
              <li key={index}>
                <p>Nombre: {producto.nombre}</p>
                <p>Precio: {producto.precio}</p>
                {/* Agrega otros detalles del producto según tu estructura de datos */}
              </li>
            ))}
          </ul>
            
            <p>tu numero de pedido es: {pedidoId}</p>
            </div>
        )}
        </div>
        )
    }
  return (
    <>
        <h2>Completá tus datos para finalizar la compra</h2>
        <form onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder="Ingresá tu Nombre y Apellido " {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu E-Mail" {...register("email")}/>
            <input type="phone" placeholder="Ingresá tu Telefono" {...register("telefono")}/>
            <button type="submit">Comprar</button>
        </form>
    </>
  )
}

export default Checkout