import { ThemeProvider, makeStyles } from '@mui/styles';
import theme from "../themes/Theme";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useState, useEffect, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Box, Grid, IconButton, TextField, Paper } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { UserInfoContext } from "../../App"
import {userInfo} from "../constants/Constant"
import authHeader from "../services/auth-header"

const useStyles = makeStyles({
  textFields: {
    marginLeft: 20
  }
});


export default function UserInfo() {

  const [name,setname]=useState("");
  const [course,setcourse]=useState("");
  const [phoneNumber,setphoneNumber]=useState("");
  const [emailId,setemailId]=useState("");
  const [profilePic,setprofilePic]=useState();
  const [institution,setinstitution]=useState("");
  const [address,setaddress]=useState("");
  const [verificationDoc,setVerificationDoc]=useState("");



  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const userInfoContext = useContext(UserInfoContext)
  useEffect(() => {
    let serverData = {
     }
     let requestData={"email":userInfoContext.userInfoState.name,
    "institution":userInfoContext.userInfoState.institution}
    fetch(`${userInfo}/get-user`,
    { 
        method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(requestData) ,
      headers: {...authHeader(),'Content-Type':'application/json'} })
    
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      serverData = myJson.Item
      setaddress(serverData.address)
      setemailId(serverData.email)
      setinstitution(serverData.institution)
      setphoneNumber(serverData.phoneNumber)
      setprofilePic(serverData.pictureUrl)
      setVerificationDoc(serverData.verificationDoc)
      setname(serverData.name)
    })

    setData(serverData)
    // userInfoContext.userInfoDispatch({ type: 'userState', payload: { ...userInfoContext.userInfoState, "service": serverData.service } })
  }, []
  )

  //to handle change for each field
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const verifyUser = (event) => {
    console.log("Handle verify");
  }
  async function onSave() {
    // let requestData={...data};
    // requestData.age=age;
    // requestData.course=course;
    // requestData.services=service;
    // console.log(course)
    // console.log(requestData)
    // requestData.phoneNumber=phoneNumber;
    // let header={...authHeader(),'Content-Type':'application/json'}
    // const response = await fetch(`${serviceURLHost}/nci/user/put-info`, {
    //   method: 'PUT', 
    //   mode: 'cors', 
    //   cache: 'no-cache', 
    //   credentials: 'same-origin', 
    //   headers: header,
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer', 
    //   body: JSON.stringify(requestData) 
    // });
    // return await response.json().then(()=>{
    //  setData(data)
    //  setAge(data.age)
    //  setCourse(data.course)
    //  setService(data.service)
    //  setPhoneNumber(data.phoneNumber)
    //  setIsEdit((previous)=>!previous)
    // });
    setIsEdit((previous)=>!previous)
  }
  const classes = useStyles();
  return (<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper style={{ minHeight: "600px", margin: "10px", textAlign: "left", padding: "10px" }}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
          <Typography variant="h5" component="h2" style={{ display: 'inline-block' }} color="textSecondary">Profile</Typography>
          </Grid>
          <Grid item>
          {!isEdit?
          <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid>
               <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main, marginRight:"5px", color:theme.palette.primary.main}} 
               onClick={onSave}
               >Save</Button>
               <Button variant="contained" style={{backgroundColor:theme.palette.secondary.main, color:theme.palette.primary.main}} onClick={()=>{setIsEdit((previous)=>!previous)}}>Cancel</Button>
               </Grid>}
          </Grid>
          </Grid>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
            />
            <TextField
              label="Institution"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={institution}
              onChange={(e)=>{setinstitution(e.target.value)}}
            />
            <TextField
              label="Course"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={course}
              onChange={(e)=>{setcourse(e.target.value)}}
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={phoneNumber}
              onChange={(e)=>{setphoneNumber(e.target.value)}}
            />
            <TextField
              label="Address"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={address}
              onChange={(e)=>{setaddress(e.target.value)}}
            />
            <TextField
              label="Email Id"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={emailId}
              onChange={(e)=>{setemailId(e.target.value)}}
            />

          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={{ minHeight: "600px", margin: "10px", textAlign: "left", padding: "10px" }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar style={{ width: 150, height: 150 }} src="/broken-image.jpg" />
          </div>
          <div style={{ display: 'grid', marginTop: "60px" }}>
            <Typography variant="body1" component="div" style={{ display: 'inline-block' }}>Proof Documents</Typography>
            <TextField
              multiple
              type="file"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop:"20px" }}>
          <Button
            onClick={verifyUser}
            style={{backgroundColor:theme.palette.primary.main}}
            variant="contained"
          >
            Verify Student
          </Button>
          </div>

        </Paper>
      </Grid>
    </Grid>
  </ThemeProvider>)
}