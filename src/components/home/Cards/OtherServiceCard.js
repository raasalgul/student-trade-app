import React from "react";
import { Paper,Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../themes/Theme"
import { useState } from "react";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

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
          <h1><span className={classes.heading}>Description: </span>{props.description}</h1>
          <h1><span className={classes.heading}>Institution: </span>{props.institution}</h1>
          <h1><span className={classes.heading}>Location: </span>{props.location}</h1>
          <h1><span className={classes.heading}>Availability: </span>{props.Availability}</h1>
          <h1><span className={classes.heading}>Price: </span>{props.price}</h1>
          {!isIntrested?
          <Button variant="contained"
          onClick={()=>{setIsIntrested(true)}}
          style={{backgroundColor: theme.palette.secondary.main}}
          >
              Intrested
        </Button>
        :
        <Grid container>
          <Grid item xs={12}>
          <TextField ></TextField>
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
          onClick={()=>{setIsIntrested(false)}}
          style={{backgroundColor: theme.palette.secondary.main}}
          endIcon={<SendIcon />}
          >Email</Button>
          </Grid>
          </Grid>
        </Grid>
        }
          </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }