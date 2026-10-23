import { Router } from "express";
import userController from "../controller/userController.js";
import userDataController from "../controller/userDataController.js";

const router=Router();

router.post("/add-user",userController);
router.get("/user-data",userDataController);

export default router;