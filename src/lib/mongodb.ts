import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://faqwithjoscor:<db_password>@gigsflixmarke.ougst.mongodb.net/?retryWrites=true&w=majority&appName=gigsflixmarke";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
    return client.db("gigsflix");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export async function closeDatabaseConnection() {
  await client.close();
}