import { MongoClient } from "mongodb";
async function userDataModel(){
    const dbName="college";
    const url="mongodb://localhost:27017";
    const client=new MongoClient(url);
    await client.connect();
    const db=client.db(dbName);
    const collection=db.collection("users");
    const result=await collection.find().toArray();
    return result;
};
export default userDataModel;