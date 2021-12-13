import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useEffect,useState } from 'react';
import authHeader from '../../services/auth-header';
import {serviceURLHost} from "../../constants/Constant"
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';

const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
  });
  

export default function AccommodationCard(props){

  const [area,setArea]=useState("");
  const [eirCode,setEirCode]=useState("");
  const [duration,setDuration]=useState("");
  const [availablity,setAvailablity]=useState("");
  const [picture,setPicture]=useState();
  const [pictureData,setPictureData]=useState("");
  const [rent,setRent]=useState("");
  const [institution,setInstitution] = useState("");
  const [description,setDescription]=useState("");
  const [isEdit,setIsEdit]=useState(true);

  const [data,setData]= useState(
    {
          "area":"",
          "eirCode":"",
          "duration":"",
          "availablity":"",
          "institution":"",
          "picture":{data:""},
          "rent":"",
          "description":""
      }

  );


    async function onSaveHandler() {

    //   let requestData={...data};
    //   requestData.area=data.area!==area && area!==""?area:data.area;
    //   requestData.eirCode=data.eirCode!==eirCode && eirCode!==""?eirCode:data.eirCode;
    //   requestData.duration=data.duration!==duration && duration!==""?duration:data.duration;
    //   requestData.availablity=data.availablity!==availablity && availablity!==""?availablity:data.availablity;
    //   requestData.education=data.education!==education && education!==""?education:data.education;
    //   requestData.work=data.work!==work && work!==""?work:data.work;
    //  // requestData.picture=data.picture!==picture && area!==""?picture:data.picture;
    //   requestData.picture=null;
    //   requestData.rent=data.rent!==rent && rent!==""?rent:data.rent;
    //   requestData.description=data.description!==description && description!==""?description:data.description;
    //   requestData=JSON.stringify(requestData)
    //   const formData = new FormData();
    //   formData.append("accomodation", requestData);
    //   formData.append("file",picture);

    //   // console.log(course)
    //   console.log(requestData)
    //   // requestData.phoneNumber=phoneNumber;
    //   let header={...authHeader()}
    //   const response = await fetch(`${serviceURLHost}/nci/accomodation/add`, {
    //     method: 'PUT', 
    //     mode: 'cors', 
    //     cache: 'no-cache', 
    //     credentials: 'same-origin', 
    //     headers: header,
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer', 
    //     body: formData 
    //   });
    //   return await response.json().then(()=>{
    //    setArea(data.area)
    //    setEirCode(data.eirCode)
    //    setDuration(data.duration)
    //    setAvailablity(data.availablity)
    //    setEducation(data.education)
    //    setWork(data.work)
    //    setPicture(data.picture)
    //    setPictureData(data.picture.data)
    //    setRent(data.rent)
    //    setDescription(data.description)
       setIsEdit((previous)=>!previous)
    //   }).catch(()=>{
    //     setIsEdit((previous)=>!previous)
    //   }); 
     }

  useEffect(()=>{
    console.log(props)
    setArea(props.area)
    setEirCode(props.eirCode)
    setDuration(props.duration)
    setAvailablity(props.availablity)
    setInstitution(props.institution)
    setPicture(props.picture)
    setRent(props.rent)
    setDescription(props.description)
     },[props]
     )
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
      { console.log(props)}
          <Card className={classes.root} variant="outlined">
         <CardContent>
         <Grid alignSelf="center">
              <Typography variant="h4">Accomodation Update</Typography>
              </Grid>
           <div style={{display: 'block',marginLeft: 'auto',width: '54%'}}>
         <Grid>
           {isEdit?
           <IconButton onClick={()=>{setIsEdit((previous)=>!previous)}}>
             <EditIcon>
               </EditIcon>
               </IconButton>:
               <Grid spacing={2}>
               <Button variant="contained" onClick={onSaveHandler}
               style={{marginRight:"8px", backgroundColor:"#2EC4B6"}}
               >Save</Button>
               <Button variant="contained" onClick={()=>{setIsEdit((previous)=>!previous)}}
               style={{backgroundColor:"#2EC4B6"}}
               >Cancel</Button>
               </Grid>
               }
               </Grid>
         </div>
        <br/><br/>
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Area:</Typography>
          {isEdit?
          <Typography value={area} variant="h5" component="h2" style={{display: 'inline-block'}}>{area}</Typography>:
          <TextField value={area} onChange={(e)=>{setArea(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">EirCode:
          </Typography> 
          {isEdit?
          <Typography value={eirCode} variant="h5" component="h2" style={{display: 'inline-block'}}>{eirCode}</Typography>:
          <TextField value={eirCode} onChange={(e)=>{setEirCode(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Duration:
          </Typography>
          {isEdit?
          <Typography value={duration} variant="h5" component="h2" style={{display: 'inline-block'}}>{duration}</Typography>:
          <TextField value={duration} onChange={(e)=>{setDuration(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Availablity:
          </Typography> 
          {isEdit?
          <Typography value={availablity} variant="h5" component="h2" style={{display: 'inline-block'}}>{availablity}</Typography>:
          <TextField value={availablity} onChange={(e)=>{setAvailablity(e.target.value)}}>{availablity}</TextField>
          }
          <br/><br/>
          <Grid container justifyContent="center" spacing={0}>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Picture:
          </Typography>
          {isEdit?
         <Grid>
            {
              pictureData !== null && pictureData !== undefined ?
           <Typography variant="h5" component="h2" style={{display: 'inline-block'}}><img src={"data:image/png;base64,"+pictureData} alt="not Uploaded" width="100 px" height="100 px"/></Typography>
           :
           <Typography variant="h5" component="h2" style={{display: 'inline-block'}}>No image yet </Typography>
            }
         </Grid>:
          <Grid>
          <input
          accept="image/*"
          style={{ display: 'none' }}
          id="upload-button"
          type="file"
          onChange={(event)=>{
            console.log(event.target.files)
            setPicture(event.target.files[0])
            setPictureData(event.target.files[0].data)
          }}
        />
        <label htmlFor="upload-button">
          <Button variant="contained" component="span" style={{backgroundColor:"#2EC4B6"}}
          onClick={(param)=>{
            console.log(param.target)
          }}
          >
            Upload
          </Button>
        </label>
        <Typography>{picture!==undefined && picture!==null?picture.name:""}</Typography>
        </Grid> }
        </Grid>
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Rent:
          </Typography> 
          {isEdit?
          <Typography value={rent} variant="h5" component="h2" style={{display: 'inline-block'}}>{rent}</Typography>:
          <TextField value={rent} onChange={(e)=>{setRent(e.target.value)}}></TextField>
          }
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Description:
          </Typography>
          {isEdit?
          <Typography value={description} variant="h5" component="h2" style={{display: 'inline-block'}}>{description}</Typography>:
          <TextField value={description} onChange={(e)=>{setDescription(e.target.value)}}></TextField>
          }
      </CardContent>
    </Card>
    </ThemeProvider>)
}