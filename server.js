const express = require("express")
const app = express()
const PORT = 3000

const rappers = {
    "21 savage": {
        "birthName": "S B A-J",
        "birthLocation": "London, England",
        "age": 29,
    },

    "chance the rapper": {
        "birthName": "Chancellor Bennett",
        "birthLocation": "Chicago, Illinois",
        "age": 29
    },

    "unknown": {
        "birthName": "classified",
        "birthLocation": "classified",
        "age": 0
    }
}

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}. Go catch it!`)
})

app.get("/api/:name", (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers["unknown"])
    }
    
})