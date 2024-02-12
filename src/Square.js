const Square = ({ color }) => {
  return (
    <div className='color' style={{backgroundColor:color}}>
        {color ? color : "Empty Value"}
    </div>
  )
}

export default Square