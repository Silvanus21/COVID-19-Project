const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const homePageRouter = require("./router/homePageRouter")
const resultPageRouter = require("./router/resultPageRouter")
const getInTouchRouter = require("./router/getInTouchRouter")
const session = require("express-session")

const app = express()

// setting up session...
app.use(session({
    secret : "gameofthronesisbestshowever",
    resave : true,
    saveUninitialized : true
}))

// using morgan middleware for development purpose...
app.use(morgan("dev"))

// setting viewengine as ejs...
app.set("view engine", "ejs")

// uisng bodyParser middleware...
app.use(bodyParser.urlencoded({ extended : true }))

// using static pages in public folder
app.use(express.static(__dirname + "/public"))

// routes...

// homePage route...
app.use("/", homePageRouter)

// resultPage route...
app.use("/resultPage", resultPageRouter)

// contactPage route...
app.use("/getInTouch", getInTouchRouter)

// error page...
app.use((req, res) => {
    res.render("error")
} )


// setting up server....
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server live at port: ${port}`);
})