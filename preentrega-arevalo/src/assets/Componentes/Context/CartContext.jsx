import { createContext, useContext, useEffect, useState} from "react";

export const CartContext = createContext ([]);

export const useCartContext = () => useContext(CartContext);

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState(carritoInicial);

    
    const agregarAlCarrito= (item, cantidad) =>{

        const itemAgregado = {...item, cantidad};

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        }else{
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito)
    }
    
    const precioTotal = () =>{
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const cantidadEnCarrito = () =>{
        return carrito.reduce ((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () =>{
        setCarrito([]);
    }

    const removeItem = (id) =>{
        const deleteItem = carrito.filter(el => el.id !== id )
        setCarrito([...deleteItem])
    }
   
    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

//Esta sintaxis siempre sera la misma al hacer un contexto
    return (
        <CartContext.Provider value= {{carrito, agregarAlCarrito, removeItem,  cantidadEnCarrito, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
