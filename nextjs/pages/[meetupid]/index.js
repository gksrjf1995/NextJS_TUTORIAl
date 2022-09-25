import React from 'react'


const index = (props) => {
  console.log(props.sibal);

  return (
    <div>meetupid{props.sibal}</div>
  )
}

export const getStaticPaths = () => {
  return {
    fallback :  true , 
    paths : [
      {
        params : {
          meetupid : "m1"
        },  
      },
      {
        params : {
          meetupid : "m2"
        },  
      },
    ]
  }
}

export async function getStaticProps(context){
  
  console.log(context.params.meetupid); 

  return {
    props : {
      sibal : "Sibal"
    }
  };
}

export default index