const express = require('express');
const app = express()
const mongoose = require('mongoose');
const user = require('./Model/user');
const bcrypt = require('bcrypt');
const userRouter = require('./Routers/userRouters/userRouter')
const cors = require('cors')

const dotenv = require('dotenv');
const corsOptionsMiddleware = require('./middleware/corsMiddleware');
dotenv.config();

const port = process.env.port 
const db_url = process.env.DB_URL

mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));



app.use(cors(corsOptionsMiddleware))
app.use(express.json())

app.use('/', userRouter)

// app.get('/', async(req, res)=>{
//     const users = await user.find()
    
//     res.json({users})
// })

// app.get('/single-user/:id', async(req, res)=>{
//     const id = req.params.id 

//     const finduser = await user.findById(id)

//     if(!finduser){
//         return res.json({message: 'User not found'})
//     }
//     // console.log('*******', finduser)

//     res.json(finduser)
// })


// app.delete('/delete-user', async(req, res)=>{
//     const id = req.query.id 
//     const finduser =await user.findById(id)
//     // console.log('dadasd', finduser)
//     if(!finduser){
//         return res.json({message: 'User Not Found'})
//     }

//     const deleteUser = await user.findByIdAndDelete(id)
//     if(!deleteUser){
//         return 
//     }
//     res.json({message: 'User Successfully deleted'})
// })

// app.post('/add-user', async(req, res)=>{
//     const {name, password} = req.body

//     const hashPassword =await  bcrypt.hash(password, 10)
//     const newUser = user({
//         name:name, 
//         password: hashPassword
//     })
//     try{
//         const savedUser = await newUser.save()
//         res.json(savedUser)


//     }catch(err){
//         console.log('err', err)
//     }
// })

app.listen(port , ()=>{
    console.log(`App Listen on port ${port}`)
})