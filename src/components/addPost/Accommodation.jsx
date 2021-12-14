import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import { useEffect,useState,useContext } from 'react';
import authHeader from '../services/auth-header';
import {postInfo} from "../constants/Constant"
import { Grid } from '@mui/material';
import AccommodationCard from "./Cards/AccommodationCard"
import { UserInfoContext } from "../../App"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';



const useStyles = makeStyles((theme) => ({
icon:{
  '& .MuiButton-endIcon':{
    marginLeft: 0,
    marginRight: 0
  }
}
}))

export default function AccommodationUpdate(){
  const [data,setData]= useState([]
  );
  const userInfoContext = useContext(UserInfoContext)

  const classes =useStyles();

  useEffect(()=>{
    // fetch(`${userInfo}/get-postInfo`,{ headers: authHeader() }).then((response) => {
    //   return response.json();
    // })
    let requestData={"email":userInfoContext.userInfoState.name}
    console.log(requestData)
    fetch(`${postInfo}/get-postInfo`,
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
      console.log(myJson.accommodation.Items)
      setData(myJson.accommodation.Items);
      });
     },[]
     )
     return(<ThemeProvider theme={theme}>
        <Grid container alignItems="center" justifyContent="center">
      <Grid item container alignItems="center" justifyContent="center" item xs={12}>
      {
          data.map((value)=>{
              { console.log(value)}
             return (<AccommodationCard area = {value.area}
              name = {value.name}
              eirCode = {value.eirCode}
              duration = {value.duration}
              availability = {value.availability}
              picture = {value.picture}
              rent = {value.rent}
              institution = {value.institution}
              description = {value.description}
              />)
          })
            }
          <Button variant="contained"
          onClick={()=>{
            let val =[... data]

            let newAdd = {

            }
            val.push(newAdd)
            setData(val)
          }}
          className={classes.icon}
          style={{backgroundColor: theme.palette.secondary.main}}
          endIcon={<AddCircleIcon />}
          ></Button>
        </Grid>
         </Grid>
        </ThemeProvider>)
}