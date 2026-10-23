import dbConnection from "../db/db.js";
async function userModel(obj) {
    let db=await dbConnection();

    const collection=db.collection("users");
    const result=await collection.insertOne(obj);
};
export default userModel;