import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import Card from './Cards/ProductCard'
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import authHeader from '../services/auth-header';
import {serviceURLHost} from "../constants/Constant"

export default function Product(props){
    return(<ThemeProvider theme={theme}>
          <Grid container alignItems="center" justifyContent="center" spacing={1}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} spacing={3}>
      {
       props.productData.length>0? props.productData.map((value)=>{
    return <Card
    name={value.name}
    description={value.description}
    Availability={value.Availability}
    institution={value.institution}
    price={value.price}
    picture={value.picture}
    />
       }):null
      }
      </Grid>
      </Grid>
    </ThemeProvider>)
}