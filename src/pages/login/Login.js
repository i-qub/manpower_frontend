import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from '../../components/Utils/Common';
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.png";
import logo1 from "./logo1.png";
require('dotenv').config()
const newURL = process.env.REACT_APP_API_URL;
console.log("18",newURL)

function Login(props) {
  var classes = useStyles();

  //Greeting Label
  const date = new Date();
  const hour = date.getHours();

  //Login
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [error, setError] = useState(null);
  require('dotenv').config();
  console.log("40",process.env.URL)
  // handle button click of login form
  const login = () => {
    setError(null);
    setLoading(true);
    axios.post(newURL+'/login/login', {
      username: username,
      password: password
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
      return;
    }).catch(error => {
      setLoading(false);
      setError(error);
    });
  }
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText} style={{ fontFamily: "Times new Roman", fontSize: "5rem" }}>Menon & Menon Ltd.</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <img src={logo1} alt="logo" className={classes.logotypeImage1} />
          <Typography variant="h4" className={classes.greeting}>
            {hour >= 12 ? hour >= 16 ? "Good Evening..!" : "Good Afternoon..!" : "Good Morning..!"}
          </Typography>
          <hr></hr>
          <React.Fragment>
            <Typography
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '1.5rem',
                textShadow: '0 0 3px black',
                fontFamily: 'sans-serif',
                padding: '15px'
              }} >
              LOGIN
            </Typography>
            <Typography color="secondary" className={classes.errorMessage}>
              {error}
            </Typography>
            <TextField
              required
              id="token"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              onChange={(event) => { setUsername(event.target.value); }}
              margin="normal"
              placeholder="Token No."
              type="number"
              fullWidth
            />
            <TextField
              required
              id="password"
              onChange={(event) => { setPassword(event.target.value); }}
              margin="normal"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                }
              }}
              fullWidth
            />
            <div className={classes.formButtons}>
              {loading ? (
                <CircularProgress size={26} className={classes.loginLoader} />
              ) : (
                <Button
                  disabled={
                    username.length === 0 || password.length < 6
                  }
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={login}
                >
                  Login
                </Button>
              )}
              <Button
                color="primary"
                className={classes.forgetButton}
              >
                Forget Password
              </Button>
            </div>
          </React.Fragment>
        </div>
        <br></br>
        <Typography color="primary" className={classes.copyright}>
          © {new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://menon.in" rel="noopener noreferrer" target="_blank">Menon and Menon Ltd.</a> All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
