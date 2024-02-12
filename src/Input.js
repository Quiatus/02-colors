const Input = ({ color, setColor }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
    <input 
      autoFocus
      type="text" 
      placeholder='Add Color Name'
      required
      value={color}
      onChange={(e) => setColor(e.target.value)}/>
  </form>
  )
}

export default Input