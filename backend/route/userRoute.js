import { Router } from "express";
import userController from "../controller/userController.js";
import userDataController from "../controller/userDataController.js";
import DeleteUser from "../controller/deleteUser.js";

const router=Router();

router.post("/add-user",userController);
router.get("/user-data",userDataController);

router.delete("/detete/:id",DeleteUser);

export default router;