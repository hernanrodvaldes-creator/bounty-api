const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Hernan_db:test1234@cluster0.wbismyn.mongodb.net/bounty_db";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");
  } catch (err) {
    console.error("❌ Error real:", err);
  } finally {
    await client.close();
  }
}

run();
