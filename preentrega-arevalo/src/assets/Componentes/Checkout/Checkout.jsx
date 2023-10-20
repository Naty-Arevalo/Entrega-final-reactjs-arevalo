import { useCartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form"
import { collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from "react";
import "./checkout.css"

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
            <div className="container-check">
              <h1 className="title-check">Gracias por tu compra!</h1>
            {datosCompra && (
              <div className="mini-container-check">
                <p >{datosCompra.cliente.nombre}</p>
                <p>{datosCompra.cliente.email}</p>
                <br />
                <p>Productos:</p>
                <ul>
                  {datosCompra.productos.map((producto, index) => (
                    <li key={index}>
                      <p>Nombre: {producto.nombre}</p>
                    </li>
                  ))}
                </ul>
                <p>Pagaste: ${datosCompra.total}</p>
                <p>TU NUMERO ID DE PEDIDO ES: {pedidoId}</p>
            </div>
            )}
          </div>
        )
    }
  return (
    <div className="container-checkout">
        <h2 className="title-form">Completá tus datos para finalizar la compra</h2>
        <form className="form" onSubmit={handleSubmit(comprar)}>
            <input className="btn-form" type="text" placeholder="Ingresá tu Nombre y Apellido " {...register("nombre")} />
            <input className="btn-form" type="email" placeholder="Ingresá tu E-Mail" {...register("email")}/>
            <input className="btn-form" type="phone" placeholder="Ingresá tu Telefono" {...register("telefono")}/>
            <button className="btn-compra" type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default Checkout