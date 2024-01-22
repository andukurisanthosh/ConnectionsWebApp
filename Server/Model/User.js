const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
})

const Users = new mongoose.model('Users', userSchema)

module.exports=Users;