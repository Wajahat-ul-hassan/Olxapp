// import React,{useState} from "react";
// import "./Signup.css"
// import {
//     BrowserRouter as Router,
//     Link
//   } from "react-router-dom";
//   import firebase from "firebase";

// const Signup = () => {
//  const [Name , setName] = useState("");
//  const [Email , setEmail] = useState("");
//  const [Password , setPassword] = useState("");

//    const handleinput = (value , e) =>{
//       value(e.target.value)
    
//     }

//    const Signin = () => {
//        if(Name=="" || Email=="" || Password=="" ){
//          alert("please Fill th e form Correctly")
//        }
//        else{
//          Authentication();
         
//         }
//       }
      
//       const Authentication = async() =>{
//         await firebase.auth().createUserWithEmailAndPassword(Email, Password)
//         .then(()=>{
//           alert("sign up ho gaya");
//     })
//     .catch((err)=>{
//      alert(err);
//      console.log(err);
//     })
//    }
// return(
//     <div className="signup">
//        <div className="signupform" >
//             <div className="signupleft">
//              <h1>Create Account</h1>
//             <h3> Name:<input type="text" placeholder="Enter Your Name" onChange={(e)=>{handleinput(setName , e)}}/></h3>
//             <h3> Email:<input type="Email" placeholder="Enter Your Email" onChange={(e)=>{handleinput(setEmail, e)}}/></h3>
//             {/* <h3> Phone:<input type="Phone" placeholder="Enter Your Phone"/></h3>
//             <h3> DOB:<input type="DOB" placeholder="Enter Your DOB"/></h3> */}
//             <h3> Password:<input type="Password" placeholder="Enter  Password" onChange={(e)=>{handleinput(setPassword , e)}}/></h3>
//             <button onClick={()=>{Signin()}}>Signup</button> 
//            <p>already have an account?</p>
//             <Link to="Login"  className="signuplogin"> LOgin</Link>

            
          
//             </div>
//             <div className="signupright">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJRMoIIK6LC1Bm5jHKM7eKiMVMBHJJOkGKoTvKC-oxKJrSZ6HPZxlTt_KEEWbb09WmVo&usqp=CAU" height="600px" width="600px" />
//             </div>
//             </div>
//     </div>
// );
// }
// export default Signup;
// import Link from '@material-ui/core/Link';
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import firebase from "firebase";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [Name , setName] = useState("");
  const [Email , setEmail] = useState("");
  const [Password , setPassword] = useState("");
   
     const Signin = () => {
       if(Name=="" || Email=="" || Password=="" ){
         alert("please Fill th e form Correctly")
       }
       else{
         Authentication();
         
        }
      }
      
      const Authentication = async() =>{
        await firebase.auth().createUserWithEmailAndPassword(Email, Password)
        .then(()=>{
          alert("sign up ho gaya");
    })
    .catch((err)=>{
     alert(err);
     console.log(err);
    })
   }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            onChange={(e)=>{setName(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="Name"
            autoComplete="Name"
            autoFocus
          />
          <TextField
           onChange={(e)=>{setEmail(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e)=>{setPassword(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={()=>{Signin()}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" to="Login" variant="body2">
                {"Don't have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}