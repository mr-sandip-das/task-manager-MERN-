import { MongoClient } from "mongodb";
import dbConnection from "../db/db.js";
async function userDataModel(){
    const db=await dbConnection()
    const collection=db.collection("users");
    const result=await collection.find().toArray();
    return result;
};
export default userDataModel;