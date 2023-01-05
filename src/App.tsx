import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    const test = async () => {
      const response = await axios.get("http://localhost:5000/test");
      setState(JSON.stringify(response.data))
    }
    test()
  }, [])

  return (
    <>
      {state}
    </>
  )
}

export default App
