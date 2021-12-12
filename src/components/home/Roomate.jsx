import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/RoomateCard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function Profile(){
  const [roommateData,setroommateData]=useState([]);
    useEffect(()=>{
      fetch(`${serviceURLHost}/nci/roommate/retrieve`,{ headers: authHeader() }).then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson)
        setroommateData(myJson);
        });
       },[]
       )
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       roommateData.map((value)=>{
    return <Card 
    name={value.name}
    age={value.age}
    area={value.area}
    eirCode={value.eirCode}
    duration={value.duration}
    availability={value.availability}
    education={value.education}
    work={value.work}
    budget={value.budget}
    picture={value.picture}
    />
       })
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}