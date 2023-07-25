const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messages')

router.get('/:id', messagesController.getMessage)
router.get('/messages', messagesController.getMessages)
router.post('/save-messages', messagesController.saveMessages)
router.delete('/delete-messages/:id',messagesController.deleteMessages)

module.exports = router
