const Messages = require('../models/messages')

module.exports = {
    getMessage: async (req, res) => {
        try {
            const messages = await Messages.findById(req.params.id)
            res.json(messages)
            console.log('messages')
        } catch (err) {
            
        }
    },
    getMessages: async (req,res) =>{
        const messages = await Messages.find({user:req.user.id})
        console.log(messages)
        res.json(messages)
    },
    saveMessages: async (req, res) => {
        try {
            await Messages.create({
                title:req.body.title,
                messages:req.body.messages
            })
            console.log('messages saved')
            res.json('message saved')
        } catch (err) {
            console.log(err)
        }
    },

    deleteMessages: async (req, res) => {
        try {
            await Messages.deleteOne({_id:req.params.id})
            console.log('messages deleted')
            res.json('message deleted')
        } catch (err) {
            console.log(err)
        }
    },
}
