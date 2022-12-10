const express = require('express')
const app = express();
const postRoute = require('./routes/posts')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const multer = require('multer');
const path = require('path');


dotenv.config();
app.use(express.json())
app.use("/images",express.static(path.join(__dirname,"/images")))
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    }
  ).then(console.log("connected..."))
  .catch(err=> console.log(err));
  
  const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
      cb(null,"images")
    },
    filename:(req,file,cb) =>{
      cb(null,req.body.name);
    }
  })

const upload =  multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
  res.status(200).json("File has been uploaded")
})


  app.use("/api/posts", postRoute);

  app.use("/",(req,res)=>{
    console.log("This is main url")
    
})

app.listen("8000",()=>{
    console.log("Backend is running on 8000")
})