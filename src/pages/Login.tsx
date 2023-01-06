import React, {useState} from 'react';
import axios from "axios";
import {
  TextField,
  Button,
  InputAdornment,
  Container,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import {Simulate} from "react-dom/test-utils";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  // useEffect(() => {
  //   const test = async () => {
  //     const response = await axios.get("http://localhost:5000/test");
  //     console.log(response.data)
  //   }
  //   test()
  // }, [])

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password, "asdas")
    setPasswordError(false);
    setEmailError(false);
    if (password === "") setPasswordError(true)
    if (email === "") setEmailError(true)

    const response = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password
    })
    console.log(response.data)
  }

  return (
    <Container maxWidth="sm">
      <h1>Login</h1>
      <form action=""
            autoComplete={"off"}
            noValidate
            onSubmit={login}>
        <TextField label={"Email"}
                   type={"email"}
                   variant={"outlined"}
                   fullWidth
                   required
                   helperText={emailError ? "Email is Required" : ""}
                   error={emailError}
                   onChange={(event) => setEmail(event.target.value)}
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <EmailIcon/>
                       </InputAdornment>
                     ),
                   }}
        />

        <TextField label={"Password"}
                   type={"password"}
                   variant={"outlined"}
                   fullWidth
                   margin={"normal"}
                   required
                   helperText={passwordError ? "Password is Required" : ""}
                   error={passwordError}
                   onChange={(event) => setPassword(event.target.value)}
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <LockIcon/>
                       </InputAdornment>
                     ),
                     // endAdornment: (
                     //   <InputAdornment position="end">
                     //     <VisibilityIcon/>
                     //   </InputAdornment>
                     // )
                   }}
        />

        <FormControlLabel value=""
                          control={<Checkbox/>}
                          label="Remember Me?"
        />
        <br/>

        <Button type="submit"
                variant="contained"
                endIcon={<LoginIcon/>}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;