import { Button, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../themes/Theme"
import React, { useState } from 'react';
import Acommodation from './Acommodation'
import Roomate from './Roomate'

export default function Home(){
    const [isAcommdation, setIsAcommodation] = useState(true);
    return(<ThemeProvider theme={theme}>
        <Grid container spacing={2}>
        <Grid item>
        <Button variant="contained" color="secondary" onClick={()=>{setIsAcommodation(true)}}>Accomdation</Button>
        </Grid>
        <Grid item>
        <Button variant="contained" color="secondary" onClick={()=>{setIsAcommodation(false)}}>Roomate</Button>
        </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
        <Grid item>
        {isAcommdation?<Acommodation/>:<Roomate/>}
        </Grid>
        </Grid>
    </ThemeProvider>)
}