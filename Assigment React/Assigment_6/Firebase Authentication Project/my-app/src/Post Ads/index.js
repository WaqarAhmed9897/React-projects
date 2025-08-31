import { useState } from "react"
import { AdsPost } from "../Firebase"
import { useNavigate } from "react-router-dom"
function PostAd() {
    const [adname, setadname] = useState()
    const [model, setmodel] = useState()
    const [price, setprice] = useState()
    const [description, setdescription] = useState()
    const [img, setImg] = useState()
    const navigate = useNavigate()
    const showads = async()=>{
        try{
      await  AdsPost({adname,model,price,description,img})
      navigate('/Dashboard')
    }catch(e){
        alert(e)
    }
    }
    return <div>

        <h1>Ads Post Deatail</h1>
        <input onChange={(e) => { setadname(e.target.value) }} type="text" className="reg-inp" placeholder="New item" />   <br />
        <input onChange={(e) => { setmodel(e.target.value) }} type="text" className="reg-inp" placeholder="Model" />         <br />
        <input onChange={(e) => { setprice(e.target.value) }} type="text" className="reg-inp" placeholder="Price" />       <br />
        <input onChange={(e) => { setdescription(e.target.value) }} type="text" className="reg-inp" placeholder="Description" />    <br />
        <input onChange={(e) => { setImg(e.target.files[0]) }} type="file" className="reg-inp" placeholder="Description" />    <br />
        <button onClick={showads}>POST ADDS</button>    
    </div>
}

export default PostAd