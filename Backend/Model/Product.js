const mangoose = require('mongoose');

const Product = (
    new mangoose.Schema({
        pname: {
            type: String,
            required:true
        },
        imgurl: {
            type:String,
            required:true,
       
            
        },
        prodprice:{
            type:Number,
            required:true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
         updatedAt: {
             type: Date,
            default: Date.now,
        },
       
    })
)
module.exports = mangoose.model("Products",Product);
