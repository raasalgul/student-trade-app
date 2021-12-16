import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../themes/Theme"
import { useEffect,useState,useContext } from 'react';
import authHeader from '../services/auth-header';
import {postInfo} from "../constants/Constant"
import { Grid } from '@mui/material';
import JobCard from "./Cards/JobCard"
import { UserInfoContext } from "../../App"

export default function Job(){
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
      console.log(myJson.jobTable.Items)
      setData(myJson.jobTable.Items);
      });
     },[]
     )
     return(<ThemeProvider theme={theme}>
        <Grid container alignItems="center" justifyContent="center" spacing={1}>
      <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
          data.map((value)=>{
              { console.log(value)}
             return (<JobCard 
              duration = {value.duration}
              availability = {value.Availability}
              picture = {value.picture}
              salary = {value.salary}
              institution = {value.institution}
              description = {value.description}
              location = {value.location}
              name={value.name}
              />)
          })
            }
        </Grid>
         </Grid>
        </ThemeProvider>)
}