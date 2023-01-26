const express = require("express")
const route = require('./router/route')
const mongoose = require('mongoose')


const app = express();

app.use(express.json())


mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://anurag:jhansi112233@my-cluster.cummqwt.mongodb.net/todo",
{useNewUrlParser:true})

.then(()=>console.log("mongodb connected"))
.catch(err => console.log(err))

app.use('/',route)

app.use((req,res)=>{
    res.status(404).send({status:false,msg:"request not found"})
})

app.listen(process.env.PORT || 3000,function(){
    console.log('express app running on port '+ (process.env.PORT || 3000))
})