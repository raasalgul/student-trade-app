import { ThemeProvider,makeStyles } from '@mui/styles';
import theme from "../../themes/Theme"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useEffect,useState,useContext } from 'react';
import authHeader from '../../services/auth-header';
import {postInfo} from "../../constants/Constant"
import EditIcon from '@mui/icons-material/Edit';
import { Button, Grid, IconButton, TextField } from '@mui/material';
import { UserInfoContext } from "../../../App" 

const useStyles = makeStyles({
    root: {
      minWidth: 444,
      alignContent:'center'
    },
  });
  

export default function QandACard(props){

//   const [duration,setDuration]=useState("");
//   const [availability,setAvailability]=useState("");
  const [picture,setPicture]=useState();
  const [pictureData,setPictureData]=useState("");
  const [subject,setsubject]=useState("");
  const [institution,setInstitution] = useState("");
  const [description,setDescription]=useState("");
  const [isEdit,setIsEdit]=useState(true);
//   const [location,setLocation] = useState("")
  const [name,setName] =useState("");

  const userInfoContext = useContext(UserInfoContext) 

  const [data,setData]= useState(
    {
        //   "duration":"",
          "availability":"",
          "institution":"",
          "picture":{data:""},
          "subject":"",
          "description":"",
      }

  );


    async function onSaveHandler() {

      let requestData={...data};
      requestData.institution=data.institution!==institution && institution!==""?institution:data.institution;
      requestData.email = userInfoContext.userInfoState.name;
      requestData.name = data.name!==name && name!==""?name:data.name;
      // requestData.picture=data.picture!==picture && area!==""?picture:data.picture;
      requestData.picture=null;
      requestData.subject=data.subject!==subject && subject!==""?subject:data.subject;
      requestData.description=data.description!==description && description!==""?description:data.description;
      requestData=JSON.stringify(requestData)
      const formData = new FormData();
      formData.append("data", requestData);
      formData.append("file",picture);

      // console.log(course)
      console.log(requestData)
      // requestData.phoneNumber=phoneNumber;
      let header={...authHeader()}
      const response = await fetch(`${postInfo}/add-qAnda`, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: header,
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: formData 
      });
      return await response.json().then((val)=>{
       // console.log(val.picture)
      //  setPicture(val.picture)
      setPicture(val.picture)
       setsubject(val.subject)
       setDescription(val.description)
       setIsEdit((previous)=>!previous)
       setData(val)
      }).catch(()=>{
        setIsEdit((previous)=>!previous)
      }); 
     }

  useEffect(()=>{
    setName(props.name) 
    console.log(props)
    setInstitution(props.institution)
    setPicture(props.picture)
    setsubject(props.subject)
    setDescription(props.description)
    // setData(props)
     },[props]
     )
    const classes = useStyles();
    return(<ThemeProvider theme={theme}>
      { console.log(props)}
          <Card className={classes.root} variant="outlined">
         <CardContent>
         <Grid alignSelf="center">
              <Typography variant="h4">Q and A</Typography>
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
          <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Name:</Typography>
          {isEdit?
          <Typography value={name} variant="h5" component="h2" style={{display: 'inline-block'}}>{name}</Typography>:
          <TextField value={name} onChange={(e)=>{setName(e.target.value)}}></TextField>
          }
        <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">institution:
          </Typography> 
          {isEdit?
          <Typography value={institution} variant="h5" component="h2" style={{display: 'inline-block'}}>{institution}</Typography>:
          <TextField value={institution} onChange={(e)=>{setInstitution(e.target.value)}}></TextField>
          }
          {/* <br/><br/>
          <Grid container justifyContent="center" spacing={0}>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">Picture:
          </Typography>
          {isEdit?
         <Grid>
            {
              pictureData !== null && pictureData !== undefined ?
           <Typography variant="h5" component="h2" style={{display: 'inline-block'}}><img src={picture} alt="not Uploaded" width="100 px" height="100 px"/></Typography>
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
            // setPictureData(event.target.files[0].data)
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
        </Grid> */}
          <br/><br/>
        <Typography variant="h5" component="h2" style={{display: 'inline-block'}} color="textSecondary">subject:
          </Typography> 
          {isEdit?
          <Typography value={subject} variant="h5" component="h2" style={{display: 'inline-block'}}>{subject}</Typography>:
          <TextField value={subject} onChange={(e)=>{setsubject(e.target.value)}}></TextField>
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