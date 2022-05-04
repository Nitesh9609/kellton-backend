// API Routes


const express = require('express')
const router = express.Router()
const Controller =require('../controller/controller')

router.get('/',Controller.showIndex) 

router.post('/add-products',Controller.addProducts)

module.exports = router