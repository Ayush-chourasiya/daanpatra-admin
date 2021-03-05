import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/action";
import { setLogoutButton, setMenu, setSidebar } from "../../redux/action";
import { authContext } from "../../contexts/user-auth-context/user-auth-context";
import Forgot from "../forgotpassword/App";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  const { authErrMsg, login } = useContext(authContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebar(false));
    dispatch(setMenu(false));
    dispatch(setLogoutButton(false));
    if (localStorage.getItem("email")) {
      props.history.push("/dashboard");
    }
    return () => {
      dispatch(setLogoutButton(true));
    };
  }, []);

  const handleSigninSubmit = (event) => {
    event.preventDefault();
    login({ userName, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <p>{authErrMsg}</p>
        <form className={classes.form} noValidate onSubmit={handleSigninSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button style={{marginLeft:"-1%"}}
            type="submit"
            fullWidth
            variant="contained"
            // color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link to="/forgotpassword">Forgot password?</Link>~ */}
              
            </Grid>
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default withRouter(SignIn);
