import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/JobCard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function Job(props){
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       props.jobData.length>0? props.jobData.map((value)=>{
    return <Card
    name={value.name}
    description={value.description}
    duration={value.duration}  	
    institution={value.institution}
    location={value.location}
    availability={value.Availability}
    salary={value.salary}
    />
       }):null
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}