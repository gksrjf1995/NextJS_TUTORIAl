import { MongoClient } from "mongodb"


const handle = async(req,res) =>{

    if(req.method === "POST"){
        const data = req.body
        console.log(data);
        
        const client = await MongoClient.connect(
            "mongodb+srv://nextjsHangeol:IFqWIBgDN3OzBzXM@cluster0.yq1jxon.mongodb.net/?retryWrites=true&w=majority"
            );
        
        const db = client.db("Sibal");
    
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        
        console.log(result);

        client.close();

        res.status(201).json({message : "성공"});

        
    }

}

export default handle