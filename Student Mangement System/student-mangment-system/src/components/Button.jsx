import Styles from '../pages/Styles/login.module.css'
const Button = ({text,onClick}) => {


  return (
    <>
      <button className={Styles.btn} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button
