const express = require("express")
const uuid = require("uuid")

const port = 3000
const app = express()



const users = []

app.get("/users", (request, response) => {
    return response.json(users)
})


app.post("/users", (request, response) => {
    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)
})


app.put("/users/:id", (request, response) => {
    const { id } = request.params
    const { name, age } = request.body

    const updatedUser = { id, name, age }

    const index = users.findIndex(user => user.id === id)


   if(index < 0){
    return response.status(404).json ({menssage:"user not found"})
   }



    users[index] = updatedUser

   
    return response.json(updatedUser)

})








app.listen(port, () => {
    console.log("lest gol $(port)")
})