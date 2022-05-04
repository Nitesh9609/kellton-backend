const ProductsModel = require('../model/post_model')

exports.showIndex =(req,res) =>{
    res.send("running node api")
}

exports.addProducts = (req,res) =>{
    const post = new ProductsModel({
        id:req.body.id,
        title:req.body.title,
        routeName:req.body.routeName,
        items:req.body.items
    })

    post.save()
    .then(data => {res.send(data)})
    .catch(err => {res.send(err)})
}