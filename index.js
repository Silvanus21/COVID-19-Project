const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const homePageRouter = require("./router/homePageRouter")
const resultPageRouter = require("./router/resultPageRouter")
const contactPageRouter = require("./router/contactPageRouter")

const app = express()

// using morgan middleware...
app.use(morgan("dev"))

// setting viewengine as ejs...
app.set("view engine", "ejs")

// uisng bodyParser middleware...
app.use(bodyParser.urlencoded({ extended : true }))

// using static pages in public folder
app.use(express.static(__dirname + "/public"))

// routes...

// starting Page router
app.get("/", (req, res) => {
    res.redirect("/homePage")
})

// homePage route...
app.use("/homePage", homePageRouter)

// resultPage route...
app.use("/resultPage", resultPageRouter)

// contactPage route...
app.use("/contactPage", contactPageRouter)



// serving the web page...
const port = process.env.PORT || 3000 
app.listen(port, () => {
    console.log(`server live at port : ${port}`);
})