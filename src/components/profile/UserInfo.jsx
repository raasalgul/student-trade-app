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

const useStyles = makeStyles({
  textFields: {
    marginLeft: 20
  }
});


export default function UserInfo() {

  const [name,setname]=useState("");
  const [age,setage]=useState("");
  const [course,setcourse]=useState("");
  const [service,setservice]=useState("");
  const [phoneNumber,setphoneNumber]=useState("");
  const [emailId,setemailId]=useState("");
  const [profilePic,setprofilePic]=useState();
  const [institution,setinstitution]=useState("");
  const [address,setaddress]=useState("");
  const [paymentInfo,setpaymentInfo]=useState("");


  const [data, setData] = useState({});
  const [isEdit, setIsEdit] = useState(true);
  const userInfoContext = useContext(UserInfoContext)
  useEffect(() => {
    let serverData = {
      name: 'Sathish',
      age: '25',
      course: 'Ms in Cloud Computing',
      service: 'Roomate',
      phoneNumber: '123456789',
      emailId: 'sats@gmail.com',
      profilePic: 'http:/url',
      verificationPic: 'http:/url',
      institution: 'XYZ',
      address: 'abc street',
      paymentInfo: 'Cash'
    }
    setData(serverData)
    setservice(serverData.service)
    userInfoContext.userInfoDispatch({ type: 'userState', payload: { ...userInfoContext.userInfoState, "service": serverData.service } })
  }, []
  )

  //to handle change for each field
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const verifyUser = (event) => {
    console.log("Handle verify");
  }

  const classes = useStyles();
  return (<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper style={{ minHeight: "600px", margin: "10px", textAlign: "left", padding: "10px" }}>
          <Typography variant="h5" component="h2" style={{ display: 'inline-block' }} color="textSecondary">Profile</Typography>
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
              label="Payment Info"
              fullWidth
              margin="normal"
              disabled={!isEdit}
              value={paymentInfo}
              onChange={(e)=>{setpaymentInfo(e.target.value)}}
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