import React from 'react'
import { MongoClient } from 'mongodb';

const index = (props) => {
  console.log(props.sibal);

  return (
    <div>meetupid{props.sibal}</div>
  )
}

export const getStaticPaths = async () => {

  const client =await MongoClient.connect(
    "mongodb+srv://nextjsHangeol:IFqWIBgDN3OzBzXM@cluster0.yq1jxon.mongodb.net/?retryWrites=true&w=majority" 
  )
  
  const db =  client.db("Sibal");
  const meetupCollection = db.collection("meetups");
  const result = await meetupCollection.find({}, { _id : 1}).toArray();
  const test = result.map((item)=>{
    return item._id.toString();
  })

  const test2 = result.map((item)=>({
    sibal : item._id.toString(),
  }))
  console.log("test");
  console.log(test);
  console.log("test2")
  console.log(test2)

  return {
    fallback :  true , 
    paths : result.map((item)=>({
      params : {meetupid : item._id.toString()},
    })),
  }
}

export async function getStaticProps(context){
  
  console.log("context"); 
  console.log(context); 
  const cliecnt = await MongoClient.connect("mongodb+srv://nextjsHangeol:IFqWIBgDN3OzBzXM@cluster0.yq1jxon.mongodb.net/?retryWrites=true&w=majority")
  
  const meetupCollection = cliecnt.db("Sibal");

  const collection = meetupCollection.collection("meetups");
  console.log(collection);

  return {
    props : {
      sibal : "Sibal"
    }
  };
}

export default index