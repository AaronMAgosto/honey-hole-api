import { MongoClient } from "mongodb";
import { mongoURI } from "./secrets.js";

const client = new MongoClient(mongoURI)

export const db = client.db('HoneyHoleDB')



export async function getHoneyHoleByFilter (req, res) {

  const {filterValue} = req.params;

  const collection = await collectionClient
    .find( {"county": filterValue} )
    .toArray()
    .catch(err => res.status(500).json(errMessage));

  console.table( {collection} );
  res.status(200).json(collection);
}
