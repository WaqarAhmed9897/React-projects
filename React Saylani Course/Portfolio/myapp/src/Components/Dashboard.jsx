import svg from '../assets/coding-2-31.svg'
import annimated from '../assets/annitmated/09zh6ZkGi31JbJez41.mp4'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards.jsx'
const Dashboard = () => {

    return (
        <div>
            <div className='main-section'>
                <div className='hero-section'>
                    <div className='left-para'>
                        {/* <h1>Hy i am Waqar Ahmed</h1><br /> */}
                        <p>Hi, I'm a passionate Frontend Web Developer skilled in HTML, CSS, and JavaScript.
                            I specialize in building clean, responsive, and interactive UIs using React.
                            I enjoy bringing ideas to life through code and crafting smooth user experiences.</p>
                    </div>
                    <img src={svg} alt="logo" width={500} />
                </div>
            </div>

            <div>
                <h1>About us</h1>
                <div className='anitmated'>
                    <div className='media'>
                        <video autoPlay={true} loop={true} src={annimated}></video>
                    </div>
                    <div>
                        <Cards />
                    </div>
                </div>
            </div>
            <div>
                <h1>Projects</h1>
                <div className='project-main-Container'>
                    <div className='Project-row1'>
                        <div>
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                        <div >
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                        <div >
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                        <div  >
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                    </div>
                    <div className='project-row2'>

                        <div>
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                        <div  >
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                        <div >
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>
                        <div >
                            <div >
                                Carrd images
                            </div>
                            <div>
                                Content
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard