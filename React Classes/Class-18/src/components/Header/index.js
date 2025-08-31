import './index.css'
import { setTheme } from '../../store/themeSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)

    return <div className='header'>
        <div className="red box" onClick={() => dispatch(setTheme('red'))}></div>
        <div className="green box" onClick={() => dispatch(setTheme('green'))}></div>
        <div className="blue box" onClick={() => dispatch(setTheme('blue'))}></div>

        <div onClick={() => setToggle(!toggle)}>
            <img 
            width="100"
            height="100"
            src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" />
            {cart.length}
        </div>

        {toggle && <div style={{ border: '1px solid black' }}>
            {cart.map(item => {
                return <div>
                    <h3>{item.title} - Rs. {item.amount}</h3>
                </div>
            })}
        </div>}
    </div>
}

export default Header