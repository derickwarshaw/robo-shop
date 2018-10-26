"use strict";

const db = require("../server/db");
const {
  productData,
  userData,
  reviewData,
  sellerData,
  manufacturerData,
  categoryData,
  cartData,
  orderData,
  orderHistoryData
} = require("./seed-data");

const {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller,
  Cart,
  CartInventory,
  Order,
  OrderHistory
} = require("../server/db/models/index");

const shuffle = () => 0.5 - Math.random();

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const productPromise = Product.bulkCreate(productData, { returning: true });
  const userPromise = User.bulkCreate(userData, { returning: true });
  const reviewPromise = Review.bulkCreate(reviewData, { returning: true });
  const sellerPromise = Seller.bulkCreate(sellerData, { returning: true });
  const manufacturerPromise = Manufacturer.bulkCreate(manufacturerData, {
    returning: true
  });
  const categoryPromise = Category.bulkCreate(categoryData, {
    returning: true
  });
  const cartPromise = Cart.bulkCreate(cartData, { return: true });
  const orderPromise = Order.bulkCreate(orderData, { return: true });
  const orderHistoryPromise = OrderHistory.bulkCreate(orderHistoryData, {
    return: true
  });

  await Promise.all([
    productPromise,
    userPromise,
    reviewPromise,
    sellerPromise,
    manufacturerPromise,
    categoryPromise,
    cartPromise,
    orderPromise,
    orderHistoryPromise
  ]);

  await db.sync();

  const products = await Product.findAll();
  const categories = await Category.findAll();
  const users = await User.findAll();
  const sellers = await Seller.findAll();
  const reviews = await Review.findAll();
  const manufacturers = await Manufacturer.findAll();
  const carts = await Cart.findAll();
  const orders = await Order.findAll();
  const orderhistory = await OrderHistory.findAll();

  async function seedProducts() {
    for (let i = 0; i < products.length; i++) {
      const randomCategories = categories.sort(shuffle).slice(0, 2);
      const randomReviews = reviews.sort(shuffle).slice(0, 2);
      const randomSellers = sellers.sort(shuffle).slice(0, 2);
      const randomManufacturers = manufacturers.sort(shuffle).slice(0, 2);
      await products[i].setCategories(randomCategories);
      await products[i].setCategories(randomCategories);
      await products[i].setReviews(randomReviews);
      await products[i].setSeller(randomSellers[0]);
      await products[i].setManufacturer(randomManufacturers[0]);
    }
    return products;
  }

  await seedProducts();

  async function seedCart() {
    for (let i = 0; i < carts.length; i++) {
      await carts[i].setUser(users[0]);
      const randomProducts = products.sort(shuffle).slice(0, 4);
      for (let j = 0; j < randomProducts.length; j++) {
        await carts[i].setProduct(randomProducts[j]);
      }
    }
  }

  await seedCart();

  async function seedOrderHistory() {
    for (let i = 0; i < orders.length; i++) {
      await orders[i].setUser(users[0]);
      await orders[i].setOrderhistories(orderhistory.slice(i, i + 3));
    }
  }

  await seedOrderHistory();

  //random users for reviews
  await Promise.all(
    reviews.map(review => {
      const randomUsers = users.sort(shuffle).slice(0, 4);
      return review.setUser(randomUsers[0]);
    })
  );

  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
