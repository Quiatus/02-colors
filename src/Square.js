const Square = ({ color, hex }) => {
  return (
    <div className='color' style={{backgroundColor:color}}>
        <p>{color ? color : "Empty Value"}</p>
        <p>{hex ? hex : null}</p>
    </div>
  )
}

export default Square