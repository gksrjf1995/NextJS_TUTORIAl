import React from 'react'
import { Fragment } from 'react';
import Head from "next/head"
import { MongoClient , ObjectId  } from 'mongodb';

const index = (props) => {
  console.log(props.sibal.image);
  
  return (
    <Fragment>
      <Head>
        <title>MY First Next.js Tutorial</title>
      </Head>
      <div>
        <h1> <p>{props.sibal.title}</p></h1>
        <img src={props.sibal.image}/>
        <p>{props.sibal.address}</p>
        <p>{props.sibal.description}</p>
      </div>
    </Fragment>
   
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
  
  

  const meetupId = context.params.meetupid
  console.log(meetupId);
  const cliecnt = await MongoClient.connect("mongodb+srv://nextjsHangeol:IFqWIBgDN3OzBzXM@cluster0.yq1jxon.mongodb.net/?retryWrites=true&w=majority")
  
  const meetupCollection = cliecnt.db("Sibal");

  const collection = meetupCollection.collection("meetups");
  
  const result = await collection.findOne({_id : ObjectId(meetupId) });
  console.log(result);

  return {
    props : {
      sibal : {
        id : result._id.toString(),
        image : result.image,
        title : result.title,
        address : result.address,
        description : result.description
      }
    }
  };
}

export default index