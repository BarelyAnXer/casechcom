import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  // const [state, setState] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {
    const test = async () => {
      const response = await axios.get("http://localhost:5000/test");
      console.log(response.data)
    }
    test()
  }, [])

  const login = async () => {
    const response = await axios.post("http://localhost:5000/login", {
      username: usernameLogin,
      password: passwordLogin
    })
    console.log(response.data)
  }

  const register = async () => {
    const response = await axios.post("http://localhost:5000/register", {
      firstname: usernameRegister,
      password: passwordRegister
    })
    console.log(response.data)
  }

  return (
    <>
      <h1>Register</h1>
      <input type="text"
             onChange={(event) => {
               setUsernameRegister(event.target.value);
             }
             }/><br/>
      <input type="text"
             onChange={(event) => {
               setPasswordRegister(event.target.value);
             }
             }/><br/>
      {/*<select name="cars"*/}
      {/*        id="cars">*/}
      {/*  <option value="Student">Student</option>*/}
      {/*  <option value="Teacher">Teacher</option>*/}
      {/*</select><br/>*/}
      <button onClick={register}>register</button>

      <h1>Login</h1>

      <input type="text"
             onChange={(event) => {
               setUsernameLogin(event.target.value);
             }}/><br/>
      <input type="text"
             onChange={(event) => {
               setPasswordLogin(event.target.value);
             }}/><br/>
      <button onClick={login}>login</button>

      <h1>{status}</h1>

    </>
  );

}

export default App
