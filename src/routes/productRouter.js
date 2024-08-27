const express = require("express")
const productModel = require("../model/productModel")

const productRouter = express.Router()

productRouter.get('/products',async(req,res)=>{
    try {
        const allProducts = await productModel.find()
        res.send(allProducts)
    } catch (error) {
        res.send(error)
    }
})

productRouter.get('/products/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const selectedProducts = await productModel.findById(id)
        res.send(selectedProducts)
    } catch (error) {
        res.send(error)
    }
})

productRouter.post('/post-product',async(req,res)=>{
    const {name,brand,desc,image,price} = req.body
    try {
        const newProduct = new productModel({name,brand,desc,image,price})
        await newProduct.save()
        res.send(newProduct)
    } catch (error) {
        res.send(error)
    }
})


productRouter.put('/product/:id',async(req,res)=>{
    const id = req.params.id
    const {name,brand,desc,image,price} = req.body
    try {
        await productModel.findByIdAndUpdate(id,{name,brand,desc,image,price})
        res.send({message:"product updated successfully"})
    } catch (error) {
        res.send(error)
    }
})

productRouter.delete('/product/:id',async(req,res)=>{
    const id = req.params.id
    try {
        await productModel.findByIdAndDelete(id)
        res.send({message:"product deleted successfully"})
    } catch (error) {
        res.send(error)
    }
})



module.exports = productRouter