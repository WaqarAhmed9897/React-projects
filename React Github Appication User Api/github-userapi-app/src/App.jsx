import axios from 'axios'
import { useState } from 'react'
// import styles from 'style.module.css'
import styles from './styles/github.module.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [userApi, setUserApi] = useState({})


  const fetchApi = async () => {
    try {
      const response = await axios(`https://api.github.com/users/${inputValue}`)
      setUserApi({ ...response.data });
      console.log(response.data);
      
    } catch (error) {
      alert(error.message)
    }


  }
  return (
    <>
    <h1 className={styles.heading} >Github User Information</h1>
      <input className={styles.inputBox} onChange={e => { setInputValue(e.target.value) }} type="text" />
      <button onClick={fetchApi}>GET</button>
      <h1>{userApi.name}</h1>
      <img src={userApi.avatar_url} alt="" />
      <p>{userApi.company}</p>
    </>
  )
}

export default App
