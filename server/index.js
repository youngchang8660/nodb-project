const express = require('express')
const cors = require('cors')
const pc = require('./controllers/pets_controller')

const app = express()

app.use(cors())
app.use(express.json())

const petsBaseUrl = '/api/pets'
app.get(petsBaseUrl, pc.get)
app.post(petsBaseUrl, pc.add)
app.delete(`${petsBaseUrl}/:id`, pc.delete)
app.put(`${petsBaseUrl}/:id`, pc.update)

const port = 3010;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})