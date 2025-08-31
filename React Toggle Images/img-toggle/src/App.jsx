import bulb_on from './assets/Images/bulb-49001.png'
import bulb_off from './assets/Images/bulb-off-icon-25986.png'
import { useState } from 'react'
const App = () => {


  const [bulbStates, setBulbStatus] = useState('off')

  let bulbHandler = () => {
    if (bulbStates == 'off') {
      setBulbStatus('on')
    } else {
      setBulbStatus('off')
    }
  }

  return (
    <>
      <div className='main'>
        <h1>React Bulb Funtionalty</h1>
        <div className='flex'>
          {bulbStates == 'off' ? <img src={bulb_off} width={300} alt="" /> : <img src={bulb_on} width={185} alt="" />}
        </div>
        <div className='btn'>
          <button onClick={bulbHandler}>{bulbStates == 'off' ? "Bulb On" : 'Bulb Off'}</button>
        </div>
      </div>
    </>
  )
}

export default App
