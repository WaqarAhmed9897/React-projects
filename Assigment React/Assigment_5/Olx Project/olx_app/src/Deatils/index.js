import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function AdDeatail() {
    const {adid} = useParams()
    const [curAdd, setcurAdd] = useState([])
    useEffect(() => {
        getSingleApi()
    }, [])

    function getSingleApi() {
        fetch(`https://dummyjson.com/products/${adid}`)
             .then(res => res.json())
            .then(res => setcurAdd(res))
    }
    const {title,thumbnail,price,description} = curAdd

    return <div className="detail">   
        {curAdd == []
            ? <h1>Loading...</h1>
            : <div  className="adDeatail-box">
                <h1>{title}</h1>
                <img src={thumbnail}/>
                <h3>Price</h3><p>${price}</p>
                <h3>Description</h3><p>{description}</p>
                <button className="btn-deatil">Add to Card</button>
            </div>}
    </div>
}
// console.log(setcurAdd());

export default AdDeatail