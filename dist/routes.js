"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const DeleteProductController_1 = require("./controllers/product/DeleteProductController");
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// !User Routes
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/userInfo", isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// !Category Routes
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get("/category", isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
// !Products Routes
router.post("/product", isAuthenticated_1.isAuthenticated, upload.single("file"), new CreateProductController_1.CreateProductController().handle);
router.get("/category/product", isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
router.delete("/product/remove", isAuthenticated_1.isAuthenticated, new DeleteProductController_1.DeleteProductController().handle);
// !Order Routes
router.post("/order", isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete("/order", isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post("/order/add", isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
router.delete("/order/remove", isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
router.put("/order/send", isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get("/orders", isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrdersController().handle);
router.get("/order/detail", isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
router.put("/order/finish", isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
