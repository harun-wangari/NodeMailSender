const route = require('express').Router()
const controller = require('../controller/mailController')

route.use('/', (req,res,next) => {
    next()
})

route.get('/sendMail',controller.sendMail)

module.exports = route