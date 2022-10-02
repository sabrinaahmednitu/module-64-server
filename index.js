const express = require('express')
const cors = require('cors')
const app = express()
const port =process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users=[
    {id:1, name:'sabrina',email:'sabrina@gmail.com',phone:'856753867586'},
    {id:2, name:'ahmed',email:'ahmed@gmail.com',phone:'56456477586'},
    {id:3, name:'nitu',email:'nitu@gmail.com',phone:'856753867586'},
    {id:4, name:'farajana',email:'farajana@gmail.com',phone:'35674767586'},
    {id:5, name:'momo',email:'momo@gmail.com',phone:'7846543867586'},
    {id:6, name:'shawon',email:'shawon@gmail.com',phone:'724573867586'},
    {id:7, name:'fahmida',email:'fahmida@gmail.com',phone:'658573867586'}
]



app.get('/users',(req,res)=>{
  //filter by query parameter
  console.log('query',req.query);
  if(req.query.name)
  {
    const search=req.query.name.toLowerCase();
    const matched=users.filter(user=>user.name.toLowerCase().includes(search))
    res.send(matched);
  }
  else{
    res.send(users);
  }
   
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id);
    const user=users.find(user=>user.id==id);
    res.send(user);
})

app.post('/user',(req,res)=>{
    console.log('request post',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
     res.send(user);
 })

app.listen(port, () => {
  console.log(`listening to port ${port}`)
})