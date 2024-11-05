const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const dotenv = require("dotenv")
const UserModel = require("./model/User")
const session = require("express-session")
const MongoStore = require("connect-mongo")


dotenv.config()
const app = express()
app.use(express.json())

const cors = require('cors');

const allowedOrigins = ['https://demo-porsche-frontend.onrender.com', 'http://localhost:5173']; // Add your frontend origin here

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // If you are using cookies with your requests
}));

app.options('*', cors()); // This will handle preflight requests for all routes



mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log("failed to connect to mongodb", err))


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})


app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    }),
    cookie: {maxAge : 24 * 60 * 60 * 1000}
}))


app.post("/signup", async(req, res) => {

    try {
        const {name , email, password} = req.body;
        console.log(name + " " + email + " " + password);
        const existingUser = await UserModel.findOne({email});
        console.log(existingUser);

        if(existingUser){
            return res.status(400).json({error : "Email already exists !!"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({name ,email, password: hashedPassword})
        const savedUser = await newUser.save();
        res.status(200).json(savedUser)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                req.session.user = { id: user._id, name: user.name, email: user.email };
                 res.json("Success");
                console.log(email);
               
            } else {
                res.status(401).json("Password doesn't match");
            }
        } else {
            res.status(404).json("No Records found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



app.post("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({ error: "Failed to logout" });
            } else {
                res.status(200).json("Logout successful");
            }
        });
    } else {
        res.status(400).json({ error: "No session found" });
    }
});

app.get('/user', (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json("Not authenticated");
    }
});
