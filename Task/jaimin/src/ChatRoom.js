import React, { useEffect, useState } from 'react'
import { CreateConnetion } from './CreateConnetion'

function ChatRoom({roomId}) {

    // CreateConnetion(serverUrl,roomId)

    

    const[serverUrl,setserverUrl]= useState("http://localhost:3000/")

    useEffect(()=>{
     const connection= CreateConnetion(serverUrl,roomId);
     connection.connect();

     return()=>{
      connection.disconnect();
     }
    },[serverUrl,roomId])

  return (
    <div>
    
    </div>
  )
}




function Chat(){

// const [roomId,setRoomId] = useState("General");
// const [show,setshow] = useState(flase)
const [roomId,setRoomId] = useState("General");
const [show,setshow] = useState(false)



    return(

        <>

         choose your Room:
         <select value ={roomId} onChange={(e)=>{setRoomId(e.target.value)}}>
         <option>General</option>
         <option>Musice</option>
         <option>Travel</option>
         </select>

         <button onClick={()=>{setshow(!show)}}>
        {(show)? "close chat" : "openchat" }
         
         </button>

         <ChatRoom roomId={roomId}/>
        </>
    )
}
export default Chat;
