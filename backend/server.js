const express = require('express') ;

const app = express() ;

const notes = require('./data/notes')

const dotenv = require('dotenv') ;

dotenv.config()

app.get('/',(req,res)=>{
  res.send('hello world') 
  res.end()
})
app.get('/api/notes',(req,res)=>{
  res.send(notes) 
  res.end()
})
app.get('/api/notes/:id',(req,res)=>{
  const data = notes.find((n)=> n._id === req.params.id)
  res.send(data)
})

const PORT =process.env.PORT || 5000

app.listen(PORT,()=>console.log(`app listen on port ${PORT}`))

