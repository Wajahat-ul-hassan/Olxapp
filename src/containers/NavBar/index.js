import React,{useState , useEffect} from "react";
import "./NavBar.css";
import firebase from "firebase";
import Olxcard from "../Olxcards";
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Link,
    useHistory
   
  } from "react-router-dom";

const Navbar = () =>{
    const [ data , setdata] = useState([""]);
    const [ nav , setnav] = useState([""]);
    const [ act , setact] = useState([""]);

    useEffect( () => {
       getdata();
    },[])
    
    const getdata =async () =>{
        // alert("getdtaa")
     var fridata = await firebase.firestore().collection("OlxProducts").get()
    
     const alldata = [];
     const allnavs = [];

     fridata.forEach((val)=>{
        const obj ={...val.data(), adId:val.id}
        // console.log("console obj" ,obj)
        alldata.push(obj);
        allnavs.push(val.data().categeory)
    })

    const newnav = allnavs.filter((items , index) =>{
        return allnavs.indexOf(items) == index;
    })

    setnav(newnav);
    setdata(alldata);
    setact(alldata)
    }

  const  filtecards = async (val) => {
      //   const newdata1 = [];
      const newdata = act.filter((item)=>{
          return item.categeory == val
        });
    //    console.log(newdata)
    //    newdata1.push(newdata);
       setdata(newdata);
    }
    const alldata = () =>{
        setdata(act)
    } 

    const history = useHistory();
    
    const Product = () =>{
        let path = "/Addproduct"
        history.push(path)
    }

        return(
        <div>
            <Button onClick={()=>{Product()}}   variant="outlined" size="large" color="secondary"> ADD product</Button>
        <div className="navbar">
            {nav.map((val , index)=>{
                return (
                    <ul >
                        <li className="navlist">
                            <button className="navbutton" onClick={()=>{filtecards(val)}}>{val}</button >

                        </li>
                    </ul>
                )
            })}
            <ul>
                <li>
                <button className="navbutton" onClick={()=>{alldata()}}>ALL</button >
                </li>
            </ul>
             
             </div>
             <Olxcard data={data}/>
        </div>
    );

} 


export default Navbar;