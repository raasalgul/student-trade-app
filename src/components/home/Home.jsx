import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import React, { useState } from 'react';
import Acommodation from './Acommodation'
import Job from "./Job"
import OtherService from "./OtherService"
import Product from "./Product"
import QandA from "./QandA"
import { Select,MenuItem } from '@material-ui/core';
export default function Home(){
    const [service,setService] =useState('Accommodation')
    return(<ThemeProvider theme={theme}>
        <Grid container spacing={2}>
        <Grid item>
        {/* <Button variant="contained" color="secondary" onClick={()=>{setIsAcommodation(true)}}>Accomdation</Button> */}
        </Grid>
        <Grid item>
        <Select
          value={service}
          onChange={(event)=>{setService(event.target.value)
          }}
        >
          <MenuItem value={'Accommodation'}>Accommodation</MenuItem>
          <MenuItem value={'Job'}>Job</MenuItem>
          <MenuItem value={'Other Service'}>Other Service</MenuItem>
          <MenuItem value={'Product'}>Product</MenuItem>
          <MenuItem value={'Q and A'}>Q and A</MenuItem>
        </Select>
        </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
        <Grid item>
        {/* {isAcommdation?<QandA/>:<Product/>} */}
        {service !==null && service !==undefined ? 
        service === 'Accommodation' ? <Acommodation/>:
        service === 'Job' ? <Job/>:
        service === 'Other Service' ? <OtherService/>:
        service === 'Product' ? <Product/>:
        service === 'Q and A' ? <QandA/>:null
        :null}
        </Grid>
        </Grid>
    </ThemeProvider>)
}