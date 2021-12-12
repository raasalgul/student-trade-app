import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AuthService from "../services/auth.service";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const useStyle=makeStyles({
  link_style:{
      textDecoration: 'none',
      color:'#FFF'
  }
})
export default function SignIn(props) {

  const [username, setUsername] = useState('');
  const [password,setPassword]=useState('');
  const [retypePassword,setRetypePassword]=useState('');
  const [email,setEmail]=useState('');
  const [toastMsg,setToastMsg] = useState('')
  const [isToast,setIsToast] = useState(false)
    let error=React.useState(false);
    const classes=useStyle();

    function handleSubmit(){
      if(password===retypePassword){
      AuthService.register(username,password,email).then(
        (res) => {
          console.log(res)
          props.history.push("/sign-in");
        },
        error => {
          setIsToast(true)
          setToastMsg('Username or password is incorrect')
        }
      );
      }
      else{
        setIsToast(true)
        setToastMsg('Password does not match')
      }
    }
  return (
    <ThemeProvider theme={theme}>
    <Grid container alignItems="center" justifyContent="center"
    >
    <Paper elevation={24} style={{flexWrap:"nowrap",minHeight:"50vh",width:"40vw",display:"flex",alignItems:"space-between",justifyContent:"center",paddingTop:"18px"}}>
       <Grid container direction="column">
        <Grid item container direction="column" justifyContent="center" spacing={2}>
        <Grid item>
        <TextField
          error={error[0]}
          id="userName"
          label="Username"
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="password"
          label="Password"
          type="password"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="retype-password"
          label="Retype Password"
          type="password"
          onChange={(e)=>{
            setRetypePassword(e.target.value)
          }}
        />
        </Grid>
        <Grid item>
        <TextField
          error={error[0]}
          id="emailId"
          label="Email Id"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        </Grid>
        <Grid item container justifyContent="center" spacing={1}>
        <Snackbar open={isToast} autoHideDuration={6000} onClose={()=>{setIsToast(false); setToastMsg("")}}>
  <Alert onClose={()=>{setIsToast(false); setToastMsg("")}} severity="error" sx={{ width: '100%' }}>
     {toastMsg}
  </Alert>
</Snackbar>
        </Grid> 
        <Grid item>
        <Button variant="contained" onClick={handleSubmit} style={{marginRight:"8px"}} color="secondary">Submit</Button>
        <Link to="/sign-in" className={classes.link_style}>
        <Button variant="contained" color="secondary" >Login</Button>
        </Link>
        </Grid>
   </Grid>
   </Grid>
    </Paper>
    </Grid>
    </ThemeProvider>
  );
}
