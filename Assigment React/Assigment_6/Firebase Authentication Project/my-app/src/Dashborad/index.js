import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, } from "firebase/auth"
import { auth, getAdsData } from "../Firebase"
function Dashboard() {
    const navigate = useNavigate()
    const [Product, setProduct] = useState([])
    const [user, setuser] = useState()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user)
            }
            else {
                setuser(null)
            }
        })
    }, [])

    useEffect(()=>{
        getProduct()
    })

    const getProduct = async()=>{
        const ads = await getAdsData()
        setProduct(ads)
    }

    return <div>
        <div className="Dashb">
        <h1>I Am Dashboard</h1>
        {user ? 
        <h3>{user.email}</h3>
        :
        <button onClick={navigate('/Login')}>Login</button>
    }
        <button onClick={() => navigate('/PostAds')}>Post Adds</button>
    </div>

{Product.map(item =>{
const {adname,model,price,description,imgUrl } = item
return <div className="ad-box">
    <img src={imgUrl}  width={80}/>
       <h1>{adname}</h1>
       <h1>{model}</h1>
       <h1>{price}</h1>
       <h1>{description}</h1>
</div>
})}


    </div>
}

export default Dashboard