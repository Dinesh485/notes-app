const router = require('express').Router()
const passport = require('passport')
const List = require('../models/list')
const {v4 } = require('uuid')

router.get('/list', passport.authenticate('jwt', {session:false}) ,async(req,res) =>{
   if(req.user){
       const list = await List.findById(req.user.list)
       return res.send(list.items)
   }
} )

router.post('/list/add', passport.authenticate('jwt', {session:false}), async(req, res) =>{
    if(req.user){
       const item = {
          id: v4(),
           createdAt: Date.now(),
          ...req.body
       }
      return  List.findOneAndUpdate({_id: req.user.list}, { '$push': {items:  { $each: [item], $position: 0 }}}, {new: true}).then((list) =>{
           
             res.send({success: true  , items: list.items})
        })

    }
})

router.post('/list/delete', passport.authenticate('jwt', {session:false}), async(req,res) =>{
     
      if(req.user){
           const itemid = req.body.id
            
           List.findOneAndUpdate({_id: req.user.list}, {'$pull': {items: {id: itemid}}}, {new:true}).then((list) =>{
               res.send({success: true, items: list.items})
           })



      }


})
router.post('/list/update', passport.authenticate('jwt', {session:false}), async(req,res) =>{
     
      if(req.user){
           const updatedItem = req.body
           
           List.findOneAndUpdate({_id: req.user.list, "items.id": updatedItem.id}, {$set : {"items.$.title" : updatedItem.title, "items.$.content": updatedItem.content, "items.$.lastEdited": Date.now}}, {new: true}).then((list) =>{
            res.send({success: true, items:list.items})
        })



      }


})

module.exports = router