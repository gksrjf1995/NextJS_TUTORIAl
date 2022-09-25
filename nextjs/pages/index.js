import React from 'react'
import MeetupList from "../components/meetups/MeetupList"
import Layout from '../components/layout/Layout'
import { MongoClient } from "mongodb"

const DUMMY_data = [
    {
        id : 1,
        image : "ddd",
        title : "test",
        address :  "seoul",
        
    },
    {
        id : 3,
        image : "ddd",
        title : "test3",
        address :  "busan",
    },
    {
        id : 2,
        image : "2ddd",
        title : "2test",
        address :  "2seoul",
    }
  ]

const index = (props) => {

    
    
  return (
    
      <MeetupList meetups={props.meetups}/>
    
    
  )
}


export async function getStaticProps(){

    const client = await MongoClient.connect(
        "mongodb+srv://nextjsHangeol:IFqWIBgDN3OzBzXM@cluster0.yq1jxon.mongodb.net/?retryWrites=true&w=majority"
        );
    
        const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.find().toArray();
    console.log(result);
    
    return {
        props : {
            meetups : result.map((item)=>({
                id : item._id.toString(),
                image : item.image,
                title : item.title,
                address :  item.address,
            }))
        },
        revalidate : 10
        
    };
}

export default index