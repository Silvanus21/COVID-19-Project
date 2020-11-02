const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// bodyParser middleware...
app.use(bodyParser.urlencoded({ extended: true }));

// connecting mongoose...
mongoose
  .connect("mongodb://localhost:27017/CovidProjectUsers", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

// schema for collection...
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  subject: String,
});

// creating a model...
const CovidProjectUser = mongoose.model("user", userSchema);


// routes...
router.get("/", (req, res) => {
  res.render("getInTouch");
});

router.post("/", (req, res) => {
  
    const newUser = new CovidProjectUser({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });

  newUser.save((error) => {
      if(error){
          res.send(error)
      }else{
          res.redirect("/getInTouch");
      }
  })

});

module.exports = router;