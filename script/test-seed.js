const { Product, Category } = require("../server/db/models");
const db = require("../server/db");

module.exports = async () => {
  await db.sync({ force: true });

  const [category1, category2] = await Promise.all([
    Category.create({
      name: "Electronics",
      imageUrl: "/images/alien-robot.png"
    }),
    Category.create({
      name: "Computers",
      imageUrl: "/images/battle-droid.png"
    })
  ]);

  const [product1, product2, product3] = await Promise.all([
    Product.create({
      name: "Philippine",
      price: 39,
      description:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      imageUrl: "/images/robo-1.png",
      inventory: 1
    }),
    Product.create({
      name: "Noble",
      price: 60,
      description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      imageUrl: "/images/robo-2.png",
      inventory: 8
    }),
    Product.create({
      name: "Viva",
      price: 16,
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      imageUrl: "/images/robo-3.png",
      inventory: 7
    })
  ]);

  await product1.setCategories([1, 2]);
  await product2.setCategories([1]);
  await product3.setCategories([2]);

  return [category1, category2, product1, product2, product3];
};
