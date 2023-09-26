import data from "../../data/productos.json";
import PedirDatos from "../../hooks/PedirDatos"

const ProductDetail = () => {
    

    const pedirProductoPorId = (id) =>{
        return newPromise ((resolve, reject) =>{
            
            const item = data.find((el) => el.id === id)

            if (item){
                resolve(data)
            }else{
                reject({
                    error:"No se encontro el producto"
            })
            }
        })
    }
 return ( <> 
 
 </> );
}
 
export default ProductDetail;