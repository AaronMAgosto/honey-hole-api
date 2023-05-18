 import functions from "firebase-functions"
 import express from "express"
 import cors from "cors"
 import { getHoneyHoleByFilter } from "./dbConnect.js"

 import { getAllHoneyHoles, addHoneyHole, deleteHoneyHole, updateHoneyHole } from "./honeyholes.js"

//  const PORT = 3005
 const app = express()

 app.use(cors())
 app.use(express.json())

 app.get("honeyholes/:filterType/:filterValue", getHoneyHoleByFilter);
 app.get('/honeyholes', getAllHoneyHoles)
 app.post('/honeyholes', addHoneyHole)
 app.delete('/honeyholes/:honeyHoleId', deleteHoneyHole)
 app.patch('/honeyholes/:honeyHoleId', updateHoneyHole)


//  app.listen(PORT , () => {
//   console.log(`Listening on http://localhost:3005...`)
//  })

 export const api = functions.https.onRequest( app );