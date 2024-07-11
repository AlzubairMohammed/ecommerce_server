const router = require("express").Router();
const { productsValidator } = require("../validations/products");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
router.get("/", productsValidator(), getProducts);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product description by id
 *         contens:
 *           application/json:
 *       404:
 *         description: The product was not found
 */

router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
