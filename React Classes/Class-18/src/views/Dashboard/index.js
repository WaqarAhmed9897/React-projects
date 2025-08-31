import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomBtn from '../../components/CustomBtn'
import Card from '../../components/Card'
import { getAllProducts } from '../../config/firebase'
import { useSelector } from 'react-redux'
import './index.css'

function Dashboard() {
    const [ads, setAds] = useState([])
    const [color, setColor] = useState(0)
    const [show, setShow] = useState()

    const theme = useSelector(state => state.themeReducer.theme)
    console.log('theme', theme)

    useEffect(() => {
        getAds()

    }, [])

    const getAds = async () => {
        const res = await getAllProducts()
        setAds(res)
    }

    const navigate = useNavigate()
    return <div className='container' style={{ background: theme }}>

        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/contactUs')}>Contact Us</button>
        <button onClick={() => navigate('/aboutUs')}>About Us</button>

        <h1>Dashboard</h1>

        {ads.map(item => {
            return <Card item={item} />
        })}

        <button onClick={() => setColor(0)}>Red</button>
        <button onClick={() => setColor(1)}>Green</button>
        <button onClick={() => setColor(2)}>Blue</button>
        <button onClick={() => setShow(!show)}>Show/Hide</button>

        <p>kjdklasjfdslaknfjkalndflkas</p>

        {show && <CustomBtn text='Submit' bgColor={color} />}
    </div>
}

export default Dashboard
