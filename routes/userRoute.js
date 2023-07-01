const express = require('express')
const router = express.Router()
const User = require('../models/userSchema')


router.post('/createUser' , async ( req ,res , ) => {
    try {
        
    const {name , password} = req.body
    const user = await User.create({name , password})

    res.status(200).json('Wait we are redirecting you!!')
    } catch (error) {
    res.status(500).json(error)
    }
})

module.exports = router