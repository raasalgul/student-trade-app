import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/AccommodationCard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function Profile(){
  const [accommodationData,setAccommodationData]=useState([]);
    useEffect(()=>{
      fetch(`${serviceURLHost}/nci/accomodation/retrieve`,{ headers: authHeader() }).then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setAccommodationData(myJson);
        });
       },[]
       )
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       accommodationData.length>0? accommodationData.map((value)=>{
    return <Card
    name={value.name}
    age={value.age}
    area={value.area}
    eirCode={value.eirCode}
    duration={value.duration}
    availability={value.availablity}
    education={value.education}
    work={value.work}
    rent={value.rent}
    picture={value.picture}
    />
       }):null
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}