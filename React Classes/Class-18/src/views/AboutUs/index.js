import { useNavigate } from 'react-router-dom'
import CustomBtn from '../../components/CustomBtn'
import { useSelector } from 'react-redux'

function AboutUs() {
    const navigate = useNavigate()

    const theme = useSelector(state => state.themeReducer.theme)

    return <div style={{ width: '100vw', height: 300, background: theme}}>
        <h1>About Us</h1>


        <button onClick={() => navigate(-1)}>Back</button>

        <CustomBtn text='Click Here' bgColor='purple' />
    </div>
}

export default AboutUs