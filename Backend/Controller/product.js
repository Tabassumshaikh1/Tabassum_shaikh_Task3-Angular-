const schema = require('../Model/Product')
async function postData(req,res){

const data = new schema({
    ...req.body
})
data.save()
res.send({err:'0',msg:"Product Added Successfully"})
}
async function GetData(req,res){
const data = await schema.find()
res.send(data)
    }
async function GetProdById(req,res){
const data = await schema.find({_id:req.body.id})
res.send(data)
}
async function UpdateProd (req,res){
    const data = await schema.findOneAndUpdate({ _id: req.body.id }, { $set: { ...req.body.data } })
    res.send({msg:'Product Is Updated Successfully'})
}
async function DeletProduct(req,res){
    const data = await schema.findOneAndDelete({ _id: req.body.id })
    res.send({msg:'Product Is Deleted Successfully'})
}
module.exports={postData, GetData , GetProdById,UpdateProd,DeletProduct}