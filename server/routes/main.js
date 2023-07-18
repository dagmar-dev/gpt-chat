const express = require("express")
const router = express.Router()
const chatController = require("../controllers/chat")
const homeController = require("../controllers/home")



//Chat routes
router.get("/", homeController.getAwake)
router.post("/message",chatController.postMessage)




module.exports = router