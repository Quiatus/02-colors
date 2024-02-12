import './App.css';
import { useState } from "react";
import Square from "./Square";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("")
  const [hex, setHex] = useState("")

  return (
    <main>
        <Square 
          color={color}
          hex={hex}
        />
        <Input
          color={color}
          setColor={setColor}
          setHex={setHex}
        />
    </main>
  );
}

export default App;
