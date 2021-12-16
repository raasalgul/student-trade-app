import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/OtherServiceCard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function OtherService(props){
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       props.otherServiceData.length>0? props.otherServiceData.map((value)=>{
    return <Card
    name={value.name}
    description={value.description}
    institution={value.institution}
    location={value.location}
    Availability={value.Availability}
    price={value.price}
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