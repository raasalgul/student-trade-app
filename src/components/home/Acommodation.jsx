import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/AccommodationCard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

let Accommodation = (props)=>{
  console.log(props)
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       props.accommodationData.length>0? props.accommodationData.map((value)=>{
    return <Card
    name={value.name}
    area={value.area}
    eirCode={value.eirCode}
    duration={value.duration}
    availability={value.availability}
    institution={value.institution}
    description={value.description}
    rent={value.rent}
    picture={value.picture}
    email = {value.email}
    hash = {value.hash}
    />
       }):null
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}
export default Accommodation