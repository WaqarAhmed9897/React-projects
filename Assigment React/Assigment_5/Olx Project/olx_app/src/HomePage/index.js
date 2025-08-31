import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import images from '../Header/Images/olx Add.jpg'
function HomePage() {
    const [Adds, setAdds] = useState([])
    const navigator = useNavigate()
    useEffect(() => {
        getapi()
    }, [])


    const getapi = () => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setAdds(res.products))
    }

    return <div className="ad-sec">
        <div><img  style={{width:'80%' , marginLeft:'150px'}}src={images}/></div>
{Adds.map(item => {
    const {title,price,brand,thumbnail,id} = item
return <div className="ad-box">
    <h1>{title}</h1>
    <img src={thumbnail}/>
    <h1>Brand</h1>
    <h2>{brand}</h2>
    <h1>Price</h1>
    <h3>${price}</h3>
    <button className="btn-home" onClick={() => navigator(`/Addeatail/${id}`)}>Deatils</button>

</div>

})}
    </div>
}

export default HomePage