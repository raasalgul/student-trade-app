import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import { useEffect,useState,useContext } from 'react';
import authHeader from '../services/auth-header';
import {postInfo} from "../constants/Constant"
import { Grid } from '@mui/material';
import AccommodationCard from "./Cards/AccommodationCard"
import { UserInfoContext } from "../../App"

export default function AccommodationUpdate(){
  const [data,setData]= useState([]
  );
  const userInfoContext = useContext(UserInfoContext)

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
        <Grid container alignItems="center" justifyContent="center" spacing={1}>
      <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
          data.map((value)=>{
              { console.log(value)}
             return (<AccommodationCard area = {value.area}
              eirCode = {value.eirCode}
              duration = {value.duration}
              availablity = {value.availablity}
              picture = {value.picture}
              rent = {value.rent}
              institution = {value.institution}
              description = {value.description}
              />)
          })
            }
        </Grid>
         </Grid>
        </ThemeProvider>)
}