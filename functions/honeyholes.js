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
export async function deleteHoneyHole(req,res){
  const docId = { '_id': new ObjectId(req.params.docId)}

  await coll.deleteOne(docId)
  res.status(201).send({message: 'execute order 66 🔫'})
}