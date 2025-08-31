import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Navabr = () => {
  return (
      <>
      <ul className={styles.container}>
        <li><h3>Shop Cart</h3></li>
        <li><Link to={'/'} >Home</Link></li>
        <li><Link to={'/about'} >About</Link></li>
        <li><Link to={'/contact'} >Contact</Link></li>
        <li><button>Sign-UP</button></li>
      </ul>
    </>
  )
}

export default Navabr
