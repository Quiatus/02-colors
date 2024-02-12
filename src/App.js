import './App.css';
import { useState } from "react";
import Square from "./Square";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("")

  return (
    <main>
        <Square 
          color={color}
        />
        <Input
          color={color}
          setColor={setColor}
        />
    </main>
  );
}

export default App;
