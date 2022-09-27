import React from 'react'
import MeetupList from "../components/meetups/MeetupList"
import Layout from '../components/layout/Layout'
import { MongoClient } from "mongodb"



const index = (props) => {

    
    
  return (
    
      <MeetupList meetups={props.meetups}/>
    
    
  )
}


export async function getStaticProps(context){
    console.log("context 시작");
    console.log(context);
    const client = await MongoClient.connect(
        "mongodb+srv://nextjsHangeol:IFqWIBgDN3OzBzXM@cluster0.yq1jxon.mongodb.net/?retryWrites=true&w=majority"
        );
    
        const db = client.db("Sibal");

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.find().toArray();
    
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