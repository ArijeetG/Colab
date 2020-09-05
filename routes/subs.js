const express = require('express')
const router = express.Router()
const Client = require('mongoose')
const Sub = require('../models/sub')
//const { query } = require('express')
//const Editor = require('../views/subs/editor.ejs')
//add new subs

router.get('/meeting-room',(req,res)=>{
    console.log(req['query'])
   // console.log(req['params'])
    console.log(req.query)
   // var query = req.params.query
   var savedata = new Sub({query : req['query']})
    savedata.save().then(doc => {
        console.log(doc)
    }).catch(err=>{
        console.log(err)
    })
    res.render('subs/editor')
})


//check
router.get('/meeting-room/join', (req,res)=>{
    
    res.render('subs/editor')
})

module.exports = router