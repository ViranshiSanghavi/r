const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

async function run() {
  try {
    const client = await MongoClient.connect(url);

    console.log("✅ Connected to MongoDB");

    const db = client.db("mydb");
    const collection = db.collection("student");

    // ---------------- INSERT ----------------
    await collection.insertOne({
      name: "xyz",
      address: "mumbai",
      marks: 74
    });

    await collection.insertMany([
      { name: "xyz1", address: "mumbai", marks: 87 },
      { name: "xyz2", address: "pune", marks: 40 },
      { name: "xyz3", address: "delhi", marks: 65 }
    ]);

    console.log("✅ Data inserted");

    // ---------------- READ ----------------
    const allData = await collection.find().toArray();
    console.log("📌 All Students:");
    console.log(allData);

    const first = await collection.findOne({});
    console.log("📌 First Student:");
    console.log(first);

    const projection = await collection
      .find({}, { projection: { _id: 0, name: 1, address: 1 } })
      .toArray();

    console.log("📌 Projection:");
    console.log(projection);

    // ---------------- UPDATE ----------------
    await collection.updateMany(
      { name: "xyz" },
      { $set: { address: "delhi" } }
    );

    console.log("✏️ Updated");

    // ---------------- DELETE ----------------
    await collection.deleteMany({ address: /^d/ });

    console.log("🗑️ Deleted");

    await client.close();
    console.log("🔒 Connection closed");

  } catch (err) {
    console.log("❌ Error:", err);
  }
}

run();