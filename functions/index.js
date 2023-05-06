 import functions from "firebase-functions"
 import express from "express"
 import cors from "cors"

 import { getAllHoneyHoles, addHoneyHole, deleteHoneyHole } from "./honeyholes.js"

 const PORT = 3005
 const app = express()

 app.use(cors())
 app.use(express.json())

 app.get('/honeyholes', getAllHoneyHoles)
 app.post('/honeyholes', addHoneyHole)
 app.delete('/honeyholes/:docId', deleteHoneyHole)

 app.listen(PORT , () => {
  console.log(`Listening on http://localhost:3005...`)
 })