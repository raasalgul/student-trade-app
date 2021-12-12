import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from "../themes/Theme"
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {UserInfoContext} from "../../App"
import { useContext,useState } from 'react';
import AuthService from "../services/auth.service";

const useStyle=makeStyles({
  link_style:{
      textDecoration: 'none',
      color:'#FFF'
  }
})
export default function SignIn(props) {

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // form.validateAll();
console.log(message.length)
    if (message.length === 0) {
      AuthService.login(username,password).then(
        (res) => {
          console.log(res)
          userInfoContext.userInfoDispatch({type:'userState',payload:{"userId":res.accessToken,"name":username}})
          props.history.push("/home");
         // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            setMessage(resMessage);
            setLoading(false);
        }
      );
    } else { 
      setLoading(false);
    }
  }

  const [username, setUsername] = useState('');
  const [password,setPassword]=useState('');
  const [message, setMessage] = useState('');
  const [loading,setLoading]=useState(false);

  const userInfoContext = useContext(UserInfoContext)

  const classes=useStyle();
    let error=React.useState(false);
  return (
    <ThemeProvider theme={theme}>
    <Grid container alignItems="center" justifyContent="center"
    >
    <Paper elevation={24} style={{height:"50vh",width:"40vw",display:"flex",alignItems:"space-between",justifyContent:"center"}}>
        <Grid container direction="column" alignItems="center" height="50vh" width="80vw">
        <Grid item container direction="column" xs={4} md={4} spacing={2} justifyContent="center">
        <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
        <Avatar style={{width:100,height:100}} src="/broken-image.jpg" />
        </div>
        </Grid>
        <Grid item container direction="column" xs={8} md={8} justifyContent="center" spacing={2}>
        <Grid item>
        <TextField
          error={error[0]}
          id="userName"
          label="UserName"
          value={username}
          onChange={onChangeUsername}
          //defaultValue="Hello World"
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={onChangePassword}
          //defaultValue="Hello World"
          helperText={error[0]?"Incorrect Username or Password.":""}
        />
        </Grid>
        <Grid item container justifyContent="center" spacing={3}>
        <Grid item>
        <Button variant="contained" onClick={handleLogin}>Login</Button>
        </Grid>
        <Grid item justifyContent="center" alignSelf="center">
        <Link to="/sign-up" className={classes.link_style}>
        <Button variant="contained">SignUp</Button>
        </Link>
        </Grid>
        </Grid>
   </Grid>
   </Grid>
    </Paper>
    </Grid>
    </ThemeProvider>
  );
}
