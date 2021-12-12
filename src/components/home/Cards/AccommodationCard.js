import React from "react";
import { Paper,Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../themes/Theme"

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      margin: 25,
      fontFamily: "'Roboto",
      backgroundColor: "#CCCCCC",
      color: "#1C80B5",
      fontSize: 9
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
        <img src={"data:image/png;base64,"+props.picture.data} className={classes.image} alt="logo" />
        <h1><span className={classes.heading}>{props.name}</span></h1>
        </Grid>
        <Grid item>
            <div className={classes.right}>
          <h1><span className={classes.heading}>Age: </span>{props.age}</h1>
          <h1><span className={classes.heading}>Area: </span>{props.area}</h1>
          <h1><span className={classes.heading}>EIRCode: </span>{props.eirCode}</h1>
          <h1><span className={classes.heading}>Duration: </span>{props.duration}</h1>
          <h1><span className={classes.heading}>Availability: </span>{props.availability}</h1>
          <h1><span className={classes.heading}>Education: </span>{props.education}</h1>
          <h1><span className={classes.heading}>Work: </span>{props.work}</h1>
          <h1><span className={classes.heading}>Rent: </span>{props.rent}</h1>
          {/* <h1><span className={classes.heading}>UserInfo: </span>{props.userId}</h1> */}
          <Grid
          className={classes.button}
          >
          <Button variant="contained"
          color="secondary"
          >
              Intrested
        </Button>
        </Grid>
          </div>
          </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    );
  }