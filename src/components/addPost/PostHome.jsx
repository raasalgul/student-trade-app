import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import React, { useState,useEffect } from 'react';
import Acommodation from './Accommodation'
import Job from "./Job"
import OtherService from "./OtherService"
import Product from "./Product"
import QandA from "./QandA"
import { Select,MenuItem } from '@material-ui/core';
import {postInfo} from '../constants/Constant'
import authHeader from "../services/auth-header"
export default function PostHome(){

    const [service,setService] =useState('Accommodation')
    const [accommodationData,setAccommodationData] = useState([])
    const [jobData,setJobData] = useState([])
    const [otherServiceData,setOtherServiceData] = useState([])
    const [productData,setProductData] = useState([])
    const [qAndAData,setQAndAData] = useState([])
    useEffect(()=>{
      fetch(`${postInfo}/get-all-postInfo`,{ headers: authHeader() }).then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // setAccommodationData(myJson[]);
        console.log(myJson.accommodation)
        setAccommodationData(myJson.accommodation)
        console.log(accommodationData)
        setJobData(myJson.jobTable)
        setOtherServiceData(myJson.otherServicesTable)
        setProductData(myJson.oldProductsTable)
        setQAndAData(myJson.qAndATable)
      })
    },[service])
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
        service === 'Accommodation' ? <Acommodation accommodationData={accommodationData}/>:
        service === 'Job' ? <Job jobData={jobData}/>:
        service === 'Other Service' ? <OtherService otherServiceData={otherServiceData}/>:
        service === 'Product' ? <Product productData={productData}/>:
        service === 'Q and A' ? <QandA qAndAData={qAndAData}/>:null
        :null}
        </Grid>
        </Grid>
    </ThemeProvider>)
}