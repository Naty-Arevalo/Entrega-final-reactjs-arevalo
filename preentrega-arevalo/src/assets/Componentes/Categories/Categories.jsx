import { Link } from "react-router-dom";
import "./categorias.css"
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Categories = () => {
   // const {data} = PedirDatos(categories)
    const [data, setData] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = collection(db, "categorias")
        getDocs(itemCollection)
        .then((res) =>{
            setData(
                res.docs.map((doc) =>{
                    return{...doc.data(), id:doc.id}
                })
            )
        })
    },[])
console.log(data)
    return (
    <div className="categorias">
        <h2 className="categ-title">Categorias</h2>
        {
            data.map((category) =>{
                return (
                    <Link to={`/categories/${category.category}`} key={category.id} className="categ-link">
                        <p>{category.category}</p>
                    </Link>
                )
            })
        }
    </div> );
}
 
export default Categories;