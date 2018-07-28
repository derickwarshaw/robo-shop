const router = require('express').Router()
const {Cart, Product} = require('../../db/models')

module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const cart = await Cart.findAll({
      where: {
        userId
      },
      include: [Product]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const {userId} = req.body
    const [cart] = await Cart.findOrCreate({
      where: {
        userId,
        productId
      }
    })
    res.status(200).send(cart)
  } catch (err) {
    next(err)
  }
})
