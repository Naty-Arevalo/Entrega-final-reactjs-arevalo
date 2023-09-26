import { useEffect, useState } from "react";

const PedirDatos = (mock) => {
    
    const [data, setData] = useState([]);
    
    const newDataPromise = new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            resolve (mock)
        },500)
    })

    useEffect(() =>{
        newDataPromise.then((res) => 
        setData(res))
    },[])

    return  {data} 
    
}
 
export default PedirDatos;