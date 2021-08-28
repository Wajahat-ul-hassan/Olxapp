import React,{useEffect , useState} from "react";
import firebase from "firebase";

function Chat (){
    const[sms , setsms] = useState([""]);
    const[massage , setmassage] = useState([""]);
    useEffect(()=>{
        // window.location.reload();
        getmsg()
    },[])
    
    const roomId = localStorage.getItem("roomid")
    const sendmessage = () =>{
        firebase.firestore().collection("chatroom").doc(roomId)
        .collection("msg").add({
            type: "text",
            text: sms,
            createdAt:Date.now()
        })
       }
       const getmsg =async () =>{
        const massages =await firebase.firestore().collection("chatroom").doc(roomId)
         .collection("msg").get()
         console.log(massages)
         const allmsg = []
         massages.forEach((msge)=>{
           console.log("----------------------------" , msge.data().text);
           allmsg.push(msge.data().text);
         })
         setmassage(allmsg)
     }
    return(
        <div>
            {massage && massage.map((val)=>{
                return(
                    <h1>{val}</h1>
                )
            })}
           <input type="text" placeholder="write message" onChange={(e)=>{setsms(e.target.value)}}/>
           <button onClick={()=>{sendmessage()}}>Send</button>
        </div>
    )
}

export default Chat;