import React from 'react'
import MeetupList from "../components/meetups/MeetupList"
import Layout from '../components/layout/Layout'



const index = () => {

    const DUMMY_data = [
        {
            id : 1,
            image : "ddd",
            title : "test",
            address :  "seoul",
        },
        {
            id : 2,
            image : "2ddd",
            title : "2test",
            address :  "2seoul",
        }
      ]
    
  return (
    
      <MeetupList meetups={DUMMY_data}/>
    
    
  )
}

export default index