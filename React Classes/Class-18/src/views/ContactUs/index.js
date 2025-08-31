import CustomBtn from '../../components/CustomBtn'
import { useSelector } from 'react-redux'

function ContactUs() {
    const theme = useSelector(state => state.themeReducer.theme)
    return <div style={{ width: '100vw', height: 300, background: theme }}>
        <h1>Contact Us</h1>

        <CustomBtn text='Contact Us' bgColor='green' />
    </div>
}

export default ContactUs