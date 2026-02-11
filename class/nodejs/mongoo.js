import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"; 

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//mongoo connection

mongoose
  .connect(
    "mongodb+srv://manish1183_db_user:Manish1183@cluster0.zwrkj2e.mongodb.net/",
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
  
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});


const User = mongoose.model("User", UserSchema);


app.post("/register", async (req, res) => {
  //   const { email, username, password } = req.body;
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;

  let hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email: email,
    username: username,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  if (!savedUser)
    return res.status(400).send({ message: "Error creating user" });

  res.status(201).send({ message: "user created successfully" });
});

app.get("/allusers", async (req, res) => {

  const users = await User.find();

  if (!users) return res.status(404).send({ message: "No users found" });

  res.status(200).send(users);
});

app.get("/", (req, res) => {
  res.end("hii");
});

app.listen(PORT, () => {
  console.log("server started");
});


app.put("/update/:id", async (req, res) => {
  try{
    const user = await User.findByIdUpa(req.params.id);

  }
  const id = req.params.id;
  const { email, username, password } = req.body;
  

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { email, username, password },
    { new: true }
  );

  res.status(200).send(updatedUser);
});
