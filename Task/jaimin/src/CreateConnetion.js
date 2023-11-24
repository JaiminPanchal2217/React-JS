import React from 'react'

 export function CreateConnetion(serverUrl,roomId) {
  return {

    connect(){
      console.log("Connected to " + roomId + "at" + serverUrl)
    },
    disconnect(){
      console.log("DisConnected From " + roomId + "at" + serverUrl)
    }

    

   
  }
    
 
}



