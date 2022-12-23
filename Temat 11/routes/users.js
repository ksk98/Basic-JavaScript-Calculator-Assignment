const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const users = [

]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body
    user["id"] = uuidv4()
    users.push(user)
    res.send(users)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const out = users.find((user) => user.id === id)
    res.send(out)
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        users[index] = req.body
        users[index]["id"] = id
    }

    res.send(users[index])
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    const index = users.findIndex((user) => user.id === id)
    users.splice(index, 1)
    res.status(204).send()
})

module.exports = router