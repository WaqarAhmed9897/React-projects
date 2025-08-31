import axios from 'axios'
import { useEffect, useState } from 'react'
import Navabr from '../../Components/Navabr'

const Product = () => {
    const [products, SetProducts] = useState([])
    useEffect(() => {
        productApi()
        console.log('Feching .... ');
        
    }, [])


    const productApi = async () => {

            const response = await axios.get('https://api.escuelajs.co/api/v1/products')
        SetProducts(response.data);
                    
        console.log(response.data);
    }
    

    return (
        <>
        <h1>products</h1>
            <Navabr />
            <h1>Product-Page</h1>
            {products.map((obj) => {
                const { title, price, images } = obj;
                return (
                    <div key={obj.id} style={{ border: "1px solid black" }}>
                        <img src={images} width={300} height={200} />
                        <h1>
                            {title}
                        </h1>
                        <h1>PRICE: {price} </h1>
                    </div>
                );
            })
            }
        </>
    )
}

export default Product
