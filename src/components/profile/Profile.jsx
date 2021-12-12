import { ThemeProvider } from '@mui/styles';
import theme from "../themes/Theme"
import { Grid } from '@mui/material';
import UserInfo from './UserInfo'
import AccommodationUpdate from './AccommodationUpdate';
import RoomateUpdate from './RoomateUpdate';
import { useContext } from 'react';
import {UserInfoContext} from "../../App"

export default function Profile(){
  const userInfoContext = useContext(UserInfoContext)
  let service=userInfoContext.userInfoState.service; //accommodation, no-service
    return(<ThemeProvider theme={theme}>
      <Grid container direction="column" spacing={2}>
       <Grid item xs={5}>
        <UserInfo/>
       </Grid>
       {service==="Roommate" || service=== "Accommodation"?
        service==="Accommodation" ? 
        <Grid item xs={5}><AccommodationUpdate></AccommodationUpdate></Grid>
        :<Grid item xs={5}><RoomateUpdate></RoomateUpdate></Grid>
        :null
      }
      </Grid>
    </ThemeProvider>)
}