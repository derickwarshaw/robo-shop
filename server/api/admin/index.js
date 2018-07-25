const router = require('express').Router()
const {Product} = require('../../db/models')
module.exports = router

router.post('/products', async (req, res, next) => {
  try {
    const {name, price, description, image, categoryId} = req.body
    const product = await Product.create({
      name,
      price,
      description,
      image
    })
    product.setCategories(categoryId)
    res.status(200).send(product)
  } catch (err) {
    next(err)
  }
})

router.put('/products/edit/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Product.findById(id)
    const updateProduct = await product.update(req.body)
    res.status(200).send(updateProduct)
  } catch (err) {
    next(err)
  }
})
