// import React,{useEffect , useState} from "react";
// import "./Olxcard.css";
// import firebase from "firebase";
// import { BrowserRouter as  Router,
//     useHistory
// } from "react-router-dom";


// function Olxcard(props) {
//     // useEffect(()=>{
//     //    const id = localStorage.getItem("roomid")
//     //       getmsg(id)
//     // },[])
//     const history = useHistory();
//     const createchatrooms = (adId , ownerId , uid) =>{
//         console.log("clicked")
//         firebase.firestore().collection("chatroom").where(adId , "==" , true)
//         .where(ownerId , "==" , true).where(uid , "==" , true).get()
//         .then((data)=>{
//            console.log(data);
//            if(data.empty){

//                firebase.firestore().collection("chatroom").add({
//                    [adId]:true,
//                    [ownerId]:true,
//                    [uid]:true

//                }).then((data)=>{
//                    console.log("room created successfully");
//                    localStorage.setItem("roomid", data.id)
//                    console.log(data.id);
//                    let path = `/Chat `; 
//                    history.push(path);
//                 //    sendmessage(data.id);
//                })
//            }else{
//                data.forEach((val)=>{
//                 localStorage.setItem("roomid", val.id)
//                    console.log("-----------------------",val.id);
//                    let path = `/Chat`; 
//                    history.push(path);
//                 //    sendmessage(val.id);
//                })
//            }

//         })
//     } 
   
  

// return(
//     <div>
//     <div className="olxcard">
       
//      {props.data.map((doc)=>{
//         //  console.log("ADId", doc.adId)
//         //  console.log(" ownerId", doc.ownerId)
//         // console.log(doc.ownerId == id.uid)
//         const id =JSON.parse(localStorage.getItem("userData"))
//         //  console.log(id.uid);
//         return(
//                 <div className="maincard">
//                 <div className="olximage">
//                     <img src={doc.url}/>
//                 </div>
//                 <div className="olxdetail">
//                     <h4>{doc.price}</h4>
//                     <h3><button disabled={doc.ownerId == id.uid ? true : false} onClick={()=>{createchatrooms(doc.adId , doc.ownerId , id.uid)}}>Chat</button></h3>
//                 </div>
//                 </div>
//         )
//    })} 
    
//     </div>
//     </div>
// );
// }

// export default Olxcard;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { shadows } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import firebase from 'firebase';
import { BrowserRouter as  Router,
    useHistory
} from "react-router-dom";
import { Button } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:40,
    backgroundColor:"lightgrey",
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
    objectFit:"cover",   
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Olxcard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
      const history = useHistory();
    const createchatrooms = (adId , ownerId , uid) =>{
        console.log("clicked")
        firebase.firestore().collection("chatroom").where(adId , "==" , true)
        .where(ownerId , "==" , true).where(uid , "==" , true).get()
        .then((data)=>{
           console.log(data);
           if(data.empty){

               firebase.firestore().collection("chatroom").add({
                   [adId]:true,
                   [ownerId]:true,
                   [uid]:true

               }).then((data)=>{
                   console.log("room created successfully");
                   localStorage.setItem("roomid", data.id)
                   console.log(data.id);
                   let path = `/Chat `; 
                   history.push(path);
                //    sendmessage(data.id);
               })
           }else{
               data.forEach((val)=>{
                localStorage.setItem("roomid", val.id)
                   console.log("-----------------------",val.id);
                   let path = `/Chat`; 
                   history.push(path);
                //    sendmessage(val.id);
               })
           }

        })
    } 

  return (
    <Container  maxWidth="lg" >
        <Grid container elevation={3} >
     {props.data.map((val , ind)=>{
        const id =JSON.parse(localStorage.getItem("userData"))
        return(
            <Grid xs={12} md={6} lg={4} >
            <Card className={classes.root}  >
            <CardHeader 
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={val.Productname}
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={val.url}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              RS:{val.price}
              {/* <IconButton aria-label="share">
              </IconButton> */}
              <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                // onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                
                <Button disabled={val.ownerId == id.uid ? true : false} onClick={()=>{createchatrooms(val.adId , val.ownerId , id.uid)}}>
                    Chat
                </Button>
                {/* <ExpandMoreIcon /> */}
              </IconButton>
            </CardActions>
            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse> */}
           
          </Card>
          </Grid>
       
        )
    })}
    </Grid>
      </Container>
  );
}