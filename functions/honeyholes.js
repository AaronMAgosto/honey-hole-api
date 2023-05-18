import {db} from './dbConnect.js'
import { ObjectId } from 'mongodb'

const coll = db.collection('honeyholes')

// CRUD: GET
export async function getAllHoneyHoles(req,res){
  const honeyHoles = await coll.find({}).toArray()
  res.send(honeyHoles)
}

//CRUD: POST
export async function addHoneyHole(req,res){
  const newHoneyHole = req.body
  await coll.insertOne(newHoneyHole) 
  res.status(201).send({message: "🍯HONEY HOLE ADDED🎣"})
}

// CRUD: DELETE
export async function deleteHoneyHole(req, res) {
  try {
    const honeyHoleId = {"_id": new ObjectId(req.params.honeyHoleId)};
    await coll.deleteOne(honeyHoleId);
    await getAllHoneyHoles(req,res);
  } catch (error) { 
    res.status(500).send({error: "An error occurred while deleting the honey hole🍯"})
  }
}

//CRUD: PATCH
export async function updateHoneyHole(req,res) {
  const honeyHoleId = {"_id": new ObjectId(req.params.honeyHoleId)}
  const updateHoneyHole = { $set: req.body }
  const returnOption = { returnNewDocument: true}
  const query = await coll.findOneAndUpdate( honeyHoleId, updateHoneyHole, returnOption)
  await getAllHoneyHoles(req,res)
  res.status(201).send({message: "Honey hole has been updated"})
  console.table(query.value)
}

