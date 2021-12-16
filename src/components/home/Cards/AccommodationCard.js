import React from "react";
import { Paper,Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../themes/Theme"
import { useState,useContext } from "react";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import {checkoutInfo} from "../../constants/Constant"
import authHeader from "../../services/auth-header"
import { UserInfoContext } from "../../../App"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    margin: 25,
    fontFamily: "'Roboto",
    backgroundColor: "#CCCCCC",
    color: "#1C80B5",
    fontSize: 9,
    '& .MuiButton-endIcon':{
      marginLeft: 0,
      marginRight: 0
    }
  },
    image:{
        width:250,
        height:300
    },
    heading:{
         color: "rgba(0, 0, 0, 0.54)",
    },
    right:{
        margin:'10px',
        minWidth:'200px',
        maxWidth:'200px'
    },
    button:{
        textAlign:"-webkit-right"
    }
  }));
  export default function Card(props)  {
    const classes = useStyles();
    const [isIntrested,setIsIntrested] = useState(false);
    const [emailBody,setEmailBody] = useState('');
    const userInfoContext = useContext(UserInfoContext)
    let contextData={"email":userInfoContext.userInfoState.name,
    "institution":userInfoContext.userInfoState.institution}

    return (
      <ThemeProvider theme={theme}>
        <Paper className={classes.paper}
        >
       <Grid
      justifyContent="space-between"
      container 
      spacing={2}
      >
        <Grid item>
        <img src={props.picture} className={classes.image} alt="logo" />
        <h1><span className={classes.heading}>{props.name}</span></h1>
        </Grid>
        <Grid item>
            <div className={classes.right}>
          <h1><span className={classes.heading}>Area: </span>{props.area}</h1>
          <h1><span className={classes.heading}>EIRCode: </span>{props.eirCode}</h1>
          <h1><span className={classes.heading}>Duration: </span>{props.duration}</h1>
          <h1><span className={classes.heading}>Availability: </span>{props.availability}</h1>
          <h1><span className={classes.heading}>Institution: </span>{props.institution}</h1>
          <h1><span className={classes.heading}>Description: </span>{props.description}</h1>
          <h1><span className={classes.heading}>Rent: </span>{props.rent}</h1>
          {!isIntrested?
          <Button variant="contained"
          onClick={()=>{setIsIntrested(true)}}
          style={{backgroundColor: theme.palette.secondary.main}}
          >
              Intrested
        </Button>
        :
        <Grid container>
          <Grid item>
          <TextField onChange={(e)=>{
              setEmailBody(e.target.value)
          }}></TextField>
          </Grid>
          <Grid item container spacing={3} justifyContent="center">
            <Grid item>
          <Button variant="contained"
          onClick={()=>{setIsIntrested(false)}}
          style={{backgroundColor: theme.palette.secondary.main}}
          endIcon={<CancelIcon />}
          ></Button>
          </Grid>
          <Grid item>
          <Button variant="contained"
          onClick={()=>{
            /**
             * {
    "name":"Flat at dublin 5",
    "hash":"5f49657dd7d40252028594b85f3add6d12c61bf424528734d60f35cf",
    "email":"k.sathishrsurya1@gmail.com",
    "emailBody":"Im intrested in your property, Please contact me."
}
             */
            let requestData ={
              "name":props.name,
              "hash":props.hash,
              "email":contextData.email,
              "emailBody": emailBody
            };
            fetch(`${checkoutInfo}/accommodation-cart`,
            { 
                method: 'POST', 
              mode: 'cors', 
              cache: 'no-cache', 
              credentials: 'same-origin', 
              redirect: 'follow',
              referrerPolicy: 'no-referrer', 
              body: JSON.stringify(requestData) ,
              headers: {...authHeader(),'Content-Type':'application/json'} })

            .then((response) => {
              return response.json();
            })
            .then((myJson) => {
            
            })

            setIsIntrested(false)}}
          style={{backgroundColor: theme.palette.secondary.main}}
          endIcon={<SendIcon />}
          >Email</Button>
          </Grid>
          </Grid>
        </Grid>
        }
          </div>
          </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }