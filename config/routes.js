const express = require("express");
const router = express.Router();
const controllers = require("../app/controllers");

router.post("/superadmin/login", controllers.api.v1.superAdminController.login);
router.get("/superadmin/listSuperAdmin", controllers.api.v1.authController.superAdminAuthorize, controllers.api.v1.superAdminController.listUsers);//hanya bisa diakses menggunakan token superadmin
router.get("/admin/listAdmin", controllers.api.v1.authController.superAdminAuthorize, controllers.api.v1.adminController.listUsers);//hanya bisa diakses menggunakan token superadmin
router.get("/member/listMember", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.memberController.listUsers);//hanya bisa diakses menggunakan token admin dan superadmin
router.post("/superadmin/admin/add", controllers.api.v1.authController.superAdminAuthorize, controllers.api.v1.adminController.createAdmin);//hanya bisa diakses menggunakan token superadmin
router.post("/admin/login", controllers.api.v1.adminController.login);//login menggunakan email dan password admin yang sudah ditambahkan
router.post("/member/add", controllers.api.v1.memberController.createMember);
router.post("/member/login", controllers.api.v1.memberController.login);//login menggunakan email dan password member yang sudah ditambahkan
router.get("/cars", controllers.api.v1.carController.listCar);//dapat diakses oleh semua user
router.get("/cars/:id", controllers.api.v1.carController.getById);//dapat diakses oleh semua user
router.post("/cars", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.carController.createCar);//hanya bisa diakses menggunakan token admin dan superadmin
router.put("/cars/:id", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.carController.updateCar);//hanya bisa diakses menggunakan token admin dan superadmin
router.delete("/cars/:id", controllers.api.v1.authController.adminsAuthorize, controllers.api.v1.carController.deleteCar);//hanya bisa diakses menggunakan token admin dan superadmin
router.get("/user", controllers.api.v1.authController.authorize, controllers.api.v1.authController.whoAmI);//menggunakan token yang didapat saat login

router.use(controllers.api.main.onError);
router.use(controllers.api.main.onLost);
module.exports = router;