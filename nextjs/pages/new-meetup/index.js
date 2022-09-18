import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const index = () => {
  
  const addMeetupHandler = (enterNewMeeupDate) =>{
    console.log(enterNewMeeupDate)
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} test={"test"}/>
  )
}

export default index