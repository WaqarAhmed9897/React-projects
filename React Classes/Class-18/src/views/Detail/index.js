import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../config/firebase'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'

function Detail() {
    const dispatch = useDispatch()
    const [ad, setAd] = useState()
    const { adId } = useParams()
    const theme = useSelector(state => state.themeReducer.theme)

    useEffect(() => {
        getSingleAd()
    }, [])

    const getSingleAd = async () => {
        const res = await getSingleProduct(adId)
        console.log('res', res)
        setAd(res)
    }

    return <div style={{ background: theme }}>
        <h1>Detail</h1>

        <h1>{ad?.title}</h1>

        <button onClick={() => dispatch(addToCart(ad))}>
            Add To Cart
        </button>
    </div>
}

export default Detail