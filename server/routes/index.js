const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");
const deliveryAddressController = require("../controllers/delivery_address");
const restaurantController = require("../controllers/restaurants");
const menuController = require("../controllers/menu");
const menuItemController = require("../controllers/menu_items");
const orderController = require("../controllers/orders");
const orderItemController = require("../controllers/order_items");
const paymentController = require("../controllers/payments");

router.post("/users", userController.createUser);
router.get("/users", userController.getUser);
router.post("/delivery_addresses", deliveryAddressController.saveAddress);
router.get("/delivery_addresses", deliveryAddressController.getAddresses);
router.post("/restaurants", restaurantController.createRestaurant);
router.get("/restaurants", restaurantController.getRestaurants);
router.post("/menu_items", menuItemController.createMenuItem);
router.get("/menu_items", menuItemController.getMenuItems);
router.post("/menu", menuController.addMenuItemToRestaurant);
router.get("/menu", menuController.getRestaurantMenu);
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrders);
router.get("/order_items", orderItemController.getOrderItems);
router.post("/payments", paymentController.createPayment);
router.get("/payments", paymentController.getPayments);

module.exports = router;
