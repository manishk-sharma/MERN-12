import express from "express";
import fs from "fs"; 
import { json } from "stream/consumers";
import multer from "multer";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//route

// app.use((req,res,next) =>{
//    let username =  "manish";
//    let password = "12345";
//    let role = "admin";
//    if{
//     req.body.username ===  username &&
//     req.body.password ===  password &&
//     req.body.role ===  role &&
//    }
//    {
//     fs.writeFile("user.txt", JSON.stringify(req.body), (err) => {
//    }
//    else{
//     res.end("Invalid credentials")
//    }
// });


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.end("hello from home page");
});

app.post("/user", (req, res) => {
  res.end("hello from user page");
});

app.post("/upload", upload.single("dp"), (req, res) => {
  res.status(201).send({ message: "media uploaded successfully" });
});

app.post("/reg", (req, res) => {
  res.end("reg success");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});





