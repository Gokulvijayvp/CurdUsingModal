const express = require('express')
const app = express()

const mongoose = require('mongoose')
const UserModal = require('./model/UserModel')

mongoose.connect('mongodb://127.0.0.1:27017/usersdbs')

const cors = require('cors')
const bodyparser = require('body-parser')

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(bodyparser.json())


app.get('/users', async(req,res) =>{
    try {
        const response =  await UserModal.find()
        res.json(response)        
    } catch (error) {
        console.log(error)
    }
})

app.post('/users/newuser' , async(req,res) =>{
    try {
        const newusers = await UserModal(req.body)        
        res.json(newusers)
        newusers.save()
    } catch (error) {
        console.log(error)
    }
})

app.put('/users/updateuser/:id' , async(req,res) =>{
    try {
        const id = req.params.id
        const updateuser = await UserModal.findByIdAndUpdate(id, req.body, {new :true}) 
        res.json(updateuser)
    } catch (error) {
        console.log(error)
    }
})


app.delete('/users/deleteusers/:id', async(req,res) =>{
    try {
        const id = req.params.id 
        const deleteuser = await UserModal.findByIdAndDelete(id) 
        res.json(deleteuser)      
    } catch (error) {
        console.log(error)
    }
})




app.listen(3030)