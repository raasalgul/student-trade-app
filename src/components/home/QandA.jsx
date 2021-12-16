import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/QandACard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function QandA(props){
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       props.qAndAData.length>0? props.qAndAData.map((value)=>{
    return <Card
    name={value.name}
    description={value.description}
    subject={value.subject}
    institution={value.institution}
    Availability={value.Availability}
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