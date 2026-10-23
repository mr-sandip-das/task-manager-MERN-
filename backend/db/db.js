import { MongoClient } from "mongodb";
    async function dbConnection(){

    const dbName="college";
    const client=new MongoClient(process.env.URL);
    await client.connect();
    const db=client.db(dbName);
    return db;

    }

    export default dbConnection;