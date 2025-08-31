import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
function Dashboard(){
    const navigate = useNavigate()
        const [product,setproduct] = useState([])
        useEffect(()=>{
            getproduct() 
        },[])
        
        function getproduct(){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res =>setproduct(res))}
    return <div>
   {product.map(item => {
    const {title,price,image,description,category,id} = item
    return <div className="ad-box">
        <h1>{title}</h1>
        <img src={image} width={375}/>
        <strong>{category}</strong>
        <h2>{description}</h2>
        <h3>{price}</h3>
        <button onClick={()=>{navigate(`/Deatail/${id}`)}}>Views Deatail</button>
     </div>
   })}
    </div>
}

export default Dashboard