import { ObjectId } from "mongodb";
import dbConnection from "../db/db.js";
async function DeleteUser(req,resp) {
 const id=req.params.id
 const db=await dbConnection();
 const result=await db.collection("users").deleteOne({
   _id:new ObjectId(id)
 });

 resp.status(200).json({
    message:"Data Deleted Sucessfully"
 })
 
}

export default DeleteUser;
