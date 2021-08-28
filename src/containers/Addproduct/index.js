import React, {useState} from "react";
import "./Addproduct.css";
import firebase from "firebase";
import {
    BrowserRouter as Router,
    Link,
    useHistory
   
  } from "react-router-dom";


var firebaseConfig = {
    apiKey: "AIzaSyDjhqpUrTXU-0W-mB7iWay1tlj_xCgilss",
    authDomain: "olxapp-cf75c.firebaseapp.com",
    projectId: "olxapp-cf75c",
    storageBucket: "olxapp-cf75c.appspot.com",
    messagingSenderId: "201217247217",
    appId: "1:201217247217:web:ec6447f2602a0487f4e650"
  };

// firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

function Addproduct() {

 const [ Productname, setproductName ] = useState('');
 const [ categeory , setcategeory ] = useState('');
 const [ price, setprice ] = useState('');
 const [file , setfile] = useState('');
 const history = useHistory();

 const Addproducts = async () =>{
     alert("clicked")
     
    var storageRef = firebase.storage().ref();
    var spaceRef = storageRef.child(JSON.stringify(Math.random()));
    var uploading = spaceRef.put(file);
    console.log(file)
    try{
        await uploading
        var url = await spaceRef.getDownloadURL()
        console.log(url);
        const user = JSON.parse(localStorage.getItem("userData"))
        let path = ("/product");
        history.push(path);
        firebase.firestore().collection("OlxProducts").add({
            // [user.id]:true,
            Productname:Productname,
            categeory:categeory,
            price:price,
            url:url,
            ownerId:user.uid
        
        })
        
     
        console.log(" handleClick ~ url", url)
        
    }
    catch(error){
        console.log(" handleClick ~ error", error)
    }
 }

    return(
        <div className="login">
        <div className="loginform" >
             <div className="loginright">
                 <img src="https://sleeknote.com/wp-content/uploads/2020/03/Product-Listing-Pages-Twitter.jpg.jpg" height="600px" width="600px" />
             </div>
             <div className="loginleft">
              <h1>Add Product</h1>
             <h3> ProductName:<input type="text" placeholder="Enter Your Name"  onChange={e => setproductName(e.target.value)}/></h3>
             <h3> Categeory:<input type="text" placeholder="Add Categeory" onChange={e => setcategeory(e.target.value)}/></h3>
             <h3> Price:<input type="number" placeholder="Enter  Password" onChange={e => setprice(e.target.value)}/></h3>
             <h3> Image:<input type="file" placeholder="Enter  Password" onChange={e => setfile(e.target.files[0])}/></h3>
             {/* <h3> ID:<input type="file" placeholder="Enter  Password" onChange={e => setfile(e.target.files[0])}/></h3> */}
             
              <button onClick={()=>Addproducts()}>ADD</button>
             </div>
             </div>
     </div>
    );
}

export default Addproduct;