const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

async function run() {
    const client = new MongoClient(url);

    try {
        await client.connect();

        const db = client.db("mydb1");
        const collection = db.collection("student1");

        // FETCH ALL DATA
        const allData = await collection.find().toArray();
        console.log("All Students:");
        console.log(allData);
        
        // FETCH ONE DATA
        const one = await collection.findOne({});
        console.log("One Student:");
        console.log(one);

    } catch (err) {
        console.log("Error:", err);
    } finally {
        await client.close();
        console.log("Connection closed");
    }
}

run();