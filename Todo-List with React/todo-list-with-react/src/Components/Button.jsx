
const Button = ({title,OnClick}) => {
  return (
    <>
      <button onClick={OnClick}>{title || "Button"}</button>
    </>
  )
}

export default Button
