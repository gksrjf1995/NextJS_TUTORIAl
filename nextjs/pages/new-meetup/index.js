import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import axios from "axios"
import {useRouter} from "next/router"

const index = () => {

  const router = useRouter();
  
  const addMeetupHandler = async(enterNewMeeupDate) =>{

    const result = await axios.post("/api/new-meetup",{
     
      image : enterNewMeeupDate.image,
      title : enterNewMeeupDate.title,
      address :  enterNewMeeupDate.address,
      description : enterNewMeeupDate.description,
    })
     
      
    const data = await result.data
    console.log(data);
    
    router.push("/");
    
    
   
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} test={"test"}/>
  )
}

export default index